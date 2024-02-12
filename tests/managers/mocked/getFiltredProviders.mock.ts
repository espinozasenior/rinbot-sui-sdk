import { CommonCoinData } from "../../../src/managers/types";
import { LONG_SUI_COIN_TYPE, SHORT_SUI_COIN_TYPE } from "../../../src/providers/common";
import { CommonPoolData } from "../../../src/providers/types";
import { hasPath } from "../../../src/providers/utils/hasPath";

type MockedPoolProvider = {
  providerName: string;
  isSmartRoutingAvailable: boolean;
  getPaths: () => Map<string, CommonPoolData>;
};

export const getFiltredProviders = ({
  poolProviders,
  coinsByProviderMap,
  tokenFrom,
  tokenTo,
}: {
  poolProviders: MockedPoolProvider[];
  coinsByProviderMap: Map<string, Map<string, CommonCoinData>>;
  tokenFrom: string;
  tokenTo: string;
}) => {
  const tokenFromIsSui: boolean = tokenFrom === SHORT_SUI_COIN_TYPE || tokenFrom === LONG_SUI_COIN_TYPE;
  const tokenToIsSui: boolean = tokenTo === SHORT_SUI_COIN_TYPE || tokenTo === LONG_SUI_COIN_TYPE;

  const filtredProviders = poolProviders.filter((poolProvider) => {
    const providerCoins = coinsByProviderMap.get(poolProvider.providerName);

    if (!providerCoins) {
      console.warn(`[getFiltredProviders] No coins found for such provider ${poolProvider.providerName}`);
      return false;
    }

    // Check that provider has one of the variants of SUI token
    const providerCoinsHaveSui = providerCoins.has(SHORT_SUI_COIN_TYPE) || providerCoins.has(LONG_SUI_COIN_TYPE);
    // Check if input tokenFrom/tokenTo is SUI
    const tokenFromOrTokenToIsSui = tokenFromIsSui || tokenToIsSui;
    // If SUI token is tokenTo, we return tokenFrom, and vice versa
    const notSuiTokenInInputTokens: string = tokenFromIsSui ? tokenTo : tokenFrom;

    if (tokenFromOrTokenToIsSui) {
      // Provider tokens doesn't have SUI and doesn't have the second token in pair (tokenFrom/tokenTo)
      const providerDoesntHaveAnyToken = !providerCoinsHaveSui || !providerCoins.has(notSuiTokenInInputTokens);

      if (providerDoesntHaveAnyToken) {
        return false;
      }
    } else {
      // If no SUI token present in tokenFrom/tokenTo, just check that provider has both tokens
      if (!providerCoins.has(tokenFrom) || !providerCoins.has(tokenTo)) {
        return false;
      }
    }

    // If provider doesn't support smart-routing, than we have to check that provider has direct path with both tokens
    if (!poolProvider.isSmartRoutingAvailable) {
      const paths: Map<string, CommonPoolData> = poolProvider.getPaths();

      if (tokenFromOrTokenToIsSui) {
        const providerHasNoPathWithShortSui = !hasPath(SHORT_SUI_COIN_TYPE, notSuiTokenInInputTokens, paths);
        const providerHasNoPathWithLongSui = !hasPath(LONG_SUI_COIN_TYPE, notSuiTokenInInputTokens, paths);

        if (providerHasNoPathWithShortSui && providerHasNoPathWithLongSui) {
          return false;
        }
      } else {
        const providerHasNoPathWithRegularCoins = !hasPath(tokenFrom, tokenTo, paths);

        if (providerHasNoPathWithRegularCoins) {
          return false;
        }
      }
    }

    return true;
  });

  return filtredProviders;
};
