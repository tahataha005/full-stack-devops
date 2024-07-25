import { Schema } from "mongoose";
import { Currency } from "../../types/Currency";

const currencySchema = new Schema<Currency>({
  name: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  symbol: {
    type: String,
    required: true,
  },
  exchangeRateUS: {
    type: Number,
    required: true,
  },
});

export default currencySchema;
