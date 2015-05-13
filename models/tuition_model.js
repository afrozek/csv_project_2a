var mongoose = require('mongoose');

var tuitionSchema = new mongoose.Schema({
    tuitionData: Array
  });

//var School = mongoose.model('School', schoolSchema);

module.exports = mongoose.model('tuitionModel', tuitionSchema);

