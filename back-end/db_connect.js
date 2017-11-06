const mongoose = require('mongoose');
const config   = require('config');

var db_host = config.get("database.host");
var db_name = config.get("database.name");
var db_user = config.get("database.user");
var db_pass = config.get("database.pass");
if (db_user == "") {
    var mongo_url = 'mongodb://'+db_host+'/'+db_name;
} else {
    var mongo_url = 'mongodb://'+db_user+':'+db_pass+'@'+db_host+'/'+db_name;
}

mongoose.Promise = global.Promise;

global.db = mongoose.connect(mongo_url, {useMongoClient: true}).catch(function(error) {});


mongoose.connection.on('error', function(err) {
	console.log('Error connecting to database, trying again in 3 seconds... ');
	setTimeout(function() {
		global.db = mongoose.connect(mongo_url, {useMongoClient: true}).catch(function(error) {});
	}, 3000);
});


mongoose.connection.on('connected', function() {
	console.log('Connection to mongo database established');
});


process.on('SIGINT', function() {
	mongoose.connection.close(function() {
		console.log('Database connection closed through app termination.');
		process.exit(0);
	})
})
