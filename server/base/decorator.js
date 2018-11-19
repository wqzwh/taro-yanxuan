import { resolve } from 'path'
import KoaRouter from 'koa-router'
import glob from 'glob'
import _ from 'lodash'

const pathPrefix = Symbol('pathPrefix')
const routerMap = []

// koa-router装饰器router类
export class Router {
  constructor (app, routersPath) {
    this.app = app
    this.router = new KoaRouter()
    this.routersPath = routersPath
  }

  init() {
    const { app, routersPath, router } = this

    // glob.sync(resolve(routersPath, './*.js')).forEach(require)
    require('../routers/product')
    require('../routers/banner')

    for(let v of routerMap) {
      router[v.method](v.target[pathPrefix] + v.path, v.callback)
    }

    app.use(router.routes())
    app.use(router.allowedMethods())
  }
}

// 定义共同前缀装饰器
export const PathPrefix = path => target => (target.prototype[pathPrefix] = path)

// 定义路由请求方法装饰器
export const setRouter = method => path => (target, key, descriptor) => {
  routerMap.push({
    target,
    method,
    path: path.startsWith('/') ? path : `/${path}`,
    callback: target[key]
  })
  return descriptor
}

export const Get = setRouter('get')

export const Post = setRouter('post')

export const Put = setRouter('put')

export const Delete = setRouter('delete')