var lx, ly;
var size = 2;
var canvasData;

// Points Arrys
var pAX = []; // X cordiante
var pAY = []; // Y cordainte
var pAS = []; // Shape type
var pAW = []; // Shape width
var pAC = []; // Shape colour

function darwMangerInit() {

  const event = document.getElementById('myCanvas');
  event.addEventListener("unload", saveDrawingCookie());
}

function mouseXY(fresh)
{
  var x = event.clientX;
  var y = event.clientY;
 drawPoint(x,y, fresh);
}

function fingerXY(fresh)
{

  var x = event.touches[0].clientX;
  var y = event.touches[0].clientY;
  drawPoint(x,y, fresh);

}

function drawPoint(x, y, fresh)
{
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  var submittShape  = "line"

  console.log("fresh is: " + fresh)

  if(fresh == true)
  {
    lx = x;
    ly = y;
    fresh = false;
    submittShape = "move";
  }

if(lx == null && ly == null)
{
  lx = x;
  ly = y;
}

savePoints(x, y, submittShape, 20, 'black');

  ctx.beginPath();
  ctx.lineCap = 'round';
  ctx.lineWidth = size;

  ctx.moveTo(lx,ly);
  ctx.lineTo(x,y);


//ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
  //ctx.arc(150, 50, radius, 0, 2 * Math.PI, false);

  ctx.fillStyle = 'black';
  ctx.fill();
  ctx.stroke();
  ctx.closePath();

  lx = x;
  ly = y;
}

function savePoints(x, y, saveShape, saveWidth, saveColour) {

  pAX.push(x);
  pAY.push(y);
  pAS.push(saveShape);
  pAW.push(saveWidth);
  pAC.push(saveColour);
}

function redrawCanvas() {

  console.log("redrawn!");

  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.beginPath();
  ctx.lineCap = 'round';
  ctx.lineWidth = size;

    console.log("Starting Redraw Loop.");
var i = 1;
while(i < pAX.length)
{
switch(pAS[i])
{
  case "line":
  ctx.moveTo(pAX[i-1], pAY[i-1]);
  ctx.lineTo(pAX[i], pAY[i]);
  break;

  case "move":
  ctx.moveTo(pAX[i], pAY[i]);
  break;
}
    i++;
}
    console.log("Finished Redraw Loop.");

  ctx.fillStyle = 'black';
  ctx.fill();
  ctx.stroke();
  ctx.closePath();
}



function canvasBacking() {
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");

  ctx.beginPath();
  ctx.rect(0, 0, 1000, 1000);
  ctx.fillStyle = "blue";
  ctx.fill();
}


function curSize() {
  size = size + 2;

  if(size > 30)
  {
    size = 2;
  }
  console.log("cursor size is: " + size);
}


function saveDrawingCookie() {
/*
setCookie("pAX", pAX.join("-"));
setCookie("pAY", pAY.join("-"));
setCookie("pAS", pAS.join("-"));
console.log("saving cookies first xy should be: " + pAX + " " + pAY);
*/
}

function loadDrawingCookie() {

    console.log("Attempting to laod cookies.");
    pAX = getCookie("pAX").split("-");
    pAY = getCookie("pAY").split("-");
    pAS = getCookie("pAS").split("-");

  console.log("Buffers now be: " + pAX + " " + pAY);
  console.log("Loaded Cookie;");
  redrawCanvas();
}
