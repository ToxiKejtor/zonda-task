export interface IOrderbookItems {
  ra: string;
  ca: string;
  sa: string;
  pa: string;
  co: number;
}

export interface IOrderbookResponse {
  status: string;
  sell: IOrderbookItems[];
  buy: IOrderbookItems[];
  timestamp: string;
  seqNo: string;
}
