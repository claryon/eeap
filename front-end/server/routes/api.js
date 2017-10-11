const express = require('express');
const router = express.Router();
const config = require('config');

const querystring = require('querystring');

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


mongoose.Promise = global.Promise;
var db = mongoose.connect(mongo_url, {
    useMongoClient: true,
});

var Report = require('../models/report');


db.on('error', console.error.bind(console, 'MongoDB connection error: '));



// Error handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

// Response handling
let response = {
    status: 200,
    data: [],
    message: null
};


router.get('/reports/search', (req, res) => {

    if (req.query.submissionDate == '') {
        var query = {
            $and: [
                { 'reportIdentification.reportId': new RegExp(req.query.reportId, 'i') },
                { 'issuerIdentification.name': new RegExp(req.query.reportIssuerName, 'i') }
            ]
        }
    } else {
        var query = {
            $and: [
                { 'timestamp.submission': new Date(req.query.submissionDate) },
                { 'reportIdentification.reportId': new RegExp(req.query.reportId, 'i') },
                { 'issuerIdentification.name': new RegExp(req.query.reportIssuerName, 'i') }
            ]
        }
    }

    Report.find(query).exec(function(err, reports) {
        if (err) return sendError(err, res);
        response.data= reports;
        res.json(response);
    });
});

// Get reports
router.get('/reports', (req, res) => {
    Report.find().exec(function(err, reports) {
        if (err) return sendError(err, res);
        response.data = reports;
        res.json(response);
    });
});



module.exports = router;
