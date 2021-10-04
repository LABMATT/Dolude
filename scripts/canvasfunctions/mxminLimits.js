// this is in charge of marking limits to visual see where a layer outer point are.

var ctx_limits = false;
var ctx_limits_type = 0; // 0 = all, 1 = layer only, 2 = strokes.

function mxminLimits(ctx) {
  if(ctx_limits == true) {

    if(ctx_limits_type == 0 || ctx_limits_type == 1)
    {

    if(ds.getPage(currentPage).getLayer(currentLayer).minxy != null || ds.getPage(currentPage).getLayer(currentLayer).maxxy != null)
    {
  ctx.beginPath();
  ctx.fillStyle = "red";
  ctx.arc(ds.getPage(currentPage).getLayer(currentLayer).maxxy[0],ds.getPage(currentPage).getLayer(currentLayer).maxxy[1],20,0,2*Math.PI);
  ctx.fill();
  ctx.closePath();
  ctx.stroke();
  ctx.beginPath();
  ctx.fillStyle = "red";
  ctx.arc(ds.getPage(currentPage).getLayer(currentLayer).minxy[0],ds.getPage(currentPage).getLayer(currentLayer).minxy[1],20,0,2*Math.PI);
  ctx.fill();
  ctx.stroke();
  ctx.closePath();
    }
  } 

  if(ctx_limits_type == 0 || ctx_limits_type == 2)
  {
    var strokes = ds.getPage(currentPage).getLayer(currentLayer).getStrokes();

    strokes.forEach(element => {

      if(element.maxxy[0] != undefined) {
      ctx.beginPath();
      ctx.fillStyle = "green";
      ctx.arc(element.maxxy[0], element.maxxy[1],20,0,2*Math.PI);
      ctx.fill();
      ctx.closePath();
      ctx.stroke();
      ctx.beginPath();
      ctx.fillStyle = "green";
      ctx.arc(element.minxy[0], element.minxy[1],20,0,2*Math.PI);
      ctx.fill();
      ctx.stroke();
      ctx.closePath();

      }
      
    });
    
  }
}
}