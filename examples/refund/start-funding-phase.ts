import { SUI_CLOCK_OBJECT_ID } from "@mysten/sui.js/utils";
import { RefundManagerSingleton } from "../../src";
import { keypair, signAndExecuteTransaction } from "../common";

// yarn ts-node examples/refund/start-funding-phase.ts
(async () => {
  const fundingPhaseTxAndRes = RefundManagerSingleton.startFundingPhase({
    publisherObjectId: RefundManagerSingleton.REFUND_POOL_PUBLISHER_OBJECT_ID,
    poolObjectId: RefundManagerSingleton.REFUND_POOL_OBJECT_ID,
    timeoutMilliseconds: 1711037809000, // Needs to be timestamp in milliseconds
    clock: SUI_CLOCK_OBJECT_ID,
  });

  const res = await signAndExecuteTransaction(fundingPhaseTxAndRes.tx, keypair);

  // const res = await provider.devInspectTransactionBlock({
  //   sender: "0x935fd79d69b98dc87cd43d4112e621fe92967c7f33fa232ddf4f6351bb1b9a19",
  //   transactionBlock: fundingPhaseTxAndRes.tx,
  // });

  console.debug("res: ", res);
})();
