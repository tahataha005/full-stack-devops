import Elysia from "elysia";
import authApp from "./modules/auth";
import { config } from "dotenv";
import { connectToDatabase } from "./core/config/db/connection";

config({
  path: "./core/config/environment/env/.env",
});

new Elysia().use(authApp).listen(8080, () => {
  console.log("Server is running on port 8080");

  connectToDatabase();
});
