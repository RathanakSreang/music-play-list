var express = require('express');

var app = express();

app.use(express.static('./public'));

var server = app.listen(3330);
console.log('Server is running on htpp://localhost:3330')
