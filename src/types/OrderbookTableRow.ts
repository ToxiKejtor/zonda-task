export type OrderbookTypes = ["bids", "asks"];
export interface OrderbookTableRow {
  rate: number;
  amount: number;
  value: number;
  offers: number;
}
