### 学习微信小程序和体验造轮子的乐趣

### 计划实现页面

- [ ] 首页
- [ ] 频道页面（选取一个即可）
- [ ] 识物
- [ ] 分类
- [ ] 购物车
- [ ] 个人信息
- [ ] 商品列表
- [ ] 商品详情
- [ ] 用户评论
- [ ] 新人专享列表
- [ ] 搜索页面

### 计划实现功能及组件

- [ ] 首页顶部搜索组件
- [ ] 首页顶部分类组件
- [ ] 首页顶部轮播组件
- [ ] 首页商品滑屏组件
- [ ] 首页倒计时组件

- [ ] 识物顶部轮播组件
- [ ] 识物列表展示组件（左右布局，上下布局）

- [ ] 商品详情头图轮播展示，可预览组件
- [ ] 回到顶部组件
- [ ] 购物车相关组件

### 后端服务使用koa2搭建

使用装饰器特性重新改写`koa-router`的基本用法，将路由层和数据处理层分开编写，进一步进行解耦。

基本文件分类如下：

* `server/database` 连接数据相关操作，创建数据模型等
* `server/crawler` 抓取数据脚本相关子任务文件
* `server/task` 抓取数据脚本相关主任务文件，以及存储进`mongodb`数据库基本操作
* `server/base/decorator` 路由装饰器封装类
* `server/service` 根据路由处理业务逻辑相关代码
* `server/routers` 路由汇总入口文件

### puppeteer爬取基本数据

基本使用示例如下，具体api可以参考[官方文档](https://github.com/GoogleChrome/puppeteer)：

```js
const puppeteer = require('puppeteer')
const homeUrl = 'http://m.you.163.com/search?keyword=%E5%A5%B3%E8%A3%85&_stat_search=autoComplete'

const sleep = time => new Promise(reslove => {
  setTimeout(reslove, time)
})

!(async ()=> {
  console.log('开始爬取')
  const browser = await puppeteer.launch({
    args: ['--no-sandbox'],
    dumpio: false
  })

  const page = await browser.newPage()
  await page.goto(homeUrl, {
    waitUntil: 'networkidle2',
  })

  await sleep(10000)

  const result = await page.evaluate(() => {
    const $ = window.$
    const items = $('.list .item')
    let links = []

    if(items.length >= 1) {
      items.each((index, item) => {
        let it = $(item)
        let tmpId = it.find('.good').data('reactid')
        let id = tmpId.split(':$')[1].split('.0.0')[0]
        let title = it.find('.name span').text()
        let desc = it.find('.newItemDesc').text()
        let price = it.find('.price span span').last().text()
        let imgUrl = it.find('img.swiper-lazy').data('src')
        links.push({
          id,
          title,
          // desc,
          price,
          imgUrl
        })
      })
    }
    return links
  })
  browser.close()
  console.log(result)
})()
```

### mongodb存储数据

定义`Schema`，创建`model`，具体基本使用如下，具体api可以参考[官方文档](https://github.com/Automattic/mongoose)：

```js
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Mixed = Schema.Types.Mixed

const productSchema = new Schema({
  id: String,
  title: String,
  price: Number,
  imgUrl: String,
  tags: Mixed
})

mongoose.model('Product', productSchema)
```
