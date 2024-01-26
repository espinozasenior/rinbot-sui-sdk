/* eslint-disable require-jsdoc */
import { CoinMetadaWithInfo } from "aftermath-ts-sdk";
import { CoinNodeWithSymbol } from "../cetus/types";
import { CoinNode } from "../flowx/types";
import { CoinData } from "../../providers/turbos/types";
import { LONG_SUI_COIN_TYPE, SHORT_SUI_COIN_TYPE } from "../common";

export function getCoinInfoFromCache<T extends CoinMetadaWithInfo | CoinNodeWithSymbol | CoinNode | CoinData>(
  coinType: string,
  coinsCache: Map<string, T>,
): T | undefined {
  const coinIsSui: boolean = coinType === SHORT_SUI_COIN_TYPE || coinType === LONG_SUI_COIN_TYPE;
  const coinTypeInfo = coinIsSui
    ? coinsCache.get(LONG_SUI_COIN_TYPE) || coinsCache.get(SHORT_SUI_COIN_TYPE)
    : coinsCache.get(coinType);

  return coinTypeInfo;
}
