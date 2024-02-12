import { convertSlippage } from "../../src";

describe("convertSlippage", () => {
  it("converts slippage from percentage to absolute value", () => {
    const slippagePercentage = 50;
    const absoluteSlippage = convertSlippage(slippagePercentage);
    expect(absoluteSlippage).toBe(0.5);
  });

  it("handles float values for slippage percentage", () => {
    const slippagePercentage = 33.33;
    const absoluteSlippage = convertSlippage(slippagePercentage);
    expect(absoluteSlippage).toBe(0.3333);
  });

  it("throws an error for slippage percentage less than 0", () => {
    const slippagePercentage = -10;
    expect(() => convertSlippage(slippagePercentage)).toThrow(
      "Slippage percentage must be between 0 (inclusive) and 100 (exclusive).",
    );
  });

  it("throws an error for slippage percentage greater than or equal to 100", () => {
    const slippagePercentage = 110;
    expect(() => convertSlippage(slippagePercentage)).toThrow(
      "Slippage percentage must be between 0 (inclusive) and 100 (exclusive).",
    );
  });

  it("throws an error if slippage is not a number", () => {
    const slippagePercentage = "not a number";
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore: Testing invalid input for demonstration purposes
    expect(() => convertSlippage(slippagePercentage)).toThrow("Slippage percentage must be a valid number.");
  });
});
