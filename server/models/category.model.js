const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
  companyname: String,
  companycategory:String
});

const categoryModel = mongoose.model('categoryy', categorySchema);


module.exports = categoryModel