var joinOpen = false;
var hostOpen = false;


// Displays menu for hosting
function createHost()
{
  if(joinOpen == true)
  {
    joinMenu();
  }

    console.log("Host menu");
    var x = document.getElementById('host');
    if (x.style.visibility === 'hidden') {
      x.style.visibility = 'visible';
      console.log("is vis");
      hostOpen = true;
    } else {
      x.style.visibility = 'hidden';
      console.log("is hid");
      hostOpen = false;
    }
}


// Displays menu for joining 
function joinMenu()
{
if(hostOpen == true)
{
  createHost();
}

    console.log("Joins menu");
    var x = document.getElementById('join');
    if (x.style.visibility === 'hidden') {
      x.style.visibility = 'visible';
      joinOpen = true;
    } else {
      x.style.visibility = 'hidden';
      joinOpen = false;
    }
}

// Sends the data to the server for setting up a new hosted session
function hostMenu() 
{
    var name = document.getElementById("uname").value;
    var pw = document.getElementById("psw").value;

    if (name == "" || pw == "") {
      alert("Name must be filled out");
    } else {

      console.log("user: " + name + " Password: " + pw);

      socket.emit("newHost", name + ":" + pw + ":" + true);
  
      socket.on('login', function(msg){
        console.log(msg + "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        if(msg == "connected")
        {
          document.getElementById("subbut").innerText = "Connected! (Window will close in 3.5 seconds!)";
          document.getElementById("subbut").style.backgroundColor = "green";

          setTimeout(()=>{
            document.getElementById("subbut").innerText = "Host Session!";
            document.getElementById("subbut").style.backgroundColor = "#FF5D00";

            createHost();
          }, 3500);
        } else if(msg == "exists")
        {
          document.getElementById("uname").style.borderColor = "red";
          document.getElementById("psw").style.borderColor = "red";
          document.getElementById("subbut").style.backgroundColor = "red";
          document.getElementById("subbut").innerText = "Oho, That username is currently taken!, Spicy it up and click to try again!";
        }
      });
    }
}


// Connect to the server as and resgister as a new joining user.
function joinHost()
{
  var name = document.getElementById("joinname").value;
  var pw = document.getElementById("joinpw").value;

  if (name == "") {
    alert("Name must be filled out");
  }
  if (pw == "") {
    alert("Name must be filled out");
  }

  console.log("user: " + name + " Password: " + pw);

  socket.emit("newjoin", name + ":" + pw + ":" + false + ":" + "dspNuame");

}


// Sends an updated packet of infomation to the server.
function serverMessage(path, value)
{

  socket.emit(path, value);
}

function sockEvents()
{
  socket.on('request', (msg) => {

    console.log("REQUEST FOR: " + msg);
    var decode = msg.split(":");

    if(decode[0] == "canvas")
    {
      socket.emit("canvas", decode[1] + ";" + pAX + ";" + pAY + ";" + pAS);
    }
  });

  socket.on('canvasX', (msg) => {
    console.log("canvasX");

      pAX = msg.split(',');
  });

  socket.on('canvasY', (msg) => {
    console.log("canvasY");

      pAY = msg.split(',');
  });

  socket.on('canvasS', (msg) => {
    console.log("canvasS");

      pAS = msg.split(',');
      redrawCanvas();
  });


  socket.on('dcanvasX', (msg) => {
    console.log("dcanvasX");

      rAX = rpAY.concat(msg.split(','));
  });

  socket.on('dcanvasY', (msg) => {
    console.log("dcanvasY");

      rAY = rAY.concat(msg.split(','));
  });

  socket.on('dcanvasS', (msg) => {
    console.log("dcanvasS");

      rAS = rAS.concat(msg.split(','));
  });
}

function dispachCanvasUpdate()
{
  socket.emit("canvasDispach", spAX + ";" + spAY + ";" + spAS);
}