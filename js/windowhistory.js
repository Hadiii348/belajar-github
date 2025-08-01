Window History
The window.history object can be written without the window prefix.

To protect the privacy of the users, there are limitations to how JavaScript can access this object.

Some methods:

history.back() - same as clicking back in the browser
history.forward() - same as clicking forward in the browser
Window History Back
The history.back() method loads the previous URL in the history list.

This is the same as clicking the Back button in the browser.

Example
Create a back button on a page:

<html>
<head>
<script>
function goBack() {
  window.history.back()
}
</script>
</head>
<body>

<input type="button" value="Back" onclick="goBack()">

</body>
</html>
The output of the code above will be:

ADVERTISEMENT

Window History Forward
The history.forward() method loads the next URL in the history list.

This is the same as clicking the Forward button in the browser.

Example
Create a forward button on a page:

<html>
<head>
<script>
function goForward() {
  window.history.forward()
}
</script>
</head>
<body>

<input type="button" value="Forward" onclick="goForward()">

</body>
</html>