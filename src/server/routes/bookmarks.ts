import express = require("express");
let router = express.Router();

let Bookmark = require("../model/bookmark");

router.get("/list", function(req: express.Request, res: express.Response) {
    //  get all the tasks
    Bookmark.find({}, function(err, bookmarks) {
        if (err) throw err;
        //  object of all the tasks
        console.log(bookmarks);
        res.json(bookmarks);
    });
});

router.get("/get/:id", function(req, res) {
    //  get the user starlord55
    Bookmark.find({ "_id": req.params.id }, function(err, bookmark) {
        if (err) throw err;
        //  object of the user
        console.log(bookmark);
        res.json(bookmark);
    });
});

router.post("/save", function(req, res) {
    //  create a new user
    console.log(req.body);
    let task = new Bookmark(req.body);
    //  call the built-in save method to save to the database
    task.save(function(err) {
        if (err) throw err;
        console.log("Bookmark saved successfully!");
        // res.json({ "status": "success" });

        Bookmark.find({}, function(err, bookmarks) {
            if (err) throw err;
            //  object of all the tasks
            console.log(bookmarks);
            // res.json(tasks);
            res.json({ "status": "success", "data": bookmarks });
        });

    });

});

module.exports = router;