'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setEnvironment = setEnvironment;

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function setEnvironment(app) {
    if (!process.env.NODE_ENV || process.env.NODE_ENV.toString().trim() !== 'production') {
        setDevEnv(app);
    } else {
        setProdEnv(app);
    }
}

function setDevEnv(app) {
    console.log("setting dev enviroment");
    process.env.NODE_ENV = 'development';
    app.use(_bodyParser2.default.json()); // Allows parsing JSON from the client
    app.use((0, _morgan2.default)('dev')); // Log HTTP Requests to the node console (for debugging purposes)
    app.use((0, _cors2.default)()); // Enable Cross Origin Requests, since Vue.JS is on a different origin
    process.env.DB_URL = 'mongodb://Richardy:zySmzzUr48GuedDo@cluster0-shard-00-00.cal8v.mongodb.net:27017,cluster0-shard-00-01.cal8v.mongodb.net:27017,cluster0-shard-00-02.cal8v.mongodb.net:27017/Webhozz?ssl=true&replicaSet=atlas-i0chxy-shard-0&authSource=admin&retryWrites=true&w=majority';
    process.env.TOKEN_SECRET = 'my-development-secret';
}

function setProdEnv(app) {
    console.log("setting prod enviroment");
    process.env.NODE_ENV = 'production';
    process.env.DB_URL = 'mongodb://Richardy:zySmzzUr48GuedDo@cluster0-shard-00-00.cal8v.mongodb.net:27017,cluster0-shard-00-01.cal8v.mongodb.net:27017,cluster0-shard-00-02.cal8v.mongodb.net:27017/Webhozz?ssl=true&replicaSet=atlas-i0chxy-shard-0&authSource=admin&retryWrites=true&w=majority';
    process.env.TOKEN_SECRET = 'my-production-secret';
    app.use(_bodyParser2.default.json());
    app.use(_express2.default.static(__dirname + '/../../dist'));
}