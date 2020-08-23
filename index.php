<!DOCTYPE html>
<html>
<head>
<title>Dolude</title>


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

  <script src="scripts/socket.io.js"></script>
<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>


<link rel="stylesheet" type="text/css" href="css/main.css">
</head>

<body scroll="no" onresize="resize()" onload="init()">


  <canvas id="myCanvas" width="1" height="1">Your browser does not support the HTML canvas tag. You also need javascript enabled!</canvas>
</body>
</html>
<script>
  $(function () {
    var socket = io();
    $('form').submit(function(e) {
      e.preventDefault(); // prevents page reloading
      socket.emit('chat message', $('#m').val());
      $('#m').val('');
      return false;
    });
  });
</script>
