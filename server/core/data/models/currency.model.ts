import { model } from "mongoose";
import currencySchema from "../schemas/currency.schema";
import { Currency } from "../../types/Currency";

const CurrencyModel = model<Currency>("Currency", currencySchema);

export default CurrencyModel;
