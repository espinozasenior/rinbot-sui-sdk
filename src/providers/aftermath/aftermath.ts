/* eslint-disable new-cap */
/* eslint-disable require-jsdoc */
import { TransactionBlock } from "@mysten/sui.js/transactions";
import { Aftermath, CoinMetadaWithInfo, Pool, RouterCompleteTradeRoute } from "aftermath-ts-sdk";
import BigNumber from "bignumber.js";
import { EventEmitter } from "../../emitters/EventEmitter";
import { CommonCoinData, UpdatedCoinsCache } from "../../managers/types";
import { exitHandlerWrapper } from "../common";
import { CacheOptions, CommonPoolData, IPoolProvider } from "../types";
import { convertSlippage } from "../utils/convertSlippage";
import { getCoinInfoFromCache } from "../utils/getCoinInfoFromCache";
import { AftermathOptions, SmartOutputAmountData } from "./types";
import { getPathMapAndCoinTypesSet, isApiResponseValid, isCoinMetadaWithInfoApiResponseValid } from "./utils";
import { removeDecimalPart } from "../utils/removeDecimalPart";

export class AftermathSingleton extends EventEmitter implements IPoolProvider<AftermathSingleton> {
  private static _instance: AftermathSingleton;
  public isSmartRoutingAvailable = true;
  public providerName = "Aftermath";
  public aftermathSdk: Aftermath;
  public poolsCache: Pool[] = [];
  public pathsCache: Map<string, CommonPoolData> = new Map();
  public coinsCache: Map<string, CoinMetadaWithInfo> = new Map();
  private cacheOptions: CacheOptions;
  private intervalId: NodeJS.Timeout | undefined;

  private constructor(options: Omit<AftermathOptions, "lazyLoading">) {
    super();
    this.aftermathSdk = new Aftermath("MAINNET");
    this.cacheOptions = options.cacheOptions;
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
    await this.updateCaches();
    this.updateCachesIntervally();
    this.bufferEvent("cachesUpdate", this.getCoins());
  }

  public async updateCaches(): Promise<void> {
    try {
      await this.updatePoolsCache();
      await this.updatePathsAndCoinsCache();
      this.emit("cachesUpdate", this.getCoins());
    } catch (error) {
      console.error("[Aftermath] Caches update failed:", error);
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
        await this.updateCaches();
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
            this.coinsCache.set(coinType, metadata);
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
    const allCoins: CommonCoinData[] = [];
    this.coinsCache.forEach((coinMetadata: CoinMetadaWithInfo, coinType: string) =>
      allCoins.push({ symbol: coinMetadata.symbol, type: coinType, decimals: coinMetadata.decimals }),
    );

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
    const coinTypeFromInfo: CoinMetadaWithInfo | undefined = getCoinInfoFromCache(coinTypeFrom, this.coinsCache);

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
