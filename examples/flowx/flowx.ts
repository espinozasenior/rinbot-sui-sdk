import { FlowxSingleton } from "../../src/providers/flowx/flowx";
import { cacheOptions, keypair, provider, signAndExecuteTransaction } from "../common";

const FUD_COIN_TYPE = "0x76cb819b01abed502bee8a702b4c2d547532c12f25001c9dea795a5e631c26f1::fud::FUD";
const SUI_COIN_TYPE = "0x2::sui::SUI";

// yarn ts-node examples/flowx/flowx.ts
export const flowx = async ({
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
  const flowxInstance = await FlowxSingleton.getInstance({ cacheOptions });
  const calculatedData = await flowxInstance.getRouteData({
    coinTypeFrom: tokenFrom,
    coinTypeTo: tokenTo,
    inputAmount: amount,
    publicKey: signerAddress,
    slippagePercentage,
  });

  console.debug("calc: ", calculatedData);

  const txBlock = await flowxInstance.getSwapTransaction({
    publicKey: keypair.toSuiAddress(),
    slippagePercentage,
    route: calculatedData.route,
  });

  console.debug("txBlock: ", txBlock);

  const res = await provider.devInspectTransactionBlock({
    transactionBlock: txBlock,
    sender: keypair.toSuiAddress(),
  });

  // const res = await signAndExecuteTransaction(txBlock, keypair);

  console.debug("res: ", res);
};

flowx({
  tokenFrom: SUI_COIN_TYPE,
  tokenTo: FUD_COIN_TYPE,
  amount: "0.0123",
  slippagePercentage: 10,
  signerAddress: keypair.toSuiAddress(),
});
