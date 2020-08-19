
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
function mouseStart(e) {

  if (typeof e === 'object') {

if(e.button == 0)
{
  click = true;
  mouseXY(true);
  console.log("Mouse down");
}
  }



}

function mouseEnd()
{
  click = false;
  console.log("Mouse ups");
}


function touchStart() {
click = true;
fingerXY(true);
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
mouseXY(false);
}

}

function touchCor()
{
  console.log("touch moved: " + click);

if (click == true)
{
console.log("caling darw");
fresh = false;
fingerXY(false);
}
}

}
