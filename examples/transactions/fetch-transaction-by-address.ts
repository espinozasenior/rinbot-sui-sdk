import { GasCostSummary, SuiTransactionBlockResponse } from "@mysten/sui.js/client";
import { saveDataToJsonFile } from "../utils";
import BigNumber from "bignumber.js";
import { SUI_DENOMINATOR } from "../../src";

const MAX_TX_PER_CALL_LIMIT = 50;
const TARGET_ADDRESS = "0x444ea5358d83d13c837e2dc7d4caa563cb764f514a86999cf5330abc2f4ca466";

interface Transaction {
  kind: string;
  inputs: Input[];
  transactions: TransactionDetail[];
}

interface Input {
  type: string;
  valueType: string;
  value: string;
}

interface TransactionDetail {
  SplitCoins?: [string, { Input: number }[]];
  TransferObjects?: [{ Result: number }[], { Input: number }];
}

/**
 * Validates the structure of a transaction.
 * @param {unknown} data The transaction data to validate.
 * @return {boolean} Returns true if the data is valid, otherwise false.
 */
function validateTransaction(data: unknown): boolean {
  if (typeof data !== "object" || data === null) {
    return false;
  }

  const transaction = data as Transaction;

  return (
    transaction.kind === "ProgrammableTransaction" &&
    Array.isArray(transaction.inputs) &&
    transaction.inputs.every(
      (input) =>
        typeof input === "object" &&
        input !== null &&
        input.type === "pure" &&
        (input.valueType === "u64" || input.valueType === "address") &&
        typeof input.value === "string",
    )
  );
}

/**
 * Checks if the specified address is present in the inputs array of the transaction data.
 * @param {unknown} data The transaction data.
 * @param {string} address The address to check for presence.
 * @return {boolean} Returns true if the address is present, otherwise false.
 */
function checkAddressPresence(data: unknown, address: string): boolean {
  if (typeof data !== "object" || data === null) {
    return false;
  }

  const transaction = data as Transaction;

  return transaction.inputs.some((input) => input.valueType === "address" && input.value === address);
}

/**
 * Checks if the 'sender' field is unique across all objects.
 * @param {Record<string, { sender: string, digest: string, amount: string }>} obj The object to check.
 */
function checkSenderUniqueness(obj: Record<string, { sender: string; digest: string; amount: string }>) {
  const sendersSet = new Set<string>();

  Object.keys(obj).forEach((key) => {
    const sender = obj[key].sender;
    const digest = obj[key].digest;
    if (sendersSet.has(sender)) {
      console.log(`Duplicate sender found: ${sender}, digest: ${digest}`);
    } else {
      sendersSet.add(sender);
    }
  });
}

/**
 * Checks that sender of transaction is not target address
 * @param {string} sender The sender of transaction
 * @return {boolean}
 */
function checkThatSenderIsTargetAddress(sender: string): boolean {
  return sender === TARGET_ADDRESS;
}

/**
 * Checks if a transaction has a success status based on the status in the given transaction block response.
 * @param {SuiTransactionBlockResponse} transaction The transaction block response to check.
 * @return {boolean} Returns true if the transaction has a success status, otherwise false.
 */
function checkIsTransactionHasSuccessStatus(transaction: SuiTransactionBlockResponse): boolean {
  return transaction.effects?.status.status === "success";
}

/**
 * Calculates the total amount of funds collected by summing the 'amount' values in the given object.
 * @param {Record<string, { sender: string, digest: string, amount: string }>} obj
 * The object containing the transactions.
 * @return {BigNumber} The total amount of funds collected.
 */
function calculateTotalFunds(obj: Record<string, { sender: string; digest: string; amount: string }>): BigNumber {
  let totalAmount = new BigNumber(0);

  Object.values(obj).forEach((transaction) => {
    totalAmount = totalAmount.plus(new BigNumber(transaction.amount));
  });

  return totalAmount;
}

