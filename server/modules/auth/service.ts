import { genSalt, hash } from "bcrypt";

export const hashPassword = async (password: string) => {
  const saltRounds = await genSalt(10);

  const hashed = await hash(password, saltRounds);

  return hashed;
};
