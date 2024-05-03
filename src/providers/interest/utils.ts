import { InterestPool } from "@interest-protocol/clamm-sdk";
import { CommonPoolData } from "../types";

export const getPathMapAndCoinTypesSet = (
  pools: InterestPool[],
): {
  pathMap: Map<string, CommonPoolData>;
  coinTypesSet: Set<string>;
} => {
  const pathMap: Map<string, CommonPoolData> = new Map();
  const coinTypesSet: Set<string> = new Set();

  pools.forEach((pool: InterestPool) => {
    const coinTypes = pool.coinTypes;
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
