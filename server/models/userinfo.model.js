const mongoose = require('mongoose')

const userinfoSchema = new mongoose.Schema({
  name: String,
  surname:String,
  age:Number
});

const userinfoModel = mongoose.model('userinfo', userinfoSchema);


module.exports = userinfoModel