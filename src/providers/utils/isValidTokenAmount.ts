import BigNumber from "bignumber.js";

/**
 * Checks if the provided amount is a valid token amount.
 * @param {Object} params - The parameters object.
 * @param {string} params.amount - The amount to be validated as a string.
 * @param {string} params.maxAvailableAmount - The maximum allowed token amount as a string.
 * @param {number} params.decimals - The number of decimals for precision in conversion.
 * @return {{ isValid: boolean, reason: string }} An object with isValid boolean and reason string.
 */
export const isValidTokenAmount = ({
  amount,
  maxAvailableAmount,
  decimals,
}: {
  amount: string;
  maxAvailableAmount: string;
  decimals: number;
}): { isValid: boolean; reason: string } => {
  // Convert maxAvailableAmount to BigNumber
  const maxAvailableAmountBigInt = new BigNumber(maxAvailableAmount).times(10 ** decimals);

  // Convert amount to BigNumber and multiply by decimals
  const amountNumber = new BigNumber(amount).times(10 ** decimals);

  // Check if the amount is a valid number, including NaN
  if (isNaN(amountNumber.toNumber())) {
    return { isValid: false, reason: "Amount must be a valid number." };
  }

  // Check if the amount is non-negative
  if (amountNumber.isLessThanOrEqualTo(0)) {
    return { isValid: false, reason: "Amount must be a positive value." };
  }

  // Check if the amount does not exceed the maximum available amount
  if (amountNumber.isGreaterThan(maxAvailableAmountBigInt)) {
    return { isValid: false, reason: "Amount exceeds the maximum available amount." };
  }

  // The amount is valid
  return { isValid: true, reason: "Valid amount." };
};
