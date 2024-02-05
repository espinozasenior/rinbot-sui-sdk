/* eslint-disable require-jsdoc */

import { CommonCoinData, Provider } from "../../managers/types";
import { Storage, StorageProperty } from "../types";
import { ShortCoinMetadata } from "../../providers/flowx/types";
import { ShortPoolData } from "../../providers/turbos/types";
import { CommonPoolData } from "../../providers/types";

export async function storeCaches({
  provider,
  storage,
  coinsCache,
  pathsCache,
  coinsMetadataCache,
  poolsCache,
}: {
  provider: string;
  storage: Storage;
  coinsCache: ReturnType<Provider["getCoins"]>;
  pathsCache: ReturnType<Provider["getPaths"]>;
  // TODO: Put it into separate store method to avoid usage from different class
  coinsMetadataCache?: ShortCoinMetadata[];
  poolsCache?: ShortPoolData[];
}): Promise<void> {
  try {
    const { data: coins }: { data: CommonCoinData[] } = coinsCache;
    const paths: CommonPoolData[] = Array.from(pathsCache.values());

    await storage.setCache({ provider, property: StorageProperty.Coins, value: coins });
    await storage.setCache({ provider, property: StorageProperty.Paths, value: paths });

    coinsMetadataCache !== undefined &&
      (await storage.setCache({ provider, property: StorageProperty.CoinsMetadata, value: coinsMetadataCache }));
    poolsCache !== undefined &&
      (await storage.setCache({ provider, property: StorageProperty.Pools, value: poolsCache }));
  } catch (error) {
    console.error(`[storeCaches] error for params: provider ${provider} `, error);

    throw error;
  }
}
