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

var newReport1 = new Report({
    timestamp: {
        registration: '28/09/2017',
        submission: '29/09/2017'
    },
    issuerIdentification: {
        LEI: 'myLEI',
        name: 'My company',
        language: 'EN',
        registrationCountry: 'BE'
    },
    reportIdentification: {
        reportId: 'report1',
        regulationType: 'Type1',
        auditorId: 'auditor1',
        standardCode: 'STD',
        reportingCode: 'REP'
    },
    NCAIdentification: {
        stateAuthority: 'National regulator',
        NCAcountryIdentification: 'BE',
        OAMCountryIdentification: 'BE'
    },
    reportSource: {
        NCAReportURL: 'http://www.nca.com/report123',
        IssuerReportURL: 'http://www.issuer.com/report123',
        EEAP_ReportURL: 'http://www.eeap.com/report123',
    },
    checkSum: {
        checkSumElectronic: 'a9213e2df',
        checksumNonEdit: 'd81a9384cc'
    }
});
newReport1.save(function (err, newReport1) {
    if (err) return console.log(err);
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

// Get reports
router.get('/reports', (req, res) => {
    Report.find().exec(function(err, reports) {
        if (err) sendError(err, res);
        response.data = reports;
        res.json(response);
    });
});

router.get('/reports/search', (req, res) => {

    Report.find(
        {
            $and: [
                { 'timestamp.submission': new RegExp(req.query.submissionDate, 'i') },
                { 'reportIdentification.reportId': new RegExp(req.query.reportId, 'i') },
                { 'issuerIdentification.name': new RegExp(req.query.reportIssuerName, 'i') }
            ]
        }
    ).exec(function(err, reports) {
        if (err) sendError(err, res);
        response.data= reports;
        res.json(response);
    });
});

module.exports = router;
