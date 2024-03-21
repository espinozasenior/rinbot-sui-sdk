/* eslint-disable require-jsdoc */
import { SuiClient } from "@mysten/sui.js/client";
import { Keypair, SignatureWithBytes } from "@mysten/sui.js/cryptography";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import { verifyPersonalMessage } from "@mysten/sui.js/verify";
import { ObjectArg } from "../../transactions/types";
import { obj } from "../../transactions/utils";
import { hexStringToByteArray } from "./utils";
import BigNumber from "bignumber.js";
import { SUI_DENOMINATOR } from "../..";
import { getAllOwnedObjects } from "../../providers/utils/getAllOwnedObjects";

/**
 * @class RefundManagerSingleton
 * @description
 * This class encapsulates the business logic for a Refund smart contract.
 */
export class RefundManagerSingleton {
  public static SIMLATION_ACCOUNT_ADDRESS = "0xca9711c3de3ef474209ebd920b894e4d374ff09e210bc31cbd2d266f7bff90ca";
  public static REFUND_PACKAGE_ADDRESS = "0xd5bf5b4dda39f394a82590d23259c26dd4b570a2b0584d6d73b0599a9f525fac";
  public static REFUND_PACKAGE_ADDRESS_READ = "";
  public static REFUND_POOL_OBJECT_ID = "0xf8f7e8e3c4a4c08e5a334c45ed0b3c669b3b86098e7fc1ff9cfe062105c1f74e";
  public static REFUND_POOL_PUBLISHER_OBJECT_ID = "0x492ef3058c292d1d343545001c65ff42baef932a4fb06be79968137ec381a4fc";
  public static REFUND_BOOSTED_CLAIM_CAP_STRUCT_TYPE_NAME = "BoostedClaimCap";

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

  public async getCurrentRefundPhase({
    poolObjectId,
    transaction,
  }: {
    poolObjectId: string;
    transaction?: TransactionBlock;
  }) {
    const tx = transaction ?? new TransactionBlock();

    const txRes = tx.moveCall({
      target: `${RefundManagerSingleton.REFUND_PACKAGE_ADDRESS}::refund::phase`,
      typeArguments: [],
      arguments: [obj(tx, poolObjectId)],
    });

    tx.setGasBudget(RefundManagerSingleton.REFUND_GAS_BUGET);

    const res = await this.provider.devInspectTransactionBlock({
      sender: RefundManagerSingleton.SIMLATION_ACCOUNT_ADDRESS,
      transactionBlock: tx,
    });

    if (!res.results) {
      throw new Error("No results found for the request phase request");
    }

    const returnValues = res.results[0].returnValues;

    if (!returnValues) {
      throw new Error("Return values are undefined");
    }

    const phase = returnValues[0][0][0];

    return phase;
  }

  public async getUnclaimedAddressesList({
    poolObjectId,
    transaction,
  }: {
    poolObjectId: string;
    transaction?: TransactionBlock;
  }) {
    const tx = transaction ?? new TransactionBlock();

    const txRes = tx.moveCall({
      target: `${RefundManagerSingleton.REFUND_PACKAGE_ADDRESS}::refund::unclaimed`,
      typeArguments: [],
      arguments: [obj(tx, poolObjectId)],
    });

    tx.setGasBudget(RefundManagerSingleton.REFUND_GAS_BUGET);

    const res = await this.provider.devInspectTransactionBlock({
      sender: RefundManagerSingleton.SIMLATION_ACCOUNT_ADDRESS,
      transactionBlock: tx,
    });

    if (!res.results) {
      throw new Error("No results found for the request phase request");
    }

    const returnValues = res.results[0].returnValues;

    if (!returnValues) {
      throw new Error("Return values are undefined");
    }

    const table = returnValues[0][0];

    return table;
  }

  public async getClaimAmountNormal({
    poolObjectId,
    affectedAddress,
  }: {
    poolObjectId: string;
    affectedAddress: string;
  }) {
    const tx = new TransactionBlock();

    const txRes = tx.moveCall({
      target: `${RefundManagerSingleton.REFUND_PACKAGE_ADDRESS}::refund::amount_to_claim`,
      typeArguments: [],
      arguments: [obj(tx, poolObjectId), tx.pure(affectedAddress)],
    });

    tx.setGasBudget(RefundManagerSingleton.REFUND_GAS_BUGET);

    const res = await this.provider.devInspectTransactionBlock({
      sender: RefundManagerSingleton.SIMLATION_ACCOUNT_ADDRESS,
      transactionBlock: tx,
    });

    if (!res.results) {
      throw new Error("No results found for the request phase request");
    }

    const returnValues = res.results[0].returnValues;

    if (!returnValues) {
      throw new Error("Return values are undefined");
    }

    const amount = returnValues[0][0][0];

    return { mist: amount, sui: new BigNumber(amount).div(SUI_DENOMINATOR).toString() };
  }

