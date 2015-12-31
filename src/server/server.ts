import express = require('express');
import path = require('path');
var engine = require('ejs-mate');
var port: number = process.env.PORT || 3000;
var app = express();
 
app.use('/client', express.static(path.resolve('./built/client')));
app.use('/node_modules', express.static(path.resolve('./node_modules')));
app.use('/lib', express.static(path.resolve('./public/lib')));

app.engine('ejs',engine);

app.set('views','./built/client');
app.set('view engine','ejs');
 
var renderIndex = (req: express.Request, res: express.Response) => {
    res.render('index',{title:'Angular2-Samples'});
}
 
app.get('/', renderIndex);
 
var jsonObj = [{
  "id": 1,
  "name": "Terry"
}, {
  "id": 2,
  "name": "Amanda"
}, {
  "id": 3,
  "name": "Teresa"
}, {
  "id": 4,
  "name": "Juan"
}, {
  "id": 5,
  "name": "Louise"
}, {
  "id": 6,
  "name": "Sean"
}, {
  "id": 7,
  "name": "Susan"
}, {
  "id": 8,
  "name": "Ruby"
}, {
  "id": 9,
  "name": "Elizabeth"
}, {
  "id": 10,
  "name": "Wanda"
}];
app.get('/getContacts',function(req: express.Request, res: express.Response){
    res.send(jsonObj);
}); 
 
var server = app.listen(port, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('This express app is listening on %s', host, port);
});