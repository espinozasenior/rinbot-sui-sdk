import { SuiClient } from "@mysten/sui.js/client";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import { DCAManagerSingleton } from "../../src/managers/dca/DCAManager";
import { user } from "../common";
import { delegateeUser } from "./common";

// yarn ts-node examples/dca/redeem-funds-and-close.ts
export const redeemFundsAndClose = async () => {
  const suiProviderUrl = "https://fullnode.testnet.sui.io";
  const provider = new SuiClient({ url: suiProviderUrl });
  const transaction = new TransactionBlock();

  const dcaInstance = DCAManagerSingleton.getInstance(suiProviderUrl);
  const dcas = await dcaInstance.getDCAsByUser({ publicKey: user });
  const desiredObjectId = "0x3d8999900847d0c7ccca6f965bc02041c478b582aa03e1708d603f7a92358402";

  const currentDCAData = dcas.find((el) => el.fields.id.id === desiredObjectId);
  console.debug("currentDCAData: ", currentDCAData);

  if (!currentDCAData) {
    throw new Error(`No DCA found for such dca object id ${desiredObjectId}`);
  }

  const baseCoinType = currentDCAData.fields.base_coin_type;
  const quoteCoinType = currentDCAData.fields.quote_coin_type;

  const { tx, txRes } = await DCAManagerSingleton.getDCARedeemFundsAndCloseTransaction({
    baseCoinType,
    quoteCoinType,

    dca: desiredObjectId,
    transaction,
  });

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

redeemFundsAndClose();
