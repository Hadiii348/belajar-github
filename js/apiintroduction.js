What is Web API?
API stands for Application Programming Interface.

A Web API is an application programming interface for the Web.

A Browser API can extend the functionality of a web browser.

A Server API can extend the functionality of a web server.

Browser APIs
All browsers have a set of built-in Web APIs to support complex operations, and to help accessing data.

For example, the Geolocation API can return the coordinates of where the browser is located.

Example
Get the latitude and longitude of the user's position:

const myElement = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    myElement.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  myElement.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}
ADVERTISEMENT

Third Party APIs
Third party APIs are not built into your browser.

To use these APIs, you will have to download the code from the Web.

Examples:

YouTube API - Allows you to display videos on a web site.
Twitter API - Allows you to display Tweets on a web site.
Facebook API - Allows you to display Facebook info on a web site.