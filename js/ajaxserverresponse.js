Server Response Properties
Property	Description
responseText	get the response data as a string
responseXML	get the response data as XML data
The responseText Property
The responseText property returns the server response as a JavaScript string, and you can use it accordingly:

Example
document.getElementById("demo").innerHTML = xhttp.responseText;
The responseXML Property
The XMLHttpRequest object has an in-built XML parser.

The responseXML property returns the server response as an XML DOM object.

Using this property you can parse the response as an XML DOM object:

Example
Request the file cd_catalog.xml and parse the response:

const xmlDoc = xhttp.responseXML;
const x = xmlDoc.getElementsByTagName("ARTIST");

let txt = "";
for (let i = 0; i < x.length; i++) {
  txt += x[i].childNodes[0].nodeValue + "<br>";
}
document.getElementById("demo").innerHTML = txt;

xhttp.open("GET", "cd_catalog.xml");
xhttp.send();
ADVERTISEMENT

Server Response Methods
Method	Description
getResponseHeader()	Returns specific header information from the server resource
getAllResponseHeaders()	Returns all the header information from the server resource
The getAllResponseHeaders() Method
The getAllResponseHeaders() method returns all header information from the server response.

Example
const xhttp = new XMLHttpRequest();
xhttp.onload = function() {
    document.getElementById("demo").innerHTML =
    this.getAllResponseHeaders();
}
xhttp.open("GET", "ajax_info.txt");
xhttp.send();
The getResponseHeader() Method
The getResponseHeader() method returns specific header information from the server response.

Example
const xhttp = new XMLHttpRequest();
xhttp.onload = function() {
    document.getElementById("demo").innerHTML =
    this.getResponseHeader("Last-Modified");
}
xhttp.open("GET", "ajax_info.txt");
xhttp.send();
