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