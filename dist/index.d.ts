import { SuiTransactionBlockResponse, SuiEvent, SuiClient, CoinMetadata, CoinStruct, SuiObjectData, SuiObjectResponse, MoveStruct, SuiParsedData, SuiClientOptions } from '@mysten/sui.js/client';
import { TransactionBlock, TransactionArgument } from '@mysten/sui.js/transactions';
export { TransactionBlock, isTransactionBlock } from '@mysten/sui.js/transactions';
import { RouterCompleteTradeRoute, PoolCreationLpCoinMetadata, Aftermath, Pool } from 'aftermath-ts-sdk';
import CetusClmmSDK, { SdkOptions, PathLink, AggregatorResult, Pool as Pool$1, AddLiquidityFixTokenParams } from '@cetusprotocol/cetus-sui-clmm-sdk';
import { createClient } from 'redis';
import { calculateAmountOut, getCoinsFlowX } from '@flowx-pkg/ts-sdk';
import BN from 'bn.js';
import { SwapRouteArgs, GetRouteQuotesReturn, CLAMM, InterestPool, StablePoolState, VolatilePoolState } from '@interest-protocol/clamm-sdk';
import { TurbosSdk, Contract } from 'turbos-clmm-sdk';
import { Ed25519Keypair } from '@mysten/sui.js/keypairs/ed25519';
export { Ed25519Keypair } from '@mysten/sui.js/keypairs/ed25519';
import { TransactionBlock as TransactionBlock$1 } from '@mysten/sui.js-0.51.2/transactions';
import { ObjectArg as ObjectArg$1 } from '@mysten/sui.js/bcs';
import { Keypair, SignatureWithBytes } from '@mysten/sui.js/cryptography';
export { SUI_DECIMALS, isValidSuiAddress } from '@mysten/sui.js/utils';

declare class EventEmitter {
    private events;
    private buffer;
    on(eventName: string, callback: UpdateCoinsCacheHandler): void;
    emit(eventName: string, arg: UpdatedCoinsCache): void;
    bufferEvent(eventName: string, data: UpdatedCoinsCache): void;
    flushBuffer(): void;
    getEvents(): Record<string, UpdateCoinsCacheHandler[]>;
    getBuffer(): {
        eventName: string;
        data: UpdatedCoinsCache;
    }[];
}

type ExtractedCoinMetadataListType = Awaited<ReturnType<typeof getCoinsFlowX>>;
type ExtractedCoinMetadataType = ExtractedCoinMetadataListType[0];
type ExtractedSwapCalculatedOutputDataType = Awaited<ReturnType<typeof calculateAmountOut>>;
type ExtendedSwapCalculatedOutputDataType = ExtractedSwapCalculatedOutputDataType & {
    tokenFrom: CoinNode;
    tokenTo: CoinNode;
};
type CoinNode = {
    address: string;
    type: string;
    decimals: number;
    symbol?: string;
};
type FlowxOptions = ProviderOptions;
type ShortCoinMetadata = Pick<ExtractedCoinMetadataType, "type" | "decimals">;

type PoolData = {
    id: number;
    coin_a: string;
    coin_b: string;
    deploy_time_ms: string;
    fee: string;
    fee_growth_global_a: string;
    fee_growth_global_b: string;
    fee_protocol: string;
    liquidity: string;
    max_liquidity_per_tick: string;
    protocol_fees_a: string;
    protocol_fees_b: string;
    sqrt_price: string;
    tick_current_index: number;
    tick_spacing: string;
    unlocked: boolean;
    pool_id: string;
    type: string;
    coin_symbol_a: string;
    coin_symbol_b: string;
    coin_type_a: string;
    coin_type_b: string;
    fee_type: string;
    add_2_percent_depth: string;
    reduce_2_percent_depth: string;
    reward_infos: {
        type: string;
        fields: Record<string, unknown>;
    }[];
    reward_last_updated_time_ms: string;
    category: null | string;
    apr: number;
    apr_percent: number;
    fee_apr: number;
    reward_apr: number;
    volume_24h_usd: number;
    liquidity_usd: number;
    coin_a_liquidity_usd: number;
    coin_b_liquidity_usd: number;
    fee_24h_usd: number;
    flag: number;
    created_at: string;
    updated_at: string;
};
type ShortPoolData = {
    poolId: string;
    coinTypeA: string;
    coinTypeB: string;
};
type CoinData = {
    id: number;
    name: string;
    type: string;
    symbol: string;
    decimals: number;
    logo_url: string;
    coingecko_id: string;
    pyth_id: string | null;
    in_quote_list: boolean;
    is_stable: boolean;
    is_popular: boolean;
    in_pool: boolean;
    category_id: number;
    faucet_amount: string;
    flag: number;
    created_at: string;
    updated_at: string;
    category: {
        id: number;
        name: string;
        badge_url: string;
    };
};
type SwapRequiredData = {
    outputAmount: bigint;
    nextTickIndex: number;
    pool: ShortPoolData;
    inputAmountWithDecimals: string;
    tokenFromIsTokenA: boolean;
};
interface PoolsAPIResponse {
    code: number;
    message: string;
    data?: PoolData[];
}
interface CoinsAPIResponse {
    code: number;
    message: string;
    data?: CoinData[];
}
type TurbosOptions = ProviderOptions & {
    suiProviderUrl: string;
    proxy?: string;
};
type TurbosCreatePoolEventParsedJson = {
    pool: string;
};
type TurbosOwnedPool = {
    poolName: string;
    poolId: string;
    coinTypeA: string;
    coinTypeB: string;
    coinSymbolA: string;
    coinSymbolB: string;
    amountA: string;
    amountB: string;
    tickSpacing: number;
    feePercentage: string;
    amountAIsRaw: boolean;
    amountBIsRaw: boolean;
};
type DetailedTurbosOwnedPoolInfo = TurbosOwnedPool & {
    apr: number;
    aprPercent: number;
    feeApr: number;
    rewardApr: number;
    volumeFor24hUsd: number;
    liquidityUsd: number;
    coinLiquidityUsdA: number;
    coinLiquidityUsdB: number;
    feeFor24hUsd: number;
};

declare class InMemoryStorageSingleton implements IStorage {
    private static _instance;
    private constructor();
    static getInstance(): InMemoryStorageSingleton;
    setCache(params: SetCacheParams): Promise<void>;
    getCache(params: GetCacheParams): Promise<StorageValue>;
}

declare class RedisStorageSingleton implements IStorage {
    private static _instance;
    private client;
    private static version;
    private constructor();
    static getInstance(client?: RedisStorageClient): RedisStorageSingleton;
    setCache(params: SetCacheParams): Promise<void>;
    getCache(params: GetCacheParams): Promise<StorageValue>;
    static removeInstance(): void;
}

interface CoinInfo {
    name: string;
    symbol: string;
    decimals: number;
    address: string;
    balance: string;
    logo_url: string;
    coingecko_id: string;
    project_url: string;
    labels: string[] | null;
}
interface LPList {
    symbol: string;
    name: string;
    decimals: number;
    fee: string;
    tick_spacing: string;
    pool_type: string;
    address: string;
    coin_a_address: string;
    coin_b_address: string;
    project_url: string;
    is_display_rewarder: boolean;
    is_closed: boolean;
    rewarder_display1: boolean;
    rewarder_display2: boolean;
    rewarder_display3: boolean;
    labels: string[];
    coin_a: CoinInfo;
    coin_b: CoinInfo;
    price: string;
    rewarder_usd: unknown[];
    is_forward: boolean;
    price_range_config: null;
    object: {
        coin_a: number;
        coin_b: number;
        tick_spacing: number;
        fee_rate: number;
        liquidity: string;
        current_sqrt_price: string;
        current_tick_index: {
            fields: {
                bits: string;
            };
        };
        fee_growth_global_a: string;
        fee_growth_global_b: string;
        fee_protocol_coin_a: number;
        fee_protocol_coin_b: number;
        tick_manager: {
            fields: {
                ticks: {
                    fields: {
                        id: {
                            id: string;
                        };
                    };
                };
            };
        };
        rewarder_manager: {
            fields: {
                rewarders: unknown[];
                points_released: string;
                points_growth_global: string;
                last_updated_time: number;
            };
        };
        position_manager: {
            fields: {
                positions: {
                    fields: {
                        id: {
                            id: string;
                        };
                    };
                };
            };
        };
        is_pause: boolean;
        index: number;
        url: string;
    };
    category: string;
    is_vaults: boolean;
    stable_farming: null;
}
type CetusOptions = ProviderOptions & {
    sdkOptions: Omit<SdkOptions, "fullRpcUrl" | "simulationAccount">;
    suiProviderUrl: string;
    proxy?: string;
    simulationAccount?: string;
};
type CetusOwnedPool = {
    name: string;
    poolAddress: string;
    coinTypeA: string;
    coinTypeB: string;
    coinSymbolA?: string;
    coinSymbolB?: string;
    amountA: string;
    amountB: string;
    feeRate: string;
    amountAIsRaw: boolean;
    amountBIsRaw: boolean;
};
type CetusPathForStorage = {
    base: string;
    quote: string;
    addressMap: [number, string][];
};

type Storage = InMemoryStorageSingleton | RedisStorageSingleton;
interface IStorage {
    setCache(params: SetCacheParams): Promise<void>;
    getCache(params: GetCacheParams): Promise<StorageValue>;
}
type GetCacheParams = {
    provider: string;
    property: StorageProperty;
};
type SetCacheParams = GetCacheParams & {
    value: StorageValue;
};
declare enum StorageProperty {
    Coins = "coins",
    Paths = "paths",
    Pools = "pools",
    CoinsMetadata = "coinsMetadata",
    CetusPaths = "cetusPaths"
}
type StorageValue = {
    value: CommonCoinData[];
    timestamp: string;
} | {
    value: CommonPoolData[];
    timestamp: string;
} | {
    value: ShortCoinMetadata[];
    timestamp: string;
} | {
    value: ShortPoolData[];
    timestamp: string;
} | {
    value: CetusPathForStorage[];
    timestamp: string;
} | null;
type RedisStorageClient = ReturnType<typeof createClient>;

