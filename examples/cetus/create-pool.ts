import { getPoolObjectIdFromTransactionResult } from "../../src/providers/aftermath/create-pool-utils";
import { CetusSingleton } from "../../src/providers/cetus/cetus";
import { clmmMainnet } from "../../src/providers/cetus/config";
import { LONG_SUI_COIN_TYPE } from "../../src/providers/common";
import { cacheOptions, keypair, signAndExecuteTransaction, suiProviderUrl, user } from "../common";

const CETUS_COIN_TYPE = "0x06864a6f921804860930db6ddbe2e16acdf8504495ea7481637a1c8b9a8fe54b::cetus::CETUS";
const TESTCNTWO_COIN_TYPE = "0x24d1055074f58ac5f6d50335d64c1997a45cd49c8a0cb8f8c2b03bda5b6d6d57::testcntwo::TESTCNTWO";
const TESTCNONE_COIN_TYPE = "0x2b4f7b435746239df29c4c0c16f27e49e866c59abd0cef6c4e189274b3c14589::testcnone::TESTCNONE";

// yarn ts-node examples/cetus/create-pool.ts
export const cetus = async () => {
  const cetus: CetusSingleton = await CetusSingleton.getInstance({
    sdkOptions: clmmMainnet,
    cacheOptions,
    suiProviderUrl,
    lazyLoading: false,
  });

  // Create Pool
  const coinTypeA = LONG_SUI_COIN_TYPE;
  const coinTypeB = TESTCNTWO_COIN_TYPE;
  const decimalsA = 9;
  const decimalsB = 3;
  const price = "100000";
  const tickSpacing = 200;

  console.time("existing pool");
  const existingPool = await cetus.getPoolByCoinTypesAndTickSpacing(coinTypeA, coinTypeB, tickSpacing.toString());
  console.timeEnd("existing pool");
  if (existingPool !== undefined) {
    console.debug("existing pool:", existingPool);
    throw new Error("Such pool already exists!");
  }

  const createPoolTransaction = await cetus.getCreatePoolTransaction({
    coinTypeA,
    coinTypeB,
    decimalsA,
    decimalsB,
    price,
    tickSpacing,
  });
  const createResponse = await signAndExecuteTransaction(createPoolTransaction, keypair, {
    options: { showObjectChanges: true, showEffects: true },
  });
  console.debug("createResponse:", createResponse);

  // Add liquidity
  const slippage = 0.05; // Means 5%
  const amountA = "1000"; // Consuming params were swapped and TESTCNTWO is coinA
  const poolId = getPoolObjectIdFromTransactionResult(createResponse);
  const pool = await cetus.getPool(poolId);

  if (pool === null) {
    throw new Error(`Pool with pool address ${poolId} is not found.`);
  }

  const transaction = await cetus.getAddLiquidityTransaction({
    pool,
    coinAmountA: amountA,
    decimalsA: decimalsB, // Consuming params were swapped and TESTCNTWO is coinA
    decimalsB: decimalsA,
    slippage,
    publicKey: user,
  });
  const addResponse = await signAndExecuteTransaction(transaction, keypair, {
    options: { showObjectChanges: true, showEffects: true },
  });
  console.debug("addResponse:", addResponse);
};

cetus();
