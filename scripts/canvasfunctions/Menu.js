var displayMenu = false;

function menu(ctx) {

    if(displayMenu == true)
    {
    
        ctx.globalAlpha = 0.5;

      ctx.beginPath();
      ctx.fillStyle = "grey";
      ctx.rect(0, 0, window.innerWidth, window.innerHeight);
      ctx.fill();
      ctx.closePath();

      ctx.globalAlpha = 1.0;

    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.arc(window.innerWidth / 2, window.innerHeight / 2 , 50, 0,2*Math.PI);
    ctx.fill();
    ctx.closePath();
    }
}