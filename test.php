<!DOCTYPE html>
<html>

<head>
  <meta name="viewport" content="width=device-width, user-scalable=no" />
  <title>Press and Hold</title>
  <style>
    #item {
      margin: 30px;
      width: 150px;
      height: 150px;
      background-color: #EEE;
      border: 5px dashed #111;
      border-radius: 50%;
    }

    #item:hover {
      background-color: #CCC;
      cursor: pointer;
    }
  </style>
</head>

<body>

  <div id="item"></div>

  <script>
    // The item (or items) to press and hold on
    let item = document.querySelector("#item");

    let timerID;
    let counter = 0;

    let pressHoldEvent = new CustomEvent("pressHold");

    // Increase or decreae value to adjust how long
    // one should keep pressing down before the pressHold
    // event fires
    let pressHoldDuration = 50;

    // Listening for the mouse and touch events
    item.addEventListener("mousedown", pressingDown, false);
    item.addEventListener("mouseup", notPressingDown, false);
    item.addEventListener("mouseleave", notPressingDown, false);

    item.addEventListener("touchstart", pressingDown, false);
    item.addEventListener("touchend", notPressingDown, false);

    // Listening for our custom pressHold event
    item.addEventListener("pressHold", doSomething, false);

    function pressingDown(e) {
      // Start the timer
      requestAnimationFrame(timer);

      e.preventDefault();

      console.log("Pressing!");
    }

    function notPressingDown(e) {
      // Stop the timer
      cancelAnimationFrame(timerID);
      counter = 0;

      console.log("Not pressing!");
    }

    //
    // Runs at 60fps when you are pressing down
    //
    function timer() {
      console.log("Timer tick!");

      if (counter < pressHoldDuration) {
        timerID = requestAnimationFrame(timer);
        counter++;
      } else {
        console.log("Press threshold reached!");
        item.dispatchEvent(pressHoldEvent);
      }
    }

    function doSomething(e) {
      console.log("pressHold event fired!");
    }

  </script>
</body>

</html>
