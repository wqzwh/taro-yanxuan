const mongoose = require('mongoose')
import { PathPrefix, Get } from '../base/decorator'

@PathPrefix('/api/product')
export default class ProductRouter {
  @Get('/all')
  async getAllProducts(ctx, next) {
    const Product = mongoose.model('Product')
    const products = await Product.find({}).sort({
      'meta.createdAt': -1
    })

    ctx.body = {
      code: 200,
      message: '成功',
      data: products
    }
  }

  @Get('/detail/:id')
  async getDetailProducts(ctx, next) {
    const Product = mongoose.model('Product')
    const id = ctx.params.id
    const products = await Product.findOne({_id: id})

    ctx.body = {
      code: 200,
      message: '成功',
      data: products
    }
  }
}