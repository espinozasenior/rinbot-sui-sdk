import { RefundManagerSingleton } from "../../src/managers/refund/RefundManager";
import { suiProviderUrl, user } from "../common";

// yarn ts-node examples/refund/get-boosted-claim-cap.ts
(async () => {
  const refundManager = RefundManagerSingleton.getInstance(suiProviderUrl);

  const boostedClaimCap = await refundManager.getBoostedClaimCap({
    ownerAddress: "0xadae014d41a1aada7003921d741061f9ff42700a470a043f998ddf0c2dd64994",
    newAddress: "0xadae014d41a1aada7003921d741061f9ff42700a470a043f998ddf0c2dd64994",
  });
  console.debug("boostedClaimCap: ", boostedClaimCap);
})();
