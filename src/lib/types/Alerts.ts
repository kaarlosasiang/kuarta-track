export interface Alert {
  id: number; // bigint
  user_id: string; // uuid
  symbol: string;
  target_price: number;
  type: string;
  notified: boolean;
  created_at: string; // ISO timestamp
}