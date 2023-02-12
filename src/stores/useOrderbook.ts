import { defineStore } from "pinia";
import zondaAPI from "@/api/resources/zondaAPI";
import type { OrderbookItems } from "@/types/OrderbookResponse";
import type { OrderbookTableRow } from "@/types/OrderbookTableRow";
import { defaultPair } from "@/stores/useCurrencyPairs";

function fixedTo(number: number, n: number) {
  var k = Math.pow(10, n);
  return Math.round(number * k) / k;
}

function getBook(arr: OrderbookItems[]) {
  return arr.map((item) => {
    return {
      rate: fixedTo(parseFloat(item.ra), 4),
      amount: fixedTo(parseFloat(item.ca), 4),
      value: fixedTo(parseFloat(item.ra) * parseFloat(item.ca), 4),
      offers: item.co,
    };
  });
}

export const useOrderbook = defineStore("useOrderbook", {
  state: () => ({
    bids: [] as OrderbookTableRow[],
    asks: [] as OrderbookTableRow[],
  }),
  getters: {
    spread: (state) => {
      let spr = 0;
      if (state.bids[0] && state.asks[0]) {
        return fixedTo(state.asks[0].rate - state.bids[0].rate, 4);
      }
      return spr;
    },
  },
  actions: {
    async getOrderbook(pair: string = defaultPair, limit: 10 | 50 | 100 = 10) {
      // dummy sleep just to have time to show loading state
      await new Promise((r) => setTimeout(r, 1000));

      const response = await zondaAPI.getOrderbook(pair, limit);
      this.bids = getBook(response.buy);
      this.asks = getBook(response.sell);
    },
  },
});
