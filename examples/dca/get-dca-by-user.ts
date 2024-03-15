import { keypair } from "../common";
import { DCAManagerSingleton } from "../../src/managers/dca/DCAManager";

// yarn ts-node examples/dca/get-dca-by-user.ts
export const getDCAByUser = async () => {
  const suiProviderUrl = "https://sui-mainnet-endpoint.blockvision.org";
  const sender = keypair.toSuiAddress();

  const DCAInstance = DCAManagerSingleton.getInstance(suiProviderUrl);
  const dcaList = await DCAInstance.getDCAsByUser({ publicKey: sender });
  console.dir(dcaList, { depth: null });
};

getDCAByUser();
