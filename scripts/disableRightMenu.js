// When you right click in a browers gernaly i brings up a context menu where you can copy save and all sorts of other stuff.
// Becuase we use right click as a menu then we disabled the defualt action of opening that menu.

function disableRightMenu() {
const element = document.getElementById('myCanvas');

  element.addEventListener('contextmenu', function(e) {
    if (e.button == 2) {
      // Block right-click menu thru preventing default action.
      e.preventDefault();
    }
  });
}
