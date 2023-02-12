import { test, expect } from "vitest";
import { setActivePinia, createPinia } from "pinia";
import { useOrderbook } from "../useOrderbook";
import { beforeEach } from "vitest";
import { fetch } from "cross-fetch";
global.fetch = fetch;
beforeEach(() => {
  setActivePinia(createPinia());
});

test("starts empty", () => {
  const orderbook = useOrderbook();
  expect(orderbook.bids.length).toBe(0);
  expect(orderbook.asks.length).toBe(0);
});

test("gets orderbook", async () => {
  const orderbook = useOrderbook();
  await orderbook.getOrderbook();
  expect(orderbook.bids.length).toBeGreaterThan(0);
  expect(orderbook.asks.length).toBeGreaterThan(0);
});

test("calculate spread", async () => {
  const orderbook = useOrderbook();
  await orderbook.getOrderbook();
  expect(orderbook.spread).toBeGreaterThan(0);
});
