
// Displays menu for hosting
function createHost()
{
    console.log("Host menu");
    var x = document.getElementById('host');
    if (x.style.visibility === 'hidden') {
      x.style.visibility = 'visible';
      console.log("is vis");
    } else {
      x.style.visibility = 'hidden';
      console.log("is hid");
    }
}


// Displays menu for joining 
function joinMenu()
{
    console.log("Joins menu");
    var x = document.getElementById('join');
    if (x.style.visibility === 'hidden') {
      x.style.visibility = 'visible';
    } else {
      x.style.visibility = 'hidden';
    }
}

function suber() {
  var d = document.getElementById("hostForm").submit();
}

function submitHost() 
{
    var name = document.getElementById("uname").value;
    var pw = document.getElementById("psw").value;

    if (name == "") {
      alert("Name must be filled out");
    }
    if (pw == "") {
      alert("Name must be filled out");
    }

    console.log("user: " + name + " Password: " + pw);
    connectServer(name, pw);
}

function connectServer(hostname, password)
{
  var socket = io("http://10.0.0.245:3000");
  var id;
  socket.emit("newHost", hostname);
  socket.emit("pw", password);
  

  socket.on('Connected', function(msg){
      console.log(msg);
      createHost();
    });
}

function serverPassword() {

}

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
  connectServer(name, pw);
}

