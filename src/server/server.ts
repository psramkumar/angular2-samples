import express = require('express');
import path = require('path');

var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var engine = require('ejs-mate');
var port: number = process.env.PORT || 3000;

var routes = require('./routes/index');
var users = require('./routes/users');
var tasks = require('./routes/tasks');

var app = express();

app.use('/client', express.static(path.resolve('./built/client')));
app.use('/node_modules', express.static(path.resolve('./node_modules')));
app.use('/lib', express.static(path.resolve('./public/lib')));

app.engine('ejs',engine);

app.set('views','./built/client');
app.set('view engine','ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json ( ));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser()); 

app.use('/', routes);
app.use('/users', users);
app.use('/tasks', tasks);

/*
/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});


/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

*/
/*
var server = app.listen(port, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('This express app is listening on %s', host, port);
});
*/
app.listen(3000, function() { 
  console.log("server started 3000");
});
module.exports = app;
