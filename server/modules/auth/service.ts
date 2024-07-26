import { compare, genSalt, hash } from "bcrypt";
import { sign } from "jsonwebtoken";
import { User } from "../../core/types/User";

export const hashPassword = async (password: string) => {
  const saltRounds = await genSalt(10);

  const hashed = await hash(password, saltRounds);

  return hashed;
};

export const generateToken = (user: User) => {
  const { _id, email } = user;

  const token = sign({ _id, email }, "secret", {
    expiresIn: "1h",
  });

  return token;
};

export const comparePassword = async (
  password: string,
  hashedPassword: string
) => {
  const isPasswordValid = await compare(password, hashedPassword);

  return isPasswordValid;
};
