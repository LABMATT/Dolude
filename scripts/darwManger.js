function mouseXY()
{

  var x = event.clientX;
  var y = event.clientY;
 drawPoint(x,y);
}

function fingerXY(){

  var x = event.touches[0].clientX;
  var y = event.touches[0].clientY;
  drawPoint(x,y);
}

function drawPoint(x, y)
{
  var canvas = document.getElementById("myCanvas");

  var ctx = canvas.getContext("2d");

  var radius = 20;
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
  ctx.fillStyle = 'black';
  ctx.fill();
}
