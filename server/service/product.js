const mongoose = require('mongoose')
const Product = mongoose.model('Product')

export const getAllProducts = async () => {
  const products = await Product.find({}).sort({
    'meta.createdAt': -1
  })
  return products
}

export const getDetailProducts = async (id) => {
  const products = await Product.findOne({_id: id})
  return products
}