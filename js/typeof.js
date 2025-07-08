Primitive Data Types
In JavaScript, a primitive value is a single value with no properties or methods.

JavaScript has 7 primitive data types:

string
number
boolean
bigint
symbol
null
undefined
The typeof operator returns the type of a variable or an expression.

Examples
typeof "John"         // Returns string
typeof ("John"+"Doe") // Returns string
typeof 3.14           // Returns number
typeof 33             // Returns number
typeof (33 + 66)      // Returns number
typeof true           // Returns boolean
typeof false          // Returns boolean
typeof 1234n          // Returns bigint
typeof Symbol()       // Returns symbol
typeof x              // Returns undefined
typeof null           // Returns object
Note:
In JavaScript, null is a primitive value. However, typeof returns "object".

This is a well-known bug in JavaScript and has historical reasons.

Complex Data Types
A complex data type can store multiple values and/or different data types together.

JavaScript has one complex data type:

object
All other complex types like arrays, functions, sets, and maps are just different types of objects.

The typeof operator returns only two types:

object
function
Example
typeof {name:'John'}   // Returns object
typeof [1,2,3,4]       // Returns object
typeof new Map()       // Returns object
typeof new Set()       // Returns object

typeof function (){}   // Returns function
Note:
The typeof operator returns object for all types of objects:

objects
arrays
sets
maps
You cannot use typeof to determine if a JavaScript object is an array or a date.

How to Recognize an Array
How to know if a variable is an array?

ECMAScript 5 (2009) defined a new method for this: Array.isArray():

Example
// Create an Array
const fruits = ["apples", "bananas", "oranges"];
Array.isArray(fruits);
The instanceof Operator
The instanceof operator returns true if an object is an instance of a specified object type:

Examples
// Create a Date
const time = new Date();

(time instanceof Date);
// Create an Array
const fruits = ["apples", "bananas", "oranges"];

(fruits instanceof Array);
// Create a Map
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

(fruits instanceof Map);
// Create a Set
const fruits = new Set(["apples", "bananas", "oranges"]);

(fruits instanceof Set);