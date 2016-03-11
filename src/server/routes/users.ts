import express = require('express');
var router = express.Router();

var User = require('../model/user');

router.get('/getContacts',function(req: express.Request, res: express.Response){
  // get all the users
  User.find({}, function(err, users) {
  if (err) throw err;
  // object of all the users
  console.log(users);
      res.json(users);
  });
    //res.send(jsonObj);
}); 

router.get('/userlist', function(req, res) {
    // get all the users
    User.find({}, function(err, users) {
        if (err) throw err;

        // object of all the users
        console.log(users);
        res.json(users);
    });

});

router.get('/user/:name', function(req, res) {
    // get the user starlord55
    User.find({ 'username': req.params.name }, function(err, user) {
        if (err) throw err;
        // object of the user
        console.log(user);
        res.json(user);
    });
});

/*
 * GET userlist.
 */
router.post('/user', function(req, res) {
    // create a new user
    console.log(req.body);
    var user = new User(req.body);
    // call the built-in save method to save to the database
    user.save(function(err) {
        if (err) throw err;
        console.log('User saved successfully!');
        res.json({ "status": "success" });
    });

});

module.exports = router;