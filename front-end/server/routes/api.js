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
        registration: new Date('2017-09-28'),
        submission: new Date('2017-09-29')
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

var newReport2 = new Report({
    timestamp: {
        registration: new Date('2017-10-01'),
        submission: new Date('2017-10-01')
    },
    issuerIdentification: {
        LEI: 'myLEI',
        name: 'My company',
        language: 'EN',
        registrationCountry: 'BE'
    },
    reportIdentification: {
        reportId: 'report2',
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
        NCAReportURL: 'http://www.nca.com/report124',
        IssuerReportURL: 'http://www.issuer.com/report124',
        EEAP_ReportURL: 'http://www.eeap.com/report124',
    },
    checkSum: {
        checkSumElectronic: 'a9213e2df',
        checksumNonEdit: 'd81a9384cc'
    }
});
newReport2.save(function (err, newReport1) {
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
