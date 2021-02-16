var size = 2;

// What layer and page were currently drawing on. Canvas data stores all the data of the drawing.
var currentPage = 0;
var currentLayer = 0;

// Points Arrys
var pAX = []; // X cordiante
var pAY = []; // Y cordainte
var pAS = []; // Shape type
var pAW = []; // Shape width
var pAC = []; // Shape colour

var ds;


// This function is triggered if this is a new line, mouse just touched paper, fresh.
function mouseXY(fresh)
{
  var x = event.clientX;
  var y = event.clientY;
 drawPoint(x,y, fresh);
}

// This function is triggered if this is a new line, finger just touched paper, fresh. 
function fingerXY(fresh)
{

  var x = event.touches[0].clientX;
  var y = event.touches[0].clientY;
  drawPoint(x,y, fresh);
}




// Draw point handels main canvas drawing. Takes the canvas, adds new points and old ones.
function drawPoint(x, y, fresh)
{
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  var submittShape  = "line"

  ds.getPage(currentPage).getLayer(currentLayer);  


  // If this is a new point, set the old x and old y to the current xy values. this means no line is drawn to previos line.
  if(fresh == true)
  {
    ds.getPage(currentPage).getLayer(currentLayer).lx = x;
    ds.getPage(currentPage).getLayer(currentLayer).ly = y;
    
    fresh = false;
    submittShape = "move";
  }

if(ds.getPage(currentPage).getLayer(currentLayer).lx == null && ds.getPage(currentPage).getLayer(currentLayer).ly == null)
{
  ds.getPage(currentPage).getLayer(currentLayer).lx = x;
  ds.getPage(currentPage).getLayer(currentLayer).ly = y;
}

savePoints(x, y, submittShape, 20, 'black');

  ctx.beginPath();
  ctx.lineCap = 'round';
  ctx.lineWidth = size;

  ctx.moveTo(ds.getPage(currentPage).getLayer(currentLayer).lx, ds.getPage(currentPage).getLayer(currentLayer).ly);
  ctx.lineTo(x,y);

  ctx.fillStyle = 'black';
  ctx.fill();
  ctx.stroke();
  ctx.closePath();

  ds.getPage(currentPage).getLayer(currentLayer).lx = x;
  ds.getPage(currentPage).getLayer(currentLayer).ly = y;
}



function savePoints(x, y, saveShape, saveWidth, saveColour) {

  ds.getPage(currentPage).getLayer(currentLayer).pAX.push(x);
  ds.getPage(currentPage).getLayer(currentLayer).pAY.push(y);  
  ds.getPage(currentPage).getLayer(currentLayer).pAS.push(saveShape);  
  ds.getPage(currentPage).getLayer(currentLayer).pAW.push(saveWidth);
  ds.getPage(currentPage).getLayer(currentLayer).pAC.push(saveColour);      
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

  loadArrayPoints();

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

function changePage(lipage) {
  currentPage = lipage;
  console.log("Changing page to: " + currentPage)

  loadArrayPoints();
  redrawCanvas();
}

function loadArrayPoints()
{

pAX = ds.getPage(currentPage).getLayer(currentLayer).pAX; // X cordiante
pAY = ds.getPage(currentPage).getLayer(currentLayer).pAY; // Y cordainte
pAS = ds.getPage(currentPage).getLayer(currentLayer).pAS; // Shape type
pAW = ds.getPage(currentPage).getLayer(currentLayer).pAW; // Shape width
pAC = ds.getPage(currentPage).getLayer(currentLayer).pAC; // Shape colour
}



// Sets up the canvas json
function initCANVAS() {
  console.log("getting canvas ready");

  // cdt(cd) > user(localuser) > canvasNum(1) > layers(1) > x  
  
  ds = new DataStructure();
}

