var lx, ly;
var size = 2;

// What layer and page were currently drawing on. Canvas data stores all the data of the drawing.
var page = 1;
var layer = 1;
var canvasData = {"canvas":{}};;

// Points Arrys
var pAX = []; // X cordiante
var pAY = []; // Y cordainte
var pAS = []; // Shape type
var pAW = []; // Shape width
var pAC = []; // Shape colour

// NETWORK Arrys
var spAX = []; // X cordiante
var spAY = []; // Y cordainte
var spAS = []; // Shape type
var spAW = []; // Shape width
var spAC = []; // Shape colour

// RECIVED Arrys
var rpAX = []; // X cordiante
var rpAY = []; // Y cordainte
var rpAS = []; // Shape type
var rpAW = []; // Shape width
var rpAC = []; // Shape colour

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
    addPart();
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

  ctx.fillStyle = 'black';
  ctx.fill();
  ctx.stroke();
  ctx.closePath();

  lx = x;
  ly = y;
}

// Adds what other people have drawn to your drawing.
function addPart()
{
  pAX = pAX.concat(rpAX);
  pAY = pAY.concat(rpAY);
  pAS = pAS.concat(rpAS);
  rpAX = [];
  rpAY = [];
  rpAS = [];
}

function savePoints(x, y, saveShape, saveWidth, saveColour) {

  //var part = sessionsJson.session[hostID].participants;
  //part.push(socket.id);
  //sessionsJson.session[hostID].participants = part;
  console.log("JsonFile: " + JSON.stringify(canvasData));

  var xtemp = canvasData.canvas[socket.id].page[page].layer[layer].x; // X axis
  var ytemp = canvasData.canvas[socket.id].page[page].layer[layer].y; // Y axis
  var atemp = canvasData.canvas[socket.id].canvas.page[page].layer[layer].x; // action
  var stemp = canvasData.canvas[socket.id].canvas.page[page].layer[layer].x; // size 
  var ctemp = canvasData.canvas[socket.id].canvas.page[page].layer[layer].x; // colour
  xtemp.push(x);
  ytemp.push(y);
  atemp.push(saveShape);
  stemp.push(2);
  ctemp.push("black");
  canvasData.canvas[socket.id].page[page].layer[layer].x = xtemp; // X axis
  canvasData.canvas[socket.id].page[page].layer[layer].y = ytemp; // Y axis
  canvasData.canvas[socket.id].page[page].layer[layer].a = atemp; // action
  canvasData.canvas[socket.id].page[page].layer[layer].s = stemp; // size 
  canvasData.canvas[socket.id].page[page].layer[layer].c = ctemp; // colour

  console.log("JsonFile: " + JSON.stringify(canvasData));

  pAX.push(x);
  pAY.push(y);
  pAS.push(saveShape);
  pAW.push(saveWidth);
  pAC.push(saveColour);


  spAX.push(x);
  spAY.push(y);
  spAS.push(saveShape);
  spAW.push(saveWidth);
  spAC.push(saveColour);

  if(saveShape == "move")
  {
    dispachCanvasUpdate();

    spAX = [];
    spAY = [];
    spAS = [];
    spAW = [];
    spAC = [];
  }
}


//#### Redraws the canvas from array ####
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

// Sets up the canvas json
function initCANVAS() {
  console.log("getting canvas ready");

  //canvasData.canvas[socket.id] = {"page":{ "1":{"layers":{"1":{}}}}};
  console.log("JsonFile: " + JSON.stringify(canvasData));

  canvasData.canvas[socket.id].page[page].layer[layer].x = []; // X axis
  canvasData.canvas[socket.id].page[page].layer[layer].y = []; // Y axis
  canvasData.canvas[socket.id].page[page].layer[layer].a = []; // action
  canvasData.canvas[socket.id].page[page].layer[layer].s = []; // size 
  canvasData.canvas[socket.id].page[page].layer[layer].c = []; // colour
}