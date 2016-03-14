import express = require('express');
var router = express.Router();

var Task = require('../model/task');

router.get('/list', function(req: express.Request, res: express.Response) {
  // get all the tasks
  Task.find({}, function(err, tasks) {
    if (err) throw err;
    // object of all the tasks
    console.log(tasks);
    res.json(tasks);
  });
});

router.get('/get/:id', function(req, res) {
    // get the user starlord55
    Task.find({ '_id': req.params.id }, function(err, task) {
        if (err) throw err;
        // object of the user
        console.log(task);
        res.json(task);
    });
});

router.post('/save', function(req, res) {
    // create a new user
    console.log(req.body);
    var task = new Task(req.body);
    // call the built-in save method to save to the database
    task.save(function(err) {
        if (err) throw err;
        console.log('Task saved successfully!');
        //res.json({ "status": "success" });

        Task.find({}, function(err, tasks) {
          if (err) throw err;
          // object of all the tasks
          console.log(tasks);
          //res.json(tasks);
          res.json({ "status": "success" ,"data":tasks});
        });

    });

});

module.exports = router;