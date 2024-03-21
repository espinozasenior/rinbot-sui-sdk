import { RefundManagerSingleton } from "../../src";
import { suiProviderUrl } from "../common";

// yarn ts-node examples/refund/get-current-refund-phase.ts
(async () => {
  const refundManager = RefundManagerSingleton.getInstance(suiProviderUrl);

  const result = await refundManager.getCurrentRefundPhase({
    poolObjectId: RefundManagerSingleton.REFUND_POOL_OBJECT_ID,
  });

  console.debug("result: ", result);
})();
