// https://www.w3schools.com/js/js_cookies.asp


// Set a cookie.
function setCookie(name, cvalue) {
  var d = new Date();
  d.setTime(d.getTime() + (365*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = name + "=" + cvalue + ";" + expires + ";path=/";
}


// Get the cookie by name.
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

// See if a cookie exists
function checkCookie(name) {
  var username = getCookie(name);
  if (username != "") {
   alert("Welcome again " + username);
   return true;
  } else {
    return false;
  }
}
