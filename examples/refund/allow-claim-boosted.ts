import { RefundManagerSingleton } from "../../src";
import { provider, signAndExecuteTransaction, suiProviderUrl, user } from "../common";
import { delegateeKeypair, delegateeUser } from "../dca/common";

// yarn ts-node examples/refund/allow-claim-boosted.ts
(async () => {
  const txData = RefundManagerSingleton.getAllowBoostedClaim({
    publisherObjectId: RefundManagerSingleton.REFUND_POOL_PUBLISHER_OBJECT_ID,
    affectedAddress: "",
    newAddress: "",
    poolObjectId: RefundManagerSingleton.REFUND_POOL_OBJECT_ID,
  });

  const res = await provider.devInspectTransactionBlock({
    sender: delegateeUser,
    transactionBlock: txData.tx,
  });

  // const res = await signAndExecuteTransaction(txData.tx, delegateeKeypair);

  console.debug("res: ", res);
})();
