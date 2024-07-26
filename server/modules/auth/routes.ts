import Elysia from "elysia";
import { login, register } from ".";

const authApp = new Elysia({ prefix: "/auth" })
  .post("/register", register)
  .post("/login", login);

export default authApp;
