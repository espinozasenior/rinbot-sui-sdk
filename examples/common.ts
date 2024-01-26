import "dotenv/config";

import { SuiClient, SuiTransactionBlockResponse } from "@mysten/sui.js/client";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import { hexStringToUint8Array, normalizeMnemonic } from "./utils";
import { SWAP_GAS_BUDGET } from "../src/providers/common";
import { CacheOptions } from "../src/providers/types";

if (!process.env.SUI_WALLET_SEED_PHRASE?.length && !process.env.SUI_WALLET_PRIVATE_KEY_ARRAY?.length) {
  throw new Error("Empty mnemonic or private key");
}

export const mnemonic = normalizeMnemonic(process.env.SUI_WALLET_SEED_PHRASE ?? "");

export const keypair = process.env.SUI_WALLET_PRIVATE_KEY_ARRAY
  ? Ed25519Keypair.fromSecretKey(hexStringToUint8Array(process.env.SUI_WALLET_PRIVATE_KEY_ARRAY))
  : Ed25519Keypair.deriveKeypair(mnemonic);

export const suiProviderUrl = "https://sui-rpc.publicnode.com";
export const provider = new SuiClient({ url: suiProviderUrl });

export const user = keypair.getPublicKey().toSuiAddress();

export const signAndExecuteTransaction = async (
  transactionBlock: TransactionBlock,
  signer: Ed25519Keypair,
): Promise<SuiTransactionBlockResponse> => {
  transactionBlock.setGasBudget(SWAP_GAS_BUDGET);

  const transactionResponse: SuiTransactionBlockResponse = await provider.signAndExecuteTransactionBlock({
    transactionBlock,
    signer,
  });

  return transactionResponse;
};

export const cacheOptions: CacheOptions = {
  updateIntervalInMs: 60_000 * 30, // 30 min
};