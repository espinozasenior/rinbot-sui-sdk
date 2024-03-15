import { SuiClient } from "@mysten/sui.js/client";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import { DCAManagerSingleton } from "../../src/managers/dca/DCAManager";
import { keypair } from "../common";

// yarn ts-node examples/dca/withdraw-base.ts
export const withdrawBase = async () => {
  const suiProviderUrl = "https://fullnode.mainnet.sui.io";
  const provider = new SuiClient({ url: suiProviderUrl });
  const transaction = new TransactionBlock();
  const sender = keypair.toSuiAddress();

  const dcaInstance = DCAManagerSingleton.getInstance(suiProviderUrl);
  const dcas = await dcaInstance.getDCAsByUser({ publicKey: sender });
  const desiredObjectId = "0x4f9fcd90fb8e852899d45693e196d49b07a579ffbc1ca40292cd07f9e9675bdd";

  const currentDCAData = dcas.find((el) => el.fields.id.id === desiredObjectId);
  console.debug("currentDCAData: ", currentDCAData);

  if (!currentDCAData) {
    throw new Error(`No DCA found for such dca object id ${desiredObjectId}`);
  }

  const baseCoinType = currentDCAData.fields.base_coin_type;
  const quoteCoinType = currentDCAData.fields.quote_coin_type;

  const baseCoinAmountToWithdrawFromDCA = "100000";
  const removeOrdersCount = 1;

  // TODO: How much we can withdraw base? Need to have a check there that it's less or equal to the base_balance in DCA.
  // The comparison should be done in bigint

  const { tx, txRes } = await DCAManagerSingleton.getDCAWithdrawBaseTransaction({
    baseCoinAmountToWithdrawFromDCA,

    baseCoinType,
    quoteCoinType,

    dca: desiredObjectId,
    removeOrdersCount,
    transaction,
  });

  // const res = await provider.devInspectTransactionBlock({
  //   sender: sender,
  //   transactionBlock: tx,
  // });

  const res = await provider.signAndExecuteTransactionBlock({
    signer: keypair,
    transactionBlock: tx,
    options: {
      showBalanceChanges: true,
      showEffects: true,
      showEvents: true,
      showInput: true,
      showObjectChanges: true,
      showRawInput: true,
    },
  });

  console.debug("txRes: ", txRes);
  console.debug("tx: ", tx);
  console.debug("tx.blockData: ", tx.blockData);
  console.dir(tx.blockData, { depth: null });

  console.debug("sender: ", sender);

  console.debug("res: ", res);
};

withdrawBase();
