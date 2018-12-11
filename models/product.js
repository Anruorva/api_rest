'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema


const ProductSchema = Schema({
  name: String,
  photo: String,
  price: {type:Number,defaults: 0},
  category: {type:String , enum: ['computers','phones','accesories']},
  description:String
})

 module.exports = mongoose.model('Product',ProductSchema)