type AnyFunction = (...args: RouteParams[]) => any;
type RouteParams = {
    coinTypeFrom: string;
    coinTypeTo: string;
    inputAmount: string;
    slippagePercentage: number;
    publicKey: string;
};
declare function tryCatchWrapper<T extends AnyFunction>(callback: T, ...args: Parameters<T>): Promise<ReturnType<T> | null>;

type CommonPoolData = {
    base: string;
    quote: string;
};
type CoinsCache = Map<string, CommonCoinData>;
type PathsCache = Map<string, CommonPoolData>;
type CacheOptions = {
    storage?: Storage;
    updateIntervalInMs: number;
    updateIntervally?: boolean;
};
type GetRouteDataInput<T extends Provider> = Parameters<T["getRouteData"]>[0];
type GetRouteDataOutput<T extends Provider> = ReturnType<T["getRouteData"]>;
type GetSwapTransactionInput<T extends Provider> = Parameters<T["getSwapTransaction"]>[0];
interface IPoolProvider<T extends Provider> {
    getCoins(): UpdatedCoinsCache;
    getPaths(): Map<string, CommonPoolData | PathLink>;
    getRouteData(arg: GetRouteDataInput<T>): GetRouteDataOutput<T>;
    getSwapTransaction(arg: GetSwapTransactionInput<T>): Promise<TransactionBlock>;
}
type ProviderOptions = {
    cacheOptions: CacheOptions;
    lazyLoading?: boolean;
};
type ExitHandlerOptions = {
    cleanup?: boolean;
    intervalId?: NodeJS.Timeout | undefined;
    exit?: boolean;
    providerName?: string;
};
type TryCatchWrapperResult = Awaited<ReturnType<typeof tryCatchWrapper>>;

type SmartOutputAmountData = {
    outputAmount: bigint;
    route: RouterCompleteTradeRoute;
};
type AftermathOptions = ProviderOptions;
type CreateLpCoinInput = {
    publicKey: string;
    lpCoinDecimals: number;
};
type CreatePoolCoinInfo = {
    coinType: string;
    weight: number;
    decimals: number;
    tradeFeeIn: number;
    initialDeposit: bigint;
};
type CreatePoolInput = {
    publicKey: string;
    createLpCoinTransactionResult: SuiTransactionBlockResponse;
    lpCoinMetadata: PoolCreationLpCoinMetadata;
    coinsInfo: {
        coinA: CreatePoolCoinInfo;
        coinB: CreatePoolCoinInfo;
    };
    poolName: string;
};
type GetWeightsCoinInfo = {
    type: string;
    amount: string;
};
type GetWeightsInput = {
    coinA: GetWeightsCoinInfo;
    coinB: GetWeightsCoinInfo;
};
type GetLpCoinDecimalsCoinInfo = {
    decimals: number;
    weight: number;
};
type GetLpCoinDecimalsInput = {
    coinA: GetLpCoinDecimalsCoinInfo;
    coinB: GetLpCoinDecimalsCoinInfo;
};
type OwnedPoolCoinInfo = {
    symbol?: string | undefined;
    type: string;
    balance: string;
};
type OwnedPoolInfo = {
    name: string;
    volume: string;
    tvl: string;
    fees: string;
    apr: string;
    poolObjectId: string;
    coins: OwnedPoolCoinInfo[];
};

declare class AftermathSingleton extends EventEmitter implements IPoolProvider<AftermathSingleton> {
    private static _instance;
    static AFTERMATH_POOL_URL: string;
    isSmartRoutingAvailable: boolean;
    providerName: string;
    aftermathSdk: Aftermath;
    poolsCache: Pool[];
    pathsCache: PathsCache;
    coinsCache: CoinsCache;
    private cacheOptions;
    private intervalId;
    private storage;
    private constructor();
    static getInstance(options?: AftermathOptions): Promise<AftermathSingleton>;
    private init;
    private fillCacheFromStorage;
    private isStorageCacheEmpty;
    private updateCaches;
    private updateCachesIntervally;
    private updatePoolsCache;
    private updatePathsAndCoinsCache;
    getPool(coinTypeA: string, coinTypeB: string): Pool;
    getPools(): Pool[];
    getCoins(): UpdatedCoinsCache;
    getPaths(): Map<string, CommonPoolData>;
    getRouteData({ coinTypeFrom, coinTypeTo, inputAmount, }: {
        coinTypeFrom: string;
        coinTypeTo: string;
        inputAmount: string;
        slippagePercentage: number;
        publicKey: string;
    }): Promise<{
        outputAmount: bigint;
        route: RouterCompleteTradeRoute;
    }>;
    getDirectOutputAmount(pool: Pool, inputAmount: string, coinTypeFrom: string, coinTypeTo: string): bigint;
    private getSmartOutputAmountData;
    getSwapTransaction({ route, publicKey, slippagePercentage, }: {
        route: RouterCompleteTradeRoute;
        publicKey: string;
        slippagePercentage: number;
    }): Promise<TransactionBlock>;
    getSwapTransactionDoctored({ route, publicKey, slippagePercentage, }: {
        route: RouterCompleteTradeRoute;
        publicKey: string;
        slippagePercentage: number;
    }): Promise<TransactionBlock>;
    static getCreateLpCoinTransaction({ publicKey, lpCoinDecimals, }: CreateLpCoinInput): Promise<TransactionBlock>;
    static getCreatePoolTransaction({ publicKey, createLpCoinTransactionResult, lpCoinMetadata, coinsInfo, poolName, }: CreatePoolInput): Promise<TransactionBlock>;
    static getPoolUrl(createPoolTransactionResult: SuiTransactionBlockResponse): string;
    static getWeights(coinsInfo: GetWeightsInput): Promise<{
        weightA: number;
        weightB: number;
    }>;
    static getMaxAndMinSecondCoinAmount({ coinTypeA, amountA, coinTypeB, decimalsB, }: {
        coinTypeA: string;
        amountA: string;
        coinTypeB: string;
        decimalsB: number;
    }): Promise<{
        minAmountB: string;
        maxAmountB: string;
    }>;
    static coinHasPrice(coinType: string): Promise<boolean>;
    static getOwnedPoolsInfo(allAssets: CoinAssetData[], coinManager: CoinManagerSingleton): Promise<OwnedPoolInfo[]>;
    static removeInstance(): void;
    buildDcaTxBlockAdapter: () => never;
}

declare function buildDcaTxBlock$2(txBlock: TransactionBlock, tokenFrom: string, tokenTo: string, dcaId: string, gasCost: number): TransactionBlock;

declare class CetusSingleton extends EventEmitter implements IPoolProvider<CetusSingleton> {
    private static _instance;
    providerName: string;
    isSmartRoutingAvailable: boolean;
    cetusSdk: CetusClmmSDK;
    poolsCache: LPList[];
    pathsCache: Map<string, PathLink>;
    coinsCache: CoinsCache;
    private cetusCoinsCache;
    private cacheOptions;
    private useOnChainFallback;
    private intervalId;
    private proxy;
    private storage;
    private cetusSDKConfig;
    private constructor();
    static getInstance(options?: CetusOptions): Promise<CetusSingleton>;
    private init;
    private fillCacheFromStorage;
    private isStorageCacheEmpty;
    private updateCaches;
    private updateCachesIntervally;
    private updatePoolsCache;
    private updatePathsAndCoinsCache;
    updateGraph(cetusSdk?: CetusClmmSDK): void;
    private retrievelAllPools;
    private retrieveAllPoolsFromApi;
    getCoins(): UpdatedCoinsCache;
    getPaths(): Map<string, PathLink>;
    getRouteData({ coinTypeFrom, coinTypeTo, inputAmount, slippagePercentage, }: {
        coinTypeFrom: string;
        coinTypeTo: string;
        inputAmount: string;
        slippagePercentage: number;
        publicKey: string;
    }): Promise<{
        outputAmount: bigint;
        route: AggregatorResult;
    }>;
    private getSmartOutputAmountData;
    getSwapTransaction({ route, publicKey, slippagePercentage, }: {
        route: AggregatorResult;
        publicKey: string;
        slippagePercentage: number;
    }): Promise<TransactionBlock>;
    getSwapTransactionDoctored({ route, publicKey, slippagePercentage, }: {
        route: AggregatorResult;
        publicKey: string;
        slippagePercentage: number;
    }): Promise<TransactionBlock>;
    getCreatePoolTransaction({ coinTypeA, coinTypeB, decimalsA, decimalsB, price, tickSpacing, uri, }: {
        coinTypeA: string;
        coinTypeB: string;
        decimalsA: number;
        decimalsB: number;
        price: string;
        tickSpacing: number;
        uri?: string;
    }): Promise<TransactionBlock>;
    getAddLiquidityPayload({ pool, coinAmountA, decimalsA, decimalsB, slippage, }: {
        pool: Pool$1;
        coinAmountA: string;
        decimalsA: number;
        decimalsB: number;
        slippage: number;
    }): {
        addLiquidityPayload: AddLiquidityFixTokenParams;
        amountB: string;
        curSqrtPrice: BN;
    };
    getAddLiquidityTransaction({ pool, coinAmountA, decimalsA, decimalsB, slippage, publicKey, }: {
        pool: Pool$1;
        coinAmountA: string;
        decimalsA: number;
        decimalsB: number;
        slippage: number;
        publicKey: string;
    }): Promise<TransactionBlock>;
    getPool(poolId: string): Promise<Pool$1 | null>;
    getPools(poolIds: string[]): Promise<Pool$1[] | null>;
    getPoolByCoinTypesAndTickSpacing(coinTypeA: string, coinTypeB: string, tickSpacing: string): Promise<LPList | undefined>;
    getCreatePoolEventsFromUserEvents(userEvents: SuiEvent[]): SuiEvent[];
    getOwnedPools(provider: SuiClient, publicKey: string, coinManager: CoinManagerSingleton): Promise<CetusOwnedPool[]>;
    getNewCetusSdk(simulationAccountAddress?: string): CetusClmmSDK;
    checkPathsExistInGraph(coinTypeFrom: string, coinTypeTo: string, cetusSdk?: CetusClmmSDK): boolean;
    getRouteDataWithGraph({ coinTypeFrom, coinTypeTo, inputAmount, slippagePercentage, publicKey, }: {
        coinTypeFrom: string;
        coinTypeTo: string;
        inputAmount: string;
        slippagePercentage: number;
        publicKey: string;
    }): Promise<{
        routesByProviderMap: ProvidersToRouteDataMap;
        providersByOutputAmountsMap: Map<bigint, string>;
        cetusOutputAmount: bigint;
    }>;
    static removeInstance(): void;
    buildDcaTxBlockAdapter: typeof buildDcaTxBlock$2;
}

