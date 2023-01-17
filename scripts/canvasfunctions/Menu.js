var displayMenu = false;

function menu(ctx) {

    if(displayMenu == true)
    {
    
        ctx.globalAlpha = 0.5;

      // Draws the alpha gray background.
      ctx.beginPath();
      ctx.fillStyle = "grey";
      ctx.rect(0, 0, window.innerWidth, window.innerHeight);
      ctx.fill();
      ctx.closePath();

      ctx.globalAlpha = 1.0;

      var centerx = window.innerWidth / 2;
      var centery = window.innerHeight / 2;

    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.arc(centerx, centery , 50, 0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();


    ctx.beginPath();
    ctx.fillStyle = "green";
    ctx.arc(centerx, centery - 200 , 50, 0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
    }
}


// This function takes a length of a nodes connection and the angle from orgin and cacluated the X Y postion for the next node. Produced as a return value.
function nodeCord(angle, distance)
{
  // Choose what type of trig function to preform.

  if(angle > -1 && angle < 91)
  {
    console.log("Function will preform 1 LESS THAN 90")
  }
  
  if(angle > 90 && angle < 181)
  {
    console.log("Function will preform 2, GREATE Rthan 90");
  }

  if(angle > 180 && angle < 271)
  {
    console.log("Function will preform 3, GREATE Rthan 180");
  }

  if(angle > 270 && angle < 361) 
  {
    console.log("Function will preform 4, GREATE Rthan 270");
  }

  if(angle >360)
  {
    console.log("MENU.JS/nodeCord: Angle greater than 360. Range [0-260]");
  }
}