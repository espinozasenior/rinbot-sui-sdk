import { SuiClient } from "@mysten/sui.js/client";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import { CoinManagerSingleton, WalletManagerSingleton } from "../../src";
import { DCAManagerSingleton } from "../../src/managers/dca/DCAManager";
import { DCATimescale } from "../../src/managers/dca/types";
import { RINCEL_COIN_TYPE, USDC_COIN_TYPE } from "../coin-types";
import { initAndGetProviders, initAndGetRedisStorage, keypair, user } from "../common";

// yarn ts-node examples/dca/create-dca.ts
export const createDCA = async () => {
  const suiProviderUrl = "https://fullnode.mainnet.sui.io";
  const provider = new SuiClient({ url: suiProviderUrl });
  const transaction = new TransactionBlock();
  const sender = keypair.toSuiAddress();

  // const baseCoinType = "0x608edfcf51144b7618fc497eacd0ed0583351de9c527974f40110ff6921d8489::lol::LOL";
  // const quoteCoinType = "0x35dcf2176f5fbffb789639ebecadc7670a14a90b315bf210e76978bdfc0e6fe9::sss::SSS";

  const baseCoinType = USDC_COIN_TYPE;
  const quoteCoinType = RINCEL_COIN_TYPE;

  // TODO: Need to calculate that based on the decimals ob baseCoinType
  // TODO: Need to update inner function where this value is used
  const baseCoinAmountToDepositIntoDCA = "150000";

  const storage = await initAndGetRedisStorage();
  const providers = await initAndGetProviders(storage);
  const coinManager: CoinManagerSingleton = CoinManagerSingleton.getInstance(providers, suiProviderUrl);
  const walletManager: WalletManagerSingleton = WalletManagerSingleton.getInstance(provider, coinManager);

  const allCoinObjectsList = await walletManager.getAllCoinObjects({
    publicKey: keypair.toSuiAddress(),
    coinType: baseCoinType,
  });

  const totalOrders = 10;

  const { tx, txRes } = await DCAManagerSingleton.createDCAInitTransaction({
    publicKey: user,

    allCoinObjectsList,
    baseCoinAmountToDepositIntoDCA,

    baseCoinType,
    quoteCoinType,
    every: 10,
    maxPrice: "2",
    minPrice: "1",
    timeScale: DCATimescale.Hours,
    totalOrders,

    transaction,
  });

  const res = await provider.devInspectTransactionBlock({
    sender: sender,
    transactionBlock: tx,
  });

  console.debug("tx.blockData: ", tx.blockData);
  console.debug("tx.blockdata.transactions", tx.blockData.transactions);

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
