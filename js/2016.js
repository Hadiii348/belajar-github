New Features in JavaScript 2016
This chapter introduces the new features in ECMAScript 2016:

JavaScript Exponentiation (**)
JavaScript Exponentiation assignment (**=)
JavaScript Array includes()
Browser Support
JavaScript 2016 is supported in all modern browsers since March 2017:

Chrome 52	Edge 15	Firefox 52	Safari 10.1	Opera 39
Jul 2016	Apr 2017	Mar 2017	May 2017	Aug 2016
ES 2016 is not supported in Internet Explorer.

Exponentiation Operator
The exponentiation operator (**) raises the first operand to the power of the second operand.

Example
let x = 5;
let z = x ** 2;
x ** y produces the same result as Math.pow(x, y):

Example
let x = 5;
let z = Math.pow(x,2);
Exponentiation Assignment
The exponentiation assignment operator (**=) raises the value of a variable to the power of the right operand.
Example
let x = 5;
x **= 2;
ADVERTISEMENT

JavaScript Array includes()
ECMAScript 2016 introduced Array.includes to arrays.

This allows us to check if an element is present in an array:

Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.includes("Mango");
