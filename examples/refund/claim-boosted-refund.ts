import { RefundManagerSingleton } from "../../src";
import { provider, suiProviderUrl, user } from "../common";

// yarn ts-node examples/refund/claim-boosted-refund.ts
(async () => {
  const refundManager = RefundManagerSingleton.getInstance(suiProviderUrl);

  const amount = await refundManager.getClaimAmount({
    poolObjectId: RefundManagerSingleton.REFUND_POOL_OBJECT_ID,
    affectedAddress: user,
  });
  console.debug("amount: ", amount);

  const boostedClaimCap = await refundManager.getBoostedClaimCap({ ownerAddress: user });
  console.debug("boostedClaimCap: ", boostedClaimCap);

  const txData = RefundManagerSingleton.getClaimRefundBoostedTransaction({
    poolObjectId: RefundManagerSingleton.REFUND_POOL_OBJECT_ID,
    boostedClaimCap: boostedClaimCap,
  });

  const res = await provider.devInspectTransactionBlock({
    sender: user,
    transactionBlock: txData.tx,
  });

  // const res = await signAndExecuteTransaction(fundingPhaseTxAndRes.tx, keypair);

  console.debug("res: ", res);
})();
