import { keypair } from "../common";
import { RefundManagerSingleton } from "../../src/managers/refund/RefundManager";

// yarn ts-node examples/refund/sign-and-verify-message.ts
const signAndVerify = async () => {
  const signDataValid = {
    poolObjectId: "0x2a6f41cf99c51bcee58cd5154e49b7a48a52f715aa34b6606f2ca270d1fbe8a3",
    affectedAddress: "0x3131b76cbf2283bc232fc48b2ddcac0a43d3ee644ce1291bcb01ff8e2af490d5",
    newAddress: "0xeb9e6a8404e4d6972a885df1b8ea51ae582f745c2ff9ba539505e94bda4689af",
  };

  const signDataInvalid = {
    poolObjectId: "0x2a6f41cf99c51bcee58cd5154e49b7a48a52f715aa34b6606f2ca270d1fbe8a3",
    affectedAddress: "0x3131b76cbf2283bc232fc48b2ddcac0a43d3ee644ce1291bcb01ff8e2af490d5",
    newAddress: "0x7434c5da3faa3ba417228c27fbfee2cae5b3927e2676389a265fad7cd7686a73",
  };

  const message = RefundManagerSingleton.getMessageForBoostedRefund(signDataValid);

  // console.debug("message.buffer: ", message.buffer);
  console.debug("message.hex: ", message.hex);

  const signedMessage = await RefundManagerSingleton.signMessageSignatureForBoostedRefund({
    keypair: keypair,
    ...signDataValid,
  });

  console.debug("signedMessage.bytes: ", Buffer.from(signedMessage.bytes, "base64").toString("hex"));
  // console.debug("signedMessage.signature: ", signedMessage.signature);

  const isSignedMessageIsValid = await RefundManagerSingleton.verifySignedMessageForBoostedRefund({
    ...signDataValid,
    signedMessageSignature: signedMessage.signature,
  });

  console.debug("isSignedMessageIsValid: ", isSignedMessageIsValid);
};

signAndVerify();
