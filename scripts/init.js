// Info on setup process
// https://drive.google.com/file/d/1in8FTHWITefyq-Uk_VloN6mcc08LeLFP/view?usp=sharing

var refreshrate = 6;

function init()
{
console.log("Setting up Dolude.");
initCANVAS();         // Setup basic canvas vars
resize();             // Resizes sets canvis size to the new size of the window before redrawing the canvas.
disableRightMenu();   // Disables the context menu that chrome would usaly display when right clicked.
mousehold();          // Mouse hold is an event that knows when the mouse is held down. this is an init var call.
shortcutManger();     // This attaches an event to the 
createHost();         // Sets up host menu however is hidden.
joinMenu();           // Setsup join menue however is hidden.
setInterval(coreloop, refreshrate); // This runs the core loop that updates the canvas
canhelp();            // When trigged, It will bring up a list of commands that can be exacuted.
console.log("INIT COMPLETE");
}