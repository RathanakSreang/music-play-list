var express = require('express');

var app = express();

app.use(express.static('./public'));

var server = app.listen(3330);

var io = require('socket.io').listen(server);
io.sockets.on('connection', function(socket) {
  console.log("Connected: %s", socket.id);
});
console.log('Server is running on htpp://localhost:3330')
