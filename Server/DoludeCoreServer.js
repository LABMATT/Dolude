var app = require('express')();
var http = require('http').createServer(app);
const io = require('socket.io')(http);

var port = 3000;
var currentUsers = 0;


/*
#### ON HOST JOIN ########
1) Connect to server.
2) Server sets sessionID as sockets id.
2) Set name.
3) Set password.
4) Set mode 1 (host).

#### ON USER JOIN ########
1) Connect to server.
2) Server sets sessionID as sockets id.
2) Set name (same as host name).
3) Set password (Same as host pw).
4) Set mode 0 (user).


*/


// SessionID Name:unix Time stamp
// Host password.
// sessionMode: 1 = host, 0 = joining
// Protype javson equilvalnt.
var sessionsJson = {"session":{}};
var sessionUsernameJson = {"Hostnames":{}};


// Start listing on port
http.listen(port, () => {
  console.log('listening on *:' + port);
});


// Notifi console of current active users stats.
io.on('connection', (socket) => {
  currentUsers++;
  console.log("User <" + socket.id + "> connected, Current Users: <" + currentUsers + ">");
});


// Notif console of disconnected user.
io.on('connection', (socket) => {
  socket.on('disconnect', () => {
    currentUsers--;
    console.log("User <" + socket.id + ">  disconnected, Current Users: " + currentUsers + ">");
  });
});


// Allow console input
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.on("line", (name) => {
  if(name == "u")
  {
    displayRoster();
  }
})


// On connection of new host then add them to the roster sessionID //socket.emit("newHost", name + ":" + pw + ":" + true);
io.on('connection', (socket) => {
  socket.on('newHost', (msg) => {

    // console.log("User: <" + newSessionID + "> name <" + msg + ">")
    
    var message = msg.split(":");
    var free = false;

    if(sessionUsernameJson.Hostnames.hasOwnProperty(message[0]) == false)
    {
      free = true;
      console.log("We have free propty");
    } else if(sessionsJson.session[message[0]].host == false)
    {
      console.log("not host.");
      free = true;
    } 

    if(free == true)
    {
      sessionsJson.session[socket.id] = {"name":message[0], "pw":message[1], "displayname":message[0], "host":message[2], "tsp":timeStamp(), "participants":[]}
      sessionUsernameJson.Hostnames[message[0]] = {"id":socket.id};
      console.log("JsonFile: " + JSON.stringify(sessionsJson));
      console.log("HostnamesLookup: " + JSON.stringify(sessionUsernameJson));
      socket.emit("Connected", socket.id);
      socket.emit("login", "connected");
    }
    else
    {
      console.log("Already exits.");
      socket.emit("login", "exists");
    }
  });
});


//#### On connection of new joiner user, then add it to sessions. #### //socket.emit("newjoin", name + ":" + pw + ":" + false + ":" + displayname);
io.on('connection', (socket) => {
  socket.on('newjoin', (msg) => {

    // console.log("User: <" + newSessionID + "> name <" + msg + ">")
    console.log("New join user");
    
    var message = msg.split(":");

    if(sessionUsernameJson.Hostnames.hasOwnProperty(message[0]) == true)
    {
      console.log("Host name found!");
      // Get the hosts ID, then add this socket to the participants.
      var hostID = sessionUsernameJson.Hostnames[message[0]].id;

      if(message[1] == sessionsJson.session[hostID].pw)
      {
        console.log("Host has same password!");
      var part = sessionsJson.session[hostID].participants;
      part.push(socket.id);
      sessionsJson.session[hostID].participants = part;

      sessionsJson.session[socket.id] = {"name":message[0], "pw":message[1], "displayname":message[3], "host":message[2], "tsp":timeStamp(), "participants":{}}

      console.log("JsonFile: " + JSON.stringify(sessionsJson));
      console.log("HostnamesLookup: " + JSON.stringify(sessionUsernameJson));
      //socket.emit("Connected", socket.id);
      //socket.emit("login", "connected");
      }

    } 
    else
    {
      console.log("No host found!");
     // socket.emit("login", "exists");
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
  console.log(sessionMode);
}

