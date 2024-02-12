import { tryCatchWrapper, AnyFunction, RouteParams } from "../../src/providers/utils/tryCatchWrapper";

describe("tryCatchWrapper", () => {
  it("should return the result of the callback if it executes successfully", async () => {
    const callback: AnyFunction = async (params: RouteParams) => {
      return { result: "success", params };
    };
    const params: RouteParams = {
      coinTypeFrom: "BTC",
      coinTypeTo: "ETH",
      inputAmount: "1",
      slippagePercentage: 0.1,
      publicKey: "publicKey",
    };

    const result = await tryCatchWrapper(callback, params);

    expect(result).toEqual({ result: "success", params });
  });

  it("should return null if an error occurs and it is not 'From/To coin is undefined'", async () => {
    const callback: AnyFunction = async () => {
      throw new Error("Unexpected error");
    };

    const result = await tryCatchWrapper(callback);

    expect(result).toBeNull();
  });

  it("should return null if the error message includes 'From/To coin is undefined'", async () => {
    const error = new Error("From/To coin is undefined");
    const callback: AnyFunction = async () => {
      throw error;
    };

    const result = await tryCatchWrapper(callback);

    expect(result).toBeNull();
  });

  it("should log the error if it is not 'From/To coin is undefined'", async () => {
    const error = new Error("Unexpected error");
    const spyConsoleError = jest.spyOn(console, "error");
    const callback: AnyFunction = async () => {
      throw error;
    };

    await tryCatchWrapper(callback);

    expect(spyConsoleError).toHaveBeenCalledWith("Error:", error);
  });
});
