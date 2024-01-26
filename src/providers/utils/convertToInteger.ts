/**
 * Convert an amount in raw (float format) to integer format based on the specified decimal points.
 *
 * @param {number} amount - The amount in raw (float format).
 * @param {number} decimals - The number of decimal points for the currency.
 * @return {number} Returns the amount in integer format.
 * @throws {Error} Throws an error if the resulting amount is not an integer or provided decimals is not valid.
 * @example
 * const SUI_DECIMALS = 9;
 * const amountInRaw = 123.456789;
 * const amountInInteger = convertToInteger(amountInRaw, SUI_DECIMALS);
 * console.log("Amount in integer format:", amountInInteger); // 123456789000
 */
export function convertToInteger(amount: number, decimals: number): number {
  if (decimals < 0) {
    throw new Error("Decimal points must be a non-negative integer.");
  }

  if (!Number.isInteger(decimals)) {
    throw new Error("Decimal points must be an integer.");
  }

  const powerOfTen = 10 ** decimals;
  const amountInInteger = amount * powerOfTen;

  if (!Number.isInteger(amountInInteger)) {
    throw new Error(`Invalid decimal conversion: Decimals ${decimals} is not correct for the given token.`);
  }

  return amountInInteger;
}
