const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  fullname : {
    type : String,
    required : true
  },
  username : {
    type : String,
    required : true,
    unique : true
  },
  password : {
    type : String,
    required : true
  },
  email : {
    type : String,
    validate : {
      validator : function(email_validator){
        return /^[a-zA-Z0-9.!#$%&’*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email_validator)
      },
      message : '{VALUE} is not a valid mail format, use: example@mail.com'
    }
  },
  create_at : {
    type : Date,
    default : Date.now
  },
  via : String,
  admin : {
    type : Boolean,
    default : false
  }
})

const userModels = mongoose.model('Users', userSchema)
module.exports = userModels
