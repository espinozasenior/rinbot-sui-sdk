import { CommonPoolData } from "../types";
import { LONG_SUI_COIN_TYPE, SHORT_SUI_COIN_TYPE } from "../common";
import { PoolsAPIResponse, CoinsAPIResponse, CoinData, PoolData } from "./types";

/* eslint-disable require-jsdoc */
export function isPoolsApiResponseValid(
  response: PoolsAPIResponse,
): response is { code: 0; message: "OK"; data: PoolData[] } {
  return (
    response.code === 0 &&
    response.message === "OK" &&
    response.data !== undefined &&
    Array.isArray(response.data) &&
    response.data.every(isPoolDataValid)
  );
}

export function isCoinsApiResponseValid(
  response: CoinsAPIResponse,
): response is { code: 0; message: "OK"; data: CoinData[] } {
  return (
    response.code === 0 &&
    response.message === "OK" &&
    response.data !== undefined &&
    Array.isArray(response.data) &&
    response.data.every(isCoinDataValid)
  );
}

export function isPoolDataValid(poolData: PoolData): boolean {
  return (
    typeof poolData.id === "number" &&
    typeof poolData.coin_a === "string" &&
    typeof poolData.coin_b === "string" &&
    typeof poolData.deploy_time_ms === "string" &&
    typeof poolData.fee === "string" &&
    typeof poolData.fee_growth_global_a === "string" &&
    typeof poolData.fee_growth_global_b === "string" &&
    typeof poolData.fee_protocol === "string" &&
    typeof poolData.liquidity === "string" &&
    typeof poolData.max_liquidity_per_tick === "string" &&
    typeof poolData.protocol_fees_a === "string" &&
    typeof poolData.protocol_fees_b === "string" &&
    typeof poolData.sqrt_price === "string" &&
    typeof poolData.tick_current_index === "number" &&
    typeof poolData.tick_spacing === "string" &&
    typeof poolData.unlocked === "boolean" &&
    typeof poolData.pool_id === "string" &&
    typeof poolData.type === "string" &&
    typeof poolData.coin_symbol_a === "string" &&
    typeof poolData.coin_symbol_b === "string" &&
    typeof poolData.coin_type_a === "string" &&
    typeof poolData.coin_type_b === "string" &&
    typeof poolData.fee_type === "string" &&
    typeof poolData.add_2_percent_depth === "string" &&
    typeof poolData.reduce_2_percent_depth === "string" &&
    Array.isArray(poolData.reward_infos) &&
    poolData.reward_infos.every(isRewardInfoValid) &&
    typeof poolData.reward_last_updated_time_ms === "string" &&
    (typeof poolData.category === "string" || poolData.category === null) &&
    typeof poolData.apr === "number" &&
    typeof poolData.apr_percent === "number" &&
    typeof poolData.fee_apr === "number" &&
    typeof poolData.reward_apr === "number" &&
    typeof poolData.volume_24h_usd === "number" &&
    typeof poolData.liquidity_usd === "number" &&
    typeof poolData.coin_a_liquidity_usd === "number" &&
    typeof poolData.coin_b_liquidity_usd === "number" &&
    typeof poolData.fee_24h_usd === "number" &&
    typeof poolData.flag === "number" &&
    typeof poolData.created_at === "string" &&
    typeof poolData.updated_at === "string"
  );
}

export function isRewardInfoValid(rewardInfo: { type: string; fields: Record<string, unknown> }): boolean {
  return (
    typeof rewardInfo.type === "string" && typeof rewardInfo.fields === "object" && !Array.isArray(rewardInfo.fields)
  );
}

export function isCategoryValid(category: { id: number; name: string; badge_url: string }): boolean {
  return typeof category.id === "number" && typeof category.name === "string" && typeof category.badge_url === "string";
}

export function isCoinDataValid(coinData: CoinData): boolean {
  return (
    typeof coinData.id === "number" &&
    typeof coinData.name === "string" &&
    typeof coinData.type === "string" &&
    typeof coinData.symbol === "string" &&
    typeof coinData.decimals === "number" &&
    typeof coinData.logo_url === "string" &&
    typeof coinData.coingecko_id === "string" &&
    (typeof coinData.pyth_id === "string" || coinData.pyth_id === null) &&
    typeof coinData.in_quote_list === "boolean" &&
    typeof coinData.is_stable === "boolean" &&
    typeof coinData.is_popular === "boolean" &&
    typeof coinData.in_pool === "boolean" &&
    typeof coinData.category_id === "number" &&
    typeof coinData.faucet_amount === "string" &&
    typeof coinData.flag === "number" &&
    typeof coinData.created_at === "string" &&
    typeof coinData.updated_at === "string" &&
    isCategoryValid(coinData.category)
  );
}

export function getPathsMap(pools: PoolData[]) {
  return pools.reduce((map: Map<string, CommonPoolData>, pool: PoolData) => {
    const coinTypeA: string = pool.coin_type_a;
    const coinTypeB: string = pool.coin_type_b;

    const commonPoolData: CommonPoolData = {
      base: coinTypeA,
      quote: coinTypeB,
    };
    const poolKey = `${coinTypeA}-${coinTypeB}`;

    map.set(poolKey, commonPoolData);
    return map;
  }, new Map());
}

export const getCoinsMap = (coins: CoinData[]): Map<string, CoinData> => {
  return coins.reduce((map: Map<string, CoinData>, coin: CoinData) => {
    map.set(coin.type, coin);
    return map;
  }, new Map());
};

export const getPoolByCoins = (tokenFrom: string, tokenTo: string, pools: PoolData[]): PoolData | undefined => {
  const tokenFromIsSui: boolean = tokenFrom === SHORT_SUI_COIN_TYPE || tokenFrom === LONG_SUI_COIN_TYPE;
  const tokenToIsSui: boolean = tokenTo === SHORT_SUI_COIN_TYPE || tokenTo === LONG_SUI_COIN_TYPE;

  return pools.find((pool: PoolData) => {
    const coinAInPoolIsSui: boolean =
      pool.coin_type_a === SHORT_SUI_COIN_TYPE || pool.coin_type_a === LONG_SUI_COIN_TYPE;
    const coinBInPoolIsSui: boolean =
      pool.coin_type_b === SHORT_SUI_COIN_TYPE || pool.coin_type_b === LONG_SUI_COIN_TYPE;
    const notSuiToken: string = tokenFromIsSui ? tokenTo : tokenFrom;
    const poolHasBothTokens: boolean =
      (pool.coin_type_a === tokenFrom && pool.coin_type_b === tokenTo) ||
      (pool.coin_type_a === tokenTo && pool.coin_type_b === tokenFrom);

    return tokenFromIsSui || tokenToIsSui
      ? (coinAInPoolIsSui && pool.coin_type_b === notSuiToken) || (coinBInPoolIsSui && pool.coin_type_a === notSuiToken)
      : poolHasBothTokens;
  });
};
