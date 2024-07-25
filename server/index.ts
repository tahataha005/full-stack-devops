import Elysia from "elysia";
import authApp from "./modules/auth";

new Elysia().use(authApp).listen(8080, () => {
  console.log("Server is running on port 8080");
});
