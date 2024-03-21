import { TransactionBlock } from "@mysten/sui.js/transactions";
import { RefundManagerSingleton } from "../../src";
import { keypair, signAndExecuteTransaction } from "../common";

const ADDRESSES = [
  "0x3131b76cbf2283bc232fc48b2ddcac0a43d3ee644ce1291bcb01ff8e2af490d5",
  "0xb30c0cac5461c6e39f0c3093ff8f9364dbf098c7cece5c0d3d99af7ea7422d84",
  "0x5ca56c634d5c88a35c0f55b0908f0e0540fb01cfc3946d0bc31b17de9f8efb32",
  "0xeb9e6a8404e4d6972a885df1b8ea51ae582f745c2ff9ba539505e94bda4689af",
  "0x863621b4d2687914c51180eaa41d42f4eaca301bfe2721aa3afe23e638b1d6d8",
  "0x046f718ca3fdd519f6d21ad5b18a7fafaafeb85fd311ef8b99db22df7ec15d5d",
  "0x7ae5d6d3765707a1a2602d870245ebdcc0a4e00903f522039906d60fb6104a9a",
  "0x3663c9a3e359ccb82dca9804bc39678a32c411552faa3dd068ae9ade6eb39676",
  "0x58a64893417a321770f19009f006ef4e30703c1b617641a687b182f021cfb4ab",
  "0x4ccf53f1d5fb22ea0134f73cb6092454fd788968d974318570b3793a483d6661",
  "0x46531c357e29a5c8324455e877a8daecb0ec77d7ad9a4bb2cca2fd7d4d012aa6",
  "0x61a8024d31a41307f64f0950e890f862305433e8757aa73dd16b269502db54ec",
  "0xda0373eb535c9e1a8abb31264263db5599581589c76525ea14d8cb181936203b",
  "0x86e3289eada655152a41cb1045c0b26b3ed981eee9529fcdebda70f2c511595a",
];

const AMOUNTS = [
  "500000",
  "5839204",
  "7503121",
  "9812735",
  "6548279",
  "8124560",
  "7289341",
  "6743920",
  "5392748",
  "8472396",
  "9429386",
  "1888999",
  "2333111",
  "3444555",
];
// yarn ts-node examples/refund/add-addresses.ts
export const addAddresses = async ({ addresses, amounts }: { addresses: string[]; amounts: string[] }) => {
  const poolID = RefundManagerSingleton.REFUND_POOL_OBJECT_ID;
  const publisherID = RefundManagerSingleton.REFUND_POOL_PUBLISHER_OBJECT_ID;

  const { tx, txRes } = RefundManagerSingleton.getAddAddressesTransaction({
    publisherObjectId: publisherID,
    poolObjectId: poolID,
    addressesList: addresses,
    amountsList: amounts,
    transaction: new TransactionBlock(),
  });

  // const res = await provider.devInspectTransactionBlock({
  //   transactionBlock: tx,
  //   sender: "0x935fd79d69b98dc87cd43d4112e621fe92967c7f33fa232ddf4f6351bb1b9a19",
  // });

  const res = await signAndExecuteTransaction(tx, keypair);

  // Assuming you want to do something with the result or just log it for now
  console.log(res);
};

addAddresses({ addresses: ADDRESSES, amounts: AMOUNTS });
