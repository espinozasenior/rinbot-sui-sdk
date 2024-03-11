import { CetusSingleton } from "../../src/providers/cetus/cetus";
import { clmmMainnet } from "../../src/providers/cetus/config";
import { LONG_SUI_COIN_TYPE } from "../../src/providers/common";
import { CETUS_COIN_TYPE } from "../coin-types";
import { cacheOptions, initAndGetRedisStorage, provider, suiProviderUrl, user } from "../common";

// yarn ts-node examples/cetus/cetus.ts
export const cetus = async ({
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

  const txBlock = await cetus.getSwapTransaction({
    route: calculatedData.route,
    publicKey: signerAddress,
    slippagePercentage,
  });

  const res = await provider.devInspectTransactionBlock({
    transactionBlock: txBlock,
    sender: user,
  });
  console.debug("res: ", res);
};

cetus({
  tokenFrom: LONG_SUI_COIN_TYPE,
  tokenTo: CETUS_COIN_TYPE,
  amount: "0.0001",
  slippagePercentage: 10,
  signerAddress: user,
});
