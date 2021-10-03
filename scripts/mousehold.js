// Register all the events for drawing. 
// When clicked it adds a listner for the mouse down click.

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
}
}
}

// WHen mouse is let got then finish drawing.
function mouseEnd()
{
  click = false;
}


function touchStart() {
if(menuActive == false)
{
click = true;
fingerXY(true);
}
}

function touchEnd()
{
  click = false;
}


//Get the movment of the finger or mouse.
function getMouseCor() {


if (click == true)
{
  if(menuActive == false)
  {

mouseXY(false);
} else {
  mouseEnd();
}
}
}

function touchCor()
{

if (click == true)
{
  if(menuActive == false)
  {
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
