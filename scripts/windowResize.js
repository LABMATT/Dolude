function resize() {
  var canvas = document.getElementById("myCanvas");

  console.log("resized!");

  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;

  redrawCanvas();
}
