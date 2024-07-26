import userModel from "../../core/data/models/user.model";
import { RegisterDto } from "./dtos/register.dto";
import { methodCreator } from "../../core/settings/controllers/methodCreator";
import {
  throwBadRequest,
  throwInternalServerError,
} from "../../core/settings/errors/throw.error";
import { comparePassword, generateToken, hashPassword } from ".";
import { ReqContext } from "../../core/settings/types/Context";
import { error } from "elysia";

export const register = async (ctx: ReqContext<RegisterDto>) => {
  const { name, email, password } = ctx.body;

  const exists = await userModel.findOne({ email });

  if (exists) {
    throw error(400, "user already exists");
  }

  const hashedPassword = await hashPassword(password);

  const user = await userModel.create({
    name,
    email,
    password: hashedPassword,
  });

  const token = generateToken(user);

  return { user, token };
};

export const login = async (ctx: ReqContext<RegisterDto>) => {
  const { email, password } = ctx.body;

  const user = await userModel.findOne({ email }).select("+password");

  if (!user) {
    throw error(404, "User not found");
  }

  const isPasswordValid = await comparePassword(password, user!.password);

  if (!isPasswordValid) {
    throw error(400, "Invalid credentials");
  }

  const token = generateToken(user!);

  return { user, token };
};
