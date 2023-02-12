import { test, expect } from "vitest";
import { setActivePinia, createPinia } from "pinia";
import { useCurrencyPairs } from "../useCurrencyPairs";
import { beforeEach } from "vitest";
import { fetch } from "cross-fetch";
global.fetch = fetch;
beforeEach(() => {
  setActivePinia(createPinia());
});

test("has default pair", () => {
  const currencyPairs = useCurrencyPairs();
  expect(currencyPairs.currentPair).toBe("BTC-PLN");
});

test("loads other pairs", async () => {
  const currencyPairs = useCurrencyPairs();
  await currencyPairs.getPairs();
  expect(currencyPairs.pairs.length).toBeGreaterThan(0);
});
