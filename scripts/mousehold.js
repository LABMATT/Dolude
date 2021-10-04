// Register all the events for drawing. 
// When clicked it adds a listner for the mouse down click.

var click = false;
var fresh = true;

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

if(e.button == 0 && displayMenu == false)
{
  click = true;
  mouseXY(true);
} else if(e.button == 2) { // actives the menu
  console.log("button pressed");
  displayMenu = true;
}
}
}

// WHen mouse is let got then finish drawing.
function mouseEnd(e)
{
  click = false;

  if(e.button == 2) {
    displayMenu = false;
  }
}


function touchStart() {
if(displayMenu == false)
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
  if(displayMenu == false)
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
  if(displayMenu == false)
  {
fresh = false;
fingerXY(false);
} else {
  touchEnd();
}
}
}

function displayMenuFF(isActive) {
  displayMenu = isActive;
}
