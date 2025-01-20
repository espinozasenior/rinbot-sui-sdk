"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  AftermathSingleton: () => AftermathSingleton,
  CENTRALIZED_POOLS_INFO_ENDPOINT: () => CENTRALIZED_POOLS_INFO_ENDPOINT,
  CetusSingleton: () => CetusSingleton,
  CoinManagerSingleton: () => CoinManagerSingleton,
  DCAManagerSingleton: () => DCAManagerSingleton,
  DCATimescale: () => DCATimescale,
  Ed25519Keypair: () => import_ed255193.Ed25519Keypair,
  FETCH_BEST_ROUTE_ATTEMPTS_COUNT: () => FETCH_BEST_ROUTE_ATTEMPTS_COUNT,
  FeeManager: () => FeeManager,
  FlowxSingleton: () => FlowxSingleton,
  InMemoryStorageSingleton: () => InMemoryStorageSingleton,
  InterestProtocolSingleton: () => InterestProtocolSingleton,
  LONG_SUI_COIN_TYPE: () => LONG_SUI_COIN_TYPE,
  MAX_BATCH_EVENTS_PER_QUERY_EVENTS_REQUEST: () => MAX_BATCH_EVENTS_PER_QUERY_EVENTS_REQUEST,
  MAX_BATCH_OBJECTS_PER_GET_OBJECT_REQUEST: () => MAX_BATCH_OBJECTS_PER_GET_OBJECT_REQUEST,
  MAX_FETCH_BEST_ROUTE_TIMEOUT_DURATION: () => MAX_FETCH_BEST_ROUTE_TIMEOUT_DURATION,
  MIN_FETCH_BEST_ROUTE_TIMEOUT_DURATION: () => MIN_FETCH_BEST_ROUTE_TIMEOUT_DURATION,
  NoRoutesError: () => NoRoutesError,
  ROUTES_QUOTES_AMOUNT_OBJECT_INDEX: () => ROUTES_QUOTES_AMOUNT_OBJECT_INDEX,
  RedisStorageSingleton: () => RedisStorageSingleton,
  RefundManagerSingleton: () => RefundManagerSingleton,
  RouteManager: () => RouteManager,
  SHORT_SUI_COIN_TYPE: () => SHORT_SUI_COIN_TYPE,
  SUI_DECIMALS: () => import_utils25.SUI_DECIMALS,
  SUI_DENOMINATOR: () => SUI_DENOMINATOR,
  SWAP_GAS_BUDGET: () => SWAP_GAS_BUDGET,
  StorageProperty: () => StorageProperty,
  SurfdogLaunchpadSingleton: () => SurfdogLaunchpadSingleton,
  TOKEN_ADDRESS_BASE_REGEX: () => TOKEN_ADDRESS_BASE_REGEX,
  TransactionBlock: () => import_transactions18.TransactionBlock,
  TurbosSingleton: () => TurbosSingleton,
  WalletManagerSingleton: () => WalletManagerSingleton,
  clmmMainnet: () => clmmMainnet,
  convertSlippage: () => convertSlippage,
  convertToBNFormat: () => convertToBNFormat,
  exitHandler: () => exitHandler,
  exitHandlerWrapper: () => exitHandlerWrapper,
  feeAmount: () => feeAmount,
  filterValidDCAObjects: () => filterValidDCAObjects,
  fromArgument: () => fromArgument,
  getAllUserEvents: () => getAllUserEvents,
  getAmountWithSlippage: () => getAmountWithSlippage,
  getBaseQuoteCoinTypesFromDCAType: () => getBaseQuoteCoinTypesFromDCAType,
  getBestInterestRoute: () => getBestInterestRoute,
  getCoinsAssetsFromCoinObjects: () => getCoinsAssetsFromCoinObjects,
  getCoinsDataForPool: () => getCoinsDataForPool,
  getCoinsMap: () => getCoinsMap2,
  getCreatePoolCapIdAndLpCoinType: () => getCreatePoolCapIdAndLpCoinType,
  getFiltredProviders: () => getFiltredProviders,
  getLpCoinDecimals: () => getLpCoinDecimals,
  getPathMapAndCoinTypesSet: () => getPathMapAndCoinTypesSet2,
  getPathsMap: () => getPathsMap2,
  getPoolByCoins: () => getPoolByCoins,
  getPoolObjectIdFromTransactionResult: () => getPoolObjectIdFromTransactionResult,
  getRouterMaps: () => getRouterMaps,
  getSuiProvider: () => getSuiProvider,
  hasMinMaxPriceParams: () => hasMinMaxPriceParams,
  isApiResponseValid: () => isApiResponseValid3,
  isCategoryValid: () => isCategoryValid,
  isCetusPathForStorageArray: () => isCetusPathForStorageArray,
  isCoinDataValid: () => isCoinDataValid,
  isCoinsApiResponseValid: () => isCoinsApiResponseValid,
  isCommonCoinData: () => isCommonCoinData,
  isCommonCoinDataArray: () => isCommonCoinDataArray,
  isCommonPoolDataArray: () => isCommonPoolDataArray,
  isDCAContent: () => isDCAContent,
  isInterestPool: () => isInterestPool,
  isPoolDataValid: () => isPoolDataValid,
  isPoolsApiResponseValid: () => isPoolsApiResponseValid,
  isRewardInfoValid: () => isRewardInfoValid,
  isShortCoinMetadataArray: () => isShortCoinMetadataArray,
  isShortPoolDataArray: () => isShortPoolDataArray,
  isStablePoolState: () => isStablePoolState,
  isStorageValue: () => isStorageValue,
  isSuiCoinType: () => isSuiCoinType,
  isTransactionArgument: () => isTransactionArgument,
  isTransactionBlock: () => import_transactions18.isTransactionBlock,
  isTurbosCreatePoolEventParsedJson: () => isTurbosCreatePoolEventParsedJson,
  isValidDCAFields: () => isValidDCAFields,
  isValidDCAObjectResponse: () => isValidDCAObjectResponse,
  isValidPrivateKey: () => isValidPrivateKey,
  isValidResForCreateCoin: () => isValidResForCreateCoin,
  isValidSeedPhrase: () => isValidSeedPhrase,
  isValidSuiAddress: () => import_utils25.isValidSuiAddress,
  isValidTokenAddress: () => isValidTokenAddress,
  isValidTokenAmount: () => isValidTokenAmount,
  isVolatilePoolState: () => isVolatilePoolState,
  mainnetSurfdogConfig: () => mainnet_config_exports,
  normalizeMnemonic: () => normalizeMnemonic,
  normalizeSuiCoinType: () => normalizeSuiCoinType,
  numberToFixedBigInt: () => numberToFixedBigInt,
  obj: () => obj,
  testnetSurfdogConfig: () => testnet_config_exports,
  tokenFromIsTokenTo: () => tokenFromIsTokenTo,
  transactionFromSerializedTransaction: () => transactionFromSerializedTransaction,
  tryCatchWrapper: () => tryCatchWrapper
});
module.exports = __toCommonJS(src_exports);

// src/managers/coin/CoinManager.ts
var import_client = require("@mysten/sui.js/client");
var import_transactions = require("@mysten/sui.js/transactions");
var import_utils3 = require("@mysten/sui.js/utils");

// src/errors/create-coin/invalid-param-errors.ts
var InvalidCoinNameError = class extends Error {
  /**
   * Creates an instance of InvalidCoinNameError.
   * @constructor
   * @param {string} msg - The error message.
   */
  constructor(msg) {
    super(msg);
  }
};
var InvalidCoinSymbolError = class extends Error {
  /**
   * Creates an instance of InvalidCoinSymbolError.
   * @constructor
   * @param {string} msg - The error message.
   */
  constructor(msg) {
    super(msg);
  }
};
var InvalidCoinDecimalsError = class extends Error {
  /**
   * Creates an instance of InvalidCoinDecimalsError.
   * @constructor
   * @param {string} msg - The error message.
   */
  constructor(msg) {
    super(msg);
  }
};
var InvalidCoinTotalSupplyError = class extends Error {
  /**
   * Creates an instance of InvalidCoinTotalSupplyError.
   * @constructor
   * @param {string} msg - The error message.
   */
  constructor(msg) {
    super(msg);
  }
};
var InvalidCoinDescriptionError = class extends Error {
  /**
   * Creates an instance of InvalidCoinDescriptionError.
   * @constructor
   * @param {string} msg - The error message.
   */
  constructor(msg) {
    super(msg);
  }
};
var InvalidCoinImageError = class extends Error {
  /**
   * Creates an instance of InvalidCoinImageError.
   * @constructor
   * @param {string} msg - The error message.
   */
  constructor(msg) {
    super(msg);
  }
};
var InvalidSignerAddressError = class extends Error {
  /**
   * Creates an instance of InvalidSignerAddressError.
   * @constructor
   * @param {string} msg - The error message.
   */
  constructor(msg) {
    super(msg);
  }
};
var NameEqualsToDescriptionError = class extends Error {
  /**
   * Creates an instance of NameEqualsToDescriptionError.
   * @constructor
   * @param {string} msg - The error message.
   */
  constructor(msg) {
    super(msg);
  }
};
var SymbolEqualsToDescriptionError = class extends Error {
  /**
   * Creates an instance of SymbolEqualsToDescriptionError.
   * @constructor
   * @param {string} msg - The error message.
   */
  constructor(msg) {
    super(msg);
  }
};

// src/providers/common.ts
var import_utils = require("@mysten/sui.js/utils");
var SUI_DENOMINATOR = 10 ** import_utils.SUI_DECIMALS;
var SHORT_SUI_COIN_TYPE = "0x2::sui::SUI";
var LONG_SUI_COIN_TYPE = "0x0000000000000000000000000000000000000000000000000000000000000002::sui::SUI";
var SWAP_GAS_BUDGET = 5e7;
var MAX_BATCH_OBJECTS_PER_GET_OBJECT_REQUEST = 50;
var MAX_BATCH_EVENTS_PER_QUERY_EVENTS_REQUEST = 50;
var TOKEN_ADDRESS_BASE_REGEX = /0x[0-9a-fA-F]+::[0-9a-zA-z_-]+::[0-9a-zA-z_-]+/;
var exitHandler = (options) => {
  if (options.cleanup) {
    console.log(`[EXIT HANDLER] ${options.providerName} cache cleanup.`);
    clearInterval(options.intervalId);
    if (typeof process !== "undefined" && typeof process === "object") {
      process.removeAllListeners();
    }
  }
  if (options.exit)
    process.exit();
};
var exitHandlerWrapper = (options) => {
  if (typeof window !== "undefined" && typeof window === "object") {
    window.addEventListener("beforeunload", exitHandler.bind(null, { cleanup: true, ...options }));
  }
  if (typeof process !== "undefined" && typeof process === "object") {
    process.on("exit", exitHandler.bind(null, { cleanup: true, ...options }));
  }
};
if (typeof process !== "undefined" && typeof process === "object") {
  process.on("SIGINT", () => exitHandler({ exit: true }));
  process.on("SIGUSR1", () => exitHandler({ exit: true }));
  process.on("SIGUSR2", () => exitHandler({ exit: true }));
  process.on("SIGUSR2", () => exitHandler({ exit: true }));
  process.on("uncaughtException", (err) => {
    console.error("Uncaught exception:", err.stack);
    exitHandler({ exit: true });
  });
}
async function getAllUserEvents(provider, publicKey) {
  const pageCapacity = MAX_BATCH_EVENTS_PER_QUERY_EVENTS_REQUEST;
  const allEvents = [];
  let nextCursor = null;
  let events = await provider.queryEvents({
    query: { Sender: publicKey },
    limit: pageCapacity,
    cursor: nextCursor
  });
  while (events.hasNextPage) {
    const userEvents2 = events.data;
    allEvents.push(...userEvents2);
    nextCursor = events.nextCursor;
    events = await provider.queryEvents({
      query: { Sender: publicKey },
      limit: pageCapacity,
      cursor: nextCursor
    });
  }
  const userEvents = events.data;
  allEvents.push(...userEvents);
  return allEvents;
}

// src/managers/coin/create-coin/utils/move-bytecode-template.js
var wasm;
var heap = new Array(128).fill(void 0);
heap.push(void 0, null, true, false);
function getObject(idx) {
  return heap[idx];
}
var heap_next = heap.length;
function dropObject(idx) {
  if (idx < 132)
    return;
  heap[idx] = heap_next;
  heap_next = idx;
}
function takeObject(idx) {
  const ret = getObject(idx);
  dropObject(idx);
  return ret;
}
var WASM_VECTOR_LEN = 0;
var cachedUint8Memory0 = null;
function getUint8Memory0() {
  if (cachedUint8Memory0 === null || cachedUint8Memory0.byteLength === 0) {
    cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);
  }
  return cachedUint8Memory0;
}
var cachedTextEncoder = typeof TextEncoder !== "undefined" ? new TextEncoder("utf-8") : {
  encode: () => {
    throw Error("TextEncoder not available");
  }
};
var encodeString = typeof cachedTextEncoder.encodeInto === "function" ? function(arg, view) {
  return cachedTextEncoder.encodeInto(arg, view);
} : function(arg, view) {
  const buf = cachedTextEncoder.encode(arg);
  view.set(buf);
  return {
    read: arg.length,
    written: buf.length
  };
};
function passStringToWasm0(arg, malloc, realloc) {
  if (realloc === void 0) {
    const buf = cachedTextEncoder.encode(arg);
    const ptr2 = malloc(buf.length, 1) >>> 0;
    getUint8Memory0().subarray(ptr2, ptr2 + buf.length).set(buf);
    WASM_VECTOR_LEN = buf.length;
    return ptr2;
  }
  let len = arg.length;
  let ptr = malloc(len, 1) >>> 0;
  const mem = getUint8Memory0();
  let offset = 0;
  for (; offset < len; offset++) {
    const code = arg.charCodeAt(offset);
    if (code > 127)
      break;
    mem[ptr + offset] = code;
  }
  if (offset !== len) {
    if (offset !== 0) {
      arg = arg.slice(offset);
    }
    ptr = realloc(ptr, len, len = offset + arg.length * 3, 1) >>> 0;
    const view = getUint8Memory0().subarray(ptr + offset, ptr + len);
    const ret = encodeString(arg, view);
    offset += ret.written;
  }
  WASM_VECTOR_LEN = offset;
  return ptr;
}
function isLikeNone(x) {
  return x === void 0 || x === null;
}
var cachedInt32Memory0 = null;
function getInt32Memory0() {
  if (cachedInt32Memory0 === null || cachedInt32Memory0.byteLength === 0) {
    cachedInt32Memory0 = new Int32Array(wasm.memory.buffer);
  }
  return cachedInt32Memory0;
}
function addHeapObject(obj3) {
  if (heap_next === heap.length)
    heap.push(heap.length + 1);
  const idx = heap_next;
  heap_next = heap[idx];
  heap[idx] = obj3;
  return idx;
}
var cachedTextDecoder = typeof TextDecoder !== "undefined" ? new TextDecoder("utf-8", { ignoreBOM: true, fatal: true }) : {
  decode: () => {
    throw Error("TextDecoder not available");
  }
};
if (typeof TextDecoder !== "undefined") {
  cachedTextDecoder.decode();
}
function getStringFromWasm0(ptr, len) {
  ptr = ptr >>> 0;
  return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}
var cachedFloat64Memory0 = null;
function getFloat64Memory0() {
  if (cachedFloat64Memory0 === null || cachedFloat64Memory0.byteLength === 0) {
    cachedFloat64Memory0 = new Float64Array(wasm.memory.buffer);
  }
  return cachedFloat64Memory0;
}
var cachedBigInt64Memory0 = null;
function getBigInt64Memory0() {
  if (cachedBigInt64Memory0 === null || cachedBigInt64Memory0.byteLength === 0) {
    cachedBigInt64Memory0 = new BigInt64Array(wasm.memory.buffer);
  }
  return cachedBigInt64Memory0;
}
function debugString(val) {
  const type = typeof val;
  if (type == "number" || type == "boolean" || val == null) {
    return `${val}`;
  }
  if (type == "string") {
    return `"${val}"`;
  }
  if (type == "symbol") {
    const description = val.description;
    if (description == null) {
      return "Symbol";
    } else {
      return `Symbol(${description})`;
    }
  }
  if (type == "function") {
    const name = val.name;
    if (typeof name == "string" && name.length > 0) {
      return `Function(${name})`;
    } else {
      return "Function";
    }
  }
  if (Array.isArray(val)) {
    const length = val.length;
    let debug = "[";
    if (length > 0) {
      debug += debugString(val[0]);
    }
    for (let i = 1; i < length; i++) {
      debug += ", " + debugString(val[i]);
    }
    debug += "]";
    return debug;
  }
  const builtInMatches = /\[object ([^\]]+)\]/.exec(toString.call(val));
  let className;
  if (builtInMatches.length > 1) {
    className = builtInMatches[1];
  } else {
    return toString.call(val);
  }
  if (className == "Object") {
    try {
      return "Object(" + JSON.stringify(val) + ")";
    } catch (_) {
      return "Object";
    }
  }
  if (val instanceof Error) {
    return `${val.name}: ${val.message}
${val.stack}`;
  }
  return className;
}
function passArray8ToWasm0(arg, malloc) {
  const ptr = malloc(arg.length * 1, 1) >>> 0;
  getUint8Memory0().set(arg, ptr / 1);
  WASM_VECTOR_LEN = arg.length;
  return ptr;
}
function getArrayU8FromWasm0(ptr, len) {
  ptr = ptr >>> 0;
  return getUint8Memory0().subarray(ptr / 1, ptr / 1 + len);
}
function update_identifiers(binary, map) {
  try {
    const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
    const ptr0 = passArray8ToWasm0(binary, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    wasm.update_identifiers(retptr, ptr0, len0, addHeapObject(map));
    var r0 = getInt32Memory0()[retptr / 4 + 0];
    var r1 = getInt32Memory0()[retptr / 4 + 1];
    var r2 = getInt32Memory0()[retptr / 4 + 2];
    var r3 = getInt32Memory0()[retptr / 4 + 3];
    if (r3) {
      throw takeObject(r2);
    }
    var v2 = getArrayU8FromWasm0(r0, r1).slice();
    wasm.__wbindgen_free(r0, r1 * 1);
    return v2;
  } finally {
    wasm.__wbindgen_add_to_stack_pointer(16);
  }
}
function update_constants(binary, new_value, expected_value, expected_type) {
  try {
    const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
    const ptr0 = passArray8ToWasm0(binary, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArray8ToWasm0(new_value, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    const ptr2 = passArray8ToWasm0(expected_value, wasm.__wbindgen_malloc);
    const len2 = WASM_VECTOR_LEN;
    const ptr3 = passStringToWasm0(expected_type, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len3 = WASM_VECTOR_LEN;
    wasm.update_constants(retptr, ptr0, len0, ptr1, len1, ptr2, len2, ptr3, len3);
    var r0 = getInt32Memory0()[retptr / 4 + 0];
    var r1 = getInt32Memory0()[retptr / 4 + 1];
    var r2 = getInt32Memory0()[retptr / 4 + 2];
    var r3 = getInt32Memory0()[retptr / 4 + 3];
    if (r3) {
      throw takeObject(r2);
    }
    var v5 = getArrayU8FromWasm0(r0, r1).slice();
    wasm.__wbindgen_free(r0, r1 * 1);
    return v5;
  } finally {
    wasm.__wbindgen_add_to_stack_pointer(16);
  }
}
function handleError(f, args) {
  try {
    return f.apply(this, args);
  } catch (e) {
    wasm.__wbindgen_exn_store(addHeapObject(e));
  }
}
async function __wbg_load(module2, imports) {
  if (typeof Response === "function" && module2 instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming === "function") {
      try {
        return await WebAssembly.instantiateStreaming(module2, imports);
      } catch (e) {
        if (module2.headers.get("Content-Type") != "application/wasm") {
          console.warn(
            "`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",
            e
          );
        } else {
          throw e;
        }
      }
    }
    const bytes = await module2.arrayBuffer();
    return await WebAssembly.instantiate(bytes, imports);
  } else {
    const instance = await WebAssembly.instantiate(module2, imports);
    if (instance instanceof WebAssembly.Instance) {
      return { instance, module: module2 };
    } else {
      return instance;
    }
  }
}
function __wbg_get_imports() {
  const imports = {};
  imports.wbg = {};
  imports.wbg.__wbindgen_object_drop_ref = function(arg0) {
    takeObject(arg0);
  };
  imports.wbg.__wbindgen_string_get = function(arg0, arg1) {
    const obj3 = getObject(arg1);
    const ret = typeof obj3 === "string" ? obj3 : void 0;
    var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len1 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len1;
    getInt32Memory0()[arg0 / 4 + 0] = ptr1;
  };
  imports.wbg.__wbindgen_is_bigint = function(arg0) {
    const ret = typeof getObject(arg0) === "bigint";
    return ret;
  };
  imports.wbg.__wbindgen_bigint_from_u64 = function(arg0) {
    const ret = BigInt.asUintN(64, arg0);
    return addHeapObject(ret);
  };
  imports.wbg.__wbindgen_jsval_eq = function(arg0, arg1) {
    const ret = getObject(arg0) === getObject(arg1);
    return ret;
  };
  imports.wbg.__wbindgen_error_new = function(arg0, arg1) {
    const ret = new Error(getStringFromWasm0(arg0, arg1));
    return addHeapObject(ret);
  };
  imports.wbg.__wbindgen_boolean_get = function(arg0) {
    const v = getObject(arg0);
    const ret = typeof v === "boolean" ? v ? 1 : 0 : 2;
    return ret;
  };
  imports.wbg.__wbindgen_is_string = function(arg0) {
    const ret = typeof getObject(arg0) === "string";
    return ret;
  };
  imports.wbg.__wbindgen_is_object = function(arg0) {
    const val = getObject(arg0);
    const ret = typeof val === "object" && val !== null;
    return ret;
  };
  imports.wbg.__wbindgen_is_undefined = function(arg0) {
    const ret = getObject(arg0) === void 0;
    return ret;
  };
  imports.wbg.__wbindgen_in = function(arg0, arg1) {
    const ret = getObject(arg0) in getObject(arg1);
    return ret;
  };
  imports.wbg.__wbindgen_shr = function(arg0, arg1) {
    const ret = getObject(arg0) >> getObject(arg1);
    return addHeapObject(ret);
  };
  imports.wbg.__wbindgen_object_clone_ref = function(arg0) {
    const ret = getObject(arg0);
    return addHeapObject(ret);
  };
  imports.wbg.__wbindgen_jsval_loose_eq = function(arg0, arg1) {
    const ret = getObject(arg0) == getObject(arg1);
    return ret;
  };
  imports.wbg.__wbindgen_number_get = function(arg0, arg1) {
    const obj3 = getObject(arg1);
    const ret = typeof obj3 === "number" ? obj3 : void 0;
    getFloat64Memory0()[arg0 / 8 + 1] = isLikeNone(ret) ? 0 : ret;
    getInt32Memory0()[arg0 / 4 + 0] = !isLikeNone(ret);
  };
  imports.wbg.__wbg_String_88810dfeb4021902 = function(arg0, arg1) {
    const ret = String(getObject(arg1));
    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len1;
    getInt32Memory0()[arg0 / 4 + 0] = ptr1;
  };
  imports.wbg.__wbindgen_number_new = function(arg0) {
    const ret = arg0;
    return addHeapObject(ret);
  };
  imports.wbg.__wbindgen_bigint_from_u128 = function(arg0, arg1) {
    const ret = BigInt.asUintN(64, arg0) << BigInt(64) | BigInt.asUintN(64, arg1);
    return addHeapObject(ret);
  };
  imports.wbg.__wbindgen_string_new = function(arg0, arg1) {
    const ret = getStringFromWasm0(arg0, arg1);
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_getwithrefkey_5e6d9547403deab8 = function(arg0, arg1) {
    const ret = getObject(arg0)[getObject(arg1)];
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_set_841ac57cff3d672b = function(arg0, arg1, arg2) {
    getObject(arg0)[takeObject(arg1)] = takeObject(arg2);
  };
  imports.wbg.__wbindgen_is_function = function(arg0) {
    const ret = typeof getObject(arg0) === "function";
    return ret;
  };
  imports.wbg.__wbg_get_44be0491f933a435 = function(arg0, arg1) {
    const ret = getObject(arg0)[arg1 >>> 0];
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_length_fff51ee6522a1a18 = function(arg0) {
    const ret = getObject(arg0).length;
    return ret;
  };
  imports.wbg.__wbg_new_898a68150f225f2e = function() {
    const ret = new Array();
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_next_526fc47e980da008 = function(arg0) {
    const ret = getObject(arg0).next;
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_next_ddb3312ca1c4e32a = function() {
    return handleError(function(arg0) {
      const ret = getObject(arg0).next();
      return addHeapObject(ret);
    }, arguments);
  };
  imports.wbg.__wbg_done_5c1f01fb660d73b5 = function(arg0) {
    const ret = getObject(arg0).done;
    return ret;
  };
  imports.wbg.__wbg_value_1695675138684bd5 = function(arg0) {
    const ret = getObject(arg0).value;
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_iterator_97f0c81209c6c35a = function() {
    const ret = Symbol.iterator;
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_get_97b561fb56f034b5 = function() {
    return handleError(function(arg0, arg1) {
      const ret = Reflect.get(getObject(arg0), getObject(arg1));
      return addHeapObject(ret);
    }, arguments);
  };
  imports.wbg.__wbg_call_cb65541d95d71282 = function() {
    return handleError(function(arg0, arg1) {
      const ret = getObject(arg0).call(getObject(arg1));
      return addHeapObject(ret);
    }, arguments);
  };
  imports.wbg.__wbg_new_b51585de1b234aff = function() {
    const ret = new Object();
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_set_502d29070ea18557 = function(arg0, arg1, arg2) {
    getObject(arg0)[arg1 >>> 0] = takeObject(arg2);
  };
  imports.wbg.__wbg_isArray_4c24b343cb13cfb1 = function(arg0) {
    const ret = Array.isArray(getObject(arg0));
    return ret;
  };
  imports.wbg.__wbg_instanceof_ArrayBuffer_39ac22089b74fddb = function(arg0) {
    let result;
    try {
      result = getObject(arg0) instanceof ArrayBuffer;
    } catch {
      result = false;
    }
    const ret = result;
    return ret;
  };
  imports.wbg.__wbg_isSafeInteger_bb8e18dd21c97288 = function(arg0) {
    const ret = Number.isSafeInteger(getObject(arg0));
    return ret;
  };
  imports.wbg.__wbg_entries_e51f29c7bba0c054 = function(arg0) {
    const ret = Object.entries(getObject(arg0));
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_buffer_085ec1f694018c4f = function(arg0) {
    const ret = getObject(arg0).buffer;
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_new_8125e318e6245eed = function(arg0) {
    const ret = new Uint8Array(getObject(arg0));
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_set_5cf90238115182c3 = function(arg0, arg1, arg2) {
    getObject(arg0).set(getObject(arg1), arg2 >>> 0);
  };
  imports.wbg.__wbg_length_72e2208bbc0efc61 = function(arg0) {
    const ret = getObject(arg0).length;
    return ret;
  };
  imports.wbg.__wbg_instanceof_Uint8Array_d8d9cb2b8e8ac1d4 = function(arg0) {
    let result;
    try {
      result = getObject(arg0) instanceof Uint8Array;
    } catch {
      result = false;
    }
    const ret = result;
    return ret;
  };
  imports.wbg.__wbindgen_bigint_get_as_i64 = function(arg0, arg1) {
    const v = getObject(arg1);
    const ret = typeof v === "bigint" ? v : void 0;
    getBigInt64Memory0()[arg0 / 8 + 1] = isLikeNone(ret) ? BigInt(0) : ret;
    getInt32Memory0()[arg0 / 4 + 0] = !isLikeNone(ret);
  };
  imports.wbg.__wbindgen_debug_string = function(arg0, arg1) {
    const ret = debugString(getObject(arg1));
    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len1;
    getInt32Memory0()[arg0 / 4 + 0] = ptr1;
  };
  imports.wbg.__wbindgen_throw = function(arg0, arg1) {
    throw new Error(getStringFromWasm0(arg0, arg1));
  };
  imports.wbg.__wbindgen_memory = function() {
    const ret = wasm.memory;
    return addHeapObject(ret);
  };
  return imports;
}
function __wbg_init_memory(imports, maybe_memory) {
}
function __wbg_finalize_init(instance, module2) {
  wasm = instance.exports;
  __wbg_init.__wbindgen_wasm_module = module2;
  cachedBigInt64Memory0 = null;
  cachedFloat64Memory0 = null;
  cachedInt32Memory0 = null;
  cachedUint8Memory0 = null;
  return wasm;
}
async function __wbg_init(input) {
  if (wasm !== void 0)
    return wasm;
  const imports = __wbg_get_imports();
  if (typeof input === "string" || typeof Request === "function" && input instanceof Request || typeof URL === "function" && input instanceof URL) {
    input = fetch(input);
  }
  __wbg_init_memory(imports);
  const { instance, module: module2 } = await __wbg_load(await input, imports);
  return __wbg_finalize_init(instance, module2);
}
var move_bytecode_template_default = __wbg_init;

// src/managers/coin/create-coin/utils/template.ts
var import_bcs = require("@mysten/sui.js-0.51.2/bcs");
var import_utils2 = require("@mysten/sui.js-0.51.2/utils");
var import_bignumber = __toESM(require("bignumber.js"));
var getCoinTemplateByteCode = () => "a11ceb0b060000000a01000c020c1e032a2d04570a05616307c401e70108ab0360068b04570ae204050ce704360007010d02060212021302140000020001020701000002010c01000102030c0100010404020005050700000a000100011105060100020808090102020b0c010100030e0501010c030f0e01010c04100a0b00050c030400010402070307050d040f02080007080400020b020108000b03010800010a02010805010900010b01010900010800070900020a020a020a020b01010805070804020b030109000b0201090001060804010504070b030109000305070804010b0301080002090005010b020108000d434f494e5f54454d504c4154450c436f696e4d65746164617461064f7074696f6e0b5472656173757279436170095478436f6e746578740355726c04636f696e0d636f696e5f74656d706c6174650f6372656174655f63757272656e63790b64756d6d795f6669656c6404696e6974116d696e745f616e645f7472616e73666572156e65775f756e736166655f66726f6d5f6279746573066f7074696f6e137075626c69635f73686172655f6f626a6563740f7075626c69635f7472616e736665720673656e64657204736f6d65087472616e736665720a74785f636f6e746578740375726c0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000020201090a02070653594d424f4c0a0205044e414d450a020c0b4445534352495054494f4e0a02040375726c030800000000000000000520000000000000000000000000000000000000000000000000000000000000000000020109010000000002190b0007000701070207030704110738000a0138010c020c030d0307050a012e11060b0138020b03070638030b0238040200";
var getCoinTemplateSameNameAndSymbolByteCode = () => "a11ceb0b060000000a01000c020c1e032a2d04570a05616307c401e70108ab0360068b044f0ada04050cdf04360007010d02060212021302140000020001020701000002010c01000102030c0100010404020005050700000a000100011105060100020808090102020b0c010100030e0501010c030f0e01010c04100a0b00050c030400010402070307050d040f02080007080400020b020108000b03010800010a02010805010900010b01010900010800070900020a020a020a020b01010805070804020b030109000b0201090001060804010504070b030109000305070804010b0301080002090005010b020108000d434f494e5f54454d504c4154450c436f696e4d65746164617461064f7074696f6e0b5472656173757279436170095478436f6e746578740355726c04636f696e0d636f696e5f74656d706c6174650f6372656174655f63757272656e63790b64756d6d795f6669656c6404696e6974116d696e745f616e645f7472616e73666572156e65775f756e736166655f66726f6d5f6279746573066f7074696f6e137075626c69635f73686172655f6f626a6563740f7075626c69635f7472616e736665720673656e64657204736f6d65087472616e736665720a74785f636f6e746578740375726c0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000020201090a02070653594d424f4c0a020c0b4445534352495054494f4e0a02040375726c030800000000000000000520000000000000000000000000000000000000000000000000000000000000000000020109010000000002190b0007000701070107020703110738000a0138010c020c030d0307040a012e11060b0138020b03070538030b0238040200";
var Address = import_bcs.bcs.bytes(32).transform({
  // To change the input type, you need to provide a type definition for the input
  input: (val) => (0, import_utils2.fromHEX)(val),
  output: (val) => (0, import_utils2.toHEX)(val)
});
var updateDecimals = (modifiedByteCode, decimals = 9) => update_constants(
  modifiedByteCode,
  import_bcs.bcs.u8().serialize(decimals).toBytes(),
  import_bcs.bcs.u8().serialize(9).toBytes(),
  "U8"
);
var updateSymbol = (modifiedByteCode, symbol) => update_constants(
  modifiedByteCode,
  import_bcs.bcs.string().serialize(symbol.trim()).toBytes(),
  import_bcs.bcs.string().serialize("SYMBOL").toBytes(),
  "Vector(U8)"
);
var updateName = (modifiedByteCode, name) => {
  return update_constants(
    modifiedByteCode,
    import_bcs.bcs.string().serialize(name.trim()).toBytes(),
    import_bcs.bcs.string().serialize("NAME").toBytes(),
    "Vector(U8)"
  );
};
var updateDescription = (modifiedByteCode, description) => update_constants(
  modifiedByteCode,
  import_bcs.bcs.string().serialize(description.trim()).toBytes(),
  import_bcs.bcs.string().serialize("DESCRIPTION").toBytes(),
  "Vector(U8)"
);
var updateUrl = (modifiedByteCode, url) => update_constants(
  modifiedByteCode,
  import_bcs.bcs.string().serialize(url).toBytes(),
  import_bcs.bcs.string().serialize("url").toBytes(),
  "Vector(U8)"
);
var updateMintAmount = (modifiedByteCode, supply) => update_constants(
  modifiedByteCode,
  import_bcs.bcs.u64().serialize(supply.toString()).toBytes(),
  import_bcs.bcs.u64().serialize(0).toBytes(),
  "U64"
);
var updateTreasuryCapRecipient = (modifiedByteCode, recipient) => update_constants(
  modifiedByteCode,
  Address.serialize(recipient).toBytes(),
  Address.serialize((0, import_utils2.normalizeSuiAddress)("0x0")).toBytes(),
  "Address"
);
var getBytecode = (info) => {
  const isSameNameAndSymbol = info.symbol === info.name;
  const templateByteCode = (0, import_utils2.fromHEX)(
    isSameNameAndSymbol ? getCoinTemplateSameNameAndSymbolByteCode() : getCoinTemplateByteCode()
  );
  const modifiedByteCode = update_identifiers(templateByteCode, {
    COIN_TEMPLATE: info.symbol.toUpperCase().replaceAll(" ", "_"),
    coin_template: info.symbol.toLowerCase().replaceAll(" ", "_")
  });
  let updated = updateDecimals(modifiedByteCode, info.decimals);
  if (isSameNameAndSymbol) {
    updated = updateSymbol(updated, info.symbol);
  } else {
    updated = updateSymbol(updated, info.symbol);
    updated = updateName(updated, info.name);
  }
  updated = updateSymbol(updated, info.symbol);
  updated = updateName(updated, info.name);
  updated = updateDescription(updated, info.description ?? "");
  updated = updateUrl(updated, info.imageUrl ?? "");
  const supply = (0, import_bignumber.default)(info.totalSupply).times((0, import_bignumber.default)(10).pow(info.decimals || 9));
  updated = updateMintAmount(updated, supply);
  updated = updateTreasuryCapRecipient(updated, info.fixedSupply ? (0, import_utils2.normalizeSuiAddress)("0x0") : info.recipient);
  return updated;
};

// src/managers/coin/create-coin/utils/validation.ts
var import_bignumber2 = __toESM(require("bignumber.js"));

// src/common/reg-exp.ts
var CREATE_COIN_VALIDATION_REGEXP = {
  COIN_NAME: /^[a-zA-Z0-9\s]+$/,
  COIN_SYMBOL: /^[a-zA-Z0-9_]+$/,
  TOTAL_SUPPLY: /^\d+$/
};
var BASE_64_IMAGE_REGEXP = /^data:image\/(png|jpeg|jpg|gif);base64,([A-Za-z0-9+/]+={0,2})$/;
var URL_REGEXP = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;

// src/managers/coin/create-coin/utils/validation.ts
function validateCoinName(coinName) {
  return typeof coinName === "string" && coinName.trim() !== "" && CREATE_COIN_VALIDATION_REGEXP.COIN_NAME.test(coinName);
}
function validateCoinSymbol(coinSymbol) {
  const isCoinSymbolIsValid = typeof coinSymbol === "string" && CREATE_COIN_VALIDATION_REGEXP.COIN_SYMBOL.test(coinSymbol);
  return isCoinSymbolIsValid;
}
function validateCoinDescription(coinDescription) {
  return typeof coinDescription === "string";
}
function validateCoinDecimals(coinDecimals) {
  const decimalsAsInt = parseInt(coinDecimals, 10);
  return typeof decimalsAsInt === "number" && !isNaN(decimalsAsInt) && decimalsAsInt >= 0 && decimalsAsInt <= 11 && decimalsAsInt === Math.floor(decimalsAsInt);
}
function calculateMaxTotalSupply(decimals) {
  const pow = 19 - parseInt(decimals);
  const output = new import_bignumber2.default(10).pow(pow).minus(1);
  return output;
}
function validateTotalSupply(totalSupply, decimals) {
  if (typeof totalSupply !== "string" || !CREATE_COIN_VALIDATION_REGEXP.TOTAL_SUPPLY.test(totalSupply)) {
    return false;
  }
  const totalSupplyBigNumber = new import_bignumber2.default(totalSupply);
  const maxTotalSupply = calculateMaxTotalSupply(decimals);
  const isTotalSupplyIsValid = totalSupplyBigNumber.isLessThanOrEqualTo(maxTotalSupply);
  return isTotalSupplyIsValid;
}
function validateCoinImage(coinImage) {
  return coinImage === "" || BASE_64_IMAGE_REGEXP.test(coinImage) || URL_REGEXP.test(coinImage);
}

// src/managers/coin/CoinManager.ts
var _CoinManagerSingleton = class _CoinManagerSingleton {
  /**
   * Constructs a new instance of the SuiProvider class with the provided SUI provider URL.
   *
   * @private
   * @constructor
   * @param {string} suiProviderUrl - The URL of the SUI provider.
   */
  constructor(suiProviderUrl) {
    this.allCoinsCache = /* @__PURE__ */ new Map();
    this.coinsByProviderNameCache = /* @__PURE__ */ new Map();
    this.provider = new import_client.SuiClient({ url: suiProviderUrl });
  }
  /**
   * @public
   * @method getInstance
   * @description Gets the singleton instance of CoinManagerSingleton.
   * @param {Providers} [providers] - The list of providers.
   * @param {string} [suiProviderUrl] - Url of SUI provider.
   * @return {CoinManagerSingleton} The singleton instance of CoinManagerSingleton.
   */
  static getInstance(providers, suiProviderUrl) {
    if (!_CoinManagerSingleton._instance) {
      if (providers === void 0) {
        throw new Error("[Coin] Providers are required in arguments to create CoinManager instance.");
      }
      if (suiProviderUrl === void 0) {
        throw new Error("[Coin] SUI provider url is required in arguments to create CoinManager instance.");
      }
      const instance = new _CoinManagerSingleton(suiProviderUrl);
      instance.init(providers);
      _CoinManagerSingleton._instance = instance;
    }
    return _CoinManagerSingleton._instance;
  }
  /**
   * @private
   * @method init
   * @description Initializes the CoinManagerSingleton instance.
   * @param {Providers} providers - The list of providers.
   * @return {void}
   */
  init(providers) {
    providers.forEach((provider) => {
      provider.on("cachesUpdate", this.handleCacheUpdate.bind(this));
      provider.flushBuffer();
    });
  }
  /**
   * @private
   * @method handleCacheUpdate
   * @description Handles cache updates.
   * @param {UpdatedCoinsCache} updateData - The update data.
   * @return {void}
   */
  handleCacheUpdate(updateData) {
    console.log("[COIN MANAGER] Update data received:", updateData.provider);
    const { provider, data: coins } = updateData;
    const coinsByProviderMap = /* @__PURE__ */ new Map();
    coins.forEach((coin) => {
      const coinType = coin.type;
      const coinInAllCoinsMap = this.allCoinsCache.get(coinType);
      if (coinInAllCoinsMap) {
        if (coinType === LONG_SUI_COIN_TYPE) {
          this.allCoinsCache.set(SHORT_SUI_COIN_TYPE, coin);
        } else if (coinType === SHORT_SUI_COIN_TYPE) {
          this.allCoinsCache.set(LONG_SUI_COIN_TYPE, coin);
        }
        const symbolExists = !!coinInAllCoinsMap.symbol;
        if (!symbolExists) {
          this.allCoinsCache.set(coinType, coin);
        }
      } else {
        if (coinType === LONG_SUI_COIN_TYPE) {
          this.allCoinsCache.set(SHORT_SUI_COIN_TYPE, coin);
        } else if (coinType === SHORT_SUI_COIN_TYPE) {
          this.allCoinsCache.set(LONG_SUI_COIN_TYPE, coin);
        }
        this.allCoinsCache.set(coinType, coin);
      }
      const coinInCoinsByProviderMap = coinsByProviderMap.get(coinType);
      if (!coinInCoinsByProviderMap) {
        coinsByProviderMap.set(coinType, coin);
      }
    });
    this.coinsByProviderNameCache.set(provider, coinsByProviderMap);
  }
  /**
   * @public
   * @method getCoinByType
   * @deprecated
   * @description Gets coin data by coin type.
   * @param {string} coinType - The coin type.
   * @return {CommonCoinData} The coin data.
   * @throws {Error} Throws an error if the coin is not found.
   */
  getCoinByType(coinType) {
    const coinData = this.allCoinsCache.get(coinType);
    if (coinData === void 0) {
      throw new Error(`[CoinManager] Cannot find coin by type "${coinType}".`);
    }
    return coinData;
  }
  /**
   * @public
   * @method getCoinByType2
   * @description Retrieves coin data by its type from the cache or asynchronously.
   * @param {string} coinType - The type of the coin to retrieve.
   * @return {Promise<CommonCoinData | null>} The coin data if found or fetched, otherwise null.
   */
  async getCoinByType2(coinType) {
    const coinData = this.allCoinsCache.get(coinType);
    if (coinData === void 0) {
      console.warn(`[getCoinByType2] No decimals for coin ${coinType}, so fetching...`);
      const fetchedCoinMetadata = await this.fetchCoinMetadata(coinType);
      return fetchedCoinMetadata === null ? null : { decimals: fetchedCoinMetadata.decimals, type: coinType, symbol: fetchedCoinMetadata.symbol };
    }
    return coinData;
  }
  /**
   * @public
   * @method getCoinsByProviderMap
   * @description Gets coins by provider map.
   * @return {Map<string, Map<string, CommonCoinData>>} Coins by provider map.
   */
  getCoinsByProviderMap() {
    return this.coinsByProviderNameCache;
  }
  /**
   * @public
   * @method getAllCoins
   * @description Gets all coins.
   * @return {Map<string, CommonCoinData>} All coins.
   */
  getAllCoins() {
    return this.allCoinsCache;
  }
  /**
   * Fetches metadata for a specific coin asynchronously.
   *
   * @public
   * @param {string} coinType - The type of the coin for which to fetch metadata.
   * @return {Promise<CoinMetadata | null>} A promise that resolves to the metadata of the specified coin,
   * or null if no metadata is available.
   */
  async fetchCoinMetadata(coinType) {
    try {
      const coinMetadata = await this.provider.getCoinMetadata({ coinType });
      return coinMetadata;
    } catch (e) {
      console.warn(
        `[CoinManager.fetchCoinMetadata] error occured while fetching metadata for ${coinType} from RPC: `,
        e
      );
      return null;
    }
  }
  /**
   * Gets a transaction for creating a coin on SUI blockchain.
   *
   * @param {CreateCoinTransactionParams} params - Parameters for creating the coin.
   * @param {string} params.name - The name of the coin.
   * @param {string} params.symbol - The symbol of the coin.
   * @param {string} params.decimals - The number of decimals for the coin.
   * @param {boolean} params.fixedSupply - Indicates if the coin has a fixed supply.
   * @param {string} params.mintAmount - The initial mint amount for the coin.
   * @param {string} params.url - The URL associated with the coin.
   * @param {string} params.description - The description of the coin.
   * @param {string} params.signerAddress - The address of the signer.
   * @param {TransactionBlock} [params.transaction] - The optional transaction block.
   * @return {Promise<TransactionBlock>} - A promise resolving to the created transaction block.
   * @throws {Error} If the request to create the coin or params validation fails.
   */
  static async getCreateCoinTransaction(params) {
    try {
      _CoinManagerSingleton.validateCreateCoinParams(params);
      const { name, symbol, decimals, fixedSupply, mintAmount, url, description, signerAddress, transaction } = params;
      const tx = transaction ?? new import_transactions.TransactionBlock();
      await move_bytecode_template_default(_CoinManagerSingleton.COIN_CREATION_BYTECODE_TEMPLATE_URL);
      const [upgradeCap] = tx.publish({
        modules: [
          [
            ...getBytecode({
              name,
              symbol,
              totalSupply: mintAmount,
              description,
              fixedSupply,
              decimals: +decimals,
              imageUrl: url,
              recipient: signerAddress
            })
          ]
        ],
        dependencies: [(0, import_utils3.normalizeSuiAddress)("0x1"), (0, import_utils3.normalizeSuiAddress)("0x2")]
      });
      tx.transferObjects([upgradeCap], tx.pure(signerAddress));
      return tx;
    } catch (error) {
      console.error("[CoinManager.getCreateCoinTransaction] error: ", error);
      throw error;
    }
  }
  /**
   * Validates parameters for creating the coin.
   *
   * @param {CreateCoinTransactionParams} params - Parameters for creating the coin.
   * @throws {Error} If the validation fails.
   */
  static validateCreateCoinParams({
    name,
    symbol,
    decimals,
    mintAmount,
    url,
    description,
    signerAddress
  }) {
    if (!validateCoinName(name)) {
      throw new InvalidCoinNameError(`[validateCreateCoinParams] Coin name ${name} is invalid`);
    }
    if (!validateCoinSymbol(symbol)) {
      throw new InvalidCoinSymbolError(`[validateCreateCoinParams] Coin symbol ${symbol} is invalid`);
    }
    if (!validateCoinDecimals(decimals)) {
      throw new InvalidCoinDecimalsError(`[validateCreateCoinParams] Coin decimals ${decimals} are invalid`);
    }
    if (!validateTotalSupply(mintAmount, decimals)) {
      throw new InvalidCoinTotalSupplyError(`[validateCreateCoinParams] Total supply ${mintAmount} is invalid`);
    }
    if (!validateCoinDescription(description)) {
      throw new InvalidCoinDescriptionError(`[validateCreateCoinParams] Coin description ${description} is invalid`);
    }
    if (!validateCoinImage(url)) {
      throw new InvalidCoinImageError(`[validateCreateCoinParams] Coin image ${url} is invalid`);
    }
    if (!(0, import_utils3.isValidSuiAddress)(signerAddress)) {
      throw new InvalidSignerAddressError(`[validateCreateCoinParams] Signer address ${signerAddress} is invalid`);
    }
    if (name.trim() === description.trim()) {
      throw new NameEqualsToDescriptionError(
        `[validateCreateCoinParams] Coin name ${name} and coin description ${description} are equal`
      );
    }
    if (symbol.trim() === description.trim()) {
      throw new SymbolEqualsToDescriptionError(
        `[validateCreateCoinParams] Coin symbol ${symbol} and coin description ${description} are equal`
      );
    }
  }
};
_CoinManagerSingleton.COIN_CREATION_BYTECODE_TEMPLATE_URL = "https://www.suicoins.com/move_bytecode_template_bg.wasm";
var CoinManagerSingleton = _CoinManagerSingleton;

// src/managers/RouteManager.ts
var import_bignumber5 = __toESM(require("bignumber.js"));

// src/errors/NoRoutesError.ts
var NoRoutesError = class extends Error {
  /**
   * Creates an instance of NoRoutesError.
   * @constructor
   * @param {string} msg - The error message.
   */
  constructor(msg) {
    super(msg);
  }
};

// src/providers/utils/isSuiCoinType.ts
function isSuiCoinType(coinType) {
  return coinType === LONG_SUI_COIN_TYPE || coinType === SHORT_SUI_COIN_TYPE;
}

// src/managers/utils.ts
var import_ed255192 = require("@mysten/sui.js/keypairs/ed25519");
var import_utils6 = require("@mysten/sui.js/utils");

// src/providers/utils/hasPath.ts
function hasPath(coinA, coinB, pathMap) {
  const keyAB = `${coinA}-${coinB}`;
  const keyBA = `${coinB}-${coinA}`;
  return pathMap.has(keyAB) || pathMap.has(keyBA);
}

// src/providers/utils/tryCatchWrapper.ts
async function tryCatchWrapper(callback, ...args) {
  try {
    const result = await callback(...args);
    return result;
  } catch (error) {
    if (error instanceof Error && error.message.includes("From/To coin is undefined")) {
    } else {
      console.error("Error:", error);
    }
    return null;
  }
}

// src/managers/WalletManager.ts
var import_ed25519 = require("@mysten/sui.js/keypairs/ed25519");
var import_transactions2 = require("@mysten/sui.js/transactions");
var import_transactions3 = require("@mysten/sui.js-0.51.2/transactions");
var import_utils4 = require("@mysten/sui.js/utils");
var import_bignumber3 = __toESM(require("bignumber.js"));
var import_bech322 = require("bech32");

// src/managers/WalletManager.utils.ts
var import_bech32 = require("bech32");
function isValidBech32(input) {
  try {
    import_bech32.bech32.decode(input);
    return true;
  } catch (error) {
    if (error instanceof Error) {
      console.warn("Invalid Bech32 format:", error.message);
    } else {
      console.warn("Invalid Bech32 format:", error);
    }
    return false;
  }
}
function isValidHex(input) {
  const hexRegex = /^[0-9a-fA-F]+$/;
  const matches = input.match(hexRegex);
  const isValid = matches !== null;
  return isValid;
}
function determineFormat(input) {
  if (isValidBech32(input)) {
    return "bech32";
  } else if (isValidHex(input)) {
    return "hex";
  } else {
    throw new Error("Unrecognized format");
  }
}

// src/managers/WalletManager.ts
var WalletManagerSingleton = class _WalletManagerSingleton {
  /**
   * @constructor
   * @param {SuiClient} provider - The SuiClient provider.
   * @param {CoinManagerSingleton} coinManager - The coin manager instance.
   */
  constructor(provider, coinManager) {
    this.provider = provider;
    this.coinManager = coinManager;
  }
  /**
   * @public
   * @method getInstance
   * @description Gets the singleton instance of WalletManager.
   * @param {SuiClient} [provider] - The SuiClient provider.
   * @param {CoinManagerSingleton} [coinManager] - The coin manager instance.
   * @return {WalletManagerSingleton} The singleton instance of WalletManager.
   * @throws {Error} Throws an error if provider or coinManager are not provided.
   */
  static getInstance(provider, coinManager) {
    if (!_WalletManagerSingleton._instance) {
      if (provider === void 0) {
        throw new Error("[Wallet] Provider is required in arguments to create WalletManager instance.");
      } else if (coinManager === void 0) {
        throw new Error(
          "[Wallet] CoinManagerSingleton instance is required in arguments to create WalletManager instance."
        );
      }
      const instance = new _WalletManagerSingleton(provider, coinManager);
      _WalletManagerSingleton._instance = instance;
    }
    return _WalletManagerSingleton._instance;
  }
  /**
   * Generates a new Ed25519 key pair for a wallet, consisting of a public key and a private key.
   * @return {{ publicKey: string, privateKey: string }} An object with the public, private key (in hexadecimal format).
   */
  static generateWallet() {
    const keypair = import_ed25519.Ed25519Keypair.generate();
    const publicKey = keypair.getPublicKey().toSuiAddress();
    const privateKey = _WalletManagerSingleton.getPrivateKeyFromKeyPair(keypair);
    return { publicKey, privateKey };
  }
  /**
   * Generates an Ed25519 key pair from a provided private key in hex or Bech32 format.
   * @param {string} privateKey - The private key in hex or Bech32 format.
   * @throws {Error} Throws an error if the provided privateKey is not in hex or Bech32 format.
   * @return {Ed25519Keypair} An Ed25519 key pair.
   */
  static getKeyPairFromPrivateKey(privateKey) {
    const format = determineFormat(privateKey);
    switch (format) {
      case "hex":
        return _WalletManagerSingleton.getKeyPairFromPrivateKeyHex(privateKey);
      case "bech32":
        return _WalletManagerSingleton.getKeyPairFromPrivateKeyBech32(privateKey);
      default:
        throw new Error("[WalletManagerSingleton] Unsupported keypair format");
    }
  }
  /**
   * Generates an Ed25519 key pair from a provided private key in hexadecimal format.
   * @param {string} privateKeyHex - The private key in hexadecimal format.
   * @return {Ed25519Keypair} An Ed25519 key pair.
   */
  static getKeyPairFromPrivateKeyHex(privateKeyHex) {
    const keypair = import_ed25519.Ed25519Keypair.fromSecretKey(Buffer.from(privateKeyHex, "hex"));
    return keypair;
  }
  /**
   * Generates an Ed25519 key pair from a provided private key in bech32 format.
   * @param {string} privateKeyBech32 - The private key in bech32 format.
   * @return {Ed25519Keypair} An Ed25519 key pair.
   */
  static getKeyPairFromPrivateKeyBech32(privateKeyBech32) {
    const privateKeyConvertedFromBech32ToHex = _WalletManagerSingleton.bech32ToHex(privateKeyBech32);
    const keypair = import_ed25519.Ed25519Keypair.fromSecretKey(Buffer.from(privateKeyConvertedFromBech32ToHex, "hex"));
    return keypair;
  }
  /**
   * Converts a Bech32 encoded address to its hexadecimal representation.
   * @param {string} bech32Address - The Bech32 encoded address to convert.
   * @return {string} The hexadecimal representation of the given Bech32 address.
   */
  static bech32ToHex(bech32Address) {
    try {
      const decoded = import_bech322.bech32.decode(bech32Address);
      const buffer = Buffer.from(import_bech322.bech32.fromWords(decoded.words));
      let hex = buffer.toString("hex");
      if (hex.startsWith("00")) {
        hex = hex.substring(2);
      }
      return hex;
    } catch (error) {
      console.error("Error converting Bech32 address to hex:", error);
      return "";
    }
  }
  /**
   * Retrieves the private key from the provided key pair.
   *
   * @param {Ed25519Keypair} keypair - The key pair containing the private key.
   * @return {string} The private key in hexadecimal format.
   */
  static getPrivateKeyFromKeyPair(keypair) {
    const privateKeyBase64 = keypair.export();
    const privateKeyHex = Buffer.from(privateKeyBase64.privateKey, "base64").toString("hex");
    return privateKeyHex;
  }
  /**
   * Generates an Ed25519 key pair from a provided mnemonic.
   * @param {string} mnemonic - Seed phrase of the wallet.
   * @return {Ed25519Keypair} An Ed25519 key pair.
   */
  static getKeyPairFromMnemonic(mnemonic) {
    const normalized = normalizeMnemonic(mnemonic);
    const keypair = import_ed25519.Ed25519Keypair.deriveKeypair(normalized);
    return keypair;
  }
  /**
   * Retrieves a withdrawal transaction for SUI tokens.
   *
   * @return {Promise<TransactionBlock>} A Promise that resolves to a TransactionBlock.
   */
  static async getWithdrawSuiTransaction({
    address,
    amount
  }) {
    const tx = new import_transactions2.TransactionBlock();
    const amountBigNumber = new import_bignumber3.default(amount);
    const amountInMists = amountBigNumber.multipliedBy(SUI_DENOMINATOR).toString();
    const [coin] = tx.splitCoins(tx.gas, [tx.pure(amountInMists)]);
    tx.transferObjects([coin], tx.pure(address));
    return tx;
  }
  /**
   * @public
   * @method getAvailableWithdrawSuiAmount
   * @description Retrieves the available amount for withdrawing SUI tokens.
   * @param {string} publicKey - The public key of the wallet.
   * @return {Promise<{ availableAmount: string, totalGasFee: string }>} A promise that resolves to
   * the available amount and total gas fee.
   */
  async getAvailableWithdrawSuiAmount(publicKey) {
    const tx = new import_transactions2.TransactionBlock();
    const AMOUNT_IN_SUI_MIST_TO_SIMULATE_WITHDRAW = 100;
    const [coin] = tx.splitCoins(tx.gas, [tx.pure(AMOUNT_IN_SUI_MIST_TO_SIMULATE_WITHDRAW)]);
    tx.transferObjects([coin], tx.pure(publicKey));
    const simulationResult = await this.provider.devInspectTransactionBlock({
      transactionBlock: tx,
      sender: publicKey
    });
    const { computationCost, storageCost, storageRebate } = simulationResult.effects.gasUsed;
    const totalGasFee = new import_bignumber3.default(computationCost).plus(storageCost).minus(storageRebate).toString();
    const suiBalance = await this.getSuiBalance(publicKey);
    const availableAmount = new import_bignumber3.default(suiBalance).multipliedBy(SUI_DENOMINATOR).minus(totalGasFee).dividedBy(SUI_DENOMINATOR).toString();
    return {
      availableAmount,
      totalGasFee
    };
  }
  /**
   * @public
   * @method getSuiBalance
   * @description Retrieves the balance of SUI tokens for a wallet.
   * @param {string} publicKey - The public key of the wallet.
   * @return {Promise<string>} A promise that resolves to the balance of SUI tokens.
   */
  async getSuiBalance(publicKey) {
    const balance = await this.provider.getBalance({ owner: publicKey });
    const totalBalance = new import_bignumber3.default(balance.totalBalance);
    return totalBalance.dividedBy(10 ** import_utils4.SUI_DECIMALS).toString();
  }
  /**
   * @public
   * @method getAvailableSuiBalance
   * @description Retrieves the available balance of SUI tokens for a wallet.
   * @param {string} publicKey - The public key of the wallet.
   * @return {Promise<string>} A promise that resolves to the available balance of SUI tokens.
   */
  async getAvailableSuiBalance(publicKey) {
    const currentSuiBalance = await this.getSuiBalance(publicKey);
    const suiBalanceWithDecimals = new import_bignumber3.default(currentSuiBalance).multipliedBy(10 ** import_utils4.SUI_DECIMALS);
    const availableSuiBalance = suiBalanceWithDecimals.minus(SWAP_GAS_BUDGET);
    if (availableSuiBalance.isLessThanOrEqualTo(0)) {
      return "0";
    }
    return availableSuiBalance.dividedBy(10 ** import_utils4.SUI_DECIMALS).toString();
  }
  /**
   * @public
   * @method getAllCoinAssets
   * @description Retrieves all coin assets associated with a wallet.
   * @param {string} publicKey - The public key of the wallet.
   * @return {Promise<CoinAssetData[]>} A promise that resolves to an array of coin asset data.
   */
  async getAllCoinAssets(publicKey) {
    const pageCapacity = 50;
    const allObjects = [];
    let nextCursor = null;
    let assets = await this.provider.getAllCoins({
      owner: publicKey,
      limit: pageCapacity,
      cursor: nextCursor
    });
    while (assets.hasNextPage) {
      const coinObjects2 = assets.data;
      allObjects.push(...coinObjects2);
      nextCursor = assets.nextCursor;
      assets = await this.provider.getAllCoins({
        owner: publicKey,
        limit: pageCapacity,
        cursor: nextCursor
      });
    }
    const coinObjects = assets.data;
    allObjects.push(...coinObjects);
    const coinAssets = await getCoinsAssetsFromCoinObjects(allObjects, this.coinManager);
    for (const asset of coinAssets) {
      const decimals = asset.decimals;
      if (decimals === null) {
        continue;
      }
      const bigNumberBalance = new import_bignumber3.default(asset.balance);
      asset.balance = bigNumberBalance.dividedBy(10 ** decimals).toString();
    }
    return coinAssets;
  }
  /**
   * Note: this method is using an `UpdatedTransactionBlock`, that is a `TransactionBlock` from
   * the @mysten/sui.js v0.51.2 package.
   *
   * @description Merges all the passed `coinObjects` into one object.
   * @return {object} A transaction block, that contains the coins merge; a destination coin object id, into which all
   * the other coin objects are merged; a transaction result, that is the result of the coins merge.
   */
  static mergeAllCoinObjects({
    coinObjects,
    txb
  }) {
    if (coinObjects.length === 0) {
      throw new Error("[mergeAllCoinObjects] Passed `coinObjects` are empty.");
    }
    const tx = txb ?? new import_transactions3.TransactionBlock();
    const objectIds = coinObjects.map((obj3) => obj3.coinObjectId);
    const [destinationObjectId, ...sourceObjectIds] = objectIds;
    if (sourceObjectIds.length === 0) {
      return { tx, destinationObjectId };
    }
    const txRes = tx.mergeCoins(
      tx.object(destinationObjectId),
      sourceObjectIds.map((objId) => tx.object(objId))
    );
    return { tx, txRes, destinationObjectId };
  }
};

// src/managers/utils.ts
var getFiltredProviders = ({
  poolProviders,
  coinsByProviderMap,
  tokenFrom,
  tokenTo,
  supportedProviders
}) => {
  const tokenFromIsSui = tokenFrom === SHORT_SUI_COIN_TYPE || tokenFrom === LONG_SUI_COIN_TYPE;
  const tokenToIsSui = tokenTo === SHORT_SUI_COIN_TYPE || tokenTo === LONG_SUI_COIN_TYPE;
  const filtredProviders = poolProviders.filter((poolProvider) => {
    const providerCoins = coinsByProviderMap.get(poolProvider.providerName);
    if (!providerCoins) {
      console.warn(`[getFiltredProviders] No coins found for such provider ${poolProvider.providerName}`);
      return false;
    }
    if (supportedProviders?.length) {
      const isPoolProviderIsInSupportedProviders = supportedProviders.find(
        (supportedProvider) => supportedProvider.providerName.includes(poolProvider.providerName)
      );
      if (!isPoolProviderIsInSupportedProviders) {
        return false;
      }
    }
    const providerCoinsHaveSui = providerCoins.has(SHORT_SUI_COIN_TYPE) || providerCoins.has(LONG_SUI_COIN_TYPE);
    const tokenFromOrTokenToIsSui = tokenFromIsSui || tokenToIsSui;
    const notSuiTokenInInputTokens = tokenFromIsSui ? tokenTo : tokenFrom;
    if (tokenFromOrTokenToIsSui) {
      const providerDoesntHaveAnyToken = !providerCoinsHaveSui || !providerCoins.has(notSuiTokenInInputTokens);
      if (providerDoesntHaveAnyToken) {
        return false;
      }
    } else {
      if (!providerCoins.has(tokenFrom) || !providerCoins.has(tokenTo)) {
        return false;
      }
    }
    if (!poolProvider.isSmartRoutingAvailable) {
      const paths = poolProvider.getPaths();
      if (tokenFromOrTokenToIsSui) {
        const providerHasNoPathWithShortSui = !hasPath(SHORT_SUI_COIN_TYPE, notSuiTokenInInputTokens, paths);
        const providerHasNoPathWithLongSui = !hasPath(LONG_SUI_COIN_TYPE, notSuiTokenInInputTokens, paths);
        if (providerHasNoPathWithShortSui && providerHasNoPathWithLongSui) {
          return false;
        }
      } else {
        const providerHasNoPathWithRegularCoins = !hasPath(tokenFrom, tokenTo, paths);
        if (providerHasNoPathWithRegularCoins) {
          return false;
        }
      }
    }
    return true;
  });
  return filtredProviders;
};
var getRouterMaps = async ({
  filtredProviders,
  tokenFrom,
  tokenTo,
  amount,
  signerAddress,
  slippagePercentage
}) => {
  const routesByProviderMap = /* @__PURE__ */ new Map();
  const providersByOutputAmountsMap = /* @__PURE__ */ new Map();
  await Promise.all(
    filtredProviders.map(async (provider) => {
      console.time("provider: " + provider.providerName);
      const routeData = await tryCatchWrapper(provider.getRouteData.bind(provider), {
        coinTypeFrom: tokenFrom,
        coinTypeTo: tokenTo,
        inputAmount: amount,
        publicKey: signerAddress,
        slippagePercentage
      });
      const providerName = provider.providerName;
      if (routeData === null) {
        routesByProviderMap.set(providerName, { provider, route: null });
        providersByOutputAmountsMap.set(BigInt(0), providerName);
      } else {
        routesByProviderMap.set(providerName, { provider, route: routeData.route });
        providersByOutputAmountsMap.set(routeData.outputAmount, providerName);
      }
      console.timeEnd("provider: " + provider.providerName);
    })
  );
  return { routesByProviderMap, providersByOutputAmountsMap };
};
var tokenFromIsTokenTo = (tokenFrom, tokenTo) => {
  const tokenFromIsSui = tokenFrom === SHORT_SUI_COIN_TYPE || tokenFrom === LONG_SUI_COIN_TYPE;
  const tokenToIsSui = tokenTo === SHORT_SUI_COIN_TYPE || tokenTo === LONG_SUI_COIN_TYPE;
  const tokensAreSui = tokenFromIsSui && tokenToIsSui;
  return tokensAreSui || tokenFrom === tokenTo;
};
var getCoinsAssetsFromCoinObjects = async (coinObjects, coinManager) => {
  return await coinObjects.reduce(async (allAssetsP, coinData) => {
    const allAssets = await allAssetsP;
    if (BigInt(coinData.balance) <= 0) {
      return allAssets;
    }
    const rawCoinType = coinData.coinType;
    const coinTypeAddress = rawCoinType.split("::")[0];
    const normalizedAddress = (0, import_utils6.normalizeSuiAddress)(coinTypeAddress);
    const normalizedCoinType = rawCoinType.replace(coinTypeAddress, normalizedAddress);
    const coinInAssets = allAssets.find(
      (asset) => asset.type === normalizedCoinType
    );
    if (coinInAssets) {
      const currentBalance = BigInt(coinInAssets.balance);
      const additionalBalance = BigInt(coinData.balance);
      const newBalance = currentBalance + additionalBalance;
      coinInAssets.balance = newBalance.toString();
    } else {
      const coin = await coinManager.getCoinByType2(normalizedCoinType);
      const symbol = coin?.symbol?.trim();
      const decimals = coin?.decimals ?? null;
      if (!symbol) {
        console.warn(`[getCoinsAssetsFromCoinObjects] no symbol found for coin ${normalizedCoinType}`);
      }
      if (!decimals) {
        console.warn(`[getCoinsAssetsFromCoinObjects] no decimals found for coin ${normalizedCoinType}`);
      }
      allAssets.push({
        symbol,
        balance: coinData.balance,
        type: normalizedCoinType,
        decimals,
        noDecimals: !coin
      });
    }
    return allAssets;
  }, Promise.resolve([]));
};
function isValidResForCreateCoin(res) {
  return typeof res === "object" && res !== null && "modules" in res && "dependencies" in res && "digest" in res && Array.isArray(res.modules) && (res.modules.every((m) => typeof m === "string") || res.modules.every((m) => Array.isArray(m) && m.every((n) => typeof n === "number"))) && Array.isArray(res.dependencies) && res.dependencies.every((d2) => typeof d2 === "string") && Array.isArray(res.digest) && res.digest.every((n) => typeof n === "number");
}
function normalizeMnemonic(mnemonic) {
  return mnemonic.trim().split(/\s+/).map((part) => part.toLowerCase()).join(" ");
}
var isValidPrivateKey = (string) => {
  try {
    const keypair = WalletManagerSingleton.getKeyPairFromPrivateKey(string);
    return keypair instanceof import_ed255192.Ed25519Keypair;
  } catch (error) {
    return false;
  }
};
var isValidSeedPhrase = (string) => {
  try {
    const normalized = normalizeMnemonic(string);
    const keypair = import_ed255192.Ed25519Keypair.deriveKeypair(normalized);
    return keypair instanceof import_ed255192.Ed25519Keypair;
  } catch (error) {
    return false;
  }
};

// src/managers/FeeManager.ts
var import_transactions4 = require("@mysten/sui.js/transactions");
var import_bignumber4 = __toESM(require("bignumber.js"));
var FeeManager = class _FeeManager {
  /**
   * Calculates the fee amount based on the fee percentage and amount.
   * @param {Object} params - The parameters object.
   * @param {string} params.feePercentage - The fee percentage should be provided as a percentage value
   * (e.g., "5%" for a 5% fee).
   * @param {string} params.amount - The amount as a string.
   * @param {number} params.tokenDecimals - The decimals of `coinType`.
   * @return {string} The calculated fee amount as a string.
   */
  static calculateFeeAmountIn({
    feePercentage,
    amount,
    tokenDecimals
  }) {
    const feePercentageBig = new import_bignumber4.default(feePercentage);
    const amountBig = new import_bignumber4.default(amount);
    const feeAmount2 = amountBig.times(feePercentageBig).dividedBy(100).toFixed(tokenDecimals);
    const feeAmountInDecimals = new import_bignumber4.default(feeAmount2).multipliedBy(10 ** tokenDecimals).toString();
    return feeAmountInDecimals;
  }
  /**
   * Calculates the net amount after deducting the fee.
   * @param {Object} params - The parameters object.
   * @param {string} params.feePercentage - The fee percentage should be provided as a percentage value
   * (e.g., "5%" for a 5% fee).
   * @param {string} params.amount - The amount as a string.
   * @param {number} params.tokenDecimals - The decimals of `coinType`.
   * @return {string} The net amount after deducting the fee.
   */
  static calculateNetAmount({
    feePercentage,
    amount,
    tokenDecimals
  }) {
    const feeAmountIn = _FeeManager.calculateFeeAmountIn({
      feePercentage,
      amount,
      tokenDecimals
    });
    const amountRespectingFee = new import_bignumber4.default(amount).multipliedBy(10 ** tokenDecimals).minus(feeAmountIn).dividedBy(10 ** tokenDecimals).toString();
    return amountRespectingFee;
  }
  /**
   * @public
   * @method getFeeInSuiTransaction
   * @description Gets the transaction for deducting fees in SUI coin
   * from `signer` and transfer it to the `feeCollectorAddress`, based on the specified `feeAmountInMIST`.
   *
   * @return {GetTransactionType}
   * A promise that resolves to the transaction block and transaction result for the adding transaction.
   */
  static async getFeeInSuiTransaction({
    transaction,
    fee: { feeAmountInMIST, feeCollectorAddress }
  }) {
    const tx = transaction ?? new import_transactions4.TransactionBlock();
    const [coin] = tx.splitCoins(tx.gas, [tx.pure(feeAmountInMIST)]);
    const txRes = tx.transferObjects([coin], tx.pure(feeCollectorAddress));
    return { tx, txRes };
  }
  /**
   * @public
   * @method getFeeInCoinTransaction
   * @description Gets the transaction for deducting fees in any `coinType`
   * from `signer` and transfer it to the `feeCollectorAddress`, based on the specified `feeAmount`.
   *
   * @return {GetTransactionType}
   * A promise that resolves to the transaction block and transaction result for the adding transaction.
   */
  static getFeeInCoinTransaction({
    transaction,
    fee: { feeAmount: feeAmount2, feeCollectorAddress, allCoinObjectsList }
  }) {
    const tx = transaction ?? new import_transactions4.TransactionBlock();
    const sourceCoinObjectId = allCoinObjectsList[0].coinObjectId;
    const isMergeCoinsRequired = allCoinObjectsList.length > 1;
    if (isMergeCoinsRequired) {
      console.warn("[getFeeInCoinTransaction] [isMergeCoinsRequired]");
      const coinObjectIdsToMerge = allCoinObjectsList.slice(1).map((el) => el.coinObjectId);
      tx.mergeCoins(
        tx.object(sourceCoinObjectId),
        coinObjectIdsToMerge.map((el) => tx.object(el))
      );
    }
    const coinSplitTxResult = tx.splitCoins(tx.object(sourceCoinObjectId), [tx.pure(feeAmount2)]);
    const txRes = tx.transferObjects([coinSplitTxResult], tx.pure(feeCollectorAddress));
    return { tx, txRes };
  }
};

// src/managers/RouteManager.ts
var RouteManager = class _RouteManager {
  /**
   * @public
   * @method getInstance
   * @description Gets the singleton instance of RouteManager.
   * @param {Providers} [providers] - The pool providers.
   * @param {CoinManagerSingleton} [coinManager] - The coin manager instance.
   * @return {RouteManager} The singleton instance of RouteManager.
   * @throws {Error} Throws an error if providers or coinManager are not provided.
   */
  static getInstance(providers, coinManager) {
    if (!_RouteManager._instance) {
      if (providers === void 0) {
        throw new Error("[RouteManager] Providers are required in arguments to create RouteManager instance.");
      }
      if (coinManager === void 0) {
        throw new Error("[RouteManager] CoinManager is required in arguments to create RouteManager instance.");
      }
      const instance = new _RouteManager(providers, coinManager);
      _RouteManager._instance = instance;
    }
    return _RouteManager._instance;
  }
  /**
   * @constructor
   * @param {Providers} providers - The pool providers.
   * @param {CoinManagerSingleton} coinManager - The coin manager instance.
   */
  constructor(providers, coinManager) {
    this.poolProviders = providers;
    this.coinManager = coinManager;
  }
  /**
   * @public
   * @method getBestRouteData
   * @description Gets the best route data for token swapping.
   * @param {Object} options - The options for getting the best route transaction.
   * @param {string} options.tokenFrom - The token to swap from.
   * @param {string} options.tokenTo - The token to swap to.
   * @param {string} options.amount - The amount to swap.
   * @param {number} options.slippagePercentage - The slippage percentage.
   * @param {string} options.signerAddress - The address of the signer.
   * @param {Providers} options.supportedProviders - List of supported providers
   * which would be used in the finding best route data.
   * @return {Promise<BestRouteData>} A promise that resolves to the best route data for token swapping.
   * @throws {Error} Throws an error if there is no path for the specified tokens.
   */
  async getBestRouteData({
    tokenFrom,
    tokenTo,
    amount,
    slippagePercentage,
    signerAddress,
    supportedProviders,
    useCetusOnChainFallback = false
  }) {
    if (tokenFromIsTokenTo(tokenFrom, tokenTo)) {
      throw new Error("[RouteManager] getBestRouteTransaction: tokenFrom is equal to tokenTo.");
    }
    const amountAsNumber = Number(amount);
    if (isNaN(amountAsNumber)) {
      throw new Error(`[RouteManager] getBestRouteTransaction: amount ${amount} is invalid.`);
    }
    const coinsByProviderMap = this.coinManager.getCoinsByProviderMap();
    const filtredProviders = getFiltredProviders({
      tokenFrom,
      tokenTo,
      coinsByProviderMap,
      poolProviders: this.poolProviders,
      supportedProviders
    });
    console.log(
      "filtredProviders:",
      filtredProviders.map((provider) => provider.providerName)
    );
    let providersByOutputAmountsResultMap;
    let routesByProviderResultMap;
    let outputAmounts;
    const { providersByOutputAmountsMap, routesByProviderMap } = await getRouterMaps({
      filtredProviders,
      tokenFrom,
      tokenTo,
      amount,
      signerAddress,
      slippagePercentage
    });
    providersByOutputAmountsResultMap = providersByOutputAmountsMap;
    routesByProviderResultMap = routesByProviderMap;
    outputAmounts = Array.from(providersByOutputAmountsResultMap.keys());
    const eachOutputAmountIs0 = outputAmounts.every((amount2) => amount2 === BigInt(0));
    if (eachOutputAmountIs0) {
      const cetus = filtredProviders.find((provider) => provider.providerName === "Cetus");
      if (cetus === void 0 || !useCetusOnChainFallback) {
        throw new NoRoutesError(
          `[RouteManager] There is no paths for coins "${tokenFrom}" and "${tokenTo}" (all outputAmounts = 0)`
        );
      }
      const cetusInstance = cetus;
      const { cetusOutputAmount, providersByOutputAmountsMap: providersByOutputAmountsMap2, routesByProviderMap: routesByProviderMap2 } = await cetusInstance.getRouteDataWithGraph({
        inputAmount: amount,
        slippagePercentage,
        coinTypeFrom: tokenFrom,
        coinTypeTo: tokenTo,
        // TODO: We might not need to specify signerAddress here, depends on internal Cetus smart-contract structure
        publicKey: signerAddress
      });
      providersByOutputAmountsResultMap = providersByOutputAmountsMap2;
      routesByProviderResultMap = routesByProviderMap2;
      outputAmounts = [cetusOutputAmount];
    }
    const maxOutputAmount = outputAmounts.reduce((max, currentValue) => {
      return currentValue > max ? currentValue : max;
    });
    const providerWithMaxOutputAmount = providersByOutputAmountsResultMap.get(maxOutputAmount);
    let stringResult = "{ ";
    providersByOutputAmountsResultMap.forEach((value, key) => stringResult += `${key}n => ${value}, `);
    stringResult += "}";
    console.log(
      "providersByOutputAmountsResultMap:",
      stringResult + "; maxOutputAmount:",
      maxOutputAmount + "n; providerWithMaxOutputAmount:",
      providerWithMaxOutputAmount
    );
    if (providerWithMaxOutputAmount === void 0) {
      throw new Error(`[Route] Cannot find provider with output amount "${maxOutputAmount}".`);
    }
    const routeData = routesByProviderResultMap.get(providerWithMaxOutputAmount);
    if (routeData === void 0) {
      throw new Error(`[Route] Cannot find route data for provider "${providerWithMaxOutputAmount}".`);
    }
    const route = routeData.route;
    if (route === null) {
      throw new Error(`[Route] Cannot find route for provider "${providerWithMaxOutputAmount}".`);
    }
    const maxOutputProvider = routeData.provider;
    return { maxOutputProvider, maxOutputAmount, route };
  }
  /**
   * @public
   * @method getBestRouteTransaction
   * @description Gets the best route transaction for token swapping.
   * @param {Object} options - The options for getting the best route transaction.
   * @param {string} options.tokenFrom - The token to swap from.
   * @param {string} options.tokenTo - The token to swap to.
   * @param {string} options.amount - The amount to swap.
   * @param {number} options.slippagePercentage - The slippage percentage.
   * @param {string} options.signerAddress - The address of the signer.
   * @param {object} options.fee - The fee in SUI that would be deducted from user's account
   * @return {Promise<{ tx: TransactionBlock, outputAmount: bigint, providerName: string }>} A promise that resolves
   * to the object with transaction block for the swap, calculated output amount and the name of the provider, making
   * the swap.
   * @throws {Error} Throws an error if there is no path for the specified tokens.
   */
  async getBestRouteTransaction({
    tokenFrom,
    tokenTo,
    amount,
    slippagePercentage,
    signerAddress,
    fee
  }) {
    const amountInCludingFees = fee && isSuiCoinType(tokenFrom) ? new import_bignumber5.default(amount).minus(new import_bignumber5.default(fee.feeAmount).dividedBy(SUI_DENOMINATOR)).toString() : amount;
    const { maxOutputProvider, route, maxOutputAmount } = await this.getBestRouteData({
      tokenFrom,
      tokenTo,
      amount: amountInCludingFees,
      slippagePercentage,
      signerAddress
    });
    const transaction = await maxOutputProvider.getSwapTransaction({
      route,
      publicKey: signerAddress,
      slippagePercentage
    });
    transaction.setGasBudget(SWAP_GAS_BUDGET);
    if (fee) {
      const { feeAmount: feeAmount2, feeCollectorAddress, tokenFromCoinObjects, tokenFromDecimals } = fee;
      if (isSuiCoinType(tokenFrom)) {
        const { tx } = await FeeManager.getFeeInSuiTransaction({
          transaction,
          fee: {
            feeAmountInMIST: feeAmount2,
            feeCollectorAddress
          }
        });
        return { tx, outputAmount: maxOutputAmount, providerName: maxOutputProvider.providerName };
      } else if (!isSuiCoinType(tokenFrom) && tokenFromCoinObjects?.length && typeof tokenFromDecimals === "number") {
        const { tx } = await FeeManager.getFeeInCoinTransaction({
          transaction,
          fee: {
            feeAmount: feeAmount2,
            feeCollectorAddress,
            allCoinObjectsList: tokenFromCoinObjects
          }
        });
        return { tx, outputAmount: maxOutputAmount, providerName: maxOutputProvider.providerName };
      } else {
        console.warn(
          "[getBestRouteTransaction] unexpected behaviour: params for fees object is not correctly provided"
        );
        throw new Error("Unexpected params getBestRouteTransaction");
      }
    }
    return { tx: transaction, outputAmount: maxOutputAmount, providerName: maxOutputProvider.providerName };
  }
  /**
   * @public
   * @method getBestRouteTransactionForDCA
   * @description Gets the best route transaction for token swapping for DCA.
   * @param {Object} options - The options for getting the best route transaction.
   * @param {string} options.tokenFrom - The token to swap from.
   * @param {string} options.tokenTo - The token to swap to.
   * @param {string} options.amount - The amount to swap.
   * @param {number} options.slippagePercentage - The slippage percentage.
   * @param {string} options.signerAddress - The address of the signer.
   * @param {Providers} options.supportedProviders - List of supported providers
   *
   * @return {Promise<TransactionBlock>} A promise that resolves to the transaction block for the swap.
   * @throws {Error} Throws an error if there is no path for the specified tokens.
   */
  async getBestRouteTransactionForDCA({
    tokenFrom,
    tokenTo,
    amount,
    slippagePercentage,
    signerAddress,
    dcaObjectId,
    dcaTradeGasCost,
    supportedProviders
  }) {
    const { maxOutputProvider, route } = await this.getBestRouteData({
      tokenFrom,
      tokenTo,
      amount,
      slippagePercentage,
      signerAddress,
      supportedProviders
    });
    const transaction = await maxOutputProvider.getSwapTransactionDoctored({
      route,
      publicKey: signerAddress,
      slippagePercentage
    });
    const doctoredForDCATransactionBlock = maxOutputProvider.buildDcaTxBlockAdapter(
      transaction,
      tokenFrom,
      tokenTo,
      dcaObjectId,
      dcaTradeGasCost
    );
    return doctoredForDCATransactionBlock;
  }
  /**
   * @public
   * @method getBestRouteTransactionForDCAByRouteData
   * @description Gets the best route transaction for token swapping for DCA
   * based on the provided `route` and `maxOutputProvider`.
   */
  async getBestRouteTransactionForDCAByRouteData({
    tokenFrom,
    tokenTo,
    slippagePercentage,
    signerAddress,
    dcaObjectId,
    dcaTradeGasCost,
    route,
    maxOutputProvider
  }) {
    const transaction = await maxOutputProvider.getSwapTransactionDoctored({
      route,
      publicKey: signerAddress,
      slippagePercentage
    });
    const doctoredForDCATransactionBlock = maxOutputProvider.buildDcaTxBlockAdapter(
      transaction,
      tokenFrom,
      tokenTo,
      dcaObjectId,
      dcaTradeGasCost
    );
    return doctoredForDCATransactionBlock;
  }
};

// src/managers/dca/DCAManager.ts
var import_client2 = require("@mysten/sui.js/client");
var import_transactions5 = require("@mysten/sui.js/transactions");
var import_utils8 = require("@mysten/sui.js/utils");

// src/providers/utils/splitBy.ts
var splitBy = (list, chunkSize) => {
  const result = [];
  for (let i = 0; i < list.length; i += chunkSize) {
    result.push(list.slice(i, i + chunkSize));
  }
  return result;
};

// src/providers/utils/getAllObjects.ts
async function getAllObjects({
  objectIds,
  provider,
  options
}) {
  const allIds = new Set(objectIds);
  const toFetch = Array.from(allIds);
  const chunks = splitBy(toFetch, MAX_BATCH_OBJECTS_PER_GET_OBJECT_REQUEST);
  const result = await Promise.all(
    chunks.map(
      (ids) => provider.multiGetObjects({
        ids,
        options
      })
    )
  );
  const flatResult = result.flat();
  return flatResult;
}

// src/transactions/utils.ts
function isTransactionArgument(arg) {
  if (!arg || typeof arg !== "object" || Array.isArray(arg)) {
    return false;
  }
  return "kind" in arg;
}
function obj(tx, arg) {
  return isTransactionArgument(arg) ? arg : tx.object(arg);
}

// src/managers/dca/config.ts
var DCA_CONFIG = {
  DCA_TRADE_FEE_BPS: 5,
  DCA_CONTRACT: "0x3ed0a2079006bdc14688b0b99129dd5fcf9ebda3042db1a58b5347b8bf542c40",
  DCA_CONTRACT_READ: "0x89b1372fa44ac2312a3876d83612d1dc9d298af332a42a153913558332a564d0"
};

// src/managers/dca/utils.ts
function feeAmount(amount) {
  const scaledFee = Math.floor(amount * 1e6 * DCA_CONFIG.DCA_TRADE_FEE_BPS / 1e4);
  return scaledFee / 1e6;
}
function isValidDCAFields(fields) {
  const expectedKeys = [
    "active",
    "input_balance",
    "delegatee",
    "every",
    "gas_budget",
    "id",
    "last_time_ms",
    "owner",
    "remaining_orders",
    "split_allocation",
    "start_time_ms",
    "time_scale",
    "trade_params"
  ];
  return expectedKeys.every((key) => key in fields) && // the "active" in fields is the ts-check bypass for MoveStruct type
  "active" in fields && typeof fields.active === "boolean" && typeof fields.input_balance === "string" && typeof fields.delegatee === "string" && typeof fields.every === "string" && typeof fields.gas_budget === "string" && typeof fields.id === "object" && // Assuming id is always an object
  typeof fields.last_time_ms === "string" && typeof fields.owner === "string" && typeof fields.remaining_orders === "string" && typeof fields.split_allocation === "string" && typeof fields.start_time_ms === "string" && typeof fields.time_scale === "number" && typeof fields.trade_params === "object" && fields.trade_params !== null && "type" in fields.trade_params && "fields" in fields.trade_params && typeof fields.trade_params.fields === "object" && fields.trade_params.fields !== null && "max_price" in fields.trade_params.fields && "min_price" in fields.trade_params.fields && typeof fields.trade_params.type === "string" && typeof fields.trade_params.fields === "object" && (typeof fields.trade_params.fields.max_price === "string" || fields.trade_params.fields.max_price === null) && (typeof fields.trade_params.fields.min_price === "string" || fields.trade_params.fields.min_price === null);
}
function isDCAContent(data) {
  return !!data && data.dataType === "moveObject" && typeof data.type === "string" && typeof data.hasPublicTransfer === "boolean" && isValidDCAFields(data.fields);
}
function isValidDCAObjectResponse(obj3) {
  return !!obj3.data?.content && isDCAContent(obj3.data.content);
}
function filterValidDCAObjects(dcaList) {
  return dcaList.filter(isValidDCAObjectResponse);
}
function getBaseQuoteCoinTypesFromDCAType(dcaTypeString) {
  const regex = new RegExp(`DCA<(${TOKEN_ADDRESS_BASE_REGEX.source}).*(${TOKEN_ADDRESS_BASE_REGEX.source})>`);
  const match = dcaTypeString.match(regex);
  if (!match) {
    throw new Error("Invalid DCA type string format");
  }
  const [baseCoinType, quoteCoinType] = match.slice(1, 3);
  return {
    baseCoinType,
    quoteCoinType
  };
}
function hasMinMaxPriceParams(params) {
  return params.minPrice !== void 0 && params.maxPrice !== void 0;
}
var fromArgument = (arg, idx) => {
  return {
    kind: arg.kind,
    value: arg.value,
    type: arg.type,
    index: idx
  };
};

// src/managers/dca/DCAManager.ts
var import_bignumber6 = __toESM(require("bignumber.js"));
var _DCAManagerSingleton = class _DCAManagerSingleton {
  /**
   * Constructs a new instance of the SuiProvider class with the provided SUI provider URL.
   *
   * @private
   * @constructor
   * @param {string} suiProviderUrl - The URL of the SUI provider.
   */
  constructor(suiProviderUrl) {
    this.provider = new import_client2.SuiClient({ url: suiProviderUrl });
  }
  /**
   * @public
   * @method getInstance
   * @description Gets the singleton instance of DCAManagerSingleton.
   * @param {string} [suiProviderUrl] - Url of SUI provider.
   * @return {DCAManagerSingleton} The singleton instance of DCAManagerSingleton.
   */
  static getInstance(suiProviderUrl) {
    if (!_DCAManagerSingleton._instance) {
      if (suiProviderUrl === void 0) {
        throw new Error("[DCAManager] SUI provider url is required in arguments to create DCAManager instance.");
      }
      const instance = new _DCAManagerSingleton(suiProviderUrl);
      _DCAManagerSingleton._instance = instance;
    }
    return _DCAManagerSingleton._instance;
  }
  async getDCAEventsByPackage() {
    const allEvents = [];
    let nextCursor = null;
    let events = await this.provider.queryEvents({
      query: { MoveEventType: _DCAManagerSingleton.DCA_EVENT_TYPE },
      limit: MAX_BATCH_EVENTS_PER_QUERY_EVENTS_REQUEST,
      cursor: nextCursor
    });
    while (events.hasNextPage) {
      const userEvents2 = events.data;
      allEvents.push(...userEvents2);
      nextCursor = events.nextCursor;
      events = await this.provider.queryEvents({
        query: { MoveEventType: _DCAManagerSingleton.DCA_EVENT_TYPE },
        limit: MAX_BATCH_EVENTS_PER_QUERY_EVENTS_REQUEST,
        cursor: nextCursor
      });
    }
    const userEvents = events.data;
    allEvents.push(...userEvents);
    const createDCAEvents = allEvents.filter(
      (event) => _DCAManagerSingleton.isDCACreateEventParsedJson(event.parsedJson)
    );
    return createDCAEvents;
  }
  async getDCAsByPackage() {
    const createDCAEventsByPackage = await this.getDCAEventsByPackage();
    const DCAObjectIds = createDCAEventsByPackage.map((el) => el.parsedJson.id);
    const DCAObjectsResponseData = await getAllObjects({
      objectIds: DCAObjectIds,
      provider: this.provider,
      options: { showContent: true }
    });
    const DCAResponseDataFiltred = filterValidDCAObjects(DCAObjectsResponseData);
    const dcaList = DCAResponseDataFiltred.map((el) => {
      const { baseCoinType, quoteCoinType } = getBaseQuoteCoinTypesFromDCAType(el.data.content.type);
      return {
        ...el.data.content,
        fields: {
          ...el.data.content.fields,
          base_coin_type: baseCoinType,
          quote_coin_type: quoteCoinType
        }
      };
    });
    return dcaList;
  }
  async getDCAEventsByUser({ publicKey }) {
    const allEvents = [];
    let nextCursor = null;
    let events = await this.provider.queryEvents({
      query: { Sender: publicKey },
      limit: MAX_BATCH_EVENTS_PER_QUERY_EVENTS_REQUEST,
      cursor: nextCursor
    });
    while (events.hasNextPage) {
      const userEvents2 = events.data;
      allEvents.push(...userEvents2);
      nextCursor = events.nextCursor;
      events = await this.provider.queryEvents({
        query: { Sender: publicKey },
        limit: MAX_BATCH_EVENTS_PER_QUERY_EVENTS_REQUEST,
        cursor: nextCursor
      });
    }
    const userEvents = events.data;
    allEvents.push(...userEvents);
    const createDCAEvents = _DCAManagerSingleton.getCreateDCAEventsFromUserEvents(allEvents).filter(
      (event) => _DCAManagerSingleton.isDCACreateEventParsedJson(event.parsedJson)
    );
    return createDCAEvents;
  }
  async getDCAsByUserByStatus({
    publicKey
  }) {
    const dcaList = await this.getDCAsByUser({ publicKey });
    const dcas = dcaList.reduce(
      (acc, el) => {
        if (el.fields.active) {
          acc.activeDCAs.push(el);
        } else {
          acc.deactivatedDCAs.push(el);
        }
        return acc;
      },
      {
        activeDCAs: [],
        deactivatedDCAs: []
      }
    );
    return dcas;
  }
  async getDCAsByUser({ publicKey }) {
    const createDCAEventsByUser = await this.getDCAEventsByUser({ publicKey });
    const DCAObjectIds = createDCAEventsByUser.map((el) => el.parsedJson.id);
    const DCAObjectsResponseData = await getAllObjects({
      objectIds: DCAObjectIds,
      provider: this.provider,
      options: { showContent: true }
    });
    const DCAResponseDataFiltred = filterValidDCAObjects(DCAObjectsResponseData);
    const dcaList = DCAResponseDataFiltred.map((el) => {
      const { baseCoinType, quoteCoinType } = getBaseQuoteCoinTypesFromDCAType(el.data.content.type);
      return {
        ...el.data.content,
        fields: {
          ...el.data.content.fields,
          base_coin_type: baseCoinType,
          quote_coin_type: quoteCoinType
        }
      };
    });
    return dcaList;
  }
  static isDCACreateEventParsedJson(obj3) {
    return typeof obj3 === "object" && obj3 !== null && "delegatee" in obj3 && "id" in obj3 && "owner" in obj3 && typeof obj3.delegatee === "string" && typeof obj3.id === "string" && typeof obj3.owner === "string";
  }
  static getCreateDCAEventsFromUserEvents(userEvents) {
    return userEvents.filter((event) => event.type.includes(_DCAManagerSingleton.DCA_EVENT_TYPE));
  }
  static async createDCAInitTransaction({
    allCoinObjectsList,
    publicKey,
    ...dcaParams
  }) {
    const tx = dcaParams.transaction ?? new import_transactions5.TransactionBlock();
    const DCA_ALL_SWAPS_GAS_BUGET_BN = new import_bignumber6.default(dcaParams.totalOrders).multipliedBy(
      new import_bignumber6.default(_DCAManagerSingleton.DCA_MINIMUM_GAS_FUNDS_PER_TRADE)
    );
    const [coin] = tx.splitCoins(tx.gas, [tx.pure(DCA_ALL_SWAPS_GAS_BUGET_BN)]);
    if (allCoinObjectsList.length === 0) {
      throw new Error("No coin objects found for specific coin type");
    }
    const sourceCoinObjectId = allCoinObjectsList[0].coinObjectId;
    const isMergeCoinsRequired = allCoinObjectsList.length > 1;
    if (isMergeCoinsRequired) {
      console.warn(`[isMergeCoinsRequired] for ${dcaParams.baseCoinType}`);
      const coinObjectIdsToMerge = allCoinObjectsList.slice(1).map((el) => el.coinObjectId);
      tx.mergeCoins(
        tx.object(sourceCoinObjectId),
        coinObjectIdsToMerge.map((el) => tx.object(el))
      );
    }
    const coinSplitTxResult = tx.splitCoins(tx.object(sourceCoinObjectId), [
      tx.pure(dcaParams.baseCoinAmountToDepositIntoDCA)
    ]);
    const result = hasMinMaxPriceParams(dcaParams) ? _DCAManagerSingleton.getDCAInitWithParamsTransaction({
      ...dcaParams,
      baseCoinAccount: coinSplitTxResult,
      gasCoinAccount: coin,
      transaction: tx
    }) : _DCAManagerSingleton.getDCAInitTransaction({
      ...dcaParams,
      baseCoinAccount: coinSplitTxResult,
      gasCoinAccount: coin,
      transaction: tx
    });
    const { tx: dcaTransaction, txRes: dcaTransactionRes } = await result;
    dcaTransaction.transferObjects([coin], dcaTransaction.pure(publicKey));
    return { tx: dcaTransaction, txRes: dcaTransactionRes };
  }
  static async getDCAInitTransaction({
    baseCoinType,
    // USDC
    quoteCoinType,
    // SUI
    baseCoinAccount,
    // 100 USDC
    every,
    // each 10
    timeScale,
    // minute
    totalOrders,
    // 15 orders
    gasCoinAccount,
    transaction
  }) {
    const tx = transaction ?? new import_transactions5.TransactionBlock();
    const txRes = tx.moveCall({
      target: `${_DCAManagerSingleton.DCA_PACKAGE_ADDRESS}::dca::init_account`,
      typeArguments: [baseCoinType, quoteCoinType],
      arguments: [
        obj(tx, import_utils8.SUI_CLOCK_OBJECT_ID),
        tx.pure(_DCAManagerSingleton.DCA_DELEGETEE_ACCOUNT_ADDRESS, "address"),
        obj(tx, baseCoinAccount),
        tx.pure(every, "u64"),
        tx.pure(totalOrders, "u64"),
        tx.pure(timeScale, "u8"),
        obj(tx, gasCoinAccount)
      ]
    });
    tx.setGasBudget(_DCAManagerSingleton.DCA_GAS_BUGET);
    return { tx, txRes };
  }
  static async getDCAInitWithParamsTransaction({
    baseCoinType,
    // USDC
    quoteCoinType,
    // SUI
    minPrice,
    // 1.3
    maxPrice,
    // 1.6
    baseCoinAccount,
    // 100 USDC
    every,
    // each 10
    timeScale,
    // minute
    totalOrders,
    // 15 orders
    gasCoinAccount,
    transaction
  }) {
    const tx = transaction ?? new import_transactions5.TransactionBlock();
    const txRes = tx.moveCall({
      target: `${_DCAManagerSingleton.DCA_PACKAGE_ADDRESS}::dca::init_account_with_params`,
      typeArguments: [baseCoinType, quoteCoinType],
      arguments: [
        obj(tx, import_utils8.SUI_CLOCK_OBJECT_ID),
        tx.pure(_DCAManagerSingleton.DCA_DELEGETEE_ACCOUNT_ADDRESS, "address"),
        obj(tx, baseCoinAccount),
        tx.pure(every, "u64"),
        tx.pure(totalOrders, "u64"),
        tx.pure(timeScale, "u8"),
        obj(tx, gasCoinAccount),
        tx.pure(minPrice, "u64"),
        tx.pure(maxPrice, "u64")
      ]
    });
    tx.setGasBudget(_DCAManagerSingleton.DCA_GAS_BUGET);
    return { tx, txRes };
  }
  static async createDCADepositBaseTransaction({
    publicKey,
    allCoinObjectsList,
    ...dcaParams
  }) {
    const tx = dcaParams.transaction ?? new import_transactions5.TransactionBlock();
    const DCA_ALL_SWAPS_GAS_BUGET_BN = new import_bignumber6.default(dcaParams.addOrdersCount).multipliedBy(
      new import_bignumber6.default(_DCAManagerSingleton.DCA_MINIMUM_GAS_FUNDS_PER_TRADE)
    );
    const [coin] = tx.splitCoins(tx.gas, [tx.pure(DCA_ALL_SWAPS_GAS_BUGET_BN)]);
    if (allCoinObjectsList.length === 0) {
      throw new Error("No coin objects found for specific coin type");
    }
    const sourceCoinObjectId = allCoinObjectsList[0].coinObjectId;
    const isMergeCoinsRequired = allCoinObjectsList.length > 1;
    if (isMergeCoinsRequired) {
      console.warn(`[isMergeCoinsRequired] for ${dcaParams.baseCoinType}`);
      const coinObjectIdsToMerge = allCoinObjectsList.slice(1).map((el) => el.coinObjectId);
      tx.mergeCoins(
        tx.object(sourceCoinObjectId),
        coinObjectIdsToMerge.map((el) => tx.object(el))
      );
    }
    const coinSplitTxResult = tx.splitCoins(tx.object(sourceCoinObjectId), [
      tx.pure(dcaParams.baseCoinAmountToDepositIntoDCA)
    ]);
    const { tx: dcaTransaction, txRes: dcaTransactionRes } = await _DCAManagerSingleton.getDCADepositBaseTransaction({
      ...dcaParams,
      baseCoinAccount: coinSplitTxResult,
      gasCoinAccount: coin,
      transaction: tx
    });
    dcaTransaction.transferObjects([coin], dcaTransaction.pure(publicKey));
    return { tx: dcaTransaction, txRes: dcaTransactionRes };
  }
  static async getDCADepositBaseTransaction({
    dca,
    baseCoinType,
    quoteCoinType,
    baseCoinAccount,
    addOrdersCount = 0,
    gasCoinAccount,
    transaction
  }) {
    const tx = transaction ?? new import_transactions5.TransactionBlock();
    const txRes = tx.moveCall({
      target: `${_DCAManagerSingleton.DCA_PACKAGE_ADDRESS}::dca::deposit_input`,
      typeArguments: [baseCoinType, quoteCoinType],
      arguments: [obj(tx, dca), obj(tx, baseCoinAccount), tx.pure(addOrdersCount), obj(tx, gasCoinAccount)]
    });
    tx.setGasBudget(_DCAManagerSingleton.DCA_GAS_BUGET);
    return { tx, txRes };
  }
  static async getDCAWithdrawBaseTransaction({
    dca,
    baseCoinType,
    quoteCoinType,
    baseCoinAmountToWithdrawFromDCA,
    removeOrdersCount = 0,
    transaction
  }) {
    const tx = transaction ?? new import_transactions5.TransactionBlock();
    const txRes = tx.moveCall({
      target: `${_DCAManagerSingleton.DCA_PACKAGE_ADDRESS}::dca::withdraw_input`,
      typeArguments: [baseCoinType, quoteCoinType],
      arguments: [obj(tx, dca), tx.pure(baseCoinAmountToWithdrawFromDCA), tx.pure(removeOrdersCount)]
    });
    tx.setGasBudget(_DCAManagerSingleton.DCA_GAS_BUGET);
    return { tx, txRes };
  }
  static async getDCAInitTradeTransaction({
    dca,
    baseCoinType,
    quoteCoinType,
    transaction
  }) {
    const tx = transaction ?? new import_transactions5.TransactionBlock();
    const txRes = tx.moveCall({
      target: `${_DCAManagerSingleton.DCA_PACKAGE_ADDRESS}::dca::init_trade`,
      typeArguments: [baseCoinType, quoteCoinType],
      arguments: [obj(tx, dca), obj(tx, import_utils8.SUI_CLOCK_OBJECT_ID)]
    });
    tx.setGasBudget(_DCAManagerSingleton.DCA_GAS_BUGET);
    return { tx, txRes };
  }
  static async getDCAResolveTradeTransaction({
    dca,
    baseCoinType,
    quoteCoinType,
    transaction,
    quoteAmount,
    initTradePromise
  }) {
    const tx = transaction ?? new import_transactions5.TransactionBlock();
    const txRes = tx.moveCall({
      target: `${_DCAManagerSingleton.DCA_PACKAGE_ADDRESS}::dca::resolve_trade`,
      typeArguments: [baseCoinType, quoteCoinType],
      arguments: [obj(tx, dca), obj(tx, quoteAmount), obj(tx, initTradePromise)]
    });
    tx.setGasBudget(_DCAManagerSingleton.DCA_GAS_BUGET);
    return { tx, txRes };
  }
  static async getDCAIncreaseOrdersRemainingTransaction({
    dca,
    publicKey,
    baseCoinType,
    quoteCoinType,
    transaction,
    addOrdersCount
  }) {
    const tx = transaction ?? new import_transactions5.TransactionBlock();
    const DCA_ALL_SWAPS_GAS_BUGET_BN = new import_bignumber6.default(addOrdersCount).multipliedBy(
      new import_bignumber6.default(_DCAManagerSingleton.DCA_MINIMUM_GAS_FUNDS_PER_TRADE)
    );
    const [coin] = tx.splitCoins(tx.gas, [tx.pure(DCA_ALL_SWAPS_GAS_BUGET_BN)]);
    const txRes = tx.moveCall({
      target: `${_DCAManagerSingleton.DCA_PACKAGE_ADDRESS}::dca::increase_remaining_orders`,
      typeArguments: [baseCoinType, quoteCoinType],
      arguments: [obj(tx, dca), obj(tx, coin), tx.pure(addOrdersCount)]
    });
    tx.transferObjects([coin], tx.pure(publicKey));
    tx.setGasBudget(_DCAManagerSingleton.DCA_GAS_BUGET);
    return { tx, txRes };
  }
  /**
   * Set DCA to inactive state, should be signed from either `delegatee` or an `owner` of DCA.
   */
  static async getDCASetInactiveTransaction({
    dca,
    baseCoinType,
    quoteCoinType,
    transaction
  }) {
    const tx = transaction ?? new import_transactions5.TransactionBlock();
    const txRes = tx.moveCall({
      target: `${_DCAManagerSingleton.DCA_PACKAGE_ADDRESS}::dca::set_inactive`,
      typeArguments: [baseCoinType, quoteCoinType],
      arguments: [obj(tx, dca)]
    });
    tx.setGasBudget(_DCAManagerSingleton.DCA_GAS_BUGET);
    return { tx, txRes };
  }
  /**
   * Set DCA to inactive state, should be signed only from an `owner` of DCA.
   */
  static async getDCAReactivateAsOwnerTransaction({
    dca,
    baseCoinType,
    quoteCoinType,
    transaction
  }) {
    const tx = transaction ?? new import_transactions5.TransactionBlock();
    const txRes = tx.moveCall({
      target: `${_DCAManagerSingleton.DCA_PACKAGE_ADDRESS}::dca::reactivate_as_owner`,
      typeArguments: [baseCoinType, quoteCoinType],
      arguments: [obj(tx, dca)]
    });
    tx.setGasBudget(_DCAManagerSingleton.DCA_GAS_BUGET);
    return { tx, txRes };
  }
  /**
   * Retrieves DCA transaction which would redeem funds in DCA and close DCA.
   * @comment This method is a work in progress and is not functioning correctly at the moment
   * (because SUI doesn't support deletion of shared or immutable objects at the moment).
   * It suppose to work from 1.20 version of SUI mainnet
   */
  static async getDCARedeemFundsAndCloseTransaction({
    dca,
    baseCoinType,
    quoteCoinType,
    transaction
  }) {
    const tx = transaction ?? new import_transactions5.TransactionBlock();
    const txRes = tx.moveCall({
      target: `${_DCAManagerSingleton.DCA_PACKAGE_ADDRESS}::dca::redeem_funds_and_close`,
      typeArguments: [baseCoinType, quoteCoinType],
      arguments: [obj(tx, dca)]
    });
    tx.setGasBudget(_DCAManagerSingleton.DCA_GAS_BUGET);
    return { tx, txRes };
  }
  static async createDCAAddGasBudgetTransaction({ ...dcaParams }) {
    const tx = dcaParams.transaction ?? new import_transactions5.TransactionBlock();
    const [coin] = tx.splitCoins(tx.gas, [tx.pure(dcaParams.gasAmountToAdd)]);
    const { tx: dcaTransaction, txRes: dcaTransactionRes } = await _DCAManagerSingleton.getDCAAddGasBudgetTransaction({
      ...dcaParams,
      gasCoinAccount: coin,
      transaction: tx
    });
    return { tx: dcaTransaction, txRes: dcaTransactionRes };
  }
  static async getDCAAddGasBudgetTransaction({
    dca,
    baseCoinType,
    quoteCoinType,
    transaction,
    gasCoinAccount
  }) {
    const tx = transaction ?? new import_transactions5.TransactionBlock();
    const txRes = tx.moveCall({
      target: `${_DCAManagerSingleton.DCA_PACKAGE_ADDRESS}::dca::add_gas_budget`,
      typeArguments: [baseCoinType, quoteCoinType],
      arguments: [obj(tx, dca), obj(tx, gasCoinAccount)]
    });
    tx.setGasBudget(_DCAManagerSingleton.DCA_GAS_BUGET);
    return { tx, txRes };
  }
};
_DCAManagerSingleton.DCA_PACKAGE_ADDRESS = DCA_CONFIG.DCA_CONTRACT;
_DCAManagerSingleton.DCA_PACKAGE_ADDRESS_READ = DCA_CONFIG.DCA_CONTRACT_READ;
_DCAManagerSingleton.DCA_EVENT_TYPE = `${_DCAManagerSingleton.DCA_PACKAGE_ADDRESS_READ}::dca::DCACreatedEvent`;
_DCAManagerSingleton.DCA_GAS_BUGET = 5e7;
_DCAManagerSingleton.DCA_MINIMUM_GAS_FUNDS_PER_TRADE = 25e6;
_DCAManagerSingleton.DCA_TRADE_FEE_BPS = DCA_CONFIG.DCA_TRADE_FEE_BPS;
_DCAManagerSingleton.DCA_TRADE_FEE_PERCENTAGE = new import_bignumber6.default(DCA_CONFIG.DCA_TRADE_FEE_BPS).dividedBy(100).toString();
_DCAManagerSingleton.DCA_DELEGETEE_ACCOUNT_ADDRESS = "0x42dbd0fea6fefd7689d566287581724151b5327c08b76bdb9df108ca3b48d1d5";
var DCAManagerSingleton = _DCAManagerSingleton;

// src/managers/dca/types.ts
var DCATimescale = /* @__PURE__ */ ((DCATimescale2) => {
  DCATimescale2[DCATimescale2["Seconds"] = 0] = "Seconds";
  DCATimescale2[DCATimescale2["Minutes"] = 1] = "Minutes";
  DCATimescale2[DCATimescale2["Hours"] = 2] = "Hours";
  DCATimescale2[DCATimescale2["Days"] = 3] = "Days";
  DCATimescale2[DCATimescale2["Weeks"] = 4] = "Weeks";
  DCATimescale2[DCATimescale2["Months"] = 5] = "Months";
  return DCATimescale2;
})(DCATimescale || {});

// src/managers/refund/RefundManager.ts
var import_client3 = require("@mysten/sui.js/client");
var import_transactions6 = require("@mysten/sui.js/transactions");
var import_verify = require("@mysten/sui.js/verify");

// src/managers/refund/utils.ts
function hexStringToByteArray(hexString) {
  const normalizedHexString = hexString.startsWith("0x") ? hexString.substring(2) : hexString;
  const byteArray = new Uint8Array(normalizedHexString.length / 2);
  for (let i = 0; i < normalizedHexString.length; i += 2) {
    byteArray[i / 2] = parseInt(normalizedHexString.substring(i, i + 2), 16);
  }
  return byteArray;
}
function isBoostedClaimCap(obj3) {
  if (typeof obj3 !== "object" || obj3 === null) {
    return false;
  }
  if (!("data" in obj3) || !obj3.data || typeof obj3.data !== "object") {
    return false;
  }
  const objectData = obj3.data;
  if (!("objectId" in objectData) || typeof objectData.objectId !== "string") {
    return false;
  }
  if (!("content" in objectData) || objectData.content === null || typeof objectData.content !== "object") {
    return false;
  }
  const content = objectData.content;
  return "dataType" in content && "type" in content && "fields" in content && typeof content.fields === "object" && content.fields !== null && "id" in content.fields && typeof content.dataType === "string" && typeof content.type === "string" && typeof content.fields.id === "object" && content.fields.id !== null && "id" in content.fields.id && typeof content.fields.id.id === "string" && "new_address" in content.fields && typeof content.fields.new_address === "string";
}

// src/managers/refund/RefundManager.ts
var import_bignumber7 = __toESM(require("bignumber.js"));

// src/providers/utils/getAllOwnedObjects.ts
async function getAllOwnedObjects({
  provider,
  options
}) {
  const allOwnedObjects = [];
  let nextCursor = null;
  let objects = await provider.getOwnedObjects(options);
  while (objects.hasNextPage) {
    const userObjects2 = objects.data;
    allOwnedObjects.push(...userObjects2);
    nextCursor = objects.nextCursor;
    objects = await provider.getOwnedObjects({
      ...options,
      cursor: nextCursor
    });
  }
  const userObjects = objects.data;
  allOwnedObjects.push(...userObjects);
  return allOwnedObjects;
}

// src/managers/refund/RefundManager.ts
var import_bcs2 = require("@mysten/sui.js/bcs");
var import_utils13 = require("@mysten/sui.js/utils");
var _RefundManagerSingleton = class _RefundManagerSingleton {
  /**
   * Constructs a new instance of the SuiProvider class with the provided SUI provider URL.
   *
   * @private
   * @constructor
   * @param {string} suiProviderUrl - The URL of the SUI provider.
   */
  constructor(suiProviderUrl) {
    this.provider = new import_client3.SuiClient({ url: suiProviderUrl });
  }
  /**
   * @public
   * @method getInstance
   * @description Gets the singleton instance of RefundManagerSingleton.
   * @param {string} [suiProviderUrl] - Url of SUI provider.
   * @return {RefundManagerSingleton} The singleton instance of RefundManagerSingleton.
   */
  static getInstance(suiProviderUrl) {
    if (!_RefundManagerSingleton._instance) {
      if (suiProviderUrl === void 0) {
        throw new Error("[DCAManager] SUI provider url is required in arguments to create DCAManager instance.");
      }
      const instance = new _RefundManagerSingleton(suiProviderUrl);
      _RefundManagerSingleton._instance = instance;
    }
    return _RefundManagerSingleton._instance;
  }
  static getAddAddressesTransaction({
    publisherObjectId,
    poolObjectId,
    addressesList,
    amountsList,
    transaction
  }) {
    const tx = transaction ?? new import_transactions6.TransactionBlock();
    const txRes = tx.moveCall({
      target: `${_RefundManagerSingleton.REFUND_PACKAGE_ADDRESS}::refund::add_addresses`,
      typeArguments: [],
      arguments: [obj(tx, publisherObjectId), obj(tx, poolObjectId), tx.pure(addressesList), tx.pure(amountsList)]
    });
    tx.setGasBudget(_RefundManagerSingleton.REFUND_GAS_BUDGET_ADDRESS_ADDITION);
    return { tx, txRes };
  }
  static getClaimRefundTransaction({
    poolObjectId,
    clock = import_utils13.SUI_CLOCK_OBJECT_ID,
    transaction
  }) {
    const tx = transaction ?? new import_transactions6.TransactionBlock();
    const txRes = tx.moveCall({
      target: `${_RefundManagerSingleton.REFUND_PACKAGE_ADDRESS}::refund::claim_refund`,
      typeArguments: [],
      arguments: [obj(tx, poolObjectId), obj(tx, clock)]
    });
    tx.setGasBudget(_RefundManagerSingleton.REFUND_GAS_BUGET);
    return { tx, txRes };
  }
  static startFundingPhase({
    publisherObjectId,
    poolObjectId,
    timeoutMilliseconds,
    clock,
    transaction
  }) {
    const tx = transaction ?? new import_transactions6.TransactionBlock();
    const txRes = tx.moveCall({
      target: `${_RefundManagerSingleton.REFUND_PACKAGE_ADDRESS}::refund::start_funding_phase`,
      typeArguments: [],
      arguments: [obj(tx, publisherObjectId), obj(tx, poolObjectId), tx.pure(timeoutMilliseconds), obj(tx, clock)]
    });
    tx.setGasBudget(_RefundManagerSingleton.REFUND_GAS_BUGET);
    return { tx, txRes };
  }
  static startClaimPhase({
    poolObjectId,
    clock = import_utils13.SUI_CLOCK_OBJECT_ID,
    transaction
  }) {
    const tx = transaction ?? new import_transactions6.TransactionBlock();
    const txRes = tx.moveCall({
      target: `${_RefundManagerSingleton.REFUND_PACKAGE_ADDRESS}::refund::start_claim_phase`,
      typeArguments: [],
      arguments: [obj(tx, poolObjectId), obj(tx, clock)]
    });
    tx.setGasBudget(_RefundManagerSingleton.REFUND_GAS_BUGET);
    return { tx, txRes };
  }
  static startReclaimPhase({
    poolObjectId,
    clock,
    transaction
  }) {
    const tx = transaction ?? new import_transactions6.TransactionBlock();
    const txRes = tx.moveCall({
      target: `${_RefundManagerSingleton.REFUND_PACKAGE_ADDRESS}::refund::start_reclaim_phase`,
      typeArguments: [],
      arguments: [obj(tx, poolObjectId), obj(tx, clock)]
    });
    tx.setGasBudget(_RefundManagerSingleton.REFUND_GAS_BUGET);
    return { tx, txRes };
  }
  async getCurrentRefundPhase({
    poolObjectId,
    transaction
  }) {
    const tx = transaction ?? new import_transactions6.TransactionBlock();
    const txRes = tx.moveCall({
      target: `${_RefundManagerSingleton.REFUND_PACKAGE_ADDRESS}::refund::phase`,
      typeArguments: [],
      arguments: [obj(tx, poolObjectId)]
    });
    tx.setGasBudget(_RefundManagerSingleton.REFUND_GAS_BUGET);
    const res = await this.provider.devInspectTransactionBlock({
      sender: _RefundManagerSingleton.SIMLATION_ACCOUNT_ADDRESS,
      transactionBlock: tx
    });
    if (!res.results) {
      throw new Error("No results found for the request phase request");
    }
    const returnValues = res.results[0].returnValues;
    if (!returnValues) {
      throw new Error("Return values are undefined");
    }
    const phase = returnValues[0][0][0];
    return phase;
  }
  async getUnclaimedAddressesList({
    poolObjectId,
    transaction
  }) {
    const tx = transaction ?? new import_transactions6.TransactionBlock();
    const txRes = tx.moveCall({
      target: `${_RefundManagerSingleton.REFUND_PACKAGE_ADDRESS}::refund::unclaimed`,
      typeArguments: [],
      arguments: [obj(tx, poolObjectId)]
    });
    tx.setGasBudget(_RefundManagerSingleton.REFUND_GAS_BUGET);
    const res = await this.provider.devInspectTransactionBlock({
      sender: _RefundManagerSingleton.SIMLATION_ACCOUNT_ADDRESS,
      transactionBlock: tx
    });
    if (!res.results) {
      throw new Error("No results found for the request phase request");
    }
    const returnValues = res.results[0].returnValues;
    if (!returnValues) {
      throw new Error("Return values are undefined");
    }
    const table = returnValues[0][0];
    return table;
  }
  async getClaimAmountNormal({
    poolObjectId,
    affectedAddress
  }) {
    const tx = new import_transactions6.TransactionBlock();
    const txRes = tx.moveCall({
      target: `${_RefundManagerSingleton.REFUND_PACKAGE_ADDRESS}::refund::amount_to_claim`,
      typeArguments: [],
      arguments: [obj(tx, poolObjectId), tx.pure(affectedAddress)]
    });
    tx.setGasBudget(_RefundManagerSingleton.REFUND_GAS_BUGET);
    const res = await this.provider.devInspectTransactionBlock({
      sender: _RefundManagerSingleton.SIMLATION_ACCOUNT_ADDRESS,
      transactionBlock: tx
    });
    if (!res.results) {
      throw new Error("No results found for the request phase request");
    }
    const returnValues = res.results[0].returnValues;
    if (!returnValues) {
      throw new Error("Return values are undefined");
    }
    const rawAmountBytes = returnValues[0][0];
    const decoded = import_bcs2.bcs.de("Option<u64>", new Uint8Array(rawAmountBytes));
    let amount;
    if ("Some" in decoded && decoded.Some) {
      amount = decoded.Some;
    } else if ("None" in decoded && decoded.None === true) {
      amount = "0";
    } else {
      throw new Error("Decoded amount has an invalid shape");
    }
    const amountInMist = amount.toString();
    const amountInSui = new import_bignumber7.default(amount).div(SUI_DENOMINATOR).toString();
    return { mist: amountInMist, sui: amountInSui };
  }
  async getClaimAmountBoosted({
    poolObjectId,
    affectedAddress
  }) {
    const tx = new import_transactions6.TransactionBlock();
    const txRes = tx.moveCall({
      target: `${_RefundManagerSingleton.REFUND_PACKAGE_ADDRESS}::refund::amount_to_claim_boosted`,
      typeArguments: [],
      arguments: [obj(tx, poolObjectId), tx.pure(affectedAddress)]
    });
    tx.setGasBudget(_RefundManagerSingleton.REFUND_GAS_BUGET);
    const res = await this.provider.devInspectTransactionBlock({
      sender: _RefundManagerSingleton.SIMLATION_ACCOUNT_ADDRESS,
      transactionBlock: tx
    });
    if (!res.results) {
      throw new Error("No results found for the request phase request");
    }
    const returnValues = res.results[0].returnValues;
    if (!returnValues) {
      throw new Error("Return values are undefined");
    }
    const rawAmountBytes = returnValues[0][0];
    const decoded = import_bcs2.bcs.de("Option<u64>", new Uint8Array(rawAmountBytes));
    let amount;
    if ("Some" in decoded && decoded.Some) {
      amount = decoded.Some;
    } else if ("None" in decoded && decoded.None === true) {
      amount = "0";
    } else {
      throw new Error("Decoded amount has an invalid shape");
    }
    const amountInMist = amount.toString();
    const amountInSui = new import_bignumber7.default(amount).div(SUI_DENOMINATOR).toString();
    return { mist: amountInMist, sui: amountInSui };
  }
  async getClaimAmount({ poolObjectId, affectedAddress }) {
    const [normalRefund, boostedRefund] = await Promise.all([
      this.getClaimAmountNormal({ poolObjectId, affectedAddress }),
      this.getClaimAmountBoosted({ poolObjectId, affectedAddress })
    ]);
    return { normalRefund, boostedRefund };
  }
  async getBoostedClaimCap({ ownerAddress, newAddress }) {
    const allBoostedClaimCapObjects = await getAllOwnedObjects({
      provider: this.provider,
      options: {
        owner: ownerAddress,
        // TODO: Check for correctness
        // Because this might not work in case of upgraded package id, so as a solution,
        // we need to use another filter, which would allow to fetch `BoostedClaimCap` for multiple package addresses
        filter: { StructType: _RefundManagerSingleton.BOOSTER_OBJECT_TYPE },
        options: {
          showContent: true,
          showType: true
        }
      }
    });
    const allBoostedClaimCapListRaw = allBoostedClaimCapObjects;
    if (!Array.isArray(allBoostedClaimCapListRaw)) {
      throw new Error("[getBoostedClaimCap] Wrong shape returned for get boosted claim cap request");
    }
    const listOfObjectClaimCaps = allBoostedClaimCapListRaw.filter(
      (el) => isBoostedClaimCap(el)
    );
    const boostedClaimCapsAssociatedWithNewAddress = listOfObjectClaimCaps.filter(
      (el) => el.data.content.fields.new_address === newAddress
    );
    const boostedClaimCapsNotAssociatedWithNewAddress = listOfObjectClaimCaps.filter(
      (el) => el.data.content.fields.new_address !== newAddress
    );
    const isAnyBoostedClaimCapExists = listOfObjectClaimCaps.length > 0 || boostedClaimCapsAssociatedWithNewAddress.length > 0;
    const boostedClaimCapObject = boostedClaimCapsAssociatedWithNewAddress[0];
    const boostedClaimCapNotAssociatedWithNewAddress = boostedClaimCapsNotAssociatedWithNewAddress[0];
    return {
      boostedClaimCapObjectId: boostedClaimCapObject?.data?.objectId ?? null,
      isAnyBoostedClaimCapExists,
      boostedClaimCapNotAssociatedWithNewAddressObjectId: boostedClaimCapNotAssociatedWithNewAddress?.data?.objectId ?? null
    };
  }
  static getReturnBoosterCapTransaction({
    transaction,
    boostedClaimCap,
    poolObjectId
  }) {
    const tx = transaction ?? new import_transactions6.TransactionBlock();
    const txRes = tx.moveCall({
      target: `${_RefundManagerSingleton.REFUND_PACKAGE_ADDRESS}::booster::return_booster_cap`,
      typeArguments: [],
      arguments: [obj(tx, boostedClaimCap), obj(tx, poolObjectId)]
    });
    tx.setGasBudget(_RefundManagerSingleton.REFUND_GAS_BUGET);
    return { tx, txRes };
  }
  static getReclaimFundsTransaction({ poolObjectId }) {
    const tx = new import_transactions6.TransactionBlock();
    const txRes = tx.moveCall({
      target: `${_RefundManagerSingleton.REFUND_PACKAGE_ADDRESS}::refund::reclaim_funds`,
      typeArguments: [],
      arguments: [obj(tx, poolObjectId)]
    });
    tx.setGasBudget(_RefundManagerSingleton.REFUND_GAS_BUGET);
    return { tx, txRes };
  }
  static getAllowBoostedClaim({
    publisherObjectId,
    poolObjectId,
    affectedAddress,
    newAddress,
    transaction
  }) {
    const tx = transaction ?? new import_transactions6.TransactionBlock();
    const txRes = tx.moveCall({
      target: `${_RefundManagerSingleton.REFUND_PACKAGE_ADDRESS}::booster::allow_boosted_claim`,
      typeArguments: [],
      arguments: [obj(tx, publisherObjectId), obj(tx, poolObjectId), tx.pure(affectedAddress), tx.pure(newAddress)]
    });
    tx.setGasBudget(_RefundManagerSingleton.REFUND_GAS_BUGET);
    return { tx, txRes };
  }
  static getClaimRefundBoostedTransaction({
    boostedClaimCap,
    poolObjectId,
    clock = import_utils13.SUI_CLOCK_OBJECT_ID,
    userRinbotRefundDestinationAddress,
    transaction
  }) {
    const tx = transaction ?? new import_transactions6.TransactionBlock();
    const txRes = tx.moveCall({
      target: `${_RefundManagerSingleton.REFUND_PACKAGE_ADDRESS}::booster::claim_refund_boosted`,
      typeArguments: [],
      arguments: [
        obj(tx, boostedClaimCap),
        obj(tx, poolObjectId),
        tx.pure(userRinbotRefundDestinationAddress),
        obj(tx, clock)
      ]
    });
    tx.setGasBudget(_RefundManagerSingleton.REFUND_GAS_BUGET);
    return { tx, txRes };
  }
  static getMessageForBoostedRefund({
    poolObjectId,
    affectedAddress,
    newAddress
  }) {
    const affectedAddressBytes = hexStringToByteArray(affectedAddress);
    const newAddressBytes = hexStringToByteArray(newAddress);
    const poolIdBytes = hexStringToByteArray(poolObjectId);
    const msg = new Uint8Array(affectedAddressBytes.length + newAddressBytes.length + poolIdBytes.length);
    msg.set(affectedAddressBytes, 0);
    msg.set(newAddressBytes, affectedAddressBytes.length);
    msg.set(poolIdBytes, affectedAddressBytes.length + newAddressBytes.length);
    return { bytes: msg, hex: Buffer.from(msg).toString("hex") };
  }
  static async signMessageSignatureForBoostedRefund({
    keypair,
    poolObjectId,
    affectedAddress,
    newAddress
  }) {
    const message = _RefundManagerSingleton.getMessageForBoostedRefund({ poolObjectId, affectedAddress, newAddress });
    const signedMessage = await keypair.signPersonalMessage(message.bytes);
    return signedMessage;
  }
  /*
  @throws an error in case signature is not valid
  */
  static async verifySignedMessageForBoostedRefund({
    poolObjectId,
    affectedAddress,
    newAddress,
    signedMessageSignature
  }) {
    const targetMessage = _RefundManagerSingleton.getMessageForBoostedRefund({
      poolObjectId,
      affectedAddress,
      newAddress
    });
    const signedPublicKey = await (0, import_verify.verifyPersonalMessage)(targetMessage.bytes, signedMessageSignature);
    if (affectedAddress !== signedPublicKey.toSuiAddress()) {
      throw new Error("Affected address is different from the signer of the message");
    }
    return true;
  }
};
_RefundManagerSingleton.SIMLATION_ACCOUNT_ADDRESS = "0xca9711c3de3ef474209ebd920b894e4d374ff09e210bc31cbd2d266f7bff90ca";
_RefundManagerSingleton.REFUND_PACKAGE_ADDRESS = "0x2843d7add326ac31e71c75954b79a059aa13456946d26422a9fd20f75e06b468";
_RefundManagerSingleton.REFUND_PACKAGE_ADDRESS_READ = "";
_RefundManagerSingleton.REFUND_POOL_OBJECT_ID = "0x82544a2f83c6ed1c1092d4b0e92837e2c3bd983228dd6529da632070b6657a97";
_RefundManagerSingleton.REFUND_POOL_PUBLISHER_OBJECT_ID = "0xf3f6708de5137be44e2dde8a2fd33e7ebd64398d55312414c7b0e3309367e378";
_RefundManagerSingleton.REFUND_BOOSTED_CLAIM_CAP_STRUCT_TYPE_NAME = "BoostedClaimCap";
_RefundManagerSingleton.REFUND_MODULE_NAME = "refund";
_RefundManagerSingleton.REFUND_BOOSTED_MODULE_NAME = "booster";
// eslint-disable-next-line max-len
_RefundManagerSingleton.BOOSTER_OBJECT_TYPE = `${_RefundManagerSingleton.REFUND_PACKAGE_ADDRESS}::${_RefundManagerSingleton.REFUND_BOOSTED_MODULE_NAME}::${_RefundManagerSingleton.REFUND_BOOSTED_CLAIM_CAP_STRUCT_TYPE_NAME}`;
_RefundManagerSingleton.REFUND_GAS_BUGET = 5e7;
_RefundManagerSingleton.REFUND_GAS_BUDGET_ADDRESS_ADDITION = 1e9;
var RefundManagerSingleton = _RefundManagerSingleton;

// src/providers/utils/convertSlippage.ts
function convertSlippage(slippagePercentage) {
  if (typeof slippagePercentage !== "number" || isNaN(slippagePercentage)) {
    throw new Error("Slippage percentage must be a valid number.");
  }
  if (slippagePercentage < 0 || slippagePercentage >= 100) {
    throw new Error("Slippage percentage must be between 0 (inclusive) and 100 (exclusive).");
  }
  const absoluteSlippage = slippagePercentage / 100;
  return absoluteSlippage;
}

// src/providers/utils/convertToBNFormat.ts
var import_bignumber8 = __toESM(require("bignumber.js"));
function convertToBNFormat(amount, decimals) {
  if (decimals < 0) {
    throw new Error("Decimal points must be a non-negative integer.");
  }
  if (!Number.isInteger(decimals)) {
    throw new Error("Decimal points must be an integer.");
  }
  const bnAmount = new import_bignumber8.default(amount).multipliedBy(10 ** decimals);
  if (isNaN(bnAmount.toNumber())) {
    throw new Error(`Invalid decimal conversion: Decimals ${decimals} is not correct for the given token.`);
  }
  return bnAmount.toString();
}

// src/providers/utils/isValidTokenAddress.ts
var tokenAddressRegex = new RegExp(`^${TOKEN_ADDRESS_BASE_REGEX.source}$`);
function isValidTokenAddress(str) {
  return tokenAddressRegex.test(str);
}

// src/providers/utils/normalizeSuiCoinType.ts
function normalizeSuiCoinType(address) {
  if (address === LONG_SUI_COIN_TYPE) {
    return address;
  } else {
    return LONG_SUI_COIN_TYPE;
  }
}

// src/providers/utils/getSuiProvider.ts
var import_client4 = require("@mysten/sui.js/client");
var getSuiProvider = (suiProviderOptions) => {
  const provider = new import_client4.SuiClient(suiProviderOptions);
  return provider;
};

// src/providers/utils/isValidTokenAmount.ts
var import_bignumber9 = __toESM(require("bignumber.js"));
var isValidTokenAmount = ({
  amount,
  maxAvailableAmount,
  decimals,
  minAvailableAmount = "0"
}) => {
  const maxAvailableAmountBigInt = new import_bignumber9.default(maxAvailableAmount).times(10 ** decimals);
  const minAvailableAmountBigInt = new import_bignumber9.default(minAvailableAmount).times(10 ** decimals);
  const amountNumber = new import_bignumber9.default(amount).times(10 ** decimals);
  if (isNaN(amountNumber.toNumber())) {
    return { isValid: false, reason: "Amount must be a valid number." };
  }
  if (amountNumber.isLessThanOrEqualTo(0)) {
    return { isValid: false, reason: "Amount must be a positive value." };
  }
  if (amountNumber.isLessThan(minAvailableAmountBigInt)) {
    return { isValid: false, reason: "Amount exceeds the minimum available amount." };
  }
  if (amountNumber.isGreaterThan(maxAvailableAmountBigInt)) {
    return { isValid: false, reason: "Amount exceeds the maximum available amount." };
  }
  return { isValid: true, reason: "Valid amount." };
};

// src/providers/utils/transactionFromSerializedTransaction.ts
var import_transactions7 = require("@mysten/sui.js/transactions");
var transactionFromSerializedTransaction = (serializedTransaction) => {
  const txBlock = new import_transactions7.TransactionBlock(import_transactions7.TransactionBlock.from(serializedTransaction));
  return txBlock;
};

// src/providers/aftermath/aftermath.ts
var import_transactions8 = require("@mysten/sui.js/transactions");
var import_aftermath_ts_sdk = require("aftermath-ts-sdk");
var import_bignumber12 = __toESM(require("bignumber.js"));

// src/emitters/EventEmitter.ts
var EventEmitter = class {
  constructor() {
    this.events = {};
    this.buffer = [];
  }
  /**
   * @public
   * @method on
   * @description Adds a callback function to an event.
   * @param {string} eventName - The name of the event.
   * @param {UpdateCoinsCacheHandler} callback - The callback function to be executed when the event is emitted.
   */
  on(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(callback);
  }
  /**
   * @public
   * @method emit
   * @description Emits an event and executes all registered callback functions.
   * @param {string} eventName - The name of the event to be emitted.
   * @param {UpdatedCoinsCache} arg - The data to be passed to the event handlers.
   */
  emit(eventName, arg) {
    if (this.events[eventName]) {
      this.events[eventName].forEach((callback) => callback(arg));
    }
  }
  /**
   * @public
   * @method bufferEvent
   * @description Buffers an event to be emitted later.
   * @param {string} eventName - The name of the event to be buffered.
   * @param {UpdatedCoinsCache} data - The data associated with the event.
   */
  bufferEvent(eventName, data) {
    this.buffer.push({ eventName, data });
  }
  /**
   * @public
   * @method flushBuffer
   * @description Flushes the buffered events and emits them.
   */
  flushBuffer() {
    this.buffer.forEach(({ eventName, data }) => this.emit(eventName, data));
    this.buffer = [];
  }
  /**
   * @public
   * @method getEvents
   * @description Returns the record of events and their corresponding handlers.
   * @return {Record<string, UpdateCoinsCacheHandler[]>} The record of events and handlers.
   */
  getEvents() {
    return this.events;
  }
  /**
   * @public
   * @method getBuffer
   * @description Returns the buffer containing buffered events.
   * @return {{ eventName: string, data: UpdatedCoinsCache }[]} The buffer containing buffered events.
   */
  getBuffer() {
    return this.buffer;
  }
};

// src/storages/InMemoryStorage.ts
var InMemoryStorageSingleton = class _InMemoryStorageSingleton {
  /**
   * Private constructor for the singleton pattern.
   */
  constructor() {
  }
  /**
   * Gets the instance of the InMemoryStorageSingleton.
   * @return {InMemoryStorageSingleton} - The singleton instance.
   */
  static getInstance() {
    if (!_InMemoryStorageSingleton._instance) {
      console.warn(`
      Warning: InMemoryStorageSingleton is being used as a placeholder. While it's safe to use for basic scenarios,
      note that no prefilling data from cache storage will occur. Consider providing your own storage implementation
      for more advanced use cases.
    `);
      const instance = new _InMemoryStorageSingleton();
      _InMemoryStorageSingleton._instance = instance;
    }
    return _InMemoryStorageSingleton._instance;
  }
  /**
   * Placeholder for setCache method. Implement your custom logic if needed.
   * @param {SetCacheParams} params - SetCacheParams object containing key and value.
   * @return {Promise<void>} - A promise that resolves once the cache is set.
   */
  async setCache(params) {
  }
  /**
   * Placeholder for getCache method. Implement your custom logic if needed.
   * @param {GetCacheParams} params - GetCacheParams object containing the key.
   * @return {Promise<StorageValue>} - A promise that resolves to the retrieved StorageValue.
   */
  async getCache(params) {
    return null;
  }
};

// src/storages/types.ts
var StorageProperty = /* @__PURE__ */ ((StorageProperty2) => {
  StorageProperty2["Coins"] = "coins";
  StorageProperty2["Paths"] = "paths";
  StorageProperty2["Pools"] = "pools";
  StorageProperty2["CoinsMetadata"] = "coinsMetadata";
  StorageProperty2["CetusPaths"] = "cetusPaths";
  return StorageProperty2;
})(StorageProperty || {});

// src/storages/utils/typeguards.ts
function isStorageValue(data) {
  return typeof data === "object" && data !== null && "timestamp" in data && "value" in data && (isCommonCoinDataArray(data.value) || isCommonPoolDataArray(data.value) || isShortCoinMetadataArray(data.value) || isShortPoolDataArray(data.value));
}
function isCommonCoinDataArray(data) {
  return Array.isArray(data) && data.every((item) => isCommonCoinData(item));
}
function isCommonCoinData(data) {
  return typeof data === "object" && data !== null && "type" in data && typeof data.type === "string" && "decimals" in data && typeof data.decimals === "number" && (data.symbol === void 0 || typeof data.symbol === "string");
}
function isCommonPoolDataArray(data) {
  return Array.isArray(data) && data.every(
    (item) => typeof item === "object" && item !== null && "base" in item && typeof item.base === "string" && "quote" in item && typeof item.quote === "string"
  );
}
function isShortCoinMetadataArray(data) {
  return Array.isArray(data) && data.every(
    (item) => typeof item === "object" && item !== null && "decimals" in item && typeof item.decimals === "number" && "type" in item && typeof item.type === "string"
  );
}
function isShortPoolDataArray(data) {
  return Array.isArray(data) && data.every(
    (item) => typeof item === "object" && item !== null && "poolId" in item && typeof item.poolId === "string" && "coinTypeA" in item && typeof item.coinTypeA === "string" && "coinTypeB" in item && typeof item.coinTypeB === "string"
  );
}
function isCetusPathForStorageArray(data) {
  if (!Array.isArray(data))
    return false;
  return data.every(
    (item) => typeof item === "object" && item !== null && "base" in item && typeof item.base === "string" && "quote" in item && typeof item.quote === "string" && "addressMap" in item && Array.isArray(item.addressMap) && item.addressMap.every(
      (pair) => Array.isArray(pair) && pair.length === 2 && typeof pair[0] === "number" && typeof pair[1] === "string"
    )
  );
}

// src/storages/utils/getCoinsCache.ts
var getCoinsCache = async ({
  storage,
  provider,
  updateCacheInterval
}) => {
  let coinsCache = /* @__PURE__ */ new Map();
  const coins = await storage.getCache({
    provider,
    property: "coins" /* Coins */
  });
  if (isCommonCoinDataArray(coins?.value)) {
    const timestamp = parseInt(coins.timestamp);
    const cacheIsUpToDate = timestamp + updateCacheInterval > Date.now();
    if (cacheIsUpToDate) {
      coinsCache = coins.value.reduce((cache, coin) => {
        cache.set(coin.type, coin);
        return cache;
      }, /* @__PURE__ */ new Map());
    } else {
      console.warn(`[getCoinsCache] ${provider} coins cache is not up to date.`);
    }
  } else if (coins === null) {
    console.warn(`[getCoinsCache] ${provider} Received empty coins from strorage, coins === null `);
  } else {
    const stringifiedCoin = JSON.stringify(coins.value[0]);
    throw new Error(
      `[${provider}] prefillCaches: coins from storage are not (CommonCoinData[] or null). Example of coin: ${stringifiedCoin}`
    );
  }
  return coinsCache;
};

// src/storages/utils/getPathsCache.ts
var getPathsCache = async ({
  storage,
  provider,
  updateCacheInterval
}) => {
  let pathsCache = /* @__PURE__ */ new Map();
  const paths = await storage.getCache({
    provider,
    property: "paths" /* Paths */
  });
  if (isCommonPoolDataArray(paths?.value)) {
    const timestamp = parseInt(paths.timestamp);
    const cacheIsUpToDate = timestamp + updateCacheInterval > Date.now();
    if (cacheIsUpToDate) {
      pathsCache = paths.value.reduce((cache, path) => {
        const key = `${path.base}-${path.quote}`;
        cache.set(key, path);
        return cache;
      }, /* @__PURE__ */ new Map());
    } else {
      console.warn(`[getPathsCache] ${provider} paths cache is not up to date.`);
    }
  } else if (paths === null) {
    console.warn(`[getPathsCache] ${provider} Received empty paths from strorage, paths === null `);
  } else {
    const stringifiedPath = JSON.stringify(paths.value[0]);
    throw new Error(
      `[${provider}] prefillCaches: paths from storage are not (CommonPoolData[] or null). Example of path: ${stringifiedPath}`
    );
  }
  return pathsCache;
};

// src/storages/utils/getCoinsAndPathsCaches.ts
var getCoinsAndPathsCaches = async ({
  storage,
  provider,
  updateCacheInterval
}) => {
  const coinsCache = await getCoinsCache({ storage, provider, updateCacheInterval });
  const pathsCache = await getPathsCache({ storage, provider, updateCacheInterval });
  return { coinsCache, pathsCache };
};

// src/storages/utils/storeCaches.ts
async function storeCaches({
  provider,
  storage,
  coinsCache,
  pathsCache,
  coinsMetadataCache,
  poolsCache
}) {
  try {
    const { data: coins } = coinsCache;
    const timestamp = Date.now().toString();
    await storage.setCache({
      provider,
      property: "coins" /* Coins */,
      value: { value: coins, timestamp }
    });
    if (pathsCache !== void 0) {
      const paths = Array.from(pathsCache.values());
      await storage.setCache({
        provider,
        property: "paths" /* Paths */,
        value: { value: paths, timestamp }
      });
    }
    coinsMetadataCache !== void 0 && await storage.setCache({
      provider,
      property: "coinsMetadata" /* CoinsMetadata */,
      value: { value: coinsMetadataCache, timestamp }
    });
    poolsCache !== void 0 && await storage.setCache({
      provider,
      property: "pools" /* Pools */,
      value: { value: poolsCache, timestamp }
    });
  } catch (error) {
    console.error(`[storeCaches] error for params: provider ${provider} `, error);
    throw error;
  }
}

// src/providers/utils/getCoinInfoFromCache.ts
function getCoinInfoFromCache(coinType, coinsCache) {
  const coinIsSui = coinType === SHORT_SUI_COIN_TYPE || coinType === LONG_SUI_COIN_TYPE;
  const coinTypeInfo = coinIsSui ? coinsCache.get(LONG_SUI_COIN_TYPE) || coinsCache.get(SHORT_SUI_COIN_TYPE) : coinsCache.get(coinType);
  return coinTypeInfo;
}

// src/providers/utils/removeDecimalPart.ts
var import_bignumber10 = __toESM(require("bignumber.js"));
function removeDecimalPart(input) {
  if (isNaN(input.toNumber())) {
    throw new Error("Invalid numeric format: Resulting BigNumber is NaN.");
  }
  const inputStr = input.toString();
  const decimalIndex = inputStr.indexOf(".");
  if (decimalIndex !== -1) {
    const strippedDecimal = inputStr.substring(0, decimalIndex);
    const decimalPart = inputStr.substring(decimalIndex + 1);
    console.warn(`Decimal part (${decimalPart}) of input (${inputStr}) has been stripped.`);
    return new import_bignumber10.default(strippedDecimal);
  }
  return input;
}

// src/providers/aftermath/constants.ts
var fixedOneN = 1e18;

// src/providers/aftermath/create-pool-utils.ts
function getCreatePoolCapIdAndLpCoinType(createLpCoinTransactionResult) {
  const requiredObjectTypePart = "CreatePoolCap";
  const objectChanges = createLpCoinTransactionResult.objectChanges;
  if (objectChanges === null || objectChanges === void 0) {
    throw new Error(
      `[getCreatePoolCapIdAndLpCoinType] object changes are null or undefined for transaction ${createLpCoinTransactionResult.digest}`
    );
  }
  const createdObjectChanges = objectChanges.filter((change) => change.type === "created");
  if (createdObjectChanges.length === 0) {
    throw new Error(
      `[getCreatePoolCapIdAndLpCoinType] there is no created object changes for transaction ${createLpCoinTransactionResult.digest}`
    );
  }
  const requiredObjectChange = createdObjectChanges.find(
    (change) => change.type === "created" && change.objectType.includes(requiredObjectTypePart)
  );
  if (requiredObjectChange === void 0) {
    throw new Error(
      `[getCreatePoolCapIdAndLpCoinType] there is no object change with "${requiredObjectTypePart}" for transaction ${createLpCoinTransactionResult.digest}`
    );
  }
  const matches = requiredObjectChange.type === "created" && requiredObjectChange.objectType.match(/<([^>]*)>/);
  if (matches && matches[1]) {
    const lpCoinType = matches[1];
    const createPoolCapId = requiredObjectChange.objectId;
    return { lpCoinType, createPoolCapId };
  } else {
    throw new Error(
      `[getCreatePoolCapIdAndLpCoinType] could find enough matches to get lpCoinType from object changes.
requiredObjectChange: ${JSON.stringify(requiredObjectChange)}
matches: ${JSON.stringify(matches)}`
    );
  }
}
function getPoolObjectIdFromTransactionResult(createPoolTransactionResult) {
  const requiredObjectTypePart = "pool::Pool";
  const objectChanges = createPoolTransactionResult.objectChanges;
  if (objectChanges === null || objectChanges === void 0) {
    throw new Error(
      `[getPoolObjectIdFromTransactionResult] object changes are null or undefined for transaction ${createPoolTransactionResult.digest}`
    );
  }
  const createdObjectChanges = objectChanges.filter((change) => change.type === "created");
  if (createdObjectChanges.length === 0) {
    throw new Error(
      `[getPoolObjectIdFromTransactionResult] there is no created object changes for transaction ${createPoolTransactionResult.digest}`
    );
  }
  const requiredObjectChange = createdObjectChanges.find(
    (change) => change.type === "created" && change.objectType.includes(requiredObjectTypePart)
  );
  if (requiredObjectChange === void 0) {
    throw new Error(
      `[getPoolObjectIdFromTransactionResult] there is no object change with "${requiredObjectTypePart}" for transaction ${createPoolTransactionResult.digest}`
    );
  }
  if (requiredObjectChange.type === "created") {
    return requiredObjectChange.objectId;
  } else {
    throw new Error("[getPoolObjectIdFromTransactionResult] requiredObjectChange.type is not 'created'.");
  }
}
function numberToFixedBigInt(number) {
  return BigInt(Math.floor(number * fixedOneN));
}
function getLpCoinDecimals(coinsInfo) {
  const { decimals: decimalsA, weight: weightA } = coinsInfo.coinA;
  const { decimals: decimalsB, weight: weightB } = coinsInfo.coinB;
  const weightABigInt = numberToFixedBigInt(weightA);
  const weightBBigInt = numberToFixedBigInt(weightB);
  const mulResA = weightABigInt * BigInt(decimalsA);
  const mulResB = weightBBigInt * BigInt(decimalsB);
  const sumRes = mulResA + mulResB;
  const divRes = sumRes / BigInt(fixedOneN);
  const lpCoinDecimals = Number(divRes);
  return lpCoinDecimals;
}

// src/providers/aftermath/utils.ts
var import_bignumber11 = __toESM(require("bignumber.js"));
var getPathMapAndCoinTypesSet = (pools) => {
  const pathMap = /* @__PURE__ */ new Map();
  const coinTypesSet = /* @__PURE__ */ new Set();
  pools.forEach((pool) => {
    const coinTypes = Object.keys(pool.pool.coins);
    const base = coinTypes[0];
    const quote = coinTypes[1];
    const commonPoolData = {
      base,
      quote
    };
    const poolKey = `${base}-${quote}`;
    pathMap.set(poolKey, commonPoolData);
    coinTypesSet.add(base);
    coinTypesSet.add(quote);
  });
  return { pathMap, coinTypesSet };
};
async function getOwnedPoolInfosFromPools(pools, coinManager) {
  return await Promise.all(
    pools.map(async (pool) => {
      const coinTypes = Object.keys(pool.pool.coins);
      const coins = await Promise.all(
        coinTypes.map(async (type) => {
          const coinInfo = pool.pool.coins[type];
          const coinInfoFromStorage = await coinManager.getCoinByType2(type);
          const decimals = coinInfo.decimals ?? coinInfoFromStorage?.decimals ?? 0;
          const balance = new import_bignumber11.default(coinInfo.balance.toString()).dividedBy(10 ** decimals).toString();
          return {
            type,
            balance,
            symbol: coinInfoFromStorage?.symbol
          };
        })
      );
      return {
        name: pool.pool.name,
        apr: pool.stats?.apr.toString() ?? "0",
        fees: pool.stats?.fees.toString() ?? "0",
        tvl: pool.stats?.tvl.toString() ?? "0",
        volume: pool.stats?.volume.toString() ?? "0",
        poolObjectId: pool.pool.objectId,
        coins
      };
    })
  );
}
function isApiResponseValid(pools) {
  return pools !== void 0 && Array.isArray(pools) && pools.length > 0 && pools.every(isPoolValid);
}
function isPoolObjectValid(poolObject) {
  return typeof poolObject.name === "string" && typeof poolObject.creator === "string" && typeof poolObject.lpCoinType === "string" && typeof poolObject.lpCoinSupply === "bigint" && typeof poolObject.illiquidLpCoinSupply === "bigint" && typeof poolObject.flatness === "bigint" && isPoolCoinsValid(poolObject.coins) && typeof poolObject.lpCoinDecimals === "number";
}
function isPoolCoinsValid(poolCoins) {
  return Object.values(poolCoins).every(isPoolCoinValid);
}
function isPoolCoinValid(poolCoin) {
  return typeof poolCoin.weight === "bigint" && typeof poolCoin.balance === "bigint" && typeof poolCoin.tradeFeeIn === "bigint" && typeof poolCoin.tradeFeeOut === "bigint" && typeof poolCoin.depositFee === "bigint" && typeof poolCoin.withdrawFee === "bigint" && typeof poolCoin.decimalsScalar === "bigint" && typeof poolCoin.normalizedBalance === "bigint" && (typeof poolCoin.decimals === "number" || poolCoin.decimals === void 0);
}
function isPoolValid(pool) {
  return isPoolObjectValid(pool.pool) && (pool.network === void 0 || isSuiNetworkValid(pool.network)) && (pool.stats === void 0 || isPoolStatsValid(pool.stats));
}
function isSuiNetworkValid(suiNetwork) {
  return ["DEVNET", "TESTNET", "LOCAL", "MAINNET"].includes(suiNetwork);
}
function isPoolStatsValid(poolStats) {
  return typeof poolStats.volume === "number" && typeof poolStats.tvl === "number" && Array.isArray(poolStats.supplyPerLps) && poolStats.supplyPerLps.every((supply) => typeof supply === "number") && typeof poolStats.lpPrice === "number" && typeof poolStats.fees === "number" && typeof poolStats.apr === "number";
}
function isCoinMetadaWithInfoApiResponseValid(metadata) {
  return metadata !== void 0 && isCoinMetadaWithInfoValid(metadata);
}
function isCoinMetadataValid(coinMetadata) {
  return typeof coinMetadata.decimals === "number" && typeof coinMetadata.description === "string" && (typeof coinMetadata.iconUrl === "string" || coinMetadata.iconUrl === null) && (typeof coinMetadata.id === "string" || coinMetadata.id === null) && typeof coinMetadata.name === "string" && typeof coinMetadata.symbol === "string";
}
function isCoinMetadaWithInfoValid(coinMetadaWithInfo) {
  return isCoinMetadataValid(coinMetadaWithInfo) && (typeof coinMetadaWithInfo.isGenerated === "boolean" || coinMetadaWithInfo.isGenerated === void 0);
}

// src/providers/aftermath/aftermath.ts
var _AftermathSingleton = class _AftermathSingleton extends EventEmitter {
  /**
   * @constructor
   * @param {Omit<AftermathOptions, "lazyLoading">} options - Options for AftermathSingleton.
   */
  constructor(options) {
    super();
    this.isSmartRoutingAvailable = true;
    this.providerName = "Aftermath";
    this.poolsCache = [];
    this.pathsCache = /* @__PURE__ */ new Map();
    this.coinsCache = /* @__PURE__ */ new Map();
    this.buildDcaTxBlockAdapter = () => {
      throw new Error("Not implemented");
    };
    this.aftermathSdk = new import_aftermath_ts_sdk.Aftermath("MAINNET");
    const { updateIntervally = true, ...restCacheOptions } = options.cacheOptions;
    this.cacheOptions = { updateIntervally, ...restCacheOptions };
    this.storage = options.cacheOptions.storage ?? InMemoryStorageSingleton.getInstance();
  }
  /**
   * @static
   * @method getInstance
   * @async
   * @param {AftermathOptions} [options] - Options for AftermathSingleton instance.
   * @return {Promise<AftermathSingleton>}
   * @throws Error if options are not provided.
   */
  static async getInstance(options) {
    if (!_AftermathSingleton._instance) {
      if (options === void 0) {
        throw new Error("[Aftermath] Options are required in arguments to create instance.");
      }
      const { cacheOptions, lazyLoading = true } = options;
      const instance = new _AftermathSingleton({ cacheOptions });
      lazyLoading ? instance.init() : await instance.init();
      _AftermathSingleton._instance = instance;
    }
    return _AftermathSingleton._instance;
  }
  /**
   * @private
   * @method init
   * @description Initializes the AftermathSingleton instance.
   * @return {Promise<void>}
   */
  async init() {
    console.debug(`[${this.providerName}] Singleton initiating.`);
    await this.fillCacheFromStorage();
    await this.updateCaches();
    this.cacheOptions.updateIntervally && this.updateCachesIntervally();
    this.bufferEvent("cachesUpdate", this.getCoins());
  }
  /**
   * Fills the cache from storage asynchronously.
   *
   * @private
   * @return {Promise<void>} A promise that resolves when the cache is filled from storage.
   */
  async fillCacheFromStorage() {
    try {
      const { coinsCache, pathsCache } = await getCoinsAndPathsCaches({
        storage: this.storage,
        provider: this.providerName,
        updateCacheInterval: this.cacheOptions.updateIntervalInMs
      });
      this.coinsCache = coinsCache;
      this.pathsCache = pathsCache;
    } catch (error) {
      console.error(`[${this.providerName}] fillCacheFromStorage failed:`, error);
    }
  }
  /**
   * Checks if the storage cache is empty.
   *
   * @private
   * @return {boolean} True if the storage cache is empty, false otherwise.
   */
  isStorageCacheEmpty() {
    const isCacheEmpty = this.coinsCache.size === 0 || this.pathsCache.size === 0;
    return isCacheEmpty;
  }
  /**
   * @private
   * @method updateCaches
   * @description Updates caches.
   * @return {Promise<void>}
   */
  async updateCaches({ force } = { force: false }) {
    const isCacheEmpty = this.isStorageCacheEmpty();
    if (isCacheEmpty || force) {
      try {
        await this.updatePoolsCache();
        await this.updatePathsAndCoinsCache();
        this.emit("cachesUpdate", this.getCoins());
        await storeCaches({
          provider: this.providerName,
          storage: this.storage,
          coinsCache: this.getCoins(),
          pathsCache: this.getPaths()
        });
        console.debug("[Aftermath] Caches are updated and stored.");
      } catch (error) {
        console.error("[Aftermath] Caches update failed:", error);
      }
    }
  }
  /**
   * @private
   * @method updateCachesIntervally
   * @description Updates caches periodically.
   * @return {void}
   */
  updateCachesIntervally() {
    let isUpdatingCurrently = false;
    this.intervalId = setInterval(async () => {
      try {
        if (isUpdatingCurrently) {
          return;
        }
        isUpdatingCurrently = true;
        await this.updateCaches({ force: true });
      } finally {
        isUpdatingCurrently = false;
      }
    }, this.cacheOptions.updateIntervalInMs);
    exitHandlerWrapper({ intervalId: this.intervalId, providerName: this.providerName });
  }
  /**
   * @private
   * @method updatePoolsCache
   * @description Updates pools cache.
   * @return {Promise<void>}
   */
  async updatePoolsCache() {
    const poolsInstance = this.aftermathSdk.Pools();
    const pools = await poolsInstance.getAllPools();
    const isValidPoolsResponse = isApiResponseValid(pools);
    if (!isValidPoolsResponse) {
      console.error("[Aftermath] Pools response:", pools);
      throw new Error("Pools response from API is not valid");
    }
    this.poolsCache = pools;
  }
  /**
   * @private
   * @method updatePathsAndCoinsCache
   * @description Updates paths and coins cache.
   * @return {Promise<void>}
   */
  async updatePathsAndCoinsCache() {
    const { pathMap, coinTypesSet } = getPathMapAndCoinTypesSet(this.poolsCache);
    this.pathsCache = pathMap;
    await Promise.all(
      Array.from(coinTypesSet.values()).map(async (coinType) => {
        try {
          const coin = this.aftermathSdk.Coin();
          const metadata = await coin.getCoinMetadata(coinType);
          const isValidCoinMetadataResponse = isCoinMetadaWithInfoApiResponseValid(metadata);
          if (isValidCoinMetadataResponse) {
            this.coinsCache.set(coinType, { symbol: metadata.symbol, type: coinType, decimals: metadata.decimals });
          }
        } catch (error) {
          console.error(`[Aftermath] Error while fetching metadata about coin ${coinType}:`, error);
        }
      })
    );
  }
  /**
   * @public
   * @method getPool
   * @description Gets the pool with the specified coin types.
   * @param {string} coinTypeA - Coin type A.
   * @param {string} coinTypeB - Coin type B.
   * @return {Pool} The pool object.
   */
  getPool(coinTypeA, coinTypeB) {
    const pool = this.poolsCache.find(
      (pool2) => Object.keys(pool2.pool.coins).includes(coinTypeA) && Object.keys(pool2.pool.coins).includes(coinTypeB)
    );
    if (!pool) {
      throw new Error(`[Aftermath] Cannot find pool with coinTypeA "${coinTypeA}" and coinTypeB "${coinTypeB}".`);
    }
    return pool;
  }
  /**
   * @public
   * @method getPools
   * @description Gets all pools.
   * @return {Pool[]} Array of pools.
   */
  getPools() {
    return this.poolsCache;
  }
  /**
   * @public
   * @method getCoins
   * @description Gets the updated coins cache.
   * @return {UpdatedCoinsCache} Updated coins cache.
   */
  getCoins() {
    const allCoins = Array.from(this.coinsCache.values());
    return { provider: this.providerName, data: allCoins };
  }
  /**
   * @public
   * @method getPaths
   * @description Gets the paths cache.
   * @return {Map<string, CommonPoolData>} Paths cache.
   */
  getPaths() {
    return this.pathsCache;
  }
  /**
   * @public
   * @method getRouteData
   * @description Gets route data.
   * @param {Object} params - Parameters for route data.
   * @param {string} params.coinTypeFrom - Coin type from.
   * @param {string} params.coinTypeTo - Coin type to.
   * @param {string} params.inputAmount - Input amount.
   * @return {Promise<{ outputAmount: bigint, route: RouterCompleteTradeRoute }>} Route data.
   */
  async getRouteData({
    coinTypeFrom,
    coinTypeTo,
    inputAmount
  }) {
    const { outputAmount, route } = await this.getSmartOutputAmountData(coinTypeFrom, coinTypeTo, inputAmount);
    return { outputAmount, route };
  }
  /**
   * @public
   * @method getDirectOutputAmount
   * @description Calculates the direct output amount for a given input amount and coin types.
   * @param {Pool} pool - The pool object.
   * @param {string} inputAmount - The input amount.
   * @param {string} coinTypeFrom - The coin type from.
   * @param {string} coinTypeTo - The coin type to.
   * @return {bigint} The direct output amount.
   */
  getDirectOutputAmount(pool, inputAmount, coinTypeFrom, coinTypeTo) {
    const coinFromDecimals = pool.pool.coins[coinTypeFrom].decimals;
    if (coinFromDecimals === void 0) {
      throw new Error(`[Aftermath] Coin with type "${coinTypeFrom}" has no decimals.`);
    }
    const coinInAmountBigNumber = new import_bignumber12.default(inputAmount).multipliedBy(10 ** coinFromDecimals);
    const coinInAmount = BigInt(coinInAmountBigNumber.toString());
    const outputAmount = pool.getTradeAmountOut({
      coinInAmount,
      coinInType: coinTypeFrom,
      coinOutType: coinTypeTo
    });
    return outputAmount;
  }
  /**
   * @private
   * @method getSmartOutputAmountData
   * @description Retrieves smart output amount data for the given coin types and input amount.
   * @param {string} coinTypeFrom - The coin type from.
   * @param {string} coinTypeTo - The coin type to.
   * @param {string} inputAmount - The input amount.
   * @return {Promise<SmartOutputAmountData>} A Promise that resolves to smart output amount data.
   */
  async getSmartOutputAmountData(coinTypeFrom, coinTypeTo, inputAmount) {
    const coinTypeFromInfo = getCoinInfoFromCache(coinTypeFrom, this.coinsCache);
    if (coinTypeFromInfo === void 0) {
      throw new Error(`[Aftermath] Cannot find info about coin "${coinTypeFrom}".`);
    }
    const inputCoinDecimals = coinTypeFromInfo.decimals;
    const inputAmountWithDecimalsBigNumber = new import_bignumber12.default(inputAmount).multipliedBy(10 ** inputCoinDecimals);
    const inputAmountWithoutExceededDecimalPart = removeDecimalPart(inputAmountWithDecimalsBigNumber);
    const inputAmountWithDecimals = BigInt(inputAmountWithoutExceededDecimalPart.toString());
    const routerInstance = this.aftermathSdk.Router();
    const route = await routerInstance.getCompleteTradeRouteGivenAmountIn({
      coinInType: coinTypeFrom,
      coinOutType: coinTypeTo,
      coinInAmount: inputAmountWithDecimals
    });
    const smartOutputAmount = route.coinOut.amount;
    return { outputAmount: smartOutputAmount, route };
  }
  /**
   * @public
   * @method getSwapTransaction
   * @description Retrieves the swap transaction for the given route and public key.
   * @param {RouterCompleteTradeRoute} route - The complete trade route.
   * @param {string} publicKey - The public key.
   * @param {number} [slippagePercentage=10] - The slippage percentage.
   * @return {Promise<TransactionBlock>} A Promise that resolves to the swap transaction.
   */
  async getSwapTransaction({
    route,
    publicKey,
    slippagePercentage = 10
  }) {
    const absoluteSlippage = convertSlippage(slippagePercentage);
    const routerInstance = this.aftermathSdk.Router();
    const modernTxBlock = await routerInstance.getTransactionForCompleteTradeRoute({
      walletAddress: publicKey,
      completeRoute: route,
      slippage: absoluteSlippage
    });
    const txBlock = new import_transactions8.TransactionBlock(import_transactions8.TransactionBlock.from(modernTxBlock.serialize()));
    return txBlock;
  }
  /**
   * Gets a transaction block for swapping tokens based on provided swap data.
   *
   * Note: This method is not implemented yet.
   *
   * @public
   * @async
   * @param {SwapRequiredData} swapRequiredData - The required data for the swap.
   * @param {string} publicKey - The public key of the user.
   * @param {number} [slippagePercentage=10] - The slippage percentage.
   * @return {Promise<TransactionBlock>} A Promise that resolves to a TransactionBlock.
   */
  async getSwapTransactionDoctored({
    route,
    publicKey,
    slippagePercentage = 10
  }) {
    throw new Error(`[${this.providerName}] getSwapTransactionDoctored method not implemented`);
  }
  /**
   * Retrieves a transaction block for creating an LP coin.
   *
   * @public
   * @static
   * @param {CreateLpCoinInput} input - The input parameters for creating the LP coin transaction.
   * @param {string} input.publicKey - The public key associated with the wallet.
   * @param {number} input.lpCoinDecimals - The number of decimal places for the LP coin.
   * @return {Promise<TransactionBlock>} A promise that resolves to a transaction block representing the
   * creation of the LP coin.
   */
  static async getCreateLpCoinTransaction({
    publicKey,
    lpCoinDecimals
  }) {
    const sdk = new import_aftermath_ts_sdk.Aftermath("MAINNET");
    const pools = sdk.Pools();
    const createLpCoinTransaction = await pools.getPublishLpCoinTransaction({
      walletAddress: publicKey,
      lpCoinDecimals
    });
    return new import_transactions8.TransactionBlock(import_transactions8.TransactionBlock.from(createLpCoinTransaction.serialize()));
  }
  /**
   * Retrieves a transaction block for creating a liquidity pool.
   *
   * LIMITATION: If client created pool and now wants to create one more with the same coins and the same amounts,
   * creation will be FAILED. At least one amount must be different from the amount from the existing pool.
   *
   * @public
   * @static
   * @param {CreatePoolInput} input - The input parameters for creating the pool transaction.
   * @param {string} input.publicKey - The public key associated with the wallet.
   * @param {any} input.createLpCoinTransactionResult - The result of the create LP coin transaction.
   * @param {CoinMetadata} input.lpCoinMetadata - The metadata of the LP coin.
   * @param {Record<string, CoinMetadata>} input.coinsInfo - Information about the coins involved in the pool.
   * @param {string} input.poolName - The name of the pool.
   * @return {Promise<TransactionBlock>} A promise that resolves to a transaction block representing the creation
   * of the liquidity pool.
   */
  static async getCreatePoolTransaction({
    publicKey,
    createLpCoinTransactionResult,
    lpCoinMetadata,
    coinsInfo,
    poolName
  }) {
    const sdk = new import_aftermath_ts_sdk.Aftermath("MAINNET");
    const { lpCoinType, createPoolCapId } = getCreatePoolCapIdAndLpCoinType(createLpCoinTransactionResult);
    const pools = sdk.Pools();
    const createPoolTransaction = await pools.getCreatePoolTransaction({
      coinsInfo: Object.values(coinsInfo),
      createPoolCapId,
      lpCoinType,
      lpCoinMetadata,
      walletAddress: publicKey,
      // TODO: Implement stable pools creation
      poolFlatness: 0,
      poolName,
      respectDecimals: false,
      isSponsoredTx: false
    });
    return new import_transactions8.TransactionBlock(import_transactions8.TransactionBlock.from(createPoolTransaction.serialize()));
  }
  /**
   * Generates the URL for accessing a liquidity pool based on the result of a create pool transaction.
   *
   * @public
   * @static
   * @param {SuiTransactionBlockResponse} createPoolTransactionResult - The result of the create pool transaction.
   * @return {string} The URL for accessing the liquidity pool.
   */
  static getPoolUrl(createPoolTransactionResult) {
    const poolObjectId = getPoolObjectIdFromTransactionResult(createPoolTransactionResult);
    return `${this.AFTERMATH_POOL_URL}/${poolObjectId}`;
  }
  /**
   * Retrieves weights for two coins based on their amounts and current prices.
   *
   * @public
   * @static
   * @param {GetWeightsInput} coinsInfo - Information about the coins and their amounts.
   * @return {Promise<{ weightA: number, weightB: number }>} A promise that resolves to an object
   * containing weights for the two coins.
   */
  static async getWeights(coinsInfo) {
    const sdk = new import_aftermath_ts_sdk.Aftermath("MAINNET");
    const { type: coinTypeA, amount: amountA } = coinsInfo.coinA;
    const { type: coinTypeB, amount: amountB } = coinsInfo.coinB;
    const prices = sdk.Prices();
    const priceA = await prices.getCoinPrice({ coin: coinTypeA });
    const priceB = await prices.getCoinPrice({ coin: coinTypeB });
    if (priceA === -1 || priceB === -1) {
      return { weightA: 0.5, weightB: 0.5 };
    }
    const usdAmountA = new import_bignumber12.default(amountA).multipliedBy(priceA);
    const usdAmountB = new import_bignumber12.default(amountB).multipliedBy(priceB);
    const usdSum = usdAmountA.plus(usdAmountB);
    let weightA = new import_bignumber12.default(usdAmountA.dividedBy(usdSum).toFixed(4));
    let weightB = new import_bignumber12.default(usdAmountB.dividedBy(usdSum).toFixed(4));
    if (weightA.plus(weightB) !== new import_bignumber12.default(1)) {
      const remainder = new import_bignumber12.default(new import_bignumber12.default(1).minus(weightA).minus(weightB).toFixed(4));
      if (weightA > weightB) {
        weightB = weightB.plus(remainder);
      } else {
        weightA = weightA.plus(remainder);
      }
    }
    return { weightA: weightA.toNumber(), weightB: weightB.toNumber() };
  }
  /**
   * Retrieves the maximum and minimum amount of the second coin based on the amount of the first coin.
   *
   * NOTE: This method will be used only when both coins have a price retrievable from the API. If at least
   * one coin lacks a price, it is pointless to limit the amounts of the coins.
   *
   * @public
   * @static
   * @param {Object} options - The options object.
   * @param {string} options.coinTypeA - The type of the first coin.
   * @param {string} options.amountA - The amount of the first coin.
   * @param {string} options.coinTypeB - The type of the second coin.
   * @param {number} options.decimalsB - The number of decimal places for the second coin.
   * @return {Promise<{ minAmountB: string, maxAmountB: string }>} A promise that resolves to an object containing
   * the minimum and maximum amount of the second coin.
   */
  static async getMaxAndMinSecondCoinAmount({
    coinTypeA,
    amountA,
    coinTypeB,
    decimalsB
  }) {
    const sdk = new import_aftermath_ts_sdk.Aftermath("MAINNET");
    const minWeightB = 0.05;
    const maxWeightB = 0.95;
    const prices = sdk.Prices();
    const priceA = await prices.getCoinPrice({ coin: coinTypeA });
    const priceB = await prices.getCoinPrice({ coin: coinTypeB });
    const usdAmountA = new import_bignumber12.default(amountA).multipliedBy(priceA);
    const minUsdAmountB = new import_bignumber12.default(minWeightB).multipliedBy(usdAmountA).dividedBy(new import_bignumber12.default(1).minus(minWeightB));
    const maxUsdAmountB = new import_bignumber12.default(maxWeightB).multipliedBy(usdAmountA).dividedBy(new import_bignumber12.default(1).minus(maxWeightB));
    const minAmountB = minUsdAmountB.dividedBy(priceB).toFixed(decimalsB);
    const maxAmountB = maxUsdAmountB.dividedBy(priceB).toFixed(decimalsB);
    return { minAmountB, maxAmountB };
  }
  /**
   * Checks if a coin has a price retrievable from the API.
   *
   * @public
   * @static
   * @param {string} coinType - The type of the coin to check for price availability.
   * @return {Promise<boolean>} A promise that resolves to true if the coin has a price retrievable from the
   * API, otherwise false.
   */
  static async coinHasPrice(coinType) {
    const sdk = new import_aftermath_ts_sdk.Aftermath("MAINNET");
    const prices = sdk.Prices();
    const price = await prices.getCoinPrice({ coin: coinType });
    return price !== -1;
  }
  /**
   * Retrieves information about owned pools.
   *
   * @public
   * @static
   * @param {CoinAssetData[]} allAssets - An array of all available coin asset data.
   * @param {CoinManagerSingleton} coinManager - The coin manager instance.
   * @return {Promise<OwnedPoolInfo[]>} A promise that resolves to an array of information about owned pools.
   */
  static async getOwnedPoolsInfo(allAssets, coinManager) {
    const lpCoinTypePart = "af_lp::AF_LP";
    const sdk = new import_aftermath_ts_sdk.Aftermath("MAINNET");
    const poolsSdk = sdk.Pools();
    const lpCoins = allAssets.filter((asset) => asset.type.includes(lpCoinTypePart));
    const poolObjectIdsRaw = (await Promise.all(
      lpCoins.map((lpCoin) => poolsSdk.getPoolObjectIdForLpCoinType({ lpCoinType: lpCoin.type }))
    )).flat();
    const poolObjectIds = poolObjectIdsRaw.filter((el) => el !== void 0);
    const pools = await poolsSdk.getPools({ objectIds: poolObjectIds });
    await Promise.all(pools.map((pool) => pool.getStats()));
    const ownedPoolInfos = await getOwnedPoolInfosFromPools(pools, coinManager);
    return ownedPoolInfos;
  }
  /**
   * Removes the current instance of AftermathSingleton.
   *
   * Disclaimer: While this method in this class is marked as public, it is strongly discouraged
   * to use it directly unless you are certain about the behavior.
   */
  static removeInstance() {
    _AftermathSingleton._instance = void 0;
  }
};
_AftermathSingleton.AFTERMATH_POOL_URL = "https://aftermath.finance/pools";
var AftermathSingleton = _AftermathSingleton;

// src/providers/cetus/cetus.ts
var import_cetus_sui_clmm_sdk2 = __toESM(require("@cetusprotocol/cetus-sui-clmm-sdk"));
var import_utils16 = require("@mysten/sui.js/utils");
var import_bignumber13 = __toESM(require("bignumber.js"));
var import_bn2 = __toESM(require("bn.js"));

// src/storages/utils/getCetusPathsCache.ts
var getCetusPathsCache = async ({
  storage,
  provider,
  updateCacheInterval
}) => {
  let pathsCache = /* @__PURE__ */ new Map();
  const paths = await storage.getCache({
    provider,
    property: "cetusPaths" /* CetusPaths */
  });
  if (isCetusPathForStorageArray(paths?.value)) {
    const timestamp = parseInt(paths.timestamp);
    const cacheIsUpToDate = timestamp + updateCacheInterval > Date.now();
    if (cacheIsUpToDate) {
      pathsCache = paths.value.reduce((cache, path) => {
        const key = `${path.base}-${path.quote}`;
        const addressMap = new Map(path.addressMap);
        cache.set(key, { ...path, addressMap });
        return cache;
      }, /* @__PURE__ */ new Map());
    } else {
      console.warn(`[getCetusPathsCache] ${provider} paths cache is not up to date.`);
    }
  } else if (paths === null) {
    console.warn(`[getCetusPathsCache] ${provider} Received empty paths from strorage, paths === null `);
  } else {
    const stringifiedPath = JSON.stringify(paths.value[0]);
    throw new Error(
      `[${provider}] prefillCaches: paths from storage are not (PathLink[] or null). Example of path: ${stringifiedPath}`
    );
  }
  return pathsCache;
};

// src/storages/utils/storeCetusPathsCache.ts
async function storeCetusPathsCache({
  provider,
  storage,
  pathsCache
}) {
  try {
    const paths = Array.from(pathsCache.values());
    const pathsForStorage = paths.map((pathLink) => ({
      base: pathLink.base,
      quote: pathLink.quote,
      addressMap: Array.from(pathLink.addressMap.entries())
    }));
    await storage.setCache({
      provider,
      property: "cetusPaths" /* CetusPaths */,
      value: { value: pathsForStorage, timestamp: Date.now().toString() }
    });
  } catch (error) {
    console.error(`[storeCetusPathsCache] error for params: provider ${provider} `, error);
    throw error;
  }
}

// src/providers/cetus/config.ts
var SDKConfig = {
  clmmConfig: {
    pools_id: "0xf699e7f2276f5c9a75944b37a0c5b5d9ddfd2471bf6242483b03ab2887d198d0",
    global_config_id: "0xdaa46292632c3c4d8f31f23ea0f9b36a28ff3677e9684980e4438403a67a3d8f",
    global_vault_id: "0xce7bceef26d3ad1f6d9b6f13a953f053e6ed3ca77907516481ce99ae8e588f2b",
    admin_cap_id: "0x89c1a321291d15ddae5a086c9abc533dff697fde3d89e0ca836c41af73e36a75"
  },
  cetusConfig: {
    coin_list_id: "0x8cbc11d9e10140db3d230f50b4d30e9b721201c0083615441707ffec1ef77b23",
    launchpad_pools_id: "0x1098fac992eab3a0ab7acf15bb654fc1cf29b5a6142c4ef1058e6c408dd15115",
    clmm_pools_id: "0x15b6a27dd9ae03eb455aba03b39e29aad74abd3757b8e18c0755651b2ae5b71e",
    admin_cap_id: "0x39d78781750e193ce35c45ff32c6c0c3f2941fa3ddaf8595c90c555589ddb113",
    global_config_id: "0x0408fa4e4a4c03cc0de8f23d0c2bbfe8913d178713c9a271ed4080973fe42d8f",
    coin_list_handle: "0x49136005e90e28c4695419ed4194cc240603f1ea8eb84e62275eaff088a71063",
    launchpad_pools_handle: "0x5e194a8efcf653830daf85a85b52e3ae8f65dc39481d54b2382acda25068375c",
    clmm_pools_handle: "0x37f60eb2d9d227949b95da8fea810db3c32d1e1fa8ed87434fc51664f87d83cb"
  }
};
var clmmMainnet = {
  cetus_config: {
    package_id: "0x95b8d278b876cae22206131fb9724f701c9444515813042f54f0a426c9a3bc2f",
    published_at: "0x95b8d278b876cae22206131fb9724f701c9444515813042f54f0a426c9a3bc2f",
    config: SDKConfig.cetusConfig
  },
  clmm_pool: {
    package_id: "0x1eabed72c53feb3805120a081dc15963c204dc8d091542592abaf7a35689b2fb",
    published_at: "0xc33c3e937e5aa2009cc0c3fdb3f345a0c3193d4ee663ffc601fe8b894fbc4ba6",
    version: 4,
    config: SDKConfig.clmmConfig
  },
  integrate: {
    package_id: "0xd43348b8879c1457f882b02555ba862f2bc87bcc31b16294ca14a82f608875d2",
    published_at: "0xd43348b8879c1457f882b02555ba862f2bc87bcc31b16294ca14a82f608875d2",
    version: 2
  },
  deepbook: {
    package_id: "0x000000000000000000000000000000000000000000000000000000000000dee9",
    published_at: "0x000000000000000000000000000000000000000000000000000000000000dee9"
  },
  deepbook_endpoint_v2: {
    package_id: "0x10b5eea7a286091241b69102a5e63ae444a27363ebe4ee7261fa6b688ae3daf5",
    published_at: "0x10b5eea7a286091241b69102a5e63ae444a27363ebe4ee7261fa6b688ae3daf5"
  },
  aggregatorUrl: "https://api-sui.cetus.zone/router",
  swapCountUrl: "https://api-sui.cetus.zone/v2/sui/swap/count"
};
var CENTRALIZED_POOLS_INFO_ENDPOINT = "https://api-sui.cetus.zone/v2/sui/pools_info";
var MIN_FETCH_BEST_ROUTE_TIMEOUT_DURATION = 4e3;
var MAX_FETCH_BEST_ROUTE_TIMEOUT_DURATION = 5500;
var FETCH_BEST_ROUTE_ATTEMPTS_COUNT = 1;

// src/providers/cetus/utils.ts
function isApiResponseValid2(response) {
  return response.code === 200 && response.msg === "OK" && response.data !== void 0 && Array.isArray(response.data.lp_list) && response.data.lp_list.length > 0 && response.data.lp_list.every(isLPListValid);
}
function isLPListValid(lpList) {
  return typeof lpList.symbol === "string" && typeof lpList.name === "string" && typeof lpList.decimals === "number" && typeof lpList.fee === "string" && typeof lpList.tick_spacing === "string" && typeof lpList.pool_type === "string" && typeof lpList.address === "string" && typeof lpList.coin_a_address === "string" && typeof lpList.coin_b_address === "string" && typeof lpList.is_closed === "boolean" && typeof lpList.price === "string" && isCoinInfoValid(lpList.coin_a) && isCoinInfoValid(lpList.coin_b) && isObjectValid(lpList.object);
}
function isCoinInfoValid(coinInfo) {
  return typeof coinInfo.name === "string" && typeof coinInfo.symbol === "string" && typeof coinInfo.decimals === "number" && typeof coinInfo.address === "string" && typeof coinInfo.balance === "string";
}
function isObjectValid(obj3) {
  return !!(obj3 && typeof obj3 === "object" && !Array.isArray(obj3));
}
function getPoolsDataFromApiData({ poolsInfo }) {
  const coinMap = /* @__PURE__ */ new Map();
  const poolMap = /* @__PURE__ */ new Map();
  for (const pool of poolsInfo) {
    if (pool.is_closed) {
      continue;
    }
    const coinA = pool.coin_a.address;
    const coinB = pool.coin_b.address;
    coinMap.set(coinA, {
      symbol: pool.coin_a.symbol,
      address: pool.coin_a.address,
      type: pool.coin_a.address,
      decimals: pool.coin_a.decimals
    });
    coinMap.set(coinB, {
      symbol: pool.coin_b.symbol,
      address: pool.coin_b.address,
      type: pool.coin_b.address,
      decimals: pool.coin_b.decimals
    });
    const pair = `${coinA}-${coinB}`;
    const pathProvider = poolMap.get(pair);
    if (pathProvider) {
      pathProvider.addressMap.set(Number(pool.fee) * 100, pool.address);
    } else {
      poolMap.set(pair, {
        base: coinA,
        quote: coinB,
        addressMap: /* @__PURE__ */ new Map([[Number(pool.fee) * 100, pool.address]])
      });
    }
  }
  const coins = Array.from(coinMap.values());
  const paths = Array.from(poolMap.values());
  return { coins, paths, coinMap, poolMap };
}
function getCoinsAndPathsCachesFromMaps({ paths, coins }) {
  const coinsCache = /* @__PURE__ */ new Map();
  const pathsCache = /* @__PURE__ */ new Map();
  paths.forEach((path, pathKey) => {
    pathsCache.set(pathKey, { base: path.base, quote: path.quote });
  });
  coins.forEach((coin, coinType) => {
    coinsCache.set(coinType, { symbol: coin.symbol, type: coin.type, decimals: coin.decimals });
  });
  return { coinsCache, pathsCache };
}
function isCetusCreatePoolEventParsedJson(data) {
  return typeof data === "object" && data !== null && "coin_type_a" in data && typeof data.coin_type_a === "string" && "coin_type_b" in data && typeof data.coin_type_b === "string" && "pool_id" in data && typeof data.pool_id === "string" && "tick_spacing" in data && typeof data.tick_spacing === "number";
}
function getCoinMapFromCoinsCache(coinsCache) {
  const coins = /* @__PURE__ */ new Map();
  coinsCache.forEach((coinData, coinType) => coins.set(coinType, { ...coinData, address: coinType }));
  return coins;
}
var getMockedAssets = (tokenFrom, tokenTo) => [
  {
    coinAddress: tokenFrom,
    coinObjectId: "0xaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    balance: BigInt("9999999999999999999")
  },
  {
    coinAddress: tokenTo,
    coinObjectId: "0xbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
    balance: BigInt("9999999999999999999")
  }
];

// src/managers/dca/adapters/cetusAdapter.ts
var import_transactions9 = require("@mysten/sui.js/transactions");
var DCA_ROUTER = "cetus2";
var InputIndex = 0;
var swapPatterns = {
  ".*::router::swap$": `${DCA_CONFIG.DCA_CONTRACT}::${DCA_ROUTER}::${"swap"}`,
  ".*::router::swap_ab_bc$": `${DCA_CONFIG.DCA_CONTRACT}::${DCA_ROUTER}::${"swap_ab_bc"}`,
  ".*::router::swap_ab_cb$": `${DCA_CONFIG.DCA_CONTRACT}::${DCA_ROUTER}::${"swap_ab_cb"}`,
  ".*::router::swap_ba_bc$": `${DCA_CONFIG.DCA_CONTRACT}::${DCA_ROUTER}::${"swap_ba_bc"}`,
  ".*::router::swap_ba_cb$": `${DCA_CONFIG.DCA_CONTRACT}::${DCA_ROUTER}::${"swap_ba_cb"}`
};
var checkPatterns = {
  ".*::router::check_coin_threshold$": `${DCA_CONFIG.DCA_CONTRACT}::${DCA_ROUTER}::${"check_coin_threshold"}`
};
function buildDcaTxBlock(txBlock, tokenFrom, tokenTo, dcaId, gasCost) {
  let isSimpleSwap = false;
  const dcaBlock = {
    version: 1,
    transactions: [],
    inputs: [],
    gasConfig: txBlock.blockData.gasConfig,
    sender: txBlock.blockData.sender,
    expiration: txBlock.blockData.expiration
  };
  dcaBlock.transactions.push({
    kind: "MoveCall",
    target: "0x2::coin::zero",
    arguments: [],
    typeArguments: [tokenFrom]
  });
  dcaBlock.transactions.push({
    kind: "MoveCall",
    target: "0x2::coin::zero",
    arguments: [],
    typeArguments: [tokenTo]
  });
  const minOutput = findMinOutput(txBlock);
  const swapPatternRegex = new RegExp(Object.keys(swapPatterns).join("|"));
  txBlock.blockData.transactions.forEach((transaction) => {
    if (transaction.kind === "MoveCall" && transaction.target) {
      const swapMatch = swapPatternRegex.exec(transaction.target);
      if (swapMatch) {
        const parts = transaction.target.split("::");
        let newTarget = `${DCA_CONFIG.DCA_CONTRACT}::${DCA_ROUTER}::${parts[2]}`;
        isSimpleSwap = newTarget === `${DCA_CONFIG.DCA_CONTRACT}::${DCA_ROUTER}::${"swap"}`;
        if (isSimpleSwap) {
          const argument6 = transaction.arguments[5];
          if (argument6 && argument6.kind === "Input" && argument6.value === true) {
            newTarget = `${DCA_CONFIG.DCA_CONTRACT}::${DCA_ROUTER}::${"swap_ab"}`;
          } else if (argument6 && argument6.kind === "Input" && argument6.value === false) {
            newTarget = `${DCA_CONFIG.DCA_CONTRACT}::${DCA_ROUTER}::${"swap_ba"}`;
          } else {
            throw new Error("Incoherent function parameter");
          }
        }
        const swapParams = isSimpleSwap ? {
          globalConfig: fromArgument(transaction.arguments[0], inputIdx()),
          poolA: fromArgument(transaction.arguments[1], inputIdx()),
          inputFunds: { kind: "Result", index: 0 },
          outputFunds: { kind: "Result", index: 1 },
          a2b: fromArgument(transaction.arguments[4], inputIdx()),
          byAmountIn: fromArgument(transaction.arguments[5], inputIdx()),
          amount0: fromArgument(transaction.arguments[6], inputIdx()),
          sqrtPriceLimit0: fromArgument(transaction.arguments[7], inputIdx()),
          arg8: fromArgument(transaction.arguments[8], inputIdx()),
          clock: fromArgument(transaction.arguments[9], inputIdx()),
          outputThreshold: { kind: "Input", value: minOutput, index: inputIdx(), type: "pure" },
          dca: { kind: "Input", value: dcaId, index: inputIdx(), type: "object" },
          gasGost: { kind: "Input", value: gasCost, index: inputIdx(), type: "pure" }
        } : {
          globalConfig: fromArgument(transaction.arguments[0], inputIdx()),
          poolA: fromArgument(transaction.arguments[1], inputIdx()),
          poolB: fromArgument(transaction.arguments[2], inputIdx()),
          inputFunds: { kind: "Result", index: 0 },
          outputFunds: { kind: "Result", index: 1 },
          byAmountIn: fromArgument(transaction.arguments[5], inputIdx()),
          amount0: fromArgument(transaction.arguments[6], inputIdx()),
          amount1: fromArgument(transaction.arguments[7], inputIdx()),
          sqrtPriceLimit0: fromArgument(transaction.arguments[8], inputIdx()),
          sqrtPriceLimit1: fromArgument(transaction.arguments[9], inputIdx()),
          clock: fromArgument(transaction.arguments[10], inputIdx()),
          outputThreshold: { kind: "Input", value: minOutput, index: inputIdx(), type: "pure" },
          dca: { kind: "Input", value: dcaId, index: inputIdx(), type: "object" },
          gasGost: { kind: "Input", value: gasCost, index: inputIdx(), type: "pure" }
        };
        const inputs = isSimpleSwap ? [
          swapParams.globalConfig,
          swapParams.poolA,
          swapParams.a2b,
          swapParams.byAmountIn,
          swapParams.amount0,
          swapParams.sqrtPriceLimit0,
          swapParams.arg8,
          swapParams.clock,
          swapParams.outputThreshold,
          swapParams.dca,
          swapParams.gasGost
        ] : [
          swapParams.globalConfig,
          swapParams.poolA,
          swapParams.poolB,
          swapParams.byAmountIn,
          swapParams.amount0,
          swapParams.amount1,
          swapParams.sqrtPriceLimit0,
          swapParams.sqrtPriceLimit1,
          swapParams.clock,
          swapParams.outputThreshold,
          swapParams.dca,
          swapParams.gasGost
        ];
        const args = isSimpleSwap ? [
          swapParams.globalConfig,
          swapParams.poolA,
          swapParams.inputFunds,
          swapParams.outputFunds,
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          swapParams.a2b,
          swapParams.byAmountIn,
          swapParams.amount0,
          swapParams.sqrtPriceLimit0,
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          swapParams.arg8,
          swapParams.clock,
          swapParams.outputThreshold,
          swapParams.dca,
          swapParams.gasGost
        ] : [
          swapParams.globalConfig,
          swapParams.poolA,
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          swapParams.poolB,
          swapParams.inputFunds,
          swapParams.outputFunds,
          swapParams.byAmountIn,
          swapParams.amount0,
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          swapParams.amount1,
          swapParams.sqrtPriceLimit0,
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          swapParams.sqrtPriceLimit1,
          swapParams.clock,
          swapParams.outputThreshold,
          swapParams.dca,
          swapParams.gasGost
        ];
        const tx = {
          arguments: args,
          kind: transaction.kind,
          target: newTarget,
          typeArguments: transaction.typeArguments
        };
        dcaBlock.inputs.push(...inputs);
        dcaBlock.transactions.push(tx);
      }
    }
  });
  const newTxBlock = import_transactions9.TransactionBlock.from(JSON.stringify(dcaBlock));
  return newTxBlock;
}
function inputIdx() {
  ++InputIndex;
  return InputIndex - 1;
}
function findMinOutput(txBlock) {
  const checkPatternRegex = new RegExp(Object.keys(checkPatterns).join("|"));
  for (const transaction of txBlock.blockData.transactions) {
    if (transaction.kind === "MoveCall" && transaction.target) {
      const checkMatch = checkPatternRegex.exec(transaction.target);
      if (checkMatch) {
        const arg1 = transaction.arguments[1];
        const minOutputArg = arg1.value;
        return minOutputArg;
      }
    }
  }
  throw new Error("No suitable transaction found to extract minOutputArg.");
}

// src/providers/cetus/forked.ts
var import_cetus_sui_clmm_sdk = require("@cetusprotocol/cetus-sui-clmm-sdk");
var import_bn = __toESM(require("bn.js"));
var import_crypto = require("crypto");
var import_decimal = __toESM(require("decimal.js"));
async function fetchBestRoute({
  coinTypeFrom,
  coinTypeTo,
  amount,
  config: {
    apiUrl,
    attempts = FETCH_BEST_ROUTE_ATTEMPTS_COUNT,
    maxTimeoutDuration = MAX_FETCH_BEST_ROUTE_TIMEOUT_DURATION,
    minTimeoutDuration = MIN_FETCH_BEST_ROUTE_TIMEOUT_DURATION
  },
  byAmountIn
}) {
  const params = new URLSearchParams({
    from: coinTypeFrom,
    to: coinTypeTo,
    amount: encodeURIComponent(amount),
    by_amount_in: encodeURIComponent(byAmountIn),
    order_split: encodeURIComponent(false),
    external_router: encodeURIComponent(false),
    request_id: encodeURIComponent((0, import_crypto.randomUUID)())
  });
  for (let i = 0; i < attempts; i++) {
    try {
      const timeout = Math.floor(Math.random() * (maxTimeoutDuration - minTimeoutDuration + 1)) + minTimeoutDuration;
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), timeout);
      const response = await fetch(`${apiUrl}?${params.toString()}`, {
        signal: controller.signal
      });
      clearTimeout(timeoutId);
      if (response.status === 200) {
        return parseJsonResult(await response.json());
      } else {
        throw new Error("Response status is not 200.");
      }
    } catch (error) {
      console.error(`[fetchBestRoute] Attempt ${i + 1} failed: ${error}`);
    }
  }
  throw new Error("[fetchBestRoute] All attempts to fetch best route data failed.");
}
function parseJsonResult(data) {
  const result = {
    isExceed: data.is_exceed,
    isTimeout: data.is_timeout,
    inputAmount: data.input_amount,
    outputAmount: data.output_amount,
    fromCoin: data.from_coin,
    toCoin: data.to_coin,
    byAmountIn: data.by_amount_in,
    splitPaths: data.split_paths.map((path) => {
      const splitPath = {
        pathIndex: path.path_index,
        lastQuoteOutput: path.last_quote_output,
        percent: path.percent,
        basePaths: path.best_path.map((basePath) => {
          return {
            direction: basePath.direction,
            label: basePath.label,
            poolAddress: basePath.provider,
            fromCoin: basePath.from_coin,
            toCoin: basePath.to_coin,
            outputAmount: basePath.output_amount,
            inputAmount: basePath.input_amount,
            feeRate: basePath.fee_rate,
            currentSqrtPrice: new import_bn.default(basePath.current_sqrt_price.toString()),
            afterSqrtPrice: basePath.label === "Cetus" ? new import_bn.default(basePath.after_sqrt_price.toString()) : import_cetus_sui_clmm_sdk.ZERO,
            fromDecimal: basePath.from_decimal,
            toDecimal: basePath.to_decimal,
            currentPrice: calculatePrice(
              new import_bn.default(basePath.current_sqrt_price.toString()),
              basePath.from_decimal,
              basePath.to_decimal,
              basePath.direction,
              basePath.label
            )
          };
        }),
        inputAmount: path.input_amount,
        outputAmount: path.output_amount
      };
      return splitPath;
    })
  };
  return result;
}
function calculatePrice(currentSqrtPrice, fromDecimals, toDecimals, a2b, label) {
  const decimalA = a2b ? fromDecimals : toDecimals;
  const decimalB = a2b ? toDecimals : fromDecimals;
  if (label === "Cetus") {
    const price2 = import_cetus_sui_clmm_sdk.TickMath.sqrtPriceX64ToPrice(currentSqrtPrice, decimalA, decimalB);
    return price2;
  }
  const price = new import_decimal.default(currentSqrtPrice.toString()).div(new import_decimal.default(10).pow(new import_decimal.default(decimalB + 9 - decimalA)));
  return price;
}

// src/providers/cetus/cetus.ts
var CetusSingleton = class _CetusSingleton extends EventEmitter {
  /**
   * @constructor
   * @param {Omit<CetusOptions, "lazyLoading">} options - The options for CetusSingleton.
   */
  constructor(options) {
    super();
    this.providerName = "Cetus";
    this.isSmartRoutingAvailable = true;
    this.poolsCache = [];
    this.pathsCache = /* @__PURE__ */ new Map();
    this.coinsCache = /* @__PURE__ */ new Map();
    // The `cetusCoinsCache` is workaround property to make it compatible with the Cetus SDK interface
    this.cetusCoinsCache = /* @__PURE__ */ new Map();
    this.useOnChainFallback = false;
    this.buildDcaTxBlockAdapter = buildDcaTxBlock;
    this.cetusSDKConfig = {
      fullRpcUrl: options.suiProviderUrl,
      simulationAccount: { address: options.simulationAccount || "" },
      ...options.sdkOptions
    };
    this.cetusSdk = new import_cetus_sui_clmm_sdk2.default(this.cetusSDKConfig);
    const { updateIntervally = true, ...restCacheOptions } = options.cacheOptions;
    this.cacheOptions = { updateIntervally, ...restCacheOptions };
    this.proxy = options.proxy;
    this.storage = options.cacheOptions.storage ?? InMemoryStorageSingleton.getInstance();
  }
  /**
   * @public
   * @method getInstance
   * @description Gets the singleton instance of CetusSingleton.
   * @param {CetusOptions} [options] - Options for CetusSingleton.
   * @return {Promise<CetusSingleton>} The singleton instance of CetusSingleton.
   */
  static async getInstance(options) {
    if (!_CetusSingleton._instance) {
      if (options === void 0) {
        throw new Error("[Cetus] Options are required in arguments to create instance.");
      }
      const { sdkOptions, cacheOptions, lazyLoading = true, suiProviderUrl, proxy, simulationAccount } = options;
      const instance = new _CetusSingleton({ sdkOptions, cacheOptions, suiProviderUrl, proxy, simulationAccount });
      lazyLoading ? instance.init() : await instance.init();
      _CetusSingleton._instance = instance;
    }
    return _CetusSingleton._instance;
  }
  /**
   * @private
   * @method init
   * @description Initializes the CetusSingleton instance.
   * @return {Promise<void>} A Promise that resolves when initialization is complete.
   */
  async init() {
    console.debug(`[${this.providerName}] Singleton initiating.`);
    await this.fillCacheFromStorage();
    await this.updateCaches();
    this.cacheOptions.updateIntervally && this.updateCachesIntervally();
    this.bufferEvent("cachesUpdate", this.getCoins());
  }
  /**
   * Fills the cache from storage asynchronously.
   *
   * @private
   * @return {Promise<void>} A promise that resolves when the cache is filled from storage.
   */
  async fillCacheFromStorage() {
    try {
      const coinsCache = await getCoinsCache({
        storage: this.storage,
        provider: this.providerName,
        updateCacheInterval: this.cacheOptions.updateIntervalInMs
      });
      const pathsCache = await getCetusPathsCache({
        storage: this.storage,
        provider: this.providerName,
        updateCacheInterval: this.cacheOptions.updateIntervalInMs
      });
      this.coinsCache = coinsCache;
      this.pathsCache = pathsCache;
      const coinMap = getCoinMapFromCoinsCache(this.coinsCache);
      this.cetusCoinsCache = coinMap;
    } catch (error) {
      console.error(`[${this.providerName}] fillCacheFromStorage failed:`, error);
    }
  }
  /**
   * Checks if the storage cache is empty.
   *
   * @private
   * @return {boolean} True if the storage cache is empty, false otherwise.
   */
  isStorageCacheEmpty() {
    const isCacheEmpty = this.coinsCache.size === 0 || this.pathsCache.size === 0;
    return isCacheEmpty;
  }
  /**
   * @private
   * @method updateCaches
   * @description Updates the caches for pools, paths, and coins.
   * @return {Promise<void>} A Promise that resolves when caches are updated.
   */
  async updateCaches({ force } = { force: false }) {
    const isCacheEmpty = this.isStorageCacheEmpty();
    if (isCacheEmpty || force) {
      try {
        await this.updatePoolsCache();
        this.updatePathsAndCoinsCache();
        this.useOnChainFallback && this.updateGraph();
        this.emit("cachesUpdate", this.getCoins());
        await storeCaches({
          provider: this.providerName,
          storage: this.storage,
          coinsCache: this.getCoins()
        });
        await storeCetusPathsCache({ provider: this.providerName, pathsCache: this.getPaths(), storage: this.storage });
        console.debug("[Cetus] Caches are updated and stored.");
      } catch (error) {
        console.error("[Cetus] Caches update failed:", error);
      }
    }
  }
  /**
   * @private
   * @method updateCachesIntervally
   * @description Updates the caches at regular intervals.
   * @return {void}
   */
  updateCachesIntervally() {
    let isUpdatingCurrently = false;
    this.intervalId = setInterval(async () => {
      try {
        if (isUpdatingCurrently) {
          return;
        }
        isUpdatingCurrently = true;
        await this.updateCaches({ force: true });
      } finally {
        isUpdatingCurrently = false;
      }
    }, this.cacheOptions.updateIntervalInMs);
    exitHandlerWrapper({ intervalId: this.intervalId, providerName: this.providerName });
  }
  /**
   * @private
   * @method updatePoolsCache
   * @description Updates the pools cache.
   * @return {Promise<void>} A Promise that resolves when the pools cache is updated.
   */
  async updatePoolsCache() {
    this.poolsCache = await this.retrieveAllPoolsFromApi();
  }
  /**
   * @private
   * @method updatePathsAndCoinsCache
   * @description Updates the paths and coins cache.
   * @return {void}
   */
  updatePathsAndCoinsCache() {
    const { poolMap, coinMap } = getPoolsDataFromApiData({ poolsInfo: this.poolsCache });
    this.pathsCache = poolMap;
    this.cetusCoinsCache = coinMap;
    const { coinsCache } = getCoinsAndPathsCachesFromMaps({ coins: coinMap, paths: poolMap });
    this.coinsCache = coinsCache;
  }
  /**
   * Updates the graph used by Cetus for routing.
   * If no SDK is provided, it defaults to the current Cetus SDK instance.
   * @param {CetusClmmSDK} [cetusSdk=this.cetusSdk] - The Cetus SDK instance used to update the graph.
   * @return {void}
   */
  updateGraph(cetusSdk = this.cetusSdk) {
    const coins = Array.from(this.cetusCoinsCache.values());
    const paths = Array.from(this.pathsCache.values());
    const coinsProvider = { coins };
    const pathsProvider = { paths };
    cetusSdk.Router.loadGraph(coinsProvider, pathsProvider);
  }
  /**
   * @private
   * @method retrievelAllPools
   * @description Retrieves all pools.
   * @return {Promise<any>} A Promise that resolves to the retrieved pools.
   */
  async retrievelAllPools() {
    const pools = await this.cetusSdk.Pool.getPoolsWithPage([]);
    console.log(`[retrievelAllPools] pool length: ${pools.length}`);
    return pools;
  }
  /**
   * @private
   * @method retrieveAllPoolsFromApi
   * @description Retrieves all pools from the API.
   * @return {Promise<any>} A Promise that resolves to the retrieved pools.
   */
  async retrieveAllPoolsFromApi() {
    const url = this.proxy ? `${this.proxy}/${CENTRALIZED_POOLS_INFO_ENDPOINT}` : CENTRALIZED_POOLS_INFO_ENDPOINT;
    const poolsResponse = await (await fetch(url)).json();
    const isValidPoolsResponse = isApiResponseValid2(poolsResponse);
    if (!isValidPoolsResponse) {
      console.error("[Cetus] Pools response:", poolsResponse);
      throw new Error("Pools response from API is not valid");
    }
    return poolsResponse.data.lp_list;
  }
  /**
   * @public
   * @method getCoins
   * @description Gets the updated coins cache.
   * @return {UpdatedCoinsCache} Updated coins cache.
   */
  getCoins() {
    const allCoins = Array.from(this.coinsCache.values());
    return { provider: this.providerName, data: allCoins };
  }
  /**
   * @public
   * @method getPaths
   * @description Gets the paths cache.
   * @return {Map<string, PathLink>} Paths cache.
   */
  getPaths() {
    return this.pathsCache;
  }
  /**
   * @public
   * @method getRouteData
   * @description Gets route data.
   * @param {Object} params - Parameters for route data.
   * @param {string} params.coinTypeFrom - Coin type from.
   * @param {string} params.coinTypeTo - Coin type to.
   * @param {string} params.inputAmount - Input amount.
   * @param {number} params.slippagePercentage - Slippage percentage.
   * @param {string} params.publicKey - Public key.
   * @return {Promise<{ outputAmount: bigint, route: RouterCompleteTradeRoute }>} Route data.
   */
  async getRouteData({
    coinTypeFrom,
    coinTypeTo,
    inputAmount,
    slippagePercentage = 10
  }) {
    const coinFrom = getCoinInfoFromCache(coinTypeFrom, this.coinsCache);
    const coinTo = getCoinInfoFromCache(coinTypeTo, this.coinsCache);
    if (coinFrom === void 0) {
      throw new Error(`[Cetus] Cannot find coin with address "${coinTypeFrom}".`);
    } else if (coinTo === void 0) {
      throw new Error(`[Cetus] Cannot find coin with address "${coinTypeTo}".`);
    }
    const { outputAmount, route } = await this.getSmartOutputAmountData({
      amountIn: inputAmount,
      tokenFrom: coinFrom,
      tokenTo: coinTo,
      slippagePercentage
    });
    return { outputAmount, route };
  }
  /**
   * @private
   * @method getSmartOutputAmountData
   * @description Retrieves smart output amount data for the given coin types and input amount.
   * @param {Object} params - Parameters for smart output amount data.
   * @param {string} params.amountIn - The input amount.
   * @param {CoinNode} params.tokenFrom - The token from object.
   * @param {CoinNode} params.tokenTo - The token to object.
   * @param {number} params.slippagePercentage - The slippage percentage.
   * @param {CetusClmmSDK} [params.cetusSdk=this.cetusSdk] - The Cetus SDK instance (optional,
   * defaults to the current Cetus SDK instance).
   * @return {Promise<SmartOutputAmountData>} A Promise that resolves to smart output amount data.
   */
  async getSmartOutputAmountData({
    amountIn,
    tokenFrom,
    tokenTo,
    slippagePercentage,
    cetusSdk = this.cetusSdk,
    useOnChainFallback = false
  }) {
    const absoluteSlippage = convertSlippage(slippagePercentage);
    const amountInWithDecimalsBigNumber = new import_bignumber13.default(amountIn).multipliedBy(10 ** tokenFrom.decimals);
    const inputAmountWithoutExceededDecimalPart = removeDecimalPart(amountInWithDecimalsBigNumber);
    const amountInt = inputAmountWithoutExceededDecimalPart.toNumber();
    const byAmountIn = true;
    let routerResult;
    if (useOnChainFallback) {
      const rawRouterResult = await cetusSdk.RouterV2.getBestRouter(
        tokenFrom.type,
        tokenTo.type,
        amountInt,
        byAmountIn,
        absoluteSlippage,
        ""
      );
      routerResult = rawRouterResult.result;
    } else {
      routerResult = await fetchBestRoute({
        amount: amountInt.toString(),
        byAmountIn,
        coinTypeFrom: tokenFrom.type,
        coinTypeTo: tokenTo.type,
        config: { apiUrl: this.cetusSDKConfig.aggregatorUrl }
      });
    }
    return { outputAmount: BigInt(routerResult.outputAmount), route: routerResult };
  }
  /**
   * @public
   * @method getSwapTransaction
   * @description Retrieves the swap transaction for the given route and public key.
   * @param {Object} params - Parameters for the swap transaction.
   * @param {AggregatorResult} params.route - The route object.
   * @param {string} params.publicKey - The public key.
   * @param {number} params.slippagePercentage - The slippage percentage.
   * @return {Promise<any>} A Promise that resolves to the swap transaction payload.
   */
  async getSwapTransaction({
    route,
    publicKey,
    slippagePercentage
  }) {
    const absoluteSlippage = convertSlippage(slippagePercentage);
    const allCoinAsset = await this.cetusSdk.getOwnerCoinAssets(publicKey);
    const payload = await import_cetus_sui_clmm_sdk2.TransactionUtil.buildAggregatorSwapTransaction(
      this.cetusSdk,
      route,
      allCoinAsset,
      "",
      absoluteSlippage,
      publicKey
    );
    return payload;
  }
  /**
   * @public
   * @method getSwapTransaction
   * @description Retrieves the swap transaction for the given route and public key.
   * @param {Object} params - Parameters for the swap transaction.
   * @param {AggregatorResult} params.route - The route object.
   * @param {string} params.publicKey - The public key.
   * @param {number} params.slippagePercentage - The slippage percentage.
   * @return {Promise<any>} A Promise that resolves to the swap transaction payload.
   */
  async getSwapTransactionDoctored({
    route,
    publicKey,
    slippagePercentage
  }) {
    const mockedAssets = getMockedAssets(route.fromCoin, route.toCoin);
    const absoluteSlippage = convertSlippage(slippagePercentage);
    console.debug("txSignerPubkey: ", publicKey);
    const payload = await import_cetus_sui_clmm_sdk2.TransactionUtil.buildAggregatorSwapTransaction(
      this.cetusSdk,
      route,
      mockedAssets,
      "",
      absoluteSlippage,
      publicKey
    );
    return payload;
  }
  /**
   * Generates a transaction for creating a new liquidity pool.
   *
   * @public
   * @param {Object} params - Parameters for creating the pool transaction.
   * @param {string} params.coinTypeA - The type of the first coin in the pool.
   * @param {string} params.coinTypeB - The type of the second coin in the pool.
   * @param {number} params.decimalsA - The number of decimals for the first coin.
   * @param {number} params.decimalsB - The number of decimals for the second coin.
   * @param {string} params.price - The price of coinB in terms of coinA (how much coinB is needed to buy 1 coinA).
   * @param {number} params.tickSpacing - The tick spacing of the pool.
   * @param {string} params.uri - The URI of the pool icon.
   * @return {Promise<TransactionBlock>} A promise that resolves to the transaction block for creating the pool.
   */
  async getCreatePoolTransaction({
    coinTypeA,
    coinTypeB,
    decimalsA,
    decimalsB,
    price,
    tickSpacing,
    uri = ""
  }) {
    const swapParams = (0, import_cetus_sui_clmm_sdk2.isSortedSymbols)((0, import_utils16.normalizeSuiAddress)(coinTypeA), (0, import_utils16.normalizeSuiAddress)(coinTypeB));
    const resultCoinTypeA = swapParams ? coinTypeB : coinTypeA;
    const resultCoinTypeB = swapParams ? coinTypeA : coinTypeB;
    const resultDecimalsA = swapParams ? decimalsB : decimalsA;
    const resultDecimalsB = swapParams ? decimalsA : decimalsB;
    const resultPrice = swapParams ? new import_bignumber13.default(1).dividedBy(price).toString() : price;
    const initializeSqrtPrice = import_cetus_sui_clmm_sdk2.TickMath.priceToSqrtPriceX64(
      (0, import_cetus_sui_clmm_sdk2.d)(resultPrice),
      resultDecimalsA,
      resultDecimalsB
    ).toString();
    const createPoolTransaction = await this.cetusSdk.Pool.creatPoolTransactionPayload({
      coinTypeA: resultCoinTypeA,
      coinTypeB: resultCoinTypeB,
      tick_spacing: tickSpacing,
      initialize_sqrt_price: initializeSqrtPrice,
      uri
    });
    return createPoolTransaction;
  }
  /**
   * Retrieves the payload for adding liquidity to a pool along with additional information.
   *
   * @description
   * The current implementation opens a position near the current price of the pool, potentially resulting
   * in a larger `amountB` than expected. This behavior may lead to an extended liquidity range.
   * Clients are advised to consider the following:
   * - Allowing users to specify a price range for providing liquidity.
   * - Exploring the option of implementing global liquidity adjustments.
   * For more details, please refer to the Cetus development documentation.
   *
   * @public
   * @param {Object} options - Parameters for generating the add liquidity payload.
   * @param {Pool} options.pool - The pool to which liquidity will be added.
   * @param {string} options.coinAmountA - The amount of coinA to add to the liquidity pool.
   * @param {number} options.decimalsA - The number of decimals for coinA.
   * @param {number} options.decimalsB - The number of decimals for coinB.
   * @param {number} options.slippage - The acceptable slippage percentage for the transaction.
   * @return {Object} An object containing the add liquidity payload, amount of coinB, and current square root price.
   */
  getAddLiquidityPayload({
    pool,
    coinAmountA,
    decimalsA,
    decimalsB,
    slippage
  }) {
    const lowerTick = import_cetus_sui_clmm_sdk2.TickMath.getPrevInitializableTickIndex(
      new import_bn2.default(pool.current_tick_index).toNumber(),
      new import_bn2.default(pool.tickSpacing).toNumber()
    );
    const upperTick = import_cetus_sui_clmm_sdk2.TickMath.getNextInitializableTickIndex(
      new import_bn2.default(pool.current_tick_index).toNumber(),
      new import_bn2.default(pool.tickSpacing).toNumber()
    );
    const rawAmount = new import_bignumber13.default(coinAmountA).multipliedBy(10 ** decimalsA).toString();
    const rawAmountBN = new import_bn2.default(rawAmount);
    const fixAmountA = true;
    const curSqrtPrice = new import_bn2.default(pool.current_sqrt_price);
    const liquidityInput = import_cetus_sui_clmm_sdk2.ClmmPoolUtil.estLiquidityAndcoinAmountFromOneAmounts(
      lowerTick,
      upperTick,
      rawAmountBN,
      fixAmountA,
      true,
      slippage,
      curSqrtPrice
    );
    const amountA = fixAmountA ? rawAmountBN.toNumber() : liquidityInput.tokenMaxA.toNumber();
    const amountB = fixAmountA ? liquidityInput.tokenMaxB.toNumber() : rawAmountBN.toNumber();
    const normalizedAmountB = new import_bignumber13.default(amountB).dividedBy(10 ** decimalsB).toString();
    const addLiquidityPayloadParams = {
      coinTypeA: pool.coinTypeA,
      coinTypeB: pool.coinTypeB,
      pool_id: pool.poolAddress,
      tick_lower: lowerTick.toString(),
      tick_upper: upperTick.toString(),
      fix_amount_a: fixAmountA,
      amount_a: amountA,
      amount_b: amountB,
      slippage,
      // true means that it's the first liquidity add, so need to open one position
      is_open: true,
      // If these not empty, it will collect rewarder in this position, if client already open the position
      rewarder_coin_types: [],
      // If client already has one position, he can collect fees while adding liquidity
      collect_fee: false,
      // The position object id
      pos_id: ""
    };
    return { addLiquidityPayload: addLiquidityPayloadParams, amountB: normalizedAmountB, curSqrtPrice };
  }
  /**
   * Generates a transaction for adding liquidity to a pool.
   *
   * @public
   * @param {Object} params - Parameters for adding liquidity to the pool transaction.
   * @param {Pool} params.pool - The liquidity pool to which liquidity will be added.
   * @param {string} params.coinAmountA - The amount of coinA to add to the liquidity pool.
   * @param {number} params.decimalsA - The number of decimals for coinA.
   * @param {number} params.decimalsB - The number of decimals for coinB.
   * @param {number} params.slippage - The acceptable slippage percentage for the transaction.
   * @param {string} params.publicKey - The public key of the transaction sender.
   * @return {Promise<{ transaction: TransactionBlock, amountB: string }>} A promise that resolves to an object
   * containing the transaction block for adding liquidity and the amount of coinB.
   */
  async getAddLiquidityTransaction({
    pool,
    coinAmountA,
    decimalsA,
    decimalsB,
    slippage,
    publicKey
  }) {
    this.cetusSdk.senderAddress = publicKey;
    const { addLiquidityPayload, curSqrtPrice } = this.getAddLiquidityPayload({
      pool,
      coinAmountA,
      decimalsA,
      decimalsB,
      slippage
    });
    const addLiquidityTransaction = await this.cetusSdk.Position.createAddLiquidityFixTokenPayload(
      addLiquidityPayload,
      {
        slippage,
        curSqrtPrice
      }
    );
    return addLiquidityTransaction;
  }
  /**
   * Retrieves pool data for the specified pool ID.
   *
   * @public
   * @param {string} poolId - The ID of the pool to retrieve.
   * @return {Promise<Pool | null>} A promise that resolves to the pool data or null if no data is found.
   */
  async getPool(poolId) {
    try {
      return await this.cetusSdk.Pool.getPool(poolId);
    } catch (error) {
      console.error("[Cetus.getPool] error occured:", error);
      return null;
    }
  }
  /**
   * Retrieves pools data for the specified pool IDs.
   *
   * @public
   * @param {string[]} poolIds - The IDs of the pools to retrieve.
   * @return {Promise<Pool | null>} A promise that resolves to the pools data or null if no data is found
   * or error occured.
   */
  async getPools(poolIds) {
    try {
      return await this.cetusSdk.Pool.getPools(poolIds);
    } catch (error) {
      console.error("[Cetus.getPools] error occured:", error);
      return null;
    }
  }
  /**
   * Retrieves a liquidity pool by coin types and tick spacing.
   *
   * @public
   * @param {string} coinTypeA - The type of the first coin in the pool.
   * @param {string} coinTypeB - The type of the second coin in the pool.
   * @param {string} tickSpacing - The tick spacing of the pool.
   * @return {Promise<LPList | undefined>} A promise that resolves to the liquidity pool with the specified
   * coin types and tick spacing, or undefined if no pool is found.
   */
  async getPoolByCoinTypesAndTickSpacing(coinTypeA, coinTypeB, tickSpacing) {
    const cachedPools = this.poolsCache;
    const foundPool = cachedPools.find((pool) => {
      const processedCoinTypeA = isSuiCoinType(coinTypeA) ? LONG_SUI_COIN_TYPE : coinTypeA;
      const processedCoinTypeB = isSuiCoinType(coinTypeB) ? LONG_SUI_COIN_TYPE : coinTypeB;
      const processedPoolCoinA = isSuiCoinType(pool.coin_a_address) ? LONG_SUI_COIN_TYPE : pool.coin_a_address;
      const processedPoolCoinB = isSuiCoinType(pool.coin_b_address) ? LONG_SUI_COIN_TYPE : pool.coin_b_address;
      const tickSpacingMatch = pool.tick_spacing === tickSpacing;
      const directMatch = processedPoolCoinA === processedCoinTypeA && processedPoolCoinB === processedCoinTypeB;
      const reverseMatch = processedPoolCoinA === processedCoinTypeB && processedPoolCoinB === processedCoinTypeA;
      return tickSpacingMatch && (directMatch || reverseMatch);
    });
    if (foundPool !== void 0) {
      return foundPool;
    }
    const pools = await this.retrieveAllPoolsFromApi();
    return pools.find(
      (pool) => (pool.coin_a_address === coinTypeA || pool.coin_b_address === coinTypeA) && (pool.coin_a_address === coinTypeB || pool.coin_b_address === coinTypeB) && pool.tick_spacing === tickSpacing
    );
  }
  /**
   * Retrieves CreatePoolEvents from an array of user events.
   *
   * @param {SuiEvent[]} userEvents - Array of user events.
   * @return {SuiEvent[]} Array of CreatePoolEvents filtered from user events.
   */
  getCreatePoolEventsFromUserEvents(userEvents) {
    const cetusCreatePoolEvent = `${this.cetusSDKConfig.clmm_pool.package_id}::factory::CreatePoolEvent`;
    return userEvents.filter((event) => event.type === cetusCreatePoolEvent);
  }
  /**
   * Retrieves the pools owned by a specific user.
   *
   * @description
   * This method returns information about pools owned by a user, including the amounts of two
   * different coins (`amountA` and `amountB`).
   * The decimal precision of these amounts may vary depending on the availability of coin information.
   * - If `getCoinByType2` returns valid decimal information for both coins, the amounts are adjusted accordingly.
   * - If `getCoinByType2` returns null for either coin, the amounts are provided without decimal adjustment.
   *
   * To handle the potential discrepancy in decimal precision from the client-side,
   * two additional parameters are introduced:
   * - `amountAIsRaw`: A boolean indicating whether the returned `amountA` respects decimals (false) or is raw (true).
   * - `amountBIsRaw`: A boolean indicating whether the returned `amountB` respects decimals (false) or is raw (true).
   *
   * It is recommended for the client to check these flags and adjust their processing logic accordingly.
   *
   * If either `amountAIsRaw` or `amountBIsRaw` is true, the corresponding
   * amount should be used as-is without further decimal adjustments.
   * If both flags are false, the amounts can be safely used after decimal adjustments.
   *
   * @public
   * @param {SuiClient} provider - The provider for accessing the SUI client.
   * @param {string} publicKey - The public key of the user whose pools are to be retrieved.
   * @param {CoinManagerSingleton} coinManager - The CoinManagerSingleton instance for managing coin-related operations.
   * @return {Promise<CetusOwnedPool[]>} A promise that resolves to an array of owned pools.
   */
  async getOwnedPools(provider, publicKey, coinManager) {
    const pageCapacity = MAX_BATCH_EVENTS_PER_QUERY_EVENTS_REQUEST;
    const allEvents = [];
    let nextCursor = null;
    let events = await provider.queryEvents({
      query: { Sender: publicKey },
      limit: pageCapacity,
      cursor: nextCursor
    });
    while (events.hasNextPage) {
      const userEvents2 = events.data;
      allEvents.push(...userEvents2);
      nextCursor = events.nextCursor;
      events = await provider.queryEvents({
        query: { Sender: publicKey },
        limit: pageCapacity,
        cursor: nextCursor
      });
    }
    const userEvents = events.data;
    allEvents.push(...userEvents);
    const createPoolEvents = this.getCreatePoolEventsFromUserEvents(allEvents);
    const poolIds = createPoolEvents.filter((event) => isCetusCreatePoolEventParsedJson(event.parsedJson)).map((event) => isCetusCreatePoolEventParsedJson(event.parsedJson) ? event.parsedJson.pool_id : "");
    if (poolIds.length === 0) {
      return [];
    }
    const pools = await this.getPools(poolIds);
    if (pools === null) {
      return [];
    }
    return await Promise.all(
      pools.map(async (pool) => {
        const { name, poolAddress, coinTypeA, coinTypeB, coinAmountA, coinAmountB, fee_rate } = pool;
        const feeRate = new import_bignumber13.default(fee_rate).dividedBy(1e4).toString();
        const poolInCache = this.poolsCache.find((pool2) => pool2.address === poolAddress);
        let coinADecimals;
        let coinBDecimals;
        let coinSymbolA = void 0;
        let coinSymbolB = void 0;
        let amountAIsRaw;
        let amountBIsRaw;
        if (poolInCache !== void 0) {
          coinADecimals = poolInCache.coin_a.decimals;
          coinBDecimals = poolInCache.coin_b.decimals;
          coinSymbolA = poolInCache.coin_a.symbol;
          coinSymbolB = poolInCache.coin_b.symbol;
          amountAIsRaw = false;
          amountBIsRaw = false;
        } else {
          const coinAInfo = await coinManager.getCoinByType2(coinTypeA);
          const coinBInfo = await coinManager.getCoinByType2(coinTypeB);
          amountAIsRaw = !coinAInfo;
          amountBIsRaw = !coinBInfo;
          coinADecimals = coinAInfo?.decimals ?? 0;
          coinBDecimals = coinBInfo?.decimals ?? 0;
          coinSymbolA = coinAInfo?.symbol;
          coinSymbolB = coinBInfo?.symbol;
        }
        const amountA = new import_bignumber13.default(coinAmountA).dividedBy(10 ** coinADecimals).toString();
        const amountB = new import_bignumber13.default(coinAmountB).dividedBy(10 ** coinBDecimals).toString();
        return {
          name,
          poolAddress,
          coinTypeA,
          coinTypeB,
          coinSymbolA,
          coinSymbolB,
          amountA,
          amountB,
          feeRate,
          amountAIsRaw,
          amountBIsRaw
        };
      })
    );
  }
  /**
   * Creates a new instance of the Cetus SDK with the provided options.
   * If `simulationAccountAddress` is not provided, it will use the simulation account from `this.cetusSDKConfig`.
   * @param {string} [simulationAccountAddress] - The address for simulation account (optional).
   * @return {CetusClmmSDK} A new instance of the Cetus SDK.
   */
  getNewCetusSdk(simulationAccountAddress) {
    return new import_cetus_sui_clmm_sdk2.default({
      ...this.cetusSDKConfig,
      simulationAccount: simulationAccountAddress !== void 0 ? { address: simulationAccountAddress } : this.cetusSDKConfig.simulationAccount
    });
  }
  /**
   * Checks whether paths exist in the graph between the specified coin types using the provided Cetus SDK instance.
   * If no Cetus SDK instance is provided, the method uses the current Cetus SDK instance of the class.
   * @param {string} coinTypeFrom - The coin type from which the path starts.
   * @param {string} coinTypeTo - The coin type to which the path leads.
   * @param {CetusClmmSDK} [cetusSdk=this.cetusSdk] - The Cetus SDK instance (optional, defaults to the current
   * Cetus SDK instance).
   * @return {boolean} True if paths exist in the graph between the specified coin types, otherwise false.
   */
  checkPathsExistInGraph(coinTypeFrom, coinTypeTo, cetusSdk = this.cetusSdk) {
    const graph = cetusSdk.Router.graph;
    coinTypeFrom = isSuiCoinType(coinTypeFrom) ? LONG_SUI_COIN_TYPE : coinTypeFrom;
    coinTypeTo = isSuiCoinType(coinTypeTo) ? LONG_SUI_COIN_TYPE : coinTypeTo;
    const fromVertex = graph.getVertexByKey(coinTypeFrom);
    const toVertex = graph.getVertexByKey(coinTypeTo);
    const pathIters = graph.findAllPath(fromVertex, toVertex);
    const allPaths = Array.from(pathIters);
    return allPaths.length !== 0;
  }
  /**
   * Retrieves route data using the graph for the specified coin types, input amount, and slippage percentage.
   * @param {Object} params - Parameters for retrieving route data.
   * @param {string} params.coinTypeFrom - The coin type from which the route starts.
   * @param {string} params.coinTypeTo - The coin type to which the route leads.
   * @param {string} params.inputAmount - The input amount for the route.
   * @param {number} [params.slippagePercentage=10] - The slippage percentage for the route (optional, defaults to 10).
   * @return {Promise<void>} A Promise that resolves when the route data is retrieved.
   */
  async getRouteDataWithGraph({
    coinTypeFrom,
    coinTypeTo,
    inputAmount,
    slippagePercentage = 10,
    publicKey
  }) {
    console.debug("Finding Cetus route separately, because all the providers have no route...");
    const routesByProviderMap = /* @__PURE__ */ new Map();
    const providersByOutputAmountsMap = /* @__PURE__ */ new Map();
    const sdk = this.getNewCetusSdk(publicKey);
    this.updateGraph(sdk);
    const pathExist = this.checkPathsExistInGraph(coinTypeFrom, coinTypeTo, sdk);
    if (!pathExist) {
      throw new NoRoutesError("[CetusSingleton] There is no paths in Cetus graph.");
    }
    const coinFrom = getCoinInfoFromCache(coinTypeFrom, this.coinsCache);
    const coinTo = getCoinInfoFromCache(coinTypeTo, this.coinsCache);
    if (coinFrom === void 0) {
      throw new Error(`[CetusSingleton.getRouteDataWithGraph] Cannot find coin with address "${coinTypeFrom}".`);
    } else if (coinTo === void 0) {
      throw new Error(`[CetusSingleton.getRouteDataWithGraph] Cannot find coin with address "${coinTypeTo}".`);
    }
    let smartOutputAmountData;
    try {
      smartOutputAmountData = await this.getSmartOutputAmountData({
        amountIn: inputAmount,
        tokenFrom: coinFrom,
        tokenTo: coinTo,
        slippagePercentage,
        cetusSdk: sdk,
        useOnChainFallback: true
      });
    } catch (error) {
      if (error instanceof Error) {
        console.error(
          "[CetusSingleton.getRouteDataWithGraph] Error occured while getSmartOutputAmountData:",
          error.message
        );
      } else {
        console.error("[CetusSingleton.getRouteDataWithGraph] Error occured while getSmartOutputAmountData:", error);
      }
      smartOutputAmountData = null;
    }
    if (smartOutputAmountData === null) {
      routesByProviderMap.set(this.providerName, { provider: this, route: null });
      providersByOutputAmountsMap.set(BigInt(0), this.providerName);
    } else {
      routesByProviderMap.set(this.providerName, { provider: this, route: smartOutputAmountData.route });
      providersByOutputAmountsMap.set(smartOutputAmountData.outputAmount, this.providerName);
    }
    const cetusOutputAmount = smartOutputAmountData?.outputAmount ?? BigInt(0);
    if (cetusOutputAmount === BigInt(0)) {
      throw new NoRoutesError("[CetusSingleton.getRouteDataWithGraph] Cetus output amount is 0 too.");
    }
    return { routesByProviderMap, providersByOutputAmountsMap, cetusOutputAmount };
  }
  /**
   * Removes the current instance of CetusSingleton.
   *
   * Disclaimer: While this method in this class is marked as public, it is strongly discouraged
   * to use it directly unless you are certain about the behavior.
   */
  static removeInstance() {
    _CetusSingleton._instance = void 0;
  }
};

// src/providers/flowx/flowx.ts
var import_ts_sdk3 = require("@flowx-pkg/ts-sdk");
var import_transactions12 = require("@mysten/sui.js/transactions");

// src/providers/flowx/calculateAmountOutInternal.ts
var import_ts_sdk = require("@flowx-pkg/ts-sdk");
var import_bignumber14 = require("bignumber.js");
var getReserveByCoinType = (coinX, pairSetting) => {
  if (coinX === pairSetting.coinX) {
    return {
      reserveX: pairSetting.reserveX?.fields?.balance || "0",
      reserveY: pairSetting.reserveY?.fields?.balance || "0"
    };
  }
  return {
    reserveX: pairSetting.reserveY?.fields?.balance || "0",
    reserveY: pairSetting.reserveX?.fields?.balance || "0"
  };
};
var getAmountOut = (amountIn, reserveIn, reserveOut, fee) => {
  const amountWithFee = BigNumberInstance(amountIn).multipliedBy(1 - fee);
  const numerator = amountWithFee.multipliedBy(reserveOut);
  const denominator = amountWithFee.plus(reserveIn);
  return numerator.dividedBy(denominator).toFixed(0);
};
var _getAmountOut = (pair, _amountIn, coinIn, poolInfos) => {
  const poolDetail = poolInfos.find((item) => item.objectId === pair.lpObjectId);
  if (poolDetail === void 0) {
    throw new Error("Empty pool detail");
  }
  if (poolDetail.feeRate === void 0) {
    throw new Error("Empty feeRate");
  }
  const reserve = getReserveByCoinType(coinIn, poolDetail);
  return getAmountOut(_amountIn, reserve.reserveX, reserve.reserveY, poolDetail.feeRate);
};
var calculateAmountOutFromPath = (amount, coinInType, tradAbles, poolInfos) => {
  const smartRoute = {};
  smartRoute.amountIn = amount;
  smartRoute.routes = [];
  let amountOut = amount;
  let lpOutType = coinInType;
  for (let i = 0; i < tradAbles?.length; i++) {
    const route = {};
    route.coinTypeIn = lpOutType;
    route.amountIn = amountOut;
    amountOut = _getAmountOut(tradAbles[i], amountOut, lpOutType, poolInfos);
    lpOutType = tradAbles[i].coinYType == lpOutType ? tradAbles[i].coinXType : tradAbles[i].coinYType;
    route.coinTypeOut = lpOutType;
    route.amountOut = amountOut;
    route.pair = tradAbles[i];
    smartRoute.routes.push(route);
  }
  smartRoute.amountOut = amountOut;
  return smartRoute;
};
var LP_DECIMAL = 9;
import_bignumber14.BigNumber.config({
  DECIMAL_PLACES: 1e3,
  EXPONENTIAL_AT: [-1e3, 1e3],
  ROUNDING_MODE: 3
});
var BigNumber14 = import_bignumber14.BigNumber;
var BigNumberInstance = (value) => new BigNumber14(value);
var BIG_ZERO = BigNumberInstance(0);
var BIG_ONE = BigNumberInstance(1);
var BIG_NINE = BigNumberInstance(9);
var BIG_TEN = BigNumberInstance(10);
var getBalanceAmount = (amount, decimals = LP_DECIMAL) => {
  return BigNumberInstance(amount).div(BIG_TEN.pow(decimals));
};
var getDecimalAmount = (amount, decimals = LP_DECIMAL) => {
  return BigNumberInstance(amount).times(BIG_TEN.pow(decimals)).toFixed();
};
var calculateAmountOutInternal = async (value, coinIn, coinOut, coins) => {
  const { poolInfos } = await (0, import_ts_sdk.getPools)();
  const decimalInAmount = BigNumberInstance(getDecimalAmount(value, coinIn.decimals)).toFixed(0);
  const amountInFormat = getBalanceAmount(
    decimalInAmount,
    coins.find((coin) => coin.type === coinIn.type)?.decimals
  ).toFixed();
  const amountInNewState = {
    decimalAmount: decimalInAmount,
    amount: amountInFormat
  };
  const trades = await (0, import_ts_sdk.getSmartRoute)(decimalInAmount, coinIn.type, coinOut.type, true);
  const smartRoute = calculateAmountOutFromPath(decimalInAmount, coinIn.type, trades, poolInfos);
  const decimalOutAmount = smartRoute.amountOut;
  if (decimalOutAmount === void 0) {
    throw new Error("Decimal amount out is undefined");
  }
  const amountOutFormat = getBalanceAmount(
    decimalOutAmount,
    coins.find((coin) => coin.type === coinOut.type)?.decimals
  ).toFixed();
  const amountOutNewState = {
    decimalAmount: decimalOutAmount,
    amount: amountOutFormat
  };
  return {
    amountIn: amountInNewState,
    amountOut: amountOutNewState,
    trades,
    smartRoute
  };
};

// src/providers/flowx/utils.ts
function getCoinsMap({ coinList }) {
  const coinMap = coinList.reduce((acc, el) => {
    if (el.type === void 0 || el.decimals === void 0) {
      console.debug("flowx [getPoolsMap] no decimals or type for coin: ", el);
    }
    acc.set(el.type, { type: el.type, decimals: el.decimals, symbol: el.name });
    return acc;
  }, /* @__PURE__ */ new Map());
  const coins = {
    coins: Array.from(coinMap.values())
  };
  return { coins, coinMap };
}
function getPathsMap(pairs) {
  return pairs.reduce((map, pair) => {
    const base = pair.coinXType;
    const quote = pair.coinYType;
    const commonPoolData = {
      base,
      quote
    };
    const poolKey = `${base}-${quote}`;
    map.set(poolKey, commonPoolData);
    return map;
  }, /* @__PURE__ */ new Map());
}
function isCoinListValid(coinList) {
  return Array.isArray(coinList) && coinList.every(isCoinMetadataValid2);
}
function isCoinMetadataValid2(coinMetadata) {
  return typeof coinMetadata.decimals === "number" && typeof coinMetadata.type === "string" && (typeof coinMetadata.symbol === "string" || coinMetadata.symbol === void 0);
}
function isPairSettingValid(pairSetting) {
  return typeof pairSetting.coinXType === "string" && typeof pairSetting.coinYType === "string";
}
function isPairListValid(pairList) {
  return Array.isArray(pairList) && pairList.every(isPairSettingValid);
}

// src/storages/utils/getCoinsMetadataCache.ts
async function getCoinsMetadataCache({
  storage,
  provider,
  updateCacheInterval
}) {
  let coinsMetadataCache = [];
  const coinsMetadata = await storage.getCache({
    provider,
    property: "coinsMetadata" /* CoinsMetadata */
  });
  if (isShortCoinMetadataArray(coinsMetadata?.value)) {
    const timestamp = parseInt(coinsMetadata.timestamp);
    const cacheIsUpToDate = timestamp + updateCacheInterval > Date.now();
    if (cacheIsUpToDate) {
      coinsMetadataCache = coinsMetadata.value;
    } else {
      console.warn(`[getCoinsMetadataCache] ${provider} coins metadata cache is not up to date.`);
    }
  } else if (coinsMetadata === null) {
    console.warn(
      `[getCoinsMetadataCache] ${provider} Received empty coinsMetadataCache from strorage,
      coinsMetadataCache === null `
    );
  } else {
    const stringifiedCoinMetadata = JSON.stringify(coinsMetadata.value[0]);
    throw new Error(
      `[${provider}] getCoinsMetadataCache: coins metadata from storage is not (ExtractedCoinMetadataType[] or null). Example of coin metadata: ${stringifiedCoinMetadata}`
    );
  }
  return coinsMetadataCache;
}

// src/managers/dca/adapterUtils/flowxUtils.ts
var import_transactions10 = require("@mysten/sui.js/transactions");
var import_ts_sdk2 = require("@flowx-pkg/ts-sdk");
var CONTAINER_OBJECT_ID = "0xb65dcbf63fd3ad5d0ebfbf334780dc9f785eff38a4459e37ab08fa79576ee511";
var CLOCK_ID = "0x0000000000000000000000000000000000000000000000000000000000000006";
var PACKAGE_OBJECT_ID = "0xba153169476e8c3114962261d1edc70de5ad9781b83cc617ecc8c1923191cae0";
var FUNCTION = {
  SWAP_EXACT_OUTPUT: "swap_exact_output",
  SWAP_EXACT_INPUT: "swap_exact_input",
  SWAP_EXACT_INPUT_DOUBLEHOP: "swap_exact_input_doublehop",
  SWAP_EXACT_OUTPUT_DOUBLEHOP: "swap_exact_output_doublehop",
  SWAP_EXACT_INPUT_TRIPLEHOP: "swap_exact_input_triplehop",
  SWAP_EXACT_OUTPUT_TRIPLEHOP: "swap_exact_output_triplehop",
  SWAP_EXACT_INPUT_DOUBLE_OUTPUT: "swap_exact_input_double_output",
  SWAP_EXACT_INPUT_TRIPLE_OUTPUT: "swap_exact_input_triple_output",
  SWAP_EXACT_INPUT_QUADRUPLE_OUTPUT: "swap_exact_input_quadruple_output",
  SWAP_EXACT_INPUT_QUINTUPLE_OUTPUT: "swap_exact_input_quintuple_output",
  SWAP_EXACT_DOUBLE_INPUT: "swap_exact_double_input",
  SWAP_EXACT_TRIPLE_INPUT: "swap_exact_triple_input",
  SWAP_EXACT_QUADRUPLE_INPUT: "swap_exact_quadruple_input",
  SWAP_EXACT_QUINTUPLE_INPUT: "swap_exact_quintuple_input"
};
var swapExactInputDoctored = async (isExactIn, amountIn, amountOut, trades, coinIn, coinOut, account, valueSlippage) => {
  try {
    const slipageVal = valueSlippage > 100 ? 100 : valueSlippage < 0 ? 0 : valueSlippage;
    const slippage = BigNumberInstance(slipageVal).div(100).toFixed();
    const { typeArguments, args, tx, callFunction } = isExactIn ? await getArgsSwapExactInput(
      amountIn.decimalAmount,
      // eslint-disable-next-line new-cap
      BigNumberInstance(amountOut.decimalAmount).multipliedBy(1 - +slippage).toFixed(0),
      trades,
      coinIn,
      account,
      ""
    ) : await getArgsSwapExactOutput(amountIn.decimalAmount, amountOut.decimalAmount, trades, coinIn, account, "");
    const txb = await swap(tx, typeArguments, args, callFunction);
    return txb;
  } catch (e) {
    console.log("error", e);
    throw `ERROR SWAP: ${e}`;
  }
};
var swap = async (tx, typeArguments, args, callFunction) => {
  tx.moveCall({
    target: `${PACKAGE_OBJECT_ID}::router::${callFunction}`,
    arguments: args,
    typeArguments
  });
  return tx;
};
var getArgsSwapExactInput = async (amountIn, amountOutMin, trades, coinIn, account, recipient) => {
  const { coin: coinObjectId, tx } = await handleGetCoinAmount(amountIn, account, coinIn.type);
  const typeArguments = [coinIn.type];
  trades?.forEach((item) => {
    const lastArgs = typeArguments[typeArguments.length - 1] ?? "";
    if (lastArgs == item.coinXType) {
      typeArguments.push(item.coinYType);
    } else {
      typeArguments.push(item.coinXType);
    }
  });
  return {
    tx,
    typeArguments,
    args: [
      tx.object(CLOCK_ID),
      tx.object(CONTAINER_OBJECT_ID),
      tx.object(coinObjectId),
      tx.pure(+amountOutMin),
      tx.pure(recipient || account),
      tx.pure((0, import_ts_sdk2.estimateDealine)())
    ],
    callFunction: getSwapFunction(trades, true)
  };
};
var getSwapFunction = (trades, isExactIn = false) => {
  switch (trades?.length) {
    case 1:
      return isExactIn ? FUNCTION.SWAP_EXACT_INPUT : FUNCTION.SWAP_EXACT_OUTPUT;
    case 2:
      return isExactIn ? FUNCTION.SWAP_EXACT_INPUT_DOUBLEHOP : FUNCTION.SWAP_EXACT_OUTPUT_DOUBLEHOP;
    case 3:
      return isExactIn ? FUNCTION.SWAP_EXACT_INPUT_TRIPLEHOP : FUNCTION.SWAP_EXACT_OUTPUT_TRIPLEHOP;
    default:
      return isExactIn ? FUNCTION.SWAP_EXACT_INPUT : FUNCTION.SWAP_EXACT_OUTPUT;
  }
};
var getArgsSwapExactOutput = async (amountInMax, amountOut, trades, coinIn, account, recipient) => {
  const { coin: coinObjectId, tx } = await handleGetCoinAmount(amountInMax, account, coinIn.type);
  const typeArguments = [coinIn.type];
  trades?.forEach((item) => {
    const lastArgs = typeArguments[typeArguments.length - 1] ?? "";
    if (lastArgs == item.coinXType) {
      typeArguments.push(item.coinYType);
    } else {
      typeArguments.push(item.coinXType);
    }
  });
  return {
    tx,
    typeArguments,
    args: [
      tx.object(CLOCK_ID),
      tx.object(CONTAINER_OBJECT_ID),
      tx.object(coinObjectId),
      tx.pure(+amountInMax),
      tx.pure(+amountOut),
      tx.pure(recipient || account),
      tx.pure((0, import_ts_sdk2.estimateDealine)())
    ],
    callFunction: getSwapFunction(trades, false)
  };
};
var handleGetCoinAmount = async (amount, account, coinType, inheritTx) => {
  const tx = inheritTx ?? new import_transactions10.TransactionBlock();
  const coin = "0xaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
  return { tx, coin };
};

// src/managers/dca/adapters/flowxAdapter.ts
var import_transactions11 = require("@mysten/sui.js/transactions");
var DCA_ROUTER2 = "flow_x";
var InputIndex2 = 0;
var swapPatterns2 = {
  ".*::router::swap_exact_output$": `${DCA_CONFIG.DCA_CONTRACT}::${DCA_ROUTER2}::${"swap_exact_output"}`,
  ".*::router::swap_exact_output_doublehop$": `${DCA_CONFIG.DCA_CONTRACT}::${DCA_ROUTER2}::${"swap_exact_output_doublehop"}`,
  ".*::router::swap_exact_output_triplehop$": `${DCA_CONFIG.DCA_CONTRACT}::${DCA_ROUTER2}::${"swap_exact_output_triplehop"}`,
  ".*::router::swap_exact_input$": `${DCA_CONFIG.DCA_CONTRACT}::${DCA_ROUTER2}::${"swap_exact_input"}`,
  ".*::router::swap_exact_input_doublehop$": `${DCA_CONFIG.DCA_CONTRACT}::${DCA_ROUTER2}::${"swap_exact_input_doublehop"}`,
  ".*::router::swap_exact_input_triplehop$": `${DCA_CONFIG.DCA_CONTRACT}::${DCA_ROUTER2}::${"swap_exact_input_triplehop"}`
};
function buildDcaTxBlock2(txBlock, tokenFrom, tokenTo, dcaId, gasCost) {
  let isExactIn = false;
  const dcaBlock = {
    version: 1,
    transactions: [],
    inputs: [],
    gasConfig: txBlock.blockData.gasConfig,
    sender: txBlock.blockData.sender,
    expiration: txBlock.blockData.expiration
  };
  dcaBlock.transactions.push({
    kind: "MoveCall",
    target: "0x2::coin::zero",
    arguments: [],
    typeArguments: [tokenFrom]
  });
  const swapPatternRegex = new RegExp(Object.keys(swapPatterns2).join("|"));
  txBlock.blockData.transactions.forEach((transaction) => {
    if (transaction.kind === "MoveCall" && transaction.target) {
      const swapMatch = swapPatternRegex.exec(transaction.target);
      if (swapMatch) {
        const parts = transaction.target.split("::");
        const newTarget = `${DCA_CONFIG.DCA_CONTRACT}::${DCA_ROUTER2}::${parts[2]}`;
        isExactIn = parts[2].includes("exact_input");
        const swapParams = isExactIn ? {
          clock: fromArgument(transaction.arguments[0], inputIdx2()),
          pools: fromArgument(transaction.arguments[1], inputIdx2()),
          inputFunds: { kind: "Result", index: 0 },
          minOutput: fromArgument(transaction.arguments[3], inputIdx2()),
          recipient: fromArgument(transaction.arguments[4], inputIdx2()),
          sqrtPrice: fromArgument(transaction.arguments[5], inputIdx2()),
          dca: { kind: "Input", value: dcaId, index: inputIdx2(), type: "object" },
          gasGost: { kind: "Input", value: gasCost, index: inputIdx2(), type: "pure" }
        } : {
          clock: fromArgument(transaction.arguments[0], inputIdx2()),
          pools: fromArgument(transaction.arguments[1], inputIdx2()),
          inputFunds: { kind: "Result", index: 0 },
          maxInputAmount: fromArgument(transaction.arguments[3], inputIdx2()),
          exactOutput: fromArgument(transaction.arguments[4], inputIdx2()),
          recipient: fromArgument(transaction.arguments[5], inputIdx2()),
          sqrtPrice: fromArgument(transaction.arguments[6], inputIdx2()),
          dca: { kind: "Input", value: dcaId, index: inputIdx2(), type: "object" },
          gasGost: { kind: "Input", value: gasCost, index: inputIdx2(), type: "pure" }
        };
        const inputs = isExactIn ? [
          swapParams.clock,
          swapParams.pools,
          swapParams.minOutput,
          swapParams.recipient,
          swapParams.sqrtPrice,
          swapParams.dca,
          swapParams.gasGost
        ] : [
          swapParams.clock,
          swapParams.pools,
          swapParams.maxInputAmount,
          swapParams.exactOutput,
          swapParams.recipient,
          swapParams.sqrtPrice,
          swapParams.dca,
          swapParams.gasGost
        ];
        const args = isExactIn ? [
          swapParams.clock,
          swapParams.pools,
          swapParams.inputFunds,
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          swapParams.minOutput,
          swapParams.recipient,
          swapParams.sqrtPrice,
          swapParams.dca,
          swapParams.gasGost
        ] : [
          swapParams.clock,
          swapParams.pools,
          swapParams.inputFunds,
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          swapParams.maxInputAmount,
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          swapParams.exactOutput,
          swapParams.recipient,
          swapParams.sqrtPrice,
          swapParams.dca,
          swapParams.gasGost
        ];
        const tx = {
          arguments: args,
          kind: transaction.kind,
          target: newTarget,
          typeArguments: transaction.typeArguments
        };
        dcaBlock.inputs.push(...inputs);
        dcaBlock.transactions.push(tx);
      }
    }
  });
  const newTxBlock = import_transactions11.TransactionBlock.from(JSON.stringify(dcaBlock));
  return newTxBlock;
}
function inputIdx2() {
  ++InputIndex2;
  return InputIndex2 - 1;
}

// src/providers/flowx/flowx.ts
var FlowxSingleton = class _FlowxSingleton extends EventEmitter {
  /**
   * @constructor
   * @param {Omit<FlowxOptions, "lazyLoading">} options - The options for FlowxSingleton.
   */
  constructor(options) {
    super();
    this.providerName = "Flowx";
    this.isSmartRoutingAvailable = false;
    this.pathsCache = /* @__PURE__ */ new Map();
    this.coinsCache = /* @__PURE__ */ new Map();
    this.coinsMetadataCache = [];
    this.buildDcaTxBlockAdapter = buildDcaTxBlock2;
    const { updateIntervally = true, ...restCacheOptions } = options.cacheOptions;
    this.cacheOptions = { updateIntervally, ...restCacheOptions };
    this.storage = options.cacheOptions.storage ?? InMemoryStorageSingleton.getInstance();
  }
  /**
   * @public
   * @method getInstance
   * @description Gets the singleton instance of FlowxSingleton.
   * @param {FlowxOptions} [options] - Options for FlowxSingleton.
   * @return {Promise<FlowxSingleton>} The singleton instance of FlowxSingleton.
   */
  static async getInstance(options) {
    if (!_FlowxSingleton._instance) {
      if (options === void 0) {
        throw new Error("[Flowx] Options are required in arguments to create instance.");
      }
      const { cacheOptions, lazyLoading = true } = options;
      const instance = new _FlowxSingleton({ cacheOptions });
      lazyLoading ? instance.init() : await instance.init();
      _FlowxSingleton._instance = instance;
    }
    return _FlowxSingleton._instance;
  }
  /**
   * @private
   * @method init
   * @description Initializes the FlowxSingleton instance.
   * @return {Promise<void>} A Promise that resolves when initialization is complete.
   */
  async init() {
    console.debug(`[${this.providerName}] Singleton initiating.`);
    await this.fillCacheFromStorage();
    await this.updateCaches();
    this.cacheOptions.updateIntervally && this.updateCachesIntervally();
    this.bufferEvent("cachesUpdate", this.getCoins());
  }
  /**
   * Fills the cache from storage asynchronously.
   *
   * @private
   * @return {Promise<void>} A promise that resolves when the cache is filled from storage.
   */
  async fillCacheFromStorage() {
    try {
      const { coinsCache, pathsCache } = await getCoinsAndPathsCaches({
        storage: this.storage,
        provider: this.providerName,
        updateCacheInterval: this.cacheOptions.updateIntervalInMs
      });
      const coinsMetadataCache = await getCoinsMetadataCache({
        storage: this.storage,
        provider: this.providerName,
        updateCacheInterval: this.cacheOptions.updateIntervalInMs
      });
      this.coinsCache = coinsCache;
      this.pathsCache = pathsCache;
      this.coinsMetadataCache = coinsMetadataCache;
    } catch (error) {
      console.error(`[${this.providerName}] fillCacheFromStorage failed:`, error);
    }
  }
  /**
   * Checks if the storage cache is empty.
   *
   * @private
   * @return {boolean} True if the storage cache is empty, false otherwise.
   */
  isStorageCacheEmpty() {
    const isCacheEmpty = this.coinsCache.size === 0 || this.pathsCache.size === 0 || this.coinsMetadataCache.length === 0;
    return isCacheEmpty;
  }
  /**
   * @private
   * @method updateCaches
   * @description Updates the caches for paths and coins.
   * @return {Promise<void>} A Promise that resolves when caches are updated.
   */
  async updateCaches({ force } = { force: false }) {
    const isCacheEmpty = this.isStorageCacheEmpty();
    if (isCacheEmpty || force) {
      try {
        await this.updatePathsCache();
        await this.updateCoinsCache();
        this.emit("cachesUpdate", this.getCoins());
        await storeCaches({
          provider: this.providerName,
          storage: this.storage,
          coinsCache: this.getCoins(),
          pathsCache: this.getPaths(),
          coinsMetadataCache: this.coinsMetadataCache
        });
        console.debug("[FlowX] Caches are updated and stored.");
      } catch (error) {
        console.error("[Flowx] Caches update failed:", error);
      }
    }
  }
  /**
   * @private
   * @method updateCachesIntervally
   * @description Updates the caches at regular intervals.
   * @return {void}
   */
  updateCachesIntervally() {
    let isUpdatingCurrently = false;
    this.intervalId = setInterval(async () => {
      try {
        if (isUpdatingCurrently) {
          return;
        }
        isUpdatingCurrently = true;
        await this.updateCaches({ force: true });
      } finally {
        isUpdatingCurrently = false;
      }
    }, this.cacheOptions.updateIntervalInMs);
    exitHandlerWrapper({ intervalId: this.intervalId, providerName: this.providerName });
  }
  /**
   * @private
   * @method updateCoinsCache
   * @description Updates the coins cache.
   * @return {Promise<void>} A Promise that resolves when the coins cache is updated.
   */
  async updateCoinsCache() {
    const coinList = await (0, import_ts_sdk3.getCoinsFlowX)();
    const isValidResponse = isCoinListValid(coinList);
    if (!isValidResponse) {
      console.error("[Flowx] Coins response:", coinList);
      throw new Error("Coins response from API is not valid");
    }
    const { coinMap } = getCoinsMap({ coinList });
    this.coinsMetadataCache = coinList.map((coin) => ({ type: coin.type, decimals: coin.decimals }));
    this.coinsCache = coinMap;
  }
  /**
   * @private
   * @method updatePathsCache
   * @description Updates the paths cache.
   * @return {Promise<void>} A Promise that resolves when the paths cache is updated.
   */
  async updatePathsCache() {
    const pairs = await (0, import_ts_sdk3.getPairs)();
    const isValidResponse = isPairListValid(pairs);
    if (!isValidResponse) {
      console.error("[Flowx] Pairs response:", pairs);
      throw new Error("Pairs response from API is not valid");
    }
    this.pathsCache = getPathsMap(pairs);
  }
  /**
   * @public
   * @method getCoins
   * @description Gets the updated coins cache.
   * @return {UpdatedCoinsCache} Updated coins cache.
   */
  getCoins() {
    const data = Array.from(this.coinsCache.values());
    return { provider: this.providerName, data };
  }
  /**
   * @public
   * @method getPaths
   * @description Gets the paths cache.
   * @return {Map<string, CommonPoolData>} Paths cache.
   */
  getPaths() {
    return this.pathsCache;
  }
  /**
   * @public
   * @method getRouteData
   * @description Gets route data for a given pair of coins.
   * @param {Object} options - Options for getting route data.
   * @param {string} options.coinTypeFrom - The coin type to swap from.
   * @param {string} options.coinTypeTo - The coin type to swap to.
   * @param {string} options.inputAmount - The input amount for the swap.
   * @param {number} options.slippagePercentage - The slippage percentage.
   * @param {string} options.publicKey - The public key for the swap.
   * @return {Promise<{ outputAmount: bigint, route: ExtendedSwapCalculatedOutputDataType }>} Route data.
   */
  async getRouteData({
    coinTypeFrom,
    coinTypeTo,
    inputAmount
  }) {
    const tokenFromCoinNode = getCoinInfoFromCache(coinTypeFrom, this.coinsCache);
    const tokenToCoinNode = getCoinInfoFromCache(coinTypeTo, this.coinsCache);
    if (!tokenFromCoinNode) {
      throw new Error(`Coin ${coinTypeFrom} does not exist.`);
    }
    if (!tokenToCoinNode) {
      throw new Error(`Coin ${coinTypeTo} does not exist.`);
    }
    const { outputAmount, route } = await this.getSmartOutputAmountData({
      amountIn: inputAmount,
      tokenFrom: { address: tokenFromCoinNode.type, ...tokenFromCoinNode },
      tokenTo: { address: tokenToCoinNode.type, ...tokenToCoinNode }
    });
    return { outputAmount, route };
  }
  /**
   * @private
   * @method getSmartOutputAmountData
   * @description Gets the smart output amount data for a swap.
   * @param {Object} options - Options for getting smart output amount data.
   * @param {string} options.amountIn - The input amount for the swap.
   * @param {CoinNode} options.tokenFrom - The coin node to swap from.
   * @param {CoinNode} options.tokenTo - The coin node to swap to.
   * @return {Promise<{ outputAmount: bigint, route: ExtendedSwapCalculatedOutputDataType }>} Smart output amount data.
   */
  async getSmartOutputAmountData({
    amountIn,
    tokenFrom,
    tokenTo
  }) {
    const swapData = await calculateAmountOutInternal(amountIn, tokenFrom, tokenTo, this.coinsMetadataCache);
    return { outputAmount: BigInt(swapData.amountOut.decimalAmount), route: { ...swapData, tokenFrom, tokenTo } };
  }
  /**
   * @public
   * @method getSwapTransaction
   * @description Gets the swap transaction data.
   * @param {Object} options - Options for getting swap transaction data.
   * @param {ExtendedSwapCalculatedOutputDataType} options.route - The route for the swap.
   * @param {string} options.publicKey - The public key for the swap.
   * @param {number} options.slippagePercentage - The slippage percentage.
   * @return {Promise<TransactionBlock>} Swap transaction data.
   */
  async getSwapTransaction({
    route,
    publicKey,
    slippagePercentage
  }) {
    const absoluteSlippage = convertSlippage(slippagePercentage);
    const legacyTxBlock = await (0, import_ts_sdk3.swapExactInput)(
      false,
      // it should be false for now
      route.amountIn,
      // amount want to swap
      route.amountOut,
      // amount want to receive
      route.trades,
      // trades from calculate amount
      route.tokenFrom,
      // coin In data
      route.tokenTo,
      // coin Out data
      publicKey,
      absoluteSlippage
      // slippage (0.05%)
    );
    const txBlock = new import_transactions12.TransactionBlock(import_transactions12.TransactionBlock.from(legacyTxBlock.serialize()));
    return txBlock;
  }
  /**
   * @public
   * @method getSwapTransaction
   * @description Gets the swap transaction data.
   * @param {Object} options - Options for getting swap transaction data.
   * @param {ExtendedSwapCalculatedOutputDataType} options.route - The route for the swap.
   * @param {string} options.publicKey - The public key for the swap.
   * @param {number} options.slippagePercentage - The slippage percentage.
   * @return {Promise<TransactionBlock>} Swap transaction data.
   */
  async getSwapTransactionDoctored({
    route,
    publicKey,
    slippagePercentage
  }) {
    const absoluteSlippage = convertSlippage(slippagePercentage);
    const legacyTxBlock = await swapExactInputDoctored(
      false,
      // it should be false for now
      route.amountIn,
      // amount want to swap
      route.amountOut,
      // amount want to receive
      route.trades,
      // trades from calculate amount
      route.tokenFrom,
      // coin In data
      route.tokenTo,
      // coin Out data
      publicKey,
      absoluteSlippage
      // slippage (0.05%)
    );
    const txBlock = new import_transactions12.TransactionBlock(import_transactions12.TransactionBlock.from(legacyTxBlock.serialize()));
    return txBlock;
  }
  /**
   * Removes the current instance of FlowxSingleton.
   *
   * Disclaimer: While this method in this class is marked as public, it is strongly discouraged
   * to use it directly unless you are certain about the behavior.
   */
  static removeInstance() {
    _FlowxSingleton._instance = void 0;
  }
};

// src/providers/turbos/turbos.ts
var import_client5 = require("@mysten/sui.js/client");
var import_bignumber16 = __toESM(require("bignumber.js"));
var import_turbos_clmm_sdk2 = require("turbos-clmm-sdk");

// src/managers/dca/adapterUtils/turbosUtils.ts
var import_transactions13 = require("@mysten/sui.js/transactions");
var import_turbos_clmm_sdk = require("turbos-clmm-sdk");
var import_utils20 = require("@mysten/sui.js/utils");
var ONE_MINUTE = 60 * 1e3;
function amountOutWithSlippage(amountOut, slippage, amountSpecifiedIsInput) {
  if (amountSpecifiedIsInput) {
    const minus = new import_turbos_clmm_sdk.Decimal(100).minus(slippage).div(100);
    return new import_turbos_clmm_sdk.Decimal(amountOut).mul(minus).toFixed(0);
  }
  const plus = new import_turbos_clmm_sdk.Decimal(100).plus(slippage).div(100);
  return new import_turbos_clmm_sdk.Decimal(amountOut).mul(plus).toFixed(0);
}
function sqrtPriceWithSlippage(sdk, price, slippage, a2b, decimalsA, decimalsB) {
  const newPrice = new import_turbos_clmm_sdk.Decimal(price).mul(
    a2b ? new import_turbos_clmm_sdk.Decimal(100).minus(slippage).div(100) : new import_turbos_clmm_sdk.Decimal(100).plus(slippage).div(100)
  );
  const sqrtPrice = sdk.math.priceToSqrtPriceX64(newPrice, decimalsA, decimalsB);
  if (sqrtPrice.lt(new import_turbos_clmm_sdk.BN(import_turbos_clmm_sdk.MIN_SQRT_PRICE))) {
    return import_turbos_clmm_sdk.MIN_SQRT_PRICE;
  }
  if (sqrtPrice.gt(new import_turbos_clmm_sdk.BN(import_turbos_clmm_sdk.MAX_SQRT_PRICE))) {
    return import_turbos_clmm_sdk.MAX_SQRT_PRICE;
  }
  return sqrtPrice.toString();
}
function getFunctionNameAndTypeArguments(pools, coinTypeA, coinTypeB) {
  let typeArguments = [];
  const functionName = ["swap"];
  if (pools.length === 1) {
    typeArguments = pools[0];
    if (coinTypeA === typeArguments[0]) {
      functionName.push("a", "b");
    } else {
      functionName.push("b", "a");
    }
  } else {
    const pool1Args = pools[0];
    const pool2Args = pools[1];
    if (coinTypeA === pool1Args[0]) {
      functionName.push("a", "b");
      typeArguments.push(pool1Args[0], pool1Args[2], pool1Args[1]);
    } else {
      functionName.push("b", "a");
      typeArguments.push(pool1Args[1], pool1Args[2], pool1Args[0]);
    }
    typeArguments.push(pool2Args[2], coinTypeB);
    if (coinTypeB === pool2Args[0]) {
      functionName.push("c", "b");
    } else {
      functionName.push("b", "c");
    }
  }
  return {
    functionName: functionName.join("_"),
    typeArguments
  };
}
async function swapDoctored(sdk, options) {
  const { coinTypeA, coinTypeB, address, amountSpecifiedIsInput, slippage } = options;
  const amountA = new import_turbos_clmm_sdk.Decimal(options.amountA);
  const amountB = new import_turbos_clmm_sdk.Decimal(options.amountB);
  const contract = await sdk.contract.getConfig();
  console.log("Geting Routes");
  const routes = await Promise.all(
    options.routes.map(async (item) => {
      const typeArguments2 = await sdk.pool.getPoolTypeArguments(item.pool);
      const [coinA, coinB] = await Promise.all([
        sdk.coin.getMetadata(typeArguments2[0]),
        sdk.coin.getMetadata(typeArguments2[1])
      ]);
      return {
        ...item,
        coinA,
        coinB,
        typeArguments: typeArguments2
      };
    })
  );
  console.log("Got Routes");
  const coinIds = [];
  const { functionName, typeArguments } = getFunctionNameAndTypeArguments(
    routes.map(({ typeArguments: typeArguments2 }) => typeArguments2),
    coinTypeA,
    coinTypeB
  );
  console.log("Got Function Names");
  const sqrtPrices = routes.map(({ nextTickIndex, coinA, coinB, a2b }) => {
    const nextTickPrice = sdk.math.tickIndexToPrice(nextTickIndex, coinA.decimals, coinB.decimals);
    return sqrtPriceWithSlippage(sdk, nextTickPrice, slippage, a2b, coinA.decimals, coinB.decimals);
  });
  console.log("Got sqrtPrices");
  const txb = options.txb || new import_transactions13.TransactionBlock();
  txb.moveCall({
    target: `${contract.PackageId}::swap_router::${functionName}`,
    typeArguments,
    arguments: [
      ...routes.map(({ pool }) => txb.object(pool)),
      txb.makeMoveVec({
        objects: sdk.coin.convertTradeCoins(txb, coinIds, coinTypeA, amountA)
      }),
      txb.pure((amountSpecifiedIsInput ? amountA : amountB).toFixed(0), "u64"),
      txb.pure(
        amountOutWithSlippage(amountSpecifiedIsInput ? amountB : amountA, slippage, amountSpecifiedIsInput),
        "u64"
      ),
      ...sqrtPrices.map((price) => txb.pure(price, "u128")),
      txb.pure(amountSpecifiedIsInput, "bool"),
      txb.pure(address, "address"),
      txb.pure(Date.now() + ONE_MINUTE * 3, "u64"),
      txb.object(import_utils20.SUI_CLOCK_OBJECT_ID),
      txb.object(contract.Versioned)
    ]
  });
  return txb;
}

// src/managers/dca/adapters/turbosAdapter.ts
var import_transactions14 = require("@mysten/sui.js/transactions");
var DCA_ROUTER3 = "turbos";
var InputIndex3 = 0;
var swapPatterns3 = {
  ".*::swap_router::swap_a_b$": `${DCA_CONFIG.DCA_CONTRACT}::${DCA_ROUTER3}::${"swap_a_b"}`,
  ".*::swap_router::swap_b_a$": `${DCA_CONFIG.DCA_CONTRACT}::${DCA_ROUTER3}::${"swap_b_a"}`,
  ".*::swap_router::swap_a_b_b_c$": `${DCA_CONFIG.DCA_CONTRACT}::${DCA_ROUTER3}::${"swap_a_b_b_c"}`,
  ".*::swap_router::swap_a_b_c_b$": `${DCA_CONFIG.DCA_CONTRACT}::${DCA_ROUTER3}::${"swap_a_b_c_b"}`,
  ".*::swap_router::swap_b_a_b_c$": `${DCA_CONFIG.DCA_CONTRACT}::${DCA_ROUTER3}::${"swap_b_a_b_c"}`,
  ".*::swap_router::swap_b_a_c_b$": `${DCA_CONFIG.DCA_CONTRACT}::${DCA_ROUTER3}::${"swap_b_a_c_b"}`
};
function buildDcaTxBlock3(txBlock, tokenFrom, tokenTo, dcaId, gasCost) {
  let simpleSwap = false;
  const dcaBlock = {
    version: 1,
    transactions: [],
    inputs: [],
    gasConfig: txBlock.blockData.gasConfig,
    sender: txBlock.blockData.sender,
    expiration: txBlock.blockData.expiration
  };
  dcaBlock.transactions.push({
    kind: "MoveCall",
    target: "0x2::coin::zero",
    arguments: [],
    typeArguments: [tokenFrom]
  });
  const swapPatternRegex = new RegExp(Object.keys(swapPatterns3).join("|"));
  txBlock.blockData.transactions.forEach((transaction) => {
    if (transaction.kind === "MoveCall" && transaction.target) {
      const swapMatch = swapPatternRegex.exec(transaction.target);
      if (swapMatch) {
        const parts = transaction.target.split("::");
        const newTarget = `${DCA_CONFIG.DCA_CONTRACT}::${DCA_ROUTER3}::${parts[2]}`;
        simpleSwap = parts[2] === "swap_a_b" || parts[2] === "swap_b_a";
        const swapParams = simpleSwap ? {
          pool: fromArgument(transaction.arguments[0], inputIdx3()),
          coin: { kind: "Result", index: 0 },
          amount: fromArgument(transaction.arguments[2], inputIdx3()),
          amountThreshold: fromArgument(transaction.arguments[3], inputIdx3()),
          sqrtPriceLimit: fromArgument(transaction.arguments[4], inputIdx3()),
          isExactIn: fromArgument(transaction.arguments[5], inputIdx3()),
          recipient: fromArgument(transaction.arguments[6], inputIdx3()),
          deadline: fromArgument(transaction.arguments[7], inputIdx3()),
          clock: fromArgument(transaction.arguments[8], inputIdx3()),
          versioned: fromArgument(transaction.arguments[9], inputIdx3()),
          dca: { kind: "Input", value: dcaId, index: inputIdx3(), type: "object" },
          gasGost: { kind: "Input", value: gasCost, index: inputIdx3(), type: "pure" }
        } : {
          pool: fromArgument(transaction.arguments[0], inputIdx3()),
          poolII: fromArgument(transaction.arguments[1], inputIdx3()),
          coin: { kind: "Result", index: 0 },
          amount: fromArgument(transaction.arguments[3], inputIdx3()),
          amountThreshold: fromArgument(transaction.arguments[4], inputIdx3()),
          sqrtPriceLimit: fromArgument(transaction.arguments[5], inputIdx3()),
          sqrtPriceLimitII: fromArgument(transaction.arguments[6], inputIdx3()),
          isExactIn: fromArgument(transaction.arguments[7], inputIdx3()),
          recipient: fromArgument(transaction.arguments[8], inputIdx3()),
          deadline: fromArgument(transaction.arguments[9], inputIdx3()),
          clock: fromArgument(transaction.arguments[10], inputIdx3()),
          versioned: fromArgument(transaction.arguments[11], inputIdx3()),
          dca: { kind: "Input", value: dcaId, index: inputIdx3(), type: "object" },
          gasGost: { kind: "Input", value: gasCost, index: inputIdx3(), type: "pure" }
        };
        const inputs = simpleSwap ? [
          swapParams.pool,
          swapParams.amount,
          swapParams.amountThreshold,
          swapParams.sqrtPriceLimit,
          swapParams.isExactIn,
          swapParams.recipient,
          swapParams.deadline,
          swapParams.clock,
          swapParams.versioned,
          swapParams.dca,
          swapParams.gasGost
        ] : [
          swapParams.pool,
          swapParams.poolII,
          swapParams.amount,
          swapParams.amountThreshold,
          swapParams.sqrtPriceLimit,
          swapParams.sqrtPriceLimitII,
          swapParams.isExactIn,
          swapParams.recipient,
          swapParams.deadline,
          swapParams.clock,
          swapParams.versioned,
          swapParams.dca,
          swapParams.gasGost
        ];
        const args = simpleSwap ? [
          swapParams.pool,
          swapParams.coin,
          swapParams.amount,
          swapParams.amountThreshold,
          swapParams.sqrtPriceLimit,
          swapParams.isExactIn,
          swapParams.recipient,
          swapParams.deadline,
          swapParams.clock,
          swapParams.versioned,
          swapParams.dca,
          swapParams.gasGost
        ] : [
          swapParams.pool,
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          swapParams.poolII,
          swapParams.coin,
          swapParams.amount,
          swapParams.amountThreshold,
          swapParams.sqrtPriceLimit,
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          swapParams.sqrtPriceLimitII,
          swapParams.isExactIn,
          swapParams.recipient,
          swapParams.deadline,
          swapParams.clock,
          swapParams.versioned,
          swapParams.dca,
          swapParams.gasGost
        ];
        const tx = {
          arguments: args,
          kind: transaction.kind,
          target: newTarget,
          typeArguments: transaction.typeArguments
        };
        dcaBlock.inputs.push(...inputs);
        dcaBlock.transactions.push(tx);
      }
    }
  });
  const newTxBlock = import_transactions14.TransactionBlock.from(JSON.stringify(dcaBlock));
  return newTxBlock;
}
function inputIdx3() {
  ++InputIndex3;
  return InputIndex3 - 1;
}

// src/storages/utils/getPoolsCache.ts
var getPoolsCache = async ({
  storage,
  provider,
  updateCacheInterval
}) => {
  let poolsCache = [];
  const pools = await storage.getCache({
    provider,
    property: "pools" /* Pools */
  });
  if (isShortPoolDataArray(pools?.value)) {
    const timestamp = parseInt(pools.timestamp);
    const cacheIsUpToDate = timestamp + updateCacheInterval > Date.now();
    if (cacheIsUpToDate) {
      poolsCache = pools.value;
    } else {
      console.warn(`[getPoolsCache] ${provider} pools cache is not up to date.`);
    }
  } else if (pools === null) {
    console.warn(`[getPoolsCache] ${provider} Received empty pools from strorage, pools === null `);
  } else {
    const stringifiedPool = JSON.stringify(pools.value[0]);
    throw new Error(
      `[${provider}] getPoolsCache: pools from storage are not (ShortPoolData[] or null). Example of pool: ${stringifiedPool}`
    );
  }
  return poolsCache;
};

// src/providers/turbos/utils.ts
var import_bignumber15 = __toESM(require("bignumber.js"));
function isPoolsApiResponseValid(response) {
  return response.code === 0 && response.message === "OK" && response.data !== void 0 && Array.isArray(response.data) && response.data.every(isPoolDataValid);
}
function isCoinsApiResponseValid(response) {
  return response.code === 0 && response.message === "OK" && response.data !== void 0 && Array.isArray(response.data) && response.data.every(isCoinDataValid);
}
function isPoolDataValid(poolData) {
  return typeof poolData.id === "number" && typeof poolData.coin_a === "string" && typeof poolData.coin_b === "string" && typeof poolData.deploy_time_ms === "string" && typeof poolData.fee === "string" && typeof poolData.fee_growth_global_a === "string" && typeof poolData.fee_growth_global_b === "string" && typeof poolData.fee_protocol === "string" && typeof poolData.liquidity === "string" && typeof poolData.max_liquidity_per_tick === "string" && typeof poolData.protocol_fees_a === "string" && typeof poolData.protocol_fees_b === "string" && typeof poolData.sqrt_price === "string" && typeof poolData.tick_current_index === "number" && typeof poolData.tick_spacing === "string" && typeof poolData.unlocked === "boolean" && typeof poolData.pool_id === "string" && typeof poolData.type === "string" && typeof poolData.coin_symbol_a === "string" && typeof poolData.coin_symbol_b === "string" && typeof poolData.coin_type_a === "string" && typeof poolData.coin_type_b === "string" && typeof poolData.fee_type === "string" && typeof poolData.add_2_percent_depth === "string" && typeof poolData.reduce_2_percent_depth === "string" && Array.isArray(poolData.reward_infos) && poolData.reward_infos.every(isRewardInfoValid) && typeof poolData.reward_last_updated_time_ms === "string" && (typeof poolData.category === "string" || poolData.category === null) && typeof poolData.apr === "number" && typeof poolData.apr_percent === "number" && typeof poolData.fee_apr === "number" && typeof poolData.reward_apr === "number" && typeof poolData.volume_24h_usd === "number" && typeof poolData.liquidity_usd === "number" && typeof poolData.coin_a_liquidity_usd === "number" && typeof poolData.coin_b_liquidity_usd === "number" && typeof poolData.fee_24h_usd === "number" && typeof poolData.flag === "number" && typeof poolData.created_at === "string" && typeof poolData.updated_at === "string";
}
function isRewardInfoValid(rewardInfo) {
  return typeof rewardInfo.type === "string" && typeof rewardInfo.fields === "object" && !Array.isArray(rewardInfo.fields);
}
function isCategoryValid(category) {
  return typeof category.id === "number" && typeof category.name === "string" && typeof category.badge_url === "string";
}
function isCoinDataValid(coinData) {
  return typeof coinData.id === "number" && typeof coinData.name === "string" && typeof coinData.type === "string" && typeof coinData.symbol === "string" && typeof coinData.decimals === "number" && typeof coinData.logo_url === "string" && typeof coinData.coingecko_id === "string" && (typeof coinData.pyth_id === "string" || coinData.pyth_id === null) && typeof coinData.in_quote_list === "boolean" && typeof coinData.is_stable === "boolean" && typeof coinData.is_popular === "boolean" && typeof coinData.in_pool === "boolean" && typeof coinData.category_id === "number" && typeof coinData.faucet_amount === "string" && typeof coinData.flag === "number" && typeof coinData.created_at === "string" && typeof coinData.updated_at === "string" && isCategoryValid(coinData.category);
}
function getPathsMap2(pools) {
  return pools.reduce((map, pool) => {
    const coinTypeA = pool.coinTypeA;
    const coinTypeB = pool.coinTypeB;
    const commonPoolData = {
      base: coinTypeA,
      quote: coinTypeB
    };
    const poolKey = `${coinTypeA}-${coinTypeB}`;
    map.set(poolKey, commonPoolData);
    return map;
  }, /* @__PURE__ */ new Map());
}
var getCoinsMap2 = (coins) => {
  return coins.reduce((map, coin) => {
    map.set(coin.type, { symbol: coin.symbol, type: coin.type, decimals: coin.decimals });
    return map;
  }, /* @__PURE__ */ new Map());
};
var getPoolByCoins = (tokenFrom, tokenTo, pools) => {
  const tokenFromIsSui = tokenFrom === SHORT_SUI_COIN_TYPE || tokenFrom === LONG_SUI_COIN_TYPE;
  const tokenToIsSui = tokenTo === SHORT_SUI_COIN_TYPE || tokenTo === LONG_SUI_COIN_TYPE;
  return pools.find((pool) => {
    const coinAInPoolIsSui = pool.coinTypeA === SHORT_SUI_COIN_TYPE || pool.coinTypeA === LONG_SUI_COIN_TYPE;
    const coinBInPoolIsSui = pool.coinTypeB === SHORT_SUI_COIN_TYPE || pool.coinTypeB === LONG_SUI_COIN_TYPE;
    const notSuiToken = tokenFromIsSui ? tokenTo : tokenFrom;
    const poolHasBothTokens = pool.coinTypeA === tokenFrom && pool.coinTypeB === tokenTo || pool.coinTypeA === tokenTo && pool.coinTypeB === tokenFrom;
    return tokenFromIsSui || tokenToIsSui ? coinAInPoolIsSui && pool.coinTypeB === notSuiToken || coinBInPoolIsSui && pool.coinTypeA === notSuiToken : poolHasBothTokens;
  });
};
function isTurbosCreatePoolEventParsedJson(data) {
  return typeof data === "object" && data !== null && "pool" in data && typeof data.pool === "string";
}
async function getCoinsDataForPool({
  coinManager,
  coinTypeA,
  coinTypeB,
  rawCoinAmountA,
  rawCoinAmountB,
  fee
}) {
  const coinDataA = await coinManager.getCoinByType2(coinTypeA);
  const coinDataB = await coinManager.getCoinByType2(coinTypeB);
  let coinSymbolA = coinTypeA;
  let coinSymbolB = coinTypeB;
  let coinDecimalsA = 0;
  let coinDecimalsB = 0;
  let amountAIsRaw = true;
  let amountBIsRaw = true;
  if (coinDataA !== null) {
    coinSymbolA = coinDataA.symbol ?? coinDataA.type;
    coinDecimalsA = coinDataA.decimals;
    amountAIsRaw = false;
  }
  if (coinDataB !== null) {
    coinSymbolB = coinDataB.symbol ?? coinDataB.type;
    coinDecimalsB = coinDataB.decimals;
    amountBIsRaw = false;
  }
  const amountA = new import_bignumber15.default(rawCoinAmountA).dividedBy(10 ** coinDecimalsA).toString();
  const amountB = new import_bignumber15.default(rawCoinAmountB).dividedBy(10 ** coinDecimalsB).toString();
  const poolName = `${coinSymbolA}-${coinSymbolB}`;
  const feePercentage = new import_bignumber15.default(fee).div(TurbosSingleton.FEE_DIVIDER).toString();
  return {
    poolName,
    amountA,
    amountB,
    coinSymbolA,
    coinSymbolB,
    amountAIsRaw,
    amountBIsRaw,
    feePercentage
  };
}

// src/providers/turbos/turbos.ts
var _TurbosSingleton = class _TurbosSingleton extends EventEmitter {
  /**
   * @constructor
   * @param {Omit<TurbosOptions, "lazyLoading">} options - The options for TurbosSingleton.
   */
  constructor(options) {
    super();
    this.isSmartRoutingAvailable = false;
    this.providerName = "Turbos";
    this.poolsCache = [];
    this.pathsCache = /* @__PURE__ */ new Map();
    this.coinsCache = /* @__PURE__ */ new Map();
    this.buildDcaTxBlockAdapter = buildDcaTxBlock3;
    const provider = new import_client5.SuiClient({ url: options.suiProviderUrl });
    this.turbosSdk = new import_turbos_clmm_sdk2.TurbosSdk(import_turbos_clmm_sdk2.Network.mainnet, provider);
    const { updateIntervally = true, ...restCacheOptions } = options.cacheOptions;
    this.cacheOptions = { updateIntervally, ...restCacheOptions };
    this.proxy = options.proxy;
    this.storage = options.cacheOptions.storage ?? InMemoryStorageSingleton.getInstance();
  }
  /**
   * @public
   * @method getInstance
   * @description Gets the singleton instance of TurbosSingleton.
   * @param {TurbosOptions} [options] - Options for TurbosSingleton.
   * @return {Promise<TurbosSingleton>} The singleton instance of TurbosSingleton.
   */
  static async getInstance(options) {
    if (!_TurbosSingleton._instance) {
      if (options === void 0) {
        throw new Error("[TurbosManager] Options are required in arguments to create instance.");
      }
      const { suiProviderUrl, cacheOptions, lazyLoading = true, proxy } = options;
      const instance = new _TurbosSingleton({ suiProviderUrl, cacheOptions, proxy });
      lazyLoading ? instance.init() : await instance.init();
      _TurbosSingleton._instance = instance;
    }
    return _TurbosSingleton._instance;
  }
  /**
   * @private
   * @method init
   * @description Initializes the TurbosSingleton instance.
   * @return {Promise<void>} A Promise that resolves when initialization is complete.
   */
  async init() {
    console.debug(`[${this.providerName}] Singleton initiating.`);
    await this.fillCacheFromStorage();
    await this.updateCaches();
    this.cacheOptions.updateIntervally && this.updateCachesIntervally();
    this.bufferEvent("cachesUpdate", this.getCoins());
  }
  /**
   * Fills the cache from storage asynchronously.
   *
   * @private
   * @return {Promise<void>} A promise that resolves when the cache is filled from storage.
   */
  async fillCacheFromStorage() {
    try {
      const { coinsCache, pathsCache } = await getCoinsAndPathsCaches({
        storage: this.storage,
        provider: this.providerName,
        updateCacheInterval: this.cacheOptions.updateIntervalInMs
      });
      const poolsCache = await getPoolsCache({
        storage: this.storage,
        provider: this.providerName,
        updateCacheInterval: this.cacheOptions.updateIntervalInMs
      });
      this.coinsCache = coinsCache;
      this.pathsCache = pathsCache;
      this.poolsCache = poolsCache;
    } catch (error) {
      console.error(`[${this.providerName}] fillCacheFromStorage failed:`, error);
    }
  }
  /**
   * Checks if the storage cache is empty.
   *
   * @private
   * @return {boolean} True if the storage cache is empty, false otherwise.
   */
  isStorageCacheEmpty() {
    const isCacheEmpty = this.coinsCache.size === 0 || this.pathsCache.size === 0 || this.poolsCache.length === 0;
    return isCacheEmpty;
  }
  /**
   * @private
   * @method updateCaches
   * @description Updates the caches for pools, paths, and coins.
   * @return {Promise<void>} A Promise that resolves when caches are updated.
   */
  async updateCaches({ force } = { force: false }) {
    const isCacheEmpty = this.isStorageCacheEmpty();
    if (isCacheEmpty || force) {
      try {
        await this.updatePoolsCache();
        this.updatePathsCache();
        await this.updateCoinsCache();
        this.emit("cachesUpdate", this.getCoins());
        await storeCaches({
          provider: this.providerName,
          storage: this.storage,
          coinsCache: this.getCoins(),
          pathsCache: this.getPaths(),
          poolsCache: this.getPools()
        });
        console.debug("[Turbos] Caches are updated and stored.");
      } catch (error) {
        console.error("[Turbos] Caches update failed:", error);
      }
    }
  }
  /**
   * @private
   * @method updateCachesIntervally
   * @description Updates the caches at regular intervals.
   * @return {void}
   */
  updateCachesIntervally() {
    let isUpdatingCurrently = false;
    this.intervalId = setInterval(async () => {
      try {
        if (isUpdatingCurrently) {
          return;
        }
        isUpdatingCurrently = true;
        await this.updateCaches({ force: true });
      } finally {
        isUpdatingCurrently = false;
      }
    }, this.cacheOptions.updateIntervalInMs);
    exitHandlerWrapper({ intervalId: this.intervalId, providerName: this.providerName });
  }
  /**
   * @private
   * @method updatePoolsCache
   * @description Updates the pools cache.
   * @return {Promise<void>} A Promise that resolves when the pools cache is updated.
   */
  async updatePoolsCache() {
    const pools = await this.fetchPoolsFromApi();
    this.poolsCache = pools.map((pool) => ({
      poolId: pool.pool_id,
      coinTypeA: pool.coin_type_a,
      coinTypeB: pool.coin_type_b
    }));
  }
  /**
   * @private
   * @method updatePathsCache
   * @description Updates the paths cache.
   * @return {void}
   */
  updatePathsCache() {
    this.pathsCache = getPathsMap2(this.poolsCache);
  }
  /**
   * @private
   * @method updateCoinsCache
   * @description Updates the coins cache.
   * @return {Promise<void>} A Promise that resolves when the coins cache is updated.
   */
  async updateCoinsCache() {
    const coins = await this.fetchCoinsFromApi();
    this.coinsCache = getCoinsMap2(coins);
  }
  /**
   * Gets pools data from the Turbos API.
   *
   * @public
   * @async
   * @return {Promise<PoolData[]>} A Promise that resolves to an array of PoolData.
   */
  async fetchPoolsFromApi() {
    const fetchPoolsCount = 1e6;
    const url = this.proxy ? `${this.proxy}/${_TurbosSingleton.TURBOS_API_URL}/pools?pageSize=${fetchPoolsCount}` : `${_TurbosSingleton.TURBOS_API_URL}/pools?pageSize=${fetchPoolsCount}`;
    const response = await fetch(url);
    const responseJson = await response.json();
    const isValidPoolsResponse = isPoolsApiResponseValid(responseJson);
    if (!isValidPoolsResponse) {
      throw new Error("[Turbos] Pools response from API is not valid.");
    }
    return responseJson.data;
  }
  /**
   * Fetches coin data from the Turbos API.
   *
   * @public
   * @async
   * @return {Promise<CoinData[]>} A Promise that resolves to an array of CoinData.
   */
  async fetchCoinsFromApi() {
    const response = await fetch(`${_TurbosSingleton.TURBOS_API_URL}/coins`);
    const responseJson = await response.json();
    const isValidResponse = isCoinsApiResponseValid(responseJson);
    if (!isValidResponse) {
      throw new Error("[Turbos] Coins response from API is not valid.");
    }
    return responseJson.data;
  }
  /**
   * @public
   * @method getPools
   * @description Gets the pools cache.
   * @return {ShortPoolData[]} Pools cache.
   */
  getPools() {
    return this.poolsCache;
  }
  /**
   * Fetches the pool data and maps them into a map where the key is a combination of
   * `coin_type_a` and `coin_type_b` and the value is a `CommonPoolData` object.
   *
   * @return {Map<string, CommonPoolData>} Map of `CommonPoolData`.
   */
  getPaths() {
    return this.pathsCache;
  }
  /**
   * Transforms coins cache to CommonCoinData format.
   *
   * @public
   * @async
   * @return {CommonCoinData[]} An array of CommonCoinData.
   */
  getCoins() {
    const allCoins = Array.from(this.coinsCache.values());
    return { provider: this.providerName, data: allCoins };
  }
  /**
   * @public
   * @method getRouteData
   * @description Gets route data for a given pair of coins.
   * @param {Object} options - Options for getting route data.
   * @param {string} options.coinTypeFrom - The coin type to swap from.
   * @param {string} options.coinTypeTo - The coin type to swap to.
   * @param {string} options.inputAmount - The input amount for the swap.
   * @param {number} options.slippagePercentage - The slippage percentage.
   * @param {string} options.publicKey - The public key for the swap.
   * @return {Promise<{ outputAmount: bigint, route: ExtendedSwapCalculatedOutputDataType }>} Route data.
   */
  async getRouteData({
    coinTypeFrom,
    coinTypeTo,
    inputAmount,
    publicKey
  }) {
    const { outputAmount, ...otherData } = await this.getSwapRequiredData({
      inputAmount,
      tokenFrom: coinTypeFrom,
      tokenTo: coinTypeTo,
      publicKey
    });
    return { outputAmount, route: { outputAmount, ...otherData } };
  }
  /**
   * Retrieves swap-related data required for swapping tokens.
   *
   * @public
   * @async
   * @param {string} tokenFrom - The token from which the swap is initiated.
   * @param {string} tokenTo - The target token for the swap.
   * @param {number} inputAmount - The amount of the input token for the swap.
   * @param {string} publicKey - The public key of the user initiating the swap.
   * @return {Promise<SwapRequiredData>} A Promise that resolves to the SwapRequiredData for the swap.
   * @throws {Error} Throws an error if there is no pool with the specified coin types.
   */
  async getSwapRequiredData({
    tokenFrom,
    tokenTo,
    inputAmount,
    publicKey
  }) {
    const pool = getPoolByCoins(tokenFrom, tokenTo, this.poolsCache);
    if (!pool) {
      throw new Error(`[TurbosManager] Pool with coin types "${tokenFrom}" and "${tokenTo}" is not found.`);
    }
    const poolId = pool.poolId;
    const tokenFromIsSui = tokenFrom === SHORT_SUI_COIN_TYPE || tokenFrom === LONG_SUI_COIN_TYPE;
    const tokenFromIsTokenA = tokenFromIsSui ? pool.coinTypeA === SHORT_SUI_COIN_TYPE || pool.coinTypeA === LONG_SUI_COIN_TYPE : pool.coinTypeA === tokenFrom;
    const inputCoin = getCoinInfoFromCache(tokenFrom, this.coinsCache);
    if (!inputCoin) {
      throw new Error(`[TurbosManager] Cannot find coin with type "${tokenFrom}".`);
    }
    const inputCoinDecimals = inputCoin.decimals;
    const inputAmountWithDecimalsBigNumber = new import_bignumber16.default(inputAmount).multipliedBy(10 ** inputCoinDecimals);
    const inputAmountWithoutExceededDecimalPart = removeDecimalPart(inputAmountWithDecimalsBigNumber);
    const inputAmountWithDecimals = inputAmountWithoutExceededDecimalPart.toString();
    const swapResult = (await this.turbosSdk.trade.computeSwapResult({
      pools: [{ pool: poolId, a2b: tokenFromIsTokenA }],
      address: publicKey,
      amountSpecified: inputAmountWithDecimals,
      amountSpecifiedIsInput: true
    }))[0];
    const nextTickIndex = this.turbosSdk.math.bitsToNumber(swapResult.tick_current_index.bits);
    const outputAmount = tokenFromIsTokenA ? swapResult.amount_b : swapResult.amount_a;
    return {
      outputAmount: BigInt(outputAmount),
      nextTickIndex,
      pool,
      inputAmountWithDecimals,
      tokenFromIsTokenA
    };
  }
  /**
   * Gets a transaction block for swapping tokens based on provided swap data.
   *
   * @public
   * @async
   * @param {SwapRequiredData} swapRequiredData - The required data for the swap.
   * @param {string} publicKey - The public key of the user.
   * @param {number} [slippagePercentage=10] - The slippage percentage.
   * @return {Promise<TransactionBlock>} A Promise that resolves to a TransactionBlock.
   */
  async getSwapTransaction({
    route,
    publicKey,
    slippagePercentage = 10
  }) {
    const { pool, outputAmount, nextTickIndex, inputAmountWithDecimals, tokenFromIsTokenA } = route;
    const parsedSlippage = convertSlippage(slippagePercentage).toString();
    const transaction = await this.turbosSdk.trade.swap({
      routes: [{ pool: pool.poolId, a2b: tokenFromIsTokenA, nextTickIndex }],
      coinTypeA: tokenFromIsTokenA ? pool.coinTypeA : pool.coinTypeB,
      coinTypeB: tokenFromIsTokenA ? pool.coinTypeB : pool.coinTypeA,
      address: publicKey,
      amountA: inputAmountWithDecimals,
      amountB: outputAmount.toString(),
      amountSpecifiedIsInput: true,
      slippage: parsedSlippage
    });
    return transaction;
  }
  /**
   * Gets a transaction block for swapping tokens based on provided swap data.
   *
   * @public
   * @async
   * @param {SwapRequiredData} swapRequiredData - The required data for the swap.
   * @param {string} publicKey - The public key of the user.
   * @param {number} [slippagePercentage=10] - The slippage percentage.
   * @return {Promise<TransactionBlock>} A Promise that resolves to a TransactionBlock.
   */
  async getSwapTransactionDoctored({
    route,
    publicKey,
    slippagePercentage = 10
  }) {
    const { pool, outputAmount, nextTickIndex, inputAmountWithDecimals, tokenFromIsTokenA } = route;
    const parsedSlippage = convertSlippage(slippagePercentage).toString();
    const transaction = await swapDoctored(this.turbosSdk, {
      routes: [{ pool: pool.poolId, a2b: tokenFromIsTokenA, nextTickIndex }],
      coinTypeA: tokenFromIsTokenA ? pool.coinTypeA : pool.coinTypeB,
      coinTypeB: tokenFromIsTokenA ? pool.coinTypeB : pool.coinTypeA,
      address: publicKey,
      amountA: inputAmountWithDecimals,
      amountB: outputAmount.toString(),
      amountSpecifiedIsInput: true,
      slippage: parsedSlippage
    });
    return transaction;
  }
  /**
   * Generates a transaction for creating a new liquidity pool.
   *
   * @param {Object} params - Parameters for creating the pool transaction.
   * @param {number} params.tickSpacing - The tick spacing of the pool.
   * @param {string} params.coinTypeA - The type of the first coin in the pool.
   * @param {string} params.coinTypeB - The type of the second coin in the pool.
   * @param {number} params.coinDecimalsA - The number of decimals for the first coin.
   * @param {number} params.coinDecimalsB - The number of decimals for the second coin.
   * @param {string} params.amountA - The amount of the first coin to deposit into the pool. Example: 10000.1286 RINCEL
   * @param {string} params.amountB - The amount of the second coin to deposit into the pool. Example: 12.472 SUI
   * @param {number} params.slippage - The acceptable slippage percentage for the transaction. Example: 10 (means 10%)
   * @param {string} params.publicKey - The public key of the transaction sender.
   * @return {Promise<TransactionBlock>} A promise that resolves to the transaction block for creating the pool.
   */
  async getCreatePoolTransaction({
    tickSpacing,
    coinDecimalsA,
    coinDecimalsB,
    coinTypeA,
    coinTypeB,
    amountA,
    amountB,
    slippage,
    publicKey
  }) {
    const fee = await this.getFeeObject(tickSpacing);
    const rawAmountA = new import_bignumber16.default(amountA).multipliedBy(10 ** coinDecimalsA).toFixed();
    const rawAmountB = new import_bignumber16.default(amountB).multipliedBy(10 ** coinDecimalsB).toFixed();
    const price = new import_bignumber16.default(rawAmountB).div(rawAmountA).toString();
    const sqrtPrice = this.turbosSdk.math.priceToSqrtPriceX64(price, coinDecimalsA, coinDecimalsB).toString();
    const { tickLower, tickUpper } = this.getGlobalLiquidityTicks(tickSpacing);
    const createPoolTransaction = await this.turbosSdk.pool.createPool({
      address: publicKey,
      coinTypeA,
      coinTypeB,
      fee,
      amountA: rawAmountA,
      amountB: rawAmountB,
      slippage,
      sqrtPrice,
      tickLower,
      tickUpper
    });
    createPoolTransaction.setGasBudget(_TurbosSingleton.CREATE_POOL_GAS_BUDGET);
    return createPoolTransaction;
  }
  /**
   * Retrieves the fee object for the specified tick spacing.
   *
   * @param {number} tickSpacing - The tick spacing value.
   * @return {Promise<Contract.Fee>} A promise that resolves to the fee object.
   * @throws {Error} If the fee for the specified tick spacing is undefined.
   */
  async getFeeObject(tickSpacing) {
    const fees = await this.getFees();
    const fee = fees.find((feeObject) => feeObject.tickSpacing === tickSpacing);
    if (fee === void 0) {
      throw new Error(`[TurbosSingleton.getFeeObject] Fee for tick spacing ${tickSpacing} is undefined.`);
    }
    return fee;
  }
  /**
   * Retrieves the fees associated with the contract.
   *
   * @return {Promise<Contract.Fee[]>} A promise that resolves to an array of fee objects.
   */
  async getFees() {
    return await this.turbosSdk.contract.getFees();
  }
  /**
   * Retrieves the global liquidity tick range for the specified tick spacing.
   *
   * @param {number} tickSpacing - The tick spacing value.
   * @return {{ tickLower: number, tickUpper: number }} An object containing the lower and upper bounds
   * of the tick range.
   */
  getGlobalLiquidityTicks(tickSpacing) {
    const maxTickIndex = 443636;
    const tickLower = -maxTickIndex + maxTickIndex % tickSpacing;
    const tickUpper = maxTickIndex - maxTickIndex % tickSpacing;
    return { tickLower, tickUpper };
  }
  /**
   * Retrieves all the pools and finds specified one by its parameters.
   *
   * @param {Object} params - Parameters for finding the pool.
   * @param {string} params.coinTypeA - The type of the first coin in the pool.
   * @param {string} params.coinTypeB - The type of the second coin in the pool.
   * @param {string} params.tickSpacing - The tick spacing of the pool.
   * @return {Promise<PoolData | undefined>} A promise that resolves to the pool data matching
   * the specified parameters, or `undefined` if no matching pool is found.
   */
  async getPoolByParams({
    coinTypeA,
    coinTypeB,
    tickSpacing
  }) {
    const fetchedPools = await this.fetchPoolsFromApi();
    const foundPool = fetchedPools.find(
      (pool) => pool.tick_spacing === tickSpacing && (pool.coin_type_a === coinTypeA && pool.coin_type_b === coinTypeB || pool.coin_type_a === coinTypeB && pool.coin_type_b === coinTypeA)
    );
    return foundPool;
  }
  /**
   * Retrieves the create pool events from the provided user events.
   *
   * @param {SuiEvent[]} userEvents - An array of user events.
   * @return {Promise<SuiEvent[]>} A promise that resolves to an array of create pool events.
   */
  async getCreatePoolEventsFromUserEvents(userEvents) {
    const contract = await this.turbosSdk.contract.getConfig();
    const cetusCreatePoolEvent = `${contract.PackageIdOriginal}::pool_factory::PoolCreatedEvent`;
    return userEvents.filter((event) => event.type === cetusCreatePoolEvent);
  }
  /**
   * Retrieves the pools owned by a specific user.
   *
   * @description
   * This method returns information about pools owned by a user, including the amounts of two
   * different coins (`amountA` and `amountB`).
   * The decimal precision of these amounts may vary depending on the availability of coin information.
   * - If `getCoinByType2` returns valid decimal information for both coins, the amounts are adjusted accordingly.
   * - If `getCoinByType2` returns null for either coin, the amounts are provided without decimal adjustment.
   *
   * To handle the potential discrepancy in decimal precision from the client-side,
   * two additional parameters are introduced:
   * - `amountAIsRaw`: A boolean indicating whether the returned `amountA` respects decimals (false) or is raw (true).
   * - `amountBIsRaw`: A boolean indicating whether the returned `amountB` respects decimals (false) or is raw (true).
   *
   * It is recommended for the client to check these flags and adjust their processing logic accordingly.
   *
   * If either `amountAIsRaw` or `amountBIsRaw` is true, the corresponding
   * amount should be used as-is without further decimal adjustments.
   * If both flags are false, the amounts can be safely used after decimal adjustments.
   *
   * @public
   * @param {SuiClient} options.provider - The provider for accessing the SUI client.
   * @param {string} options.publicKey - The public key of the user whose pools are to be retrieved.
   * @param {CoinManagerSingleton} options.coinManager - The CoinManagerSingleton instance for managing
   * coin-related operations.
   * @return {Promise<CetusOwnedPool[]>} A promise that resolves to an array of owned pools.
   */
  async getOwnedPools({
    provider,
    publicKey,
    coinManager
  }) {
    const poolIds = await this.getUserPoolIds(publicKey, provider);
    if (poolIds.length === 0) {
      return [];
    }
    const userPools = await Promise.all(poolIds.map((poolId) => this.turbosSdk.pool.getPool(poolId)));
    return await Promise.all(
      userPools.map(async (poolData) => {
        const [coinTypeA, coinTypeB] = poolData.types;
        const { coin_a: rawCoinAmountA, coin_b: rawCoinAmountB, fee, tick_spacing: tickSpacing } = poolData;
        const { amountA, amountAIsRaw, amountB, amountBIsRaw, coinSymbolA, coinSymbolB, poolName, feePercentage } = await getCoinsDataForPool({ coinManager, coinTypeA, coinTypeB, rawCoinAmountA, rawCoinAmountB, fee });
        return {
          poolName,
          poolId: poolData.id.id,
          coinTypeA,
          coinTypeB,
          coinSymbolA,
          coinSymbolB,
          amountA,
          amountB,
          tickSpacing,
          feePercentage,
          amountAIsRaw,
          amountBIsRaw
        };
      })
    );
  }
  /**
   * Retrieves detailed information about pools based on their IDs.
   *
   * @param {string[]} poolIds - An array of pool IDs.
   * @return {Promise<DetailedTurbosOwnedPoolInfo[]>} A promise that resolves to an array of detailed pool information.
   */
  async getDetailedPoolsInfo({
    provider,
    publicKey,
    coinManager
  }) {
    const poolIds = await this.getUserPoolIds(publicKey, provider);
    if (poolIds.length === 0) {
      return [];
    }
    const allPools = await this.fetchPoolsFromApi();
    const userPools = allPools.filter((pool) => poolIds.includes(pool.pool_id));
    return await Promise.all(
      userPools.map(async (poolData) => {
        const {
          coin_type_a: coinTypeA,
          coin_type_b: coinTypeB,
          coin_symbol_a: coinSymbolA,
          coin_symbol_b: coinSymbolB,
          coin_a: rawCoinAmountA,
          coin_b: rawCoinAmountB,
          fee,
          tick_spacing: tickSpacing
        } = poolData;
        const { amountA, amountAIsRaw, amountB, amountBIsRaw, poolName, feePercentage } = await getCoinsDataForPool({
          coinManager,
          coinTypeA,
          coinTypeB,
          rawCoinAmountA,
          rawCoinAmountB,
          fee: +fee
        });
        return {
          poolName,
          poolId: poolData.pool_id,
          coinTypeA,
          coinTypeB,
          coinSymbolA,
          coinSymbolB,
          amountA,
          amountB,
          tickSpacing: +tickSpacing,
          feePercentage,
          amountAIsRaw,
          amountBIsRaw,
          apr: poolData.apr,
          aprPercent: poolData.apr_percent,
          feeApr: poolData.fee_apr,
          rewardApr: poolData.reward_apr,
          volumeFor24hUsd: poolData.volume_24h_usd,
          liquidityUsd: poolData.liquidity_usd,
          coinLiquidityUsdA: poolData.coin_a_liquidity_usd,
          coinLiquidityUsdB: poolData.coin_b_liquidity_usd,
          feeFor24hUsd: poolData.fee_24h_usd
        };
      })
    );
  }
  /**
   * Retrieves pool IDs associated with a specific user.
   *
   * @param {string} publicKey - The public key of the user.
   * @param {SuiClient} provider - The SuiClient provider.
   * @return {Promise<string[]>} A promise that resolves to an array of pool IDs.
   */
  async getUserPoolIds(publicKey, provider) {
    const allEvents = await getAllUserEvents(provider, publicKey);
    const createTurbosPoolEvents = await this.getCreatePoolEventsFromUserEvents(allEvents);
    const poolIds = createTurbosPoolEvents.filter((event) => isTurbosCreatePoolEventParsedJson(event.parsedJson)).map((event) => isTurbosCreatePoolEventParsedJson(event.parsedJson) ? event.parsedJson.pool : "");
    return poolIds;
  }
  /**
   * Removes the current instance of TurbosSingleton.
   *
   * Disclaimer: While this method in this class is marked as public, it is strongly discouraged
   * to use it directly unless you are certain about the behavior.
   */
  static removeInstance() {
    _TurbosSingleton._instance = void 0;
  }
};
_TurbosSingleton.TURBOS_API_URL = "https://api.turbos.finance";
_TurbosSingleton.CREATE_POOL_GAS_BUDGET = 1e8;
_TurbosSingleton.FEE_DIVIDER = 1e4;
var TurbosSingleton = _TurbosSingleton;

// src/providers/interest/interest.ts
var import_clamm_sdk = require("@interest-protocol/clamm-sdk");
var import_client6 = require("@mysten/sui.js-0.51.2/client");
var import_transactions15 = require("@mysten/sui.js-0.51.2/transactions");
var import_transactions16 = require("@mysten/sui.js/transactions");
var import_bignumber18 = __toESM(require("bignumber.js"));

// src/providers/utils/getUserCoinObjects.ts
async function getUserCoinObjects({
  coinType,
  publicKey,
  provider
}) {
  const pageCapacity = 50;
  const allObjects = [];
  let nextCursor = null;
  let assets = await provider.getCoins({
    owner: publicKey,
    coinType,
    limit: pageCapacity,
    cursor: nextCursor
  });
  while (assets.hasNextPage) {
    const coinObjects2 = assets.data;
    allObjects.push(...coinObjects2);
    nextCursor = assets.nextCursor;
    assets = await provider.getCoins({
      owner: publicKey,
      coinType,
      limit: pageCapacity,
      cursor: nextCursor
    });
  }
  const coinObjects = assets.data;
  allObjects.push(...coinObjects);
  return allObjects;
}

// src/providers/interest/type-guards.ts
function isApiResponseValid3(pools) {
  return pools !== void 0 && Array.isArray(pools) && pools.length > 0 && pools.every(isInterestPool);
}
function isInterestPool(pool) {
  if (typeof pool !== "object" || pool === null || !("poolObjectId" in pool && typeof pool.poolObjectId === "string") || !("lpCoinType" in pool && typeof pool.lpCoinType === "string") || !("isStable" in pool && typeof pool.isStable === "boolean") || !("coinTypes" in pool && Array.isArray(pool.coinTypes)) || !("state" in pool && typeof pool.state === "object")) {
    return false;
  }
  if (pool.isStable) {
    if (!isStablePoolState(pool.state)) {
      return false;
    }
  } else {
    if (!isVolatilePoolState(pool.state)) {
      return false;
    }
  }
  return true;
}
function isStablePoolState(state) {
  return typeof state === "object" && state !== null && "lpCoinSupply" in state && typeof state.lpCoinSupply === "bigint" && "lpCoinDecimals" in state && typeof state.lpCoinDecimals === "number" && "balances" in state && Array.isArray(state.balances) && state.balances.every((balance) => typeof balance === "bigint") && "initialA" in state && typeof state.initialA === "bigint" && "futureA" in state && typeof state.futureA === "bigint" && "initialATime" in state && typeof state.initialATime === "bigint" && "futureATime" in state && typeof state.futureATime === "bigint" && "nCoins" in state && typeof state.nCoins === "number" && "fees" in state && isStableFees(state.fees);
}
function isVolatilePoolState(state) {
  return typeof state === "object" && state !== null && "a" in state && typeof state.a === "bigint" && "futureA" in state && typeof state.futureA === "bigint" && "gamma" in state && typeof state.gamma === "bigint" && "initialTime" in state && typeof state.initialTime === "bigint" && "futureGamma" in state && typeof state.futureGamma === "bigint" && "futureTime" in state && typeof state.futureTime === "bigint" && "adminBalance" in state && typeof state.adminBalance === "bigint" && "balances" in state && Array.isArray(state.balances) && state.balances.every((balance) => typeof balance === "bigint") && "d" in state && typeof state.d === "bigint" && "fees" in state && isVolatileFees(state.fees) && "lastPriceTimestamp" in state && typeof state.lastPriceTimestamp === "bigint" && "lpCoinSupply" in state && typeof state.lpCoinSupply === "bigint" && "maxA" in state && typeof state.maxA === "bigint" && "minA" in state && typeof state.minA === "bigint" && "nCoins" in state && typeof state.nCoins === "number" && "rebalancingParams" in state && isRebalancingParams(state.rebalancingParams) && "virtualPrice" in state && typeof state.virtualPrice === "bigint" && "xcpProfit" in state && typeof state.xcpProfit === "bigint" && "xcpProfitA" in state && typeof state.xcpProfitA === "bigint" && "notAdjusted" in state && typeof state.notAdjusted === "boolean" && "coinStateMap" in state && isCoinStateMap(state.coinStateMap);
}
function isStableFees(fees) {
  return typeof fees === "object" && fees !== null && "feeInPercent" in fees && typeof fees.feeInPercent === "bigint" && "feeOutPercent" in fees && typeof fees.feeOutPercent === "bigint" && "adminFeePercent" in fees && typeof fees.adminFeePercent === "bigint";
}
function isVolatileFees(fees) {
  return typeof fees === "object" && fees !== null && "adminFee" in fees && typeof fees.adminFee === "bigint" && "gammaFee" in fees && typeof fees.gammaFee === "bigint" && "midFee" in fees && typeof fees.midFee === "bigint" && "outFee" in fees && typeof fees.outFee === "bigint";
}
function isRebalancingParams(params) {
  return typeof params === "object" && params !== null && "adjustmentStep" in params && typeof params.adjustmentStep === "bigint" && "extraProfit" in params && typeof params.extraProfit === "bigint" && "maHalfTime" in params && typeof params.maHalfTime === "bigint";
}
function isCoinStateMap(map) {
  return typeof map === "object" && map !== null && Object.values(map).every(isCoinState);
}
function isCoinState(state) {
  return typeof state === "object" && state !== null && "index" in state && typeof state.index === "number" && "lastPrice" in state && typeof state.lastPrice === "bigint" && "price" in state && typeof state.price === "bigint" && "priceOracle" in state && typeof state.priceOracle === "bigint" && "type" in state && typeof state.type === "string";
}

// src/providers/interest/utils.ts
var import_bignumber17 = __toESM(require("bignumber.js"));

// src/providers/interest/config.ts
var ROUTES_QUOTES_AMOUNT_OBJECT_INDEX = 2;

// src/providers/interest/utils.ts
var getPathMapAndCoinTypesSet2 = (pools) => {
  const pathMap = /* @__PURE__ */ new Map();
  const coinTypesSet = /* @__PURE__ */ new Set();
  pools.forEach((pool) => {
    const coinTypes = pool.coinTypes;
    const base = coinTypes[0];
    const quote = coinTypes[1];
    const commonPoolData = {
      base,
      quote
    };
    const poolKey = `${base}-${quote}`;
    pathMap.set(poolKey, commonPoolData);
    coinTypesSet.add(base);
    coinTypesSet.add(quote);
  });
  return { pathMap, coinTypesSet };
};
var getBestInterestRoute = (routes) => {
  const bestRoute = routes.reduce((bestRoute2, currentRoute) => {
    const bestAmount = bestRoute2[ROUTES_QUOTES_AMOUNT_OBJECT_INDEX].amount;
    const currentAmount = currentRoute[ROUTES_QUOTES_AMOUNT_OBJECT_INDEX].amount;
    return bestAmount > currentAmount ? bestRoute2 : currentRoute;
  });
  return bestRoute;
};
var getAmountWithSlippage = (amount, slippagePercentage) => {
  const slippageAmount = new import_bignumber17.default(amount).multipliedBy(slippagePercentage).div(100);
  return new import_bignumber17.default(amount).minus(slippageAmount).toFixed(0);
};

// src/providers/interest/interest.ts
var _InterestProtocolSingleton = class _InterestProtocolSingleton extends EventEmitter {
  /**
   * @constructor
   * @param {Omit<InterestOptions, "lazyLoading">} options - Options for InterestProtocolSingleton.
   */
  constructor(options) {
    super();
    this.providerName = "Interest";
    this.isSmartRoutingAvailable = true;
    this.pathsCache = /* @__PURE__ */ new Map();
    this.coinsCache = /* @__PURE__ */ new Map();
    this.poolsCache = [];
    this.buildDcaTxBlockAdapter = () => {
      throw new Error("Not implemented");
    };
    this.provider = new import_client6.SuiClient({ url: options.suiProviderUrl });
    this.interestSdk = new import_clamm_sdk.CLAMM({
      suiClient: this.provider,
      packageAddress: _InterestProtocolSingleton.INTEREST_PROTOCOL_PACKAGE_ADDRESS,
      network: "mainnet",
      suiTearsAddress: _InterestProtocolSingleton.INTEREST_PROTOCOL_SUI_TEARS
    });
    const { updateIntervally = true, ...restCacheOptions } = options.cacheOptions;
    this.cacheOptions = { updateIntervally, ...restCacheOptions };
    this.storage = options.cacheOptions.storage ?? InMemoryStorageSingleton.getInstance();
  }
  /**
   * @static
   * @method getInstance
   * @async
   * @param {InterestOptions} [options] - Options for InterestProtocolSingleton instance.
   * @return {Promise<InterestProtocolSingleton>}
   * @throws Error if options are not provided.
   */
  static async getInstance(options) {
    if (!_InterestProtocolSingleton._instance) {
      if (options === void 0) {
        throw new Error("[InterestProtocolSingleton] Options are required in arguments to create instance.");
      }
      const { suiProviderUrl, cacheOptions, lazyLoading = true } = options;
      const instance = new _InterestProtocolSingleton({ suiProviderUrl, cacheOptions });
      lazyLoading ? instance.init() : await instance.init();
      _InterestProtocolSingleton._instance = instance;
    }
    return _InterestProtocolSingleton._instance;
  }
  /**
   * @private
   * @method init
   * @description Initializes the InterestProtocolSingleton instance.
   * @return {Promise<void>}
   */
  async init() {
    console.debug(`[${this.providerName}] Singleton initiating.`);
    await this.fillCacheFromStorage();
    await this.updateCaches();
    this.cacheOptions.updateIntervally && this.updateCachesIntervally();
    this.bufferEvent("cachesUpdate", this.getCoins());
  }
  /**
   * Fills the cache from storage asynchronously.
   *
   * @private
   * @return {Promise<void>} A promise that resolves when the cache is filled from storage.
   */
  async fillCacheFromStorage() {
    try {
      const { coinsCache, pathsCache } = await getCoinsAndPathsCaches({
        storage: this.storage,
        provider: this.providerName,
        updateCacheInterval: this.cacheOptions.updateIntervalInMs
      });
      this.coinsCache = coinsCache;
      this.pathsCache = pathsCache;
    } catch (error) {
      console.error(`[${this.providerName}] fillCacheFromStorage failed:`, error);
    }
  }
  /**
   * Checks if the storage cache is empty.
   *
   * @private
   * @return {boolean} True if the storage cache is empty, false otherwise.
   */
  isStorageCacheEmpty() {
    const isCacheEmpty = this.coinsCache.size === 0 || this.pathsCache.size === 0;
    return isCacheEmpty;
  }
  /**
   * @private
   * @method updateCaches
   * @description Updates caches.
   * @return {Promise<void>}
   */
  async updateCaches({ force } = { force: false }) {
    const isCacheEmpty = this.isStorageCacheEmpty();
    if (isCacheEmpty || force) {
      try {
        await this.updatePoolsCache();
        await this.updatePathsAndCoinsCache();
        this.emit("cachesUpdate", this.getCoins());
        await storeCaches({
          provider: this.providerName,
          storage: this.storage,
          coinsCache: this.getCoins(),
          pathsCache: this.getPaths()
        });
        console.debug("[Interest] Caches are updated and stored.");
      } catch (error) {
        console.error("[Interest] Caches update failed:", error);
      }
    }
  }
  /**
   * @private
   * @method updateCachesIntervally
   * @description Updates caches periodically.
   * @return {void}
   */
  updateCachesIntervally() {
    let isUpdatingCurrently = false;
    this.intervalId = setInterval(async () => {
      try {
        if (isUpdatingCurrently) {
          return;
        }
        isUpdatingCurrently = true;
        await this.updateCaches({ force: true });
      } finally {
        isUpdatingCurrently = false;
      }
    }, this.cacheOptions.updateIntervalInMs);
    exitHandlerWrapper({ intervalId: this.intervalId, providerName: this.providerName });
  }
  /**
   * @private
   * @method updatePoolsCache
   * @description Updates pools cache.
   * @return {Promise<void>}
   */
  async updatePoolsCache() {
    try {
      const { pools } = await this.interestSdk.getPools();
      const isValidPoolsResponse = isApiResponseValid3(pools);
      if (!isValidPoolsResponse) {
        console.error("[Interest] Pools response:", pools);
        throw new Error("Pools response from API is not valid");
      }
      this.poolsCache = pools;
    } catch (error) {
      console.error("[Interest.updatePoolsCache]:", error);
    }
  }
  /**
   * @private
   * @method updatePathsAndCoinsCache
   * @description Updates paths and coins cache.
   * @return {Promise<void>}
   */
  async updatePathsAndCoinsCache() {
    const { pathMap, coinTypesSet } = getPathMapAndCoinTypesSet2(this.poolsCache);
    this.pathsCache = pathMap;
    await Promise.all(
      Array.from(coinTypesSet.values()).map(async (coinType) => {
        try {
          const metadata = await this.provider.getCoinMetadata({ coinType });
          if (metadata !== null) {
            this.coinsCache.set(coinType, { symbol: metadata.symbol, type: coinType, decimals: metadata.decimals });
          }
        } catch (error) {
          console.error(`[Interest] Error while fetching metadata about coin ${coinType}:`, error);
        }
      })
    );
  }
  /**
   * @public
   * @method getPool
   * @description Gets the pool with the specified coin types.
   * @param {string} coinTypeA - Coin type A.
   * @param {string} coinTypeB - Coin type B.
   * @return {Pool} The pool object.
   */
  getPool(coinTypeA, coinTypeB) {
    const pool = this.poolsCache.find(
      (pool2) => pool2.coinTypes.includes(coinTypeA) && pool2.coinTypes.includes(coinTypeB)
    );
    if (!pool) {
      throw new Error(`[Interest] Cannot find pool with coinTypeA "${coinTypeA}" and coinTypeB "${coinTypeB}".`);
    }
    return pool;
  }
  /**
   * @public
   * @method getPools
   * @description Gets all pools.
   * @return {InterestPool[]} Array of pools.
   */
  getPools() {
    return this.poolsCache;
  }
  /**
   * @public
   * @method getCoins
   * @description Gets the updated coins cache.
   * @return {UpdatedCoinsCache} Updated coins cache.
   */
  getCoins() {
    const allCoins = Array.from(this.coinsCache.values());
    return { provider: this.providerName, data: allCoins };
  }
  /**
   * @public
   * @method getPaths
   * @description Gets the paths cache.
   * @return {Map<string, CommonPoolData>} Paths cache.
   */
  getPaths() {
    return this.pathsCache;
  }
  /**
   * @public
   * @method getRouteData
   * @description Gets route data.
   * @param {Object} params - Parameters for route data.
   * @param {string} params.coinTypeFrom - Coin type from.
   * @param {string} params.coinTypeTo - Coin type to.
   * @param {string} params.inputAmount - Input amount.
   * @return {Promise<{ outputAmount: bigint, route: InterestRouteData }>} Route data.
   */
  async getRouteData({
    coinTypeFrom,
    coinTypeTo,
    inputAmount,
    slippagePercentage
  }) {
    if (isSuiCoinType(coinTypeFrom)) {
      coinTypeFrom = LONG_SUI_COIN_TYPE;
    } else if (isSuiCoinType(coinTypeTo)) {
      coinTypeTo = LONG_SUI_COIN_TYPE;
    }
    const inputCoinData = await this.provider.getCoinMetadata({ coinType: coinTypeFrom });
    if (inputCoinData === null) {
      throw new Error(`[Interest] Cannot get coin metadata for "${coinTypeFrom}".`);
    }
    const inputCoinDecimals = inputCoinData.decimals;
    const formattedInputAmount = new import_bignumber18.default(inputAmount).multipliedBy(10 ** inputCoinDecimals).toString();
    const { routes, poolsMap } = await this.interestSdk.getRoutesQuotes({
      coinIn: coinTypeFrom,
      coinOut: coinTypeTo,
      amount: BigInt(formattedInputAmount)
    });
    const [coinPath, poolObjectIdPath, amountObject] = getBestInterestRoute(routes);
    const bestRoute = [coinPath, poolObjectIdPath];
    const amountWithSlippage = getAmountWithSlippage(amountObject.amount.toString(), slippagePercentage);
    return {
      outputAmount: BigInt(amountWithSlippage),
      route: {
        bestRoute,
        poolsMap,
        inputCoinType: coinTypeFrom,
        minAmount: BigInt(amountWithSlippage),
        formattedInputAmount
      }
    };
  }
  /**
   * @public
   * @method getSwapTransaction
   * @description Retrieves the swap transaction for the given route and public key.
   * @param {InterestRouteData} route - The complete trade route.
   * @param {string} publicKey - The public key.
   * @return {Promise<TransactionBlock>} A Promise that resolves to the swap transaction.
   */
  async getSwapTransaction({
    route,
    publicKey
  }) {
    const tx = new import_transactions15.TransactionBlock();
    const { bestRoute, poolsMap, inputCoinType, minAmount, formattedInputAmount } = route;
    const inputCoinObjects = await getUserCoinObjects({ coinType: inputCoinType, provider: this.provider, publicKey });
    let destinationObjectId;
    if (isSuiCoinType(inputCoinType)) {
      const [coin] = tx.splitCoins(tx.gas, [tx.pure(formattedInputAmount)]);
      destinationObjectId = coin;
    } else {
      const { destinationObjectId: mergeDestination } = WalletManagerSingleton.mergeAllCoinObjects({
        coinObjects: inputCoinObjects,
        txb: tx
      });
      const [coin] = tx.splitCoins(tx.object(mergeDestination), [tx.pure(formattedInputAmount)]);
      destinationObjectId = coin;
    }
    const { coinOut, txb } = this.interestSdk.swapRoute({
      txb: tx,
      coinIn: destinationObjectId,
      route: bestRoute,
      poolsMap,
      minAmount
    });
    txb.transferObjects([coinOut], txb.pure(publicKey));
    const txBlock = new import_transactions16.TransactionBlock(import_transactions16.TransactionBlock.from(txb.serialize()));
    return txBlock;
  }
  /**
   * Gets a transaction block for swapping tokens based on provided swap data.
   *
   * Note: This method is not implemented yet.
   *
   * @public
   * @async
   * @param {SwapRequiredData} route - The required data for the swap.
   * @param {string} publicKey - The public key of the user.
   * @param {number} [slippagePercentage=10] - The slippage percentage.
   * @return {Promise<TransactionBlock>} A Promise that resolves to a TransactionBlock.
   */
  async getSwapTransactionDoctored({
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    route,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    publicKey,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    slippagePercentage = 10
  }) {
    throw new Error(`[${this.providerName}] getSwapTransactionDoctored method not implemented`);
  }
  /**
   * Removes the current instance of AftermathSingleton.
   *
   * Disclaimer: While this method in this class is marked as public, it is strongly discouraged
   * to use it directly unless you are certain about the behavior.
   */
  static removeInstance() {
    _InterestProtocolSingleton._instance = void 0;
  }
};
_InterestProtocolSingleton.INTEREST_PROTOCOL_PACKAGE_ADDRESS = "0x429dbf2fc849c0b4146db09af38c104ae7a3ed746baf835fa57fee27fa5ff382";
_InterestProtocolSingleton.INTEREST_PROTOCOL_SUI_TEARS = "0xf7334947a5037552a94cee15fc471dbda71bf24d46c97ee24e1fdac38e26644c";
var InterestProtocolSingleton = _InterestProtocolSingleton;

// src/storages/RedisStorage.ts
var _RedisStorageSingleton = class _RedisStorageSingleton {
  /**
   * Constructs a RedisStorageSingleton instance.
   * @param {RedisStorageClient} client - The Redis client instance.
   */
  constructor(client) {
    this.client = client;
  }
  /**
   * Gets the instance of the RedisStorageSingleton.
   * @param {RedisStorageClient} [client] - The optional Redis client instance.
   * @return {RedisStorageSingleton} - The singleton instance.
   * @throws {Error} If the client is not provided for the first instance creation.
   */
  static getInstance(client) {
    if (!_RedisStorageSingleton._instance) {
      if (client === void 0) {
        throw new Error("[RedisStorage] Client is required in arguments to create instance.");
      }
      const instance = new _RedisStorageSingleton(client);
      _RedisStorageSingleton._instance = instance;
    }
    return _RedisStorageSingleton._instance;
  }
  /**
   * Sets cache data in Redis.
   * @param {SetCacheParams} params - Parameters containing provider, property, and value.
   * @return {Promise<void>} - A promise that resolves once the cache is set.
   * @throws {Error} - Throws an error if setting the cache fails.
   */
  async setCache(params) {
    const { provider, property, value } = params;
    const key = `${provider}.${property}.${_RedisStorageSingleton.version}`;
    const stringifiedValue = JSON.stringify(value);
    const setResult = await this.client.set(key, stringifiedValue);
    if (setResult !== "OK") {
      console.debug("[RedisStorageSingleton] setCache failed for setting data in redis, params: ", params);
      throw new Error("[RedisStorageSingleton] setCache failed");
    }
  }
  /**
   * Retrieves cache data from Redis.
   * @param {GetCacheParams} params - Parameters containing provider and property.
   * @return {Promise<StorageValue>} - A promise that resolves to the retrieved StorageValue or null if not found.
   * @throws {Error} - Throws an error if the retrieved value is not a valid StorageValue.
   */
  async getCache(params) {
    const { provider, property } = params;
    const key = `${provider}.${property}.${_RedisStorageSingleton.version}`;
    const value = await this.client.get(key);
    if (value === null) {
      return null;
    }
    const parsedValue = JSON.parse(value);
    if (isStorageValue(parsedValue)) {
      return parsedValue;
    } else {
      throw new Error(`[RedisStorage] getCache: value ${value} is not StorageValue.`);
    }
  }
  /**
   * Removes the current instance of RedisStorageSingleton.
   *
   * Disclaimer: While this method in this class is marked as public, it is strongly discouraged
   * to use it directly unless you are certain about the behavior.
   */
  static removeInstance() {
    _RedisStorageSingleton._instance = void 0;
  }
};
_RedisStorageSingleton.version = 3;
var RedisStorageSingleton = _RedisStorageSingleton;

// src/index.ts
var import_utils25 = require("@mysten/sui.js/utils");
var import_transactions18 = require("@mysten/sui.js/transactions");
var import_ed255193 = require("@mysten/sui.js/keypairs/ed25519");

// src/launchpad/surfdog/surfdog.ts
var import_client7 = require("@mysten/sui.js/client");
var import_transactions17 = require("@mysten/sui.js/transactions");
var import_utils24 = require("@mysten/sui.js/utils");
var import_bignumber19 = __toESM(require("bignumber.js"));

// src/launchpad/surfdog/__generated__/meme/index.ts
var PUBLISHED_AT = "0xe2d76c57bb1cf8b511f6f4bbbab7d575ab221d2c84b3ccb5eee2ef999c7dc61f";

// src/launchpad/surfdog/__generated__/_framework/util.ts
var import_bcs3 = require("@mysten/sui.js/bcs");
function parseTypeName(name) {
  const parsed = import_bcs3.bcs.parseTypeName(name);
  return { typeName: parsed.name, typeArgs: parsed.params };
}
function isTransactionArgument2(arg) {
  if (!arg || typeof arg !== "object" || Array.isArray(arg)) {
    return false;
  }
  return "kind" in arg;
}
function obj2(txb, arg) {
  return isTransactionArgument2(arg) ? arg : txb.object(arg);
}
function compressSuiAddress(addr) {
  const stripped = addr.split("0x").join("");
  for (let i = 0; i < stripped.length; i++) {
    if (stripped[i] !== "0") {
      return `0x${stripped.substring(i)}`;
    }
  }
  return "0x0";
}
function compressSuiType(type) {
  const { typeName, typeArgs } = parseTypeName(type);
  switch (typeName) {
    case "bool":
    case "u8":
    case "u16":
    case "u32":
    case "u64":
    case "u128":
    case "u256":
    case "address":
    case "signer":
      return typeName;
    case "vector":
      return `vector<${compressSuiType(typeArgs[0])}>`;
    default: {
      const tok = typeName.split("::");
      tok[0] = compressSuiAddress(tok[0]);
      const compressedName = tok.join("::");
      if (typeArgs.length > 0) {
        return `${compressedName}<${typeArgs.map((typeArg) => compressSuiType(typeArg)).join(",")}>`;
      } else {
        return compressedName;
      }
    }
  }
}
function composeSuiType(typeName, ...typeArgs) {
  if (typeArgs.length > 0) {
    return `${typeName}<${typeArgs.join(", ")}>`;
  } else {
    return typeName;
  }
}

// src/launchpad/surfdog/__generated__/meme/meme/functions.ts
function buy(txb, typeArg, args) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::meme::buy`,
    typeArguments: [typeArg],
    arguments: [obj2(txb, args.state), obj2(txb, args.userState), obj2(txb, args.payment), obj2(txb, args.clock)]
  });
}
function createUserState(txb) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::meme::create_user_state`,
    arguments: []
  });
}

// src/launchpad/surfdog/__generated__/_framework/reified.ts
var import_bcs4 = require("@mysten/bcs");
var Vector = class {
  constructor(fullTypeName, vec) {
    this.kind = "VectorClass";
    this.$fullTypeName = fullTypeName;
    this.vec = vec;
  }
  toJSONField() {
    return null;
  }
};
function phantom(type) {
  if (typeof type === "string") {
    return {
      phantomType: type,
      kind: "PhantomReified"
    };
  } else {
    return {
      phantomType: type.fullTypeName,
      kind: "PhantomReified"
    };
  }
}
function vector(T) {
  const fullTypeName = `vector<${extractType(T)}>`;
  return {
    fullTypeName,
    bcs: import_bcs4.bcs.vector(toBcs(T)),
    fromFieldsWithTypes: (item) => {
      return new Vector(
        fullTypeName,
        item.map((field) => decodeFromFieldsWithTypes(T, field))
      );
    },
    fromFields: (fields) => {
      return new Vector(
        fullTypeName,
        fields.map((field) => decodeFromFields(T, field))
      );
    },
    fromJSONField: (field) => new Vector(
      fullTypeName,
      field.map((field2) => decodeFromJSONField(T, field2))
    ),
    kind: "VectorClassReified"
  };
}
var Address2 = import_bcs4.bcs.bytes(32).transform({
  input: (val) => (0, import_bcs4.fromHEX)(val),
  output: (val) => (0, import_bcs4.toHEX)(val)
});
function toBcs(arg) {
  switch (arg) {
    case "bool":
      return import_bcs4.bcs.bool();
    case "u8":
      return import_bcs4.bcs.u8();
    case "u16":
      return import_bcs4.bcs.u16();
    case "u32":
      return import_bcs4.bcs.u32();
    case "u64":
      return import_bcs4.bcs.u64();
    case "u128":
      return import_bcs4.bcs.u128();
    case "u256":
      return import_bcs4.bcs.u256();
    case "address":
      return Address2;
    default:
      return arg.bcs;
  }
}
function extractType(reified) {
  switch (reified) {
    case "u8":
    case "u16":
    case "u32":
    case "u64":
    case "u128":
    case "u256":
    case "bool":
    case "address":
      return reified;
  }
  switch (reified.kind) {
    case "PhantomReified":
      return reified.phantomType;
    case "StructClassReified":
      return reified.fullTypeName;
    case "VectorClassReified":
      return reified.fullTypeName;
  }
  throw new Error("unreachable");
}
function decodeFromFields(reified, field) {
  switch (reified) {
    case "bool":
    case "u8":
    case "u16":
    case "u32":
      return field;
    case "u64":
    case "u128":
    case "u256":
      return BigInt(field);
    case "address":
      return `0x${field}`;
  }
  if (reified.kind === "VectorClassReified") {
    return reified.fromFields(field).vec;
  }
  switch (reified.typeName) {
    case "0x1::string::String":
    case "0x1::ascii::String":
      return new TextDecoder().decode(Uint8Array.from(field.bytes)).toString();
    case "0x2::url::Url":
      return new TextDecoder().decode(Uint8Array.from(field.url.bytes)).toString();
    case "0x2::object::ID":
      return `0x${field.bytes}`;
    case "0x2::object::UID":
      return `0x${field.id.bytes}`;
    case "0x1::option::Option": {
      if (field.vec.length === 0) {
        return null;
      }
      return reified.fromFields(field).vec[0];
    }
    default:
      return reified.fromFields(field);
  }
}
function decodeFromFieldsWithTypes(reified, item) {
  switch (reified) {
    case "bool":
    case "u8":
    case "u16":
    case "u32":
      return item;
    case "u64":
    case "u128":
    case "u256":
      return BigInt(item);
    case "address":
      return item;
  }
  if (reified.kind === "VectorClassReified") {
    return reified.fromFieldsWithTypes(item).vec;
  }
  switch (reified.typeName) {
    case "0x1::string::String":
    case "0x1::ascii::String":
    case "0x2::url::Url":
    case "0x2::object::ID":
      return item;
    case "0x2::object::UID":
      return item.id;
    case "0x2::balance::Balance":
      return reified.fromFields({ value: BigInt(item) });
    case "0x1::option::Option": {
      if (item === null) {
        return null;
      }
      return decodeFromFieldsWithTypes(reified.reifiedTypeArgs[0], item);
    }
    default:
      return reified.fromFieldsWithTypes(item);
  }
}
function assertReifiedTypeArgsMatch(fullType, typeArgs, reifiedTypeArgs) {
  if (reifiedTypeArgs.length !== typeArgs.length) {
    throw new Error(
      `provided item has mismatching number of type argments ${fullType} (expected ${reifiedTypeArgs.length}, got ${typeArgs.length}))`
    );
  }
  for (let i = 0; i < typeArgs.length; i++) {
    if (compressSuiType(typeArgs[i]) !== compressSuiType(extractType(reifiedTypeArgs[i]))) {
      throw new Error(
        `provided item has mismatching type argments ${fullType} (expected ${extractType(
          reifiedTypeArgs[i]
        )}, got ${typeArgs[i]}))`
      );
    }
  }
}
function assertFieldsWithTypesArgsMatch(item, reifiedTypeArgs) {
  const { typeArgs: itemTypeArgs } = parseTypeName(item.type);
  assertReifiedTypeArgsMatch(item.type, itemTypeArgs, reifiedTypeArgs);
}
function fieldToJSON(type, field) {
  const { typeName, typeArgs } = parseTypeName(type);
  switch (typeName) {
    case "bool":
      return field;
    case "u8":
    case "u16":
    case "u32":
      return field;
    case "u64":
    case "u128":
    case "u256":
      return field.toString();
    case "address":
    case "signer":
      return field;
    case "vector":
      return field.map((item) => fieldToJSON(typeArgs[0], item));
    case "0x1::string::String":
    case "0x1::ascii::String":
    case "0x2::url::Url":
    case "0x2::object::ID":
    case "0x2::object::UID":
      return field;
    case "0x1::option::Option": {
      if (field === null) {
        return null;
      }
      return fieldToJSON(typeArgs[0], field);
    }
    default:
      return field.toJSONField();
  }
}
function decodeFromJSONField(typeArg, field) {
  switch (typeArg) {
    case "bool":
    case "u8":
    case "u16":
    case "u32":
      return field;
    case "u64":
    case "u128":
    case "u256":
      return BigInt(field);
    case "address":
      return field;
  }
  if (typeArg.kind === "VectorClassReified") {
    return typeArg.fromJSONField(field).vec;
  }
  switch (typeArg.typeName) {
    case "0x1::string::String":
    case "0x1::ascii::String":
    case "0x2::url::Url":
    case "0x2::object::ID":
    case "0x2::object::UID":
      return field;
    case "0x1::option::Option": {
      if (field === null) {
        return null;
      }
      return decodeFromJSONField(typeArg.reifiedTypeArgs[0], field);
    }
    default:
      return typeArg.fromJSONField(field);
  }
}

// src/launchpad/surfdog/__generated__/_dependencies/source/0x2/balance/structs.ts
var import_bcs5 = require("@mysten/bcs");
function isBalance(type) {
  type = compressSuiType(type);
  return type.startsWith("0x2::balance::Balance<");
}
var _Balance = class _Balance {
  constructor(typeArgs, fields) {
    this.$typeName = _Balance.$typeName;
    this.$fullTypeName = composeSuiType(
      _Balance.$typeName,
      ...typeArgs
    );
    this.$typeArgs = typeArgs;
    this.value = fields.value;
  }
  static reified(T) {
    return {
      typeName: _Balance.$typeName,
      fullTypeName: composeSuiType(
        _Balance.$typeName,
        ...[extractType(T)]
      ),
      typeArgs: [extractType(T)],
      reifiedTypeArgs: [T],
      fromFields: (fields) => _Balance.fromFields(T, fields),
      fromFieldsWithTypes: (item) => _Balance.fromFieldsWithTypes(T, item),
      fromBcs: (data) => _Balance.fromBcs(T, data),
      bcs: _Balance.bcs,
      fromJSONField: (field) => _Balance.fromJSONField(T, field),
      fromJSON: (json) => _Balance.fromJSON(T, json),
      fromSuiParsedData: (content) => _Balance.fromSuiParsedData(T, content),
      fetch: async (client, id) => _Balance.fetch(client, T, id),
      new: (fields) => {
        return new _Balance([extractType(T)], fields);
      },
      kind: "StructClassReified"
    };
  }
  static get r() {
    return _Balance.reified;
  }
  static phantom(T) {
    return phantom(_Balance.reified(T));
  }
  static get p() {
    return _Balance.phantom;
  }
  static get bcs() {
    return import_bcs5.bcs.struct("Balance", {
      value: import_bcs5.bcs.u64()
    });
  }
  static fromFields(typeArg, fields) {
    return _Balance.reified(typeArg).new({ value: decodeFromFields("u64", fields.value) });
  }
  static fromFieldsWithTypes(typeArg, item) {
    if (!isBalance(item.type)) {
      throw new Error("not a Balance type");
    }
    assertFieldsWithTypesArgsMatch(item, [typeArg]);
    return _Balance.reified(typeArg).new({ value: decodeFromFieldsWithTypes("u64", item.fields.value) });
  }
  static fromBcs(typeArg, data) {
    return _Balance.fromFields(typeArg, _Balance.bcs.parse(data));
  }
  toJSONField() {
    return {
      value: this.value.toString()
    };
  }
  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField()
    };
  }
  static fromJSONField(typeArg, field) {
    return _Balance.reified(typeArg).new({ value: decodeFromJSONField("u64", field.value) });
  }
  static fromJSON(typeArg, json) {
    if (json.$typeName !== _Balance.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }
    assertReifiedTypeArgsMatch(composeSuiType(_Balance.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg]);
    return _Balance.fromJSONField(typeArg, json);
  }
  static fromSuiParsedData(typeArg, content) {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isBalance(content.type)) {
      throw new Error(`object at ${content.fields.id} is not a Balance object`);
    }
    return _Balance.fromFieldsWithTypes(typeArg, content);
  }
  static async fetch(client, typeArg, id) {
    const res = await client.getObject({
      id,
      options: {
        showBcs: true
      }
    });
    if (res.error) {
      throw new Error(`error fetching Balance object at id ${id}: ${res.error.code}`);
    }
    if (res.data?.bcs?.dataType !== "moveObject" || !isBalance(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a Balance object`);
    }
    return _Balance.fromBcs(typeArg, (0, import_bcs5.fromB64)(res.data.bcs.bcsBytes));
  }
};
_Balance.$typeName = "0x2::balance::Balance";
_Balance.$numTypeParams = 1;
var Balance = _Balance;
function isSupply(type) {
  type = compressSuiType(type);
  return type.startsWith("0x2::balance::Supply<");
}
var _Supply = class _Supply {
  constructor(typeArgs, fields) {
    this.$typeName = _Supply.$typeName;
    this.$fullTypeName = composeSuiType(
      _Supply.$typeName,
      ...typeArgs
    );
    this.$typeArgs = typeArgs;
    this.value = fields.value;
  }
  static reified(T) {
    return {
      typeName: _Supply.$typeName,
      fullTypeName: composeSuiType(
        _Supply.$typeName,
        ...[extractType(T)]
      ),
      typeArgs: [extractType(T)],
      reifiedTypeArgs: [T],
      fromFields: (fields) => _Supply.fromFields(T, fields),
      fromFieldsWithTypes: (item) => _Supply.fromFieldsWithTypes(T, item),
      fromBcs: (data) => _Supply.fromBcs(T, data),
      bcs: _Supply.bcs,
      fromJSONField: (field) => _Supply.fromJSONField(T, field),
      fromJSON: (json) => _Supply.fromJSON(T, json),
      fromSuiParsedData: (content) => _Supply.fromSuiParsedData(T, content),
      fetch: async (client, id) => _Supply.fetch(client, T, id),
      new: (fields) => {
        return new _Supply([extractType(T)], fields);
      },
      kind: "StructClassReified"
    };
  }
  static get r() {
    return _Supply.reified;
  }
  static phantom(T) {
    return phantom(_Supply.reified(T));
  }
  static get p() {
    return _Supply.phantom;
  }
  static get bcs() {
    return import_bcs5.bcs.struct("Supply", {
      value: import_bcs5.bcs.u64()
    });
  }
  static fromFields(typeArg, fields) {
    return _Supply.reified(typeArg).new({ value: decodeFromFields("u64", fields.value) });
  }
  static fromFieldsWithTypes(typeArg, item) {
    if (!isSupply(item.type)) {
      throw new Error("not a Supply type");
    }
    assertFieldsWithTypesArgsMatch(item, [typeArg]);
    return _Supply.reified(typeArg).new({ value: decodeFromFieldsWithTypes("u64", item.fields.value) });
  }
  static fromBcs(typeArg, data) {
    return _Supply.fromFields(typeArg, _Supply.bcs.parse(data));
  }
  toJSONField() {
    return {
      value: this.value.toString()
    };
  }
  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField()
    };
  }
  static fromJSONField(typeArg, field) {
    return _Supply.reified(typeArg).new({ value: decodeFromJSONField("u64", field.value) });
  }
  static fromJSON(typeArg, json) {
    if (json.$typeName !== _Supply.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }
    assertReifiedTypeArgsMatch(composeSuiType(_Supply.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg]);
    return _Supply.fromJSONField(typeArg, json);
  }
  static fromSuiParsedData(typeArg, content) {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isSupply(content.type)) {
      throw new Error(`object at ${content.fields.id} is not a Supply object`);
    }
    return _Supply.fromFieldsWithTypes(typeArg, content);
  }
  static async fetch(client, typeArg, id) {
    const res = await client.getObject({
      id,
      options: {
        showBcs: true
      }
    });
    if (res.error) {
      throw new Error(`error fetching Supply object at id ${id}: ${res.error.code}`);
    }
    if (res.data?.bcs?.dataType !== "moveObject" || !isSupply(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a Supply object`);
    }
    return _Supply.fromBcs(typeArg, (0, import_bcs5.fromB64)(res.data.bcs.bcsBytes));
  }
};
_Supply.$typeName = "0x2::balance::Supply";
_Supply.$numTypeParams = 1;
var Supply = _Supply;

// src/launchpad/surfdog/__generated__/_dependencies/source/0x2/object/structs.ts
var import_bcs6 = require("@mysten/bcs");
function isDynamicFields(type) {
  type = compressSuiType(type);
  return type.startsWith("0x2::object::DynamicFields<");
}
var _DynamicFields = class _DynamicFields {
  constructor(typeArgs, fields) {
    this.$typeName = _DynamicFields.$typeName;
    this.$fullTypeName = composeSuiType(
      _DynamicFields.$typeName,
      ...typeArgs
    );
    this.$typeArgs = typeArgs;
    this.names = fields.names;
  }
  static reified(K) {
    return {
      typeName: _DynamicFields.$typeName,
      fullTypeName: composeSuiType(
        _DynamicFields.$typeName,
        ...[extractType(K)]
      ),
      typeArgs: [extractType(K)],
      reifiedTypeArgs: [K],
      fromFields: (fields) => _DynamicFields.fromFields(K, fields),
      fromFieldsWithTypes: (item) => _DynamicFields.fromFieldsWithTypes(K, item),
      fromBcs: (data) => _DynamicFields.fromBcs(K, data),
      bcs: _DynamicFields.bcs(toBcs(K)),
      fromJSONField: (field) => _DynamicFields.fromJSONField(K, field),
      fromJSON: (json) => _DynamicFields.fromJSON(K, json),
      fromSuiParsedData: (content) => _DynamicFields.fromSuiParsedData(K, content),
      fetch: async (client, id) => _DynamicFields.fetch(client, K, id),
      new: (fields) => {
        return new _DynamicFields([extractType(K)], fields);
      },
      kind: "StructClassReified"
    };
  }
  static get r() {
    return _DynamicFields.reified;
  }
  static phantom(K) {
    return phantom(_DynamicFields.reified(K));
  }
  static get p() {
    return _DynamicFields.phantom;
  }
  static get bcs() {
    return (K) => import_bcs6.bcs.struct(`DynamicFields<${K.name}>`, {
      names: import_bcs6.bcs.vector(K)
    });
  }
  static fromFields(typeArg, fields) {
    return _DynamicFields.reified(typeArg).new({ names: decodeFromFields(vector(typeArg), fields.names) });
  }
  static fromFieldsWithTypes(typeArg, item) {
    if (!isDynamicFields(item.type)) {
      throw new Error("not a DynamicFields type");
    }
    assertFieldsWithTypesArgsMatch(item, [typeArg]);
    return _DynamicFields.reified(typeArg).new({
      names: decodeFromFieldsWithTypes(vector(typeArg), item.fields.names)
    });
  }
  static fromBcs(typeArg, data) {
    const typeArgs = [typeArg];
    return _DynamicFields.fromFields(typeArg, _DynamicFields.bcs(toBcs(typeArgs[0])).parse(data));
  }
  toJSONField() {
    return {
      names: fieldToJSON(`vector<${this.$typeArgs[0]}>`, this.names)
    };
  }
  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField()
    };
  }
  static fromJSONField(typeArg, field) {
    return _DynamicFields.reified(typeArg).new({ names: decodeFromJSONField(vector(typeArg), field.names) });
  }
  static fromJSON(typeArg, json) {
    if (json.$typeName !== _DynamicFields.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }
    assertReifiedTypeArgsMatch(composeSuiType(_DynamicFields.$typeName, extractType(typeArg)), json.$typeArgs, [
      typeArg
    ]);
    return _DynamicFields.fromJSONField(typeArg, json);
  }
  static fromSuiParsedData(typeArg, content) {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isDynamicFields(content.type)) {
      throw new Error(`object at ${content.fields.id} is not a DynamicFields object`);
    }
    return _DynamicFields.fromFieldsWithTypes(typeArg, content);
  }
  static async fetch(client, typeArg, id) {
    const res = await client.getObject({
      id,
      options: {
        showBcs: true
      }
    });
    if (res.error) {
      throw new Error(`error fetching DynamicFields object at id ${id}: ${res.error.code}`);
    }
    if (res.data?.bcs?.dataType !== "moveObject" || !isDynamicFields(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a DynamicFields object`);
    }
    return _DynamicFields.fromBcs(typeArg, (0, import_bcs6.fromB64)(res.data.bcs.bcsBytes));
  }
};
_DynamicFields.$typeName = "0x2::object::DynamicFields";
_DynamicFields.$numTypeParams = 1;
var DynamicFields = _DynamicFields;
function isID(type) {
  type = compressSuiType(type);
  return type === "0x2::object::ID";
}
var _ID = class _ID {
  constructor(typeArgs, fields) {
    this.$typeName = _ID.$typeName;
    this.$fullTypeName = composeSuiType(_ID.$typeName, ...typeArgs);
    this.$typeArgs = typeArgs;
    this.bytes = fields.bytes;
  }
  static reified() {
    return {
      typeName: _ID.$typeName,
      fullTypeName: composeSuiType(_ID.$typeName, ...[]),
      typeArgs: [],
      reifiedTypeArgs: [],
      fromFields: (fields) => _ID.fromFields(fields),
      fromFieldsWithTypes: (item) => _ID.fromFieldsWithTypes(item),
      fromBcs: (data) => _ID.fromBcs(data),
      bcs: _ID.bcs,
      fromJSONField: (field) => _ID.fromJSONField(field),
      fromJSON: (json) => _ID.fromJSON(json),
      fromSuiParsedData: (content) => _ID.fromSuiParsedData(content),
      fetch: async (client, id) => _ID.fetch(client, id),
      new: (fields) => {
        return new _ID([], fields);
      },
      kind: "StructClassReified"
    };
  }
  static get r() {
    return _ID.reified();
  }
  static phantom() {
    return phantom(_ID.reified());
  }
  static get p() {
    return _ID.phantom();
  }
  static get bcs() {
    return import_bcs6.bcs.struct("ID", {
      bytes: import_bcs6.bcs.bytes(32).transform({ input: (val) => (0, import_bcs6.fromHEX)(val), output: (val) => (0, import_bcs6.toHEX)(val) })
    });
  }
  static fromFields(fields) {
    return _ID.reified().new({ bytes: decodeFromFields("address", fields.bytes) });
  }
  static fromFieldsWithTypes(item) {
    if (!isID(item.type)) {
      throw new Error("not a ID type");
    }
    return _ID.reified().new({ bytes: decodeFromFieldsWithTypes("address", item.fields.bytes) });
  }
  static fromBcs(data) {
    return _ID.fromFields(_ID.bcs.parse(data));
  }
  toJSONField() {
    return {
      bytes: this.bytes
    };
  }
  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField()
    };
  }
  static fromJSONField(field) {
    return _ID.reified().new({ bytes: decodeFromJSONField("address", field.bytes) });
  }
  static fromJSON(json) {
    if (json.$typeName !== _ID.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }
    return _ID.fromJSONField(json);
  }
  static fromSuiParsedData(content) {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isID(content.type)) {
      throw new Error(`object at ${content.fields.id} is not a ID object`);
    }
    return _ID.fromFieldsWithTypes(content);
  }
  static async fetch(client, id) {
    const res = await client.getObject({
      id,
      options: {
        showBcs: true
      }
    });
    if (res.error) {
      throw new Error(`error fetching ID object at id ${id}: ${res.error.code}`);
    }
    if (res.data?.bcs?.dataType !== "moveObject" || !isID(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a ID object`);
    }
    return _ID.fromBcs((0, import_bcs6.fromB64)(res.data.bcs.bcsBytes));
  }
};
_ID.$typeName = "0x2::object::ID";
_ID.$numTypeParams = 0;
var ID = _ID;
function isOwnership(type) {
  type = compressSuiType(type);
  return type === "0x2::object::Ownership";
}
var _Ownership = class _Ownership {
  constructor(typeArgs, fields) {
    this.$typeName = _Ownership.$typeName;
    this.$fullTypeName = composeSuiType(_Ownership.$typeName, ...typeArgs);
    this.$typeArgs = typeArgs;
    this.owner = fields.owner;
    this.status = fields.status;
  }
  static reified() {
    return {
      typeName: _Ownership.$typeName,
      fullTypeName: composeSuiType(_Ownership.$typeName, ...[]),
      typeArgs: [],
      reifiedTypeArgs: [],
      fromFields: (fields) => _Ownership.fromFields(fields),
      fromFieldsWithTypes: (item) => _Ownership.fromFieldsWithTypes(item),
      fromBcs: (data) => _Ownership.fromBcs(data),
      bcs: _Ownership.bcs,
      fromJSONField: (field) => _Ownership.fromJSONField(field),
      fromJSON: (json) => _Ownership.fromJSON(json),
      fromSuiParsedData: (content) => _Ownership.fromSuiParsedData(content),
      fetch: async (client, id) => _Ownership.fetch(client, id),
      new: (fields) => {
        return new _Ownership([], fields);
      },
      kind: "StructClassReified"
    };
  }
  static get r() {
    return _Ownership.reified();
  }
  static phantom() {
    return phantom(_Ownership.reified());
  }
  static get p() {
    return _Ownership.phantom();
  }
  static get bcs() {
    return import_bcs6.bcs.struct("Ownership", {
      owner: import_bcs6.bcs.bytes(32).transform({ input: (val) => (0, import_bcs6.fromHEX)(val), output: (val) => (0, import_bcs6.toHEX)(val) }),
      status: import_bcs6.bcs.u64()
    });
  }
  static fromFields(fields) {
    return _Ownership.reified().new({
      owner: decodeFromFields("address", fields.owner),
      status: decodeFromFields("u64", fields.status)
    });
  }
  static fromFieldsWithTypes(item) {
    if (!isOwnership(item.type)) {
      throw new Error("not a Ownership type");
    }
    return _Ownership.reified().new({
      owner: decodeFromFieldsWithTypes("address", item.fields.owner),
      status: decodeFromFieldsWithTypes("u64", item.fields.status)
    });
  }
  static fromBcs(data) {
    return _Ownership.fromFields(_Ownership.bcs.parse(data));
  }
  toJSONField() {
    return {
      owner: this.owner,
      status: this.status.toString()
    };
  }
  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField()
    };
  }
  static fromJSONField(field) {
    return _Ownership.reified().new({
      owner: decodeFromJSONField("address", field.owner),
      status: decodeFromJSONField("u64", field.status)
    });
  }
  static fromJSON(json) {
    if (json.$typeName !== _Ownership.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }
    return _Ownership.fromJSONField(json);
  }
  static fromSuiParsedData(content) {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isOwnership(content.type)) {
      throw new Error(`object at ${content.fields.id} is not a Ownership object`);
    }
    return _Ownership.fromFieldsWithTypes(content);
  }
  static async fetch(client, id) {
    const res = await client.getObject({
      id,
      options: {
        showBcs: true
      }
    });
    if (res.error) {
      throw new Error(`error fetching Ownership object at id ${id}: ${res.error.code}`);
    }
    if (res.data?.bcs?.dataType !== "moveObject" || !isOwnership(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a Ownership object`);
    }
    return _Ownership.fromBcs((0, import_bcs6.fromB64)(res.data.bcs.bcsBytes));
  }
};
_Ownership.$typeName = "0x2::object::Ownership";
_Ownership.$numTypeParams = 0;
var Ownership = _Ownership;
function isUID(type) {
  type = compressSuiType(type);
  return type === "0x2::object::UID";
}
var _UID = class _UID {
  constructor(typeArgs, fields) {
    this.$typeName = _UID.$typeName;
    this.$fullTypeName = composeSuiType(_UID.$typeName, ...typeArgs);
    this.$typeArgs = typeArgs;
    this.id = fields.id;
  }
  static reified() {
    return {
      typeName: _UID.$typeName,
      fullTypeName: composeSuiType(_UID.$typeName, ...[]),
      typeArgs: [],
      reifiedTypeArgs: [],
      fromFields: (fields) => _UID.fromFields(fields),
      fromFieldsWithTypes: (item) => _UID.fromFieldsWithTypes(item),
      fromBcs: (data) => _UID.fromBcs(data),
      bcs: _UID.bcs,
      fromJSONField: (field) => _UID.fromJSONField(field),
      fromJSON: (json) => _UID.fromJSON(json),
      fromSuiParsedData: (content) => _UID.fromSuiParsedData(content),
      fetch: async (client, id) => _UID.fetch(client, id),
      new: (fields) => {
        return new _UID([], fields);
      },
      kind: "StructClassReified"
    };
  }
  static get r() {
    return _UID.reified();
  }
  static phantom() {
    return phantom(_UID.reified());
  }
  static get p() {
    return _UID.phantom();
  }
  static get bcs() {
    return import_bcs6.bcs.struct("UID", {
      id: ID.bcs
    });
  }
  static fromFields(fields) {
    return _UID.reified().new({ id: decodeFromFields(ID.reified(), fields.id) });
  }
  static fromFieldsWithTypes(item) {
    if (!isUID(item.type)) {
      throw new Error("not a UID type");
    }
    return _UID.reified().new({ id: decodeFromFieldsWithTypes(ID.reified(), item.fields.id) });
  }
  static fromBcs(data) {
    return _UID.fromFields(_UID.bcs.parse(data));
  }
  toJSONField() {
    return {
      id: this.id
    };
  }
  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField()
    };
  }
  static fromJSONField(field) {
    return _UID.reified().new({ id: decodeFromJSONField(ID.reified(), field.id) });
  }
  static fromJSON(json) {
    if (json.$typeName !== _UID.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }
    return _UID.fromJSONField(json);
  }
  static fromSuiParsedData(content) {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isUID(content.type)) {
      throw new Error(`object at ${content.fields.id} is not a UID object`);
    }
    return _UID.fromFieldsWithTypes(content);
  }
  static async fetch(client, id) {
    const res = await client.getObject({
      id,
      options: {
        showBcs: true
      }
    });
    if (res.error) {
      throw new Error(`error fetching UID object at id ${id}: ${res.error.code}`);
    }
    if (res.data?.bcs?.dataType !== "moveObject" || !isUID(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a UID object`);
    }
    return _UID.fromBcs((0, import_bcs6.fromB64)(res.data.bcs.bcsBytes));
  }
};
_UID.$typeName = "0x2::object::UID";
_UID.$numTypeParams = 0;
var UID = _UID;

// src/launchpad/surfdog/__generated__/meme/meme/structs.ts
var import_bcs7 = require("@mysten/bcs");
function isMemCoinOwnerCap(type) {
  type = compressSuiType(type);
  return type === "0xd06278ad71b5a4d622f179bd21d163d2efc8aaf14e1750884026f63e3d07ca3a::meme::MemCoinOwnerCap";
}
var _MemCoinOwnerCap = class _MemCoinOwnerCap {
  constructor(typeArgs, fields) {
    this.$typeName = _MemCoinOwnerCap.$typeName;
    this.$fullTypeName = composeSuiType(
      _MemCoinOwnerCap.$typeName,
      ...typeArgs
    );
    this.$typeArgs = typeArgs;
    this.id = fields.id;
  }
  static reified() {
    return {
      typeName: _MemCoinOwnerCap.$typeName,
      fullTypeName: composeSuiType(
        _MemCoinOwnerCap.$typeName,
        ...[]
      ),
      typeArgs: [],
      reifiedTypeArgs: [],
      fromFields: (fields) => _MemCoinOwnerCap.fromFields(fields),
      fromFieldsWithTypes: (item) => _MemCoinOwnerCap.fromFieldsWithTypes(item),
      fromBcs: (data) => _MemCoinOwnerCap.fromBcs(data),
      bcs: _MemCoinOwnerCap.bcs,
      fromJSONField: (field) => _MemCoinOwnerCap.fromJSONField(field),
      fromJSON: (json) => _MemCoinOwnerCap.fromJSON(json),
      fromSuiParsedData: (content) => _MemCoinOwnerCap.fromSuiParsedData(content),
      fetch: async (client, id) => _MemCoinOwnerCap.fetch(client, id),
      new: (fields) => {
        return new _MemCoinOwnerCap([], fields);
      },
      kind: "StructClassReified"
    };
  }
  static get r() {
    return _MemCoinOwnerCap.reified();
  }
  static phantom() {
    return phantom(_MemCoinOwnerCap.reified());
  }
  static get p() {
    return _MemCoinOwnerCap.phantom();
  }
  static get bcs() {
    return import_bcs7.bcs.struct("MemCoinOwnerCap", {
      id: UID.bcs
    });
  }
  static fromFields(fields) {
    return _MemCoinOwnerCap.reified().new({ id: decodeFromFields(UID.reified(), fields.id) });
  }
  static fromFieldsWithTypes(item) {
    if (!isMemCoinOwnerCap(item.type)) {
      throw new Error("not a MemCoinOwnerCap type");
    }
    return _MemCoinOwnerCap.reified().new({ id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id) });
  }
  static fromBcs(data) {
    return _MemCoinOwnerCap.fromFields(_MemCoinOwnerCap.bcs.parse(data));
  }
  toJSONField() {
    return {
      id: this.id
    };
  }
  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField()
    };
  }
  static fromJSONField(field) {
    return _MemCoinOwnerCap.reified().new({ id: decodeFromJSONField(UID.reified(), field.id) });
  }
  static fromJSON(json) {
    if (json.$typeName !== _MemCoinOwnerCap.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }
    return _MemCoinOwnerCap.fromJSONField(json);
  }
  static fromSuiParsedData(content) {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isMemCoinOwnerCap(content.type)) {
      throw new Error(`object at ${content.fields.id} is not a MemCoinOwnerCap object`);
    }
    return _MemCoinOwnerCap.fromFieldsWithTypes(content);
  }
  static async fetch(client, id) {
    const res = await client.getObject({
      id,
      options: {
        showBcs: true
      }
    });
    if (res.error) {
      throw new Error(`error fetching MemCoinOwnerCap object at id ${id}: ${res.error.code}`);
    }
    if (res.data?.bcs?.dataType !== "moveObject" || !isMemCoinOwnerCap(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a MemCoinOwnerCap object`);
    }
    return _MemCoinOwnerCap.fromBcs((0, import_bcs7.fromB64)(res.data.bcs.bcsBytes));
  }
};
_MemCoinOwnerCap.$typeName = "0xd06278ad71b5a4d622f179bd21d163d2efc8aaf14e1750884026f63e3d07ca3a::meme::MemCoinOwnerCap";
_MemCoinOwnerCap.$numTypeParams = 0;
var MemCoinOwnerCap = _MemCoinOwnerCap;
function isState(type) {
  type = compressSuiType(type);
  return type.startsWith("0xd06278ad71b5a4d622f179bd21d163d2efc8aaf14e1750884026f63e3d07ca3a::meme::State<");
}
var _State = class _State {
  constructor(typeArgs, fields) {
    this.$typeName = _State.$typeName;
    this.$fullTypeName = composeSuiType(
      _State.$typeName,
      ...typeArgs
    );
    this.$typeArgs = typeArgs;
    this.id = fields.id;
    this.start = fields.start;
    this.end = fields.end;
    this.nextTick = fields.nextTick;
    this.allTickets = fields.allTickets;
    this.wonTickets = fields.wonTickets;
    this.ticketPrice = fields.ticketPrice;
    this.tokensPerTicket = fields.tokensPerTicket;
    this.balance = fields.balance;
  }
  static reified(T) {
    return {
      typeName: _State.$typeName,
      fullTypeName: composeSuiType(
        _State.$typeName,
        ...[extractType(T)]
      ),
      typeArgs: [extractType(T)],
      reifiedTypeArgs: [T],
      fromFields: (fields) => _State.fromFields(T, fields),
      fromFieldsWithTypes: (item) => _State.fromFieldsWithTypes(T, item),
      fromBcs: (data) => _State.fromBcs(T, data),
      bcs: _State.bcs,
      fromJSONField: (field) => _State.fromJSONField(T, field),
      fromJSON: (json) => _State.fromJSON(T, json),
      fromSuiParsedData: (content) => _State.fromSuiParsedData(T, content),
      fetch: async (client, id) => _State.fetch(client, T, id),
      new: (fields) => {
        return new _State([extractType(T)], fields);
      },
      kind: "StructClassReified"
    };
  }
  static get r() {
    return _State.reified;
  }
  static phantom(T) {
    return phantom(_State.reified(T));
  }
  static get p() {
    return _State.phantom;
  }
  static get bcs() {
    return import_bcs7.bcs.struct("State", {
      id: UID.bcs,
      start: import_bcs7.bcs.u64(),
      end: import_bcs7.bcs.u64(),
      next_tick: import_bcs7.bcs.u64(),
      all_tickets: import_bcs7.bcs.u64(),
      won_tickets: import_bcs7.bcs.u64(),
      ticket_price: import_bcs7.bcs.u64(),
      tokens_per_ticket: import_bcs7.bcs.u64(),
      balance: Balance.bcs
    });
  }
  static fromFields(typeArg, fields) {
    return _State.reified(typeArg).new({
      id: decodeFromFields(UID.reified(), fields.id),
      start: decodeFromFields("u64", fields.start),
      end: decodeFromFields("u64", fields.end),
      nextTick: decodeFromFields("u64", fields.next_tick),
      allTickets: decodeFromFields("u64", fields.all_tickets),
      wonTickets: decodeFromFields("u64", fields.won_tickets),
      ticketPrice: decodeFromFields("u64", fields.ticket_price),
      tokensPerTicket: decodeFromFields("u64", fields.tokens_per_ticket),
      balance: decodeFromFields(Balance.reified(typeArg), fields.balance)
    });
  }
  static fromFieldsWithTypes(typeArg, item) {
    if (!isState(item.type)) {
      throw new Error("not a State type");
    }
    assertFieldsWithTypesArgsMatch(item, [typeArg]);
    return _State.reified(typeArg).new({
      id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
      start: decodeFromFieldsWithTypes("u64", item.fields.start),
      end: decodeFromFieldsWithTypes("u64", item.fields.end),
      nextTick: decodeFromFieldsWithTypes("u64", item.fields.next_tick),
      allTickets: decodeFromFieldsWithTypes("u64", item.fields.all_tickets),
      wonTickets: decodeFromFieldsWithTypes("u64", item.fields.won_tickets),
      ticketPrice: decodeFromFieldsWithTypes("u64", item.fields.ticket_price),
      tokensPerTicket: decodeFromFieldsWithTypes("u64", item.fields.tokens_per_ticket),
      balance: decodeFromFieldsWithTypes(Balance.reified(typeArg), item.fields.balance)
    });
  }
  static fromBcs(typeArg, data) {
    return _State.fromFields(typeArg, _State.bcs.parse(data));
  }
  toJSONField() {
    return {
      id: this.id,
      start: this.start.toString(),
      end: this.end.toString(),
      nextTick: this.nextTick.toString(),
      allTickets: this.allTickets.toString(),
      wonTickets: this.wonTickets.toString(),
      ticketPrice: this.ticketPrice.toString(),
      tokensPerTicket: this.tokensPerTicket.toString(),
      balance: this.balance.toJSONField()
    };
  }
  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField()
    };
  }
  static fromJSONField(typeArg, field) {
    return _State.reified(typeArg).new({
      id: decodeFromJSONField(UID.reified(), field.id),
      start: decodeFromJSONField("u64", field.start),
      end: decodeFromJSONField("u64", field.end),
      nextTick: decodeFromJSONField("u64", field.nextTick),
      allTickets: decodeFromJSONField("u64", field.allTickets),
      wonTickets: decodeFromJSONField("u64", field.wonTickets),
      ticketPrice: decodeFromJSONField("u64", field.ticketPrice),
      tokensPerTicket: decodeFromJSONField("u64", field.tokensPerTicket),
      balance: decodeFromJSONField(Balance.reified(typeArg), field.balance)
    });
  }
  static fromJSON(typeArg, json) {
    if (json.$typeName !== _State.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }
    assertReifiedTypeArgsMatch(composeSuiType(_State.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg]);
    return _State.fromJSONField(typeArg, json);
  }
  static fromSuiParsedData(typeArg, content) {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isState(content.type)) {
      throw new Error(`object at ${content.fields.id} is not a State object`);
    }
    return _State.fromFieldsWithTypes(typeArg, content);
  }
  static async fetch(client, typeArg, id) {
    const res = await client.getObject({
      id,
      options: {
        showBcs: true
      }
    });
    if (res.error) {
      throw new Error(`error fetching State object at id ${id}: ${res.error.code}`);
    }
    if (res.data?.bcs?.dataType !== "moveObject" || !isState(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a State object`);
    }
    return _State.fromBcs(typeArg, (0, import_bcs7.fromB64)(res.data.bcs.bcsBytes));
  }
};
_State.$typeName = "0xd06278ad71b5a4d622f179bd21d163d2efc8aaf14e1750884026f63e3d07ca3a::meme::State";
_State.$numTypeParams = 1;
var State = _State;
function isUserState(type) {
  type = compressSuiType(type);
  return type === "0xd06278ad71b5a4d622f179bd21d163d2efc8aaf14e1750884026f63e3d07ca3a::meme::UserState";
}
var _UserState = class _UserState {
  constructor(typeArgs, fields) {
    this.$typeName = _UserState.$typeName;
    this.$fullTypeName = composeSuiType(
      _UserState.$typeName,
      ...typeArgs
    );
    this.$typeArgs = typeArgs;
    this.id = fields.id;
    this.wonTickets = fields.wonTickets;
    this.allTickets = fields.allTickets;
  }
  static reified() {
    return {
      typeName: _UserState.$typeName,
      fullTypeName: composeSuiType(
        _UserState.$typeName,
        ...[]
      ),
      typeArgs: [],
      reifiedTypeArgs: [],
      fromFields: (fields) => _UserState.fromFields(fields),
      fromFieldsWithTypes: (item) => _UserState.fromFieldsWithTypes(item),
      fromBcs: (data) => _UserState.fromBcs(data),
      bcs: _UserState.bcs,
      fromJSONField: (field) => _UserState.fromJSONField(field),
      fromJSON: (json) => _UserState.fromJSON(json),
      fromSuiParsedData: (content) => _UserState.fromSuiParsedData(content),
      fetch: async (client, id) => _UserState.fetch(client, id),
      new: (fields) => {
        return new _UserState([], fields);
      },
      kind: "StructClassReified"
    };
  }
  static get r() {
    return _UserState.reified();
  }
  static phantom() {
    return phantom(_UserState.reified());
  }
  static get p() {
    return _UserState.phantom();
  }
  static get bcs() {
    return import_bcs7.bcs.struct("UserState", {
      id: UID.bcs,
      won_tickets: import_bcs7.bcs.u64(),
      all_tickets: import_bcs7.bcs.u64()
    });
  }
  static fromFields(fields) {
    return _UserState.reified().new({
      id: decodeFromFields(UID.reified(), fields.id),
      wonTickets: decodeFromFields("u64", fields.won_tickets),
      allTickets: decodeFromFields("u64", fields.all_tickets)
    });
  }
  static fromFieldsWithTypes(item) {
    if (!isUserState(item.type)) {
      throw new Error("not a UserState type");
    }
    return _UserState.reified().new({
      id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
      wonTickets: decodeFromFieldsWithTypes("u64", item.fields.won_tickets),
      allTickets: decodeFromFieldsWithTypes("u64", item.fields.all_tickets)
    });
  }
  static fromBcs(data) {
    return _UserState.fromFields(_UserState.bcs.parse(data));
  }
  toJSONField() {
    return {
      id: this.id,
      wonTickets: this.wonTickets.toString(),
      allTickets: this.allTickets.toString()
    };
  }
  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField()
    };
  }
  static fromJSONField(field) {
    return _UserState.reified().new({
      id: decodeFromJSONField(UID.reified(), field.id),
      wonTickets: decodeFromJSONField("u64", field.wonTickets),
      allTickets: decodeFromJSONField("u64", field.allTickets)
    });
  }
  static fromJSON(json) {
    if (json.$typeName !== _UserState.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }
    return _UserState.fromJSONField(json);
  }
  static fromSuiParsedData(content) {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isUserState(content.type)) {
      throw new Error(`object at ${content.fields.id} is not a UserState object`);
    }
    return _UserState.fromFieldsWithTypes(content);
  }
  static async fetch(client, id) {
    const res = await client.getObject({
      id,
      options: {
        showBcs: true
      }
    });
    if (res.error) {
      throw new Error(`error fetching UserState object at id ${id}: ${res.error.code}`);
    }
    if (res.data?.bcs?.dataType !== "moveObject" || !isUserState(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a UserState object`);
    }
    return _UserState.fromBcs((0, import_bcs7.fromB64)(res.data.bcs.bcsBytes));
  }
};
_UserState.$typeName = "0xd06278ad71b5a4d622f179bd21d163d2efc8aaf14e1750884026f63e3d07ca3a::meme::UserState";
_UserState.$numTypeParams = 0;
var UserState = _UserState;

// src/launchpad/surfdog/__generated__/meme/surf/structs.ts
var import_bcs8 = require("@mysten/bcs");
function isSURF(type) {
  type = compressSuiType(type);
  return type === "0xd06278ad71b5a4d622f179bd21d163d2efc8aaf14e1750884026f63e3d07ca3a::surf::SURF";
}
var _SURF = class _SURF {
  constructor(typeArgs, fields) {
    this.$typeName = _SURF.$typeName;
    this.$fullTypeName = composeSuiType(
      _SURF.$typeName,
      ...typeArgs
    );
    this.$typeArgs = typeArgs;
    this.dummyField = fields.dummyField;
  }
  static reified() {
    return {
      typeName: _SURF.$typeName,
      fullTypeName: composeSuiType(
        _SURF.$typeName,
        ...[]
      ),
      typeArgs: [],
      reifiedTypeArgs: [],
      fromFields: (fields) => _SURF.fromFields(fields),
      fromFieldsWithTypes: (item) => _SURF.fromFieldsWithTypes(item),
      fromBcs: (data) => _SURF.fromBcs(data),
      bcs: _SURF.bcs,
      fromJSONField: (field) => _SURF.fromJSONField(field),
      fromJSON: (json) => _SURF.fromJSON(json),
      fromSuiParsedData: (content) => _SURF.fromSuiParsedData(content),
      fetch: async (client, id) => _SURF.fetch(client, id),
      new: (fields) => {
        return new _SURF([], fields);
      },
      kind: "StructClassReified"
    };
  }
  static get r() {
    return _SURF.reified();
  }
  static phantom() {
    return phantom(_SURF.reified());
  }
  static get p() {
    return _SURF.phantom();
  }
  static get bcs() {
    return import_bcs8.bcs.struct("SURF", {
      dummy_field: import_bcs8.bcs.bool()
    });
  }
  static fromFields(fields) {
    return _SURF.reified().new({ dummyField: decodeFromFields("bool", fields.dummy_field) });
  }
  static fromFieldsWithTypes(item) {
    if (!isSURF(item.type)) {
      throw new Error("not a SURF type");
    }
    return _SURF.reified().new({ dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field) });
  }
  static fromBcs(data) {
    return _SURF.fromFields(_SURF.bcs.parse(data));
  }
  toJSONField() {
    return {
      dummyField: this.dummyField
    };
  }
  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField()
    };
  }
  static fromJSONField(field) {
    return _SURF.reified().new({ dummyField: decodeFromJSONField("bool", field.dummyField) });
  }
  static fromJSON(json) {
    if (json.$typeName !== _SURF.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }
    return _SURF.fromJSONField(json);
  }
  static fromSuiParsedData(content) {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isSURF(content.type)) {
      throw new Error(`object at ${content.fields.id} is not a SURF object`);
    }
    return _SURF.fromFieldsWithTypes(content);
  }
  static async fetch(client, id) {
    const res = await client.getObject({
      id,
      options: {
        showBcs: true
      }
    });
    if (res.error) {
      throw new Error(`error fetching SURF object at id ${id}: ${res.error.code}`);
    }
    if (res.data?.bcs?.dataType !== "moveObject" || !isSURF(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a SURF object`);
    }
    return _SURF.fromBcs((0, import_bcs8.fromB64)(res.data.bcs.bcsBytes));
  }
};
_SURF.$typeName = "0xd06278ad71b5a4d622f179bd21d163d2efc8aaf14e1750884026f63e3d07ca3a::surf::SURF";
_SURF.$numTypeParams = 0;
var SURF = _SURF;

// src/launchpad/surfdog/surfdog.ts
var _SurfdogLaunchpadSingleton = class _SurfdogLaunchpadSingleton {
  /**
   * Constructs a new instance of the SuiProvider class with the provided SUI provider URL.
   *
   * @private
   * @constructor
   * @param {string} suiProviderUrl - The URL of the SUI provider.
   * @param {SurfDogConfig} [config] - Config for SurfDog
   */
  constructor(suiProviderUrl, config) {
    this.provider = new import_client7.SuiClient({ url: suiProviderUrl });
    this.config = config;
  }
  /**
   * @public
   * @method getInstance
   * @description Gets the singleton instance of SurfdogLaunchpadSingleton.
   * @param {string} [suiProviderUrl] - Url of SUI provider.
   * @param {SurfDogConfig} [config] - Config for SurfDog
   * @return {SurfdogLaunchpadSingleton} The singleton instance of SurfdogLaunchpadSingleton.
   */
  static getInstance(suiProviderUrl, config) {
    if (!_SurfdogLaunchpadSingleton._instance) {
      if (suiProviderUrl === void 0) {
        throw new Error(
          "[SurfdogLaunchpadSingleton] SUI provider url is required in arguments to create SurfdogLaunchpad instance."
        );
      }
      if (config === void 0) {
        throw new Error(
          "[SurfdogLaunchpadSingleton] config is required in arguments to create SurfdogLaunchpad instance."
        );
      }
      const instance = new _SurfdogLaunchpadSingleton(suiProviderUrl, config);
      _SurfdogLaunchpadSingleton._instance = instance;
    }
    return _SurfdogLaunchpadSingleton._instance;
  }
  async getUserState(publicKey) {
    const object = await this.provider.getOwnedObjects({
      filter: { StructType: UserState.$typeName },
      options: {
        showContent: true,
        showOwner: true,
        showType: true,
        showStorageRebate: true,
        showBcs: true
      },
      owner: publicKey
    });
    if (!(Array.isArray(object.data) && object.data[0] && object.data[0].data && object.data[0].data.bcs)) {
      console.warn(`User ${publicKey} does not have state objects`);
      return null;
    }
    const userStateBcs = object.data[0].data.bcs;
    const isBcsBytesInStateBcs = "bcsBytes" in userStateBcs;
    if (!isBcsBytesInStateBcs) {
      console.error("[SurfdogLaunchpadSingleton.getUserState] bcsBytes does not exist stateBcs", userStateBcs);
      throw new Error("bcsBytes does not exist stateBcs");
    }
    const userState = UserState.fromBcs((0, import_utils24.fromB64)(userStateBcs.bcsBytes));
    const userGameState = {
      allTickets: userState.allTickets,
      id: userState.id,
      wonTickets: userState.wonTickets
    };
    return userGameState;
  }
  async getGameState() {
    const object = await this.provider.getObject({
      id: this.config.GAME_ADDRESS,
      options: {
        showBcs: true,
        showContent: true
      }
    });
    if (!object.data) {
      console.error("[SurfdogLaunchpadSingleton.getGameState] object.data", object.data);
      throw new Error("Failed to fetch game state: object.data is empty");
    }
    const stateBcs = object.data.bcs;
    if (!stateBcs) {
      console.error("[SurfdogLaunchpadSingleton.getGameState] State does not exist bsc", stateBcs);
      throw new Error("State does not exist bsc");
    }
    const isBcsBytesInStateBcs = "bcsBytes" in stateBcs;
    if (!isBcsBytesInStateBcs) {
      console.error("[SurfdogLaunchpadSingleton.getGameState] bcsBytes does not exist stateBcs", stateBcs);
      throw new Error("bcsBytes does not exist stateBcs");
    }
    const globalState = State.fromBcs(State.phantom(SURF.phantom()), (0, import_utils24.fromB64)(stateBcs.bcsBytes));
    const globalStateParsed = {
      allTickets: globalState.allTickets,
      startTimestamp: globalState.start,
      ticketPrice: globalState.ticketPrice,
      tokensPerTicket: globalState.tokensPerTicket,
      winningTickets: globalState.wonTickets,
      balanceLeft: globalState.balance.value
    };
    return globalStateParsed;
  }
  async createUserState() {
    const tx = new import_transactions17.TransactionBlock();
    const userStateTxRes = createUserState(tx);
    return { tx, txRes: userStateTxRes };
  }
  async buyTicket({ ticketPrice, userStateId }) {
    const tx = new import_transactions17.TransactionBlock();
    const [coin] = tx.splitCoins(tx.gas, [tx.pure(ticketPrice)]);
    const buyUserTicketTxRes = buy(tx, SURF.$typeName, {
      clock: this.config.CLOCK_ADDRESS,
      state: this.config.GAME_ADDRESS,
      userState: userStateId,
      payment: coin
    });
    tx.setGasBudget(_SurfdogLaunchpadSingleton.GAS_BUDGET_FOR_BUYING_TICKET);
    return { tx, txRes: buyUserTicketTxRes };
  }
  checkSpinStatusByTx({ tx }) {
    if (!tx.balanceChanges) {
      console.error("[SurfdogLaunchpadSingleton.checkSpinStatusByTx]", tx);
      throw new Error("No balanceChanges present in spin transaction");
    }
    const surfMoved = tx.balanceChanges.find((a) => a.coinType === SURF.$typeName);
    if (surfMoved) {
      return true;
    } else {
      return false;
    }
  }
  getMaxTicketsCount(suiBalance, ticketPrice) {
    const suiBalanceBN = new import_bignumber19.default(suiBalance);
    const ticketPriceBN = new import_bignumber19.default(ticketPrice);
    const gasBudgetBN = new import_bignumber19.default(_SurfdogLaunchpadSingleton.GAS_BUDGET_FOR_BUYING_TICKET).dividedBy(
      10 ** import_utils24.SUI_DECIMALS
    );
    let ticketsCount = 0;
    let availableSuiBalanceBN = suiBalanceBN;
    while (availableSuiBalanceBN.gte(ticketPriceBN.plus(gasBudgetBN))) {
      ticketsCount = ticketsCount + 1;
      availableSuiBalanceBN = availableSuiBalanceBN.minus(ticketPriceBN.plus(gasBudgetBN));
    }
    return ticketsCount;
  }
};
_SurfdogLaunchpadSingleton.GAS_BUDGET_FOR_BUYING_TICKET = 1e7;
var SurfdogLaunchpadSingleton = _SurfdogLaunchpadSingleton;

// src/launchpad/surfdog/mainnet.config.ts
var mainnet_config_exports = {};
__export(mainnet_config_exports, {
  CHAIN: () => CHAIN,
  CLOCK_ADDRESS: () => CLOCK_ADDRESS,
  GAME_ADDRESS: () => GAME_ADDRESS,
  PROGRAM_ADDRESS: () => PROGRAM_ADDRESS,
  SALE_SUPPLY: () => SALE_SUPPLY,
  SURF_DECIMALS: () => SURF_DECIMALS,
  TICKET_REWARD: () => TICKET_REWARD,
  TICKET_SUPPLY: () => TICKET_SUPPLY
});
var CHAIN = "sui:mainnet";
var GAME_ADDRESS = "0xefbee845f696399fb22e23bb54694b45bf0f2e11e8165cf99c830c8d862f56df";
var PROGRAM_ADDRESS = "0xe2d76c57bb1cf8b511f6f4bbbab7d575ab221d2c84b3ccb5eee2ef999c7dc61f";
var CLOCK_ADDRESS = "0x0000000000000000000000000000000000000000000000000000000000000006";
var TICKET_SUPPLY = BigInt(4e4);
var TICKET_REWARD = BigInt(175e11);
var SALE_SUPPLY = TICKET_REWARD * TICKET_SUPPLY;
var SURF_DECIMALS = BigInt(6);

// src/launchpad/surfdog/testnet.config.ts
var testnet_config_exports = {};
__export(testnet_config_exports, {
  CLOCK_ADDRESS: () => CLOCK_ADDRESS2,
  GAME_ADDRESS: () => GAME_ADDRESS2,
  PROGRAM_ADDRESS: () => PROGRAM_ADDRESS2,
  SALE_SUPPLY: () => SALE_SUPPLY2,
  SURF_DECIMALS: () => SURF_DECIMALS2,
  TICKET_REWARD: () => TICKET_REWARD2,
  TICKET_SUPPLY: () => TICKET_SUPPLY2
});
var GAME_ADDRESS2 = "0xa8cf842832915a2dd203f8604a78a12a686fdba987d19065092fe92b09029619";
var PROGRAM_ADDRESS2 = "0xae40d60ccae9366903e142ad222b91953e699221c51b9a2647d69cfe8ef2ff39";
var CLOCK_ADDRESS2 = "0x0000000000000000000000000000000000000000000000000000000000000006";
var TICKET_SUPPLY2 = BigInt(4e4);
var TICKET_REWARD2 = BigInt(175e11);
var SALE_SUPPLY2 = TICKET_REWARD2 * TICKET_SUPPLY2;
var SURF_DECIMALS2 = BigInt(6);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AftermathSingleton,
  CENTRALIZED_POOLS_INFO_ENDPOINT,
  CetusSingleton,
  CoinManagerSingleton,
  DCAManagerSingleton,
  DCATimescale,
  Ed25519Keypair,
  FETCH_BEST_ROUTE_ATTEMPTS_COUNT,
  FeeManager,
  FlowxSingleton,
  InMemoryStorageSingleton,
  InterestProtocolSingleton,
  LONG_SUI_COIN_TYPE,
  MAX_BATCH_EVENTS_PER_QUERY_EVENTS_REQUEST,
  MAX_BATCH_OBJECTS_PER_GET_OBJECT_REQUEST,
  MAX_FETCH_BEST_ROUTE_TIMEOUT_DURATION,
  MIN_FETCH_BEST_ROUTE_TIMEOUT_DURATION,
  NoRoutesError,
  ROUTES_QUOTES_AMOUNT_OBJECT_INDEX,
  RedisStorageSingleton,
  RefundManagerSingleton,
  RouteManager,
  SHORT_SUI_COIN_TYPE,
  SUI_DECIMALS,
  SUI_DENOMINATOR,
  SWAP_GAS_BUDGET,
  StorageProperty,
  SurfdogLaunchpadSingleton,
  TOKEN_ADDRESS_BASE_REGEX,
  TransactionBlock,
  TurbosSingleton,
  WalletManagerSingleton,
  clmmMainnet,
  convertSlippage,
  convertToBNFormat,
  exitHandler,
  exitHandlerWrapper,
  feeAmount,
  filterValidDCAObjects,
  fromArgument,
  getAllUserEvents,
  getAmountWithSlippage,
  getBaseQuoteCoinTypesFromDCAType,
  getBestInterestRoute,
  getCoinsAssetsFromCoinObjects,
  getCoinsDataForPool,
  getCoinsMap,
  getCreatePoolCapIdAndLpCoinType,
  getFiltredProviders,
  getLpCoinDecimals,
  getPathMapAndCoinTypesSet,
  getPathsMap,
  getPoolByCoins,
  getPoolObjectIdFromTransactionResult,
  getRouterMaps,
  getSuiProvider,
  hasMinMaxPriceParams,
  isApiResponseValid,
  isCategoryValid,
  isCetusPathForStorageArray,
  isCoinDataValid,
  isCoinsApiResponseValid,
  isCommonCoinData,
  isCommonCoinDataArray,
  isCommonPoolDataArray,
  isDCAContent,
  isInterestPool,
  isPoolDataValid,
  isPoolsApiResponseValid,
  isRewardInfoValid,
  isShortCoinMetadataArray,
  isShortPoolDataArray,
  isStablePoolState,
  isStorageValue,
  isSuiCoinType,
  isTransactionArgument,
  isTransactionBlock,
  isTurbosCreatePoolEventParsedJson,
  isValidDCAFields,
  isValidDCAObjectResponse,
  isValidPrivateKey,
  isValidResForCreateCoin,
  isValidSeedPhrase,
  isValidSuiAddress,
  isValidTokenAddress,
  isValidTokenAmount,
  isVolatilePoolState,
  mainnetSurfdogConfig,
  normalizeMnemonic,
  normalizeSuiCoinType,
  numberToFixedBigInt,
  obj,
  testnetSurfdogConfig,
  tokenFromIsTokenTo,
  transactionFromSerializedTransaction,
  tryCatchWrapper
});
//# sourceMappingURL=index.js.map