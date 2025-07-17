export interface Transaction {
  symbol: string;
  user_id?: string | null; // uuid, nullable
  asset_id: string; // uuid
  type: string;
  quantity: number;
  price_per_unit: number;
  transaction_date: string; // ISO date string
  created_at: string; // ISO timestamp
}