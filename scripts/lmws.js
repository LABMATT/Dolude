// This file connects to the server with websocket info.

// Server the websocket conencts to.
const url = "ws://localhost:8080";
const connection = new WebSocket(url);
// Time between retrying websocket when server disconnects.
var rstime = 1000;


// When websocket is opened send the data.
 connection.onopen = () => {

     console.log("Websocket connected to " + url +"!");
     connection.send(["cow", "udder"]);
}

connection.onerror = error => {
  console.log(`WebSocket error: ${error}`)
}

connection.onmessage = msg => {
 
    console.log(msg.data)
  
}
