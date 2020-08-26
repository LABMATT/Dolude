var ctl = false;

// Registers events for the key presses.
function shortcutManger() {
    console.log("READ FOR SOME KEYS");

    const log = document.getElementById('body');
    document.addEventListener('keydown', downTrigger);
    document.addEventListener('keyup', upTrigger);

}


// ON key down.
function downTrigger(e)
{
    console.log("we")
    console.log("key down is:" + e.code);
    var keycode = e.code;

    if(keycode == "ControlLeft")
    {
        ctl = true;
        console.log("ITS CONTL")
    } else if(keycode == "KeyJ" && ctl == true)
    {
        joinHost();
        e.preventDefault();
        e.stopPropagation();
    }
    else if(keycode == "KeyH" && ctl == true)
    {
        createHost();
        e.preventDefault();
        e.stopPropagation();
    }
}


// ON key up.
function upTrigger(e)
{
    console.log("key up is:" + e.code);

    if(e.code == "ControlLeft")
    {
        ctl = false;
    }
}