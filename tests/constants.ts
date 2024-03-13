import { SuiClient } from "@mysten/sui.js/client";
import { CacheOptions } from "../src/providers/types";

export const SUI_COIN_TYPE = "0x0000000000000000000000000000000000000000000000000000000000000002::sui::SUI";
export const USDC_COIN_TYPE = "0x5d4b302506645c37ff133b98c4b50a5ae14841659738d6d733d59d0d217a93bf::coin::COIN";
export const suiProviderUrl = "https://sui-rpc.publicnode.com";
export const cacheOptions: CacheOptions = {
  updateIntervalInMs: 60_000 * 30, // 30 min
};
// Public key for tests, nothing special
export const publicKey = "0xcd1748a65ed64fe676bf336b9b542128fd3e726370e72e62c8f8abc49c61644c";
export const provider = new SuiClient({ url: suiProviderUrl });
