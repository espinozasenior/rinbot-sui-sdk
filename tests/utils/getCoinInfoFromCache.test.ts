import { CommonCoinData } from "../../src";
import { LONG_SUI_COIN_TYPE, SHORT_SUI_COIN_TYPE } from "../../src/providers/common";
import { getCoinInfoFromCache } from "../../src/providers/utils/getCoinInfoFromCache";

describe("getCoinInfoFromCache", () => {
  it("should return coin info for SUI coin type", () => {
    const coinsCache = new Map<string, CommonCoinData>();
    coinsCache.set(SHORT_SUI_COIN_TYPE, { symbol: "SUI", type: "sui", decimals: 18 });
    const result = getCoinInfoFromCache(SHORT_SUI_COIN_TYPE, coinsCache);
    expect(result).toEqual({ symbol: "SUI", type: "sui", decimals: 18 });
  });

  it("should return coin info for non-SUI coin type", () => {
    const coinsCache = new Map<string, CommonCoinData>();
    coinsCache.set("ETH", { symbol: "ETH", type: "eth", decimals: 18 });
    const result = getCoinInfoFromCache("ETH", coinsCache);
    expect(result).toEqual({ symbol: "ETH", type: "eth", decimals: 18 });
  });

  it("should return undefined if coin type is not found in cache", () => {
    const coinsCache = new Map<string, CommonCoinData>();
    const result = getCoinInfoFromCache("BTC", coinsCache);
    expect(result).toBeUndefined();
  });

  it("should prioritize long SUI coin type over short SUI coin type", () => {
    const coinsCache = new Map<string, CommonCoinData>();
    coinsCache.set(LONG_SUI_COIN_TYPE, { symbol: "LongSUI", type: "sui", decimals: 18 });
    coinsCache.set(SHORT_SUI_COIN_TYPE, { symbol: "ShortSUI", type: "sui", decimals: 18 });
    const result = getCoinInfoFromCache(SHORT_SUI_COIN_TYPE, coinsCache);
    expect(result).toEqual({ symbol: "LongSUI", type: "sui", decimals: 18 });
  });

  it("should return undefined if both short and long SUI coin types are not found in cache", () => {
    const coinsCache = new Map<string, CommonCoinData>();
    const result = getCoinInfoFromCache(SHORT_SUI_COIN_TYPE, coinsCache);
    expect(result).toBeUndefined();
  });
});
