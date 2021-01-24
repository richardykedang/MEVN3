'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.registerRoutes = registerRoutes;

var _taskRoute = require('./api/task/task-route');

var _taskRoute2 = _interopRequireDefault(_taskRoute);

var _registerRoute = require('./api/register/register-route');

var _registerRoute2 = _interopRequireDefault(_registerRoute);

var _userRoute = require('./api/user/user-route');

var _userRoute2 = _interopRequireDefault(_userRoute);

var _authRoute = require('./api/auth/auth-route');

var _authRoute2 = _interopRequireDefault(_authRoute);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function registerRoutes(app) {
    app.use('/api', _taskRoute2.default);
    app.use('/api', _registerRoute2.default);
    app.use('/api', _userRoute2.default);
    app.use('/api', _authRoute2.default);
}