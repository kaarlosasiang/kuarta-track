export interface PriceCache {
  symbol: string;
  type?: string | null;
  price: number;
  updated_at: string; // ISO timestamp
}