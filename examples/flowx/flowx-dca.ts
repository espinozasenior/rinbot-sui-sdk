import { buildDcaTxBlock } from "../../src/managers/dca/adapters/flowxAdapter";
import { LONG_SUI_COIN_TYPE } from "../../src/providers/common";
import { FlowxSingleton } from "../../src/providers/flowx/flowx";
import { FUD_COIN_TYPE } from "../coin-types";
import { cacheOptions, initAndGetRedisStorage, provider, user } from "../common";

// TODO: These are dummy values
const GAS_PROVISION = 505050505;
const DCA_ID = "0x99999";

// yarn ts-node examples/flowx/flowx-dca.ts
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
  const storage = await initAndGetRedisStorage();

  const flowx: FlowxSingleton = await FlowxSingleton.getInstance({
    cacheOptions: { storage, ...cacheOptions },
    lazyLoading: false,
  });

  const calculatedData = await flowx.getRouteData({
    coinTypeFrom: tokenFrom,
    coinTypeTo: tokenTo,
    inputAmount: amount,
    publicKey: signerAddress,
    slippagePercentage,
  });
  console.debug("calc: ", calculatedData);

  const txBlock = await flowx.getSwapTransactionDoctored({
    publicKey: user,
    slippagePercentage,
    route: calculatedData.route,
  });

  console.debug("blockData: ", JSON.stringify(txBlock.blockData));
  console.debug("\n\n\n\n\n");

  const txBlockDca = buildDcaTxBlock(txBlock, tokenFrom, tokenTo, DCA_ID, GAS_PROVISION);

  console.debug("\n\n\n\n\n");
  console.debug(`Final TxBlock: ${JSON.stringify(txBlockDca.blockData)}`);

  //   const res = await provider.devInspectTransactionBlock({
  //     transactionBlock: txBlock,
  //     sender: user,
  //   });
  //   console.debug("res: ", res);
};

flowx({
  tokenFrom: LONG_SUI_COIN_TYPE,
  tokenTo: FUD_COIN_TYPE,
  amount: "0.001",
  slippagePercentage: 10,
  signerAddress: user,
});

// const getMockedAssets = (tokenFrom: string, tokenTo: string): (CommonCoinData, CommonCoinData) => (
//   {
//     type: string;
//     decimals: number;
//   },
//   {
//     type: string;
//     decimals: number;
//   }
// )

// [
//   {
//     coinAddress: tokenFrom,
//     coinObjectId: "0xaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
//     balance: BigInt("9999999999999999999"),
//   },
//   {
//     coinAddress: tokenTo,
//     coinObjectId: "0xbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
//     balance: BigInt("9999999999999999999"),
//   },
// ];
