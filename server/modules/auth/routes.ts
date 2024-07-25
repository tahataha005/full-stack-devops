import Elysia from "elysia";
import { register } from "./controller";

const authApp = new Elysia().post("/register", register);

export default authApp;
