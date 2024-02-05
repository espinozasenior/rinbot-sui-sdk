import { CommonCoinData } from "../../managers/types";
import { Storage, StorageProperty, StorageValue } from "../types";
import { isCommonCoinDataArray, isCommonPoolDataArray } from "./typeguards";
import { CommonPoolData } from "../../providers/types";

export const getCoinsAndPathsCaches = async ({
  storage,
  provider,
}: {
  storage: Storage;
  provider: string;
}): Promise<{
  coinsCache: Map<string, CommonCoinData>;
  pathsCache: Map<string, CommonPoolData>;
}> => {
  let coinsCache: Map<string, CommonCoinData>;
  let pathsCache: Map<string, CommonPoolData>;

  const coins: StorageValue = await storage.getCache({
    provider,
    property: StorageProperty.Coins,
  });

  if (isCommonCoinDataArray(coins)) {
    coinsCache = coins.reduce((cache: Map<string, CommonCoinData>, coin: CommonCoinData) => {
      cache.set(coin.type, coin);
      return cache;
    }, new Map());
  } else if (coins === null) {
    console.warn("[getCoinsAndPathsCaches] Received empty coins from strorage, coins === null ");
    coinsCache = new Map();
  } else {
    const stringifiedCoin: string = JSON.stringify(coins[0]);
    throw new Error(
      `[${provider}] prefillCaches: coins from storage are not (CommonCoinData[] or null). ` +
        `Example of coin: ${stringifiedCoin}`,
    );
  }

  const paths: StorageValue = await storage.getCache({
    provider,
    property: StorageProperty.Paths,
  });

  if (isCommonPoolDataArray(paths)) {
    pathsCache = paths.reduce((cache: Map<string, CommonPoolData>, path: CommonPoolData) => {
      const key = `${path.base}-${path.quote}`;
      cache.set(key, path);
      return cache;
    }, new Map());
  } else if (paths === null) {
    console.warn("[getCoinsAndPathsCaches] Received empty paths from strorage, paths === null ");
    pathsCache = new Map();
  } else {
    const stringifiedPath: string = JSON.stringify(paths[0]);
    throw new Error(
      `[${provider}] prefillCaches: paths from storage are not (CommonPoolData[] or null). ` +
        `Example of path: ${stringifiedPath}`,
    );
  }

  return { coinsCache, pathsCache };
};
