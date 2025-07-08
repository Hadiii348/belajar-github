ECMAScript 2009
The first major revision to JavaScript.

ECMAScript 2009 is also known as ES5.

This chapter describes the new features of ES5.

ES5 Features
"use strict"
String[number] access
Multiline strings
String.trim()
Array.isArray()
Array forEach()
Array map()
Array filter()
Array reduce()
Array reduceRight()
Array every()
Array some()
Array indexOf()
Array lastIndexOf()
JSON.parse()
JSON.stringify()
Date.now()
Date toISOString()
Date toJSON()
Property getters and setters
Reserved words as property names
Object.create()
Object.keys()
Object management
Object protection
Object defineProperty()
Function bind()
Trailing commas
Browser Support
JavaScript 2009 is supported in all modern browsers since July 2013:

Chrome
23	IE/Edge
10	Firefox
21	Safari
6	Opera
15
Sep 2012	Sep 2012	Apr 2013	Jul 2012	Jul 2013
The "use strict" Directive
"use strict" defines that the JavaScript code should be executed in "strict mode".

With strict mode you can, for example, not use undeclared variables.

You can use strict mode in all your programs. It helps you to write cleaner code, like preventing you from using undeclared variables.

"use strict" is just a string expression. Old browsers will not throw an error if they don't understand it.

Read more in JS Strict Mode.

Property Access on Strings
The charAt() method returns the character at a specified index (position) in a string:

Example
var str = "HELLO WORLD";
str.charAt(0);            // returns H
ES5 allows property access on strings:

Example
var str = "HELLO WORLD";
str[0];                   // returns H
Property access on string might be a little unpredictable.

Read more in JS String Methods.

Strings Over Multiple Lines
ES5 allows string literals over multiple lines if escaped with a backslash:
Example
"Hello \
Dolly!";
The \ method might not have universal support.
Older browsers might treat the spaces around the backslash differently.
Some older browsers do not allow spaces behind the \ character.

A safer way to break up a string literal, is to use string addition:

Example
"Hello " +
"Dolly!";
Reserved Words as Property Names
ES5 allows reserved words as property names:

Object Example
var obj = {name: "John", new: "yes"}
String trim()
The trim() method removes whitespace from both sides of a string.

Example
var str = "       Hello World!        ";
alert(str.trim());
Read more in JS String Methods.

ADVERTISEMENT

Array.isArray()
The isArray() method checks whether an object is an array.

Example
function myFunction() {
  var fruits = ["Banana", "Orange", "Apple", "Mango"];
  var x = document.getElementById("demo");
  x.innerHTML = Array.isArray(fruits);
}
Read more in JS Arrays.

Array forEach()
The forEach() method calls a function once for each array element.

Example
var txt = "";
var numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction);

function myFunction(value) {
  txt = txt + value + "<br>";
}
Learn more in JS Array Iteration Methods.

Array map()
This example multiplies each array value by 2:

Example
var numbers1 = [45, 4, 9, 16, 25];
var numbers2 = numbers1.map(myFunction);

function myFunction(value) {
  return value * 2;
}
Learn more in JS Array Iteration Methods.

Array filter()
This example creates a new array from elements with a value larger than 18:

Example
var numbers = [45, 4, 9, 16, 25];
var over18 = numbers.filter(myFunction);

function myFunction(value) {
  return value > 18;
}
Learn more in JS Array Iteration Methods.

Array reduce()
This example finds the sum of all numbers in an array:

Example
var numbers1 = [45, 4, 9, 16, 25];
var sum = numbers1.reduce(myFunction);

function myFunction(total, value) {
  return total + value;
}
Learn more in JS Array Iteration Methods.

Array reduceRight()
This example also finds the sum of all numbers in an array:

Example
var numbers1 = [45, 4, 9, 16, 25];
var sum = numbers1.reduceRight(myFunction);

function myFunction(total, value) {
  return total + value;
}
Learn more in JS Array Iteration Methods.