declare function buildDcaTxBlock$1(txBlock: TransactionBlock, tokenFrom: string, tokenTo: string, dcaId: string, gasCost: number): TransactionBlock;

declare class FlowxSingleton extends EventEmitter implements IPoolProvider<FlowxSingleton> {
    private static _instance;
    providerName: string;
    isSmartRoutingAvailable: boolean;
    pathsCache: PathsCache;
    coinsCache: CoinsCache;
    coinsMetadataCache: ShortCoinMetadata[];
    private cacheOptions;
    private intervalId;
    private storage;
    private constructor();
    static getInstance(options?: FlowxOptions): Promise<FlowxSingleton>;
    private init;
    private fillCacheFromStorage;
    private isStorageCacheEmpty;
    private updateCaches;
    private updateCachesIntervally;
    private updateCoinsCache;
    private updatePathsCache;
    getCoins(): UpdatedCoinsCache;
    getPaths(): Map<string, CommonPoolData>;
    getRouteData({ coinTypeFrom, coinTypeTo, inputAmount, }: {
        coinTypeFrom: string;
        coinTypeTo: string;
        inputAmount: string;
        slippagePercentage: number;
        publicKey: string;
    }): Promise<{
        outputAmount: bigint;
        route: ExtendedSwapCalculatedOutputDataType;
    }>;
    private getSmartOutputAmountData;
    getSwapTransaction({ route, publicKey, slippagePercentage, }: {
        route: ExtendedSwapCalculatedOutputDataType;
        publicKey: string;
        slippagePercentage: number;
    }): Promise<TransactionBlock>;
    getSwapTransactionDoctored({ route, publicKey, slippagePercentage, }: {
        route: ExtendedSwapCalculatedOutputDataType;
        publicKey: string;
        slippagePercentage: number;
    }): Promise<TransactionBlock>;
    static removeInstance(): void;
    buildDcaTxBlockAdapter: typeof buildDcaTxBlock$1;
}

type InterestRouteData = {
    bestRoute: SwapRouteArgs["route"];
    poolsMap: GetRouteQuotesReturn["poolsMap"];
    inputCoinType: string;
    minAmount: bigint;
    formattedInputAmount: string;
};
type InterestOptions = ProviderOptions & {
    suiProviderUrl: string;
};

declare class InterestProtocolSingleton extends EventEmitter implements IPoolProvider<InterestProtocolSingleton> {
    private static _instance;
    static INTEREST_PROTOCOL_PACKAGE_ADDRESS: string;
    static INTEREST_PROTOCOL_SUI_TEARS: string;
    private provider;
    private cacheOptions;
    private intervalId;
    private storage;
    interestSdk: CLAMM;
    providerName: string;
    isSmartRoutingAvailable: boolean;
    pathsCache: PathsCache;
    coinsCache: CoinsCache;
    poolsCache: InterestPool[];
    private constructor();
    static getInstance(options?: InterestOptions): Promise<InterestProtocolSingleton>;
    private init;
    private fillCacheFromStorage;
    private isStorageCacheEmpty;
    private updateCaches;
    private updateCachesIntervally;
    private updatePoolsCache;
    private updatePathsAndCoinsCache;
    getPool(coinTypeA: string, coinTypeB: string): InterestPool;
    getPools(): InterestPool[];
    getCoins(): UpdatedCoinsCache;
    getPaths(): Map<string, CommonPoolData>;
    getRouteData({ coinTypeFrom, coinTypeTo, inputAmount, slippagePercentage, }: {
        coinTypeFrom: string;
        coinTypeTo: string;
        inputAmount: string;
        slippagePercentage: number;
        publicKey: string;
    }): Promise<{
        outputAmount: bigint;
        route: InterestRouteData;
    }>;
    getSwapTransaction({ route, publicKey, }: {
        route: InterestRouteData;
        publicKey: string;
        slippagePercentage: number;
    }): Promise<TransactionBlock>;
    getSwapTransactionDoctored({ route, publicKey, slippagePercentage, }: {
        route: InterestRouteData;
        publicKey: string;
        slippagePercentage: number;
    }): Promise<TransactionBlock>;
    static removeInstance(): void;
    buildDcaTxBlockAdapter: () => never;
}

declare function buildDcaTxBlock(txBlock: TransactionBlock, tokenFrom: string, tokenTo: string, dcaId: string, gasCost: number): TransactionBlock;

declare class TurbosSingleton extends EventEmitter implements IPoolProvider<TurbosSingleton> {
    private static _instance;
    private static TURBOS_API_URL;
    turbosSdk: TurbosSdk;
    isSmartRoutingAvailable: boolean;
    providerName: string;
    poolsCache: ShortPoolData[];
    pathsCache: PathsCache;
    coinsCache: CoinsCache;
    private cacheOptions;
    private intervalId;
    private proxy;
    private storage;
    static CREATE_POOL_GAS_BUDGET: number;
    static FEE_DIVIDER: number;
    private constructor();
    static getInstance(options?: TurbosOptions): Promise<TurbosSingleton>;
    private init;
    private fillCacheFromStorage;
    private isStorageCacheEmpty;
    private updateCaches;
    private updateCachesIntervally;
    updatePoolsCache(): Promise<void>;
    private updatePathsCache;
    private updateCoinsCache;
    private fetchPoolsFromApi;
    private fetchCoinsFromApi;
    getPools(): ShortPoolData[];
    getPaths(): Map<string, CommonPoolData>;
    getCoins(): UpdatedCoinsCache;
    getRouteData({ coinTypeFrom, coinTypeTo, inputAmount, publicKey, }: {
        coinTypeFrom: string;
        coinTypeTo: string;
        inputAmount: string;
        slippagePercentage: number;
        publicKey: string;
    }): Promise<{
        outputAmount: bigint;
        route: {
            nextTickIndex: number;
            pool: ShortPoolData;
            inputAmountWithDecimals: string;
            tokenFromIsTokenA: boolean;
            outputAmount: bigint;
        };
    }>;
    private getSwapRequiredData;
    getSwapTransaction({ route, publicKey, slippagePercentage, }: {
        route: SwapRequiredData;
        publicKey: string;
        slippagePercentage: number;
    }): Promise<TransactionBlock>;
    getSwapTransactionDoctored({ route, publicKey, slippagePercentage, }: {
        route: SwapRequiredData;
        publicKey: string;
        slippagePercentage: number;
    }): Promise<TransactionBlock>;
    getCreatePoolTransaction({ tickSpacing, coinDecimalsA, coinDecimalsB, coinTypeA, coinTypeB, amountA, amountB, slippage, publicKey, }: {
        tickSpacing: number;
        coinTypeA: string;
        coinTypeB: string;
        coinDecimalsA: number;
        coinDecimalsB: number;
        amountA: string;
        amountB: string;
        slippage: number;
        publicKey: string;
    }): Promise<TransactionBlock>;
    getFeeObject(tickSpacing: number): Promise<Contract.Fee>;
    getFees(): Promise<Contract.Fee[]>;
    getGlobalLiquidityTicks(tickSpacing: number): {
        tickLower: number;
        tickUpper: number;
    };
    getPoolByParams({ coinTypeA, coinTypeB, tickSpacing, }: {
        coinTypeA: string;
        coinTypeB: string;
        tickSpacing: string;
    }): Promise<PoolData | undefined>;
    getCreatePoolEventsFromUserEvents(userEvents: SuiEvent[]): Promise<SuiEvent[]>;
    getOwnedPools({ provider, publicKey, coinManager, }: {
        provider: SuiClient;
        publicKey: string;
        coinManager: CoinManagerSingleton;
    }): Promise<TurbosOwnedPool[]>;
    getDetailedPoolsInfo({ provider, publicKey, coinManager, }: {
        provider: SuiClient;
        publicKey: string;
        coinManager: CoinManagerSingleton;
    }): Promise<DetailedTurbosOwnedPoolInfo[]>;
    getUserPoolIds(publicKey: string, provider: SuiClient): Promise<string[]>;
    static removeInstance(): void;
    buildDcaTxBlockAdapter: typeof buildDcaTxBlock;
}

