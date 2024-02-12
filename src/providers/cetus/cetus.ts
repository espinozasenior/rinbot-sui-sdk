import CetusClmmSDK, { AggregatorResult, PathLink, TransactionUtil } from "@cetusprotocol/cetus-sui-clmm-sdk";
import BigNumber from "bignumber.js";
import { EventEmitter } from "../../emitters/EventEmitter";
import { CommonCoinData, UpdatedCoinsCache } from "../../managers/types";
import { InMemoryStorageSingleton } from "../../storages/InMemoryStorage";
import { Storage } from "../../storages/types";
import { exitHandlerWrapper } from "../common";
import { CacheOptions, CoinsCache, CommonPoolData, IPoolProvider, PathsCache } from "../types";
import { convertSlippage } from "../utils/convertSlippage";
import { getCoinInfoFromCache } from "../utils/getCoinInfoFromCache";
import { removeDecimalPart } from "../utils/removeDecimalPart";
import { getCoinsAndPathsCaches } from "../../storages/utils/getCoinsAndPathsCaches";
import { storeCaches } from "../../storages/utils/storeCaches";
import { CENTRALIZED_POOLS_INFO_ENDPOINT } from "./config";
import { CetusOptions, CoinMap, CoinNodeWithSymbol, LPList } from "./types";
import { getCoinsAndPathsCachesFromMaps, getPoolsDataFromApiData, isApiResponseValid } from "./utils";

/**
 * @class CetusSingleton
 * @extends EventEmitter
 * @implements {IPoolProvider<CetusSingleton>}
 * @description Singleton class for Cetus.
 *
 * Note: If using `lazyLoading: true` with any storage configuration in a serverless/cloud functions environment,
 * be aware that each invocation of your cloud function will start cache population from scratch.
 * This may lead to unexpected behavior when using different SDK methods. To avoid this and minimize the time
 * for cache population, consider using `lazyLoading: false` along with passing a persistent
 * storage adapter (external, e.g., Redis or any kind of DB) to the ProviderSingleton.
 */
export class CetusSingleton extends EventEmitter implements IPoolProvider<CetusSingleton> {
  private static _instance: CetusSingleton;
  public providerName = "Cetus";
  public isSmartRoutingAvailable = true;
  public cetusSdk: CetusClmmSDK;
  public poolsCache: LPList[] = [];
  public pathsCache: PathsCache = new Map();
  // The `cetusPathsCache` is workaround property to make it compatible with the Cetus SDK interface
  public cetusPathsCache: Map<string, PathLink> = new Map();
  public coinsCache: CoinsCache = new Map();
  // The `cetusCoinsCache` is workaround property to make it compatible with the Cetus SDK interface
  private cetusCoinsCache: CoinMap = new Map();
  private cacheOptions: CacheOptions;
  private useOnChainFallback = false;
  private intervalId: NodeJS.Timeout | undefined;
  private proxy: string | undefined;
  private storage: Storage;

  /**
   * @constructor
   * @param {Omit<CetusOptions, "lazyLoading">} options - The options for CetusSingleton.
   */
  private constructor(options: Omit<CetusOptions, "lazyLoading">) {
    super();
    this.cetusSdk = new CetusClmmSDK({
      fullRpcUrl: options.suiProviderUrl,
      simulationAccount: { address: options.simulationAccount || "" },
      ...options.sdkOptions,
    });
    this.cacheOptions = options.cacheOptions;
    this.proxy = options.proxy;
    this.storage = options.cacheOptions.storage ?? InMemoryStorageSingleton.getInstance();
  }

  /**
   * @public
   * @method getInstance
   * @description Gets the singleton instance of CetusSingleton.
   * @param {CetusOptions} [options] - Options for CetusSingleton.
   * @return {Promise<CetusSingleton>} The singleton instance of CetusSingleton.
   */
  public static async getInstance(options?: CetusOptions): Promise<CetusSingleton> {
    if (!CetusSingleton._instance) {
      if (options === undefined) {
        throw new Error("[Cetus] Options are required in arguments to create instance.");
      }

      const { sdkOptions, cacheOptions, lazyLoading = true, suiProviderUrl, proxy, simulationAccount } = options;

      const instance = new CetusSingleton({ sdkOptions, cacheOptions, suiProviderUrl, proxy, simulationAccount });
      lazyLoading ? instance.init() : await instance.init();
      CetusSingleton._instance = instance;
    }

    return CetusSingleton._instance;
  }

  /**
   * @private
   * @method init
   * @description Initializes the CetusSingleton instance.
   * @return {Promise<void>} A Promise that resolves when initialization is complete.
   */
  private async init() {
    console.debug(`[${this.providerName}] Singleton initiating.`);

    await this.fillCacheFromStorage();
    await this.updateCaches();
    this.updateCachesIntervally();

    this.bufferEvent("cachesUpdate", this.getCoins());
  }

