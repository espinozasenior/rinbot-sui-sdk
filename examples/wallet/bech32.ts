import "dotenv/config";
import { WalletManagerSingleton } from "../../src";

// yarn ts-node examples/wallet/bech32.ts
(() => {
  if (!process.env.SUI_WALLET_PRIVATE_KEY_BECH32?.length) {
    throw new Error("Empty SUI_WALLET_PRIVATE_KEY_BECH32");
  }

  const privateKeyStringBech32 = process.env.SUI_WALLET_PRIVATE_KEY_BECH32;

  const keypair = WalletManagerSingleton.getKeyPairFromPrivateKeyBech32(privateKeyStringBech32);
  console.debug("keypair pubkey: ", keypair.toSuiAddress());
  console.debug("keypair privateKey: ", keypair.export());

  const privateKeyFromKeypair = WalletManagerSingleton.getPrivateKeyFromKeyPair(keypair);
  console.debug("privateKeyFromKeypair: ", privateKeyFromKeypair);

  const keypairFromPrivateKey = WalletManagerSingleton.getKeyPairFromPrivateKeyHex(privateKeyFromKeypair);
  console.debug("keypairFromPrivateKey pubkey: ", keypairFromPrivateKey.toSuiAddress());
  console.debug("keypairFromPrivateKey privateKey: ", keypairFromPrivateKey.export());
})();
