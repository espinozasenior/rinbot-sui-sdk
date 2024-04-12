import { CoinManagerSingleton, TurbosSingleton } from "../../src";
import { cacheOptions, provider, suiProviderUrl, user } from "../common";

// yarn ts-node examples/turbos/get-owned-pools.ts
(async () => {
  const turbos: TurbosSingleton = await TurbosSingleton.getInstance({
    suiProviderUrl,
    cacheOptions,
    lazyLoading: true,
  });
  const coinManager: CoinManagerSingleton = CoinManagerSingleton.getInstance([turbos], suiProviderUrl);

  console.time("\ngetOwnedPools");
  const ownedPools = await turbos.getOwnedPools({ coinManager, provider, publicKey: user });
  console.timeEnd("\ngetOwnedPools");

  console.debug("\nownedPools:", ownedPools);

  console.time("\ngetDetailedPoolsInfo");
  const detailedPoolsInfo = await turbos.getDetailedPoolsInfo({ provider, coinManager, publicKey: user });
  console.timeEnd("\ngetDetailedPoolsInfo");

  console.debug("\ndetailedPoolsInfo:", detailedPoolsInfo);
})();
