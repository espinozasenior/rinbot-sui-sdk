import { RefundManagerSingleton } from "../../src/managers/refund/RefundManager";
import { suiProviderUrl, user } from "../common";

// yarn ts-node examples/refund/get-boosted-claim-cap.ts
(async () => {
  const refundManager = RefundManagerSingleton.getInstance(suiProviderUrl);

  const boostedClaimCap = await refundManager.getBoostedClaimCap({
    ownerAddress: "0xadae014d41a1aada7003921d741061f9ff42700a470a043f998ddf0c2dd64994",
    newAddress: "0x6104acdbd394d08ba97376747f286cd90e5ff2a9d445f1bf64405802bd711d89",
  });
  console.debug("boostedClaimCap: ", boostedClaimCap);
})();
