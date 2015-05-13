var mongoose = require('mongoose');

var genderSchema = new mongoose.Schema({
    collegeName	: String,
    genderData: Array
  });

//var School = mongoose.model('School', schoolSchema);

module.exports = mongoose.model('genderModel', genderSchema);