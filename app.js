var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello word!\n');
});

app.get('/enrique', function (req, res) {
  res.send('Hello enrique!\n');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

app.get('/jota', function (req, res) {
  res.send('Hello jota!\n');
});


