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
  process.send({result})
  process.exit(0)
})()

