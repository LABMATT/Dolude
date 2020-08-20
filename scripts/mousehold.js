
var click = false;
var fresh = true;
var menuActive = false;

function mousehold() {

const event = document.getElementById('myCanvas');

event.addEventListener("mousedown", mouseStart);
event.addEventListener("mouseup", mouseEnd);
event.addEventListener("mouseleave", mouseEnd);

event.addEventListener("touchstart", touchStart);
event.addEventListener("touchend", touchEnd);

event.addEventListener("mousemove", getMouseCor);
event.addEventListener("touchmove", touchCor);
}

// When the mouse is pressed down. Trigger this.
function mouseStart(e) {

  if (typeof e === 'object') {

if(e.button == 0 && menuActive == false)
{
  click = true;
  mouseXY(true);
  console.log("Mouse down");
}
}
}

// WHen mouse is let got then finish drawing.
function mouseEnd()
{
  click = false;
  console.log("Mouse ups");
}


function touchStart() {
if(menuActive == false)
{
click = true;
fingerXY(true);
console.log("finger down");
}
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
  if(menuActive == false)
  {
console.log("caling darw");
mouseXY(false);
} else {
  mouseEnd();
}
}
}

function touchCor()
{
  console.log("touch moved: " + click);

if (click == true)
{
  if(menuActive == false)
  {
console.log("caling darw");
fresh = false;
fingerXY(false);
} else {
  touchEnd();
}
}
}

function menuActiveFF(isActive) {
  menuActive = isActive;
}
