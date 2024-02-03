/* eslint-disable require-jsdoc */

import { SuiClient } from "@mysten/sui.js/client";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import BigNumber from "bignumber.js";
import { Network, TurbosSdk } from "turbos-clmm-sdk";
import { EventEmitter } from "../../emitters/EventEmitter";
import { UpdatedCoinsCache } from "../../managers/types";
import { LONG_SUI_COIN_TYPE, SHORT_SUI_COIN_TYPE, exitHandlerWrapper } from "../common";
import { CacheOptions, CommonPoolData, IPoolProvider } from "../types";
import { convertSlippage } from "../utils/convertSlippage";
import { getCoinInfoFromCache } from "../utils/getCoinInfoFromCache";
import { CoinData, PoolData, SwapRequiredData, TurbosOptions } from "./types";
import { getCoinsMap, getPathsMap, getPoolByCoins, isCoinsApiResponseValid, isPoolsApiResponseValid } from "./utils";
import { removeDecimalPart } from "../utils/removeDecimalPart";

// TODO: Need a fallback in case when API doesn't work
// sdk.pool.getPools() doesn't work

/**
 * Represents a singleton instance of TurbosManager managing TurbosSdk functionality.
 *
 * @class TurbosSingleton
 */
export class TurbosSingleton extends EventEmitter implements IPoolProvider<TurbosSingleton> {
  /**
   * The singleton instance of TurbosSingleton.
   *
   * @private
   * @static
   * @type {TurbosSingleton}
   */
  private static _instance: TurbosSingleton;
  /**
   * The Turbos API URL.
   *
   * @private
   * @static
   * @type {string}
   */
  private static TURBOS_API_URL = "https://api.turbos.finance";
  /**
   * The instance of TurbosSdk.
   *
   * @public
   * @type {TurbosSdk}
   */
  public turbosSdk: TurbosSdk;
  public isSmartRoutingAvailable = false;
  public providerName = "Turbos";
  public poolsCache: PoolData[] = [];
  public pathsCache: Map<string, CommonPoolData> = new Map();
  public coinsCache: Map<string, CoinData> = new Map();
  private cacheOptions: CacheOptions;
  private intervalId: NodeJS.Timeout | undefined;
  private proxy: string | undefined;

  private constructor(options: Omit<TurbosOptions, "lazyLoading">) {
    super();
    const provider = new SuiClient({ url: options.suiProviderUrl });
    this.turbosSdk = new TurbosSdk(Network.mainnet, provider);
    this.cacheOptions = options.cacheOptions;
    this.proxy = options.proxy;
  }

  public static async getInstance(options?: TurbosOptions): Promise<TurbosSingleton> {
    if (!TurbosSingleton._instance) {
      if (options === undefined) {
        throw new Error("[TurbosManager] Options are required in arguments to create instance.");
      }
      const { suiProviderUrl, cacheOptions, lazyLoading = true, proxy } = options;

      const instance = new TurbosSingleton({ suiProviderUrl, cacheOptions, proxy });
      lazyLoading ? instance.init() : await instance.init();
      TurbosSingleton._instance = instance;
    }

    return TurbosSingleton._instance;
  }

  private async init() {
    console.debug(`[${this.providerName}] Singleton initiating.`);
    await this.updateCaches();
    this.updateCachesIntervally();
    this.bufferEvent("cachesUpdate", this.getCoins());
    console.debug(`[${this.providerName}] Singleton initialized.`);
  }

