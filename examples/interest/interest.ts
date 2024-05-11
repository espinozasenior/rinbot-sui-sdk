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
  tokenFrom: "0xae870af23dda8285a5f11e8136190568796bb76a6e7f3b4061f7ded0c1ebe889::usdt::USDT",
  tokenTo: "0x62a807f396a729dfb9dd931bc6a49d840ede3ce058fe11e38d1f097d8466ee60::bonden::BONDEN",
  amount: "10",
  signerAddress: user,
  slippagePercentage: 10,
});
