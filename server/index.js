const Koa = require('koa')
const router = require('./routers/index')
const { connect } = require('./database/init')


;(async () => {
  await connect()
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