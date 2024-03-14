import { DCAManagerSingleton } from "../../src/managers/dca/DCAManager";

// yarn ts-node examples/dca/get-dca-by-package.ts
export const getDCAByPackage = async () => {
  const suiProviderUrl = "https://sui-mainnet-endpoint.blockvision.org";

  const DCAInstance = DCAManagerSingleton.getInstance(suiProviderUrl);
  const dcaList = await DCAInstance.getDCAsByPackage();
  console.dir(dcaList, { depth: null });
};

getDCAByPackage();
