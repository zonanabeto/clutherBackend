const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema ({
  writer:{
    type:Schema.Types.ObjectId,
    ref:'User',
  },
  product: {
    type:Schema.Types.ObjectId,
    ref:'Product'
  },
  collection: {
    type:Schema.Types.ObjectId,
    ref:'Collection'
  },
  creator: {
    type:Schema.Types.ObjectId,
    ref:'User'
  },
  r1:{
    type:Number,
    required:true
  },
  r2:{
    type:Number,
    required:true
  },
  r3:{
    type:Number,
    required:true
  },
  //Promedio de los diferentes puntos a calificar
  rTotal:{
    type:Number,
    required:true
  },
  description:{
    type:String
  },
  recommend:{
    type:Boolean,
    required:true,
  }
},{
  timestamps:{
    createdAt: 'created_at',
    updatedAt: 'updated_at'
}
})

module.exports = mongoose.model('Review', reviewSchema);