import * as fs from "fs";

/**
 * Add two numbers.
 * @param {string} mnemonic Seed phrase of the wallet.
 * @return {string} Normilized mnemonic (trimmed & etc.).
 */
export function normalizeMnemonic(mnemonic: string): string {
  return mnemonic
    .trim()
    .split(/\s+/)
    .map((part) => part.toLowerCase())
    .join(" ");
}

/**
 * Add two numbers.
 * @param {string} hexStr String as an input.
 * @return {Uint8Array} Encoded string into Uint8Array type.
 */
export function hexStringToUint8Array(hexStr: string) {
  if (hexStr.length % 2 !== 0) {
    throw new Error("Invalid hex string length.");
  }

  const byteValues: number[] = [];

  for (let i = 0; i < hexStr.length; i += 2) {
    const byte: number = parseInt(hexStr.slice(i, i + 2), 16);

    if (Number.isNaN(byte)) {
      throw new Error(`Invalid hex value at position ${i}: ${hexStr.slice(i, i + 2)}`);
    }

    byteValues.push(byte);
  }

  return new Uint8Array(byteValues);
}
/**
 * Save data to a JSON file with formatted content.
 *
 * @async
 * @function
 * @param {object | object[]} data - The data to be saved to the JSON file.
 * @param {string} filename - The name of the JSON file (excluding the file extension).
 * @return {Promise<void>} A Promise that resolves when the data is successfully saved.
 * @throws {Error} Throws an error if there is an issue saving the data to the file.
 *
 * @example
 * // Assuming retrievelAllPools returns an object or array of data
 * const cetusPools = await retrievelAllPools();
 * await saveDataToJsonFile(cetusPools, 'cetusPools');
 */
export async function saveDataToJsonFile(data: object | object[], filename: string): Promise<void> {
  try {
    const jsonData: string = JSON.stringify(data, null, 2);
    const filePath = `${__dirname}/${filename}.json`;

    await fs.promises.writeFile(filePath, jsonData);

    console.log(`Data has been saved to ${filename}.json`);
  } catch (error) {
    console.error("Error saving data to file:", error);
  }
}
