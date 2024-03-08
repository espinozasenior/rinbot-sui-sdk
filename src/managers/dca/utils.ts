/* eslint-disable require-jsdoc */

import { MoveStruct, SuiParsedData, SuiObjectResponse } from "@mysten/sui.js/client";
import { DCAContent, DCAContentFields, DCAResponse } from "./types";
import { TOKEN_ADDRESS_BASE_REGEX } from "../../providers/common";

export function isValidDCAFields(fields: MoveStruct): fields is DCAContentFields {
  const expectedKeys: (keyof DCAContentFields)[] = [
    "active",
    "base_balance",
    "delegatee",
    "every",
    "id",
    "last_time_ms",
    "owner",
    "quote_balance",
    "remaining_orders",
    "split_allocation",
    "start_time_ms",
    "time_scale",
    "trade_params",
  ];

  return (
    expectedKeys.every((key) => key in fields) &&
    // the "active" in fields is the ts-check bypass for MoveStruct type
    "active" in fields &&
    typeof fields.active === "boolean" &&
    typeof fields.base_balance === "string" &&
    typeof fields.delegatee === "string" &&
    typeof fields.every === "string" &&
    typeof fields.id === "object" && // Assuming id is always an object
    typeof fields.last_time_ms === "string" &&
    typeof fields.owner === "string" &&
    typeof fields.quote_balance === "string" &&
    typeof fields.remaining_orders === "string" &&
    typeof fields.split_allocation === "string" &&
    typeof fields.start_time_ms === "string" &&
    typeof fields.time_scale === "number" &&
    typeof fields.trade_params === "object" &&
    fields.trade_params !== null &&
    "type" in fields.trade_params &&
    "fields" in fields.trade_params &&
    typeof fields.trade_params.fields === "object" &&
    fields.trade_params.fields !== null &&
    "max_price" in fields.trade_params.fields &&
    "min_price" in fields.trade_params.fields &&
    typeof fields.trade_params.type === "string" &&
    typeof fields.trade_params.fields === "object" &&
    typeof fields.trade_params.fields.max_price === "string" &&
    typeof fields.trade_params.fields.min_price === "string"
  );
}

export function isDCAContent(data: SuiParsedData | null): data is DCAContent {
  return (
    !!data &&
    data.dataType === "moveObject" &&
    typeof data.type === "string" &&
    typeof data.hasPublicTransfer === "boolean" &&
    isValidDCAFields(data.fields)
  );
}

export function isValidDCAObjectResponse(obj: SuiObjectResponse): obj is DCAResponse {
  return !!obj.data?.content && isDCAContent(obj.data.content);
}

export function filterValidDCAObjects(dcaList: SuiObjectResponse[]): DCAResponse[] {
  return dcaList.filter(isValidDCAObjectResponse);
}

// TODO: Add test for the util function, since it does use regex
/**
 * Extracts base and quote coin types from the input DCA type string.
 *
 * @param {string} dcaTypeString - The input DCA type string.
 * @return {{ baseCoinType: string, quoteCoinType: string }} An object containing the base and quote coin types.
 * @throws {Error} Throws an error if the input string does not match the expected format.
 */
export function getBaseQuoteCoinTypesFromDCAType(dcaTypeString: string): {
  baseCoinType: string;
  quoteCoinType: string;
} {
  const regex = new RegExp(`DCA<(${TOKEN_ADDRESS_BASE_REGEX.source}).*(${TOKEN_ADDRESS_BASE_REGEX.source})>`);
  const match = dcaTypeString.match(regex);

  if (!match) {
    throw new Error("Invalid DCA type string format");
  }

  const [baseCoinType, quoteCoinType] = match.slice(1, 3);

  return {
    baseCoinType,
    quoteCoinType,
  };
}

export function hasMinMaxPriceParams(params: {
  minPrice?: string;
  maxPrice?: string;
}): params is { minPrice: string; maxPrice: string } {
  return params.minPrice !== undefined && params.maxPrice !== undefined;
}