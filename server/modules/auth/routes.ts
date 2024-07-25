import Elysia from "elysia";
import { register } from ".";

const authApp = new Elysia({ prefix: "/auth" }).post("/register", register);

export default authApp;
