<!DOCTYPE html>
<html>
<head>
  <script type="text/javascript" src="scripts/windowResize.js"></script>
</head>

<body onresize="resize()" onload="resize()" style="margin: 0;">

<div id="demo"></div>

  <canvas id="myCanvas" width="100" height="100" style="border:1px solid #d3d3d3;"> Your browser does not support the HTML canvas tag.</canvas>


<script>
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.moveTo(0,0);
ctx.lineTo(200,100);
ctx.stroke();
</script>


</body>
</html>
