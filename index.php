<!DOCTYPE html>
<html>
<head>
<title>Dolude</title>

<link rel="stylesheet" type="text/css" href="css/main.css">
<link rel="stylesheet" type="text/css" href="css/host.css">

<meta name="viewport" content="user-scalable=no">
<meta name="apple-mobile-web-app-capable" Content="yes">
<meta name="mobile-web-app-capable" Content="yes">

  <script type="text/javascript" src="scripts/windowResize.js"></script>
  <script type="text/javascript" src="scripts/init.js"></script>
  <script type="text/javascript" src="scripts/darwManger.js"></script>
  <script type="text/javascript" src="scripts/mousehold.js"></script>
  <script type="text/javascript" src="scripts/disableRightMenu.js"></script>
  <script type="text/javascript" src="scripts/menu.js"></script>
  <script type="text/javascript" src="scripts/cookieManger.js"></script>
  <script type="text/javascript" src="scripts/nearestPointUI.js"></script>
  <script type="text/javascript" src="scripts/hostDolude.js"></script>
  <script type="text/javascript" src="scripts/shortcutManger.js"></script>
  <script src="socket.io/dist/socket.io.js"></script>

<script>
  var socket = io("http://10.0.0.245:3000");
  var id;
  socket.emit("newHost", "paul");
  

  socket.on('sessionID', function(msg){
      console.log(msg);
      id = msg;
      socket.emit("pw", "luck");
    });

    

</script>

</head>

<body scroll="no" onresize="resize()" onload="init()">

  <canvas id="myCanvas" width="1" height="1">Your browser does not support the HTML canvas tag. You also need javascript enabled!</canvas>


  <div id="host">
    <div id="hostLogin">

    

    <form action="/action_page.php" method="post">
    <h1> Dolude is better with friends!</h1>
    <h3>Start a session to get started.</h3>
    <h5> 1) Make host name. <br> 2) make password. <br> 3) friends can ctl + J enter both host and password</h5>

  <div class="container">
    <label for="uname"><b>Host Name</b></label>
    <input type="text" placeholder="Enter A Host Name!" name="uname" required>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password!" name="psw" required>
        
    <button type="submit">Host Session!</button>
    <button id="can" onclick="createHost()">Cancel (keybind: ctrl key + H)</button>
  </div>

</form>
  </div>
  </div>

</body>
</html>
