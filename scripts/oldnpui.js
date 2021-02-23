var nodeName = [];
var nodeX = [];
var nodeY = [];

function anchor(x, y, size, text, textColour, colour, outline, src, func)
{
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");

  ctx.beginPath();
  ctx.fillStyle = colour;
  ctx.arc(x, y, size, 0, 2 * Math.PI);
  ctx.fill();

  ctx.textAlign = "center";
  ctx.fillStyle = textColour;
  ctx.font = (size/2.5) + "px Arial";
  ctx.fillText(text ,x ,y + size + 20);
  ctx.closePath();

  nodeName.push("anchor");
  nodeX.push(x);
  nodeY.push(y);
}

// A node is a child dot of the main anchor dot or anothe node.
// Perant = who the dot is connected and accessaible from.
// Angle = angle from 0 that the dot is reltive to another perant dot. 0 angle = Stright up (top of page).
// distance = How far the dot is from its perant.
// text = the text displayed under the node.
// src = the image thats displayed on the node.
// func = the function that is triggered when clicked.
function node(perant, name, angle, distance, size, colour, textColour, src) {

var perantXY = [];
var x, y;
var validPernat = false;

for(var i = 0; i < nodeName.length; i++)
{

  console.log("looking for: " + perant);
  console.log("currently at: " + nodeName[i]);

  if(nodeName[i] == perant)
  {
    perantXY[0] = nodeX[i];
    perantXY[1] = nodeY[i];
    console.log("FOund perant!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    validPernat = true;
  }
}

if(validPernat == true)
{
  x = perantXY[0] + Math.cos(Math.PI * angle / 180) * distance;
  y = perantXY[1] + Math.sin(Math.PI * angle / 180) * distance;

  console.log("PerantX: " + perantXY[0]);
  console.log("PerantY: " + perantXY[1]);
  console.log("newX: " + x);
  console.log("newY: " + y);

  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");

  ctx.beginPath();
  ctx.moveTo(perantXY[0], perantXY[1]);
  ctx.lineTo(x, y);
  ctx.stroke();

  ctx.fillStyle = colour;
  ctx.arc(x, y, size, 0, 2 * Math.PI);
  ctx.fill();
  ctx.stroke()

  ctx.textAlign = "center";
  ctx.fillStyle = textColour;
  ctx.font = (size/2.5) + "px Arial";
  ctx.fillText(name, x, y + size + 20);

  ctx.closePath();

  nodeName.push(name);
  nodeX.push(x);
  nodeY.push(y);
}
}

function flushUI() {

  nodeName = [];
  nodeX = [];
  nodeY = [];
}
