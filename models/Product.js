const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema ({
  name:{
    type:String,
    required:true,
  },
  collection:{
    type:Schema.Types.ObjectId,
    ref:'Collection',
  },
  creator:{
    type:Schema.Types.ObjectId,
    required:'User',
  },
  category:{
    type:String,
    required:true,
  },
  subcategory:{
    type:String,
    required:true,
  },
  price:{
    type:Number,
    required:true
  },
  sizes:{
    type:[String]
  },
  colors:{
    type:[String]
  },
  images:{
    type:[String],
    required:true,
  },
  shortDescription:{
    type:String,
    required:true,
  },
  largeDescription:{
    type:String,
  },
  //Dudas de si aqui podemos crear otro esquema para que se puedan ir creando
  tags:{
    type:[String],
  },
  fit:{
    type:String
  },
  fabric:{
    type:String,
  },
  finish:{
    type:String,
  },
  madeIn:{
    type:String,
  },
  fitGuide:{
    type:String,
  },
  estimatedShipping:{
    type:Date,
  },
  minimumQuantity:{
    type:Number,
    required:true,
  },
  itemsSold:{
    type:Number,
    required:true
  },
  daysLeft:{
    type:Number,
    default:25
  },
  founded:{
    type:Boolean,
    default:false
  },
  reviews:{
    type:[Schema.Types.ObjectId],
    ref:'Review'
  },
  //Aqui va la calificacion total del producto calificado
  productTotalReview:{
    type:Number
  },
},{
  timestamps:{
    createdAt: 'created_at',
    updatedAt: 'updated_at'
    } 
})

module.exports = mongoose.model('Product', productSchema);