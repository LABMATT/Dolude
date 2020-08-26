var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

var port = 3000;
var currentUsers = 0;

// SessionID Name:unix Time stamp
// Host password.
var sessionID = []; 
var sessionHostName = [];
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
  console.log("User " + socket.id + " connected, Current Users: " + currentUsers);
});

// Notif console of disconnected user.
io.on('connection', (socket) => {
  socket.on('disconnect', () => {
    currentUsers--;
    console.log("User " + socket.id + "  disconnected, Current Users: " + currentUsers);

    for(i = 0; i < sessionID.length; i++)
    {
      if(sessionID[i] == socket.id)
      {
displayRoster();

        sessionID.splice(i, 1);
        sessionHostName.splice(i, 1);
        sessionHostPw.splice(i, 1);
        sessionTimout.splice(i, 1);
        sessionParticipants.splice(i, 1);
        console.log("Socket " + socket.id + " removed from server roster.")
        break;
      }
    }
  });
});


// On connection of new host then add them to the roster sessionID
io.on('connection', (socket) => {
  socket.on('newHost', (msg) => {
    
    var newSessionID = socket.id;

    socket.emit("sessionID", newSessionID);

    sessionID.push(newSessionID);
    sessionHostName.push(msg)
    sessionTimout.push(timeStamp());
  });
});

// When user set a password then add it to the ID
io.on('connection', (socket) => {
  socket.on('pw', (msg) => {

    console.log("paswuser: " + msg);
    // [User id, Password]
    var setpassword = msg;

    console.log("looking for that user: " + setpassword);
    for(i = 0; i < sessionID.length; i++)
    {
      if(sessionID[i] == socket.id)
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


function displayRoster()
{

  console.log(sessionID);
  console.log(sessionHostName);
  console.log(sessionHostPw);
  console.log(sessionTimout);
  console.log(sessionParticipants);
}