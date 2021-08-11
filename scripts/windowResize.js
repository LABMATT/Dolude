
// When window is resized or stuff changes then we need to trigger the resize event. Set the new canvas high to window size, then redraw the current canvas to the newly resized one.
function resize() {
  var canvas = document.getElementById("myCanvas");

  console.log("resized!");

  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;

  redrawCanvas();
}