  /**
   * Fills the cache from storage asynchronously.
   *
   * @private
   * @return {Promise<void>} A promise that resolves when the cache is filled from storage.
   */
  private async fillCacheFromStorage(): Promise<void> {
    try {
      const { coinsCache, pathsCache } = await getCoinsAndPathsCaches({
        storage: this.storage,
        provider: this.providerName,
        updateCacheInterval: this.cacheOptions.updateIntervalInMs,
      });

      this.coinsCache = coinsCache;
      this.pathsCache = pathsCache;
    } catch (error) {
      console.error(`[${this.providerName}] fillCacheFromStorage failed:`, error);
    }
  }

  /**
   * Checks if the storage cache is empty.
   *
   * @private
   * @return {boolean} True if the storage cache is empty, false otherwise.
   */
  private isStorageCacheEmpty() {
    const isCacheEmpty = this.coinsCache.size === 0 || this.pathsCache.size === 0;

    return isCacheEmpty;
  }

  /**
   * @private
   * @method updateCaches
   * @description Updates the caches for pools, paths, and coins.
   * @return {Promise<void>} A Promise that resolves when caches are updated.
   */
  private async updateCaches({ force }: { force: boolean } = { force: false }): Promise<void> {
    const isCacheEmpty = this.isStorageCacheEmpty();

    if (isCacheEmpty || force) {
      try {
        await this.updatePoolsCache();
        this.updatePathsAndCoinsCache();
        this.useOnChainFallback && this.updateGraph();
        this.emit("cachesUpdate", this.getCoins());

        await storeCaches({
          provider: this.providerName,
          storage: this.storage,
          coinsCache: this.getCoins(),
          pathsCache: this.getPaths(),
        });
      } catch (error) {
        console.error("[Cetus] Caches update failed:", error);
      }
    }
  }

  /**
   * @private
   * @method updateCachesIntervally
   * @description Updates the caches at regular intervals.
   * @return {void}
   */
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

  /**
   * @private
   * @method updatePoolsCache
   * @description Updates the pools cache.
   * @return {Promise<void>} A Promise that resolves when the pools cache is updated.
   */
  private async updatePoolsCache(): Promise<void> {
    this.poolsCache = await this.retrieveAllPoolsFromApi();
  }

  /**
   * @private
   * @method updatePathsAndCoinsCache
   * @description Updates the paths and coins cache.
   * @return {void}
   */
  private updatePathsAndCoinsCache(): void {
    const { poolMap, coinMap } = getPoolsDataFromApiData({ poolsInfo: this.poolsCache });
    this.cetusPathsCache = poolMap;
    this.cetusCoinsCache = coinMap;

    const { coinsCache, pathsCache } = getCoinsAndPathsCachesFromMaps({ coins: coinMap, paths: poolMap });
    this.pathsCache = pathsCache;
    this.coinsCache = coinsCache;
  }

  /**
   * @private
   * @method updateGraph
   * @description Updates the graph based on coins and paths.
   * @return {void}
   */
  public updateGraph(): void {
    const coins: CoinNodeWithSymbol[] = Array.from(this.cetusCoinsCache.values());
    const paths: PathLink[] = Array.from(this.cetusPathsCache.values());

    const coinsProvider = { coins };
    const pathsProvider = { paths };
    this.cetusSdk.Router.loadGraph(coinsProvider, pathsProvider);
  }

  /**
   * @private
   * @method retrievelAllPools
   * @description Retrieves all pools.
   * @return {Promise<any>} A Promise that resolves to the retrieved pools.
   */
  private async retrievelAllPools() {
    const pools = await this.cetusSdk.Pool.getPoolsWithPage([]);
    console.log(`[retrievelAllPools] pool length: ${pools.length}`);

    return pools;
  }

  /**
   * @private
   * @method retrieveAllPoolsFromApi
   * @description Retrieves all pools from the API.
   * @return {Promise<any>} A Promise that resolves to the retrieved pools.
   */
  private async retrieveAllPoolsFromApi() {
    const url: string = this.proxy
      ? `${this.proxy}/${CENTRALIZED_POOLS_INFO_ENDPOINT}`
      : CENTRALIZED_POOLS_INFO_ENDPOINT;

    const poolsResponse = await (await fetch(url)).json();
    const isValidPoolsResponse = isApiResponseValid(poolsResponse);

    if (!isValidPoolsResponse) {
      console.error("[Cetus] Pools response:", poolsResponse);
      throw new Error("Pools response from API is not valid");
    }

    return poolsResponse.data.lp_list;
  }

  /**
   * @public
   * @method getCoins
   * @description Gets the updated coins cache.
   * @return {UpdatedCoinsCache} Updated coins cache.
   */
  public getCoins(): UpdatedCoinsCache {
    const allCoins: CommonCoinData[] = Array.from(this.coinsCache.values());
    return { provider: this.providerName, data: allCoins };
  }

