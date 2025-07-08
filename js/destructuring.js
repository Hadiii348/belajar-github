Destructuring Assignment Syntax
The destructuring assignment syntax unpack object properties into variables:

let {firstName, lastName} = person;
It can also unpack arrays and any other iterables:

let [firstName, lastName] = person;
Object Destructuring
Example
// Create an Object
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50
};

// Destructuring
let {firstName, lastName} = person;
The order of the properties does not matter:

Example
// Create an Object
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50
};

// Destructuring
let {lastName, firstName} = person;
Note:
Destructuring is not destructive.

Destructuring does not change the original object.

Object Default Values
For potentially missing properties we can set default values:

Example
// Create an Object
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50
};

// Destructuring
let {firstName, lastName, country = "US"} = person;
Object Property Alias
Example
// Create an Object
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50
};

// Destructuring
let {lastName : name} = person;
String Destructuring
One use for destructuring is unpacking string characters.

Example
// Create a String
let name = "W3Schools";

// Destructuring
let [a1, a2, a3, a4, a5] = name;
Note:
Destructuring can be used with any iterables.

ADVERTISEMENT

Array Destructuring
We can pick up array variables into our own variables:

Example
// Create an Array
const fruits = ["Bananas", "Oranges", "Apples", "Mangos"];

// Destructuring
let [fruit1, fruit2] = fruits;
Skipping Array Values
We can skip array values using two or more commas:

Example
// Create an Array
const fruits = ["Bananas", "Oranges", "Apples", "Mangos"];

// Destructuring
let [fruit1,,,fruit2] = fruits;
Array Position Values
We can pick up values from specific index locations of an array:

Example
// Create an Array
const fruits = ["Bananas", "Oranges", "Apples", "Mangos"];
// Destructuring
let {[0]:fruit1 ,[1]:fruit2} = fruits;
The Rest Property
You can end a destructuring syntax with a rest property.

This syntax will store all remaining values into a new array:

Example
// Create an Array
const numbers = [10, 20, 30, 40, 50, 60, 70];

// Destructuring
const [a,b, ...rest] = numbers
Destructuring Maps
Example
// Create a Map
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

// Destructuring
let text = "";
for (const [key, value] of fruits) {
  text += key + " is " + value;
}
Swapping JavaScript Variables
You can swap the values of two variables using a destructuring assignment:

Example
let firstName = "John";
let lastName = "Doe";

// Destructuring
[firstName, lastName] = [lastName, firstName];