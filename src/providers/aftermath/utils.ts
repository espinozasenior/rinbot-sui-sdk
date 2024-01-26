/* eslint-disable require-jsdoc */

import { CoinMetadata } from "@mysten/sui.js/client";
import { CoinMetadaWithInfo, Pool, PoolCoin, PoolCoins, PoolObject, PoolStats, SuiNetwork } from "aftermath-ts-sdk";

import { CommonPoolData } from "../types";

export const getPathMapAndCoinTypesSet = (
  pools: Pool[],
): {
  pathMap: Map<string, CommonPoolData>;
  coinTypesSet: Set<string>;
} => {
  const pathMap: Map<string, CommonPoolData> = new Map();
  const coinTypesSet: Set<string> = new Set();

  pools.forEach((pool: Pool) => {
    const coinTypes: string[] = Object.keys(pool.pool.coins);
    const base: string = coinTypes[0];
    const quote: string = coinTypes[1];

    // Fill pathMap
    const commonPoolData: CommonPoolData = {
      base,
      quote,
    };
    const poolKey = `${base}-${quote}`;
    pathMap.set(poolKey, commonPoolData);

    // Fill coinTypeSet
    coinTypesSet.add(base);
    coinTypesSet.add(quote);
  });

  return { pathMap, coinTypesSet };
};

export function isApiResponseValid(pools: Pool[]): pools is Pool[] {
  return pools !== undefined && Array.isArray(pools) && pools.length > 0 && pools.every(isPoolValid);
}

export function isPoolObjectValid(poolObject: PoolObject): boolean {
  return (
    typeof poolObject.name === "string" &&
    typeof poolObject.creator === "string" &&
    typeof poolObject.lpCoinType === "string" &&
    typeof poolObject.lpCoinSupply === "bigint" &&
    typeof poolObject.illiquidLpCoinSupply === "bigint" &&
    typeof poolObject.flatness === "bigint" &&
    isPoolCoinsValid(poolObject.coins) &&
    typeof poolObject.lpCoinDecimals === "number"
  );
}

export function isPoolCoinsValid(poolCoins: PoolCoins): boolean {
  return Object.values(poolCoins).every(isPoolCoinValid);
}

export function isPoolCoinValid(poolCoin: PoolCoin): boolean {
  return (
    typeof poolCoin.weight === "bigint" &&
    typeof poolCoin.balance === "bigint" &&
    typeof poolCoin.tradeFeeIn === "bigint" &&
    typeof poolCoin.tradeFeeOut === "bigint" &&
    typeof poolCoin.depositFee === "bigint" &&
    typeof poolCoin.withdrawFee === "bigint" &&
    typeof poolCoin.decimalsScalar === "bigint" &&
    typeof poolCoin.normalizedBalance === "bigint" &&
    (typeof poolCoin.decimals === "number" || poolCoin.decimals === undefined)
  );
}

export function isPoolValid(pool: Pool): boolean {
  return (
    isPoolObjectValid(pool.pool) &&
    (pool.network === undefined || isSuiNetworkValid(pool.network)) &&
    (pool.stats === undefined || isPoolStatsValid(pool.stats))
  );
}

export function isSuiNetworkValid(suiNetwork: SuiNetwork): boolean {
  return ["DEVNET", "TESTNET", "LOCAL", "MAINNET"].includes(suiNetwork);
}

export function isPoolStatsValid(poolStats: PoolStats): boolean {
  return (
    typeof poolStats.volume === "number" &&
    typeof poolStats.tvl === "number" &&
    Array.isArray(poolStats.supplyPerLps) &&
    poolStats.supplyPerLps.every((supply) => typeof supply === "number") &&
    typeof poolStats.lpPrice === "number" &&
    typeof poolStats.fees === "number" &&
    typeof poolStats.apr === "number"
  );
}

export function isCoinMetadaWithInfoApiResponseValid(metadata: CoinMetadaWithInfo): metadata is CoinMetadaWithInfo {
  return metadata !== undefined && isCoinMetadaWithInfoValid(metadata);
}

export function isCoinMetadataValid(coinMetadata: CoinMetadata): boolean {
  return (
    typeof coinMetadata.decimals === "number" &&
    typeof coinMetadata.description === "string" &&
    (typeof coinMetadata.iconUrl === "string" || coinMetadata.iconUrl === null) &&
    (typeof coinMetadata.id === "string" || coinMetadata.id === null) &&
    typeof coinMetadata.name === "string" &&
    typeof coinMetadata.symbol === "string"
  );
}

export function isCoinMetadaWithInfoValid(coinMetadaWithInfo: CoinMetadaWithInfo): boolean {
  return (
    isCoinMetadataValid(coinMetadaWithInfo) &&
    (typeof coinMetadaWithInfo.isGenerated === "boolean" || coinMetadaWithInfo.isGenerated === undefined)
  );
}
