/* eslint-disable require-jsdoc */
import { TransactionBlock } from "@mysten/sui.js/transactions";
import { cacheOptions, publicKey } from "../constants";
import { AftermathSingleton } from "../../src/providers/aftermath/aftermath";
import { getPathMapAndCoinTypesSet } from "../../src/providers/aftermath/utils";

jest.setTimeout(60000);

const SUI_COIN_TYPE = "0x0000000000000000000000000000000000000000000000000000000000000002::sui::SUI";
const USDC_COIN_TYPE = "0x5d4b302506645c37ff133b98c4b50a5ae14841659738d6d733d59d0d217a93bf::coin::COIN";

describe("AftermathSingleton", () => {
  let aftermathSingleton: AftermathSingleton;

  beforeAll(async () => {
    aftermathSingleton = await AftermathSingleton.getInstance({
      lazyLoading: false,
      cacheOptions,
    });
  });

  describe("getPools", () => {
    it("should return pools cache", () => {
      const pools = aftermathSingleton.getPools();

      expect(pools.length).toBeGreaterThan(0);
    });
  });

  describe("getPool", () => {
    it("should return the correct pool when provided with valid coin types", () => {
      const pool = aftermathSingleton.getPool(SUI_COIN_TYPE, USDC_COIN_TYPE);

      expect(pool).toBeDefined();
    });

    it("should throw an error when provided with invalid coin types", () => {
      expect(() => {
        aftermathSingleton.getPool(SUI_COIN_TYPE, "invalidCoinType");
      }).toThrow();
    });
  });

  describe("getCoins", () => {
    it("should return updated coins cache", () => {
      const coins = aftermathSingleton.getCoins();

      expect(coins.provider).toBe("Aftermath");
      expect(coins.data.length).toBeGreaterThan(0);
    });
  });

  describe("getPaths", () => {
    it("should return paths cache", () => {
      const paths = aftermathSingleton.getPaths();

      paths.forEach((poolData, poolKey) => {
        const { base, quote } = poolData;
        expect(poolKey).toStrictEqual(`${base}-${quote}`);
      });
    });
  });

  describe("getRouteData", () => {
    it("should return outputAmount and route", async () => {
      const { outputAmount, route } = await aftermathSingleton.getRouteData({
        coinTypeFrom: SUI_COIN_TYPE,
        coinTypeTo: USDC_COIN_TYPE,
        inputAmount: "0.001",
        slippagePercentage: 10,
        publicKey,
      });

      expect(outputAmount > 0).toStrictEqual(true);
      expect(route).toBeDefined();
    });
  });

  describe("getDirectOutputAmount", () => {
    it("should return direct output amount", () => {
      const pool = aftermathSingleton.getPool(SUI_COIN_TYPE, USDC_COIN_TYPE);
      const outputAmount = aftermathSingleton.getDirectOutputAmount(pool, "10", SUI_COIN_TYPE, USDC_COIN_TYPE);
      expect(outputAmount > 0).toStrictEqual(true);
    });
  });

  describe("getSwapTransaction", () => {
    it("should return swap transaction", async () => {
      const { route } = await aftermathSingleton.getRouteData({
        coinTypeFrom: SUI_COIN_TYPE,
        coinTypeTo: USDC_COIN_TYPE,
        inputAmount: "0.001",
        slippagePercentage: 10,
        publicKey,
      });

      const transaction = await aftermathSingleton.getSwapTransaction({
        route,
        publicKey,
        slippagePercentage: 10,
      });

      expect(transaction).toBeInstanceOf(TransactionBlock);
    });
  });

  describe("getPathMapAndCoinTypesSet", () => {
    it("should return path map and coin types set", () => {
      const poolsCache = aftermathSingleton.getPools();
      const { pathMap, coinTypesSet } = getPathMapAndCoinTypesSet(poolsCache);

      pathMap.forEach((poolData, poolKey) => {
        const { base, quote } = poolData;
        expect(poolKey).toStrictEqual(`${base}-${quote}`);
      });
      expect(coinTypesSet.size).toBeGreaterThan(0);
    });
  });
});
