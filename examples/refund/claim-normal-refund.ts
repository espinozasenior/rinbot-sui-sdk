import { RefundManagerSingleton } from "../../src";
import { keypair, provider, signAndExecuteTransaction, suiProviderUrl, user } from "../common";

// yarn ts-node examples/refund/claim-normal-refund.ts
(async () => {
  const refundManager = RefundManagerSingleton.getInstance(suiProviderUrl);

  const amount = await refundManager.getClaimAmount({
    poolObjectId: RefundManagerSingleton.REFUND_POOL_OBJECT_ID,
    affectedAddress: user,
  });

  console.debug("amount: ", amount);

  const txData = RefundManagerSingleton.getClaimRefundTransaction({
    poolObjectId: RefundManagerSingleton.REFUND_POOL_OBJECT_ID,
  });

  //   const res = await provider.devInspectTransactionBlock({
  //     sender: user,
  //     transactionBlock: txData.tx,
  //   });

  const res = await signAndExecuteTransaction(txData.tx, keypair);

  console.debug("res: ", res);
})();
