/* eslint-disable require-jsdoc */
import { CLAMM, InterestPool } from "@interest-protocol/clamm-sdk";
import { SuiClient } from "@mysten/sui.js-0.51.2/client";
import { CoinMetadata } from "@mysten/sui.js/client";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import BigNumber from "bignumber.js";
import { EventEmitter } from "../../emitters/EventEmitter";
import { WalletManagerSingleton } from "../../managers/WalletManager";
import { CommonCoinData, UpdatedCoinsCache } from "../../managers/types";
import { InMemoryStorageSingleton } from "../../storages/InMemoryStorage";
import { Storage } from "../../storages/types";
import { getCoinsAndPathsCaches } from "../../storages/utils/getCoinsAndPathsCaches";
import { storeCaches } from "../../storages/utils/storeCaches";
import { exitHandlerWrapper } from "../common";
import { CacheOptions, CoinsCache, CommonPoolData, IPoolProvider, PathsCache } from "../types";
import { getUserCoinObjects } from "../utils/getUserCoinObjects";
import { isApiResponseValid } from "./type-guards";
import { InterestOptions, InterestRouteData } from "./types";
import { getPathMapAndCoinTypesSet } from "./utils";

export class InterestProtocolSingleton extends EventEmitter implements IPoolProvider<InterestProtocolSingleton> {
  private static _instance: InterestProtocolSingleton | undefined;
  private static INTEREST_PROTOCOL_PACKAGE_ADDRESS =
    "0xf47f67d87aad51b6bd476bf41bf578fd04ba444f6eab8e80950186f166ea1dba";
  private static INTEREST_PROTOCOL_SUI_TEARS = "0xf7334947a5037552a94cee15fc471dbda71bf24d46c97ee24e1fdac38e26644c";
  private provider: SuiClient;
  private cacheOptions: CacheOptions;
  private intervalId: NodeJS.Timeout | undefined;
  private storage: Storage;

  public interestSdk: CLAMM;
  public providerName = "Interest";
  public isSmartRoutingAvailable = false;
  public pathsCache: PathsCache = new Map();
  public coinsCache: CoinsCache = new Map();
  public poolsCache: InterestPool[] = [];

  private constructor(options: Omit<InterestOptions, "lazyLoading">) {
    super();

    this.provider = new SuiClient({ url: options.suiProviderUrl });

    this.interestSdk = new CLAMM({
      suiClient: this.provider,
      packageAddress: InterestProtocolSingleton.INTEREST_PROTOCOL_PACKAGE_ADDRESS,
      network: "mainnet",
      suiTearsAddress: InterestProtocolSingleton.INTEREST_PROTOCOL_SUI_TEARS,
    });

    const { updateIntervally = true, ...restCacheOptions } = options.cacheOptions;
    this.cacheOptions = { updateIntervally, ...restCacheOptions };
    this.storage = options.cacheOptions.storage ?? InMemoryStorageSingleton.getInstance();
  }

  public static async getInstance(options?: InterestOptions): Promise<InterestProtocolSingleton> {
    if (!InterestProtocolSingleton._instance) {
      if (options === undefined) {
        throw new Error("[InterestProtocolSingleton] Options are required in arguments to create instance.");
      }
      const { suiProviderUrl, cacheOptions, lazyLoading = true } = options;

      const instance = new InterestProtocolSingleton({ suiProviderUrl, cacheOptions });
      lazyLoading ? instance.init() : await instance.init();

      InterestProtocolSingleton._instance = instance;
    }

    return InterestProtocolSingleton._instance;
  }

