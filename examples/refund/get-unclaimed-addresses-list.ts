import { RefundManagerSingleton } from "../../src";
import { suiProviderUrl } from "../common";

// yarn ts-node examples/refund/get-unclaimed-addresses-list.ts
(async () => {
  const refundManager = RefundManagerSingleton.getInstance(suiProviderUrl);

  const result = await refundManager.getUnclaimedAddressesList({
    poolObjectId: RefundManagerSingleton.REFUND_POOL_OBJECT_ID,
  });

  console.debug("result: ", result);
})();
