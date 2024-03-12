import { TransactionBlock } from "@mysten/sui.js/transactions";
import { Coin, Decimal, MathUtil, Pool, Trade, TurbosSdk } from "turbos-clmm-sdk";
import { SUI_CLOCK_OBJECT_ID } from "@mysten/sui.js/utils";

const ONE_MINUTE = 60 * 1000;
const MAX_TICK_STEP = 100;

interface Config {
  PackageId: string;
  PackageIdOriginal: string;
  PoolConfig: string;
  Positions: string;
  PoolFactoryAdminCap: string;
  Versioned: string;
  PoolTableId: string;
}

// eslint-disable-next-line
class DoctoredTrade extends Trade {
  // Constructor that allows initializing from an existing Trade instance
  // eslint-disable-next-line
  constructor(sdk: TurbosSdk, trade: Trade) {
    super(sdk);

    // Copy relevant properties from trade to this instance
    // This step depends heavily on the specifics of Trade's implementation
    Object.assign(this, trade);
  }

  // eslint-disable-next-line
  public async getContractConfig(): Promise<Config> {
    return await this.contract.getConfig();
  }

  // eslint-disable-next-line
  get pool(): Pool {
    return this.pool;
  }

  // eslint-disable-next-line
  get coin(): Coin {
    return this.coin;
  }

  // eslint-disable-next-line
  get math(): MathUtil {
    return this.math;
  }

  // eslint-disable-next-line
  getFunctionNameAndTypeArguments(
    pools: Pool.Types[],
    coinTypeA: string,
    coinTypeB: string,
  ): {
    functionName: string;
    typeArguments: string[];
  } {
    return this.getFunctionNameAndTypeArguments(pools, coinTypeA, coinTypeB);
  }

  // eslint-disable-next-line
  sqrtPriceWithSlippage(price: Decimal, slippage: string, a2b: boolean, decimalsA: number, decimalsB: number): string {
    return this.sqrtPriceWithSlippage(price, slippage, a2b, decimalsA, decimalsB);
  }

  // eslint-disable-next-line
  amountOutWithSlippage(amountOut: Decimal, slippage: string, amountSpecifiedIsInput: boolean): string {
    return this.amountOutWithSlippage(amountOut, slippage, amountSpecifiedIsInput);
  }
}

// eslint-disable-next-line
export async function swap(sdk: TurbosSdk, trade: Trade, options: Trade.SwapOptions): Promise<TransactionBlock> {
  const { coinTypeA, coinTypeB, address, amountSpecifiedIsInput, slippage } = options;
  const amountA = new Decimal(options.amountA);
  const amountB = new Decimal(options.amountB);
  const doctoredTrade = new DoctoredTrade(sdk, trade);

  const contract = await doctoredTrade.getContractConfig();
  const routes = await Promise.all(
    options.routes.map(async (item) => {
      const typeArguments = await doctoredTrade.pool.getPoolTypeArguments(item.pool);
      const [coinA, coinB] = await Promise.all([
        doctoredTrade.coin.getMetadata(typeArguments[0]),
        doctoredTrade.coin.getMetadata(typeArguments[1]),
      ]);
      return {
        ...item,
        coinA,
        coinB,
        typeArguments: typeArguments,
      };
    }),
  );
  // Doctoring the coinIDs
  const coinIds = ["0xaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"];
  const { functionName, typeArguments } = doctoredTrade.getFunctionNameAndTypeArguments(
    routes.map(({ typeArguments }) => typeArguments),
    coinTypeA,
    coinTypeB,
  );

  const sqrtPrices = routes.map(({ nextTickIndex, coinA, coinB, a2b }) => {
    const nextTickPrice = doctoredTrade.math.tickIndexToPrice(nextTickIndex, coinA.decimals, coinB.decimals);
    return doctoredTrade.sqrtPriceWithSlippage(nextTickPrice, slippage, a2b, coinA.decimals, coinB.decimals);
  });

  const txb = options.txb || new TransactionBlock();
  txb.moveCall({
    target: `${contract.PackageId}::swap_router::${functionName}`,
    typeArguments: typeArguments,
    arguments: [
      ...routes.map(({ pool }) => txb.object(pool)),
      txb.makeMoveVec({
        objects: doctoredTrade.coin.convertTradeCoins(txb, coinIds, coinTypeA, amountA),
      }),
      txb.pure((amountSpecifiedIsInput ? amountA : amountB).toFixed(0), "u64"),
      txb.pure(
        doctoredTrade.amountOutWithSlippage(
          amountSpecifiedIsInput ? amountB : amountA,
          slippage,
          amountSpecifiedIsInput,
        ),
        "u64",
      ),
      ...sqrtPrices.map((price) => txb.pure(price, "u128")),
      txb.pure(amountSpecifiedIsInput, "bool"),
      txb.pure(address, "address"),
      txb.pure(Date.now() + ONE_MINUTE * 3, "u64"),
      txb.object(SUI_CLOCK_OBJECT_ID),
      txb.object(contract.Versioned),
    ],
  });

  return txb;
}
