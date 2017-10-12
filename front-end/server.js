const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
var fs			   = require('fs');
var https          = require('https');

var port = 443;
var privateKey = fs.readFileSync('config/server.key', 'utf-8');
var certificate = fs.readFileSync('config/server.crt', 'utf-8');
var credentials = {key: privateKey, cert: certificate};



// Parsers
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(bodyParser.urlencoded({ extended: true}));


// API
const api = require('./server/routes/api');
app.use('/api', api);

// RSS
const rss = require('./server/routes/rss');
app.use('/', rss);


// expose public directory
app.use(express.static('public'));

/*
// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));
*/
// Send all other requests to the Angular app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

// launch the application
var httpsServer = https.createServer(credentials, app);
httpsServer.listen(port, () => console.log(`Running on localhost:${port}`));

// expose app
exports = module.exports = app;