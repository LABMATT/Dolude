var size = 2; // Size of the line drawn.
var currentPage = 0; // The current page in use
var currentLayer = 0; // The current layer in use.
var colour = "black"; // The colour of the line in use.
var disabledLayers = []; // Layers that are not displayed.

// Main data struture element.
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



// Draw poing draws a point on current canvas, then adds to the drawing array.
function drawPoint(x, y, fresh)
{
  var lx = 0, ly = 0;
  
  if(fresh == true)
  {

    ds.getPage(currentPage).getLayer(currentLayer).newStroke(colour, size);
    ds.getPage(currentPage).getLayer(currentLayer).setStroke(x, y);

    lx = x;
    ly = y;
  } else{

    lx = ds.getPage(currentPage).getLayer(currentLayer).getLatestStroke().getLX();
    ly = ds.getPage(currentPage).getLayer(currentLayer).getLatestStroke().getLY();
    ds.getPage(currentPage).getLayer(currentLayer).setStroke(x, y);
  }

  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");

  ctx.beginPath();
  ctx.lineCap = 'round';
  ctx.lineWidth = size;
  ctx.strokeStyle = colour;
  ctx.moveTo(lx, ly);
  ctx.lineTo(x, y);
  

  ctx.fillStyle = 'black';
  ctx.stroke();
  ctx.fill();
  ctx.closePath();
}



//#### Redraws the canvas from array ####
function redrawCanvas() {

  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");

  //ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.rect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = ds.getPage(currentPage).pageColour;
  ctx.fill();
  ctx.closePath();


  //layer count
  var lrc = ds.getPage(currentPage).getLayerNumbers();
  var dlr = false;
  console.log("the amout of layers is: " + lrc);

  // cycle though each layer, check if layer is disabled, if its not draw it!. if it is skip it.
  for(var i = 0; i < lrc; i++)
  {
    // Check if the layer is disalbed
   disabledLayers.forEach(element => {
     if(element == i)
     {
       dlr = true;
     }
   }); 
   
   // If layer is not disabled, then set current layer to that and reday canvas
   if(dlr == false)
   {
     redraw(i);
   } else{
     console.log("mot redrawing thjis layer cus disabled");
    dlr = false;
   }
  }
}

// redraw canvas layers and lines called by redrawcanvas.
function redraw(lr) {
  console.log("redrawn layer: " + lr);

  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");

  console.log("Starting Redraw Loop.");

  // Gets the page class and get the layer and drawing then loop between them and draw them back on the canvas.
  ds.getPage(currentPage).getLayer(lr).getStrokes().forEach(vectorOhYeah => {
    
  ctx.beginPath();
  ctx.lineCap = 'round';
  ctx.lineWidth = vectorOhYeah.lsize;
  ctx.strokeStyle = vectorOhYeah.colour;

  var x = vectorOhYeah.xvec;
  var y = vectorOhYeah.yvec;

  for(var i = 0; i < x.length; i++)
  {
    ctx.moveTo(x[i], y[i]);
    ctx.lineTo(x[i + 1], y[i + 1]);
  }

  ctx.fillStyle = 'black';
  ctx.fill();
  ctx.stroke();
  ctx.closePath();
  });
}


// Set the colour of the current canvas to colour.
function canvasBacking(colour) {

  ds.getPage(currentPage).pageColour = colour;
  redrawCanvas();
}



// Change the page 
function changePage(lipage) {
  currentPage = lipage;
  console.log("Changing page to: " + currentPage)

  loadArrayPoints();
  redrawCanvas();
}



// change layer, if layer doest exist then create next layer.
function changeLayer(lr)
{
  currentLayer = lr;
  console.log("now editing layer: " + lr);

  redrawCanvas();
}



// enable a layer form the array.
function enableLayer(lr)
{
disabledLayers.splice(disabledLayers.indexOf(lr), 1);
redrawCanvas();
}

function disableLayer(lr)
{
disabledLayers.push(lr);
redrawCanvas();
}


// When shortcutmanger gets  ctl+s it calls this event to save canvas.
// Loop grabs each page, saves data as json, then grabs each layer and saves data as json, adds to string then writes to file.
function saveDrawing()
{
  console.log("saving file%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
  var save = "";
  
  ds.pages.forEach(element => {

    save += ";" + JSON.stringify(element.pageData());
    console.log("doing a page");
    
    element.layers.forEach(lyr => {

      console.log("my returned data was: " + JSON.stringify(lyr.getDataArray()))
      save += + JSON.stringify(lyr.getDataArray());
      console.log("doing a layer");
    });
  });

  console.log("save data is: " + save);

    var a = document.createElement("a");
    var file = new Blob([save]);
    a.href = URL.createObjectURL(file);
    a.download = "myDrawing.dolude";
    a.click();
}




// Submit the input tag, this is picked up by a listener that load the json file in
function submitLoadDrawing()
{
  document.getElementById("upload").click();
}


// Once upload element is submitted it calls this function. This reads the file and begins loading all the data back into the main data structre.
function loadDrawing()
{
  let file = upload.files[0];

  let reader = new FileReader();

  reader.readAsText(file);

  reader.onload = function() {
    console.log(reader.result);
    
    var splitInteral = reader.result.split(';');
    splitInteral.forEach(page => {
      console.log("page element: " + page);
      if(page.size != 0)
      {
      var layer = page.replace(";","").split('{');
      layer.forEach(element => {
        console.log("retuned element: " + element);
        console.log("retuned json was: " + JSON.parse(element));
        console.log("/n");
      });

      }

    });
  };

  reader.onerror = function() {
    console.log(reader.error);
  };
}


// Sets up the canvas json
function initCANVAS() {
  console.log("getting canvas ready");

  // cdt(cd) > user(localuser) > canvasNum(1) > layers(1) > x  
  
  ds = new DataStructure();
}

// Rubber will remove a drawing line.
function rubber() {
  
}