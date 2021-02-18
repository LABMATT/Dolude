function init()
{
initCANVAS();
//savePoints();
resize(); 
disableRightMenu();
mousehold();
startMenu();
shortcutManger();
createHost();
joinMenu();
//start();
sockEvents();
console.log("INIT COMPLETE");
}
