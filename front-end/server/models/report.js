var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ReportSchema = new Schema({
	name	: String,
	issuer	: String, 
});

module.exports = mongoose.model('Report', ReportSchema);