  /**
   * @public
   * @method getPaths
   * @description Gets the paths cache.
   * @return {Map<string, CommonPoolData>} Paths cache.
   */
  public getPaths(): Map<string, CommonPoolData> {
    return this.pathsCache;
  }

  /**
   * @public
   * @method getRouteData
   * @description Gets route data.
   * @param {Object} params - Parameters for route data.
   * @param {string} params.coinTypeFrom - Coin type from.
   * @param {string} params.coinTypeTo - Coin type to.
   * @param {string} params.inputAmount - Input amount.
   * @param {number} params.slippagePercentage - Slippage percentage.
   * @param {string} params.publicKey - Public key.
   * @return {Promise<{ outputAmount: bigint, route: RouterCompleteTradeRoute }>} Route data.
   */
  public async getRouteData({
    coinTypeFrom,
    coinTypeTo,
    inputAmount,
    slippagePercentage = 10,
  }: {
    coinTypeFrom: string;
    coinTypeTo: string;
    inputAmount: string;
    slippagePercentage: number;
    publicKey: string;
  }) {
    const coinFrom: CommonCoinData | undefined = getCoinInfoFromCache(coinTypeFrom, this.coinsCache);
    const coinTo: CommonCoinData | undefined = getCoinInfoFromCache(coinTypeTo, this.coinsCache);

    if (coinFrom === undefined) {
      throw new Error(`[Cetus] Cannot find coin with address "${coinTypeFrom}".`);
    } else if (coinTo === undefined) {
      throw new Error(`[Cetus] Cannot find coin with address "${coinTypeTo}".`);
    }

    const { outputAmount, route } = await this.getSmartOutputAmountData({
      amountIn: inputAmount,
      tokenFrom: coinFrom,
      tokenTo: coinTo,
      slippagePercentage,
    });

    return { outputAmount, route };
  }

  /**
   * @private
   * @method getSmartOutputAmountData
   * @description Retrieves smart output amount data for the given coin types and input amount.
   * @param {Object} params - Parameters for smart output amount data.
   * @param {string} params.amountIn - The input amount.
   * @param {CoinNode} params.tokenFrom - The token from object.
   * @param {CoinNode} params.tokenTo - The token to object.
   * @param {number} params.slippagePercentage - The slippage percentage.
   * @return {Promise<SmartOutputAmountData>} A Promise that resolves to smart output amount data.
   */
  private async getSmartOutputAmountData({
    amountIn,
    tokenFrom,
    tokenTo,
    slippagePercentage,
  }: {
    amountIn: string;
    tokenFrom: CommonCoinData;
    tokenTo: CommonCoinData;
    slippagePercentage: number;
  }) {
    const absoluteSlippage = convertSlippage(slippagePercentage);

    const amountInWithDecimalsBigNumber = new BigNumber(amountIn).multipliedBy(10 ** tokenFrom.decimals);
    // We do removing the decimal part in case client send number with more decimal part
    // than this particular token has decimal places allowed (`inputCoinDecimals`)
    // That's prevent situation when casting
    // BigNumber to BigInt fails with error ("Cannot convert 183763562.1 to a BigInt")
    const inputAmountWithoutExceededDecimalPart = removeDecimalPart(amountInWithDecimalsBigNumber);
    const amountInt = inputAmountWithoutExceededDecimalPart.toNumber();

    const rawRouterResult = await this.cetusSdk.RouterV2.getBestRouter(
      tokenFrom.type,
      tokenTo.type,
      amountInt,
      true,
      absoluteSlippage,
      "",
    );

    const routerResult = rawRouterResult.result;

    if (routerResult.isExceed) {
      throw new Error("Finding route for such swap path exceeded limit");
    }

    return { outputAmount: BigInt(routerResult.outputAmount), route: routerResult };
  }

  /**
   * @public
   * @method getSwapTransaction
   * @description Retrieves the swap transaction for the given route and public key.
   * @param {Object} params - Parameters for the swap transaction.
   * @param {AggregatorResult} params.route - The route object.
   * @param {string} params.publicKey - The public key.
   * @param {number} params.slippagePercentage - The slippage percentage.
   * @return {Promise<any>} A Promise that resolves to the swap transaction payload.
   */
  public async getSwapTransaction({
    route,
    publicKey,
    slippagePercentage,
  }: {
    route: AggregatorResult;
    publicKey: string;
    slippagePercentage: number;
  }) {
    const absoluteSlippage = convertSlippage(slippagePercentage);
    // If find the best swap router, then send transaction.
    console.debug("txSignerPubkey: ", publicKey);
    const allCoinAsset = await this.cetusSdk.getOwnerCoinAssets(publicKey);
    // If recipient not set, transfer objects move call will use ctx sender.
    const payload = await TransactionUtil.buildAggregatorSwapTransaction(
      this.cetusSdk,
      route,
      allCoinAsset,
      "",
      absoluteSlippage,
      publicKey,
    );

    return payload;
  }
}
