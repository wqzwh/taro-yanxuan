const mongoose = require('mongoose')

export const getAllProducts = async () => {
  const Product = mongoose.model('Product')
  const products = await Product.find({}).sort({
    'meta.createdAt': -1
  })
  return products
}

export const getDetailProducts = async (id) => {
  const Product = mongoose.model('Product')
  const products = await Product.findOne({_id: id})
  return products
}