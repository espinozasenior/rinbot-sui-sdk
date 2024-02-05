/* eslint-disable require-jsdoc */

import { getCoinsFlowX, getPairs, swapExactInput } from "@flowx-pkg/ts-sdk";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import { EventEmitter } from "../../emitters/EventEmitter";
import { CommonCoinData, UpdatedCoinsCache } from "../../managers/types";
import { InMemoryStorageSingleton } from "../../storages/InMemoryStorage";
import { Storage } from "../../storages/types";
import { exitHandlerWrapper } from "../common";
import { CacheOptions, CoinsCache, CommonPoolData, IPoolProvider, PathsCache } from "../types";
import { convertSlippage } from "../utils/convertSlippage";
import { getCoinInfoFromCache } from "../utils/getCoinInfoFromCache";
import { getCoinsAndPathsCaches } from "../../storages/utils/getCoinsAndPathsCaches";
import { storeCaches } from "../../storages/utils/storeCaches";
import { calculateAmountOutInternal } from "./calculateAmountOutInternal";
import {
  CoinNode,
  ExtendedSwapCalculatedOutputDataType,
  ExtractedPairSettingsType,
  FlowxOptions,
  ShortCoinMetadata,
} from "./types";
import { getCoinsMap, getPathsMap, isCoinListValid, isPairListValid } from "./utils";
import { getCoinsMetadataCache } from "../../storages/utils/getCoinsMetadataCache";

/**
 * Note: If using `lazyLoading: true` and in-memory cache in a serverless/cloud functions environment,
 * be aware that each invocation of your cloud function will start cache population from scratch.
 * This may lead to unexpected behavior when using different SDK methods. To avoid this,
 * when running your app in a serverless environment with `lazyLoading: true` option,
 * consider passing a persistent storage adapter (external, e.g., Redis or any kind of DB) to the ProviderSingleton.
 */
export class FlowxSingleton extends EventEmitter implements IPoolProvider<FlowxSingleton> {
  private static _instance: FlowxSingleton;
  public providerName = "Flowx";
  public isSmartRoutingAvailable = true;
  public pathsCache: PathsCache = new Map();
  public coinsCache: CoinsCache = new Map();
  public coinsMetadataCache: ShortCoinMetadata[] = [];
  private cacheOptions: CacheOptions;
  private intervalId: NodeJS.Timeout | undefined;
  private storage: Storage;

  private constructor(options: Omit<FlowxOptions, "lazyLoading">) {
    super();
    this.cacheOptions = options.cacheOptions;
    this.storage = options.cacheOptions.storage ?? InMemoryStorageSingleton.getInstance();
  }

  public static async getInstance(options?: FlowxOptions): Promise<FlowxSingleton> {
    if (!FlowxSingleton._instance) {
      if (options === undefined) {
        throw new Error("[Flowx] Options are required in arguments to create instance.");
      }

      const { cacheOptions, lazyLoading = true } = options;

      const instance = new FlowxSingleton({ cacheOptions });
      lazyLoading ? instance.init() : await instance.init();
      FlowxSingleton._instance = instance;
    }

    return FlowxSingleton._instance;
  }

  private async init() {
    console.debug(`[${this.providerName}] Singleton initiating.`);

    await this.fillCacheFromStorage();
    await this.updateCaches();
    this.updateCachesIntervally();

    this.bufferEvent("cachesUpdate", this.getCoins());
  }

  private async fillCacheFromStorage(): Promise<void> {
    try {
      const { coinsCache, pathsCache } = await getCoinsAndPathsCaches({
        storage: this.storage,
        provider: this.providerName,
      });
      const coinsMetadataCache = await getCoinsMetadataCache({ storage: this.storage, provider: this.providerName });

      this.coinsCache = coinsCache;
      this.pathsCache = pathsCache;
      this.coinsMetadataCache = coinsMetadataCache;
    } catch (error) {
      console.error(`[${this.providerName}] fillCacheFromStorage failed:`, error);
    }
  }

  private isStorageCacheEmpty() {
    const isCacheEmpty =
      this.coinsCache.size === 0 || this.pathsCache.size === 0 || this.coinsMetadataCache.length === 0;

    return isCacheEmpty;
  }

