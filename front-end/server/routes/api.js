const express = require('express');
const router = express.Router();
const config = require('config');

const querystring = require('querystring');


var Report = require('../models/report');


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
