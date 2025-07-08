New Features in JavaScript 2021
Promise.any()
String replaceAll()
Numeric Separators (_)

ECMAScript 2021 is supported in all modern browsers since April 2021:

Chrome 85	Edge 85	Firefox 79	Safari 14.1	Opera 71
Aug 2020	Aug 2020	Jul 2020	Apr 2021	Sep 2020
JavaScript Promise.any()
Example
// Create a Promise
const myPromise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 200, "King");
});

// Create another Promise
const myPromise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "Queen");
});

// Run when any promise fulfill
Promise.any([myPromise1, myPromise2]).then((x) => {
  myDisplay(x);
});
Promise.any() is supported in all modern browsers since September 2020:

Chrome 85	Edge 85	Firefox 79	Safari 14	Opera 71
Aug 2020	Aug 2020	Jul 2020	Sep 2020	Sep 2020
JavaScript String ReplaceAll()
ES2021 introduced the string method replaceAll():

Example
text = text.replaceAll("Cats","Dogs");
text = text.replaceAll("cats","dogs");
The replaceAll() method allows you to specify a regular expression instead of a string to be replaced.

If the parameter is a regular expression, the global flag (g) must be set, otherwise a TypeError is thrown.

Example
text = text.replaceAll(/Cats/g,"Dogs");
text = text.replaceAll(/cats/g,"dogs");
replace.All() is supported in all modern browsers since April 2021:

Chrome 85	Edge 85	Firefox 77	Safari 13.1	Opera 71
Aug 2020	Aug 2020	Jun 2020	Mar 2020	Sep 2020
Note
ES2020 introduced the string method matchAll().

ADVERTISEMENT

JavaScript Numeric Separator (_)
ES2021 intoduced the numeric separator (_) to make numbers more readable:

Example
const num = 1_000_000_000;
The numeric separator is only for visual use.

Example
const num1 = 1_000_000_000;
const num2 = 1000000000;
(num1 === num2);
The numeric separator can be placed anywhere in a number:

Example
const num1 = 1_2_3_4_5;
Note
The numeric separator is not allowed at the beginning or at the end of a number.

In JavaScript only variables can start with _.

The numeric separator is supported in all modern browsers since January 2020:

Chrome 75	Edge 79	Firefox 74	Safari 13.1	Opera 67
Jun 2019	Jan 2020	Oct 2019	Sep 2019	Jun 2019