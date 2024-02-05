import { createClient } from "redis";
import { CommonCoinData } from "../managers/types";
import { ShortCoinMetadata } from "../providers/flowx/types";
import { ShortPoolData } from "../providers/turbos/types";
import { CommonPoolData } from "../providers/types";
import { InMemoryStorageSingleton } from "./InMemoryStorage";
import { RedisStorageSingleton } from "./RedisStorage";

export type Storage = InMemoryStorageSingleton | RedisStorageSingleton;

export interface IStorage {
  setCache(params: SetCacheParams): Promise<void>;
  getCache(params: GetCacheParams): Promise<StorageValue>;
}

export type GetCacheParams = {
  provider: string;
  property: StorageProperty;
};

export type SetCacheParams = GetCacheParams & {
  value: StorageValue;
};

export enum StorageProperty {
  Coins = "coins",
  Paths = "paths",
  Pools = "pools",
  CoinsMetadata = "coinsMetadata",
}

export type StorageValue = CommonCoinData[] | CommonPoolData[] | ShortCoinMetadata[] | ShortPoolData[] | null;

export type RedisStorageClient = ReturnType<typeof createClient>;