import { LONG_SUI_COIN_TYPE } from "../../src";
import { InterestProtocolSingleton } from "../../src/providers/interest/interest";
import { cacheOptions, initAndGetRedisStorage, provider, suiProviderUrl, user } from "../common";

// yarn ts-node examples/interest/interest.ts
export const interest = async ({
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

  const interest = await InterestProtocolSingleton.getInstance({
    suiProviderUrl,
    cacheOptions: { storage, ...cacheOptions },
    lazyLoading: false,
  });

  const routeData = await interest.getRouteData({
    coinTypeFrom: tokenFrom,
    coinTypeTo: tokenTo,
    inputAmount: amount,
    publicKey: signerAddress,
    slippagePercentage,
  });
  console.debug("routeData:", routeData);

  const transaction = await interest.getSwapTransaction({
    publicKey: user,
    route: routeData.route,
    slippagePercentage: 10,
  });

  const res = await provider.devInspectTransactionBlock({
    transactionBlock: transaction,
    sender: user,
  });
  console.debug("res: ", res);
};

interest({
  tokenFrom: LONG_SUI_COIN_TYPE,
  tokenTo: "0xdb838a0becb92dcf9fd66127136f517f8f6d7a9f973b2344d1ebbd7d2cf2c0fa::meme_02_05_2024::MEME_02_05_2024",
  amount: "0.01",
  signerAddress: user,
  slippagePercentage: 10,
});
