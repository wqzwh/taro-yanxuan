const Koa = require('koa')
// const router = require('./routers/product')
const { resolve } = require('path')
const { connect, initSchemas } = require('./database/init')
import { Router } from './base/decorator'

;(async () => {
  await connect({ useNewUrlParser: true })
  initSchemas()

  // require('./task/task-list')
})()

const app = new Koa()

const router = (app) => {
  const routesPath = resolve(__dirname, '../routes')
  const instance = new Router(app, routesPath)

  instance.init()
}

router(app)

app.listen(3000, () => {
  console.log('server start port 3000')
})