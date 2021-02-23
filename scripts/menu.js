//https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/button


// Is menu been displayed?
var displayMenu = false;



// Register events for button press
function startMenu() {
  const event = document.getElementById('myCanvas');
  event.addEventListener('mousedown', menuTrigger);
  event.addEventListener("mouseup", clearMenu);
}



// If button is pressed activate menu
function menuTrigger(e) {
if (typeof e === 'object') {
    if(e.button) {
      displayMenu = true;
      menu();
    }
}
}

function clearMenu() {
if(displayMenu == true)
{
  displayMenu == false;
  menuActiveFF(false);
  flushUI();
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

  anchor(menuCenterX, menuCenterY, 50, "Dolude", "black", "orange", "", "", "");
  node("anchor", "first", 0, 100, 30, "red", "", "");
  node("first", "second", 0, 100, 30, "red", "", "");
  node("second", "third", 350, 200, 30, "blue", "", "");

}

function stuture() {

}
