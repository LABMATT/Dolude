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
setInterval(coreloop, refreshrate);
console.log("INIT COMPLETE");
}