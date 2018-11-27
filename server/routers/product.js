import { PathPrefix, Get } from '../base/decorator'
import { getAllProducts, getDetailProducts } from '../service/product'

@PathPrefix('/api/product')
export default class ProductRouter {
  @Get('/all')
  async getAllProducts(ctx, next) {
    const products = await getAllProducts()

    ctx.body = {
      code: 200,
      message: '成功',
      data: products
    }
  }

  @Get('/detail/:id')
  async getDetailProducts(ctx, next) {
    const id = ctx.params.id
    const products = await getDetailProducts(id)

    ctx.body = {
      code: 200,
      message: '成功',
      data: products
    }
  }
}