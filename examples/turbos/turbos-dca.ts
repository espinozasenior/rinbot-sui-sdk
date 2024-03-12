import { TransactionBlock } from "@mysten/sui.js/transactions";
import { LONG_SUI_COIN_TYPE } from "../../src/providers/common";
import { TurbosSingleton } from "../../src/providers/turbos/turbos";
import { USDC_COIN_TYPE } from "../coin-types";
import { cacheOptions, initAndGetRedisStorage, provider, suiProviderUrl, user } from "../common";

// yarn ts-node examples/turbos/turbos-dca.ts
(async () => {
  const storage = await initAndGetRedisStorage();

  const turbos: TurbosSingleton = await TurbosSingleton.getInstance({
    suiProviderUrl,
    cacheOptions: { storage, ...cacheOptions },
    lazyLoading: false,
  });

  const coinTypeFrom: string = LONG_SUI_COIN_TYPE;
  const coinTypeTo: string = USDC_COIN_TYPE;
  const inputAmount = "0.001";

  const routeData = await turbos.getRouteData({
    coinTypeFrom,
    coinTypeTo,
    inputAmount,
    publicKey: user,
    slippagePercentage: 10,
  });
  console.log("routeData:", routeData);

  const transaction: TransactionBlock = await turbos.getSwapTransaction({
    publicKey: user,
    route: routeData.route,
    slippagePercentage: 10,
  });

  console.debug("transaction: ", transaction.blockData);

  //   const res = await provider.devInspectTransactionBlock({
  //     transactionBlock: transaction,
  //     sender: user,
  //   });
  //   console.debug("res: ", res);
})();
