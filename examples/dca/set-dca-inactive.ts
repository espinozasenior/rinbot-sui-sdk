import { SuiClient } from "@mysten/sui.js/client";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import { DCAManagerSingleton } from "../../src/managers/dca/DCAManager";
import { user } from "../common";
import { delegateeUser } from "./common";

// yarn ts-node examples/dca/set-dca-inactive-as-delegatee.ts
export const setDCAInactive = async () => {
  const suiProviderUrl = "https://fullnode.mainnet.sui.io";
  const provider = new SuiClient({ url: suiProviderUrl });
  const transaction = new TransactionBlock();

  const dcaInstance = DCAManagerSingleton.getInstance(suiProviderUrl);
  const dcas = await dcaInstance.getDCAsByUser({ publicKey: user });
  const desiredObjectId = "0x4f9fcd90fb8e852899d45693e196d49b07a579ffbc1ca40292cd07f9e9675bdd";

  const currentDCAData = dcas.find((el) => el.fields.id.id === desiredObjectId);
  console.debug("currentDCAData: ", currentDCAData);

  if (!currentDCAData) {
    throw new Error(`No DCA found for such dca object id ${desiredObjectId}`);
  }

  const baseCoinType = currentDCAData.fields.base_coin_type;
  const quoteCoinType = currentDCAData.fields.quote_coin_type;

  const { tx, txRes } = await DCAManagerSingleton.getDCASetInactiveTransaction({
    baseCoinType,
    quoteCoinType,

    dca: desiredObjectId,
    transaction,
  });

  // From delegatee
  // const res = await provider.devInspectTransactionBlock({
  //   sender: delegateeUser,
  //   transactionBlock: tx,
  // });

  // From user
  const res = await provider.devInspectTransactionBlock({
    sender: user,
    transactionBlock: tx,
  });

  console.debug("txRes: ", txRes);
  console.debug("tx: ", tx);
  console.debug("tx.blockData: ", tx.blockData);
  console.dir(tx.blockData, { depth: null });
  console.debug("sender: ", user);
  console.debug("delegateeUser: ", delegateeUser);
  console.debug("res: ", res);
};

setDCAInactive();
