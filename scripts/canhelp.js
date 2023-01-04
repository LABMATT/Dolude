// This function sends help commands to the console for control.

function canhelp()
{
    console.log(" ");
    console.log(" ");
    console.log("===== HELP COMMANDS =====");
    console.log("ctx_limits      | true,false | Shows the current canvas array size.");
    console.log("ctx_limits_type | 0 = all, 1 = layer only, 2 = strokes | Shows either layers, stroke or both boundaries");
    console.log(" ");
    console.log("changePage(pageNumber); | 0 or > | Takes page number, will make new page if nothing exists.");
    console.log("changeLayer(layerNumber);  | 0 or > | Changes the current layer your editing.");
    console.log("disableLayer(layerNumber); | 0 or > | Disable a layer of your choice.");
    console.log("enableLayer(layerNumber);  | 0 or > | Enables a layer that has been disabled.");
    console.log(" ");
    console.log("colour | {ANY HTML COLOUR} | Change the colour of the brush.");
    console.log("colour | {ANY HTML COLOUR} | Change the colour of the brush.");
    console.log("canvasBacking(); | {ANY HTML COLOUR} | Change the colour of the page.");
    console.log("===== END =====");

}