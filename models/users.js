var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name:{
    type: String,
    required: true
  },
  number:{
    type: String,
    required: true
  },
  total:{
    type:Number,
    default:0
  },
  products: [],
  date: Date
})

var User = mongoose.model('User',userSchema);
module.exports = User;
