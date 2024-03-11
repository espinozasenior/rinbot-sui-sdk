import { TransactionBlock } from "@mysten/sui.js/transactions";
import { TxBlock } from "../txBlock";

const DCA = "0x495de18feac86973ee1f88d9ad2cc52592ec8f2afdf05e95a1aa3bf1ef312b84";

type PatternReplacement = {
  pattern: RegExp;
  replacement: `${string}::${string}::${string}`;
};

/**
 * Builds a new DCA (Dollar-Cost Averaging) transaction block by modifying an existing transaction block.
 * @param {TransactionBlock} txBlock - The original transaction block to be modified.
 * @param {string} dcaId - The ID of the DCA object.
 * @param {number} gasCost - The gas cost of the DCA transaction.
 * @return {TransactionBlock} A new transaction block modified for DCA.
 */
export function buildDcaTxBlock(txBlock: TransactionBlock, dcaId: string, gasCost: number): TransactionBlock {
  // Initialize a clone TransactionBlock
  const dcaBlock: TxBlock = { ...txBlock.blockData };
  const dcaIdx = dcaBlock.inputs.length;

  dcaBlock.inputs.push({
    kind: "Input",
    index: dcaIdx,
    type: "object",
    value: dcaId,
  });

  const gasCostIdx = dcaBlock.inputs.length;

  dcaBlock.inputs.push({
    kind: "Input",
    index: gasCostIdx,
    type: "pure",
    value: gasCost,
  });

  dcaBlock.transactions.forEach((transaction) => {
    if (transaction.kind === "MoveCall" && transaction.target) {
      // Now TypeScript knows transaction is of a type that includes "target"
      const patterns: PatternReplacement[] = [
        { pattern: /.*::router::swap$/, replacement: `${DCA}::${"router"}::${"swap"}` },
        { pattern: /.*::router::swap_ab_bc$/, replacement: `${DCA}::${"router"}::${"swap_ab_bc"}` },
        { pattern: /.*::router::swap_ab_cb$/, replacement: `${DCA}::${"router"}::${"swap_ab_cb"}` },
        { pattern: /.*::router::swap_ba_bc$/, replacement: `${DCA}::${"router"}::${"swap_ba_bc"}` },
        { pattern: /.*::router::swap_ba_cb$/, replacement: `${DCA}::${"router"}::${"swap_ba_cb"}` },
      ];

      let isModified = false;
      for (const { pattern, replacement } of patterns) {
        if (pattern.test(transaction.target)) {
          isModified = true;
          transaction.target = replacement;

          // if pattern is swap --> route: if a2b == true --> swap_ab, else --> swap_ba
          if (replacement === `${DCA}::${"router"}::${"swap"}`) {
            // Check if the argument at index 6 (arguments[5]) has value "true" or "false"
            const argument6 = transaction.arguments[5];
            if (argument6 && argument6.kind === "Input" && argument6.value === "true") {
              // Modify the function name to swap_ab
              transaction.target = `${DCA}::${"router"}::${"swap_ab"}`;
            } else if (argument6 && argument6.kind === "Input" && argument6.value === "false") {
              // Modify the function name to swap_ba
              transaction.target = `${DCA}::${"router"}::${"swap_ba"}`;
            } else {
              throw new Error("Incoherent function parameter");
            }
          }

          break;
        }
      }

      if (isModified) {
        // Push DCA object param
        transaction.arguments.push({
          kind: "Input",
          index: dcaIdx,
          type: "object",
          value: dcaId,
        });

        // Push gas cost estimate
        transaction.arguments.push({
          kind: "Input",
          index: gasCostIdx,
          type: "pure",
          value: gasCost,
        });
      }
    }
  });

  // console.log(dcaBlock.transactions);

  dcaBlock.transactions.forEach((transaction, index) => {
    console.debug(`Transaction ${index + 1}:`);
    if ("arguments" in transaction) {
      console.debug("Arguments: ", transaction.arguments);
    } else if ("objects" in transaction) {
      console.debug("Objects: ", transaction.objects);
    } else {
      console.debug("No arguments or objects found for this transaction.");
    }
  });

  const newTxBlock = TransactionBlock.from(JSON.stringify(dcaBlock));
  return newTxBlock;
}
