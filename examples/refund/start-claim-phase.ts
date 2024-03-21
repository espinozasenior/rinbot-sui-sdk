import { SUI_CLOCK_OBJECT_ID } from "@mysten/sui.js/utils";
import { RefundManagerSingleton } from "../../src";
import { RefundPoolPhase } from "../../src/managers/refund/utils";
import { keypair, provider, signAndExecuteTransaction, suiProviderUrl, user } from "../common";

// yarn ts-node examples/refund/start-claim-phase.ts
(async () => {
  const fundingPhaseTxAndRes = RefundManagerSingleton.startClaimPhase({
    poolObjectId: RefundManagerSingleton.REFUND_POOL_OBJECT_ID,
  });

  const res = await provider.devInspectTransactionBlock({
    sender: "0x935fd79d69b98dc87cd43d4112e621fe92967c7f33fa232ddf4f6351bb1b9a19",
    transactionBlock: fundingPhaseTxAndRes.tx,
  });

  // const res = await signAndExecuteTransaction(fundingPhaseTxAndRes.tx, keypair);

  console.debug("result: ", fundingPhaseTxAndRes);
  console.debug("res: ", res);
})();