type CommonCoinData = {
    symbol?: string;
    type: string;
    decimals: number;
};
type CoinAssetData = Omit<CommonCoinData, "decimals"> & {
    balance: string;
    noDecimals: boolean;
    decimals: number | null;
};
type UpdatedCoinsCache = {
    provider: string;
    data: CommonCoinData[];
};
type Provider = TurbosSingleton | CetusSingleton | AftermathSingleton | FlowxSingleton | InterestProtocolSingleton;
type Providers = Provider[];
type ProvidersToRouteDataMap = Map<string, {
    provider: Provider;
    route: TryCatchWrapperResult;
}>;
type UpdateCoinsCacheHandler = (arg: UpdatedCoinsCache) => void;
interface ICoinManager {
    getCoinByType(coinType: string): CommonCoinData;
    getCoinByType2(coinType: string): Promise<CommonCoinData | null>;
    getCoinsByProviderMap(): Map<string, Map<string, CommonCoinData>>;
    getAllCoins(): Map<string, CommonCoinData>;
}
interface IWalletManager {
    getAvailableWithdrawSuiAmount(publicKey: string): Promise<{
        availableAmount: string;
        totalGasFee: string;
    }>;
    getSuiBalance(publicKey: string): Promise<string>;
    getAvailableSuiBalance(publicKey: string): Promise<string>;
    getAllCoinAssets(publicKey: string): Promise<CoinAssetData[]>;
}
interface IRouteManager {
    getBestRouteTransaction({ tokenFrom, tokenTo, amount, slippagePercentage, signerAddress, }: {
        tokenFrom: string;
        tokenTo: string;
        amount: string;
        slippagePercentage: number;
        signerAddress: string;
    }): Promise<{
        tx: TransactionBlock;
        outputAmount: bigint;
        providerName: string;
    }>;
}
type CreateCoinTransactionParams = {
    name: string;
    symbol: string;
    decimals: string;
    fixedSupply: boolean;
    mintAmount: string;
    url: string;
    description: string;
    signerAddress: string;
    transaction?: TransactionBlock;
};
type CreateCoinExternalApiResType = {
    modules: string[] | number[][];
    dependencies: string[];
    digest: number[];
};
type BestRouteData = {
    maxOutputProvider: Provider;
    maxOutputAmount: bigint;
    route: TryCatchWrapperResult;
};

declare class CoinManagerSingleton implements ICoinManager {
    private static _instance;
    private allCoinsCache;
    private coinsByProviderNameCache;
    private provider;
    private static COIN_CREATION_BYTECODE_TEMPLATE_URL;
    private constructor();
    static getInstance(providers?: Providers, suiProviderUrl?: string): CoinManagerSingleton;
    private init;
    private handleCacheUpdate;
    getCoinByType(coinType: string): CommonCoinData;
    getCoinByType2(coinType: string): Promise<CommonCoinData | null>;
    getCoinsByProviderMap(): Map<string, Map<string, CommonCoinData>>;
    getAllCoins(): Map<string, CommonCoinData>;
    fetchCoinMetadata(coinType: string): Promise<CoinMetadata | null>;
    static getCreateCoinTransaction(params: CreateCoinTransactionParams): Promise<TransactionBlock>;
    static validateCreateCoinParams({ name, symbol, decimals, mintAmount, url, description, signerAddress, }: CreateCoinTransactionParams): void;
}

declare class RouteManager implements IRouteManager {
    private static _instance;
    private poolProviders;
    private coinManager;
    static getInstance(providers?: Providers, coinManager?: CoinManagerSingleton): RouteManager;
    private constructor();
    getBestRouteData({ tokenFrom, tokenTo, amount, slippagePercentage, signerAddress, supportedProviders, useCetusOnChainFallback, }: {
        tokenFrom: string;
        tokenTo: string;
        amount: string;
        slippagePercentage: number;
        signerAddress: string;
        supportedProviders?: Providers;
        useCetusOnChainFallback?: boolean;
    }): Promise<BestRouteData>;
    getBestRouteTransaction({ tokenFrom, tokenTo, amount, slippagePercentage, signerAddress, fee, }: {
        tokenFrom: string;
        tokenTo: string;
        amount: string;
        slippagePercentage: number;
        signerAddress: string;
        fee?: {
            feeAmount: string;
            feeCollectorAddress: string;
            tokenFromCoinObjects?: CoinStruct[];
            tokenFromDecimals?: number;
        };
    }): Promise<{
        tx: TransactionBlock;
        outputAmount: bigint;
        providerName: string;
    }>;
    getBestRouteTransactionForDCA({ tokenFrom, tokenTo, amount, slippagePercentage, signerAddress, dcaObjectId, dcaTradeGasCost, supportedProviders, }: {
        tokenFrom: string;
        tokenTo: string;
        amount: string;
        slippagePercentage: number;
        signerAddress: string;
        dcaObjectId: string;
        dcaTradeGasCost: number;
        supportedProviders?: Providers;
    }): Promise<TransactionBlock>;
    getBestRouteTransactionForDCAByRouteData({ tokenFrom, tokenTo, slippagePercentage, signerAddress, dcaObjectId, dcaTradeGasCost, route, maxOutputProvider, }: {
        tokenFrom: string;
        tokenTo: string;
        slippagePercentage: number;
        signerAddress: string;
        dcaObjectId: string;
        dcaTradeGasCost: number;
        route: TryCatchWrapperResult;
        maxOutputProvider: Provider;
    }): Promise<TransactionBlock>;
}

type ObjectId = string;
type ObjectCallArg = {
    Object: ObjectArg$1;
};
type ObjectArg = string | ObjectCallArg | TransactionArgument;
type PureArg = bigint | string | number | boolean | null | TransactionArgument | Array<PureArg>;
type GenericArg = ObjectArg | PureArg | Array<ObjectArg> | Array<PureArg> | Array<GenericArg>;
type TransactionResult = ReturnType<TransactionBlock["moveCall"]>;
type GetTransactionType = Promise<{
    tx: TransactionBlock;
    txRes: TransactionResult;
}>;

declare class WalletManagerSingleton implements IWalletManager {
    private provider;
    private coinManager;
    private static _instance;
    private constructor();
    static getInstance(provider?: SuiClient, coinManager?: CoinManagerSingleton): WalletManagerSingleton;
    static generateWallet(): {
        publicKey: string;
        privateKey: string;
    };
    static getKeyPairFromPrivateKey(privateKey: string): Ed25519Keypair;
    static getKeyPairFromPrivateKeyHex(privateKeyHex: string): Ed25519Keypair;
    static getKeyPairFromPrivateKeyBech32(privateKeyBech32: string): Ed25519Keypair;
    static bech32ToHex(bech32Address: string): string;
    static getPrivateKeyFromKeyPair(keypair: Ed25519Keypair): string;
    static getKeyPairFromMnemonic(mnemonic: string): Ed25519Keypair;
    static getWithdrawSuiTransaction({ address, amount, }: {
        address: string;
        amount: string;
    }): Promise<TransactionBlock>;
    getAvailableWithdrawSuiAmount(publicKey: string): Promise<{
        availableAmount: string;
        totalGasFee: string;
    }>;
    getSuiBalance(publicKey: string): Promise<string>;
    getAvailableSuiBalance(publicKey: string): Promise<string>;
    getAllCoinAssets(publicKey: string): Promise<CoinAssetData[]>;
    static mergeAllCoinObjects({ coinObjects, txb, }: {
        coinObjects: CoinStruct[];
        txb?: TransactionBlock$1;
    }): {
        tx: TransactionBlock$1;
        destinationObjectId: string;
        txRes?: TransactionResult;
    };
}

declare const getFiltredProviders: ({ poolProviders, coinsByProviderMap, tokenFrom, tokenTo, supportedProviders, }: {
    poolProviders: Providers;
    coinsByProviderMap: Map<string, Map<string, CommonCoinData>>;
    tokenFrom: string;
    tokenTo: string;
    supportedProviders?: Providers;
}) => Provider[];
declare const getRouterMaps: ({ filtredProviders, tokenFrom, tokenTo, amount, signerAddress, slippagePercentage, }: {
    filtredProviders: Providers;
    tokenFrom: string;
    tokenTo: string;
    amount: string;
    signerAddress: string;
    slippagePercentage: number;
}) => Promise<{
    routesByProviderMap: ProvidersToRouteDataMap;
    providersByOutputAmountsMap: Map<bigint, string>;
}>;
declare const tokenFromIsTokenTo: (tokenFrom: string, tokenTo: string) => boolean;
declare const getCoinsAssetsFromCoinObjects: (coinObjects: CoinStruct[], coinManager: CoinManagerSingleton) => Promise<CoinAssetData[]>;
declare function isValidResForCreateCoin(res: unknown): res is CreateCoinExternalApiResType;
declare function normalizeMnemonic(mnemonic: string): string;
declare const isValidPrivateKey: (string: string) => boolean;
declare const isValidSeedPhrase: (string: string) => boolean;

