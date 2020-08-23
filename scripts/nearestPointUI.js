var nodePerant= [];
var nodeName = [];
var nodeX = [];
var nodeY = [];
var nodeText = [];
var nodeAngle = [];
var nodeDistance = [];
var nodeSrc = [];
var nodeFunc = [];

var map = a

function anchor(x, y, size, text, textColour, colour, outline, src, func)
{
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");

  ctx.fillStyle = colour;
  ctx.arc(x, y, size, 0, 2 * Math.PI);
  ctx.fill();

  ctx.textAlign = "center";
  ctx.fillStyle = textColour;
  ctx.font = (size/2.5) + "px Arial";
  ctx.fillText(text ,x ,y + size + 20);
}

// A node is a child dot of the main anchor dot or anothe node.
// Perant = who the dot is connected and accessaible from.
// Angle = angle from 0 that the dot is reltive to another perant dot. 0 angle = Stright up (top of page).
// distance = How far the dot is from its perant.
// text = the text displayed under the node.
// src = the image thats displayed on the node.
// func = the function that is triggered when clicked.
function node(perant, nodeName, angle, distance, size, text, src, func) {

var x, y;


}


function drawMenu() {

}
