const mongoose = require('mongoose')

const typeSchema = new mongoose.Schema({
  type: String
});

const typeModel = mongoose.model('type', typeSchema);


module.exports = typeModel