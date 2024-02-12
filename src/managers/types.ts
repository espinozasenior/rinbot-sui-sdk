import { TransactionBlock } from "@mysten/sui.js/transactions";
import { AftermathSingleton } from "../providers/aftermath/aftermath";
import { CetusSingleton } from "../providers/cetus/cetus";
import { FlowxSingleton } from "../providers/flowx/flowx";
import { TurbosSingleton } from "../providers/turbos/turbos";
import { tryCatchWrapper } from "../providers/utils/tryCatchWrapper";

export type CommonCoinData = {
  symbol?: string;
  type: string;
  decimals: number;
};

export type CoinAssetData = Omit<CommonCoinData, "decimals"> & {
  balance: string;
  noDecimals: boolean;
  decimals: number | null;
};

export type UpdatedCoinsCache = { provider: string; data: CommonCoinData[] };

export type Provider = TurbosSingleton | CetusSingleton | AftermathSingleton | FlowxSingleton;

export type Providers = Provider[];

export type ProvidersToRouteDataMap = Map<
  string,
  {
    provider: Provider;
    route: Awaited<ReturnType<typeof tryCatchWrapper>>;
  }
>;

export type UpdateCoinsCacheHandler = (arg: UpdatedCoinsCache) => void;

export interface ICoinManager {
  getCoinByType(coinType: string): CommonCoinData;
  getCoinByType2(coinType: string): CommonCoinData | null;
  getCoinsByProviderMap(): Map<string, Map<string, CommonCoinData>>;
  getAllCoins(): Map<string, CommonCoinData>;
}

export interface IWalletManager {
  getAvailableWithdrawSuiAmount(publicKey: string): Promise<{ availableAmount: string; totalGasFee: string }>;
  getSuiBalance(publicKey: string): Promise<string>;
  getAvailableSuiBalance(publicKey: string): Promise<string>;
  getAllCoinAssets(publicKey: string): Promise<CoinAssetData[]>;
}

export interface IRouteManager {
  getBestRouteTransaction({
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
  }): Promise<TransactionBlock>;
}
