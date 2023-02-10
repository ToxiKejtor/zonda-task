import { APISettings } from "@/api/config";
import type { TickersResponse } from "@/types/TickersResponse";
import type { OrderbookResponse } from "@/types/OrderbookResponse";
import { defaultPair } from "@/stores/useCurrencyPairs";

export default {
  async getTickers(): Promise<TickersResponse> {
    return await fetch(`${APISettings.baseURL}/ticker`, {
      method: "GET",
      headers: APISettings.headers,
    }).then((response) => response.json());
  },
  async getOrderbook(pair: string, limit: number): Promise<OrderbookResponse> {
    return await fetch(
      `${APISettings.baseURL}/orderbook-limited/${pair}/${limit}`,
      {
        method: "GET",
        headers: APISettings.headers,
      }
    ).then((response) => response.json());
  },
};
