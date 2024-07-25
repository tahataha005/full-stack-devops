import Elysia from "elysia";

const app = new Elysia();

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
