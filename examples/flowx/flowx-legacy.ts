import { calculateAmountOut, getCoinsFlowX, getPools, swapExactInput } from "@flowx-pkg/ts-sdk";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import { getCoinNode, getCoinsMap, getPoolsMap } from "../../src/providers/flowx/utils";
import { convertSlippage } from "../../src/providers/utils/convertSlippage";
import { keypair, signAndExecuteTransaction } from "../common";

const FUD_COIN_TYPE = "0x76cb819b01abed502bee8a702b4c2d547532c12f25001c9dea795a5e631c26f1::fud::FUD";
const SUI_COIN_TYPE = "0x2::sui::SUI";
// const SUI_COIN_TYPE = "0x0000000000000000000000000000000000000000000000000000000000000002::sui::SUI";

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
  amount: number;
  slippagePercentage: number;
  signerAddress: string;
}) => {
  const { poolInfos, pairs } = await getPools();
  //   saveDataToJsonFile(poolInfos, "flowx-pools");
  //   saveDataToJsonFile(pairs, "flowx-pairs");

  const coinList = await getCoinsFlowX();
  //   saveDataToJsonFile(coins, "flowx-coins");

  const { coinMap, coins } = getCoinsMap({ coinList: coinList });
  const { paths, poolMap } = getPoolsMap({ poolList: poolInfos });

  //   console.debug("coinMap: ", coinMap);
  //   console.debug("coins: ", coins);
  //   console.debug("paths: ", paths);
  //   console.debug("poolsMap: ", poolMap);

  // Validation 1: Check if both coins exist
  const tokenFromCoinNode = getCoinNode(tokenFrom, coinMap);
  const tokenToCoinNode = getCoinNode(tokenTo, coinMap);

  // const tokenFromCoinNode: CoinNode = { address: SUI_COIN_TYPE, type: SUI_COIN_TYPE, decimals: 9 };
  // const tokenToCoinNode: CoinNode = { address: FUD_COIN_TYPE, type: FUD_COIN_TYPE, decimals: 5 };

  if (!tokenFromCoinNode) {
    throw new Error(`Coin ${tokenFrom} does not exist.`);
  }

  if (!tokenToCoinNode) {
    throw new Error(`Coin ${tokenTo} does not exist.`);
  }

  console.debug("tokenFromCoinNode: ", tokenFromCoinNode);
  console.debug("tokenToCoinNode: ", tokenToCoinNode);

  // Validation 2: Check if there is a path between the coins
  // if (!hasPath(tokenFrom, tokenTo, poolMap)) {
  //   throw new Error(`There is no path between ${tokenTo} and ${tokenFrom}.`);
  // }

  const swapData = await calculateAmountOut(amount, tokenFromCoinNode, tokenToCoinNode);
  console.debug("swapData: ", swapData);

  const absoluteSlippage = convertSlippage(slippagePercentage);

  const legacyTxBlock = await swapExactInput(
    false, // it should be false for now
    swapData.amountIn, // amount want to swap
    swapData.amountOut, // amount want to receive
    swapData.trades, // trades from calculate amount
    tokenFromCoinNode, // coin In data
    tokenToCoinNode, // coin Out data
    signerAddress,
    absoluteSlippage, // slippage (0.05%)
  );
  console.debug("tx: ", legacyTxBlock);

  const txBlock = new TransactionBlock(TransactionBlock.from(legacyTxBlock.serialize()));

  // const res = await provider.devInspectTransactionBlock({
  //   transactionBlock: txBlock,
  //   sender: keypair.toSuiAddress(),
  // });

  const res = signAndExecuteTransaction(txBlock, keypair);

  console.debug("res: ", res);
};

flowx({
  tokenFrom: SUI_COIN_TYPE,
  tokenTo: FUD_COIN_TYPE,
  amount: 0.0123,
  slippagePercentage: 10,
  signerAddress: keypair.toSuiAddress(),
});
