import { CoinStruct, SuiEvent, SuiObjectData, SuiObjectResponse } from "@mysten/sui.js/client";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import { ObjectArg, TransactionResult } from "../../transactions/types";

export enum DCATimescale {
  Seconds = 0,
  Minutes = 1,
  Hours = 2,
  Days = 3,
  Weeks = 4,
  Months = 5,
}

export type GetDCAInitTransactionArgs = {
  baseCoinType: string;
  quoteCoinType: string;

  timeScale: DCATimescale;
  every: number;
  baseCoinAccount: ObjectArg;
  totalOrders: number;

  transaction?: TransactionBlock;
};

export type GetDCAInitWithPriceParamsTransactionArgs = {
  minPrice: string;
  maxPrice: string;
} & GetDCAInitTransactionArgs;

export type CreateDCAInitTransactionArgs = Omit<GetDCAInitTransactionArgs, "baseCoinAccount"> & {
  baseCoinAmountToDepositIntoDCA: string;
  allCoinObjectsList: CoinStruct[];
  minPrice?: string;
  maxPrice?: string;
};

export interface GetDCADepositBaseTransactionArgs {
  dca: ObjectArg;
  baseCoinType: string;
  quoteCoinType: string;
  baseCoinAccount: ObjectArg;
  addOrdersCount?: number;

  transaction?: TransactionBlock;
}

export type CreateDCADepositBaseTransactionArgs = Omit<GetDCADepositBaseTransactionArgs, "baseCoinAccount"> & {
  baseCoinAmountToDepositIntoDCA: string;
  allCoinObjectsList: CoinStruct[];
};

export interface GetDCAWithdrawBaseTransactionArgs {
  dca: ObjectArg;

  baseCoinType: string;
  quoteCoinType: string;

  baseCoinAmountToWithdrawFromDCA: string;
  removeOrdersCount?: number;

  transaction?: TransactionBlock;
}

export interface GetDCAInitTradeTransactionArgs {
  dca: ObjectArg;
  baseCoinType: string;
  quoteCoinType: string;

  transaction?: TransactionBlock;
}

export interface GetDCAResolveTradeTransactionArgs {
  dca: ObjectArg;

  baseCoinType: string;
  quoteCoinType: string;

  transaction?: TransactionBlock;

  quoteAmount: string;
  initTradePromise: TransactionResult;
}

export interface GetDCAIncreaseOrdersRemainingTransactionArgs {
  dca: ObjectArg;

  baseCoinType: string;
  quoteCoinType: string;

  transaction?: TransactionBlock;
  addOrdersCount?: number;
}

export interface GetDCASetInactiveAsDelegateeTransactionArgs {
  dca: ObjectArg;

  baseCoinType: string;
  quoteCoinType: string;

  transaction?: TransactionBlock;
}

export type GetDCASetReactivateAsOwnerTransactionArgs = GetDCASetInactiveAsDelegateeTransactionArgs;
export type GetDCARedeemFundsAndCloseTransactionArgs = GetDCASetInactiveAsDelegateeTransactionArgs;

export type DCACreateEventParsedJson = {
  delegatee: string;
  id: string;
  owner: string;
};

// Extend SuiEvent to include your specific parsedJson type
export interface SuiEventDCACreate extends SuiEvent {
  parsedJson: DCACreateEventParsedJson;
}

export interface DCAContent {
  dataType: "moveObject";
  type: string;
  hasPublicTransfer: boolean;
  fields: DCAContentFields;
}

export type DCAContentFields = {
  active: boolean;
  base_balance: string;
  delegatee: string;
  every: string;
  id: { id: string };
  last_time_ms: string;
  owner: string;
  quote_balance: string;
  remaining_orders: string;
  split_allocation: string;
  start_time_ms: string;
  time_scale: number;
  trade_params: {
    type: string;
    fields: {
      max_price: string;
      min_price: string;
    };
  };
};

export interface DCAObject extends DCAContent {
  fields: DCAContentFields & {
    base_coin_type: string;
    quote_coin_type: string;
  };
}

export interface DCAResponseData extends SuiObjectData {
  content: DCAContent;
}

export interface DCAResponse extends SuiObjectResponse {
  data: DCAResponseData;
}
