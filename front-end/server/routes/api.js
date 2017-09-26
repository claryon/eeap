const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

// Connect
const connection = (closure) => {
    return MongoClient.connect('mongodb://localhost:27017/eeap', (err, db) => {
        if (err) return console.log(err);

        closure(db);
    });
};

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
    connection((db) => {
        db.collection('reports')
            .find()
            .toArray()
            .then((reports) => {
                response.data = reports;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});

router.get('/report/:reportId', (req, res) => {
    console.log(req.params.reportId);

    connection((db) => {
        db.collection('reports')
            .findOne({ "_id": new ObjectID(req.params.reportId) })
            .then((report) => {
                response.data = report;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});

module.exports = router;
