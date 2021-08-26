async function startCapture(displayMediaOptions) {
    let captureStream = null;
  
    try {
        document.getElementById("vid").srcObject = await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
    } catch(err) {
      console.error("Error: " + err);
    }
  }