declare enum DCATimescale {
    Seconds = 0,
    Minutes = 1,
    Hours = 2,
    Days = 3,
    Weeks = 4,
    Months = 5
}
type GetDCAInitTransactionArgs = {
    baseCoinType: string;
    quoteCoinType: string;
    timeScale: DCATimescale;
    every: number;
    baseCoinAccount: ObjectArg;
    totalOrders: number;
    gasCoinAccount: ObjectArg;
    transaction?: TransactionBlock;
};
type GetDCAInitWithPriceParamsTransactionArgs = {
    minPrice: string;
    maxPrice: string;
} & GetDCAInitTransactionArgs;
type CreateDCAInitTransactionArgs = Omit<Omit<GetDCAInitTransactionArgs, "baseCoinAccount">, "gasCoinAccount"> & {
    publicKey: string;
    baseCoinAmountToDepositIntoDCA: string;
    allCoinObjectsList: CoinStruct[];
    minPrice?: string;
    maxPrice?: string;
};
interface GetDCADepositBaseTransactionArgs {
    dca: ObjectArg;
    baseCoinType: string;
    quoteCoinType: string;
    baseCoinAccount: ObjectArg;
    addOrdersCount: number;
    gasCoinAccount: ObjectArg;
    transaction?: TransactionBlock;
}
type CreateDCADepositBaseTransactionArgs = Omit<Omit<GetDCADepositBaseTransactionArgs, "baseCoinAccount">, "gasCoinAccount"> & {
    publicKey: string;
    baseCoinAmountToDepositIntoDCA: string;
    allCoinObjectsList: CoinStruct[];
};
interface GetDCAWithdrawBaseTransactionArgs {
    dca: ObjectArg;
    baseCoinType: string;
    quoteCoinType: string;
    baseCoinAmountToWithdrawFromDCA: string;
    removeOrdersCount?: number;
    transaction?: TransactionBlock;
}
interface GetDCAInitTradeTransactionArgs {
    dca: ObjectArg;
    baseCoinType: string;
    quoteCoinType: string;
    transaction?: TransactionBlock;
}
interface GetDCAResolveTradeTransactionArgs {
    dca: ObjectArg;
    baseCoinType: string;
    quoteCoinType: string;
    transaction?: TransactionBlock;
    quoteAmount: string;
    initTradePromise: TransactionResult;
}
interface GetDCAIncreaseOrdersRemainingTransactionArgs {
    publicKey: string;
    dca: ObjectArg;
    baseCoinType: string;
    quoteCoinType: string;
    transaction?: TransactionBlock;
    addOrdersCount: number;
}
interface GetDCASetInactiveTransactionArgs {
    dca: ObjectArg;
    baseCoinType: string;
    quoteCoinType: string;
    transaction?: TransactionBlock;
}
type GetDCASetReactivateAsOwnerTransactionArgs = GetDCASetInactiveTransactionArgs;
type GetDCARedeemFundsAndCloseTransactionArgs = GetDCASetInactiveTransactionArgs;
type GetDCAAddGasBudgetTransactionArgs = {
    gasCoinAccount: ObjectArg;
} & GetDCASetInactiveTransactionArgs;
type CreateDCAAddGasBudgetTransaction = {
    gasAmountToAdd: string;
} & Omit<GetDCAAddGasBudgetTransactionArgs, "gasCoinAccount">;
type DCACreateEventParsedJson = {
    delegatee: string;
    id: string;
    owner: string;
};
interface SuiEventDCACreate extends SuiEvent {
    parsedJson: DCACreateEventParsedJson;
}
interface DCAContent {
    dataType: "moveObject";
    type: string;
    hasPublicTransfer: boolean;
    fields: DCAContentFields;
}
type DCAContentFields = {
    active: boolean;
    input_balance: string;
    delegatee: string;
    every: string;
    gas_budget: string;
    id: {
        id: string;
    };
    last_time_ms: string;
    owner: string;
    remaining_orders: string;
    split_allocation: string;
    start_time_ms: string;
    time_scale: number;
    trade_params: {
        type: string;
        fields: {
            max_price: string | null;
            min_price: string | null;
        };
    };
};
interface DCAObject extends DCAContent {
    fields: DCAContentFields & {
        base_coin_type: string;
        quote_coin_type: string;
    };
}
interface DCAResponseData extends SuiObjectData {
    content: DCAContent;
}
interface DCAResponse extends SuiObjectResponse {
    data: DCAResponseData;
}

declare class DCAManagerSingleton {
    static DCA_PACKAGE_ADDRESS: string;
    static DCA_PACKAGE_ADDRESS_READ: string;
    static DCA_EVENT_TYPE: string;
    static DCA_GAS_BUGET: number;
    static DCA_MINIMUM_GAS_FUNDS_PER_TRADE: number;
    static DCA_TRADE_FEE_BPS: number;
    static DCA_TRADE_FEE_PERCENTAGE: string;
    static DCA_DELEGETEE_ACCOUNT_ADDRESS: string;
    private static _instance;
    private provider;
    private constructor();
    static getInstance(suiProviderUrl?: string): DCAManagerSingleton;
    getDCAEventsByPackage(): Promise<SuiEventDCACreate[]>;
    getDCAsByPackage(): Promise<DCAObject[]>;
    getDCAEventsByUser({ publicKey }: {
        publicKey: string;
    }): Promise<SuiEventDCACreate[]>;
    getDCAsByUserByStatus({ publicKey, }: {
        publicKey: string;
    }): Promise<{
        activeDCAs: DCAObject[];
        deactivatedDCAs: DCAObject[];
    }>;
    getDCAsByUser({ publicKey }: {
        publicKey: string;
    }): Promise<DCAObject[]>;
    static isDCACreateEventParsedJson(obj: unknown): obj is DCACreateEventParsedJson;
    static getCreateDCAEventsFromUserEvents(userEvents: SuiEvent[]): SuiEvent[];
    static createDCAInitTransaction({ allCoinObjectsList, publicKey, ...dcaParams }: CreateDCAInitTransactionArgs): Promise<{
        tx: TransactionBlock;
        txRes: ({
            kind: "Input";
            index: number;
            type?: "object" | "pure" | undefined;
            value?: any;
        } | {
            kind: "GasCoin";
        } | {
            kind: "Result";
            index: number;
        } | {
            kind: "NestedResult";
            index: number;
            resultIndex: number;
        }) & ({
            kind: "Input";
            index: number;
            type?: "object" | "pure" | undefined;
            value?: any;
        } | {
            kind: "GasCoin";
        } | {
            kind: "Result";
            index: number;
        } | {
            kind: "NestedResult";
            index: number;
            resultIndex: number;
        })[];
    }>;
    static getDCAInitTransaction({ baseCoinType, quoteCoinType, baseCoinAccount, every, timeScale, totalOrders, gasCoinAccount, transaction, }: GetDCAInitTransactionArgs): GetTransactionType;
    static getDCAInitWithParamsTransaction({ baseCoinType, quoteCoinType, minPrice, maxPrice, baseCoinAccount, every, timeScale, totalOrders, gasCoinAccount, transaction, }: GetDCAInitWithPriceParamsTransactionArgs): GetTransactionType;
    static createDCADepositBaseTransaction({ publicKey, allCoinObjectsList, ...dcaParams }: CreateDCADepositBaseTransactionArgs): Promise<{
        tx: TransactionBlock;
        txRes: ({
            kind: "Input";
            index: number;
            type?: "object" | "pure" | undefined;
            value?: any;
        } | {
            kind: "GasCoin";
        } | {
            kind: "Result";
            index: number;
        } | {
            kind: "NestedResult";
            index: number;
            resultIndex: number;
        }) & ({
            kind: "Input";
            index: number;
            type?: "object" | "pure" | undefined;
            value?: any;
        } | {
            kind: "GasCoin";
        } | {
            kind: "Result";
            index: number;
        } | {
            kind: "NestedResult";
            index: number;
            resultIndex: number;
        })[];
    }>;
    static getDCADepositBaseTransaction({ dca, baseCoinType, quoteCoinType, baseCoinAccount, addOrdersCount, gasCoinAccount, transaction, }: GetDCADepositBaseTransactionArgs): GetTransactionType;
    static getDCAWithdrawBaseTransaction({ dca, baseCoinType, quoteCoinType, baseCoinAmountToWithdrawFromDCA, removeOrdersCount, transaction, }: GetDCAWithdrawBaseTransactionArgs): GetTransactionType;
    static getDCAInitTradeTransaction({ dca, baseCoinType, quoteCoinType, transaction, }: GetDCAInitTradeTransactionArgs): GetTransactionType;
    static getDCAResolveTradeTransaction({ dca, baseCoinType, quoteCoinType, transaction, quoteAmount, initTradePromise, }: GetDCAResolveTradeTransactionArgs): GetTransactionType;
    static getDCAIncreaseOrdersRemainingTransaction({ dca, publicKey, baseCoinType, quoteCoinType, transaction, addOrdersCount, }: GetDCAIncreaseOrdersRemainingTransactionArgs): GetTransactionType;
    static getDCASetInactiveTransaction({ dca, baseCoinType, quoteCoinType, transaction, }: GetDCASetInactiveTransactionArgs): GetTransactionType;
    static getDCAReactivateAsOwnerTransaction({ dca, baseCoinType, quoteCoinType, transaction, }: GetDCASetReactivateAsOwnerTransactionArgs): GetTransactionType;
    static getDCARedeemFundsAndCloseTransaction({ dca, baseCoinType, quoteCoinType, transaction, }: GetDCARedeemFundsAndCloseTransactionArgs): GetTransactionType;
    static createDCAAddGasBudgetTransaction({ ...dcaParams }: CreateDCAAddGasBudgetTransaction): Promise<{
        tx: TransactionBlock;
        txRes: ({
            kind: "Input";
            index: number;
            type?: "object" | "pure" | undefined;
            value?: any;
        } | {
            kind: "GasCoin";
        } | {
            kind: "Result";
            index: number;
        } | {
            kind: "NestedResult";
            index: number;
            resultIndex: number;
        }) & ({
            kind: "Input";
            index: number;
            type?: "object" | "pure" | undefined;
            value?: any;
        } | {
            kind: "GasCoin";
        } | {
            kind: "Result";
            index: number;
        } | {
            kind: "NestedResult";
            index: number;
            resultIndex: number;
        })[];
    }>;
    static getDCAAddGasBudgetTransaction({ dca, baseCoinType, quoteCoinType, transaction, gasCoinAccount, }: GetDCAAddGasBudgetTransactionArgs): GetTransactionType;
}

interface Argument {
    kind: "Input" | "GasCoin" | "Result" | "NestedResult";
    index: number;
    type?: "object" | "pure";
    value?: any;
    resultIndex?: number;
}

declare function feeAmount(amount: number): number;
declare function isValidDCAFields(fields: MoveStruct): fields is DCAContentFields;
declare function isDCAContent(data: SuiParsedData | null): data is DCAContent;
declare function isValidDCAObjectResponse(obj: SuiObjectResponse): obj is DCAResponse;
declare function filterValidDCAObjects(dcaList: SuiObjectResponse[]): DCAResponse[];
declare function getBaseQuoteCoinTypesFromDCAType(dcaTypeString: string): {
    baseCoinType: string;
    quoteCoinType: string;
};
declare function hasMinMaxPriceParams(params: {
    minPrice?: string;
    maxPrice?: string;
}): params is {
    minPrice: string;
    maxPrice: string;
};
declare const fromArgument: (arg: Argument, idx: number) => {
    kind: "Input" | "GasCoin" | "Result" | "NestedResult";
    value: any;
    type: "object" | "pure" | undefined;
    index: number;
};

