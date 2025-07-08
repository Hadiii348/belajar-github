New Features in JavaScript 2018
This chapter introduces the new features in ECMAScript 2018:

Asynchronous Iteration
Promise Finally
Array Rest Elements
Object Rest Properties
New RegExp Features
JavaScript Shared Memory
JavaScript 2018 is supported in all modern browsers since June 2020:

Chrome 64	Edge 79	Firefox 78	Safari 12	Opera 51
Jan 2018	Jan 2020	Jun 2020	Sep 2018	Feb 2018
JavaScript Asynchronous Iteration
ECMAScript 2018 added asynchronous iterators and iterables.

With asynchronous iterables, we can use the await keyword in for/of loops.

Example
for await () {}
JavaScript asynchronous iteration is supported in all modern browsers since January 2020:

Chrome 63	Edge 79	Firefox 57	Safari 11	Opera 50
Dec 2017	Jan 2020	Nov 2017	Sep 2017	Jan 2018
JavaScript Promise.finally
ECMAScript 2018 finalizes the full implementation of the Promise object with Promise.finally:

Example
let myPromise = new Promise();

myPromise.then();
myPromise.catch();
myPromise.finally();
Promise.finally is supported in all modern browsers since November 2018:

Chrome 63	Edge 18	Firefox 58	Safari 11.1	Opera 50
Dec 2017	Nov 2018	Jan 2018	Mar 2018	Jan 2018
ADVERTISEMENT

JavaScript Array Rest Elements
ECMAScript 2018 added the rest operator (...).

The rest operator (...) allows us to destruct an array and collect the leftovers:


Example 1
let a, rest;
const arr1 = [1,2,3,4,5,6,7,8];

[a, ...rest] = arr1;
Example 2
let a, b, rest;
const arr1 = [1,2,3,4,5,6,7,8];

[a, b, ...rest] = arr1;
JavaScript Object Rest Properties
ECMAScript 2018 added the rest operator (...).

This allows us to destruct an object and collect the leftovers onto a new object:

Example
// Create an Object:
const car = {type:"Fiat", model:"500", color:"white"};

// Destructure the Object
let {type, model, color} = car;
document.getElementById("demo").innerHTML = "The car type is: " + type;
Object rest properties is supported in all modern browsers since January 2020:

Chrome 60	Edge 79	Firefox 55	Safari 11.1	Opera 47
Jul 2017	Jan 2020	Aug 2017	Mar 2018	Aug 2017
New JavaScript RegExp Features
ECMAScript 2018 added 4 new RegExp features:

Unicode Property Escapes (\p{...})
Lookbehind Assertions (?<= ) and (?<! )
Named Capture Groups
s (dotAll) Flag
The new RegExp features is supported in all modern browsers since June 2020:

Chrome 64	Edge 79	Firefox 78	Safari 12	Opera 51
Jan 2018	Jan 2020	Jun 2020	Sep 2018	Feb 2018
JavaScript Threads
In JavaScript you use the Web Workers API to create threads.

Worker threads are used to execute code in the background so that the main program can continue execution.

Worker threads run simultaneously with the main program. Simultaneous execution of different parts of a program can be time-saving.

JavaScript Shared Memory
Shared memory is a feature that allows threads (different parts of a program) to access and update the same data in the same memory.

Instead of passing data between threads, you can pass a SharedArrayBuffer object that points to the memory where data is saved.

SharedArrayBuffer
A SharedArrayBuffer object represents a fixed-length raw binary data buffer similar to the ArrayBuffer object.

