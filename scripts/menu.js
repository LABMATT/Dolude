//https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/button

var displayMenu = false;

function startMenu() {
  const event = document.getElementById('myCanvas');
  event.addEventListener('mousedown', menuTrigger);
  event.addEventListener("mouseup", clearMenu);
}

function menuTrigger(e) {
if (typeof e === 'object') {
    if(e.button) {
      displayMenu = true;
      menu();

console.log("presed");

    }
}
}

function clearMenu() {
if(displayMenu == true)
{
  displayMenu == false;
  menuActiveFF(false);
  redrawCanvas();
}
}


function menu() {
  var canvas = document.getElementById("myCanvas");
  var cwidth = canvas.width;
  var cheight = canvas.height;
  var menuCenterX = cwidth / 2;
  var menuCenterY = cheight / 2;

  menuActiveFF(true);

  var ctx = canvas.getContext("2d");
ctx.beginPath();

ctx.arc(menuCenterX, menuCenterY, 50, 0, 2 * Math.PI);
ctx.fillStyle = "orange"
ctx.fill();
ctx.stroke();
ctx.closePath();

}

function stuture() {

}