declare class RefundManagerSingleton {
    static SIMLATION_ACCOUNT_ADDRESS: string;
    static REFUND_PACKAGE_ADDRESS: string;
    static REFUND_PACKAGE_ADDRESS_READ: string;
    static REFUND_POOL_OBJECT_ID: string;
    static REFUND_POOL_PUBLISHER_OBJECT_ID: string;
    static REFUND_BOOSTED_CLAIM_CAP_STRUCT_TYPE_NAME: string;
    static REFUND_MODULE_NAME: string;
    static REFUND_BOOSTED_MODULE_NAME: string;
    static BOOSTER_OBJECT_TYPE: string;
    static REFUND_GAS_BUGET: number;
    static REFUND_GAS_BUDGET_ADDRESS_ADDITION: number;
    private static _instance;
    private provider;
    private constructor();
    static getInstance(suiProviderUrl?: string): RefundManagerSingleton;
    static getAddAddressesTransaction({ publisherObjectId, poolObjectId, addressesList, amountsList, transaction, }: {
        publisherObjectId: ObjectArg;
        poolObjectId: ObjectArg;
        addressesList: string[];
        amountsList: string[];
        transaction?: TransactionBlock;
    }): {
        tx: TransactionBlock;
        txRes: ({
            kind: "Input";
            index: number;
            type?: "object" | "pure" | undefined;
            value?: any;
        } | {
            kind: "GasCoin";
        } | {
            kind: "Result";
            index: number;
        } | {
            kind: "NestedResult";
            index: number;
            resultIndex: number;
        }) & ({
            kind: "Input";
            index: number;
            type?: "object" | "pure" | undefined;
            value?: any;
        } | {
            kind: "GasCoin";
        } | {
            kind: "Result";
            index: number;
        } | {
            kind: "NestedResult";
            index: number;
            resultIndex: number;
        })[];
    };
    static getClaimRefundTransaction({ poolObjectId, clock, transaction, }: {
        poolObjectId: ObjectArg;
        clock?: ObjectArg;
        transaction?: TransactionBlock;
    }): {
        tx: TransactionBlock;
        txRes: ({
            kind: "Input";
            index: number;
            type?: "object" | "pure" | undefined;
            value?: any;
        } | {
            kind: "GasCoin";
        } | {
            kind: "Result";
            index: number;
        } | {
            kind: "NestedResult";
            index: number;
            resultIndex: number;
        }) & ({
            kind: "Input";
            index: number;
            type?: "object" | "pure" | undefined;
            value?: any;
        } | {
            kind: "GasCoin";
        } | {
            kind: "Result";
            index: number;
        } | {
            kind: "NestedResult";
            index: number;
            resultIndex: number;
        })[];
    };
    static startFundingPhase({ publisherObjectId, poolObjectId, timeoutMilliseconds, clock, transaction, }: {
        publisherObjectId: ObjectArg;
        poolObjectId: ObjectArg;
        timeoutMilliseconds: number;
        clock: ObjectArg;
        transaction?: TransactionBlock;
    }): {
        tx: TransactionBlock;
        txRes: ({
            kind: "Input";
            index: number;
            type?: "object" | "pure" | undefined;
            value?: any;
        } | {
            kind: "GasCoin";
        } | {
            kind: "Result";
            index: number;
        } | {
            kind: "NestedResult";
            index: number;
            resultIndex: number;
        }) & ({
            kind: "Input";
            index: number;
            type?: "object" | "pure" | undefined;
            value?: any;
        } | {
            kind: "GasCoin";
        } | {
            kind: "Result";
            index: number;
        } | {
            kind: "NestedResult";
            index: number;
            resultIndex: number;
        })[];
    };
    static startClaimPhase({ poolObjectId, clock, transaction, }: {
        poolObjectId: ObjectArg;
        clock?: ObjectArg;
        transaction?: TransactionBlock;
    }): {
        tx: TransactionBlock;
        txRes: ({
            kind: "Input";
            index: number;
            type?: "object" | "pure" | undefined;
            value?: any;
        } | {
            kind: "GasCoin";
        } | {
            kind: "Result";
            index: number;
        } | {
            kind: "NestedResult";
            index: number;
            resultIndex: number;
        }) & ({
            kind: "Input";
            index: number;
            type?: "object" | "pure" | undefined;
            value?: any;
        } | {
            kind: "GasCoin";
        } | {
            kind: "Result";
            index: number;
        } | {
            kind: "NestedResult";
            index: number;
            resultIndex: number;
        })[];
    };
    static startReclaimPhase({ poolObjectId, clock, transaction, }: {
        poolObjectId: ObjectArg;
        clock: ObjectArg;
        transaction?: TransactionBlock;
    }): {
        tx: TransactionBlock;
        txRes: ({
            kind: "Input";
            index: number;
            type?: "object" | "pure" | undefined;
            value?: any;
        } | {
            kind: "GasCoin";
        } | {
            kind: "Result";
            index: number;
        } | {
            kind: "NestedResult";
            index: number;
            resultIndex: number;
        }) & ({
            kind: "Input";
            index: number;
            type?: "object" | "pure" | undefined;
            value?: any;
        } | {
            kind: "GasCoin";
        } | {
            kind: "Result";
            index: number;
        } | {
            kind: "NestedResult";
            index: number;
            resultIndex: number;
        })[];
    };
    getCurrentRefundPhase({ poolObjectId, transaction, }: {
        poolObjectId: string;
        transaction?: TransactionBlock;
    }): Promise<number>;
    getUnclaimedAddressesList({ poolObjectId, transaction, }: {
        poolObjectId: string;
        transaction?: TransactionBlock;
    }): Promise<number[]>;
    getClaimAmountNormal({ poolObjectId, affectedAddress, }: {
        poolObjectId: string;
        affectedAddress: string;
    }): Promise<{
        mist: string;
        sui: string;
    }>;
    getClaimAmountBoosted({ poolObjectId, affectedAddress, }: {
        poolObjectId: string;
        affectedAddress: string;
    }): Promise<{
        mist: string;
        sui: string;
    }>;
    getClaimAmount({ poolObjectId, affectedAddress }: {
        poolObjectId: string;
        affectedAddress: string;
    }): Promise<{
        normalRefund: {
            mist: string;
            sui: string;
        };
        boostedRefund: {
            mist: string;
            sui: string;
        };
    }>;
    getBoostedClaimCap({ ownerAddress, newAddress }: {
        ownerAddress: string;
        newAddress: string;
    }): Promise<{
        boostedClaimCapObjectId: string | null;
        isAnyBoostedClaimCapExists: boolean;
        boostedClaimCapNotAssociatedWithNewAddressObjectId: string | null;
    }>;
    static getReturnBoosterCapTransaction({ transaction, boostedClaimCap, poolObjectId, }: {
        transaction?: TransactionBlock;
        boostedClaimCap: ObjectArg;
        poolObjectId: ObjectArg;
    }): {
        tx: TransactionBlock;
        txRes: ({
            kind: "Input";
            index: number;
            type?: "object" | "pure" | undefined;
            value?: any;
        } | {
            kind: "GasCoin";
        } | {
            kind: "Result";
            index: number;
        } | {
            kind: "NestedResult";
            index: number;
            resultIndex: number;
        }) & ({
            kind: "Input";
            index: number;
            type?: "object" | "pure" | undefined;
            value?: any;
        } | {
            kind: "GasCoin";
        } | {
            kind: "Result";
            index: number;
        } | {
            kind: "NestedResult";
            index: number;
            resultIndex: number;
        })[];
    };
    static getReclaimFundsTransaction({ poolObjectId }: {
        poolObjectId: ObjectArg;
    }): {
        tx: TransactionBlock;
        txRes: ({
            kind: "Input";
            index: number;
            type?: "object" | "pure" | undefined;
            value?: any;
        } | {
            kind: "GasCoin";
        } | {
            kind: "Result";
            index: number;
        } | {
            kind: "NestedResult";
            index: number;
            resultIndex: number;
        }) & ({
            kind: "Input";
            index: number;
            type?: "object" | "pure" | undefined;
            value?: any;
        } | {
            kind: "GasCoin";
        } | {
            kind: "Result";
            index: number;
        } | {
            kind: "NestedResult";
            index: number;
            resultIndex: number;
        })[];
    };
    static getAllowBoostedClaim({ publisherObjectId, poolObjectId, affectedAddress, newAddress, transaction, }: {
        publisherObjectId: string;
        poolObjectId: string;
        affectedAddress: string;
        newAddress: string;
        transaction?: TransactionBlock;
    }): {
        tx: TransactionBlock;
        txRes: ({
            kind: "Input";
            index: number;
            type?: "object" | "pure" | undefined;
            value?: any;
        } | {
            kind: "GasCoin";
        } | {
            kind: "Result";
            index: number;
        } | {
            kind: "NestedResult";
            index: number;
            resultIndex: number;
        }) & ({
            kind: "Input";
            index: number;
            type?: "object" | "pure" | undefined;
            value?: any;
        } | {
            kind: "GasCoin";
        } | {
            kind: "Result";
            index: number;
        } | {
            kind: "NestedResult";
            index: number;
            resultIndex: number;
        })[];
    };
    static getClaimRefundBoostedTransaction({ boostedClaimCap, poolObjectId, clock, userRinbotRefundDestinationAddress, transaction, }: {
        boostedClaimCap: ObjectArg;
        poolObjectId: ObjectArg;
        clock?: ObjectArg;
        userRinbotRefundDestinationAddress: ObjectArg;
        transaction?: TransactionBlock;
    }): {
        tx: TransactionBlock;
        txRes: ({
            kind: "Input";
            index: number;
            type?: "object" | "pure" | undefined;
            value?: any;
        } | {
            kind: "GasCoin";
        } | {
            kind: "Result";
            index: number;
        } | {
            kind: "NestedResult";
            index: number;
            resultIndex: number;
        }) & ({
            kind: "Input";
            index: number;
            type?: "object" | "pure" | undefined;
            value?: any;
        } | {
            kind: "GasCoin";
        } | {
            kind: "Result";
            index: number;
        } | {
            kind: "NestedResult";
            index: number;
            resultIndex: number;
        })[];
    };
    static getMessageForBoostedRefund({ poolObjectId, affectedAddress, newAddress, }: {
        poolObjectId: string;
        affectedAddress: string;
        newAddress: string;
    }): {
        bytes: Uint8Array;
        hex: string;
    };
    static signMessageSignatureForBoostedRefund({ keypair, poolObjectId, affectedAddress, newAddress, }: {
        keypair: Keypair;
        poolObjectId: string;
        affectedAddress: string;
        newAddress: string;
    }): Promise<SignatureWithBytes>;
    static verifySignedMessageForBoostedRefund({ poolObjectId, affectedAddress, newAddress, signedMessageSignature, }: {
        poolObjectId: string;
        newAddress: string;
        affectedAddress: string;
        signedMessageSignature: string;
    }): Promise<boolean>;
}

