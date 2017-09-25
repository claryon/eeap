var mongoose = require("mongoose")

module.exports = mongoose.model('Search', {
	    name : {type : String, default: ''}
});
