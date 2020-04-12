const Koa = require('koa');
const KoaRouter = require('koa-router');
const path = require('path');
const app = new Koa();
const bodyParser = require('koa-bodyparser')
const static = require('koa-static')
const views = require('koa-views')
var router = new KoaRouter();
app.use(bodyParser())
// 加载模板引擎
app.use(views(path.join(__dirname, './view'), {
    extension: 'ejs'
}))
// 静态资源目录对于相对入口文件index.js的路径
const staticPath = './static'

app.use(static(
    path.join(__dirname, staticPath)
))
router.get('/get/1', async (ctx, next) => {
    const { callback: callbackName } = ctx.query;
    if (callbackName) {
        ctx.body = `${callbackName}(${JSON.stringify(ctx.query)})`;
        ctx.type = 'text/javascript';
    } else {
        ctx.body = ctx.query
    }
});
router.get('/', async (ctx, next) => {
    let title = 'hello koa2'
    await ctx.render('index', {
        title,
    })
});
router.post('/post/1', async (ctx, next) => {
    ctx.body = ctx.request.body;
});


app.use(router.routes()).listen(3001);