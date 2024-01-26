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

export type CoinAssetData = CommonCoinData & { balance: string };

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
