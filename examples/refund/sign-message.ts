import { verifyPersonalMessage } from "@mysten/sui.js/verify";
import { keypair } from "../common";

// yarn ts-node examples/refund/sign-message.ts
const signMessage = async () => {
  const message = new TextEncoder().encode("hello world");
  console.debug("message: ", message);
  //   const signedMessage = await keypair.signWithIntent(message, 3);

  const signedMessage = await keypair.signPersonalMessage(message);
  console.debug("signedMessage.bytes: ", signedMessage.bytes);

  const publicKey = await verifyPersonalMessage(message, signedMessage.signature);

  if (publicKey.toSuiAddress() !== keypair.getPublicKey().toSuiAddress()) {
    throw new Error("Signature was valid, but was signed by a different key pair");
  }

  console.debug("all init: ", publicKey.toSuiAddress());
};

signMessage();
