import { CoinManagerSingleton } from "../../src/managers/CoinManager";
import { AftermathSingleton } from "../../src/providers/aftermath/aftermath";
import { CetusSingleton } from "../../src/providers/cetus/cetus";
import { clmmMainnet } from "../../src/providers/cetus/config";
import { TurbosSingleton } from "../../src/providers/turbos/turbos";
import { CoinAssetData, Providers } from "../../src/managers/types";
import { WalletManagerSingleton } from "../../src/managers/WalletManager";
import { cacheOptions, suiProviderUrl, provider, user } from "../common";
import { FlowxSingleton } from "../../src/providers/flowx/flowx";

// yarn ts-node examples/sui/wallet/wallet.ts
(async () => {
  const turbos: TurbosSingleton = await TurbosSingleton.getInstance({ suiProviderUrl, cacheOptions });
  const cetus: CetusSingleton = await CetusSingleton.getInstance({
    sdkOptions: clmmMainnet,
    cacheOptions,
    suiProviderUrl,
  });
  const aftermath: AftermathSingleton = await AftermathSingleton.getInstance({ cacheOptions });
  const flowx: FlowxSingleton = await FlowxSingleton.getInstance({ cacheOptions });
  const providers: Providers = [turbos, cetus, aftermath, flowx];
  const coinManager: CoinManagerSingleton = CoinManagerSingleton.getInstance(providers);
  const walletManager: WalletManagerSingleton = WalletManagerSingleton.getInstance(provider, coinManager);

  const mySuiBalance: string = await walletManager.getSuiBalance(user);
  console.log("mySuiBalance:", mySuiBalance);

  const allAssets: CoinAssetData[] = await walletManager.getAllCoinAssets(user);
  console.log("allAssets:", allAssets);

  const availableSuiBalance: string = await walletManager.getAvailableSuiBalance(user);
  console.log("availableSuiBalance:", availableSuiBalance);
})();
