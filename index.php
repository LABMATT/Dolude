<!DOCTYPE html>
<html>
<head>
  <script type="text/javascript" src="scripts/windowResize.js"></script>
  <script type="text/javascript" src="scripts/init.js"></script>
  <script type="text/javascript" src="scripts/darwManger.js"></script>
  <script type="text/javascript" src="scripts/mousehold.js"></script>

<link rel="stylesheet" type="text/css" href="css/main.css">
</head>

<body onresize="resize()" onload="init()">

<div id="item"></div>

  <canvas onmousedown="drawManger(event)" id="myCanvas" width="0" height="0"> Your browser does not support the HTML canvas tag.</canvas>
</body>
</html>
