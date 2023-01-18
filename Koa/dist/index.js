"use strict";

var _koa = _interopRequireDefault(require("koa"));
var _koaRouter = _interopRequireDefault(require("koa-router"));
var _koaJson = _interopRequireDefault(require("koa-json"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var app = new _koa["default"]();
var port = 3000;
var router = new _koaRouter["default"]();
router.get('/route', function (ctx) {
  ctx.body = 'On route!';
});
router.get('/', function (ctx) {
  ctx.body = {
    msg: 'Hello World'
  };
});
// app.use(ctx => {
//   ctx.body = 'Hello World';
// });

//Routers Middlewares
app.use(router.routes()).use(router.allowedMethods());
app.use((0, _koaJson["default"])());
app.listen(port, function () {
  console.log("Listening on ".concat(port));
});