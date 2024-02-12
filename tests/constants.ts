import { SuiClient } from "@mysten/sui.js/client";
import { CacheOptions } from "../src/providers/types";

export const SUI_COIN_TYPE = "0x0000000000000000000000000000000000000000000000000000000000000002::sui::SUI";
export const USDC_COIN_TYPE = "0x5d4b302506645c37ff133b98c4b50a5ae14841659738d6d733d59d0d217a93bf::coin::COIN";
export const suiProviderUrl = "https://sui-rpc.publicnode.com";
export const cacheOptions: CacheOptions = {
  updateIntervalInMs: 60_000 * 30, // 30 min
};
// Public key for tests, nothing special
export const publicKey = "0x046f718ca3fdd519f6d21ad5b18a7fafaafeb85fd311ef8b99db22df7ec15d5d";
export const provider = new SuiClient({ url: suiProviderUrl });
