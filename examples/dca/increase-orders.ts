import { SuiClient } from "@mysten/sui.js/client";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import { DCAManagerSingleton } from "../../src/managers/dca/DCAManager";
import { keypair, user } from "../common";

// yarn ts-node examples/dca/increase-orders.ts
export const increaseOrders = async () => {
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
  const addOrdersCount = 1;

  // TODO: Calculate that for given DCA inputs
  const DCA_ALL_SWAPS_GAS_BUGET = addOrdersCount * DCAManagerSingleton.DCA_MINIMUM_GAS_FUNDS;

  // TODO: Check that user has enough SUI for DCA gasCoinAccount
  const [coin] = transaction.splitCoins(transaction.gas, [transaction.pure(DCA_ALL_SWAPS_GAS_BUGET)]);

  const { tx, txRes } = await DCAManagerSingleton.getDCAIncreaseOrdersRemainingTransaction({
    baseCoinType,
    quoteCoinType,

    dca: desiredObjectId,
    addOrdersCount,

    gasCoinAccount: coin,

    transaction,
  });

  tx.transferObjects([coin], tx.pure(user));

  const res = await provider.devInspectTransactionBlock({
    sender: sender,
    transactionBlock: tx,
  });

  console.debug("txRes: ", txRes);
  console.debug("tx: ", tx);
  console.debug("tx.blockData: ", tx.blockData);
  console.dir(tx.blockData, { depth: null });
  console.debug("sender: ", sender);
  console.debug("res: ", res);
};

increaseOrders();
