export type OrderbookTypes = ["bids", "asks"];
export interface OrderbookTableRow {
  rate: string;
  amount: string;
  value: string;
  offers: number;
}
