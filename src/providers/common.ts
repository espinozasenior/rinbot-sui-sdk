import { SUI_DECIMALS } from "@mysten/sui.js/utils";
import { ExitHandlerOptions } from "./types";

export const SUI_DENOMINATOR = 10 ** SUI_DECIMALS;
export const SHORT_SUI_COIN_TYPE = "0x2::sui::SUI";
export const LONG_SUI_COIN_TYPE = "0x0000000000000000000000000000000000000000000000000000000000000002::sui::SUI";
export const SWAP_GAS_BUDGET = 50_000_000;

export const exitHandler = (options: ExitHandlerOptions) => {
  if (options.cleanup) {
    console.log(`[EXIT HANDLER] ${options.providerName} cache cleanup.`);
    clearInterval(options.intervalId);
  }
  if (options.exit) process.exit();
};

export const exitHandlerWrapper = (options: ExitHandlerOptions) => {
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
