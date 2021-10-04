var refreshrate = 6;

function init()
{
    src="scripts/canvasfunctions/mxminLimits.js";
console.log("Setting up Dolude.");
initCANVAS();
resize(); 
disableRightMenu();
mousehold();
shortcutManger();
createHost();
joinMenu();
//start();
setInterval(coreloop, refreshrate);
console.log("INIT COMPLETE");
}