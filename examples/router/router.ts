import { CoinManagerSingleton } from "../../src/managers/CoinManager";
import { RouteManager } from "../../src/managers/RouteManager";
import { Providers } from "../../src/managers/types";
import { AftermathSingleton } from "../../src/providers/aftermath/aftermath";
import { CetusSingleton } from "../../src/providers/cetus/cetus";
import { clmmMainnet } from "../../src/providers/cetus/config";
import { SHORT_SUI_COIN_TYPE } from "../../src/providers/common";
import { FlowxSingleton } from "../../src/providers/flowx/flowx";
import { TurbosSingleton } from "../../src/providers/turbos/turbos";
import { cacheOptions, keypair, provider, suiProviderUrl } from "../common";

const CETUS_COIN_TYPE = "0x06864a6f921804860930db6ddbe2e16acdf8504495ea7481637a1c8b9a8fe54b::cetus::CETUS";
const USDC_COIN_TYPE = "0x5d4b302506645c37ff133b98c4b50a5ae14841659738d6d733d59d0d217a93bf::coin::COIN";
const BUCK_COIN_TYPE = "0xce7ff77a83ea0cb6fd39bd8748e2ec89a3f41e8efdc3f4eb123e0ca37b184db2::buck::BUCK";

// yarn ts-node examples/sui/router/router.ts
export const router = async ({
  tokenFrom,
  tokenTo,
  amount,
  slippagePercentage,
  signerAddress,
}: {
  tokenFrom: string;
  tokenTo: string;
  amount: string;
  slippagePercentage: number;
  signerAddress: string;
}) => {
  console.time("All init");
  const turbos: TurbosSingleton = await TurbosSingleton.getInstance({
    suiProviderUrl,
    cacheOptions,
    lazyLoading: false,
  });
  const cetus: CetusSingleton = await CetusSingleton.getInstance({
    sdkOptions: clmmMainnet,
    cacheOptions,
    lazyLoading: false,
    suiProviderUrl,
  });
  const aftermath: AftermathSingleton = await AftermathSingleton.getInstance({ cacheOptions, lazyLoading: false });
  const flowx: FlowxSingleton = await FlowxSingleton.getInstance({ cacheOptions, lazyLoading: false });
  const providers: Providers = [turbos, cetus, aftermath, flowx];
  // const providers: Providers = [turbos];

  const coinManager: CoinManagerSingleton = CoinManagerSingleton.getInstance(providers);

  const routerManager = RouteManager.getInstance(providers, coinManager);
  console.timeEnd("All init");

  console.time("getBestRouteTransaction");
  const tx = await routerManager.getBestRouteTransaction({
    tokenFrom,
    tokenTo,
    amount,
    slippagePercentage,
    signerAddress,
  });
  console.timeEnd("getBestRouteTransaction");

  console.debug("tx: ", tx);

  const res = await provider.devInspectTransactionBlock({ sender: keypair.toSuiAddress(), transactionBlock: tx });

  console.debug("res: ", res);
};

router({
  tokenFrom: SHORT_SUI_COIN_TYPE,
  tokenTo: USDC_COIN_TYPE,
  amount: "0.1",
  slippagePercentage: 10,
  signerAddress: keypair.toSuiAddress(),
});