declare class FeeManager {
    static calculateFeeAmountIn({ feePercentage, amount, tokenDecimals, }: {
        feePercentage: string;
        amount: string;
        tokenDecimals: number;
    }): string;
    static calculateNetAmount({ feePercentage, amount, tokenDecimals, }: {
        feePercentage: string;
        amount: string;
        tokenDecimals: number;
    }): string;
    static getFeeInSuiTransaction({ transaction, fee: { feeAmountInMIST, feeCollectorAddress }, }: {
        transaction?: TransactionBlock;
        fee: {
            feeAmountInMIST: string;
            feeCollectorAddress: string;
        };
    }): GetTransactionType;
    static getFeeInCoinTransaction({ transaction, fee: { feeAmount, feeCollectorAddress, allCoinObjectsList }, }: {
        transaction?: TransactionBlock;
        fee: {
            feeAmount: string;
            feeCollectorAddress: string;
            allCoinObjectsList: CoinStruct[];
        };
    }): {
        tx: TransactionBlock;
        txRes: ({
            kind: "Input";
            index: number;
            type?: "object" | "pure" | undefined;
            value?: any;
        } | {
            kind: "GasCoin";
        } | {
            kind: "Result";
            index: number;
        } | {
            kind: "NestedResult";
            index: number;
            resultIndex: number;
        }) & ({
            kind: "Input";
            index: number;
            type?: "object" | "pure" | undefined;
            value?: any;
        } | {
            kind: "GasCoin";
        } | {
            kind: "Result";
            index: number;
        } | {
            kind: "NestedResult";
            index: number;
            resultIndex: number;
        })[];
    };
}

declare const SUI_DENOMINATOR: number;
declare const SHORT_SUI_COIN_TYPE = "0x2::sui::SUI";
declare const LONG_SUI_COIN_TYPE = "0x0000000000000000000000000000000000000000000000000000000000000002::sui::SUI";
declare const SWAP_GAS_BUDGET = 50000000;
declare const MAX_BATCH_OBJECTS_PER_GET_OBJECT_REQUEST = 50;
declare const MAX_BATCH_EVENTS_PER_QUERY_EVENTS_REQUEST = 50;
declare const TOKEN_ADDRESS_BASE_REGEX: RegExp;
declare const exitHandler: (options: ExitHandlerOptions) => void;
declare const exitHandlerWrapper: (options: ExitHandlerOptions) => void;
declare function getAllUserEvents(provider: SuiClient, publicKey: string): Promise<SuiEvent[]>;

declare function convertSlippage(slippagePercentage: number): number;

declare function convertToBNFormat(amount: string, decimals: number): string;

type TokenAddress = `0x${string}::${string}::${string}`;
declare function isValidTokenAddress(str: string): str is TokenAddress;

declare function normalizeSuiCoinType(address: string): string;

declare const getSuiProvider: (suiProviderOptions: SuiClientOptions) => SuiClient;

declare const isValidTokenAmount: ({ amount, maxAvailableAmount, decimals, minAvailableAmount, }: {
    amount: string;
    maxAvailableAmount: string;
    decimals: number;
    minAvailableAmount?: string;
}) => {
    isValid: boolean;
    reason: string;
};

declare const transactionFromSerializedTransaction: (serializedTransaction: string) => TransactionBlock;

declare function isSuiCoinType(coinType: string): boolean;

declare function getCreatePoolCapIdAndLpCoinType(createLpCoinTransactionResult: SuiTransactionBlockResponse): {
    createPoolCapId: string;
    lpCoinType: string;
};
declare function getPoolObjectIdFromTransactionResult(createPoolTransactionResult: SuiTransactionBlockResponse): string;
declare function numberToFixedBigInt(number: number): bigint;
declare function getLpCoinDecimals(coinsInfo: GetLpCoinDecimalsInput): number;

declare const clmmMainnet: {
    cetus_config: {
        package_id: string;
        published_at: string;
        config: {
            coin_list_id: string;
            launchpad_pools_id: string;
            clmm_pools_id: string;
            admin_cap_id: string;
            global_config_id: string;
            coin_list_handle: string;
            launchpad_pools_handle: string;
            clmm_pools_handle: string;
        };
    };
    clmm_pool: {
        package_id: string;
        published_at: string;
        version: number;
        config: {
            pools_id: string;
            global_config_id: string;
            global_vault_id: string;
            admin_cap_id: string;
        };
    };
    integrate: {
        package_id: string;
        published_at: string;
        version: number;
    };
    deepbook: {
        package_id: string;
        published_at: string;
    };
    deepbook_endpoint_v2: {
        package_id: string;
        published_at: string;
    };
    aggregatorUrl: string;
    swapCountUrl: string;
};
declare const CENTRALIZED_POOLS_INFO_ENDPOINT = "https://api-sui.cetus.zone/v2/sui/pools_info";
declare const MIN_FETCH_BEST_ROUTE_TIMEOUT_DURATION = 4000;
declare const MAX_FETCH_BEST_ROUTE_TIMEOUT_DURATION = 5500;
declare const FETCH_BEST_ROUTE_ATTEMPTS_COUNT = 1;

declare function isPoolsApiResponseValid(response: PoolsAPIResponse): response is {
    code: 0;
    message: "OK";
    data: PoolData[];
};
declare function isCoinsApiResponseValid(response: CoinsAPIResponse): response is {
    code: 0;
    message: "OK";
    data: CoinData[];
};
declare function isPoolDataValid(poolData: PoolData): boolean;
declare function isRewardInfoValid(rewardInfo: {
    type: string;
    fields: Record<string, unknown>;
}): boolean;
declare function isCategoryValid(category: {
    id: number;
    name: string;
    badge_url: string;
}): boolean;
declare function isCoinDataValid(coinData: CoinData): boolean;
declare function getPathsMap(pools: ShortPoolData[]): PathsCache;
declare const getCoinsMap: (coins: CoinData[]) => CoinsCache;
declare const getPoolByCoins: (tokenFrom: string, tokenTo: string, pools: ShortPoolData[]) => ShortPoolData | undefined;
declare function isTurbosCreatePoolEventParsedJson(data: unknown): data is TurbosCreatePoolEventParsedJson;
declare function getCoinsDataForPool({ coinManager, coinTypeA, coinTypeB, rawCoinAmountA, rawCoinAmountB, fee, }: {
    coinTypeA: string;
    coinTypeB: string;
    rawCoinAmountA: string;
    rawCoinAmountB: string;
    fee: number;
    coinManager: CoinManagerSingleton;
}): Promise<{
    poolName: string;
    amountA: string;
    amountB: string;
    coinSymbolA: string;
    coinSymbolB: string;
    amountAIsRaw: boolean;
    amountBIsRaw: boolean;
    feePercentage: string;
}>;

declare const getPathMapAndCoinTypesSet: (pools: InterestPool[]) => {
    pathMap: Map<string, CommonPoolData>;
    coinTypesSet: Set<string>;
};
declare const getBestInterestRoute: (routes: GetRouteQuotesReturn["routes"]) => GetRouteQuotesReturn["routes"][0];
declare const getAmountWithSlippage: (amount: string, slippagePercentage: number) => string;

declare function isApiResponseValid(pools: unknown): pools is InterestPool[];
declare function isInterestPool(pool: unknown): pool is InterestPool;
declare function isStablePoolState(state: unknown): state is StablePoolState;
declare function isVolatilePoolState(state: unknown): state is VolatilePoolState;

declare const ROUTES_QUOTES_AMOUNT_OBJECT_INDEX = 2;

declare function isStorageValue(data: unknown): data is StorageValue;
declare function isCommonCoinDataArray(data: unknown): data is CommonCoinData[];
declare function isCommonCoinData(data: unknown): data is CommonCoinData;
declare function isCommonPoolDataArray(data: unknown): data is CommonPoolData[];
declare function isShortCoinMetadataArray(data: unknown): data is ShortCoinMetadata[];
declare function isShortPoolDataArray(data: unknown): data is ShortPoolData[];
declare function isCetusPathForStorageArray(data: unknown): data is CetusPathForStorage[];

type SurfDogConfig = {
    GAME_ADDRESS: string;
    PROGRAM_ADDRESS: string;
    CLOCK_ADDRESS: string;
    TICKET_SUPPLY: bigint;
    TICKET_REWARD: bigint;
    SALE_SUPPLY: bigint;
    SURF_DECIMALS: bigint;
};

