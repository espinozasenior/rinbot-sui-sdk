import { TransactionBlock } from "@mysten/sui.js/transactions";
import { keypair, signAndExecuteTransaction } from "../common";
import { delegateeKeypair } from "../dca/common";

const REFUND_PACKAGE_ADDRESS = "0xf5cb872b2fea1881128e5a9435cefb176b728cac8477b27d259ed3f3ccb50197";
const REFUND_POOL_PUBLISHER_OBJECT_ID = "0x16c2fc18be4e8fbe66272c9516e773d414cc5b5bb95c2a18fae2120dbfc7b760";

// npm ts-node examples/addAddresses.ts
const processTransactions = async () => {
  const txb = new TransactionBlock();

  txb.moveCall({
    target: `${REFUND_PACKAGE_ADDRESS}::refund::new_pool`,
    arguments: [txb.object(REFUND_POOL_PUBLISHER_OBJECT_ID)],
  });

  //   const res = await provider.devInspectTransactionBlock({
  //     transactionBlock: txb,
  //     sender:
  //       "0x935fd79d69b98dc87cd43d4112e621fe92967c7f33fa232ddf4f6351bb1b9a19",
  //   });

  const res = await signAndExecuteTransaction(txb, delegateeKeypair);

  // Assuming you want to do something with the result or just log it for now
  console.log(res);
};

processTransactions();
