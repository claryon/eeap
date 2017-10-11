const express = require('express');
const router = express.Router();
const ObjectID = require('mongodb').ObjectID;

const querystring = require('querystring');

//TEST
const mongoose = require('mongoose');
var mongoDB = 'mongodb://localhost/eeap';
mongoose.connect(mongoDB, {
    useMongoClient: true
})
var Report = require('../models/report');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error: '));

Report.remove({}, function(err) {
    if (err) console.log("Error emptying collection", err);
});


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
