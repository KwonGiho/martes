//var express = require('express');
import express from 'express';
import bodyParser from 'body-parser';
//import cookieParser from 'cookie-parser';
import router from './router/router';

//var path = require('path');

const app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(bodyParser.urlencoded({extended: false}))
    .use(bodyParser.json());
//app.use(cookieParser());


// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

router(app);

app.listen( 3000 , () => console.log('API server starting on PORT ' + 3000));


export default app;