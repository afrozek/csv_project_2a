var mongoose = require('mongoose');

var enrollmentSchema = new mongoose.Schema({
    enrollmentData: Array
  });

//var School = mongoose.model('School', schoolSchema);

module.exports = mongoose.model('enrollmentModel', enrollmentSchema);

