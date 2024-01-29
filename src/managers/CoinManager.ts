/* eslint-disable require-jsdoc */
import { LONG_SUI_COIN_TYPE, SHORT_SUI_COIN_TYPE } from "../providers/common";
import { CommonCoinData, Providers, UpdatedCoinsCache } from "./types";

export class CoinManagerSingleton {
  private static _instance: CoinManagerSingleton;
  private allCoinsCache: Map<string, CommonCoinData> = new Map();
  private coinsByProviderNameCache: Map<string, Map<string, CommonCoinData>> = new Map();

  public static getInstance(providers?: Providers): CoinManagerSingleton {
    if (!CoinManagerSingleton._instance) {
      if (providers === undefined) {
        throw new Error("[Coin] Providers are required in arguments to create CoinManager instance.");
      }

      const instance = new CoinManagerSingleton();
      instance.init(providers);
      CoinManagerSingleton._instance = instance;
    }

    return CoinManagerSingleton._instance;
  }

  private init(providers: Providers) {
    providers.forEach((provider) => {
      provider.on("cachesUpdate", this.handleCacheUpdate.bind(this));
      provider.flushBuffer();
    });
  }

  public handleCacheUpdate(updateData: UpdatedCoinsCache): void {
    console.log("[COIN MANAGER] Update data received:", updateData.provider);
    const { provider, data: coins } = updateData;

    const coinsByProviderMap: Map<string, CommonCoinData> = new Map();

    coins.forEach((coin: CommonCoinData) => {
      const coinType = coin.type;

      // set coins to allCoinsMap
      const coinInAllCoinsMap = this.allCoinsCache.get(coinType);
      if (coinInAllCoinsMap) {
        // TODO: Refactor this logic
        if (coinType === LONG_SUI_COIN_TYPE) {
          this.allCoinsCache.set(SHORT_SUI_COIN_TYPE, coin);
        } else if (coinType === SHORT_SUI_COIN_TYPE) {
          this.allCoinsCache.set(LONG_SUI_COIN_TYPE, coin);
        }

        const symbolExists = !!coinInAllCoinsMap.symbol;

        if (!symbolExists) {
          this.allCoinsCache.set(coinType, coin);
        }
      } else {
        // TODO: Refactor this logic
        if (coinType === LONG_SUI_COIN_TYPE) {
          this.allCoinsCache.set(SHORT_SUI_COIN_TYPE, coin);
        } else if (coinType === SHORT_SUI_COIN_TYPE) {
          this.allCoinsCache.set(LONG_SUI_COIN_TYPE, coin);
        }

        this.allCoinsCache.set(coinType, coin);
      }

      // set coins to coinsByProviderMap
      const coinInCoinsByProviderMap = coinsByProviderMap.get(coinType);
      if (!coinInCoinsByProviderMap) {
        coinsByProviderMap.set(coinType, coin);
      }
    });

    this.coinsByProviderNameCache.set(provider, coinsByProviderMap);
  }

  public getCoinByType(coinType: string): CommonCoinData {
    const coinData = this.allCoinsCache.get(coinType);

    if (coinData === undefined) {
      throw new Error(`[CoinManager] Cannot find coin by type "${coinType}".`);
    }

    return coinData;
  }

  public getCoinsByProviderMap() {
    return this.coinsByProviderNameCache;
  }

  public getAllCoins() {
    return this.allCoinsCache;
  }
}
