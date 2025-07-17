export interface Asset {
  id: string; // uuid
  user_id: string; // uuid
  symbol: string;
  name: string;
  quantity: number;
  average_buy_price: number;
  notes?: string | null;
  created_at: string; // ISO timestamp
}