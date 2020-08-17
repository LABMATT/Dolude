var lx, ly;

function mouseXY(fresh)
{

  var x = event.clientX;
  var y = event.clientY;
 drawPoint(x,y, fresh);
}

function fingerXY(fresh){

  var x = event.touches[0].clientX;
  var y = event.touches[0].clientY;
  drawPoint(x,y, fresh);
}

function drawPoint(x, y, fresh)
{
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");

  console.log("fresh is: " + fresh)

  if(fresh == true)
  {
    lx = x;
    ly = y;
    fresh = false;
  }

if(lx == null && ly == null)
{
  lx = x;
  ly = y;
}

  var size = 10;
  ctx.beginPath();
  ctx.lineCap = 'round';
  ctx.lineWidth = size;

  ctx.moveTo(lx,ly);
  ctx.lineTo(x,y);


  //ctx.arc(50, 50, radius, 0, 2 * Math.PI, false);
  //ctx.arc(150, 50, radius, 0, 2 * Math.PI, false);

  ctx.fillStyle = 'black';
  ctx.fill();
  ctx.stroke();
  ctx.closePath();

  lx = x;
  ly = y;
}
