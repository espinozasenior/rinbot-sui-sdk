import { CetusSingleton } from "../../src/providers/cetus/cetus";
import { clmmMainnet } from "../../src/providers/cetus/config";
import { getCoinNode, getPoolsDataFromApiData } from "../../src/providers/cetus/utils";
import { cacheOptions, keypair, suiProviderUrl } from "../common";

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
  amount: number;
  slippagePercentage: number;
  signerAddress: string;
}) => {
  const cetus: CetusSingleton = await CetusSingleton.getInstance({
    sdkOptions: clmmMainnet,
    cacheOptions: cacheOptions,
    suiProviderUrl,
  });

  // console.time("[allPools]");
  // const cetusPools = await cetus.retrieveAllPoolsFromApi();
  // console.timeEnd("[allPools]");
  // saveDataToJsonFile(cetusPools, "cetusPools");
  // console.debug("cetusPools: ", cetusPools);

  // console.time("[ticksForPool]");
  // const ticks = await betchRetrievalTicksByPoolID();
  // console.timeEnd("[ticksForPool]");
  // saveDataToJsonFile(cetusPools, "cetusPools");
  // console.debug("ticks: ", ticks);

  // const { coins, paths, coinMap, poolMap } = getPoolsDataFromApiData({ poolsInfo: cetusPools });

  // console.time("SDK.Router.loadGraph");
  // cetus.cetusSdk.Router.loadGraph(coinsProvider, { paths: paths });
  // console.timeEnd("SDK.Router.loadGraph");
  // saveDataToJsonFile(coins, "cetusPools-coins");
  // saveDataToJsonFile(paths, "cetusPools-paths");

  // Validation 1: Check if both coins exist
  // const tokenFromCoinNode = getCoinNode(tokenFrom, coinMap);
  // const tokenToCoinNode = getCoinNode(tokenTo, coinMap);

  // if (!tokenFromCoinNode) {
  //   throw new Error(`Coin ${tokenFrom} does not exist.`);
  // }

  // if (!tokenToCoinNode) {
  //   throw new Error(`Coin ${tokenTo} does not exist.`);
  // }

  // Validation 2: Check if there is a path between the coins
  // if (!hasPath(tokenFrom, tokenTo, poolMap)) {
  //   throw new Error(`There is no path between ${tokenTo} and ${tokenFrom}.`);
  // }

  // const routeTx = await cetus.getSwapTransaction({
  //   slippagePercentage: slippagePercentage,
  //   tokenFrom: tokenFromCoinNode,
  //   tokenTo: tokenToCoinNode,
  //   amountIn: amount,
  //   txSignerPubkey: signerAddress,
  // });

  // console.debug("routeTx: ", routeTx);
  // console.debug("keypair: ", keypair.toSuiAddress());
  // console.debug("routeTx.blockData:", routeTx.blockData);

  // saveDataToJsonFile(routeTx.blockData, "routeTx.blockData");

  // const res = await provider.devInspectTransactionBlock({
  //   transactionBlock: routeTx,
  //   sender: keypair.toSuiAddress(),
  // });

  // const res = await provider.signAndExecuteTransactionBlock({ transactionBlock: routeTx, signer: keypair });

  // console.debug("res: ", res);
};

cetus({
  tokenFrom: SUI_COIN_TYPE,
  tokenTo: CETUS_COIN_TYPE,
  amount: 0.0001,
  slippagePercentage: 10,
  signerAddress: keypair.toSuiAddress(),
});
