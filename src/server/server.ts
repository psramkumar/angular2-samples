import express = require("express");
import path = require("path");

let favicon = require("serve-favicon");
let logger = require("morgan");
let cookieParser = require("cookie-parser");
let bodyParser = require("body-parser");

let engine = require("ejs-mate");
let port: number = process.env.PORT || 3000;

let routes = require("./routes/index");
let users = require("./routes/users");
let tasks = require("./routes/tasks")

let app = express();

app.use("/client", express.static(path.resolve("./built/client")));
app.use("/node_modules", express.static(path.resolve("./node_modules")));
app.use("/lib", express.static(path.resolve("./public/lib")));

app.engine("ejs", engine);

app.set("views", "./built/client");
app.set("view engine", "ejs");

// uncomment after placing your favicon in /public
// app.use(favicon(__dirname + "/public/favicon.ico"));
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", routes);
app.use("/users", users);
app.use("/tasks", tasks);

/*
/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    let err = new Error("Not Found");
    err.status = 404;
    next(err);
});


/// error handlers

// development error handler
// will print stacktrace
if (app.get("env") === "development") {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render("error", {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render("error", {
        message: err.message,
        error: {}
    });
});

*/
/*
let server = app.listen(port, function() {
    let host = server.address().address;
    let port = server.address().port;
    console.log("This express app is listening on %s", host, port);
});
*/
app.listen(3000, function() {
    console.log("server started 3000");
});
module.exports = app;
