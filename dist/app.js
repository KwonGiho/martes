'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _router = require('./router/router');

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//var path = require('path');

var app = (0, _express2.default)();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

//import cookieParser from 'cookie-parser';
//var express = require('express');
app.use(_bodyParser2.default.urlencoded({ extended: false })).use(_bodyParser2.default.json());
//app.use(cookieParser());


// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

(0, _router2.default)(app);

app.listen(3000, function () {
    return console.log('API server starting on PORT ' + 3000);
});

exports.default = app;
//# sourceMappingURL=app.js.map