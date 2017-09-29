const express = require('express');
const router = express.Router();
const ObjectID = require('mongodb').ObjectID;
const xmlify = require('xmlify');

//TEST
const mongoose = require('mongoose');
var mongoDB = 'mongodb://localhost/eeap';
mongoose.connect(mongoDB, {
    useMongoClient: true
})
var Report = require('../models/report');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error: '));

function json2xml(o, tab) {
   var toXml = function(v, name, ind) {
      var xml = "";
      if (v instanceof Array) {
         for (var i=0, n=v.length; i<n; i++)
            xml += ind + toXml(v[i], name, ind+"\t") + "\n";
      }
      else if (typeof(v) == "object") {
         var hasChild = false;
         xml += ind + "<" + name;
         for (var m in v) {
            if (m.charAt(0) == "@")
               xml += " " + m.substr(1) + "=\"" + v[m].toString() + "\"";
            else
               hasChild = true;
         }
         xml += hasChild ? ">" : "/>";
         if (hasChild) {
            for (var m in v) {
               if (m == "#text")
                  xml += v[m];
               else if (m == "#cdata")
                  xml += "<![CDATA[" + v[m] + "]]>";
               else if (m.charAt(0) != "@")
                  xml += toXml(v[m], m, ind+"\t");
            }
            xml += (xml.charAt(xml.length-1)=="\n"?ind:"") + "</" + name + ">";
         }
      }
      else {
      	console.log("Parsing name, v: " + name + "," +v);
         xml += ind + "<" + name + ">" + v.toString() +  "</" + name + ">";
      }
      return xml;
   }, xml="";
   for (var m in o)
      xml += toXml(o[m], m, "");
   return tab ? xml.replace(/\t/g, tab) : xml.replace(/\t|\n/g, "");
}


// Get reports
router.get('/rss', (req, res) => {
	Report.find().exec(function(err, reports) {
        res.set('Content-Type', 'text/xml');
        if (err) res.send(xml('<error>'+err+'</error>'));
        var xml = xmlify(reports, 'reports');
   		console.log(xml);

        res.status(200).send(xml);     	
    });

});

module.exports = router;
