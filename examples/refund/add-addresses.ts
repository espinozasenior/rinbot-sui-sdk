import { TransactionBlock } from "@mysten/sui.js/transactions";
import { RefundManagerSingleton, SUI_DENOMINATOR } from "../../src";
import { keypair, provider, signAndExecuteTransaction } from "../common";
import { delegateeKeypair, delegateeUser } from "../dca/common";
import BigNumber from "bignumber.js";
import { readDataFromJsonFile } from "../utils";

// yarn ts-node examples/refund/add-addresses.ts
export const addAddresses = async ({ addresses, amounts }: { addresses: string[]; amounts: string[] }) => {
  const poolID = RefundManagerSingleton.REFUND_POOL_OBJECT_ID;
  const publisherID = RefundManagerSingleton.REFUND_POOL_PUBLISHER_OBJECT_ID;

  const { tx, txRes } = RefundManagerSingleton.getAddAddressesTransaction({
    publisherObjectId: publisherID,
    poolObjectId: poolID,
    addressesList: addresses,
    amountsList: amounts,
    transaction: new TransactionBlock(),
  });

  // const res = await provider.devInspectTransactionBlock({
  //   transactionBlock: tx,
  //   sender: delegateeUser,
  // });

  const res = await signAndExecuteTransaction(tx, delegateeKeypair);

  // Assuming you want to do something with the result or just log it for now
  console.log(res);
};

(async () => {
  const FILE_NAME = "refund-contract-affected-addresses-and-amounts-list";
  const affectedAddressesAndAmounts = await readDataFromJsonFile(FILE_NAME);

  if (!affectedAddressesAndAmounts) {
    throw new Error("Error during reading files with addresses and amounts");
  }

  if (!Array.isArray(affectedAddressesAndAmounts)) {
    throw new Error("Wrong format of file (not an array)");
  }

  const addresses: string[] = affectedAddressesAndAmounts.map((el) => el.affectedAddress);
  const amounts: string[] = affectedAddressesAndAmounts.map((el) => el.amount);

  const totalAmountInMist = amounts
    .reduce((acc: BigNumber, el) => acc.plus(new BigNumber(el)), new BigNumber(0))
    .toString();

  const totalAmountInSui = new BigNumber(totalAmountInMist).div(SUI_DENOMINATOR).toString();

  console.log("AMOUNT IN TOTAL (MIST): ", totalAmountInMist);
  console.log("AMOUNT IN TOTAL (SUI): ", totalAmountInSui);

  addAddresses({ addresses: addresses, amounts: amounts });
})();