interface ValidationResult {
  isValid: boolean;
  senderAmountExcludingGas?: BigNumber;
  senderAmountIncludingGas?: BigNumber;
}

/**
 * Validates balance changes and returns the sender's amount excluding and including gas if valid.
 * @param {unknown} obj The object to validate.
 * @param {string} sender The sender's address.
 * @param {string} target The target's address.
 * @param {BigNumber} totalGasFee The total gas fee.
 * @return {ValidationResult} Returns an object containing a boolean indicating whether the balance changes are valid,
 * the sender's amount excluding gas, and the sender's amount including gas if valid.
 */
function validateBalanceChanges(
  obj: unknown,
  sender: string,
  target: string,
  totalGasFee: BigNumber,
): ValidationResult {
  if (typeof obj !== "object" || obj === null) {
    return { isValid: false };
  }

  if (!("balanceChanges" in obj)) {
    return { isValid: false };
  }

  const balanceChanges = obj["balanceChanges"] as unknown[];
  if (!Array.isArray(balanceChanges) || balanceChanges.length !== 2) {
    return { isValid: false };
  }

  const firstChange = balanceChanges[0] as { owner: { AddressOwner: string }; coinType: string; amount: string };
  const secondChange = balanceChanges[1] as { owner: { AddressOwner: string }; coinType: string; amount: string };

  // Check that both amounts are in SUI
  if (firstChange.coinType !== "0x2::sui::SUI" || secondChange.coinType !== "0x2::sui::SUI") {
    return { isValid: false };
  }

  // Finding sender and target
  const senderChange =
    sender === firstChange.owner.AddressOwner
      ? firstChange
      : sender === secondChange.owner.AddressOwner
        ? secondChange
        : null;

  const targetChange =
    target === firstChange.owner.AddressOwner
      ? firstChange
      : target === secondChange.owner.AddressOwner
        ? secondChange
        : null;

  if (senderChange === null || targetChange === null) {
    return { isValid: false };
  }

  // Check if the sender has a negative amount and the target has a positive amount
  if (new BigNumber(senderChange.amount).isPositive() || new BigNumber(targetChange.amount).isNegative()) {
    return { isValid: false };
  }

  const senderAmount = new BigNumber(senderChange.amount);
  const targetAmount = new BigNumber(targetChange.amount);

  // Check that amounts are equal by absolute value
  if (!senderAmount.absoluteValue().minus(totalGasFee).isEqualTo(targetAmount.absoluteValue())) {
    return { isValid: false };
  }

  // Check if the sender's address matches the sender of the senderChange
  if (senderChange.owner.AddressOwner !== sender) {
    return { isValid: false };
  }

  // Check if the target's address matches the sender of the targetChange
  if (targetChange.owner.AddressOwner !== target) {
    return { isValid: false };
  }

  const senderAmountExcludingGas = senderAmount.absoluteValue().minus(totalGasFee);
  const senderAmountIncludingGas = senderAmount.absoluteValue();

  return { isValid: true, senderAmountExcludingGas, senderAmountIncludingGas };
}

