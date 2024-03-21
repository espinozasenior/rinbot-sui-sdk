/**
 * Converts a hexadecimal string to a Uint8Array.
 *
 * @param {string} hexString - The hexadecimal string to convert.
 * @return {Uint8Array} - The resulting byte array.
 */
export function hexStringToByteArray(hexString: string): Uint8Array {
  // Remove the "0x" prefix if present
  const normalizedHexString = hexString.startsWith("0x") ? hexString.substring(2) : hexString;

  const byteArray = new Uint8Array(normalizedHexString.length / 2);
  for (let i = 0; i < normalizedHexString.length; i += 2) {
    byteArray[i / 2] = parseInt(normalizedHexString.substring(i, i + 2), 16);
  }
  return byteArray;
}

export type DecodedAmount = { Some?: string } | { None?: boolean };

export enum RefundPoolPhase {
  AddressAddition = 1, // Phase for adding addresses
  Funding = 2, // Phase for funding
  Claim = 3, // Phase for claiming refunds
  Reclaim = 4, // Phase for reclaiming refunds
}
