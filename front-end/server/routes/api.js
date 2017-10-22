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

    var query = {
        $and: [
            { 'issuerIdentification.name': new RegExp(req.query.issuerName, 'i') },
            { 'issuerIdentification.LEI': new RegExp(req.query.issuerLEI, 'i') },
            { 'issuerIdentification.registrationCountry': new RegExp(req.query.issuerHomeMemberState, 'i') },
        ]
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
