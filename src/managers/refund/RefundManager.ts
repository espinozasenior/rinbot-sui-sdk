/* eslint-disable require-jsdoc */
import { SuiClient } from "@mysten/sui.js/client";
import { ObjectArg } from "../../transactions/types";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import { obj } from "../../transactions/utils";
import { Keypair, SignatureWithBytes } from "@mysten/sui.js/cryptography";
import { verifyPersonalMessage } from "@mysten/sui.js/verify";

/**
 * @class RefundManagerSingleton
 * @description
 * This class encapsulates the business logic for a Refund smart contract.
 */
export class RefundManagerSingleton {
  public static REFUND_PACKAGE_ADDRESS = "";
  public static REFUND_PACKAGE_ADDRESS_READ = "";
  public static REFUND_POOL_OBJECT_ID = "";
  public static REFUND_POOL_PUBLISHER_OBJECT_ID = "";

  public static REFUND_GAS_BUGET = 50_000_000;

  private static _instance: RefundManagerSingleton;
  private provider: SuiClient;

  /**
   * Constructs a new instance of the SuiProvider class with the provided SUI provider URL.
   *
   * @private
   * @constructor
   * @param {string} suiProviderUrl - The URL of the SUI provider.
   */
  private constructor(suiProviderUrl: string) {
    this.provider = new SuiClient({ url: suiProviderUrl });
  }

  /**
   * @public
   * @method getInstance
   * @description Gets the singleton instance of RefundManagerSingleton.
   * @param {string} [suiProviderUrl] - Url of SUI provider.
   * @return {RefundManagerSingleton} The singleton instance of RefundManagerSingleton.
   */
  public static getInstance(suiProviderUrl?: string): RefundManagerSingleton {
    if (!RefundManagerSingleton._instance) {
      if (suiProviderUrl === undefined) {
        throw new Error("[DCAManager] SUI provider url is required in arguments to create DCAManager instance.");
      }

      const instance = new RefundManagerSingleton(suiProviderUrl);
      RefundManagerSingleton._instance = instance;
    }

    return RefundManagerSingleton._instance;
  }

  public static getAddAddressesTransaction({
    publisherObjectId,
    poolObjectId,
    addressesList,
    amountsList,

    transaction,
  }: {
    publisherObjectId: ObjectArg;
    poolObjectId: ObjectArg;
    addressesList: string[];
    amountsList: string[];

    transaction?: TransactionBlock;
  }) {
    const tx = transaction ?? new TransactionBlock();

    const txRes = tx.moveCall({
      target: `${RefundManagerSingleton.REFUND_PACKAGE_ADDRESS}::refund::add_addresses`,
      typeArguments: [],
      arguments: [obj(tx, publisherObjectId), obj(tx, poolObjectId), tx.pure(addressesList), tx.pure(amountsList)],
    });

    tx.setGasBudget(RefundManagerSingleton.REFUND_GAS_BUGET);

    return { tx, txRes };
  }

  public static getClaimRefundTransaction({
    poolObjectId,
    transaction,
  }: {
    poolObjectId: ObjectArg;
    transaction?: TransactionBlock;
  }) {
    const tx = transaction ?? new TransactionBlock();

    const txRes = tx.moveCall({
      target: `${RefundManagerSingleton.REFUND_PACKAGE_ADDRESS}::refund::claim_refund`,
      typeArguments: [],
      arguments: [obj(tx, poolObjectId)],
    });

    tx.setGasBudget(RefundManagerSingleton.REFUND_GAS_BUGET);

    return { tx, txRes };
  }

  public static getClaimRefundBoosted({
    publisherObjectId,
    poolObjectId,
    affectedAddress,
    newAddress,
    signature,

    transaction,
  }: {
    publisherObjectId: ObjectArg;
    poolObjectId: ObjectArg;
    affectedAddress: string;
    newAddress: string;
    signature: string;

    transaction?: TransactionBlock;
  }) {
    const tx = transaction ?? new TransactionBlock();

    const txRes = tx.moveCall({
      target: `${RefundManagerSingleton.REFUND_PACKAGE_ADDRESS}::booster::claim_refund_boosted`,
      typeArguments: [],
      arguments: [
        obj(tx, publisherObjectId),
        obj(tx, poolObjectId),
        tx.pure(affectedAddress),
        tx.pure(newAddress),
        tx.pure(signature),
      ],
    });

    tx.setGasBudget(RefundManagerSingleton.REFUND_GAS_BUGET);

    return { tx, txRes };
  }

  public static getMessageForBoostedRefund({
    poolObjectId,
    affectedAddress,
    newAddress,
  }: {
    poolObjectId: string;
    affectedAddress: string;
    newAddress: string;
  }) {
    // Convert string values to hexadecimal buffers inline
    const poolObjectIdBuffer = Buffer.from(poolObjectId);
    const affectedAddressBuffer = Buffer.from(affectedAddress);
    const newAddressBuffer = Buffer.from(newAddress);

    // Concatenate the buffers
    const concatenatedBuffer = Buffer.concat([poolObjectIdBuffer, affectedAddressBuffer, newAddressBuffer]);

    return { buffer: concatenatedBuffer, hex: concatenatedBuffer.toString("hex") };
  }

  public static async signMessageSignatureForBoostedRefund({
    keypair,
    poolObjectId,
    affectedAddress,
    newAddress,
  }: {
    keypair: Keypair;
    poolObjectId: string;
    affectedAddress: string;
    newAddress: string;
  }): Promise<SignatureWithBytes> {
    const message = RefundManagerSingleton.getMessageForBoostedRefund({ poolObjectId, affectedAddress, newAddress });
    const signedMessage = await keypair.signPersonalMessage(message.buffer);

    return signedMessage;
  }

  /*
  @throws an error in case signature is not valid
  */
  public static async verifySignedMessageForBoostedRefund({
    affectedAddress,
    newAddress,

    signedMessage,
  }: {
    newAddress: string;
    affectedAddress: string;

    // TODO: Instead of `signedMessage` we need to have a string?
    signedMessage: SignatureWithBytes;
  }) {
    const signedPublicKey = await verifyPersonalMessage(Buffer.from(signedMessage.bytes), signedMessage.signature);

    if (affectedAddress !== signedPublicKey.toSuiAddress()) {
      throw new Error("Affected address is different from the signer of the message");
    }

    const signedMessageString = Buffer.from(signedMessage.bytes).toString();

    console.debug("signedMessageString: ", signedMessageString);

    // TODO: verify that newAddress is related to the newAddress in the message
    // TODO: & same pool objecct id

    return true;
  }
}
