import { APISettings } from "@/api/config";
import type { ITickersResponse } from "@/api/types/ITickersResponse";
import type { IOrderbookResponse } from "@/api/types/IOrderbookResponse";

export default {
  async getTickers(): Promise<ITickersResponse> {
    return await fetch(`${APISettings.baseURL}/ticker`, {
      method: "GET",
      headers: APISettings.headers,
    }).then((response) => response.json());
  },
  async getOrderbook(
    pair: string = "BTC-PLN",
    limit: number = 10
  ): Promise<IOrderbookResponse> {
    return await fetch(
      `${APISettings.baseURL}/orderbook-limited/${pair}/${limit}`,
      {
        method: "GET",
        headers: APISettings.headers,
      }
    ).then((response) => response.json());
  },
};
