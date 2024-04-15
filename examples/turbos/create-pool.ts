import { SHORT_SUI_COIN_TYPE, TurbosSingleton } from "../../src";
import { cacheOptions, keypair, provider, suiProviderUrl, user } from "../common";

// yarn ts-node examples/turbos/create-pool.ts
(async () => {
  const turbos: TurbosSingleton = await TurbosSingleton.getInstance({
    suiProviderUrl,
    cacheOptions,
    lazyLoading: true,
  });

  // Each tick spacing have corresponding fee rate. Should be one of these values: 2 / 10 / 60 / 200.
  // So fee rate in pool depends on tick spacing, specified by user.
  const tickSpacing = 10;

  // Quote coin type in pool.
  const coinTypeA = "0x4fab7b26dbbf679a33970de7ec59520d76c23b69055ebbd83a3e546b6370e5d1::testcnfour::TESTCNFOUR";
  // Base coin type in pool.
  const coinTypeB = SHORT_SUI_COIN_TYPE;

  // Decimals of coins in pool.
  const coinDecimalsA = 9;
  const coinDecimalsB = 9;

  // Amounts of coins for initial deposit to the pool on its creation.
  const amountA = 100_000; // 100_000 TESTCNFOUR in this case
  const amountB = 0.1; // 0.1 SUI in this case

  // Slippage percentage. I'm not sure why Turbos needs it for the pool.
  const slippage = 10;

  // We need to check whether pool with specified coins & tick spacing already exists. If that's the case,
  // pool creation will be failed, so we will warn user to change params to prevent pool creation failure.
  const existingPool = await turbos.getPoolByParams({
    coinTypeA,
    coinTypeB,
    tickSpacing: tickSpacing.toString(),
  });

  if (existingPool !== undefined) {
    throw new Error("Pool with such params already exists. Try to change coin types or tick spacing.");
  }

  // Creating transaction for pool creation
  const createPoolTransaction = await turbos.getCreatePoolTransaction({
    tickSpacing,
    amountA: amountA.toString(),
    amountB: amountB.toString(),
    coinDecimalsA,
    coinDecimalsB,
    coinTypeA,
    coinTypeB,
    publicKey: user,
    slippage,
  });

  // const result = await provider.devInspectTransactionBlock({
  //   sender: user,
  //   transactionBlock: createPoolTransaction,
  // });

  // Signing & executing transaction for pool creation
  const result = await provider.signAndExecuteTransactionBlock({
    transactionBlock: createPoolTransaction,
    signer: keypair,
    options: { showEffects: true },
  });

  console.debug("result:", result);
})();
