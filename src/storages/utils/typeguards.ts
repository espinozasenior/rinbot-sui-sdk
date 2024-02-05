/* eslint-disable require-jsdoc */

import { CommonCoinData } from "../../managers/types";
import { ShortCoinMetadata } from "../../providers/flowx/types";
import { ShortPoolData } from "../../providers/turbos/types";
import { CommonPoolData } from "../../providers/types";
import { StorageValue } from "../types";

export function isStorageValue(data: unknown): data is StorageValue {
  return (
    isCommonCoinDataArray(data) ||
    isCommonPoolDataArray(data) ||
    isShortCoinMetadataArray(data) ||
    isShortPoolDataArray(data)
  );
}

export function isCommonCoinDataArray(data: unknown): data is CommonCoinData[] {
  return (
    Array.isArray(data) &&
    data.every(
      (item) =>
        typeof item === "object" &&
        item !== null &&
        "type" in item &&
        typeof (item as CommonCoinData).type === "string" &&
        "decimals" in item &&
        typeof (item as CommonCoinData).decimals === "number" &&
        ((item as CommonCoinData).symbol === undefined || typeof (item as CommonCoinData).symbol === "string"),
    )
  );
}

export function isCommonPoolDataArray(data: unknown): data is CommonPoolData[] {
  return (
    Array.isArray(data) &&
    data.every(
      (item) =>
        typeof item === "object" &&
        item !== null &&
        "base" in item &&
        typeof (item as CommonPoolData).base === "string" &&
        "quote" in item &&
        typeof (item as CommonPoolData).quote === "string",
    )
  );
}

export function isShortCoinMetadataArray(data: unknown): data is ShortCoinMetadata[] {
  return (
    Array.isArray(data) &&
    data.every(
      (item) =>
        typeof item === "object" &&
        item !== null &&
        "decimals" in item &&
        typeof (item as ShortCoinMetadata).decimals === "number" &&
        "type" in item &&
        typeof (item as ShortCoinMetadata).type === "string",
    )
  );
}

export function isShortPoolDataArray(data: unknown): data is ShortPoolData[] {
  return (
    Array.isArray(data) &&
    data.every(
      (item) =>
        typeof item === "object" &&
        item !== null &&
        "poolId" in item &&
        typeof (item as ShortPoolData).poolId === "string" &&
        "coinTypeA" in item &&
        typeof (item as ShortPoolData).coinTypeA === "string" &&
        "coinTypeB" in item &&
        typeof (item as ShortPoolData).coinTypeB === "string",
    )
  );
}
