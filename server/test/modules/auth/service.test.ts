import { genSalt, hash } from "bcrypt";
import { sign } from "jsonwebtoken";
import { hashPassword, generateToken } from "../../../modules/auth/service";
import { User } from "../../../core/types/User";
import { Types } from "mongoose";

jest.mock("bcrypt");
jest.mock("jsonwebtoken");

describe("authUtils", () => {
  describe("hashPassword", () => {
    it("should hash the password correctly", async () => {
      const password = "plainPassword";
      const saltRounds = "salt";
      const hashedPassword = "hashedPassword";

      (genSalt as jest.Mock).mockResolvedValue(saltRounds);
      (hash as jest.Mock).mockResolvedValue(hashedPassword);

      const result = await hashPassword(password);

      expect(genSalt).toHaveBeenCalledWith(10);
      expect(hash).toHaveBeenCalledWith(password, saltRounds);
      expect(result).toBe(hashedPassword);
    });
  });

  describe("generateToken", () => {
    it("should generate a JWT token correctly", () => {
      const user: User = {
        _id: new Types.ObjectId("507f191e810c19729de860ea"),
        name: "User",
        email: "user@example.com",
        password: "hashedPassword",
        transactions: [],
      };

      const token = "jwtToken";

      (sign as jest.Mock).mockReturnValue(token);

      const result = generateToken(user);

      expect(sign).toHaveBeenCalledWith(
        { _id: user._id, email: user.email },
        "secret",
        {
          expiresIn: "1h",
        }
      );
      expect(result).toBe(token);
    });
  });
});
