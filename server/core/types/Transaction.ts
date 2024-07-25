import { Currency } from "./Currency";
import { TransactionType } from "./TransactionType";

export type Transaction = {
  amount: number;
  description: string;
  date: Date;
  type: TransactionType;
  currency: Currency;
};
