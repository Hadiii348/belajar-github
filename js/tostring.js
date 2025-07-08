const fruits = ["Banana", "Orange", "Apple", "Mango"];

let myList = fruits.toString();
JavaScript Date toString()
When used on a date, toString() returns a human-readable date and time string.

Example
Convert a date object to a string:

const d = new Date();

let text = d.toString();
JavaScript Number toString()
When used on a number, toString() returns the number as a string.

Example
let x = 123;

let text = x.toString();
Convert a number to a string, using base 2 (binary):

Example
let x = 123;

let text = x.toString(2);
JavaScript Function toString()
When used on a function, toString() returns the source code of the function as a string.

JavaScript Object toString()
When used on an object, toString() an object returns "[object Object]".

To provide a meaningful string representation, it can be overridden in the object definition:

Example
let person = {
  firstname: "John",
  lastname: "Doe",
}
let text = person.toString();