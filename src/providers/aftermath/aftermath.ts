/* eslint-disable new-cap */
/* eslint-disable require-jsdoc */
import { TransactionBlock } from "@mysten/sui.js/transactions";
import { Aftermath, CoinMetadaWithInfo, Pool, RouterCompleteTradeRoute } from "aftermath-ts-sdk";
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
import { AftermathOptions, SmartOutputAmountData } from "./types";
import { getPathMapAndCoinTypesSet, isApiResponseValid, isCoinMetadaWithInfoApiResponseValid } from "./utils";

/**
 * Note: If using `lazyLoading: true` and in-memory cache in a serverless/cloud functions environment,
 * be aware that each invocation of your cloud function will start cache population from scratch.
 * This may lead to unexpected behavior when using different SDK methods. To avoid this,
 * when running your app in a serverless environment with `lazyLoading: true` option,
 * consider passing a persistent storage adapter (external, e.g., Redis or any kind of DB) to the ProviderSingleton.
 */
export class AftermathSingleton extends EventEmitter implements IPoolProvider<AftermathSingleton> {
  private static _instance: AftermathSingleton;
  public isSmartRoutingAvailable = true;
  public providerName = "Aftermath";
  public aftermathSdk: Aftermath;
  public poolsCache: Pool[] = [];
  public pathsCache: PathsCache = new Map();
  public coinsCache: CoinsCache = new Map();
  private cacheOptions: CacheOptions;
  private intervalId: NodeJS.Timeout | undefined;
  private storage: Storage;

  private constructor(options: Omit<AftermathOptions, "lazyLoading">) {
    super();
    this.aftermathSdk = new Aftermath("MAINNET");
    this.cacheOptions = options.cacheOptions;
    this.storage = options.cacheOptions.storage ?? InMemoryStorageSingleton.getInstance();
  }

