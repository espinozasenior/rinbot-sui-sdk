import { buildDcaTxBlock } from "../../src/managers/dca/adapters/flowxAdapter";
import { LONG_SUI_COIN_TYPE } from "../../src/providers/common";
import { FlowxSingleton } from "../../src/providers/flowx/flowx";
import { FUD_COIN_TYPE } from "../coin-types";
import { cacheOptions, initAndGetRedisStorage, provider, user } from "../common";

// TODO: These are dummy values
const GAS_PROVISION = 505050505;
const DCA_ID = "0x99999";

// The transaction flow is the following when selling non-SUI OR SUI token for X:
// 1. Swap(...)

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

  // Standard behaviour of `flowx.getSwapTransaction` is that it will fail if
  // the user does not have coins available for the trade. We therefore use a
  // doctored up version of the method that mock the coin objects
  const txBlock = await flowx.getSwapTransactionDoctored({
    publicKey: user, // this MUST be the user address, not the delegatee
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

// SUI --> FUD
// flowx({
//   tokenFrom: LONG_SUI_COIN_TYPE,
//   tokenTo: FUD_COIN_TYPE,
//   amount: "0.001",
//   slippagePercentage: 10,
//   signerAddress: user,
// });

// USDC --> FLX
flowx({
  tokenFrom: "0x5d4b302506645c37ff133b98c4b50a5ae14841659738d6d733d59d0d217a93bf::coin::COIN",
  tokenTo: "0x6dae8ca14311574fdfe555524ea48558e3d1360d1607d1c7f98af867e3b7976c::flx::FLX",
  amount: "0.001",
  slippagePercentage: 10,
  signerAddress: user,
});
