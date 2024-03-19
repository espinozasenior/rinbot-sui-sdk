import "dotenv/config";

import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { normalizeMnemonic } from "../../src/managers/utils";
import { hexStringToUint8Array } from "../utils";

if (
  !process.env.SUI_DELEGATEE_WALLET_SEED_PHRASE?.length &&
  !process.env.SUI_DELEGATEE_WALLET_PRIVATE_KEY_ARRAY?.length
) {
  throw new Error("Empty mnemonic or private key");
}

export const delegateeMnemonic = normalizeMnemonic(process.env.SUI_DELEGATEE_WALLET_SEED_PHRASE ?? "");

export const delegateeKeypair = process.env.SUI_DELEGATEE_WALLET_PRIVATE_KEY_ARRAY
  ? Ed25519Keypair.fromSecretKey(hexStringToUint8Array(process.env.SUI_DELEGATEE_WALLET_PRIVATE_KEY_ARRAY))
  : Ed25519Keypair.deriveKeypair(delegateeMnemonic);

export const delegateeUser = delegateeKeypair.getPublicKey().toSuiAddress();
