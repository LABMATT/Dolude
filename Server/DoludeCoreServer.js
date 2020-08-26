var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

var port = 3000;
var currentUsers = 0;

// SessionID Name:unix Time stamp
// Host password.
var sessionID = []; 
var sessionHostPw = [];
var sessionTimout = [];
var sessionParticipants = [];

// Start listing on port
http.listen(port, () => {
  console.log('listening on *:' + port);
});

// Notifi console of current active users stats.
io.on('connection', (socket) => {
  currentUsers++;
  console.log('User connected, Current Users: ' + currentUsers);
});

// Notif console of disconnected user.
io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    currentUsers--;
    console.log('User disconnected, Current Users: ' + currentUsers);
  });
});


// On connection of new host then add them to the roster sessionID
io.on('connection', (socket) => {
  socket.on('newHost', (msg) => {
    
    var d = new Date();

    var newSessionID = msg + ":" + timeStamp();
  
    sessionID.push(newSessionID);
    socket.emit("sessionID", newSessionID);
    console.log("session id is: " + newSessionID)
    sessionID.push(newSessionID);
  });
});

// When user set a password then add it to the ID
io.on('connection', (socket) => {
  socket.on('pw', (msg) => {

    console.log("paswuser: " + msg);
    // [User id, Password]
    var setpassword = msg.split(";");

    console.log("looking for that user: " + setpassword[0]);
    for(i = 0; i < sessionID.length; i++)
    {
      if(sessionID[i] == setpassword[0])
      {
        console.log("found that user");
        sessionHostPw[i] = setpassword[1];
        sessionTimout[i] = timeStamp();
        break;
      }
    }
  });
});


// Gets the curret unix time stamp.
function timeStamp()
{
  var d = new Date();

    return (Math.round(d / 1000));
}