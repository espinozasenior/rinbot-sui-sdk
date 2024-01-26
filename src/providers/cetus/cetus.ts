/* eslint-disable require-jsdoc */

import CetusClmmSDK, { AggregatorResult, CoinNode, PathLink, TransactionUtil } from "@cetusprotocol/cetus-sui-clmm-sdk";
import BigNumber from "bignumber.js";
import { EventEmitter } from "../../emitters/EventEmitter";
import { UpdatedCoinsCache } from "../../managers/types";
import { CacheOptions, CommonPoolData, IPoolProvider } from "../types";
import { convertSlippage } from "../utils/convertSlippage";
import { getCoinInfoFromCache } from "../utils/getCoinInfoFromCache";
import { CENTRALIZED_POOLS_INFO_ENDPOINT } from "./config";
import { CetusOptions, CoinMap, CoinNodeWithSymbol, LPList } from "./types";
import { getPoolsDataFromApiData, isApiResponseValid } from "./utils";

export class CetusSingleton extends EventEmitter implements IPoolProvider<CetusSingleton> {
  private static _instance: CetusSingleton;
  public providerName = "Cetus";
  public isSmartRoutingAvailable = true;
  public cetusSdk: CetusClmmSDK;
  public poolsCache: LPList[] = [];
  public pathsCache: Map<string, CommonPoolData> = new Map();
  // The `cetusPathsCache` is workaround property to make it compatible with the Cetus SDK interface
  public cetusPathsCache: Map<string, PathLink> = new Map();
  public coinsCache: CoinMap = new Map();
  private cacheOptions: CacheOptions;
  private useOnChainFallback = false;

  private constructor(options: Required<Omit<CetusOptions, "lazyLoading">>) {
    super();
    this.cetusSdk = new CetusClmmSDK({ fullRpcUrl: options.suiProviderUrl, ...options.sdkOptions });
    this.cacheOptions = options.cacheOptions;
  }

  public static async getInstance(options?: CetusOptions): Promise<CetusSingleton> {
    if (!CetusSingleton._instance) {
      if (options === undefined) {
        throw new Error("[Cetus] Options are required in arguments to create instance.");
      }

      const { sdkOptions, cacheOptions, lazyLoading = true, suiProviderUrl } = options;

      const instance = new CetusSingleton({ sdkOptions, cacheOptions, suiProviderUrl });
      lazyLoading ? instance.init() : await instance.init();
      CetusSingleton._instance = instance;
    }

    return CetusSingleton._instance;
  }

  private async init() {
    await this.updateCaches();
    this.updateCachesIntervally();
    this.bufferEvent("cachesUpdate", this.getCoins());
  }

  public async updateCaches(): Promise<void> {
    try {
      await this.updatePoolsCache();
      this.updatePathsAndCoinsCache();
      this.useOnChainFallback && this.updateGraph();
      this.emit("cachesUpdate", this.getCoins());
    } catch (error) {
      console.error("[Cetus] Caches update failed:", error);
    }
  }

  private updateCachesIntervally(): void {
    let isUpdatingCurrently = false;
    setInterval(async () => {
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
  }

  public async updatePoolsCache(): Promise<void> {
    this.poolsCache = await this.retrieveAllPoolsFromApi();
  }

  public updatePathsAndCoinsCache(): void {
    const { poolMap, coinMap } = getPoolsDataFromApiData({ poolsInfo: this.poolsCache });
    this.pathsCache = poolMap;
    this.cetusPathsCache = poolMap;
    this.coinsCache = coinMap;
  }

  public updateGraph(): void {
    const coins: CoinNodeWithSymbol[] = Array.from(this.coinsCache.values());
    const paths: PathLink[] = Array.from(this.cetusPathsCache.values());

    const coinsProvider = { coins };
    const pathsProvider = { paths };
    this.cetusSdk.Router.loadGraph(coinsProvider, pathsProvider);
  }

  public async retrievelAllPools() {
    const pools = await this.cetusSdk.Pool.getPoolsWithPage([]);
    console.log(`[retrievelAllPools] pool length: ${pools.length}`);

    return pools;
  }

  public async retrieveAllPoolsFromApi() {
    const poolsResponse = await (await fetch(CENTRALIZED_POOLS_INFO_ENDPOINT)).json();
    const isValidPoolsResponse = isApiResponseValid(poolsResponse);

    if (!isValidPoolsResponse) {
      console.error("[Cetus] Pools response:", poolsResponse);
      throw new Error("Pools response from API is not valid");
    }

    return poolsResponse.data.lp_list;
  }

  public getCoins(): UpdatedCoinsCache {
    const data = Array.from(this.coinsCache.values()).map((coin: CoinNodeWithSymbol) => ({
      symbol: coin.symbol,
      type: coin.address,
      decimals: coin.decimals,
    }));

    return { provider: this.providerName, data };
  }

  public getPaths(): Map<string, CommonPoolData> {
    return this.pathsCache;
  }

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
    const coinFrom: CoinNodeWithSymbol | undefined = getCoinInfoFromCache(coinTypeFrom, this.coinsCache);
    const coinTo: CoinNodeWithSymbol | undefined = getCoinInfoFromCache(coinTypeTo, this.coinsCache);

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

  public async getSmartOutputAmountData({
    amountIn,
    tokenFrom,
    tokenTo,
    slippagePercentage,
  }: {
    amountIn: string;
    tokenFrom: CoinNode;
    tokenTo: CoinNode;
    slippagePercentage: number;
  }) {
    const absoluteSlippage = convertSlippage(slippagePercentage);

    const amountInWithDecimalsBigNumber = new BigNumber(amountIn).multipliedBy(10 ** tokenFrom.decimals);
    const amountInt = amountInWithDecimalsBigNumber.toNumber();

    const rawRouterResult = await this.cetusSdk.RouterV2.getBestRouter(
      tokenFrom.address,
      tokenTo.address,
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
