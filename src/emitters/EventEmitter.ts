/* eslint-disable require-jsdoc */

import { UpdateCoinsCacheHandler, UpdatedCoinsCache } from "../managers/types";

export class EventEmitter {
  private events: Record<string, UpdateCoinsCacheHandler[]> = {};
  private buffer: { eventName: string; data: UpdatedCoinsCache }[] = [];

  on(eventName: string, callback: UpdateCoinsCacheHandler) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(callback);
  }

  emit(eventName: string, arg: UpdatedCoinsCache) {
    if (this.events[eventName]) {
      this.events[eventName].forEach((callback) => callback(arg));
    }
  }

  bufferEvent(eventName: string, data: UpdatedCoinsCache) {
    this.buffer.push({ eventName, data });
  }

  flushBuffer() {
    this.buffer.forEach(({ eventName, data }) => this.emit(eventName, data));
    this.buffer = [];
  }
}
