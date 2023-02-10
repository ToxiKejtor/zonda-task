interface First {
  currency: string;
  minOffer: string;
  scale: number;
}

interface Second {
  currency: string;
  minOffer: string;
  scale: number;
}

interface Market {
  code: string;
  first: First;
  second: Second;
  amountPrecision: number;
  pricePrecision: number;
  ratePrecision: number;
}

interface Item {
  market: Market;
  time: string;
  highestBid: string;
  lowestAsk: string;
  rate: string;
  previousRate: string;
}

export interface TickersResponse {
  status: string;
  items: Item[];
}
