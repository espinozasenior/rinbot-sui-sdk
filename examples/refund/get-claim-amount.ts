import { RefundManagerSingleton } from "../../src";
import { suiProviderUrl, user } from "../common";

// yarn ts-node examples/refund/get-claim-amount.ts
(async () => {
  const refundManager = RefundManagerSingleton.getInstance(suiProviderUrl);

  const result = await refundManager.getClaimAmount({
    poolObjectId: RefundManagerSingleton.REFUND_POOL_OBJECT_ID,
    affectedAddress: user,
  });

  console.debug("result: ", result);
})();
