const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
    email:{
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        default: false
    },
    tokenToActive: String,
    roles: {
	    type:[String],
	    enum:['CREATOR', 'CLIENT'],
	    default:'CLIENT'
    },
    reviews:{
        type:[Schema.Types.ObjectId],
        ref: 'Review'
    },
    firstName:{
        type: String,
        required: true,
        default:'Nombre de Contacto'
    },
    lastName:{
        type: String,
        required: true,
        default:'Codigo QR'
    },
    phoneNumber:{
      type: String,
      required: true,
      default:'Aqui va tu telefono'
  },
    country:{
      type:String,
      required:true
    },
    collections:{
      type:[Schema.Types.ObjectId],
      ref:'Collection'
    },
    products:{
        type:[Schema.Types.ObjectId],
        ref:'Product'
    },
    clients:{
        type:[Schema.Types.ObjectId],
        ref:'User'
    },
    reviews:{
      type:Schema.Types.ObjectId,
      ref:'Review',
    },
        //Aqui va la calificacion total del user calificado
    userTotalReview:{
    type:Number
  },
},{
    timestamps:{
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

userSchema.plugin(passportLocalMongoose, {usernameField:'email'})

module.exports = mongoose.model('User', userSchema);