  public async updateCaches(): Promise<void> {
    try {
      await this.updatePoolsCache();
      this.updatePathsCache();
      await this.updateCoinsCache();
      this.emit("cachesUpdate", this.getCoins());
    } catch (error) {
      console.error("[Turbos] Caches update failed:", error);
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
    this.poolsCache = await this.fetchPoolsFromApi();
  }

  public updatePathsCache(): void {
    this.pathsCache = getPathsMap(this.poolsCache);
  }

  public async updateCoinsCache(): Promise<void> {
    const coins: CoinData[] = await this.fetchCoinsFromApi();
    this.coinsCache = getCoinsMap(coins);
  }

  /**
   * Gets pools data from the Turbos API.
   *
   * @public
   * @async
   * @return {Promise<PoolData[]>} A Promise that resolves to an array of PoolData.
   */
  public async fetchPoolsFromApi(): Promise<PoolData[]> {
    const url: string = this.proxy
      ? `${this.proxy}/${TurbosSingleton.TURBOS_API_URL}/pools`
      : `${TurbosSingleton.TURBOS_API_URL}/pools`;

    const response: Response = await fetch(url);
    const responseJson: { code: number; message: string; data: PoolData[] } = await response.json();
    const isValidPoolsResponse = isPoolsApiResponseValid(responseJson);

    if (!isValidPoolsResponse) {
      throw new Error("[Turbos] Pools response from API is not valid.");
    }

    return responseJson.data;
  }

  /**
   * Fetches coin data from the Turbos API.
   *
   * @public
   * @async
   * @return {Promise<CoinData[]>} A Promise that resolves to an array of CoinData.
   */
  public async fetchCoinsFromApi(): Promise<CoinData[]> {
    const response: Response = await fetch(`${TurbosSingleton.TURBOS_API_URL}/coins`);
    const responseJson: { code: number; message: string; data: CoinData[] } = await response.json();
    const isValidResponse = isCoinsApiResponseValid(responseJson);

    if (!isValidResponse) {
      throw new Error("[Turbos] Coins response from API is not valid.");
    }

    return responseJson.data;
  }

  public getPools(): PoolData[] {
    return this.poolsCache;
  }

  /**
   * Fetches the pool data and maps them into a map where the key is a combination of
   * `coin_type_a` and `coin_type_b` and the value is a `CommonPoolData` object.
   *
   * @return {Map<string, CommonPoolData>} Map of `CommonPoolData`.
   */
  public getPaths(): Map<string, CommonPoolData> {
    return this.pathsCache;
  }

  /**
   * Transforms coins cache to CommonCoinData format.
   *
   * @public
   * @async
   * @return {CommonCoinData[]} An array of CommonCoinData.
   */
  public getCoins(): UpdatedCoinsCache {
    const data = Array.from(this.coinsCache.values()).map((coin: CoinData) => ({
      symbol: coin.symbol.trim(),
      type: coin.type,
      decimals: coin.decimals,
    }));

    return { provider: this.providerName, data };
  }

  public async getRouteData({
    coinTypeFrom,
    coinTypeTo,
    inputAmount,
    publicKey,
  }: {
    coinTypeFrom: string;
    coinTypeTo: string;
    inputAmount: string;
    slippagePercentage: number;
    publicKey: string;
  }) {
    const { outputAmount, ...otherData } = await this.getSwapRequiredData({
      inputAmount,
      tokenFrom: coinTypeFrom,
      tokenTo: coinTypeTo,
      publicKey,
    });

    return { outputAmount, route: { outputAmount, ...otherData } };
  }

  /**
   * Retrieves swap-related data required for swapping tokens.
   *
   * @public
   * @async
   * @param {string} tokenFrom - The token from which the swap is initiated.
   * @param {string} tokenTo - The target token for the swap.
   * @param {number} inputAmount - The amount of the input token for the swap.
   * @param {string} publicKey - The public key of the user initiating the swap.
   * @return {Promise<SwapRequiredData>} A Promise that resolves to the SwapRequiredData for the swap.
   * @throws {Error} Throws an error if there is no pool with the specified coin types.
   */
  public async getSwapRequiredData({
    tokenFrom,
    tokenTo,
    inputAmount,
    publicKey,
  }: {
    tokenFrom: string;
    tokenTo: string;
    inputAmount: string;
    publicKey: string;
  }): Promise<SwapRequiredData> {
    const pool: PoolData | undefined = getPoolByCoins(tokenFrom, tokenTo, this.poolsCache);

    if (!pool) {
      throw new Error(`[TurbosManager] Pool with coin types "${tokenFrom}" and "${tokenTo}" is not found.`);
    }

    const poolId: string = pool.pool_id;
    const tokenFromIsSui: boolean = tokenFrom === SHORT_SUI_COIN_TYPE || tokenFrom === LONG_SUI_COIN_TYPE;
    const tokenFromIsTokenA: boolean = tokenFromIsSui
      ? pool.coin_type_a === SHORT_SUI_COIN_TYPE || pool.coin_type_a === LONG_SUI_COIN_TYPE
      : pool.coin_type_a === tokenFrom;
    const inputCoin: CoinData | undefined = getCoinInfoFromCache(tokenFrom, this.coinsCache);

    if (!inputCoin) {
      throw new Error(`[TurbosManager] Cannot find coin with type "${tokenFrom}".`);
    }

    const inputCoinDecimals: number = inputCoin.decimals;
    const inputAmountWithDecimalsBigNumber = new BigNumber(inputAmount).multipliedBy(10 ** inputCoinDecimals);
    // We do removing the decimal part in case client send number with more decimal part
    // than this particular token has decimal places allowed (`inputCoinDecimals`)
    // That's prevent situation when casting
    // BigNumber to BigInt fails with error ("Cannot convert 183763562.1 to a BigInt")
    const inputAmountWithoutExceededDecimalPart = removeDecimalPart(inputAmountWithDecimalsBigNumber);
    const inputAmountWithDecimals = inputAmountWithoutExceededDecimalPart.toString();

    // TODO (possible improvement):
    // executing time could be reduced by patching this method to pass into it config (getConfig() inside)
    const swapResult = (
      await this.turbosSdk.trade.computeSwapResult({
        pools: [{ pool: poolId, a2b: tokenFromIsTokenA }],
        address: publicKey,
        amountSpecified: inputAmountWithDecimals,
        amountSpecifiedIsInput: true,
      })
    )[0];
    const nextTickIndex: number = this.turbosSdk.math.bitsToNumber(swapResult.tick_current_index.bits);
    const outputAmount: string = tokenFromIsTokenA ? swapResult.amount_b : swapResult.amount_a;

    return {
      outputAmount: BigInt(outputAmount),
      nextTickIndex,
      pool,
      inputAmountWithDecimals,
      tokenFromIsTokenA,
    };
  }

  /**
   * Gets a transaction block for swapping tokens based on provided swap data.
   *
   * @public
   * @async
   * @param {SwapRequiredData} swapRequiredData - The required data for the swap.
   * @param {string} publicKey - The public key of the user.
   * @param {number} [slippagePercentage=10] - The slippage percentage.
   * @return {Promise<TransactionBlock>} A Promise that resolves to a TransactionBlock.
   */
  public async getSwapTransaction({
    route,
    publicKey,
    slippagePercentage = 10,
  }: {
    route: SwapRequiredData;
    publicKey: string;
    slippagePercentage: number;
  }): Promise<TransactionBlock> {
    const { pool, outputAmount, nextTickIndex, inputAmountWithDecimals, tokenFromIsTokenA } = route;
    const parsedSlippage: string = convertSlippage(slippagePercentage).toString();

    const transaction: TransactionBlock = await this.turbosSdk.trade.swap({
      routes: [{ pool: pool.pool_id, a2b: tokenFromIsTokenA, nextTickIndex }],
      coinTypeA: tokenFromIsTokenA ? pool.coin_type_a : pool.coin_type_b,
      coinTypeB: tokenFromIsTokenA ? pool.coin_type_b : pool.coin_type_a,
      address: publicKey,
      amountA: inputAmountWithDecimals,
      amountB: outputAmount.toString(),
      amountSpecifiedIsInput: true,
      slippage: parsedSlippage,
    });

    return transaction;
  }
}
