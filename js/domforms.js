JavaScript Form Validation
HTML form validation can be done by JavaScript.

If a form field (fname) is empty, this function alerts a message, and returns false, to prevent the form from being submitted:

JavaScript Example
function validateForm() {
  let x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}
The function can be called when the form is submitted:

HTML Form Example
<form name="myForm" action="/action_page.php" onsubmit="return validateForm()" method="post">
Name: <input type="text" name="fname">
<input type="submit" value="Submit">
</form>
JavaScript Can Validate Numeric Input
JavaScript is often used to validate numeric input:

Please input a number between 1 and 10

 Submit
ADVERTISEMENT

Automatic HTML Form Validation
HTML form validation can be performed automatically by the browser:

If a form field (fname) is empty, the required attribute prevents this form from being submitted:

HTML Form Example
<form action="/action_page.php" method="post">
  <input type="text" name="fname" required>
  <input type="submit" value="Submit">
</form>
Automatic HTML form validation does not work in Internet Explorer 9 or earlier.

Data Validation
Data validation is the process of ensuring that user input is clean, correct, and useful.

Typical validation tasks are:

has the user filled in all required fields?
has the user entered a valid date?
has the user entered text in a numeric field?
Most often, the purpose of data validation is to ensure correct user input.

Validation can be defined by many different methods, and deployed in many different ways.

Server side validation is performed by a web server, after input has been sent to the server.

Client side validation is performed by a web browser, before input is sent to a web server.

HTML Constraint Validation
HTML5 introduced a new HTML validation concept called constraint validation.

HTML constraint validation is based on:

Constraint validation HTML Input Attributes
Constraint validation CSS Pseudo Selectors
Constraint validation DOM Properties and Methods
Constraint Validation HTML Input Attributes
Attribute	Description
disabled	Specifies that the input element should be disabled
max	Specifies the maximum value of an input element
min	Specifies the minimum value of an input element
pattern	Specifies the value pattern of an input element
required	Specifies that the input field requires an element
type 	Specifies the type of an input element
For a full list, go to HTML Input Attributes.

Constraint Validation CSS Pseudo Selectors
Selector	Description
:disabled	Selects input elements with the "disabled" attribute specified
:invalid	Selects input elements with invalid values
:optional	Selects input elements with no "required" attribute specified
:required	Selects input elements with the "required" attribute specified
:valid	Selects input elements with valid values
For a full list, go to CSS Pseudo Classes.

