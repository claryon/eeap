// app/routes.js

// grab the nerd model we just created
var FismaTest = require('./models/test');

    module.exports = function(app) {


        app.get('/api/tests', function(req, res) {
            Nerd.find(function(err, tests) {

                if (err)
                    res.send(err);

                res.json(nerds); // return all nerds in JSON format
            });
        });


        app.get('*', function(req, res) {
            res.sendfile('./public/views/index.html');
        });

    };
