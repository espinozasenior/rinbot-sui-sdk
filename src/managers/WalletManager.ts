/* eslint-disable require-jsdoc */
import { CoinBalance, CoinStruct, PaginatedCoins, SuiClient } from "@mysten/sui.js/client";
import { SUI_DECIMALS } from "@mysten/sui.js/utils";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import BigNumber from "bignumber.js";

import { SWAP_GAS_BUDGET } from "../providers/common";
import { CoinAssetData, CommonCoinData } from "./types";
import { CoinManagerSingleton } from "./CoinManager";
import { TransactionBlock } from "@mysten/sui.js/transactions";

export class WalletManagerSingleton {
  private provider: SuiClient;
  private coinManager: CoinManagerSingleton;
  private static _instance: WalletManagerSingleton;

  private constructor(provider: SuiClient, coinManager: CoinManagerSingleton) {
    this.provider = provider;
    this.coinManager = coinManager;
  }

  public static getInstance(provider?: SuiClient, coinManager?: CoinManagerSingleton): WalletManagerSingleton {
    if (!WalletManagerSingleton._instance) {
      if (provider === undefined) {
        throw new Error("[Wallet] Provider is required in arguments to create WalletManager instance.");
      } else if (coinManager === undefined) {
        throw new Error(
          "[Wallet] CoinManagerSingleton instance is required in arguments to create WalletManager instance.",
        );
      }

      const instance = new WalletManagerSingleton(provider, coinManager);
      WalletManagerSingleton._instance = instance;
    }

    return WalletManagerSingleton._instance;
  }
  /**
   * Generates a new Ed25519 key pair for a wallet, consisting of a public key and a private key.
   * @return {{ publicKey: string, privateKey: string }} An object with the public, private key (in hexadecimal format).
   */
  public static generateWallet() {
    const keypair = Ed25519Keypair.generate();
    const publicKey = keypair.getPublicKey().toSuiAddress();
    const privateKeyBase64 = keypair.export();
    const privateKeyHex = Buffer.from(privateKeyBase64.privateKey, "base64").toString("hex");

    return { publicKey, privateKey: privateKeyHex };
  }

  /**
   * Generates an Ed25519 key pair from a provided private key in hexadecimal format.
   * @param {string} privateKeyHex - The private key in hexadecimal format.
   * @return {Ed25519Keypair} An Ed25519 key pair.
   */
  public static getKeyPairFromPrivateKey(privateKeyHex: string): Ed25519Keypair {
    const keypair = Ed25519Keypair.fromSecretKey(Buffer.from(privateKeyHex, "hex"));

    return keypair;
  }

  /**
   * Retrieves a withdrawal transaction for SUI tokens. (Not yet implemented)
   *
   * @return {Promise<TransactionBlock>} A Promise that resolves to a TransactionBlock.
   * @throws {Error} If the implementation is not complete.
   */
  public static async getWithdrawSuiTransaction({
    address,
    amount,
  }: {
    address: string;
    amount: string;
  }): Promise<TransactionBlock> {
    throw new Error("This method is not implemented yet.");
    const tx = new TransactionBlock();

    return tx;
  }

  public async getSuiBalance(publicKey: string): Promise<string> {
    const balance: CoinBalance = await this.provider.getBalance({ owner: publicKey });
    const totalBalance = new BigNumber(balance.totalBalance);

    return totalBalance.dividedBy(10 ** SUI_DECIMALS).toString();
  }

  public async getAvailableSuiBalance(publicKey: string): Promise<string> {
    const currentSuiBalance: string = await this.getSuiBalance(publicKey);
    const suiBalanceWithDecimals = new BigNumber(currentSuiBalance).multipliedBy(10 ** SUI_DECIMALS);
    const availableSuiBalance = suiBalanceWithDecimals.minus(SWAP_GAS_BUDGET);

    if (availableSuiBalance.isLessThanOrEqualTo(0)) {
      return "0";
    }

    return availableSuiBalance.dividedBy(10 ** SUI_DECIMALS).toString();
  }

  public async getAllCoinAssets(publicKey: string): Promise<CoinAssetData[]> {
    const pageCapacity = 50;
    const allObjects: CoinStruct[] = [];
    let nextCursor: string | null | undefined = null;
    let assets: PaginatedCoins = await this.provider.getAllCoins({
      owner: publicKey,
      limit: pageCapacity,
      cursor: nextCursor,
    });

    // fetching and combining part
    while (assets.hasNextPage) {
      const coinObjects: CoinStruct[] = assets.data;
      allObjects.push(...coinObjects);

      nextCursor = assets.nextCursor;
      assets = await this.provider.getAllCoins({
        owner: publicKey,
        limit: pageCapacity,
        cursor: nextCursor,
      });
    }
    const coinObjects: CoinStruct[] = assets.data;
    allObjects.push(...coinObjects);

    // reducing part
    const coinAssets: CoinAssetData[] = await allObjects.reduce(
      async (allAssetsP: Promise<CoinAssetData[]>, coinData: CoinStruct) => {
        const allAssets: CoinAssetData[] = await allAssetsP;

        if (BigInt(coinData.balance) <= 0) {
          return allAssets;
        }

        const coinInAssets: CoinAssetData | undefined = allAssets.find(
          (asset: CoinAssetData) => asset.type === coinData.coinType,
        );

        if (coinInAssets) {
          const currentBalance = BigInt(coinInAssets.balance);
          const additionalBalance = BigInt(coinData.balance);
          const newBalance: bigint = currentBalance + additionalBalance;
          coinInAssets.balance = newBalance.toString();
        } else {
          const coin: CommonCoinData = this.coinManager.getCoinByType(coinData.coinType);
          const coinSymbol: string | undefined = coin?.symbol?.trim();

          allAssets.push({
            symbol: coinSymbol,
            balance: coinData.balance,
            type: coinData.coinType,
            decimals: coin.decimals,
          });
        }

        return allAssets;
      },
      Promise.resolve([]),
    );

    // converting balances with decimals
    for (const asset of coinAssets) {
      const coin: CommonCoinData = this.coinManager.getCoinByType(asset.type);
      const decimals: number = coin.decimals;
      const bigNumberBalance = new BigNumber(asset.balance);
      asset.balance = bigNumberBalance.dividedBy(10 ** decimals).toString();
    }

    return coinAssets;
  }
}
