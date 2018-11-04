const Koa = require('koa')
const router = require('./routers/index')
const { connect, initSchemas } = require('./database/init')


;(async () => {
  await connect({ useNewUrlParser: true })
  initSchemas()

  require('./task/task-list')
})()

const app = new Koa()

app
  .use(router.routes())
  .use(router.allowedMethods())

app.use(async (ctx, next) => {
  ctx.body = '123'
})

app.listen(3000, () => {
  console.log('server start port 3000')
})