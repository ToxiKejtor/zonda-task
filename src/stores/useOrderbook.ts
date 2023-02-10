import { defineStore } from "pinia";
import zondaAPI from "@/api/resources/zondaAPI";
import type { OrderbookItems } from "@/types/OrderbookResponse";
import type { OrderbookTableRow } from "@/types/OrderbookTableRow";

function getBook(arr: OrderbookItems[]) {
  return arr.map((item) => {
    return {
      rate: item.ra,
      amount: item.ca,
      value: (parseFloat(item.ra) * parseFloat(item.ca)).toFixed(4),
      offers: item.co,
    };
  });
}

export const useOrderbook = defineStore("useOrderbook", {
  state: () => ({
    bids: [] as OrderbookTableRow[],
    asks: [] as OrderbookTableRow[],
  }),
  actions: {
    async getOrderbook(pair: string, limit: 10 | 50 | 100 = 10) {
      const response = await zondaAPI.getOrderbook(pair, limit);
      this.bids = getBook(response.buy);
      this.asks = getBook(response.sell);
    },
  },
});
