import Koa from "koa";
import bodyParser from "koa-bodyparser";
import { router } from "./routes/userRoutes";
const app = new Koa();

app.use(bodyParser());

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});

export default app;
