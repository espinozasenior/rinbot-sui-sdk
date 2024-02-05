import { Storage, StorageProperty, StorageValue } from "../types";
import { isShortPoolDataArray } from "./typeguards";
import { ShortPoolData } from "../../providers/turbos/types";

export const getPoolsCache = async ({
  storage,
  provider,
}: {
  storage: Storage;
  provider: string;
}): Promise<ShortPoolData[]> => {
  let poolsCache: ShortPoolData[];

  const pools: StorageValue = await storage.getCache({
    provider,
    property: StorageProperty.Pools,
  });

  if (isShortPoolDataArray(pools)) {
    poolsCache = pools;
  } else if (pools === null) {
    console.warn("[getPoolsCache] Received empty pools from strorage, pools === null ");
    return [];
  } else {
    const stringifiedPool: string = JSON.stringify(pools[0]);
    throw new Error(
      `[${provider}] getPoolsCache: pools from storage are not ` +
        `(ShortPoolData[] or null). Example of pool: ${stringifiedPool}`,
    );
  }

  return poolsCache;
};
