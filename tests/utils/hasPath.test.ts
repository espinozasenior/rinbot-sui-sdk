import { CommonPoolData } from "../../src/providers/types";
import { hasPath } from "../../src/providers/utils/hasPath";

describe("hasPath", () => {
  it("should return true when path exists between coinA and coinB in pathMap", () => {
    const coinA = "BTC";
    const coinB = "ETH";
    const pathMap: Map<string, CommonPoolData> = new Map([[`${coinA}-${coinB}`, { base: coinA, quote: coinB }]]);

    const result = hasPath(coinA, coinB, pathMap);

    expect(result).toBe(true);
  });

  it("should return true when path exists between coinB and coinA in pathMap", () => {
    const coinA = "BTC";
    const coinB = "ETH";
    const pathMap: Map<string, CommonPoolData> = new Map([[`${coinB}-${coinA}`, { base: coinB, quote: coinA }]]);

    const result = hasPath(coinA, coinB, pathMap);

    expect(result).toBe(true);
  });

  it("should return false when path does not exist between coinA and coinB in pathMap", () => {
    const coinA = "BTC";
    const coinB = "ETH";
    const pathMap: Map<string, CommonPoolData> = new Map();

    const result = hasPath(coinA, coinB, pathMap);

    expect(result).toBe(false);
  });

  it("should return false when pathMap is empty", () => {
    const coinA = "BTC";
    const coinB = "ETH";
    const pathMap: Map<string, CommonPoolData> = new Map();

    const result = hasPath(coinA, coinB, pathMap);

    expect(result).toBe(false);
  });
});
