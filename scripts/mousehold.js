
function mousehold() {

var click = false;

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
mouseXY();
console.log("Mouse down");
}

function mouseEnd()
{
  click = false;
  console.log("Mouse ups");
}

function touchStart() {
click = true;
fingerXY();
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
mouseXY();
}
}

function touchCor()
{
  console.log("mouse moved: " + click);

if (click == true)
{
console.log("caling darw");
fingerXY();
}
}

}
