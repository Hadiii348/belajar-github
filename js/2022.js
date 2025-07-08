New Features in JavaScript 2022
Array at()
String at()
RegExp /d
Object.hasOwn()
error.cause
await import
Class field declarations
Private methods and fields
JavaScript Array at()
ES2022 intoduced the array method at():

Examples
Get the third element of fruits:

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.at(2);
Get the third element of fruits:

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits[2];
The at() method returns an indexed element from an array.

The at() method returns the same as [].

The at() method is supported in all modern browsers since March 2022:

Chrome 92	Edge 92	Firefox 90	Safari 15.4	Opera 78
Apr 2021	Jul 2021	Jul 2021	Mar 2022	Aug 2021
Note
Many languages allows negative bracket indexing like [-1] to access elements from the end of an object / array / string.

This is not possible in JavaScript, because [] is used for accessing both arrays and objects. obj[-1] refers to the value of key -1, not to the last property of the object.

The at() method was introduced in ES2022 to solve this problem.

JavaScript String at()
ES2022 intoduced the string method at():

Examples
Get the third letter of name:

const name = "W3Schools";
let letter = name.at(2);
Get the third letter of name:

const name = "W3Schools";
let letter = name[2];
The at() method returns an indexed element from an string.

The at() method returns the same as [].

The at() method is supported in all modern browsers since March 2022:

Chrome 92	Edge 92	Firefox 90	Safari 15.4	Opera 78
Apr 2021	Jul 2021	Jul 2021	Mar 2022	Aug 2021
RegExp d Modifier
ES2022 added the /d modifier to express the start and end of the match.

Example
let text = "aaaabb";
let result = text.match(/(aa)(bb)/d);
RegExp Modifiers are used to spescfy case-insensitive, and other global searches:

Modifier	Description	Try it
i	Perform case-insensitive matching	
g	Perform a global match (find all)	
m	Perform multiline matching	
d	Perform substring matches (New in ES2022)	
Object hasOwn
ES2022 provides a safe way to check if a property is the own property of an object.

Object.hasOwn() is similar to Object.prototype.hasOwnProperty but supports all object types.

Example
Object.hasOwn(myObject, age)
Error Cause
ES2022 let you specify the reason behind an error with error.cause.

Example
try { connectData(); } catch (err) { throw new Error("Connecting failed.", { cause: err }); }
ADVERTISEMENT

JavaScript await import
JavasSript modules can now wait for resources that require import before running:

import {myData} from './myData.js';

const data = await myData();
JavaScript Class Field Declarations
class Hello {
  counter = 0; // Class field
}
const myClass = new Hello();

let x = myClass.counter;
Class Field Declarations is supported in all modern browsers since April 2021:

Chrome 72	Edge 79	Firefox 69	Safari 14.1	Opera 60
Jan 2019	Jan 2020	Sep 2019	Apr 2021	Jan 2020
JavaScript Private Methods and Fields
class Hello {
  #counter = 0;  // Private field
  #myMethod() {} // Private method
}
const myClass = new Hello();

let x = myClass.#counter; // Error
myClass.#myMethod();      // Error
Private Methods and Fields is supported in all modern browsers since June 2021:

Chrome 74	Edge 79	Firefox 90	Safari 14.1	Opera 62
Apr 2019	Jan 2020	Jun 2021	Apr 2021	Jun 2019