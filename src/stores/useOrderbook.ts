import { defineStore } from "pinia";
import zondaAPI from "@/api/resources/zondaAPI";

interface IBid {
  ra: string;
  ca: string;
  sa: string;
  pa: string;
  co: number;
}

interface IAsk {
  ra: string;
  ca: string;
  sa: string;
  pa: string;
  co: number;
}

export const useOrderbook = defineStore("useOrderbook", {
  state: () => ({
    bids: [] as IBid[],
    asks: [] as IAsk[],
  }),
  actions: {
    async getOrderbook() {
      const response = await zondaAPI.getOrderbook("BTC-PLN");
      this.bids = response.buy;
      this.asks = response.sell;
    },
  },
});
