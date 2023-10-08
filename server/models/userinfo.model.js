const mongoose = require('mongoose')

const userinfoSchema = new mongoose.Schema({
  userInfo:String
});

const userinfoModel = mongoose.model('userinfo', userinfoSchema);


module.exports = userinfoModel