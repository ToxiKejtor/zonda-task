interface Sell {
  ra: string;
  ca: string;
  sa: string;
  pa: string;
  co: number;
}

interface Buy {
  ra: string;
  ca: string;
  sa: string;
  pa: string;
  co: number;
}

export interface IOrderbookResponse {
  status: string;
  sell: Sell[];
  buy: Buy[];
  timestamp: string;
  seqNo: string;
}
