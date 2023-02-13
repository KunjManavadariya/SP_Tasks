import Koa from "koa";
import bodyParser from "koa-bodyparser";
import { router } from "./routes/userRoutes";
const { conn, client } = require("./db");
const app = new Koa();

app.use(bodyParser()).use(router.routes()).use(router.allowedMethods());

conn();

client
  .db("ideaboard")
  .then(() => {
    console.log("Database Connected!");
    app.listen(3000, () => {
      console.log("Server running on http://localhost:3000");
    });
  })
  .catch((err) => {
    console.log(err);
  });
