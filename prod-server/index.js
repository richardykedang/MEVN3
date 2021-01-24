'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _routes = require('./routes');

var _env = require('./config/env');

var _db = require('./config/db');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)(); //const express = require('express')


(0, _env.setEnvironment)(app);
(0, _db.connectToDB)();
(0, _routes.registerRoutes)(app);
var port = 3000;

app.get('*', function (req, res) {
    if (!process.env.NODE_ENV || process.env.NODE_ENV.toString().trim() !== 'production') {
        return res.send('Running server in development mode.');
    } else {
        // Returns the main index file in production environment
        return res.sendFile('index.html', { root: __dirname + '/../dist/' });
    }
});

app.listen(port, function () {
    console.log('MEVN app listening on port 3000 in ' + process.env.NODE_ENV + ' mode!');
});