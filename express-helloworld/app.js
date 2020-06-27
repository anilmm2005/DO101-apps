var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World!\n');
});

app.get('/mars', function (req, res) {
  res.send('Hello Mars1!\n');
});

app.get('/saswati', function (req, res) {
  res.send('Hello saswati!\n');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

