/* eslint-disable require-jsdoc */
import { TransactionBlock } from "@mysten/sui.js/transactions";
import { TurbosSingleton } from "../../src/providers/turbos/turbos";
import { getPathsMap, getPoolByCoins } from "../../src/providers/turbos/utils";
import { cacheOptions, suiProviderUrl, SUI_COIN_TYPE, USDC_COIN_TYPE, publicKey } from "../constants";

jest.setTimeout(60000);

describe("TurbosSingleton", () => {
  let turbosSingleton: TurbosSingleton;

  beforeAll(async () => {
    turbosSingleton = await TurbosSingleton.getInstance({
      lazyLoading: false,
      cacheOptions,
      suiProviderUrl,
    });
  });

  describe("getPools", () => {
    it("should return pools cache", () => {
      const pools = turbosSingleton.getPools();

      expect(pools.length).toBeGreaterThan(0);
    });
  });

  describe("getCoins", () => {
    it("should return updated coins cache", () => {
      const coins = turbosSingleton.getCoins();

      expect(coins.provider).toBe("Turbos");
      expect(coins.data.length).toBeGreaterThan(0);
    });
  });

  describe("getPaths", () => {
    it("should return paths cache", () => {
      const paths = turbosSingleton.getPaths();

      paths.forEach((poolData, poolKey) => {
        const { base, quote } = poolData;
        expect(poolKey).toStrictEqual(`${base}-${quote}`);
      });
    });
  });

  describe("getRouteData", () => {
    it("should return outputAmount and route", async () => {
      const { outputAmount, route } = await turbosSingleton.getRouteData({
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

  describe("getSwapTransaction", () => {
    it("should return swap transaction", async () => {
      const { route } = await turbosSingleton.getRouteData({
        coinTypeFrom: SUI_COIN_TYPE,
        coinTypeTo: USDC_COIN_TYPE,
        inputAmount: "0.001",
        slippagePercentage: 10,
        publicKey,
      });

      const transaction = await turbosSingleton.getSwapTransaction({
        route,
        publicKey,
        slippagePercentage: 10,
      });

      expect(transaction).toBeInstanceOf(TransactionBlock);
    });
  });

  describe("getPathsMap", () => {
    it("should return paths map", () => {
      const poolsCache = turbosSingleton.poolsCache;
      const pathsMap = getPathsMap(poolsCache);

      pathsMap.forEach((poolData, poolKey) => {
        const { base, quote } = poolData;
        expect(poolKey).toStrictEqual(`${base}-${quote}`);
      });
    });
  });

  describe("getPoolByCoins", () => {
    it("should return pool", async () => {
      const pool = getPoolByCoins(SUI_COIN_TYPE, USDC_COIN_TYPE, turbosSingleton.poolsCache);

      expect(pool).toBeDefined();
    });
  });
});