  public static async getInstance(options?: AftermathOptions): Promise<AftermathSingleton> {
    if (!AftermathSingleton._instance) {
      if (options === undefined) {
        throw new Error("[Aftermath] Options are required in arguments to create instance.");
      }

      const { cacheOptions, lazyLoading = true } = options;

      const instance = new AftermathSingleton({ cacheOptions });
      lazyLoading ? instance.init() : await instance.init();
      AftermathSingleton._instance = instance;
    }

    return AftermathSingleton._instance;
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

      this.coinsCache = coinsCache;
      this.pathsCache = pathsCache;
    } catch (error) {
      console.error(`[${this.providerName}] fillCacheFromStorage failed:`, error);
    }
  }

  private isStorageCacheEmpty() {
    const isCacheEmpty = this.coinsCache.size === 0 || this.pathsCache.size === 0;

    return isCacheEmpty;
  }

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
      } catch (error) {
        console.error("[Aftermath] Caches update failed:", error);
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

  public async updatePoolsCache(): Promise<void> {
    const poolsInstance = this.aftermathSdk.Pools();
    const pools: Pool[] = await poolsInstance.getAllPools();
    const isValidPoolsResponse = isApiResponseValid(pools);

    if (!isValidPoolsResponse) {
      console.error("[Aftermath] Pools response:", pools);
      throw new Error("Pools response from API is not valid");
    }

    this.poolsCache = pools;
  }

  public async updatePathsAndCoinsCache(): Promise<void> {
    const { pathMap, coinTypesSet } = getPathMapAndCoinTypesSet(this.poolsCache);
    this.pathsCache = pathMap;

    await Promise.all(
      Array.from(coinTypesSet.values()).map(async (coinType: string) => {
        try {
          const coin = this.aftermathSdk.Coin();
          const metadata: CoinMetadaWithInfo = await coin.getCoinMetadata(coinType);

          const isValidCoinMetadataResponse = isCoinMetadaWithInfoApiResponseValid(metadata);

          if (isValidCoinMetadataResponse) {
            this.coinsCache.set(coinType, { symbol: metadata.symbol, type: coinType, decimals: metadata.decimals });
          }
        } catch (error) {
          console.error(`[Aftermath] Error while fetching metadata about coin ${coinType}:`, error);
        }
      }),
    );
  }

  public getPool(coinTypeA: string, coinTypeB: string): Pool {
    const pool: Pool | undefined = this.poolsCache.find(
      (pool: Pool) =>
        Object.keys(pool.pool.coins).includes(coinTypeA) && Object.keys(pool.pool.coins).includes(coinTypeB),
    );

    if (!pool) {
      throw new Error(`[Aftermath] Cannot find pool with coinTypeA "${coinTypeA}" and coinTypeB "${coinTypeB}".`);
    }

    return pool;
  }

  public getPools(): Pool[] {
    return this.poolsCache;
  }

  public getCoins(): UpdatedCoinsCache {
    const allCoins: CommonCoinData[] = Array.from(this.coinsCache.values());
    return { provider: this.providerName, data: allCoins };
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
  }) {
    const { outputAmount, route } = await this.getSmartOutputAmountData(coinTypeFrom, coinTypeTo, inputAmount);

    return { outputAmount, route };
  }

  public getDirectOutputAmount(pool: Pool, inputAmount: string, coinTypeFrom: string, coinTypeTo: string): bigint {
    const coinFromDecimals: number | undefined = pool.pool.coins[coinTypeFrom].decimals;

    if (coinFromDecimals === undefined) {
      throw new Error(`[Aftermath] Coin with type "${coinTypeFrom}" has no decimals.`);
    }

    const coinInAmountBigNumber = new BigNumber(inputAmount).multipliedBy(10 ** coinFromDecimals);
    const coinInAmount = BigInt(coinInAmountBigNumber.toString());
    const outputAmount: bigint = pool.getTradeAmountOut({
      coinInAmount,
      coinInType: coinTypeFrom,
      coinOutType: coinTypeTo,
    });

    return outputAmount;
  }

  public async getSmartOutputAmountData(
    coinTypeFrom: string,
    coinTypeTo: string,
    inputAmount: string,
  ): Promise<SmartOutputAmountData> {
    const coinTypeFromInfo: CommonCoinData | undefined = getCoinInfoFromCache(coinTypeFrom, this.coinsCache);

    if (coinTypeFromInfo === undefined) {
      throw new Error(`[Aftermath] Cannot find info about coin "${coinTypeFrom}".`);
    }

    const inputCoinDecimals: number = coinTypeFromInfo.decimals;
    const inputAmountWithDecimalsBigNumber = new BigNumber(inputAmount).multipliedBy(10 ** inputCoinDecimals);
    // We do removing the decimal part in case client send number with more decimal part
    // than this particular token has decimal places allowed (`inputCoinDecimals`)
    // That's prevent situation when casting
    // BigNumber to BigInt fails with error ("Cannot convert 183763562.1 to a BigInt")
    const inputAmountWithoutExceededDecimalPart = removeDecimalPart(inputAmountWithDecimalsBigNumber);
    const inputAmountWithDecimals = BigInt(inputAmountWithoutExceededDecimalPart.toString());

    const routerInstance = this.aftermathSdk.Router();
    const route: RouterCompleteTradeRoute = await routerInstance.getCompleteTradeRouteGivenAmountIn({
      coinInType: coinTypeFrom,
      coinOutType: coinTypeTo,
      coinInAmount: inputAmountWithDecimals,
    });

    const smartOutputAmount: bigint = route.coinOut.amount;

    return { outputAmount: smartOutputAmount, route };
  }

  public async getSwapTransaction({
    route,
    publicKey,
    slippagePercentage = 10,
  }: {
    route: RouterCompleteTradeRoute;
    publicKey: string;
    slippagePercentage: number;
  }): Promise<TransactionBlock> {
    const absoluteSlippage: number = convertSlippage(slippagePercentage);

    const routerInstance = this.aftermathSdk.Router();
    const modernTxBlock = await routerInstance.getTransactionForCompleteTradeRoute({
      walletAddress: publicKey,
      completeRoute: route,
      slippage: absoluteSlippage,
    });

    const txBlock = new TransactionBlock(TransactionBlock.from(modernTxBlock.serialize()));

    return txBlock;
  }
}
