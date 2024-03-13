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
import { cacheOptions, keypair, user } from "../common";

// yarn ts-node examples/dca/deposit-base.ts
export const depositBase = async () => {
  const suiProviderUrl = "https://fullnode.mainnet.sui.io";
  const provider = new SuiClient({ url: suiProviderUrl });
  const transaction = new TransactionBlock();
  const sender = keypair.toSuiAddress();

  const dcaInstance = DCAManagerSingleton.getInstance(suiProviderUrl);
  const dcas = await dcaInstance.getDCAsByUser({ publicKey: sender });

  console.debug("dcas: ", dcas);
  const desiredObjectId = "0x4f9fcd90fb8e852899d45693e196d49b07a579ffbc1ca40292cd07f9e9675bdd";

  const currentDCAData = dcas.find((el) => el.fields.id.id === desiredObjectId);

  if (!currentDCAData) {
    throw new Error(`No DCA found for such dca object id ${desiredObjectId}`);
  }

  const baseCoinType = currentDCAData.fields.base_coin_type;
  const quoteCoinType = currentDCAData.fields.quote_coin_type;

  const baseCoinAmountToDepositIntoDCA = "250000";
  const addOrdersCount = 1;

  // TODO: Calculate that for given DCA inputs
  const DCA_ALL_SWAPS_GAS_BUGET = addOrdersCount * DCAManagerSingleton.DCA_MINIMUM_GAS_FUNDS;

  // TODO: Check that user has enough SUI for DCA gasCoinAccount
  const [coin] = transaction.splitCoins(transaction.gas, [transaction.pure(DCA_ALL_SWAPS_GAS_BUGET)]);

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

    gasCoinAccount: coin,
    transaction,
  });

  tx.transferObjects([coin], tx.pure(user));

  const res = await provider.devInspectTransactionBlock({
    sender: sender,
    transactionBlock: tx,
  });

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

  console.debug("txRes: ", txRes);
  console.debug("tx: ", tx);
  console.debug("tx.blockData: ", tx.blockData);
  console.debug("sender: ", sender);

  console.debug("res: ", res);
};

depositBase();
