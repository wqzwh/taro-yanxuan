
const puppeteer = require('puppeteer')

const homeUrl = `http://m.you.163.com/item/detail?id=`
const detailId = 1662033

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
  await page.goto(homeUrl + detailId, {
    waitUntil: 'networkidle2',
  })

  await sleep(1000)

  const sufaceImgs = await page.evaluate(() => {
    const $ = window.$
    const items = $('.m-detail-con .swiper-slide').find('img')
    let imgs = []

    if(items.length >= 1) {
      items.each((index, item) => {
        let it = $(item)
        let imgUrl = it.attr('src')
        imgs.push(imgUrl)
      })
    }
    return imgs
  })

  const attrList = await page.evaluate(() => {
    const $ = window.$
    const items = $('.m-itemDetail .attrList').find('.item')
    let lists = []

    if(items.length >= 1) {
      items.each((index, item) => {
        let it = $(item)
        let left = it.find('.left').text()
        let right = it.find('.right .con').text()
        lists.push({
          left,
          right
        })
      })
    }
    return lists
  })

  const result = {
    sufaceImgs,
    attrList
  }

  browser.close()
  process.send({result})
  process.exit(0)
})()

