import { TransactionBlock } from "@mysten/sui.js/transactions";
import { RefundManagerSingleton, SUI_DENOMINATOR } from "../../src";
import { keypair, provider, signAndExecuteTransaction } from "../common";
import { delegateeKeypair, delegateeUser } from "../dca/common";
import BigNumber from "bignumber.js";
import { readDataFromJsonFile } from "../utils";
import { splitBy } from "../../src/providers/utils/splitBy";

// yarn ts-node examples/refund/add-addresses.ts
export const addAddresses = async ({
  affectedAddressesAndAmounts,
}: {
  affectedAddressesAndAmounts: { affectedAddress: string; amount: string }[];
}) => {
  const poolID = RefundManagerSingleton.REFUND_POOL_OBJECT_ID;
  const publisherID = RefundManagerSingleton.REFUND_POOL_PUBLISHER_OBJECT_ID;

  const CHUNK_SIZE = 500;
  const affectedAddressesAndAmuntsChunks = splitBy(affectedAddressesAndAmounts, CHUNK_SIZE);

  for (const affectedAddressesAndAmuntsChunk of affectedAddressesAndAmuntsChunks) {
    const addresses: string[] = affectedAddressesAndAmuntsChunk.map((el) => el.affectedAddress);
    const amounts: string[] = affectedAddressesAndAmuntsChunk.map((el) => el.amount);

    const { tx, txRes } = RefundManagerSingleton.getAddAddressesTransaction({
      publisherObjectId: publisherID,
      poolObjectId: poolID,
      addressesList: addresses,
      amountsList: amounts,
      transaction: new TransactionBlock(),
    });

    const res = await provider.devInspectTransactionBlock({
      transactionBlock: tx,
      sender: delegateeUser,
    });

    // const res = await signAndExecuteTransaction(tx, delegateeKeypair);

    // Assuming you want to do something with the result or just log it for now
    console.log("tx sending result: ", res);
  }

  // console.debug("addresses[0], amounts[0]", addresses[0], amounts[0]);
  // console.debug("addresses[124], amounts[124]", addresses[124], amounts[124]);
};

(async () => {
  const FILE_NAME = "refund-contract-affected-addresses-and-amounts-list-prod";
  const affectedAddressesAndAmounts = await readDataFromJsonFile(FILE_NAME);

  if (!affectedAddressesAndAmounts) {
    throw new Error("Error during reading files with addresses and amounts");
  }

  if (!Array.isArray(affectedAddressesAndAmounts)) {
    throw new Error("Wrong format of file (not an array)");
  }

  if (!isItemListFormat(affectedAddressesAndAmounts)) {
    throw new Error("Wrong shape of data for affected addresses list");
  }

  const addresses: string[] = affectedAddressesAndAmounts.map((el) => el.affectedAddress);
  const amounts: string[] = affectedAddressesAndAmounts.map((el) => el.amount);

  if (addresses.length !== amounts.length) {
    throw new Error("Addresses and amounts list length is not equal to each other");
  }

  const baseAmountInMist = amounts
    .reduce((acc: BigNumber, el) => acc.plus(new BigNumber(el)), new BigNumber(0))
    .toString();
  const baseAmountInSui = new BigNumber(baseAmountInMist).div(SUI_DENOMINATOR).toString();

  const boostedAmountInMist = new BigNumber(baseAmountInMist).div(2).toString();
  const boostedAmountInSui = new BigNumber(boostedAmountInMist).div(SUI_DENOMINATOR).toString();

  const totalAmountInMist = new BigNumber(baseAmountInMist).plus(boostedAmountInMist).toString();
  const totalAmountInSui = new BigNumber(totalAmountInMist).div(SUI_DENOMINATOR).toString();

  console.log("BASE AMOUNT FOR ALL WALLETS (MIST): ", baseAmountInMist);
  console.log("BASE AMOUNT FOR ALL WALLETS (SUI): ", baseAmountInSui);
  console.log("BOOSTED AMOUNT FOR ALL WALLETS (MIST): ", boostedAmountInMist);
  console.log("BOOSTED AMOUNT FOR ALL WALLETS (SUI): ", boostedAmountInSui);
  console.log("TOTAL AMOUNT FOR ALL WALLETS (MIST): ", totalAmountInMist);
  console.log("TOTAL AMOUNT FOR ALL WALLETS (SUI): ", totalAmountInSui);

  addAddresses({ affectedAddressesAndAmounts });
})();

interface Item {
  affectedAddress: string;
  amount: string;
}

// eslint-disable-next-line require-jsdoc
export function isItemListFormat(obj: unknown): obj is Item[] {
  if (!Array.isArray(obj)) return false;

  for (const item of obj) {
    if (
      typeof item !== "object" ||
      item === null ||
      typeof item.affectedAddress !== "string" ||
      typeof item.amount !== "string"
    ) {
      return false;
    }
  }

  return true;
}