  public async getClaimAmountBoosted({
    poolObjectId,
    affectedAddress,
  }: {
    poolObjectId: string;
    affectedAddress: string;
  }) {
    const tx = new TransactionBlock();

    const txRes = tx.moveCall({
      target: `${RefundManagerSingleton.REFUND_PACKAGE_ADDRESS}::refund::amount_to_claim_boosted`,
      typeArguments: [],
      arguments: [obj(tx, poolObjectId), tx.pure(affectedAddress)],
    });

    tx.setGasBudget(RefundManagerSingleton.REFUND_GAS_BUGET);

    const res = await this.provider.devInspectTransactionBlock({
      sender: RefundManagerSingleton.SIMLATION_ACCOUNT_ADDRESS,
      transactionBlock: tx,
    });

    if (!res.results) {
      throw new Error("No results found for the request phase request");
    }

    const returnValues = res.results[0].returnValues;

    if (!returnValues) {
      throw new Error("Return values are undefined");
    }

    const amount = returnValues[0][0][0];

    return { mist: amount, sui: new BigNumber(amount).div(SUI_DENOMINATOR).toString() };
  }

  public async getClaimAmount({ poolObjectId, affectedAddress }: { poolObjectId: string; affectedAddress: string }) {
    const [normalRefund, boostedRefund] = await Promise.all([
      this.getClaimAmountNormal({ poolObjectId, affectedAddress }),
      this.getClaimAmountBoosted({ poolObjectId, affectedAddress }),
    ]);

    return { normalRefund, boostedRefund };
  }

  public async getBoostedClaimCap({ ownerAddress }: { ownerAddress: string }) {
    // Assuming we have only 1 allowed per user by design
    const allBoostedClaimCapObjects = await getAllOwnedObjects({
      provider: this.provider,
      options: {
        owner: ownerAddress,
        // TODO: Check for correctness
        filter: { StructType: RefundManagerSingleton.REFUND_BOOSTED_CLAIM_CAP_STRUCT_TYPE_NAME },
      },
    });

    const boostedClaimCapObject = allBoostedClaimCapObjects[0];

    if (!boostedClaimCapObject.data) {
      throw new Error("No boosted claim cap object found");
    }

    return boostedClaimCapObject.data.objectId;
  }

  public static getAllowBoostedClaim({
    publisherObjectId,
    poolObjectId,
    affectedAddress,
    newAddress,

    transaction,
  }: {
    publisherObjectId: string;
    poolObjectId: string;
    affectedAddress: string;
    newAddress: string;

    transaction?: TransactionBlock;
  }) {
    const tx = transaction ?? new TransactionBlock();

    const txRes = tx.moveCall({
      target: `${RefundManagerSingleton.REFUND_PACKAGE_ADDRESS}::booster::allow_boosted_claim`,
      typeArguments: [],
      arguments: [obj(tx, publisherObjectId), obj(tx, poolObjectId), tx.pure(affectedAddress), tx.pure(newAddress)],
    });

    tx.setGasBudget(RefundManagerSingleton.REFUND_GAS_BUGET);

    return { tx, txRes };
  }

  public static getClaimRefundBoosted({
    boostedClaimCap,
    poolObjectId,

    transaction,
  }: {
    boostedClaimCap: ObjectArg;
    poolObjectId: ObjectArg;

    transaction?: TransactionBlock;
  }) {
    const tx = transaction ?? new TransactionBlock();

    const txRes = tx.moveCall({
      target: `${RefundManagerSingleton.REFUND_PACKAGE_ADDRESS}::booster::claim_refund_boosted`,
      typeArguments: [],
      arguments: [obj(tx, boostedClaimCap), obj(tx, poolObjectId)],
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
    const affectedAddressBytes = hexStringToByteArray(affectedAddress);
    const newAddressBytes = hexStringToByteArray(newAddress);
    const poolIdBytes = hexStringToByteArray(poolObjectId);

    // Construct the message by concatenating the byte arrays
    const msg = new Uint8Array(affectedAddressBytes.length + newAddressBytes.length + poolIdBytes.length);
    msg.set(affectedAddressBytes, 0);
    msg.set(newAddressBytes, affectedAddressBytes.length);
    msg.set(poolIdBytes, affectedAddressBytes.length + newAddressBytes.length);

    return { bytes: msg, hex: Buffer.from(msg).toString("hex") };
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
    const signedMessage = await keypair.signPersonalMessage(message.bytes);

    return signedMessage;
  }

  /*
  @throws an error in case signature is not valid
  */
  public static async verifySignedMessageForBoostedRefund({
    poolObjectId,
    affectedAddress,
    newAddress,

    signedMessageSignature,
  }: {
    poolObjectId: string;
    newAddress: string;
    affectedAddress: string;

    signedMessageSignature: string;
  }) {
    const targetMessage = RefundManagerSingleton.getMessageForBoostedRefund({
      poolObjectId,
      affectedAddress,
      newAddress,
    });

    const signedPublicKey = await verifyPersonalMessage(targetMessage.bytes, signedMessageSignature);

    if (affectedAddress !== signedPublicKey.toSuiAddress()) {
      throw new Error("Affected address is different from the signer of the message");
    }

    return true;
  }
}
