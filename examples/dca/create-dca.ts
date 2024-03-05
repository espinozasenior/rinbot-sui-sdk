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
import { DCATimescale } from "../../src/managers/dca/types";

// yarn ts-node examples/dca/create-dca.ts
export const createDCA = async () => {
  const suiProviderUrl = "https://fullnode.testnet.sui.io";
  const provider = new SuiClient({ url: suiProviderUrl });
  const transaction = new TransactionBlock();
  const sender = keypair.toSuiAddress();

  const baseCoinType = "0x608edfcf51144b7618fc497eacd0ed0583351de9c527974f40110ff6921d8489::lol::LOL";
  const quoteCoinType = "0x35dcf2176f5fbffb789639ebecadc7670a14a90b315bf210e76978bdfc0e6fe9::sss::SSS";

  const baseCoinAmountToDepositIntoDCA = "50";

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

  const { tx, txRes } = await DCAManagerSingleton.createDCAInitTransaction({
    allCoinObjectsList,
    baseCoinAmountToDepositIntoDCA,

    baseCoinType,
    quoteCoinType,
    every: 10,
    // maxPrice: "2",
    // minPrice: "1",
    timeScale: DCATimescale.Hours,
    totalOrders: 15,
    transaction,
  });

  const res = await provider.devInspectTransactionBlock({
    sender: sender,
    transactionBlock: tx,
  });

  console.debug("tx.blockData: ", tx.blockData);

  // const res = await provider.signAndExecuteTransactionBlock({
  //   signer: keypair,
  //   transactionBlock: tx,
  //   options: {
  //     showBalanceChanges: true,
  //     showEffects: true,
  //     showEvents: true,
  //     showInput: true,
  //     showObjectChanges: true,
  //     showRawInput: true,
  //   },
  // });

  console.debug("res: ", res);
};

createDCA();
