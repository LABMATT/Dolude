var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

var sessionID = [];
var sessionHosteName = [];
var sessionHostPw = [];

app.get('/', (req, res) => {
  res.send("<h1>Hello World</1>");
});

io.on('connection', (socket) => {
  console.log('a user connected');
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});

io.on('connection', (socket) => {
  socket.on('chat', (hostname) => {
    newUser(hostname);
  });
});

function newHost(hostname)
{
  console.log('message: ' + hostname);
}