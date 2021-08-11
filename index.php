<!DOCTYPE html>
<html>
<head>
<title>Dolude</title>

<!-- Link Main styles -->
<link rel="stylesheet" type="text/css" href="css/main.css">
<link rel="stylesheet" type="text/css" href="css/host.css">

<!-- Setup how site displays on mobile devices. -->
<meta name="viewport" content="user-scalable=no">
<meta name="apple-mobile-web-app-capable" Content="yes">
<meta name="mobile-web-app-capable" Content="yes">

<!-- Include nessary script files. -->
  <script type="text/javascript" src="scripts/lmws.js"></script>
  <script type="text/javascript" src="scripts/windowResize.js"></script>
  <script type="text/javascript" src="scripts/init.js"></script>
  <script type="text/javascript" src="scripts/darwManger.js"></script>
  <script type="text/javascript" src="scripts/mousehold.js"></script>
  <script type="text/javascript" src="scripts/disableRightMenu.js"></script>
  <script type="text/javascript" src="scripts/menu.js"></script>
  <script type="text/javascript" src="scripts/cookieManger.js"></script>
  <script type="text/javascript" src="scripts/nearestPointUI.js"></script>
  <script type="text/javascript" src="scripts/coludeManger.js"></script>
  <script type="text/javascript" src="scripts/shortcutManger.js"></script>
  <script type="text/javascript" src="scripts/DataStructure.js"></script>
  

</head>
<body scroll="no" onresize="resize()" onload="init()">
<input id="upload" type="file" onchange="loadDrawing(this)">

<!-- Main Canvas -->
  <canvas id="myCanvas" width="1" height="1">Your browser does not support the HTML canvas tag. You also need javascript enabled!</canvas>

<!-- For hosting a session -->
  <div id="host">
    <div id="hostLogin">
    <h1>Host a session! <br>Dolude is better with friends!</h1>
    <h3>Start a session to get started.</h3>
    <h5> 1) Make host name. <br> 2) make password. <br> 3) friends can ctl + J enter both host and password</h5>

    <label for="uname"><b>Host Name</b></label>
    <input type="text" placeholder="Enter A Host Name!" id="uname" required>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password!" id="psw" required>

    <button id="subbut" onclick="hostMenu();">Host Session!</button>
    <button onclick="createHost()" id="can">Cancel (keybind: ctrl key + H)</button>
  </div>

<!-- For Joining a session -->
<div id="join">
    <div id="hostLogin">
    <h1>Join a session! <br>Dolude is better with friends!</h1>
    <h3>Join a session to get started.</h3>
    <h5> 1) Enter your firends host name. <br> 2) Enter you friends password. <br> 3) ctl + H to host your own session.</h5>

    <label for="joinname"><b>Your Hosts Name</b></label>
    <input type="text" placeholder="Enter Your Hosts Name!" id="joinname" required>

    <label for="joinpw"><b>Hosts Password</b></label>
    <input type="password" placeholder="Enter Your Hosts Password!" id="joinpw" required>

    <button onclick="joinHost();">Join Session!</button>
    <button onclick="joinMenu()" id="can">Cancel (keybind: ctrl key + J)</button>
  </div>
  </div>
</body>
</html>
