function drawManger()
{

var canvas = document.getElementById("myCanvas");

var x = event.clientX;
var y = event.clientY;

var ctx = canvas.getContext("2d");

//ctx.fillStyle = "black";
//ctx.fillRect(x,y,x+100,y+100); // fill in the pixel at (10,10)
 var radius = 70;
ctx.beginPath();
ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
ctx.fillStyle = 'black';
ctx.fill();

}
