This page teaches you how to find and access HTML elements in an HTML page.

Finding HTML Elements
Often, with JavaScript, you want to manipulate HTML elements.

To do so, you have to find the elements first. There are several ways to do this:

Finding HTML elements by id
Finding HTML elements by tag name
Finding HTML elements by class name
Finding HTML elements by CSS selectors
Finding HTML elements by HTML object collections
Finding HTML Element by Id
The easiest way to find an HTML element in the DOM, is by using the element id.

This example finds the element with id="intro":

Example
const element = document.getElementById("intro");
If the element is found, the method will return the element as an object (in element).

If the element is not found, element will contain null.

Finding HTML Elements by Tag Name
This example finds all <p> elements:

Example
const element = document.getElementsByTagName("p");
This example finds the element with id="main", and then finds all <p> elements inside "main":

Example
const x = document.getElementById("main");
const y = x.getElementsByTagName("p");
ADVERTISEMENT

Finding HTML Elements by Class Name
If you want to find all HTML elements with the same class name, use getElementsByClassName().

This example returns a list of all elements with class="intro".

Example
const x = document.getElementsByClassName("intro");
Finding HTML Elements by CSS Selectors
If you want to find all HTML elements that match a specified CSS selector (id, class names, types, attributes, values of attributes, etc), use the querySelectorAll() method.

This example returns a list of all <p> elements with class="intro".

Example
const x = document.querySelectorAll("p.intro");
Finding HTML Elements by HTML Object Collections
This example finds the form element with id="frm1", in the forms collection, and displays all element values:

Example
const x = document.forms["frm1"];
let text = "";
for (let i = 0; i < x.length; i++) {
  text += x.elements[i].value + "<br>";
}
document.getElementById("demo").innerHTML = text;
The following HTML objects (and object collections) are also accessible:

document.anchors
document.body
document.documentElement
document.embeds
document.forms
document.head
document.images
document.links
document.scripts
document.title