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
  // TODO: Put it into separate store method to avoid usage from different class
  pathsCache?: ReturnType<Provider["getPaths"]>;
  coinsMetadataCache?: ShortCoinMetadata[];
  poolsCache?: ShortPoolData[];
}): Promise<void> {
  try {
    const { data: coins }: { data: CommonCoinData[] } = coinsCache;

    await storage.setCache({
      provider,
      property: StorageProperty.Coins,
      value: { value: coins, timestamp: Date.now().toString() },
    });

    if (pathsCache !== undefined) {
      const paths: CommonPoolData[] = Array.from(pathsCache.values());

      await storage.setCache({
        provider,
        property: StorageProperty.Paths,
        value: { value: paths, timestamp: Date.now().toString() },
      });
    }

    coinsMetadataCache !== undefined &&
      (await storage.setCache({
        provider,
        property: StorageProperty.CoinsMetadata,
        value: { value: coinsMetadataCache, timestamp: Date.now().toString() },
      }));
    poolsCache !== undefined &&
      (await storage.setCache({
        provider,
        property: StorageProperty.Pools,
        value: { value: poolsCache, timestamp: Date.now().toString() },
      }));
  } catch (error) {
    console.error(`[storeCaches] error for params: provider ${provider} `, error);

    throw error;
  }
}
