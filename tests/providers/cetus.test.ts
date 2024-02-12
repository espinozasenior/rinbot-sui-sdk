/* eslint-disable require-jsdoc */
import { TransactionBlock } from "@mysten/sui.js/transactions";
import { publicKey, cacheOptions, suiProviderUrl } from "../constants";
import { CetusSingleton } from "../../src/providers/cetus/cetus";
import { clmmMainnet } from "../../src/providers/cetus/config";
import { getPoolsDataFromApiData } from "../../src/providers/cetus/utils";

jest.setTimeout(20000);

const SUI_COIN_TYPE = "0x0000000000000000000000000000000000000000000000000000000000000002::sui::SUI";
const USDC_COIN_TYPE = "0x5d4b302506645c37ff133b98c4b50a5ae14841659738d6d733d59d0d217a93bf::coin::COIN";

describe("CetusSingleton", () => {
  let cetusSingleton: CetusSingleton;

  beforeAll(async () => {
    cetusSingleton = await CetusSingleton.getInstance({
      lazyLoading: false,
      cacheOptions,
      suiProviderUrl,
      sdkOptions: clmmMainnet,
    });
  });

  describe("getCoins", () => {
    it("should return updated coins cache", () => {
      const coins = cetusSingleton.getCoins();

      expect(coins.provider).toBe("Cetus");
      expect(coins.data.length).toBeGreaterThan(0);
    });
  });

  describe("getPaths", () => {
    it("should return paths cache", () => {
      const paths = cetusSingleton.getPaths();

      paths.forEach((poolData, poolKey) => {
        const { base, quote } = poolData;
        expect(poolKey).toStrictEqual(`${base}-${quote}`);
      });
    });
  });

  describe("getRouteData", () => {
    it("should return outputAmount and route", async () => {
      const { outputAmount, route } = await cetusSingleton.getRouteData({
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
      const { route } = await cetusSingleton.getRouteData({
        coinTypeFrom: SUI_COIN_TYPE,
        coinTypeTo: USDC_COIN_TYPE,
        inputAmount: "0.001",
        slippagePercentage: 10,
        publicKey,
      });

      const transaction = await cetusSingleton.getSwapTransaction({
        route,
        publicKey,
        slippagePercentage: 10,
      });

      expect(transaction).toBeInstanceOf(TransactionBlock);
    });
  });

  describe("getPoolsDataFromApiData", () => {
    it("should return coins, paths, coinMap and poolMap", () => {
      const poolsCache = cetusSingleton.poolsCache;
      const { coins, paths, coinMap, poolMap } = getPoolsDataFromApiData({ poolsInfo: poolsCache });

      expect(poolMap.size).toBeGreaterThan(0);
      poolMap.forEach((poolData, poolKey) => {
        const { base, quote } = poolData;
        expect(poolKey).toStrictEqual(`${base}-${quote}`);
      });

      expect(coinMap.size).toBeGreaterThan(0);
      coinMap.forEach((coinData, coinType) => {
        const { address, decimals, symbol } = coinData;
        expect(typeof address).toStrictEqual("string");
        expect(typeof decimals).toStrictEqual("number");
        expect(typeof symbol).toStrictEqual("string");
        expect(coinType).toStrictEqual(address);
      });

      expect(coins.length).toBeGreaterThan(0);
      expect(paths.length).toBeGreaterThan(0);
    });
  });
});
