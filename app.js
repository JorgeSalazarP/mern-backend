var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
 
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

require('./lib/connectMongoose');


app.use('/api/category', require('./routes/category'));
app.use('/api/videogame', require('./routes/videogame'));



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler

app.use(function(err, req, res, next) {

  //comprobramos que sea un error de validación

 // es un error de validación?
  if (err.array) {
  const errorInfo = err.array({ onlyFirstError: true })[0];
  err.message = `Not valid - ${errorInfo.param} ${errorInfo.msg}`;
  err.status = 422;
  }
  
  // render the error page
  res.status(err.status || 500);

  if (isAPIRequest(req)) {
    res.json({ error: err.message });
    return;
  }

  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.render('error');
});

function isAPIRequest(req) {
  return req.originalUrl.indexOf('/api/') === 0;
}


module.exports = app;
