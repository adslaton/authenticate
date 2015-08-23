var express = require('express'),
    app = express(),
    config = require('./config.js'),
    server;

app.get('/', function(req, res) {
    res.send('Hello world');
});

server = app.listen(config.port, function() {
    console.log('Authenticate is listening on port:%s', config.port);
});
