import { TransactionBlock } from "@mysten/sui.js/transactions";
import { CoinManagerSingleton } from "./CoinManager";
import { IRouteManager, Providers } from "./types";
import { getFiltredProviders, getRouterMaps, tokenFromIsTokenTo } from "./utils";
import { SWAP_GAS_BUDGET } from "../providers/common";

/**
 * @class RouteManager
 * @implements {IRouteManager}
 * @description Manages routes for token swapping.
 */
export class RouteManager implements IRouteManager {
  private static _instance: RouteManager;
  private poolProviders: Providers;
  private coinManager: CoinManagerSingleton;

  /**
   * @public
   * @method getInstance
   * @description Gets the singleton instance of RouteManager.
   * @param {Providers} [providers] - The pool providers.
   * @param {CoinManagerSingleton} [coinManager] - The coin manager instance.
   * @return {RouteManager} The singleton instance of RouteManager.
   * @throws {Error} Throws an error if providers or coinManager are not provided.
   */
  public static getInstance(providers?: Providers, coinManager?: CoinManagerSingleton): RouteManager {
    if (!RouteManager._instance) {
      if (providers === undefined) {
        throw new Error("[RouteManager] Providers are required in arguments to create RouteManager instance.");
      }

      if (coinManager === undefined) {
        throw new Error("[RouteManager] CoinManager is required in arguments to create RouteManager instance.");
      }

      const instance = new RouteManager(providers, coinManager);
      RouteManager._instance = instance;
    }

    return RouteManager._instance;
  }

  /**
   * @constructor
   * @param {Providers} providers - The pool providers.
   * @param {CoinManagerSingleton} coinManager - The coin manager instance.
   */
  private constructor(providers: Providers, coinManager: CoinManagerSingleton) {
    this.poolProviders = providers;
    this.coinManager = coinManager;
  }

  /**
   * @public
   * @method getBestRouteTransaction
   * @description Gets the best route transaction for token swapping.
   * @param {Object} options - The options for getting the best route transaction.
   * @param {string} options.tokenFrom - The token to swap from.
   * @param {string} options.tokenTo - The token to swap to.
   * @param {string} options.amount - The amount to swap.
   * @param {number} options.slippagePercentage - The slippage percentage.
   * @param {string} options.signerAddress - The address of the signer.
   * @return {Promise<TransactionBlock>} A promise that resolves to the transaction block for the swap.
   * @throws {Error} Throws an error if there is no path for the specified tokens.
   */
  public async getBestRouteTransaction({
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
  }): Promise<TransactionBlock> {
    if (tokenFromIsTokenTo(tokenFrom, tokenTo)) {
      throw new Error("[RouteManager] getBestRouteTransaction: tokenFrom is equal to tokenTo.");
    }

    const amountAsNumber = Number(amount);
    if (isNaN(amountAsNumber)) {
      throw new Error(`[RouteManager] getBestRouteTransaction: amount ${amount} is invalid.`);
    }

    // Validate coins existance in provider
    const coinsByProviderMap = this.coinManager.getCoinsByProviderMap();

    const filtredProviders = getFiltredProviders({
      tokenFrom,
      tokenTo,
      coinsByProviderMap,
      poolProviders: this.poolProviders,
    });
    console.log(
      "filtredProviders:",
      filtredProviders.map((provider) => provider.providerName),
    );

    const { providersByOutputAmountsMap, routesByProviderMap } = await getRouterMaps({
      filtredProviders,
      tokenFrom,
      tokenTo,
      amount,
      signerAddress,
      slippagePercentage,
    });

    const outputAmounts: bigint[] = Array.from(providersByOutputAmountsMap.keys());
    const eachOutputAmountIs0: boolean = outputAmounts.every((amount) => amount === BigInt(0));

    if (eachOutputAmountIs0) {
      throw new Error(
        `[RouteManager] There is no paths for coins "${tokenFrom}" and "${tokenTo}" (all outputAmounts = 0)`,
      );
    }

    const maxOutputAmount: bigint = outputAmounts.reduce((max, currentValue) => {
      return currentValue > max ? currentValue : max;
    });
    const providerWithMaxOutputAmount: string | undefined = providersByOutputAmountsMap.get(maxOutputAmount);

    // log info >>>
    let stringResult = "{ ";
    providersByOutputAmountsMap.forEach((value, key) => (stringResult += `${key}n => ${value}, `));
    stringResult += "}";
    console.log(
      "providersByOutputAmountsMap:",
      stringResult + "; maxOutputAmount:",
      maxOutputAmount + "n; providerWithMaxOutputAmount:",
      providerWithMaxOutputAmount,
    );
    // <<< log info

    if (providerWithMaxOutputAmount === undefined) {
      throw new Error(`[Route] Cannot find provider with output amount "${maxOutputAmount}".`);
    }

    const routeData = routesByProviderMap.get(providerWithMaxOutputAmount);

    if (routeData === undefined) {
      throw new Error(`[Route] Cannot find route data for provider "${providerWithMaxOutputAmount}".`);
    }

    const route = routeData.route;

    if (route === null) {
      throw new Error(`[Route] Cannot find route for provider "${providerWithMaxOutputAmount}".`);
    }

    const maxOutputProvider = routeData.provider;

    const transaction = await maxOutputProvider.getSwapTransaction({
      route: route,
      publicKey: signerAddress,
      slippagePercentage,
    });

    // This is the limitation because some of the providers
    // doesn't set/calculate gas budger for their transactions properly.
    // We can do the simulation on our side, but it will slowdown the swap
    transaction.setGasBudget(SWAP_GAS_BUDGET);

    return transaction;
  }
}
