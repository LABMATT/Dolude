
function mousehold() {

var click = false;
var fresh = true;

const event = document.getElementById('myCanvas');

event.addEventListener("mousedown", mouseStart);
event.addEventListener("mouseup", mouseEnd);
event.addEventListener("mouseleave", mouseEnd);

event.addEventListener("touchstart", touchStart);
event.addEventListener("touchend", touchEnd);

event.addEventListener("mousemove", getMouseCor);
event.addEventListener("touchmove", touchCor);


// I
function mouseStart() {
click = true;
fresh = true;
mouseXY(fresh);
console.log("Mouse down");
}

function mouseEnd()
{
  click = false;
  console.log("Mouse ups");
}

function touchStart() {
click = true;
fresh = true;
fingerXY(fresh);
console.log("finger down");
}

function touchEnd()
{
  click = false;
  console.log("finger ups");
}


//Get the movment of the finger or mouse.
function getMouseCor() {

  console.log("mouse moved: " + click);

if (click == true)
{
console.log("caling darw");
mouseXY(fresh);
fresh = false;
}

}

function touchCor()
{
  console.log("mouse moved: " + click);

if (click == true)
{
console.log("caling darw");
fingerXY(fresh);
fresh = false;
}
}

}