  private async updateCaches({ force }: { force: boolean } = { force: false }): Promise<void> {
    const isCacheEmpty = this.isStorageCacheEmpty();

    if (isCacheEmpty || force) {
      try {
        await this.updatePathsCache();
        await this.updateCoinsCache();
        this.emit("cachesUpdate", this.getCoins());

        await storeCaches({
          provider: this.providerName,
          storage: this.storage,
          coinsCache: this.getCoins(),
          pathsCache: this.getPaths(),
          coinsMetadataCache: this.coinsMetadataCache,
        });
      } catch (error) {
        console.error("[Flowx] Caches update failed:", error);
      }
    }
  }

  private updateCachesIntervally(): void {
    let isUpdatingCurrently = false;
    this.intervalId = setInterval(async () => {
      try {
        if (isUpdatingCurrently) {
          return;
        }
        isUpdatingCurrently = true;
        await this.updateCaches({ force: true });
      } finally {
        isUpdatingCurrently = false;
      }
    }, this.cacheOptions.updateIntervalInMs);

    exitHandlerWrapper({ intervalId: this.intervalId, providerName: this.providerName });
  }

  public async updateCoinsCache(): Promise<void> {
    const coinList = await getCoinsFlowX();
    const isValidResponse = isCoinListValid(coinList);

    if (!isValidResponse) {
      console.error("[Flowx] Coins response:", coinList);
      throw new Error("Coins response from API is not valid");
    }

    const { coinMap } = getCoinsMap({ coinList });
    // TODO: Remove that .map to separate method
    this.coinsMetadataCache = coinList.map((coin) => ({ type: coin.type, decimals: coin.decimals }));
    this.coinsCache = coinMap;
  }

  public async updatePathsCache(): Promise<void> {
    const pairs: ExtractedPairSettingsType[] = await getPairs();
    const isValidResponse = isPairListValid(pairs);

    if (!isValidResponse) {
      console.error("[Flowx] Pairs response:", pairs);
      throw new Error("Pairs response from API is not valid");
    }

    this.pathsCache = getPathsMap(pairs);
  }

  public getCoins(): UpdatedCoinsCache {
    const data = Array.from(this.coinsCache.values());

    return { provider: this.providerName, data };
  }

  public getPaths(): Map<string, CommonPoolData> {
    return this.pathsCache;
  }

  public async getRouteData({
    coinTypeFrom,
    coinTypeTo,
    inputAmount,
  }: {
    coinTypeFrom: string;
    coinTypeTo: string;
    inputAmount: string;
    slippagePercentage: number;
    publicKey: string;
  }): Promise<{ outputAmount: bigint; route: ExtendedSwapCalculatedOutputDataType }> {
    const tokenFromCoinNode: CommonCoinData | undefined = getCoinInfoFromCache(coinTypeFrom, this.coinsCache);
    const tokenToCoinNode: CommonCoinData | undefined = getCoinInfoFromCache(coinTypeTo, this.coinsCache);

    if (!tokenFromCoinNode) {
      throw new Error(`Coin ${coinTypeFrom} does not exist.`);
    }

    if (!tokenToCoinNode) {
      throw new Error(`Coin ${coinTypeTo} does not exist.`);
    }

    const { outputAmount, route } = await this.getSmartOutputAmountData({
      amountIn: inputAmount,
      tokenFrom: { address: tokenFromCoinNode.type, ...tokenFromCoinNode },
      tokenTo: { address: tokenToCoinNode.type, ...tokenToCoinNode },
    });

    return { outputAmount, route };
  }

  private async getSmartOutputAmountData({
    amountIn,
    tokenFrom,
    tokenTo,
  }: {
    amountIn: string;
    tokenFrom: CoinNode;
    tokenTo: CoinNode;
  }) {
    const swapData = await calculateAmountOutInternal(amountIn, tokenFrom, tokenTo, this.coinsMetadataCache);

    return { outputAmount: BigInt(swapData.amountOut.decimalAmount), route: { ...swapData, tokenFrom, tokenTo } };
  }

  public async getSwapTransaction({
    route,
    publicKey,
    slippagePercentage,
  }: {
    route: ExtendedSwapCalculatedOutputDataType;
    publicKey: string;
    slippagePercentage: number;
  }) {
    const absoluteSlippage = convertSlippage(slippagePercentage);

    const legacyTxBlock = await swapExactInput(
      false, // it should be false for now
      route.amountIn, // amount want to swap
      route.amountOut, // amount want to receive
      route.trades, // trades from calculate amount
      route.tokenFrom, // coin In data
      route.tokenTo, // coin Out data
      publicKey,
      absoluteSlippage, // slippage (0.05%)
    );

    const txBlock = new TransactionBlock(TransactionBlock.from(legacyTxBlock.serialize()));

    return txBlock;
  }
}
