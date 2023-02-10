import { defineStore } from "pinia";
import zondaAPI from "@/api/resources/zondaAPI";
import type { IOrderbookItems } from "@/api/types/IOrderbookResponse";
import { defaultPair } from "@/stores/useCurrencyPairs";

export interface IBook {
  rate: string;
  amount: string;
  value: string;
  offers: number;
}

function getBook(arr: IOrderbookItems[]) {
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
    bids: [] as IBook[],
    asks: [] as IBook[],
  }),
  actions: {
    async getOrderbook(pair: string, limit: 10 | 50 | 100 = 10) {
      const response = await zondaAPI.getOrderbook("BTC-PLN", limit);
      this.bids = getBook(response.buy);
      this.asks = getBook(response.sell);
    },
  },
});
