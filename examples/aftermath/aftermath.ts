import { Pool } from "aftermath-ts-sdk";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import { SuiTransactionBlockResponse } from "@mysten/sui.js/client";

import { AftermathSingleton } from "../../src/providers/aftermath/aftermath";
import { SmartOutputAmountData } from "../../src/providers/aftermath/types";
import { cacheOptions, keypair, signAndExecuteTransaction, user } from "../common";

const SUI_TYPE = "0x0000000000000000000000000000000000000000000000000000000000000002::sui::SUI";
// const USDC_TYPE = "0x5d4b302506645c37ff133b98c4b50a5ae14841659738d6d733d59d0d217a93bf::coin::COIN";
const BUCK_TYPE = "0xce7ff77a83ea0cb6fd39bd8748e2ec89a3f41e8efdc3f4eb123e0ca37b184db2::buck::BUCK";

// yarn ts-node examples/aftermath/aftermath.ts
(async () => {
  const coinTypeFrom = BUCK_TYPE;
  const coinTypeTo = SUI_TYPE;
  const inputAmount = "0.1";
  const slippagePercentage = 10;
  const aftermath: AftermathSingleton = await AftermathSingleton.getInstance({ cacheOptions, lazyLoading: false });

  const pool: Pool = await aftermath.getPool(coinTypeFrom, coinTypeTo);
  console.log("pool:", pool);

  const directOutputAmount: bigint = aftermath.getDirectOutputAmount(pool, inputAmount, coinTypeFrom, coinTypeTo);
  console.log("directOutputAmount:", directOutputAmount);

  const smartOutputAmountData: SmartOutputAmountData = await aftermath.getSmartOutputAmountData(
    coinTypeFrom,
    coinTypeTo,
    inputAmount,
  );
  console.log("smartOutputAmount:", smartOutputAmountData.outputAmount);

  const transaction: TransactionBlock = await aftermath.getSwapTransaction({
    publicKey: user,
    route: smartOutputAmountData.route,
    slippagePercentage,
  });
  console.log("transaction:", transaction);

  const transactionResponse: SuiTransactionBlockResponse = await signAndExecuteTransaction(transaction, keypair);
  console.log("transactionResponse:", transactionResponse);
})();
