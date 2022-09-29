var refreshrate = 6;

function init()
{
console.log("Setting up Dolude.");
initCANVAS();
resize(); 
disableRightMenu();
mousehold();
shortcutManger();
createHost();
joinMenu();
setInterval(coreloop, refreshrate); // This runs the core loop that updates the canvas
console.log("INIT COMPLETE");
}