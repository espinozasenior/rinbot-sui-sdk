export interface TxBlock {
  version: 1;
  transactions: (
    | {
        arguments: (
          | {
              kind: "Input";
              index: number;
              type?: "object" | "pure" | undefined;
              value?: any;
            }
          | {
              kind: "GasCoin";
            }
          | {
              kind: "Result";
              index: number;
            }
          | {
              kind: "NestedResult";
              index: number;
              resultIndex: number;
            }
        )[];
        kind: "MoveCall";
        typeArguments: string[];
        target: `${string}::${string}::${string}`;
      }
    | {
        objects: (
          | {
              kind: "Input";
              index: number;
              type?: "object" | "pure" | undefined;
              value?: any;
            }
          | {
              kind: "GasCoin";
            }
          | {
              kind: "Result";
              index: number;
            }
          | {
              kind: "NestedResult";
              index: number;
              resultIndex: number;
            }
        )[];
        kind: "TransferObjects";
        address:
          | {
              kind: "Input";
              index: number;
              type?: "object" | "pure" | undefined;
              value?: any;
            }
          | {
              kind: "GasCoin";
            }
          | {
              kind: "Result";
              index: number;
            }
          | {
              kind: "NestedResult";
              index: number;
              resultIndex: number;
            };
      }
    | {
        kind: "SplitCoins";
        coin:
          | {
              kind: "Input";
              index: number;
              type?: "object" | "pure" | undefined;
              value?: any;
            }
          | {
              kind: "GasCoin";
            }
          | {
              kind: "Result";
              index: number;
            }
          | {
              kind: "NestedResult";
              index: number;
              resultIndex: number;
            };
        amounts: (
          | {
              kind: "Input";
              index: number;
              type?: "object" | "pure" | undefined;
              value?: any;
            }
          | {
              kind: "GasCoin";
            }
          | {
              kind: "Result";
              index: number;
            }
          | {
              kind: "NestedResult";
              index: number;
              resultIndex: number;
            }
        )[];
      }
    | {
        kind: "MergeCoins";
        destination:
          | {
              kind: "Input";
              index: number;
              type?: "object" | "pure" | undefined;
              value?: any;
            }
          | {
              kind: "GasCoin";
            }
          | {
              kind: "Result";
              index: number;
            }
          | {
              kind: "NestedResult";
              index: number;
              resultIndex: number;
            };
        sources: (
          | {
              kind: "Input";
              index: number;
              type?: "object" | "pure" | undefined;
              value?: any;
            }
          | {
              kind: "GasCoin";
            }
          | {
              kind: "Result";
              index: number;
            }
          | {
              kind: "NestedResult";
              index: number;
              resultIndex: number;
            }
        )[];
      }
    | {
        objects: (
          | {
              kind: "Input";
              index: number;
              type?: "object" | "pure" | undefined;
              value?: any;
            }
          | {
              kind: "GasCoin";
            }
          | {
              kind: "Result";
              index: number;
            }
          | {
              kind: "NestedResult";
              index: number;
              resultIndex: number;
            }
        )[];
        kind: "MakeMoveVec";
        type?:
          | {
              None: true | null;
            }
          | {
              Some: Record<string, unknown>;
            }
          | undefined;
      }
    | {
        kind: "Publish";
        dependencies: string[];
        modules: number[][];
      }
    | {
        packageId: string;
        kind: "Upgrade";
        dependencies: string[];
        modules: number[][];
        ticket:
          | {
              kind: "Input";
              index: number;
              type?: "object" | "pure" | undefined;
              value?: any;
            }
          | {
              kind: "GasCoin";
            }
          | {
              kind: "Result";
              index: number;
            }
          | {
              kind: "NestedResult";
              index: number;
              resultIndex: number;
            };
      }
  )[];
  inputs: {
    kind: "Input";
    index: number;
    type?: "object" | "pure" | undefined;
    value?: any;
  }[];
  gasConfig: {
    payment?:
      | {
          objectId: string;
          version: string | number;
          digest: string;
        }[]
      | undefined;
    owner?: string | undefined;
    price?: string | undefined;
    budget?: string | undefined;
  };
  sender?: string | undefined;
  expiration?:
    | {
        Epoch: number;
      }
    | {
        None: true | null;
      }
    | null
    | undefined;
}
