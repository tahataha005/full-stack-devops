import { Schema, Types } from "mongoose";
import { Transaction } from "../../types/Transaction";
import CurrencyModel from "../models/currency.model";

const transactionSchema = new Schema<Transaction>({
  amount: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  date: {
    type: Date,
    required: true,
  },
  type: {
    type: String,
    enum: ["expense", "income"],
    required: true,
  },
  currency: {
    type: Types.ObjectId,
    ref: CurrencyModel,
  },
});

export default transactionSchema;
