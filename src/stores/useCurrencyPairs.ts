import { defineStore } from "pinia";
import zondaAPI from "@/api/resources/zondaAPI";
export const defaultPair = "BTC-PLN";

export const useCurrencyPairs = defineStore("useCurrencyPairs", {
  state: () => ({
    pairs: [] as string[],
    currentPair: defaultPair,
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
      const response = await zondaAPI.getTickers();
      this.pairs = Object.keys(response.items);
    },
  },
});
