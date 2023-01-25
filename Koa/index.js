import koaBodyParser from 'koa-bodyparser';
import Koa from 'koa';
import { router } from './routes/routes.js';

const app = new Koa();
const port = 3000;

//Routers Middlewares
app.use(koaBodyParser()).use(router.routes()).use(router.allowedMethods());
app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
