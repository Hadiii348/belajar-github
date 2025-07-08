New Features in JavaScript 2024
Object.groupBy()
Map.groupBy()
String isWellFormed()
String toWellFormed()
Promise.withResolvers()
Atomics.waitAsync
Warning
These features are relatively new.

Older browsers may need an alternative code (Polyfill)

JavaScript Object.groupBy()
Example
// Create an Array
const fruits = [
  {name:"apples", quantity:300},
  {name:"bananas", quantity:500},
  {name:"oranges", quantity:200},
  {name:"kiwi", quantity:150}
];

// Callback function to Group Elements
function myCallback({ quantity }) {
  return quantity > 200 ? "ok" : "low";
}

// Group by Quantity
const result = Object.groupBy(fruits, myCallback);
Description
The Object.groupBy() method groups elements of an object according to string values returned from a callback function.

The Object.groupBy() method does not change the original object.

Note:
The elements in the original and in the returned object are the same.

Changes will be reflected in both the original and in the returned object.

JavaScript Map.groupBy()
Example
// Create an Array
const fruits = [
  {name:"apples", quantity:300},
  {name:"bananas", quantity:500},
  {name:"oranges", quantity:200},
  {name:"kiwi", quantity:150}
];

// Callback function to Group Elements
function myCallback({ quantity }) {
  return quantity > 200 ? "ok" : "low";
}

// Group by Quantity
const result = Map.groupBy(fruits, myCallback);
Description
The Map.groupBy() method groups elements of an object according to string values returned from a callback function.

The Map.groupBy() method does not change the original object.

Note:
The elements in the original and in the returned object are the same.

Changes will be reflected in both the original and in the returned object.

Object.groupBy() vs Map.groupBy()
The difference between Object.groupBy() and Map.groupBy() is:

Object.groupBy() groups elements into a JavaScript object.

Map.groupBy() groups elements into a Map object.

ADVERTISEMENT

JavaScript String isWellFormed()
The isWellFormed() method returns true if a string is well formed.

Otherwise it returns false.

A string is not well formed if it contains lone surrogates.

Examples
let text = "Hello world!";
let result = text.isWellFormed();
let text = "Hello World \uD800";
let result = text.isWellFormed();
Lone Surrogates
A lone surrogate is a Unicode surrogate code point that is not part of a valid surrogate pair used to represent characters in UTF-16 encoding.

JavaScript String toWellFormed()
The String method toWellFormed() returns a new string where all "lone surrogates" are replaced with the Unicode replacement character (U+FFFD).

Examples
let text = "Hello World \uD800";
let result = text.toWellFormed();