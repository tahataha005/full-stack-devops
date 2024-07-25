import userModel from "../../core/data/models/user.model";
import { RegisterDto } from "./dtos/register.dto";
import { methodCreator } from "../../core/settings/controllers/methodCreator";
import { throwBadRequest } from "../../core/settings/errors/throw.error";
import { generateToken, hashPassword } from ".";

export const register = methodCreator<RegisterDto>(async (ctx) => {
  const { name, email, password } = ctx.body;

  const exists = await userModel.findOne({ email });

  throwBadRequest({
    check: exists !== null,
    message: "User already exists",
  });

  const hashedPassword = await hashPassword(password);

  const user = await userModel.create({
    name,
    email,
    password: hashedPassword,
  });

  const token = generateToken(user);

  const { password: _, ...userWithoutPassword } = user;

  return { user: userWithoutPassword, token };
});
