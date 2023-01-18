import Koa from 'koa';
import koaRouter from 'koa-router';
import json from 'koa-json';
const app = new Koa();
const port = 3000;
const router = new koaRouter();

router.get('/route', ctx => {
  ctx.body = 'On route!';
});
router.get('/', ctx => {
  ctx.body = { msg: 'Hello World' };
});
// app.use(ctx => {
//   ctx.body = 'Hello World';
// });

//Routers Middlewares
app.use(router.routes()).use(router.allowedMethods());
app.use(json());
app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
