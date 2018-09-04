const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const collectionSchema = new Schema ({
  name:{
    type:String,
    required:true,
  },
  description:{
    type:String
  },
  products:{
    type:[Schema.Types.ObjectId],
    ref:'Product'
  },
  reviews:{
    type:Schema.Types.ObjectId,
    ref:'Review',
  },
    //Aqui va la calificacion total de la collection calificada
  collectionTotalReview:{
      type:Number
    },
},{
  timestamps:{
    createdAt: 'created_at',
    updatedAt: 'updated_at'
    } 
});

module.exports = mongoose.model('Collection', collectionSchema);