const Router = require('koa-router')
const mongoose = require('mongoose')

const router = new Router()

router.get('/index/banner', async(ctx, next) => {
  ctx.body = {
    code: 200,
    message: '成功',
    data: [
      {
        url: 'https://yanxuan.nosdn.127.net/2ac89fb96fe24a2b69cae74a571244cb.jpg?watermark&type=1&gravity=northwest&dx=0&dy=0&image=Y2U5MTg5YmQ0NzY0NGE5ODYwMDUxZTNhYjFkNDM0M2QucG5n|imageView&quality=75&thumbnail=750x0',
        id: 1
      },
      {
        url: 'https://yanxuan.nosdn.127.net/a9e80a3516c99ce550c7b5574973c22f.jpg?watermark&type=1&gravity=northwest&dx=0&dy=0&image=Y2U5MTg5YmQ0NzY0NGE5ODYwMDUxZTNhYjFkNDM0M2QucG5n|imageView&quality=75&thumbnail=750x0',
        id: 2
      },
      {
        url: 'https://yanxuan.nosdn.127.net/b9697a8725f0c2d274bbfa85bde91885.jpg?watermark&type=1&gravity=northwest&dx=0&dy=0&image=Y2U5MTg5YmQ0NzY0NGE5ODYwMDUxZTNhYjFkNDM0M2QucG5n|imageView&quality=75&thumbnail=750x0',
        id: 3
      }
    ]
  }
})

router.get('/product/all', async(ctx, next) => {
  const Product = mongoose.model('Product')
  const products = await Product.find({}).sort({
    'meta.createdAt': -1
  })

  ctx.body = {
    products
  }
})

router.get('/product/:id', async(ctx, next) => {
  const Product = mongoose.model('Product')
  const id = ctx.params.id
  const products = await Product.findOne({_id: id})

  ctx.body = {
    products
  }
})

module.exports = router