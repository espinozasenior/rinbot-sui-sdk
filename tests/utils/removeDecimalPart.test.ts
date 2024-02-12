import BigNumber from "bignumber.js";
import { removeDecimalPart } from "../../src/providers/utils/removeDecimalPart";

describe("removeDecimalPart", () => {
  it("removes decimal part and logs a warning for input with a decimal part", () => {
    const input1 = new BigNumber("123.45");
    const spyWarn1 = jest.spyOn(console, "warn");
    const result1 = removeDecimalPart(input1);

    expect(result1.toString()).toEqual("123");
    expect(spyWarn1).toHaveBeenCalledWith("Decimal part (45) of input (123.45) has been stripped.");
    spyWarn1.mockRestore();
  });

  it("does not remove anything for input without a decimal part", () => {
    const input2 = new BigNumber("678");
    const spyWarn2 = jest.spyOn(console, "warn");
    const result2 = removeDecimalPart(input2);

    expect(result2.toString()).toEqual("678");
    expect(spyWarn2).not.toHaveBeenCalled();
    spyWarn2.mockRestore();
  });

  it("handles input with multiple decimal points", () => {
    const input3 = new BigNumber("456.789.123");
    const spyWarn3 = jest.spyOn(console, "warn");

    try {
      removeDecimalPart(input3);
      // Fail the test if it reaches here, as it should throw an error
      expect(true).toBe(false);
    } catch (error) {
      // Use type assertion to handle 'unknown' type
      expect((error as Error).message).toEqual("Invalid numeric format: Resulting BigNumber is NaN.");
    }

    expect(spyWarn3).not.toHaveBeenCalled();
    spyWarn3.mockRestore();
  });

  it("removes decimal part for a number trailing zeros", () => {
    const input4 = new BigNumber("789.000");
    const spyWarn4 = jest.spyOn(console, "warn");
    const result4 = removeDecimalPart(input4);

    expect(result4.toString()).toEqual("789");
    expect(spyWarn4).not.toHaveBeenCalledWith("Decimal part (000) of input (789.000) has been stripped.");
    spyWarn4.mockRestore();
  });

  it("handles input with only a decimal point", () => {
    const input5 = new BigNumber(".123");
    const spyWarn5 = jest.spyOn(console, "warn");
    const result5 = removeDecimalPart(input5);

    expect(result5.toString()).toEqual("0");
    expect(spyWarn5).toHaveBeenCalledWith("Decimal part (123) of input (0.123) has been stripped.");
    spyWarn5.mockRestore();
  });

  it("handles input with a negative number and decimal part", () => {
    const input6 = new BigNumber("-456.789");
    const spyWarn6 = jest.spyOn(console, "warn");
    const result6 = removeDecimalPart(input6);

    expect(result6.toString()).toEqual("-456");
    expect(spyWarn6).toHaveBeenCalledWith("Decimal part (789) of input (-456.789) has been stripped.");
    spyWarn6.mockRestore();
  });

  it("handles input with scientific notation and decimal part", () => {
    const input7 = new BigNumber("1.23e+2");
    const spyWarn7 = jest.spyOn(console, "warn");
    const result7 = removeDecimalPart(input7);

    expect(result7.toString()).toEqual("123");
    expect(spyWarn7).not.toHaveBeenCalledWith("Decimal part (23e+2) of input (1.23e+2) has been stripped.");
    spyWarn7.mockRestore();
  });
});