Array every()
This example checks if all values are over 18:

Example
var numbers = [45, 4, 9, 16, 25];
var allOver18 = numbers.every(myFunction);

function myFunction(value) {
  return value > 18;
}
Learn more in JS Array Iteration Methods.

Array some()
This example checks if some values are over 18:

Example
var numbers = [45, 4, 9, 16, 25];
var allOver18 = numbers.some(myFunction);

function myFunction(value) {
  return value > 18;
}
Learn more in JS Array Iteration Methods.

Array indexOf()
Search an array for an element value and returns its position.

Example
var fruits = ["Apple", "Orange", "Apple", "Mango"];
var a = fruits.indexOf("Apple");
Learn more in JS Array Iteration Methods.

Array lastIndexOf()
lastIndexOf() is the same as indexOf(), but searches from the end of the array.

Example
var fruits = ["Apple", "Orange", "Apple", "Mango"];
var a = fruits.lastIndexOf("Apple");
Learn more in JS Array Iteration Methods.

JSON.parse()
A common use of JSON is to receive data from a web server.

Imagine you received this text string from a web server:

'{"name":"John", "age":30, "city":"New York"}'
The JavaScript function JSON.parse() is used to convert the text into a JavaScript object:

var obj = JSON.parse('{"name":"John", "age":30, "city":"New York"}');
Read more in our JSON Tutorial.

JSON.stringify()
A common use of JSON is to send data to a web server.

When sending data to a web server, the data has to be a string.

Imagine we have this object in JavaScript:

var obj = {name:"John", age:30, city:"New York"};
Use the JavaScript function JSON.stringify() to convert it into a string.

var myJSON = JSON.stringify(obj);
The result will be a string following the JSON notation.

myJSON is now a string, and ready to be sent to a server:

Example
var obj = {name:"John", age:30, city:"New York"};
var myJSON = JSON.stringify(obj);
document.getElementById("demo").innerHTML = myJSON;
Read more in our JSON Tutorial.

Date.now()
Date.now() returns the number of milliseconds since zero date (January 1. 1970 00:00:00 UTC).

Example
var timInMSs = Date.now();
Date.now() returns the same as getTime() performed on a Date object.

Learn more in JS Dates.

Date toISOString()
The toISOString() method converts a Date object to a string, using the ISO standard format:

Example
const d = new Date();
document.getElementById("demo").innerHTML = d.toISOString();
Date toJSON()
toJSON() converts a Date object into a string, formatted as a JSON date.

JSON dates have the same format as the ISO-8601 standard: YYYY-MM-DDTHH:mm:ss.sssZ:

Example
d = new Date();
document.getElementById("demo").innerHTML = d.toJSON();
Property Getters and Setters
ES5 lets you define object methods with a syntax that looks like getting or setting a property.

This example creates a getter for a property called fullName:

Example
// Create an object:
var person = {
  firstName: "John",
  lastName : "Doe",
  get fullName() {
    return this.firstName + " " + this.lastName;
  }
};

// Display data from the object using a getter:
document.getElementById("demo").innerHTML = person.fullName;
This example creates a setter and a getter for the language property:

Example
var person = {
  firstName: "John",
  lastName : "Doe",
  language : "NO",
  get lang() {
    return this.language;
  },
  set lang(value) {
    this.language = value;
  }
};

// Set an object property using a setter:
person.lang = "en";

// Display data from the object using a getter:
document.getElementById("demo").innerHTML = person.lang;
This example uses a setter to secure upper case updates of language:

Example
var person = {
  firstName: "John",
  lastName : "Doe",
  language : "NO",
  set lang(value) {
    this.language = value.toUpperCase();
  }
};

// Set an object property using a setter:
person.lang = "en";

// Display data from the object:
document.getElementById("demo").innerHTML = person.language;
Learn more about Gettes and Setters in JS Object Accessors

Object.defineProperty()
Object.defineProperty() is a new Object method in ES5.

