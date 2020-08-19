//https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/button

function startMenu() {
  const event = document.getElementById('myCanvas');
  event.addEventListener('mousedown', menuTrigger);
}

function menuTrigger(e) {
if (typeof e === 'object') {
    if(e.button) {
      curSize();
      saveDrawingCookie();
console.log("presed");

    }
}
}
