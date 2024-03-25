import { SUI_CLOCK_OBJECT_ID } from "@mysten/sui.js/utils";
import { RefundManagerSingleton } from "../../src";
import { RefundPoolPhase } from "../../src/managers/refund/utils";
import { keypair, provider, signAndExecuteTransaction, suiProviderUrl, user } from "../common";
import { delegateeKeypair, delegateeUser } from "../dca/common";

// yarn ts-node examples/refund/start-claim-phase.ts
(async () => {
  const fundingPhaseTxAndRes = RefundManagerSingleton.startClaimPhase({
    poolObjectId: RefundManagerSingleton.REFUND_POOL_OBJECT_ID,
  });

  // const res = await provider.devInspectTransactionBlock({
  //   sender: delegateeUser,
  //   transactionBlock: fundingPhaseTxAndRes.tx,
  // });

  const res = await signAndExecuteTransaction(fundingPhaseTxAndRes.tx, delegateeKeypair);

  console.debug("result: ", fundingPhaseTxAndRes);
  console.debug("res: ", res);
})();
