import { TransactionBlock } from "@mysten/sui.js/transactions";

import { Provider, UpdatedCoinsCache } from "../managers/types";

export type CommonPoolData = {
  base: string;
  quote: string;
};

export type CacheOptions = {
  updateIntervalInMs: number;
};

export interface IPoolProvider<T extends Provider> {
  getCoins(): UpdatedCoinsCache;
  getPaths(): Map<string, CommonPoolData>;
  getRouteData(arg: Parameters<T["getRouteData"]>[0]): ReturnType<T["getRouteData"]>;
  getSwapTransaction(arg: Parameters<T["getSwapTransaction"]>[0]): Promise<TransactionBlock>;
}

export type ProviderOptions = {
  cacheOptions: CacheOptions;
  lazyLoading?: boolean;
};
