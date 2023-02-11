import { defineStore } from "pinia";
import zondaAPI from "@/api/resources/zondaAPI";
export const defaultPair = "BTC-PLN";

export const useCurrencyPairs = defineStore("useCurrencyPairs", {
  state: () => ({
    pairs: [] as string[],
    currentPair: defaultPair as string,
  }),
  getters: {
    currency1(state) {
      return state.currentPair.split("-")[0];
    },
    currency2(state) {
      return state.currentPair.split("-")[1];
    },
  },
  actions: {
    async getPairs() {
      // dummy sleep just to have time to show loading state
      await new Promise((r) => setTimeout(r, 1000));

      const response = await zondaAPI.getTickers();
      this.pairs = Object.keys(response.items);
    },
  },
});
