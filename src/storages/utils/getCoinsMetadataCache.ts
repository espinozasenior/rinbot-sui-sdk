import { ExtractedCoinMetadataType } from "../../providers/flowx/types";
import { StorageValue, StorageProperty, Storage } from "../types";
import { isShortCoinMetadataArray } from "./typeguards";

// eslint-disable-next-line require-jsdoc
export async function getCoinsMetadataCache({
  storage,
  provider,
}: {
  storage: Storage;
  provider: string;
}): Promise<ExtractedCoinMetadataType[]> {
  let coinsMetadataCache: ExtractedCoinMetadataType[];

  const coinsMetadata: StorageValue = await storage.getCache({
    provider: provider,
    property: StorageProperty.CoinsMetadata,
  });

  if (isShortCoinMetadataArray(coinsMetadata)) {
    coinsMetadataCache = coinsMetadata;
  } else if (coinsMetadata === null) {
    console.warn(
      "[getCoinsMetadataCache] Received empty coinsMetadataCache from strorage, coinsMetadataCache === null ",
    );
    return [];
  } else {
    const stringifiedCoinMetadata: string = JSON.stringify(coinsMetadata[0]);
    throw new Error(
      `[${provider}] getCoinsMetadataCache: coins metadata from storage is not ` +
        `(ExtractedCoinMetadataType[] or null). Example of coin metadata: ${stringifiedCoinMetadata}`,
    );
  }

  return coinsMetadataCache;
}
