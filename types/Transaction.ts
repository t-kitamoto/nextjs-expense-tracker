export interface Transaction {
  id: string;
  text: string;
  amount: number;
  userId: string | null;
  createdAt: Date;
}
