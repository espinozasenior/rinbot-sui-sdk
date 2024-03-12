import { CoinAsset } from "@cetusprotocol/cetus-sui-clmm-sdk";
import { buildDcaTxBlock } from "../../src/managers/dca/adapters/cetusAdapter";
import { CetusSingleton } from "../../src/providers/cetus/cetus";
import { clmmMainnet } from "../../src/providers/cetus/config";
import { LONG_SUI_COIN_TYPE } from "../../src/providers/common";
import { CETUS_COIN_TYPE } from "../coin-types";
import { cacheOptions, initAndGetRedisStorage, suiProviderUrl, user } from "../common";
import { TransactionBlock } from "@mysten/sui.js/transactions";

// TODO: These are dummy values
const GAS_PROVISION = 505050505;
const DCA_ID = "0x99999";

// yarn ts-node examples/cetus/cetus-dca.ts
export const cetusDca = async ({
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
}) => {
  const storage = await initAndGetRedisStorage();

  const cetus: CetusSingleton = await CetusSingleton.getInstance({
    sdkOptions: clmmMainnet,
    cacheOptions: { storage, ...cacheOptions },
    lazyLoading: false,
    suiProviderUrl,
  });

  const calculatedData = await cetus.getRouteData({
    coinTypeFrom: tokenFrom,
    coinTypeTo: tokenTo,
    inputAmount: amount,
    slippagePercentage,
    publicKey: signerAddress,
  });

  const mockedAssets = getMockedAssets(tokenFrom, tokenTo);

  const txBlock: TransactionBlock = await cetus.getSwapTransactionWithAssets({
    route: calculatedData.route,
    publicKey: signerAddress,
    slippagePercentage,
    coinAssets: mockedAssets,
  });

  console.debug(`Original TxBlock: ${JSON.stringify(txBlock.blockData)}`);
  console.debug("\n\n\n\n\n");

  const txBlockDca = buildDcaTxBlock(txBlock, tokenFrom, tokenTo, DCA_ID, GAS_PROVISION);

  console.debug("\n\n\n\n\n");
  console.debug(`Doctored TxBlock: ${JSON.stringify(txBlockDca.blockData)}`);

  // const res = await provider.devInspectTransactionBlock({
  //   transactionBlock: txBlock,
  //   sender: user,
  // });
  // console.debug("res: ", res);
};

cetusDca({
  tokenFrom: LONG_SUI_COIN_TYPE,
  tokenTo: CETUS_COIN_TYPE,
  amount: "0.0001",
  slippagePercentage: 10,
  signerAddress: user,
});

const getMockedAssets = (tokenFrom: string, tokenTo: string): CoinAsset[] => [
  {
    coinAddress: tokenFrom,
    coinObjectId: "0xaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    balance: BigInt("9999999999999999999"),
  },
  {
    coinAddress: tokenTo,
    coinObjectId: "0xbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
    balance: BigInt("9999999999999999999"),
  },
];