declare class SurfdogLaunchpadSingleton {
    private static _instance;
    private provider;
    private config;
    static GAS_BUDGET_FOR_BUYING_TICKET: number;
    private constructor();
    static getInstance(suiProviderUrl?: string, config?: SurfDogConfig): SurfdogLaunchpadSingleton;
    getUserState(publicKey: string): Promise<{
        allTickets: bigint;
        id: string;
        wonTickets: bigint;
    } | null>;
    getGameState(): Promise<{
        allTickets: bigint;
        startTimestamp: bigint;
        ticketPrice: bigint;
        tokensPerTicket: bigint;
        winningTickets: bigint;
        balanceLeft: bigint;
    }>;
    createUserState(): Promise<{
        tx: TransactionBlock;
        txRes: ({
            kind: "Input";
            index: number;
            type?: "object" | "pure" | undefined;
            value?: any;
        } | {
            kind: "GasCoin";
        } | {
            kind: "Result";
            index: number;
        } | {
            kind: "NestedResult";
            index: number;
            resultIndex: number;
        }) & ({
            kind: "Input";
            index: number;
            type?: "object" | "pure" | undefined;
            value?: any;
        } | {
            kind: "GasCoin";
        } | {
            kind: "Result";
            index: number;
        } | {
            kind: "NestedResult";
            index: number;
            resultIndex: number;
        })[];
    }>;
    buyTicket({ ticketPrice, userStateId }: {
        ticketPrice: string;
        userStateId: string;
    }): Promise<{
        tx: TransactionBlock;
        txRes: ({
            kind: "Input";
            index: number;
            type?: "object" | "pure" | undefined;
            value?: any;
        } | {
            kind: "GasCoin";
        } | {
            kind: "Result";
            index: number;
        } | {
            kind: "NestedResult";
            index: number;
            resultIndex: number;
        }) & ({
            kind: "Input";
            index: number;
            type?: "object" | "pure" | undefined;
            value?: any;
        } | {
            kind: "GasCoin";
        } | {
            kind: "Result";
            index: number;
        } | {
            kind: "NestedResult";
            index: number;
            resultIndex: number;
        })[];
    }>;
    checkSpinStatusByTx({ tx }: {
        tx: SuiTransactionBlockResponse;
    }): boolean;
    getMaxTicketsCount(suiBalance: string, ticketPrice: string): number;
}

declare const CHAIN = "sui:mainnet";
declare const GAME_ADDRESS$1 = "0xefbee845f696399fb22e23bb54694b45bf0f2e11e8165cf99c830c8d862f56df";
declare const PROGRAM_ADDRESS$1 = "0xe2d76c57bb1cf8b511f6f4bbbab7d575ab221d2c84b3ccb5eee2ef999c7dc61f";
declare const CLOCK_ADDRESS$1 = "0x0000000000000000000000000000000000000000000000000000000000000006";
declare const TICKET_SUPPLY$1: bigint;
declare const TICKET_REWARD$1: bigint;
declare const SALE_SUPPLY$1: bigint;
declare const SURF_DECIMALS$1: bigint;

declare const mainnet_config_CHAIN: typeof CHAIN;
declare namespace mainnet_config {
  export { mainnet_config_CHAIN as CHAIN, CLOCK_ADDRESS$1 as CLOCK_ADDRESS, GAME_ADDRESS$1 as GAME_ADDRESS, PROGRAM_ADDRESS$1 as PROGRAM_ADDRESS, SALE_SUPPLY$1 as SALE_SUPPLY, SURF_DECIMALS$1 as SURF_DECIMALS, TICKET_REWARD$1 as TICKET_REWARD, TICKET_SUPPLY$1 as TICKET_SUPPLY };
}

declare const GAME_ADDRESS = "0xa8cf842832915a2dd203f8604a78a12a686fdba987d19065092fe92b09029619";
declare const PROGRAM_ADDRESS = "0xae40d60ccae9366903e142ad222b91953e699221c51b9a2647d69cfe8ef2ff39";
declare const CLOCK_ADDRESS = "0x0000000000000000000000000000000000000000000000000000000000000006";
declare const TICKET_SUPPLY: bigint;
declare const TICKET_REWARD: bigint;
declare const SALE_SUPPLY: bigint;
declare const SURF_DECIMALS: bigint;

declare const testnet_config_CLOCK_ADDRESS: typeof CLOCK_ADDRESS;
declare const testnet_config_GAME_ADDRESS: typeof GAME_ADDRESS;
declare const testnet_config_PROGRAM_ADDRESS: typeof PROGRAM_ADDRESS;
declare const testnet_config_SALE_SUPPLY: typeof SALE_SUPPLY;
declare const testnet_config_SURF_DECIMALS: typeof SURF_DECIMALS;
declare const testnet_config_TICKET_REWARD: typeof TICKET_REWARD;
declare const testnet_config_TICKET_SUPPLY: typeof TICKET_SUPPLY;
declare namespace testnet_config {
  export { testnet_config_CLOCK_ADDRESS as CLOCK_ADDRESS, testnet_config_GAME_ADDRESS as GAME_ADDRESS, testnet_config_PROGRAM_ADDRESS as PROGRAM_ADDRESS, testnet_config_SALE_SUPPLY as SALE_SUPPLY, testnet_config_SURF_DECIMALS as SURF_DECIMALS, testnet_config_TICKET_REWARD as TICKET_REWARD, testnet_config_TICKET_SUPPLY as TICKET_SUPPLY };
}

declare function isTransactionArgument(arg: GenericArg): arg is TransactionArgument;
declare function obj(tx: TransactionBlock, arg: ObjectArg): {
    kind: "Input";
    index: number;
    type?: "object" | "pure" | undefined;
    value?: any;
} | {
    kind: "GasCoin";
} | {
    kind: "Result";
    index: number;
} | {
    kind: "NestedResult";
    index: number;
    resultIndex: number;
};

declare class NoRoutesError extends Error {
    constructor(msg: string);
}

export { type AftermathOptions, AftermathSingleton, type AnyFunction, type BestRouteData, CENTRALIZED_POOLS_INFO_ENDPOINT, CetusSingleton, type CoinAssetData, type CoinData, CoinManagerSingleton, type CoinsAPIResponse, type CommonCoinData, type CreateCoinExternalApiResType, type CreateCoinTransactionParams, type CreateDCAAddGasBudgetTransaction, type CreateDCADepositBaseTransactionArgs, type CreateDCAInitTransactionArgs, type CreateLpCoinInput, type CreatePoolCoinInfo, type CreatePoolInput, type DCAContent, type DCAContentFields, type DCACreateEventParsedJson, DCAManagerSingleton, type DCAObject, type DCAResponse, type DCAResponseData, DCATimescale, type DetailedTurbosOwnedPoolInfo, FETCH_BEST_ROUTE_ATTEMPTS_COUNT, FeeManager, FlowxSingleton, type GenericArg, type GetCacheParams, type GetDCAAddGasBudgetTransactionArgs, type GetDCADepositBaseTransactionArgs, type GetDCAIncreaseOrdersRemainingTransactionArgs, type GetDCAInitTradeTransactionArgs, type GetDCAInitTransactionArgs, type GetDCAInitWithPriceParamsTransactionArgs, type GetDCARedeemFundsAndCloseTransactionArgs, type GetDCAResolveTradeTransactionArgs, type GetDCASetInactiveTransactionArgs, type GetDCASetReactivateAsOwnerTransactionArgs, type GetDCAWithdrawBaseTransactionArgs, type GetLpCoinDecimalsCoinInfo, type GetLpCoinDecimalsInput, type GetTransactionType, type GetWeightsCoinInfo, type GetWeightsInput, type ICoinManager, type IRouteManager, type IStorage, type IWalletManager, InMemoryStorageSingleton, type InterestOptions, InterestProtocolSingleton, type InterestRouteData, LONG_SUI_COIN_TYPE, MAX_BATCH_EVENTS_PER_QUERY_EVENTS_REQUEST, MAX_BATCH_OBJECTS_PER_GET_OBJECT_REQUEST, MAX_FETCH_BEST_ROUTE_TIMEOUT_DURATION, MIN_FETCH_BEST_ROUTE_TIMEOUT_DURATION, NoRoutesError, type ObjectArg, type ObjectCallArg, type ObjectId, type OwnedPoolCoinInfo, type OwnedPoolInfo, type PoolData, type PoolsAPIResponse, type Provider, type Providers, type ProvidersToRouteDataMap, type PureArg, ROUTES_QUOTES_AMOUNT_OBJECT_INDEX, type RedisStorageClient, RedisStorageSingleton, RefundManagerSingleton, RouteManager, type RouteParams, SHORT_SUI_COIN_TYPE, SUI_DENOMINATOR, SWAP_GAS_BUDGET, type SetCacheParams, type ShortPoolData, type SmartOutputAmountData, type Storage, StorageProperty, type StorageValue, type SuiEventDCACreate, type SurfDogConfig, SurfdogLaunchpadSingleton, type SwapRequiredData, TOKEN_ADDRESS_BASE_REGEX, type TokenAddress, type TransactionResult, type TurbosCreatePoolEventParsedJson, type TurbosOptions, type TurbosOwnedPool, TurbosSingleton, type UpdateCoinsCacheHandler, type UpdatedCoinsCache, WalletManagerSingleton, clmmMainnet, convertSlippage, convertToBNFormat, exitHandler, exitHandlerWrapper, feeAmount, filterValidDCAObjects, fromArgument, getAllUserEvents, getAmountWithSlippage, getBaseQuoteCoinTypesFromDCAType, getBestInterestRoute, getCoinsAssetsFromCoinObjects, getCoinsDataForPool, getCoinsMap, getCreatePoolCapIdAndLpCoinType, getFiltredProviders, getLpCoinDecimals, getPathMapAndCoinTypesSet, getPathsMap, getPoolByCoins, getPoolObjectIdFromTransactionResult, getRouterMaps, getSuiProvider, hasMinMaxPriceParams, isApiResponseValid, isCategoryValid, isCetusPathForStorageArray, isCoinDataValid, isCoinsApiResponseValid, isCommonCoinData, isCommonCoinDataArray, isCommonPoolDataArray, isDCAContent, isInterestPool, isPoolDataValid, isPoolsApiResponseValid, isRewardInfoValid, isShortCoinMetadataArray, isShortPoolDataArray, isStablePoolState, isStorageValue, isSuiCoinType, isTransactionArgument, isTurbosCreatePoolEventParsedJson, isValidDCAFields, isValidDCAObjectResponse, isValidPrivateKey, isValidResForCreateCoin, isValidSeedPhrase, isValidTokenAddress, isValidTokenAmount, isVolatilePoolState, mainnet_config as mainnetSurfdogConfig, normalizeMnemonic, normalizeSuiCoinType, numberToFixedBigInt, obj, testnet_config as testnetSurfdogConfig, tokenFromIsTokenTo, transactionFromSerializedTransaction, tryCatchWrapper };
