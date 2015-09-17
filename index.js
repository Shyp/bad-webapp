var express = require('express');
var app = express();

app.get('/', function(req, res) {
  if (new Date().getTime() % 3 === 0) {
    console.log('catastrophic failure!');
    res.status(500).send('oh no!');
    process.exit(1);
  } else {
    console.log('incredible success!');
    res.send('hello world');
  }
});

var server = app.listen(process.env.BAD_WEBAPP_PORT, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Bad web app listening at http://%s:%s', host, port);
});
