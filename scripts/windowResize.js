function resize() {
  var canvas = document.getElementById("myCanvas");

  /* Rresize the canvas to occupy the full page,
     by getting the widow width and height and setting it to canvas*/

  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;

  var ctx = canvas.getContext("2d");
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}
