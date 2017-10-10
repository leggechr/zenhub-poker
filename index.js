var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var R = require('ramda');

var estimates = [];

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
});

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('submit estimate', function(estimate) {
    estimates = R.append(estimate, estimates);

    io.emit('estimates updated', estimates);
  });
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

http.listen(4000, function(){
  console.log('listening on *:4000');
});
