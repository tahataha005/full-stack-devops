import { genSalt, hash } from "bcrypt";
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
