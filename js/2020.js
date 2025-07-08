New Features in JavaScript 2020
BigInt
String matchAll()
The Nullish Coalescing Operator (??)
The Optional Chaining Operator (?.)
Logical AND Assignment Operator (&&=)
Logical OR Assignment (||=)
Nullish Coalescing Assignment (??=)
Promise.allSettled()
Dynamic Import
JavaScript BigInt
JavaScript BigInt variables are used to store big integer values that are too big to be represented by a a normal JavaScript Number.

JavaScript integers are only accurate up to about 15 digits.

Integer Example
let x = 999999999999999;
let y = 9999999999999999; // too big
BigInt Example
let x = 9999999999999999;
let y = 9999999999999999n;
To create a BigInt, append n to the end of an integer or call BigInt():

Example
let x = 1234567890123456789012345n;
let y = BigInt(1234567890123456789012345)
The JavaScript typeof a BigInt is "bigint":

Example
let x = BigInt(999999999999999);
let type = typeof x;
BigInt is supported in all modern browsers since September 2020:

Chrome 67	Edge 79	Firefox 68	Safari 14	Opera 54
May 2018	Jan 2020	Jul 2019	Sep 2020	Jun 2018
JavaScript String matchAll()
Before ES2020 there was no string method that could be used to search for all occurrences of a string in a string.

Example
const iterator = text.matchAll("Cats");
If the parameter is a regular expression, the global flag (g) must be set set, otherwise a TypeError is thrown.

Example
const iterator = text.matchAll(/Cats/g);
If you want to search case insensitive, the insensitive flag (i) must be set:

Example
const iterator = text.matchAll(/Cats/gi);
Note
ES2021 introduced the string method replaceAll().

ADVERTISEMENT
The Nullish Coalescing Operator (??)
The ?? operator returns the first argument if it is not nullish (null or undefined).

Otherwise it returns the second.

Example
let name = null;
let text = "missing";
let result = name ?? text;
The nullish operator is supported in all modern browsers since March 2020:

Chrome 80	Edge 80	Firefox 72	Safari 13.1	Opera 67
Feb 2020	Feb 2020	Jan 2020	Mar 2020	Mar 2020
The Optional Chaining Operator (?.)
The Optional Chaining Operator returns undefined if an object is undefined or null (instead of throwing an error).

Example
const car = {type:"Fiat", model:"500", color:"white"};
let name = car?.name;
The ?.= operator is supported in all modern browsers since March 2020:

Chrome 80	Edge 80	Firefox 74	Safari 13.1	Opera 67
Feb 2020	Feb 2020	Mar 2020	Mar 2020	Mar 2020
The &&= Operator
The Logical AND Assignment Operator is used between two values.

If the first value is true, the second value is assigned.

Logical AND Assignment Example
let x = 10;
x &&= 5;
The &&= operator is supported in all modern browsers since September 2020:

Chrome 85	Edge 85	Firefox 79	Safari 14	Opera 71
Aug 2020	Aug 2020	Mar 2020	Sep 2020	Sep 2020
The ||= Operator
The Logical OR Assignment Operator is used between two values.

If the first value is false, the second value is assigned.

Logical OR Assignment Example
let x = 10;
x ||= 5;
The ||= operator is supported in all modern browsers since September 2020:

Chrome 85	Edge 85	Firefox 79	Safari 14	Opera 71
Aug 2020	Aug 2020	Mar 2020	Sep 2020	Sep 2020
The ??= Operator
The Nullish Coalescing Assignment Operator is used between two values.

If the first value is undefined or null, the second value is assigned.

Nullish Coalescing Assignment Example
let x;
x ??= 5;
The ??= operator is supported in all modern browsers since September 2020:

Chrome 85	Edge 85	Firefox 79	Safari 14	Opera 71
Aug 2020	Aug 2020	Mar 2020	Sep 2020	Sep 2020
JavaScript Promise.allSettled()
The Promise.allSettled() method returns a single Promise from a list of promises.

Example
// Create a Promise
const myPromise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 200, "King");
});

// Create another Promise
const myPromise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "Queen");
});

// Settle All
Promise.allSettled([myPromise1, myPromise2]).then((results) =>
  results.forEach((x) => myDisplay(x.status)),
);