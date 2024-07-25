import { Transaction } from "./Transaction";

export type User = {
  name: string;
  email: string;
  password: string;
  transactions: Transaction[];
};
