import { RouterCompleteTradeRoute } from "aftermath-ts-sdk";
import { ProviderOptions } from "../types";

export type SmartOutputAmountData = {
  outputAmount: bigint;
  route: RouterCompleteTradeRoute;
};

export type AftermathOptions = ProviderOptions;
