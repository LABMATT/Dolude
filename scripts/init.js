function init()
{
  console.log("INIT");
resize();
disableRightMenu();
mousehold();
startMenu();
loadDrawingCookie();
setInterval(saveDrawingCookie, 10000);
}
