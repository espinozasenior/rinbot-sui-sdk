import { AftermathSingleton } from "../../src/providers/aftermath/aftermath";
import { LONG_SUI_COIN_TYPE } from "../../src/providers/common";

const USDC_COIN_TYPE = "0x5d4b302506645c37ff133b98c4b50a5ae14841659738d6d733d59d0d217a93bf::coin::COIN";
const TESTCNTWO_COIN_TYPE = "0x24d1055074f58ac5f6d50335d64c1997a45cd49c8a0cb8f8c2b03bda5b6d6d57::testcntwo::TESTCNTWO";

// yarn ts-node examples/aftermath/second-coin-amount.ts
(async () => {
  const coinTypeA = LONG_SUI_COIN_TYPE;
  const amountA = "3.4";
  const coinTypeB = USDC_COIN_TYPE;
  const decimalsB = 6;

  const { maxAmountB, minAmountB } = await AftermathSingleton.getMaxAndMinSecondCoinAmount({
    coinTypeA,
    amountA,
    coinTypeB,
    decimalsB,
  });
  console.debug("maxAmountB:", maxAmountB);
  console.debug("minAmountB:", minAmountB);

  const hasPrice = await AftermathSingleton.coinHasPrice(TESTCNTWO_COIN_TYPE);
  console.debug("hasPrice:", hasPrice);
})();
