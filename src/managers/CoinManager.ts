import { LONG_SUI_COIN_TYPE, SHORT_SUI_COIN_TYPE } from "../providers/common";
import { CommonCoinData, ICoinManager, Providers, UpdatedCoinsCache } from "./types";

/**
 * @class CoinManagerSingleton
 * @implements {ICoinManager}
 * @description Singleton class for managing coins.
 */
export class CoinManagerSingleton implements ICoinManager {
  private static _instance: CoinManagerSingleton;
  private allCoinsCache: Map<string, CommonCoinData> = new Map();
  private coinsByProviderNameCache: Map<string, Map<string, CommonCoinData>> = new Map();

  /**
   * @public
   * @method getInstance
   * @description Gets the singleton instance of CoinManagerSingleton.
   * @param {Providers} [providers] - The list of providers.
   * @return {CoinManagerSingleton} The singleton instance of CoinManagerSingleton.
   */
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

  /**
   * @private
   * @method init
   * @description Initializes the CoinManagerSingleton instance.
   * @param {Providers} providers - The list of providers.
   * @return {void}
   */
  private init(providers: Providers) {
    providers.forEach((provider) => {
      provider.on("cachesUpdate", this.handleCacheUpdate.bind(this));
      provider.flushBuffer();
    });
  }

  /**
   * @private
   * @method handleCacheUpdate
   * @description Handles cache updates.
   * @param {UpdatedCoinsCache} updateData - The update data.
   * @return {void}
   */
  private handleCacheUpdate(updateData: UpdatedCoinsCache): void {
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

  /**
   * @public
   * @method getCoinByType
   * @deprecated
   * @description Gets coin data by coin type.
   * @param {string} coinType - The coin type.
   * @return {CommonCoinData} The coin data.
   * @throws {Error} Throws an error if the coin is not found.
   */
  public getCoinByType(coinType: string): CommonCoinData {
    const coinData = this.allCoinsCache.get(coinType);

    if (coinData === undefined) {
      throw new Error(`[CoinManager] Cannot find coin by type "${coinType}".`);
    }

    return coinData;
  }

  /**
   * @public
   * @method getCoinByType2
   * @description Retrieves coin data by its type from the cache.
   * @param {string} coinType - The type of the coin to retrieve.
   * @return {CommonCoinData | null} The coin data if found, otherwise null.
   */
  public getCoinByType2(coinType: string): CommonCoinData | null {
    const coinData = this.allCoinsCache.get(coinType);

    if (coinData === undefined) {
      return null;
    }

    return coinData;
  }

  /**
   * @public
   * @method getCoinsByProviderMap
   * @description Gets coins by provider map.
   * @return {Map<string, Map<string, CommonCoinData>>} Coins by provider map.
   */
  public getCoinsByProviderMap() {
    return this.coinsByProviderNameCache;
  }

  /**
   * @public
   * @method getAllCoins
   * @description Gets all coins.
   * @return {Map<string, CommonCoinData>} All coins.
   */
  public getAllCoins() {
    return this.allCoinsCache;
  }
}
