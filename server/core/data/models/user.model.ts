import { model } from "mongoose";
import { User } from "../../types/User";
import userSchema from "../schemas/user.schema";

const userModel = model<User>("User", userSchema);

export default userModel;
