import express = require("express");
let router = express.Router();

let renderIndex = (req: express.Request, res: express.Response) => {
    res.render("index", { title: "Angular2-Samples" });
}

/* GET home page. */
router.get("/", function(req, res, next) {
    res.render("index", { title: "NSAMPLE" });
});

module.exports = router;
