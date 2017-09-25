var Nerd = require('./models/search');

    module.exports = function(app) {
        app.get('/api/search', function(req, res) {
            Nerd.find(function(err, searches) {

                if (err)
                    res.send(err);

                res.json(nerds);
            });
        });

        app.get('*', function(req, res) {
            res.sendfile('./public/views/index.html');
        });

    };
