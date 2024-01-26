import { CetusSingleton } from "../../src/providers/cetus/cetus";
import { clmmMainnet } from "../../src/providers/cetus/config";
import { cacheOptions, keypair, provider, suiProviderUrl } from "../common";

const CETUS_COIN_TYPE = "0x06864a6f921804860930db6ddbe2e16acdf8504495ea7481637a1c8b9a8fe54b::cetus::CETUS";
const SUI_COIN_TYPE = "0x0000000000000000000000000000000000000000000000000000000000000002::sui::SUI";

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
  const cetusInstance: CetusSingleton = await CetusSingleton.getInstance({
    sdkOptions: clmmMainnet,
    cacheOptions,
    suiProviderUrl,
    lazyLoading: false,
  });

  const calculatedData = await cetusInstance.getRouteData({
    coinTypeFrom: tokenFrom,
    coinTypeTo: tokenTo,
    inputAmount: amount,
    slippagePercentage,
    publicKey: signerAddress,
  });

  console.debug("calculatedData: ", calculatedData);

  const txBlock = await cetusInstance.getSwapTransaction({
    route: calculatedData.route,
    publicKey: signerAddress,
    slippagePercentage,
  });

  const res = await provider.devInspectTransactionBlock({
    transactionBlock: txBlock,
    sender: keypair.toSuiAddress(),
  });

  // const res = await provider.signAndExecuteTransactionBlock({ transactionBlock: routeTx, signer: keypair });

  console.debug("res: ", res);
};

cetus({
  tokenFrom: SUI_COIN_TYPE,
  tokenTo: CETUS_COIN_TYPE,
  amount: "0.0001",
  slippagePercentage: 10,
  signerAddress: keypair.toSuiAddress(),
});
