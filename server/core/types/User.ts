import { Types } from "mongoose";
import { Transaction } from "./Transaction";

export type User = {
  _id: Types.ObjectId;
  name: string;
  email: string;
  password: string;
  transactions: Transaction[];
};
