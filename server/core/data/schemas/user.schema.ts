import { Schema } from "mongoose";
import { User } from "../../types/User";
import transactionSchema from "./transaction.schema";

const userSchema = new Schema<User>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  transactions: [transactionSchema],
});

export default userSchema;
