/* eslint-disable require-jsdoc */

import { getCoinsFlowX, getPairs, swapExactInput } from "@flowx-pkg/ts-sdk";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import { EventEmitter } from "../../emitters/EventEmitter";
import { UpdatedCoinsCache } from "../../managers/types";
import { exitHandlerWrapper } from "../common";
import { CacheOptions, CommonPoolData, IPoolProvider } from "../types";
import { convertSlippage } from "../utils/convertSlippage";
import { getCoinInfoFromCache } from "../utils/getCoinInfoFromCache";
import { calculateAmountOutInternal } from "./calculateAmountOutInternal";
import {
  CoinMap,
  CoinNode,
  ExtendedSwapCalculatedOutputDataType,
  ExtractedCoinMetadataType,
  ExtractedPairSettingsType,
  FlowxOptions,
} from "./types";
import { getCoinsMap, getPathsMap, isCoinListValid, isPairListValid } from "./utils";

export class FlowxSingleton extends EventEmitter implements IPoolProvider<FlowxSingleton> {
  private static _instance: FlowxSingleton;
  public providerName = "Flowx";
  public isSmartRoutingAvailable = true;
  public pathsCache: Map<string, CommonPoolData> = new Map();
  public coinsMapCache: CoinMap = new Map();
  public coinsMetadataCache: ExtractedCoinMetadataType[] = [];
  private cacheOptions: CacheOptions;
  private intervalId: NodeJS.Timeout | undefined;

  private constructor(options: Omit<FlowxOptions, "lazyLoading">) {
    super();
    this.cacheOptions = options.cacheOptions;
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
    await this.updateCaches();
    this.updateCachesIntervally();
    this.bufferEvent("cachesUpdate", this.getCoins());
    console.debug(`[${this.providerName}] Singleton initialized.`);
  }

  public async updateCaches(): Promise<void> {
    try {
      await this.updatePathsCache();
      await this.updateCoinsCache();
      this.emit("cachesUpdate", this.getCoins());
    } catch (error) {
      console.error("[Flowx] Caches update failed:", error);
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

  public async updateCoinsCache(): Promise<void> {
    const coinList = await getCoinsFlowX();
    const isValidResponse = isCoinListValid(coinList);

    if (!isValidResponse) {
      console.error("[Flowx] Coins response:", coinList);
      throw new Error("Coins response from API is not valid");
    }

    const { coinMap } = getCoinsMap({ coinList });
    this.coinsMetadataCache = coinList;
    this.coinsMapCache = coinMap;
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
    const data = Array.from(this.coinsMapCache.values());

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
    const tokenFromCoinNode: CoinNode | undefined = getCoinInfoFromCache(coinTypeFrom, this.coinsMapCache);
    const tokenToCoinNode: CoinNode | undefined = getCoinInfoFromCache(coinTypeTo, this.coinsMapCache);

    if (!tokenFromCoinNode) {
      throw new Error(`Coin ${coinTypeFrom} does not exist.`);
    }

    if (!tokenToCoinNode) {
      throw new Error(`Coin ${coinTypeTo} does not exist.`);
    }

    const { outputAmount, route } = await this.getSmartOutputAmountData({
      amountIn: inputAmount,
      tokenFrom: tokenFromCoinNode,
      tokenTo: tokenToCoinNode,
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