// yarn ts-node examples/transactions/fetch-transaction-by-address.ts > fetch-txs-to-romas-address.txt 2>&1
export const fetchTransactions = async ({
  url,
  requestBody,
}: {
  url: string;
  requestBody: { jsonrpc: string; id: string; method: string; params: unknown[] };
}) => {
  let hasNextPage = true;
  const senderAndAmountObj: {
    [sender: string]: { sender: string; digest: string; amount: string; timestampMs: string };
  } = {};

  while (hasNextPage) {
    // eslint-disable-next-line no-await-in-loop
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    // eslint-disable-next-line no-await-in-loop
    const data = await response.json();
    const txData: SuiTransactionBlockResponse[] = data.result.data;

    // Process each transaction digest
    // eslint-disable-next-line no-restricted-syntax
    for (const transaction of txData) {
      if (!transaction.transaction) {
        throw new Error("Empty outer transaction");
      }

      if (!transaction.transaction.data.sender) {
        throw new Error("Empty sender");
      }

      if (!transaction.balanceChanges) {
        throw new Error("Empty balanceChanges");
      }

      if (!transaction.transaction?.data.transaction) {
        throw new Error("Empty inner transaction");
      }

      if (!transaction.effects) {
        throw new Error("Empty transaction effects");
      }

      if (!transaction.timestampMs) {
        throw new Error("No timestamp for tx present");
      }

      const isSuccessfulTransaction = checkIsTransactionHasSuccessStatus(transaction);
      if (!isSuccessfulTransaction) {
        console.log(transaction.digest, "isFailedTransaction");
        continue;
      }

      const isSenderIsTargetAddress = checkThatSenderIsTargetAddress(transaction.transaction.data.sender);
      if (isSenderIsTargetAddress) {
        console.log(transaction.digest, "isSenderIsTargetAddress");
        continue;
      }

      const isTransactionValid = validateTransaction(transaction.transaction.data.transaction);
      if (!isTransactionValid) {
        console.log(transaction.digest, "isTransactionValid");

        continue;
      }

      const isTransactionIsSendSuiToTargetAddress = checkAddressPresence(
        transaction.transaction.data.transaction,
        TARGET_ADDRESS,
      );
      if (!isTransactionIsSendSuiToTargetAddress) {
        console.log(transaction.digest, "isTransactionIsSendSuiToTargetAddress");

        continue;
      }

      const { computationCost, storageCost, storageRebate }: GasCostSummary = transaction.effects.gasUsed;
      const totalGasFee = new BigNumber(computationCost).plus(storageCost).minus(storageRebate);

      const { isValid: isBalanceChangesIsValid, senderAmountExcludingGas } = validateBalanceChanges(
        transaction,
        transaction.transaction.data.sender,
        TARGET_ADDRESS,
        totalGasFee,
      );
      if (!isBalanceChangesIsValid) {
        console.log(transaction.digest, "isBalanceChangesIsValid");

        continue;
      }

      const valueAmount = senderAmountExcludingGas?.toString();
      if (!valueAmount) {
        console.log(transaction.digest, "valueAmount");
        continue;
      }

      const digest = transaction.digest;
      const sender = transaction.transaction.data.sender;
      const amount = valueAmount;
      const timestampMs = transaction.timestampMs;

      senderAndAmountObj[digest] = { sender, digest, amount, timestampMs };
    }

    hasNextPage = data.result.hasNextPage;

    if (hasNextPage) {
      const { nextCursor } = data.result;
      requestBody.params[1] = nextCursor; // Update the request with the nextCursor value
    }
  }

  checkSenderUniqueness(senderAndAmountObj);

  const totalFunds = calculateTotalFunds(senderAndAmountObj);
  console.log("Total funds collected (raw, in MIST): ", totalFunds.toString());
  console.log("Total funds collected (in SUI): ", totalFunds.div(SUI_DENOMINATOR).toString());

  saveDataToJsonFile(senderAndAmountObj, "fetched-txs-to-romas-address");

  return "Finished retrieving transactions.";
};

const fetchTransactionsByAddress = async () => {
  const url = "https://mainnet.suiet.app";
  const requestBody = {
    jsonrpc: "2.0",
    id: "2",
    method: "suix_queryTransactionBlocks",
    params: [
      {
        filter: { ToAddress: TARGET_ADDRESS },
        options: { showBalanceChanges: true, showEffects: true, showEvents: true, showInput: true },
      },
      null,
      MAX_TX_PER_CALL_LIMIT,
      true,
    ],
  };

  try {
    await fetchTransactions({ url, requestBody });
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error:", error.message);
    } else {
      console.error("Error:", error);
    }
  }
};

fetchTransactionsByAddress();
