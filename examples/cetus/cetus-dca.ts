import { buildDcaTxBlock } from "../../src/managers/dca/adapters/cetusAdapter";
import { DCA_CONTRACT } from "../../src/managers/dca/utils";
import { CetusSingleton } from "../../src/providers/cetus/cetus";
import { clmmMainnet } from "../../src/providers/cetus/config";
import { LONG_SUI_COIN_TYPE } from "../../src/providers/common";
import { CETUS_COIN_TYPE } from "../coin-types";
import { cacheOptions, initAndGetRedisStorage, suiProviderUrl, user } from "../common";
import { TransactionBlock } from "@mysten/sui.js/transactions";

const GAS_PROVISION = 505050505;

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
  console.debug("calculatedData: ", calculatedData);

  const txBlock: TransactionBlock = await cetus.getSwapTransaction({
    route: calculatedData.route,
    publicKey: signerAddress,
    slippagePercentage,
  });

  const txBlockDca = buildDcaTxBlock(txBlock, DCA_CONTRACT, GAS_PROVISION);

  console.debug("txBlockDca: ", txBlockDca.blockData.inputs);
  console.debug("\n\n\n\n\n");
  console.debug("txBlockDca: ", txBlockDca.blockData.transactions);
  console.debug("\n\n\n\n\n");

  txBlockDca.blockData.transactions.forEach((transaction, index) => {
    console.debug(`Transaction ${index + 1}:`);
    if ("arguments" in transaction) {
      console.debug("Arguments: ", transaction.arguments);
    } else if ("objects" in transaction) {
      console.debug("Objects: ", transaction.objects);
    } else {
      console.debug("No arguments or objects found for this transaction.");
    }
  });

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
