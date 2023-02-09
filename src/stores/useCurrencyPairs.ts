import { defineStore } from "pinia";
import zondaAPI from "@/api/resources/zondaAPI";

export const useCurrencyPairs = defineStore("useCurrencyPairs", {
  state: () => ({
    pairs: [] as string[],
  }),
  actions: {
    async getPairs() {
      const response = await zondaAPI.getTickers();
      this.pairs = Object.keys(response.items);
    },
  },
});
