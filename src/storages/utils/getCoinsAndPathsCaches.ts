import { CommonCoinData } from "../../managers/types";
import { Storage, StorageProperty, StorageValue } from "../types";
import { isCommonCoinDataArray, isCommonPoolDataArray } from "./typeguards";
import { CommonPoolData } from "../../providers/types";

/**
 * Returns coins and paths caches from storage. If cache is not up to date, empty map is returned.
 */
export const getCoinsAndPathsCaches = async ({
  storage,
  provider,
  updateCacheInterval,
}: {
  storage: Storage;
  provider: string;
  updateCacheInterval: number;
}): Promise<{
  coinsCache: Map<string, CommonCoinData>;
  pathsCache: Map<string, CommonPoolData>;
}> => {
  let coinsCache: Map<string, CommonCoinData> = new Map();
  let pathsCache: Map<string, CommonPoolData> = new Map();

  const coins: StorageValue = await storage.getCache({
    provider,
    property: StorageProperty.Coins,
  });

  if (isCommonCoinDataArray(coins?.value)) {
    const timestamp = parseInt(coins.timestamp);
    const cacheIsUpToDate = timestamp + updateCacheInterval > Date.now();

    if (cacheIsUpToDate) {
      coinsCache = coins.value.reduce((cache: Map<string, CommonCoinData>, coin: CommonCoinData) => {
        cache.set(coin.type, coin);
        return cache;
      }, new Map());
    } else {
      console.warn(`[getCoinsAndPathsCaches] ${provider} coins cache is not up to date.`);
    }
  } else if (coins === null) {
    console.warn(`[getCoinsAndPathsCaches] ${provider} Received empty coins from strorage, coins === null `);
  } else {
    const stringifiedCoin: string = JSON.stringify(coins.value[0]);
    throw new Error(
      `[${provider}] prefillCaches: coins from storage are not (CommonCoinData[] or null). ` +
        `Example of coin: ${stringifiedCoin}`,
    );
  }

  const paths: StorageValue = await storage.getCache({
    provider,
    property: StorageProperty.Paths,
  });

  if (isCommonPoolDataArray(paths?.value)) {
    const timestamp = parseInt(paths.timestamp);
    const cacheIsUpToDate = timestamp + updateCacheInterval > Date.now();

    if (cacheIsUpToDate) {
      pathsCache = paths.value.reduce((cache: Map<string, CommonPoolData>, path: CommonPoolData) => {
        const key = `${path.base}-${path.quote}`;
        cache.set(key, path);
        return cache;
      }, new Map());
    } else {
      console.warn(`[getCoinsAndPathsCaches] ${provider} paths cache is not up to date.`);
    }
  } else if (paths === null) {
    console.warn(`[getCoinsAndPathsCaches] ${provider} Received empty paths from strorage, paths === null `);
  } else {
    const stringifiedPath: string = JSON.stringify(paths.value[0]);
    throw new Error(
      `[${provider}] prefillCaches: paths from storage are not (CommonPoolData[] or null). ` +
        `Example of path: ${stringifiedPath}`,
    );
  }

  return { coinsCache, pathsCache };
};