It lets you define an object property and/or change a property's value and/or metadata.

Example
// Create an Object:
const person = {
  firstName: "John",
  lastName : "Doe",
  language : "NO",
};

// Change a Property:
Object.defineProperty(person, "language", {
  value: "EN",
  writable : true,
  enumerable : true,
  configurable : true
});

// Enumerate Properties
let txt = "";
for (let x in person) {
  txt += person[x] + "<br>";
}

// Display Properties
document.getElementById("demo").innerHTML = txt;
Next example is the same code, except it hides the language property from enumeration:

Example
// Create an Object:
const person = {
  firstName: "John",
  lastName : "Doe",
  language : "NO",
};

// Change a Property:
Object.defineProperty(person, "language", {
  value: "EN",
  writable : true,
  enumerable : false,
  configurable : true
});

// Enumerate Properties
let txt = "";
for (let x in person) {
  txt += person[x] + "<br>";
}
document.getElementById("demo").innerHTML = txt;
This example creates a setter and a getter to secure upper case updates of language:

Example
// Create an Object:
const person = {
  firstName: "John",
  lastName : "Doe",
  language : "NO"
};

// Change a Property:
Object.defineProperty(person, "language", {
  get : function() { return language },
  set : function(value) { language = value.toUpperCase()}
});

// Change Language
person.language = "en";

// Display Language
document.getElementById("demo").innerHTML = person.language;
Object.create()
The Object.create() method creates an object from an existing object.

Example
// Create an Object:
const person = {
  firstName: "John",
  lastName: "Doe"
};

// Create new Object
const man = Object.create(person);
man.firstName = "Peter";
Object.keys()
The Object.keys() method returns an array with the keys of an object.

Example
// Create an Object
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

// Get the Keys
const keys = Object.keys(person);
Object Management
ES5 added new Object management methods to JavaScript:

Managing Objects
// Adding or changing an object property
Object.defineProperty(object, property, descriptor)

// Adding or changing object properties
Object.defineProperties(object, descriptors)

// Accessing a Property
Object.getOwnPropertyDescriptor(object, property)

// Accessing Properties
Object.getOwnPropertyDescriptors(object)

// Returns all properties as an array
Object.getOwnPropertyNames(object)

// Accessing the prototype
Object.getPrototypeOf(object)
Learn more in Object Management.

Object Protection
ES5 added Object protection methods to JavaScript:

Protecting Objects
// Prevents adding properties to an object
Object.preventExtensions(object)

// Returns true if properties can be added to an object
Object.isExtensible(object)

// Prevents changes of object properties (not values)
Object.seal(object)

// Returns true if object is sealed
Object.isSealed(object)

// Prevents any changes to an object
Object.freeze(object)

// Returns true if object is frozen
Object.isFrozen(object)
Learn more in Object Protection.

Function Bind()
With the bind() method, an object can borrow a method from another object.

This example creates 2 objects (person and member).

The member object borrows the fullname method from the person object:

Example
const person = {
  firstName:"John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
}

const member = {
  firstName:"Hege",
  lastName: "Nilsen",
}

let fullName = person.fullName.bind(member);
Learn more in Function bind().

Trailing Commas
ES5 allows trailing commas in object and array definitions:

Object Example
person = {
  firstName: "John",
  lastName: " Doe",
  age: 46,
}
Array Example
points = [
  1,
  5,
  10,
  25,
  40,
  100,
];
WARNING !!!

JSON does not allow trailing commas.

JSON Objects:
// Allowed:
var person = '{"firstName":"John", "lastName":"Doe", "age":46}'
JSON.parse(person)

// Not allowed:
var person = '{"firstName":"John", "lastName":"Doe", "age":46,}'
JSON.parse(person)
JSON Arrays:
// Allowed:
points = [40, 100, 1, 5, 25, 10]

// Not allowed:
points = [40, 100, 1, 5, 25, 10,]