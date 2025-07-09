// New Features in JavaScript 2017
// This chapter introduces the new features in ECMAScript 2017:

// JavaScript String padding
// JavaScript Object entries()
// JavaScript Object values()
// JavaScript async and await
// Trailing Commas in Functions
// JavaScript Object.getOwnPropertyDescriptors
// JavaScript 2017 is supported in all modern browsers since September 2017:

// Chrome 58	Edge 15	Firefox 52	Safari 11	Opera 45
// Apr 2017	Apr 2017	Mar 2017	Sep 2017	May 2017
// JavaScript String Padding
// ECMAScript 2017 added two string methods to JavaScript: padStart() and padEnd() to support padding at the beginning and at the end of a string.

// Examples
// let text = "5";
// text = text.padStart(4,0);
// let text = "5";
// text = text.padEnd(4,0);
// JavaScript Object Entries
// ECMAScript 2017 added the Object.entries() method to objects.

// Object.entries() returns an array of the key/value pairs in an object:

// Example
// const person = {
//   firstName : "John",
//   lastName : "Doe",
//   age : 50,
//   eyeColor : "blue"
// };

// let text = Object.entries(person);
// Object.entries() makes it simple to use objects in loops:

// Example
// const fruits = {Bananas:300, Oranges:200, Apples:500};

// let text = "";
// for (let [fruit, value] of Object.entries(fruits)) {
//   text += fruit + ": " + value + "<br>";
// }
// Object.entries() also makes it simple to convert objects to maps:

// Example
// const fruits = {Bananas:300, Oranges:200, Apples:500};

// const myMap = new Map(Object.entries(fruits));
// JavaScript Object Values
// Object.values() is similar to Object.entries(), but returns a single dimension array of the object values:

// Example
// const person = {
//   firstName : "John",
//   lastName : "Doe",
//   age : 50,
//   eyeColor : "blue"
// };

// let text = Object.values(person);
// ADVERTISEMENT

// JavaScript Async Functions
// Waiting for a Timeout
// async function myDisplay() {
//   let myPromise = new Promise(function(myResolve, myReject) {
//     setTimeout(function() { myResolve("I love You !!"); }, 3000);
//   });
//   document.getElementById("demo").innerHTML = await myPromise;
// }

// myDisplay();

// JavaScript Trailing Commas
// JavaScript allows trailing commas wherever a comma-separated list of values is accepted.

// In Array and Object Literals, Function Calls, Parameters, Imports and Exports.

// Example
// function myFunc(x,,,) {};
// const myArr = [1,2,3,4,,,];
// const myObj = {fname: John, age:50,,,};