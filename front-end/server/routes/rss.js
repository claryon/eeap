const express = require('express');
const router = express.Router();
const xmlify = require('xmlify');
const config = require('config');

//TEST
const mongoose = require('mongoose');
var db_host = config.get("database.host");
var db_name = config.get("database.name");
var db_user = config.get("database.user");
var db_pass = config.get("database.pass");
if (db_user == "") {
    var mongo_url = 'mongodb://'+db_host+'/'+db_name;
} else {
    var mongo_url = 'mongodb://'+db_user+':'+db_pass+'@'+db_host+'/'+db_name;
}

var Report = require('../models/report');

mongoose.Promise = global.Promise;
var db = mongoose.connect(mongo_url, {
  useMongoClient: true,
});

db.on('error', console.error.bind(console, 'MongoDB connection error: '));


// Get reports
router.get('/rss', (req, res) => {
    Report.find().sort({'timestamp.submission': 'desc'}).limit(100).exec(function(err, reports) {
        res.set('Content-Type', 'text/xml');
        if (err) res.send(xml('<error>'+err+'</error>'));

        if (!reports.length) {
            var xml = "<reports/>";
        } else {
            var xml = xmlify(reports, { root: 'reports', xmlDeclaration: false});
            xml = xml.substring(9, xml.length - 10);
            xml = xml.replace(/ id=\"([0-9a-f])*\" _v=\"0\"/g,''); // remove collection id and version from mongodb output
        }


   		  var meta = '<?xml version="1.0" encoding="UTF-8" ?>'
   		  var start = '<rss version="2.0"><channel><title>EEAP reports RSS feed</title><link>http://www.eeapnode.com</link><description>An RSS feed that provides recently published reports</description>';
   		  var end = '</channel></rss>';

        res.send(meta+start+xml+end);     	
    });

});

module.exports = router;
