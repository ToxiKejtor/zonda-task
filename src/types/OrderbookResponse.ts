export interface OrderbookItems {
  ra: string;
  ca: string;
  sa: string;
  pa: string;
  co: number;
}

export interface OrderbookResponse {
  status: string;
  sell: OrderbookItems[];
  buy: OrderbookItems[];
  timestamp: string;
  seqNo: string;
}
