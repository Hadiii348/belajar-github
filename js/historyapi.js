The History back() Method
The back() method loads the previous URL in the windows.history list.

It is the same as clicking the "back arrow" in your browser.

Example
<button onclick="myFunction()">Go Back</button>

<script>
function myFunction() {
  window.history.back();
}
</script>
Go Back

ADVERTISEMENT

The History go() Method
The go() method loads a specific URL from the history list:

Example
<button onclick="myFunction()">Go Back 2 Pages</button>

<script>
function myFunction() {
  window.history.go(-2);
}
</script>
Go Back 2 Pages

History Object Properties
Property	Description
length	Returns the number of URLs in the history list
History Object Methods
Method	Description
back()	Loads the previous URL in the history list
forward()	Loads the next URL in the history list
go()	Loads a specific URL from the history list