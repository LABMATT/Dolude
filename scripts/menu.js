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
  redrawCanvas();
}
}


function menu() {


  new 

  menuActiveFF(true);

console.log("Menu is active");

}

function stuture() {

}
