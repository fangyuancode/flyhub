const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const errorHandler = require('./error-handle');
const useRoutes = require('../router');

const app = new Koa();


app.useRoutes = useRoutes;

app.use(bodyParser());
app.useRoutes();//会做this的隐式绑定，注册中间件，动态加载路由。
app.on('error', errorHandler);

module.exports = app;


