import { WalletManagerSingleton } from "../../src/managers/WalletManager";
import { RefundManagerSingleton } from "../../src/managers/refund/RefundManager";
import { provider, suiProviderUrl, user } from "../common";

// yarn ts-node examples/refund/return-boosted-claim-cap.ts
(async () => {
  if (!process.env.SUI_WALLET_PRIVATE_KEY_BECH32?.length) {
    throw new Error("Empty SUI_WALLET_PRIVATE_KEY_BECH32");
  }

  const privateKeyStringBech32 = process.env.SUI_WALLET_PRIVATE_KEY_BECH32;

  const keypair = WalletManagerSingleton.getKeyPairFromPrivateKeyBech32(privateKeyStringBech32);

  const refundManager = RefundManagerSingleton.getInstance(suiProviderUrl);

  const userBech32 = keypair.toSuiAddress();

  console.debug("userBech32: ", userBech32);

  const boostedClaimCapData = await refundManager.getBoostedClaimCap({
    ownerAddress: keypair.toSuiAddress(),
    // Wrong address
    newAddress: "0x6104acdbd394d08ba97376747f286cd90e5ff2a9d445f1bf64405802bd711d89",
    // Right address
    // newAddress: "0x6af1c361df934735903316519e1642f61daee2fcf32c84e85359a982f3d2159d",
  });

  console.debug("boostedClaimCapData: ", boostedClaimCapData);

  if (!boostedClaimCapData.boostedClaimCapNotAssociatedWithNewAddressObjectId) {
    throw new Error("No boostedClaimCapNotAssociatedWithNewAddressObjectId present");
  }

  const burnTxData = RefundManagerSingleton.getReturnBoosterCapTransaction({
    boostedClaimCap: boostedClaimCapData.boostedClaimCapNotAssociatedWithNewAddressObjectId,
    poolObjectId: RefundManagerSingleton.REFUND_POOL_OBJECT_ID,
  });

  const res = await provider.devInspectTransactionBlock({
    sender: userBech32,
    transactionBlock: burnTxData.tx,
  });

  console.debug("res: ", res);

  // const res = await signAndExecuteTransaction(txData.tx, delegateeKeypair);
})();
