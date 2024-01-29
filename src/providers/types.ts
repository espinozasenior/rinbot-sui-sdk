import { TransactionBlock } from "@mysten/sui.js/transactions";

import { Provider, UpdatedCoinsCache } from "../managers/types";

export type CommonPoolData = {
  base: string;
  quote: string;
};

export type CacheOptions = {
  updateIntervalInMs: number;
};

export type GetRouteDataInput<T extends Provider> = Parameters<T["getRouteData"]>[0];

export type GetRouteDataOutput<T extends Provider> = ReturnType<T["getRouteData"]>;

export type GetSwapTransactionInput<T extends Provider> = Parameters<T["getSwapTransaction"]>[0];

export interface IPoolProvider<T extends Provider> {
  getCoins(): UpdatedCoinsCache;
  getPaths(): Map<string, CommonPoolData>;
  getRouteData(arg: GetRouteDataInput<T>): GetRouteDataOutput<T>;
  getSwapTransaction(arg: GetSwapTransactionInput<T>): Promise<TransactionBlock>;
}

export type ProviderOptions = {
  cacheOptions: CacheOptions;
  lazyLoading?: boolean;
};

export type ExitHandlerOptions = {
  cleanup?: boolean;
  intervalId?: NodeJS.Timeout | undefined;
  exit?: boolean;
  providerName?: string;
};