  /**
   * @private
   * @method init
   * @description Initializes the InterestProtocolSingleton instance.
   * @return {Promise<void>}
   */
  private async init() {
    console.debug(`[${this.providerName}] Singleton initiating.`);
    await this.fillCacheFromStorage();
    await this.updateCaches();
    this.cacheOptions.updateIntervally && this.updateCachesIntervally();

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
   * @description Updates caches.
   * @return {Promise<void>}
   */
  private async updateCaches({ force }: { force: boolean } = { force: false }): Promise<void> {
    const isCacheEmpty = this.isStorageCacheEmpty();

    if (isCacheEmpty || force) {
      try {
        await this.updatePoolsCache();
        await this.updatePathsAndCoinsCache();
        this.emit("cachesUpdate", this.getCoins());

        await storeCaches({
          provider: this.providerName,
          storage: this.storage,
          coinsCache: this.getCoins(),
          pathsCache: this.getPaths(),
        });

        console.debug("[Interest] Caches are updated and stored.");
      } catch (error) {
        console.error("[Interest] Caches update failed:", error);
      }
    }
  }

  /**
   * @private
   * @method updateCachesIntervally
   * @description Updates caches periodically.
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
   * @description Updates pools cache.
   * @return {Promise<void>}
   */
  private async updatePoolsCache(): Promise<void> {
    // TODO: Replace this method usage with the new Interest SDK method
    async function getAllPools() {
      return [];
    }

    const pools: InterestPool[] = await getAllPools();
    const isValidPoolsResponse = isApiResponseValid(pools);

    if (!isValidPoolsResponse) {
      console.error("[Interest] Pools response:", pools);
      throw new Error("Pools response from API is not valid");
    }

    this.poolsCache = pools;
  }

  /**
   * @private
   * @method updatePathsAndCoinsCache
   * @description Updates paths and coins cache.
   * @return {Promise<void>}
   */
  private async updatePathsAndCoinsCache(): Promise<void> {
    const { pathMap, coinTypesSet } = getPathMapAndCoinTypesSet(this.poolsCache);
    this.pathsCache = pathMap;

    await Promise.all(
      Array.from(coinTypesSet.values()).map(async (coinType: string) => {
        try {
          const metadata: CoinMetadata | null = await this.provider.getCoinMetadata({ coinType });

          if (metadata !== null) {
            this.coinsCache.set(coinType, { symbol: metadata.symbol, type: coinType, decimals: metadata.decimals });
          }
        } catch (error) {
          console.error(`[Interest] Error while fetching metadata about coin ${coinType}:`, error);
        }
      }),
    );
  }

  /**
   * @public
   * @method getPool
   * @description Gets the pool with the specified coin types.
   * @param {string} coinTypeA - Coin type A.
   * @param {string} coinTypeB - Coin type B.
   * @return {Pool} The pool object.
   */
  public getPool(coinTypeA: string, coinTypeB: string): InterestPool {
    const pool: InterestPool | undefined = this.poolsCache.find(
      (pool: InterestPool) => pool.coinTypes.includes(coinTypeA) && pool.coinTypes.includes(coinTypeB),
    );

    if (!pool) {
      throw new Error(`[Interest] Cannot find pool with coinTypeA "${coinTypeA}" and coinTypeB "${coinTypeB}".`);
    }

    return pool;
  }

  /**
   * @public
   * @method getPools
   * @description Gets all pools.
   * @return {InterestPool[]} Array of pools.
   */
  public getPools(): InterestPool[] {
    return this.poolsCache;
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
  }): Promise<{ outputAmount: bigint; route: InterestRouteData }> {
    const inputCoinData = await this.provider.getCoinMetadata({ coinType: coinTypeFrom });

    if (inputCoinData === null) {
      throw new Error(`[Interest] Cannot get coin metadata for "${coinTypeFrom}".`);
    }

    const inputCoinDecimals = inputCoinData.decimals;
    const formattedInputAmount = new BigNumber(inputAmount).multipliedBy(10 ** inputCoinDecimals).toString();

    const pool = this.getPool(coinTypeFrom, coinTypeTo);

    const { amount } = await this.interestSdk.quoteSwap({
      pool,
      coinInType: coinTypeFrom,
      coinOutType: coinTypeTo,
      amount: BigInt(formattedInputAmount),
    });

    return {
      outputAmount: amount,
      route: { pool, minAmount: amount, inputCoinType: coinTypeFrom, outputCoinType: coinTypeTo },
    };
  }

  public async getSwapTransaction({
    route,
    publicKey,
  }: {
    route: InterestRouteData;
    publicKey: string;
    slippagePercentage: number;
  }): Promise<TransactionBlock> {
    const { inputCoinType, outputCoinType, minAmount, pool } = route;

    const inputCoinObjects = await getUserCoinObjects({ coinType: inputCoinType, provider: this.provider, publicKey });
    const { destinationObjectId, tx } = WalletManagerSingleton.mergeAllCoinObjects({
      coinObjects: inputCoinObjects,
    });

    const { coinOut, txb } = await this.interestSdk.swap({
      txb: tx,
      coinIn: tx.object(destinationObjectId),
      coinInType: inputCoinType,
      coinOutType: outputCoinType,
      pool,
      minAmount,
    });

    txb.transferObjects([coinOut], txb.pure(publicKey));

    const txBlock = new TransactionBlock(TransactionBlock.from(txb.serialize()));

    return txBlock;
  }

  /**
   * Gets a transaction block for swapping tokens based on provided swap data.
   *
   * Note: This method is not implemented yet.
   *
   * @public
   * @async
   * @param {SwapRequiredData} route - The required data for the swap.
   * @param {string} publicKey - The public key of the user.
   * @param {number} [slippagePercentage=10] - The slippage percentage.
   * @return {Promise<TransactionBlock>} A Promise that resolves to a TransactionBlock.
   */
  public async getSwapTransactionDoctored({
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    route,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    publicKey,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    slippagePercentage = 10,
  }: {
    route: InterestRouteData;
    publicKey: string;
    slippagePercentage: number;
  }): Promise<TransactionBlock> {
    throw new Error(`[${this.providerName}] getSwapTransactionDoctored method not implemented`);
  }

  /**
   * Removes the current instance of AftermathSingleton.
   *
   * Disclaimer: While this method in this class is marked as public, it is strongly discouraged
   * to use it directly unless you are certain about the behavior.
   */
  public static removeInstance() {
    InterestProtocolSingleton._instance = undefined;
  }

  public buildDcaTxBlockAdapter = () => {
    throw new Error("Not implemented");
  };
}
