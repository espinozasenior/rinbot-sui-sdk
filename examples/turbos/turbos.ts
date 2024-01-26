import { TransactionBlock } from "@mysten/sui.js/transactions";

import { TurbosSingleton } from "../../src/providers/turbos/turbos";
import { cacheOptions, suiProviderUrl, user } from "../common";
import { LONG_SUI_COIN_TYPE, SHORT_SUI_COIN_TYPE } from "../../src/providers/common";

const USDC_TYPE = "0x5d4b302506645c37ff133b98c4b50a5ae14841659738d6d733d59d0d217a93bf::coin::COIN";

// yarn ts-node examples/sui/turbos/turbos.ts
(async () => {
  const turbos: TurbosSingleton = await TurbosSingleton.getInstance({ suiProviderUrl, cacheOptions });

  const coinTypeFrom: string = LONG_SUI_COIN_TYPE;
  const coinTypeTo: string = USDC_TYPE;
  const inputAmount = "0.01";

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
  console.log("transaction:", transaction);
})();
