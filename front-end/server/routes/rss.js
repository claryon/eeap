const express = require('express');
const router = express.Router();
const xmlify = require('xmlify');
const config = require('config');

var Report = require('../models/report');

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
