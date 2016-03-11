import express = require('express');
var router = express.Router();

var renderIndex = (req: express.Request, res: express.Response) => {
    res.render('index',{title:'Angular2-Samples'});
}
 
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'NSAMPLE' });
});

module.exports = router;
