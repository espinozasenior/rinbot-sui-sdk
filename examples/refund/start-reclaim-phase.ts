import { SUI_CLOCK_OBJECT_ID } from "@mysten/sui.js/utils";
import { RefundManagerSingleton } from "../../src";
import { RefundPoolPhase } from "../../src/managers/refund/utils";
import { keypair, provider, signAndExecuteTransaction, suiProviderUrl, user } from "../common";
import { delegateeKeypair, delegateeUser } from "../dca/common";

// yarn ts-node examples/refund/start-reclaim-phase.ts
(async () => {
  const txData = RefundManagerSingleton.startReclaimPhase({
    poolObjectId: RefundManagerSingleton.REFUND_POOL_OBJECT_ID,
    clock: SUI_CLOCK_OBJECT_ID,
  });

  // const res = await provider.devInspectTransactionBlock({
  //   sender: delegateeUser,
  //   transactionBlock: txData.tx,
  // });

  const res = await signAndExecuteTransaction(txData.tx, delegateeKeypair);

  console.debug("txData: ", txData);
  console.debug("res: ", res);
})();
