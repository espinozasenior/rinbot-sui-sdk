import { InterestPool } from "@interest-protocol/clamm-sdk";
import { ProviderOptions } from "../types";

export type InterestRouteData = {
  pool: InterestPool;
  minAmount: bigint;
  inputCoinType: string;
  outputCoinType: string;
};

export type InterestOptions = ProviderOptions & { suiProviderUrl: string };
