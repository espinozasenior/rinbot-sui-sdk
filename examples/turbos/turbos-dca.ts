import { TransactionBlock } from "@mysten/sui.js/transactions";
import { LONG_SUI_COIN_TYPE } from "../../src/providers/common";
import { TurbosSingleton } from "../../src/providers/turbos/turbos";
import { USDC_COIN_TYPE } from "../coin-types";
import { cacheOptions, initAndGetRedisStorage, provider, suiProviderUrl, user } from "../common";
import { buildDcaTxBlock } from "../../src/managers/dca/adapters/turbosAdapter";

// TODO: These are dummy values
const GAS_PROVISION = 505050505;
const DCA_ID = "0x99999";

// The transaction flow is the following when selling non-SUI token for X:
// 1. MakeMoveVec( no inputs )
// 2. Swap(...)

// The transaction flow is the following when selling SUI token for X:
// 1. SplitCoins(GasCoin, input idx: 1)
// 2. MakeMoveVec( Result <SplitCoins> )
// 3. Swap(...)

// yarn ts-node examples/turbos/turbos-dca.ts
(async () => {
  const storage = await initAndGetRedisStorage();

  const turbos: TurbosSingleton = await TurbosSingleton.getInstance({
    suiProviderUrl,
    cacheOptions: { storage, ...cacheOptions },
    lazyLoading: false,
  });

  const coinTypeFrom: string = LONG_SUI_COIN_TYPE;
  const coinTypeTo: string = USDC_COIN_TYPE;
  // const coinTypeFrom = "0x5d1f47ea69bb0de31c313d7acf89b890dbb8991ea8e03c6c355171f84bb1ba4a::turbos::TURBOS";
  // const coinTypeTo: string = LONG_SUI_COIN_TYPE;
  const inputAmount = "0.001";

  const routeData = await turbos.getRouteData({
    coinTypeFrom,
    coinTypeTo,
    inputAmount,
    publicKey: user,
    slippagePercentage: 10,
  });
  console.log("routeData:", routeData);
  console.log("user:", user);

  // Standard behaviour of `turbos.getSwapTransaction` is that it will create a empty
  // coin vector if the user has no coins avaialble for the trade.
  // We therefore use a doctored up version of the method that mocks the coin
  // array and makes it empty, since this makes it easier to post-process
  // the transaction block
  const txBlock: TransactionBlock = await turbos.getSwapTransactionDoctored({
    publicKey: user, // this MUST be the user address, not the delegatee
    route: routeData.route,
    slippagePercentage: 10,
  });

  console.debug("blockData: ", JSON.stringify(txBlock.blockData));
  console.debug("\n\n\n\n\n");

  const txBlockDca = buildDcaTxBlock(txBlock, coinTypeFrom, coinTypeTo, DCA_ID, GAS_PROVISION);

  console.debug("\n\n\n\n\n");
  console.debug(`Final TxBlock: ${JSON.stringify(txBlockDca.blockData)}`);

  //   const res = await provider.devInspectTransactionBlock({
  //     transactionBlock: transaction,
  //     sender: user,
  //   });
  //   console.debug("res: ", res);
})();
