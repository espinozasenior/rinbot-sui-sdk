import { RefundManagerSingleton, TransactionBlock } from "../../src";
import { keypair, signAndExecuteTransaction } from "../common";
import { delegateeKeypair } from "../dca/common";

// yarn ts-node examples/refund/fund.ts
(async () => {
  const packageId = RefundManagerSingleton.REFUND_PACKAGE_ADDRESS;
  const poolObjectId = RefundManagerSingleton.REFUND_POOL_OBJECT_ID;

  const txb = new TransactionBlock();

  const [coinA, coinB] = txb.splitCoins(txb.gas, [txb.pure(108572810, "u64"), txb.pure(54286405, "u64")]);

  txb.moveCall({
    target: `${packageId}::refund::fund`,
    arguments: [txb.object(poolObjectId), coinA],
  });

  txb.moveCall({
    target: `${packageId}::booster::fund`,
    arguments: [txb.object(poolObjectId), coinB],
  });

  const res = await signAndExecuteTransaction(txb, delegateeKeypair);

  // const res = await provider.devInspectTransactionBlock({
  //   sender: "0x935fd79d69b98dc87cd43d4112e621fe92967c7f33fa232ddf4f6351bb1b9a19",
  //   transactionBlock: txb,
  // });

  // console.debug("result: ", fundingPhaseTxAndRes);
  console.debug("res: ", res);
})();
