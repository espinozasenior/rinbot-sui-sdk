import { SuiClient } from "@mysten/sui.js/client";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import {
  AftermathSingleton,
  CetusSingleton,
  CoinManagerSingleton,
  Providers,
  TurbosSingleton,
  WalletManagerSingleton,
  clmmMainnet,
} from "../../src";
import { DCAManagerSingleton } from "../../src/managers/dca/DCAManager";
import { cacheOptions, keypair } from "../common";

// yarn ts-node examples/dca/deposit-base.ts
export const depositBase = async () => {
  const suiProviderUrl = "https://fullnode.testnet.sui.io";
  const provider = new SuiClient({ url: suiProviderUrl });
  const transaction = new TransactionBlock();
  const sender = keypair.toSuiAddress();

  const dcaInstance = DCAManagerSingleton.getInstance(suiProviderUrl);
  const dcas = await dcaInstance.getDCAsByUser({ publicKey: sender });
  const desiredObjectId = "0x3d8999900847d0c7ccca6f965bc02041c478b582aa03e1708d603f7a92358402";

  const currentDCAData = dcas.find((el) => el.fields.id.id === desiredObjectId);

  if (!currentDCAData) {
    throw new Error(`No DCA found for such dca object id ${desiredObjectId}`);
  }

  const baseCoinType = currentDCAData.fields.base_coin_type;
  const quoteCoinType = currentDCAData.fields.quote_coin_type;

  const baseCoinAmountToDepositIntoDCA = "25";
  const addOrdersCount = 1;

  const turbos: TurbosSingleton = await TurbosSingleton.getInstance({
    suiProviderUrl,
    cacheOptions,
    lazyLoading: false,
  });
  const cetus: CetusSingleton = await CetusSingleton.getInstance({
    sdkOptions: clmmMainnet,
    cacheOptions,
    suiProviderUrl,
    lazyLoading: false,
  });
  const aftermath: AftermathSingleton = await AftermathSingleton.getInstance({ cacheOptions, lazyLoading: false });
  const providers: Providers = [turbos, cetus, aftermath];
  const coinManager: CoinManagerSingleton = CoinManagerSingleton.getInstance(providers, suiProviderUrl);
  const walletManager: WalletManagerSingleton = WalletManagerSingleton.getInstance(provider, coinManager);

  const allCoinObjectsList = await walletManager.getAllCoinObjects({
    publicKey: keypair.toSuiAddress(),
    coinType: baseCoinType,
  });

  const { tx, txRes } = await DCAManagerSingleton.createDCADepositBaseTransaction({
    allCoinObjectsList,
    baseCoinAmountToDepositIntoDCA,

    baseCoinType,
    quoteCoinType,

    dca: desiredObjectId,
    addOrdersCount,
    transaction,
  });

  const res = await provider.devInspectTransactionBlock({
    sender: sender,
    transactionBlock: tx,
  });

  console.debug("txRes: ", txRes);
  console.debug("tx: ", tx);
  console.debug("tx.blockData: ", tx.blockData);
  console.debug("sender: ", sender);

  console.debug("res: ", res);
};

depositBase();
