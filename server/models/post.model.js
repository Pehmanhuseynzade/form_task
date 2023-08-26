const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
  // selectType: String,
  // selectOption:String,
  // selectOption2:String
  type: String,
  companyname: String,
  companycategory:String,
  name: String,
  surname:String,
  age:Number
});

const postModel = mongoose.model('post', postSchema);


module.exports = postModel