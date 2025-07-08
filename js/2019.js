New Features in JavaScript 2019
String.trimStart()
String.trimEnd()
Object.fromEntries
Optional catch binding
Array.flat()
Array.flatMap()
Revised Array.Sort()
Revised JSON.stringify()
Separator symbols allowed in string litterals
Revised Function.toString()
JavaScript String trimStart()
ES2019 added the String method trimStart() to JavaScript.

The trimStart() method works like trim(), but removes whitespace only from the start of a string.

Example
let text1 = "     Hello World!     ";
let text2 = text1.trimStart();
JavaScript String trimStart() is supported in all modern browsers since January 2020:

Chrome 66	Edge 79	Firefox 61	Safari 12	Opera 50
Apr 2018	Jan 2020	Jun 2018	Sep 2018	May 2018
JavaScript String trimEnd()
ES2019 added the String method trimEnd() to JavaScript.

The trimEnd() method works like trim(), but removes whitespace only from the end of a string.

Example
let text1 = "     Hello World!     ";
let text2 = text1.trimEnd();
JavaScript String trimEnd() is supported in all modern browsers since January 2020:

Chrome 66	Edge 79	Firefox 61	Safari 12	Opera 50
Apr 2018	Jan 2020	Jun 2018	Sep 2018	May 2018
JavaScript Object fromEntries()
ES2019 added the Object method fromEntries() to JavaScript.

The fromEntries() method creates an object from iterable key / value pairs.

Example
const fruits = [
["apples", 300],
["pears", 900],
["bananas", 500]
];

const myObj = Object.fromEntries(fruits);
JavaScript Object fromEntries() is supported in all modern browsers since January 2020:

Chrome 73	Edge 79	Firefox 63	Safari 12.1	Opera 60
Mar 2019	Jan 2020	Oct 2018	Mar 2019	Apr 2019
ADVERTISEMENT

Optional catch Binding
From ES2019 you can omit the catch parameter if you don't need it:.

Example
Before 2019:

try {
// code
} catch (err) {
// code
}
After 2019:

try {
// code
} catch {
// code
}
Optional catch binding is supported in all modern browsers since January 2020:

Chrome 66	Edge 79	Firefox 58	Safari 11.1	Opera 53
Apr 2018	Jan 2020	Jan 2018	Mar 2018	May 2018
JavaScript Array flat()
ES2019 added the Array flat() method to JavaScript.

The flat() method creates a new array by flattening a nested array.

Example
const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat();
JavaScript Array flat() is supported in all modern browsers since January 2020:

Chrome 69	Edge 79	Firefox 62	Safari 12	Opera 56
Sep 2018	Jan 2020	Sep 2018	Sep 2018	Sep 2018
JavaScript Array flatMap()
ES2019 added the Array flatMap() method to JavaScript.

The flatMap() method first maps all elements of an array and then creates a new array by flattening the array.

Example
const myArr = [1, 2, 3, 4, 5, 6];
const newArr = myArr.flatMap(x => [x, x * 10]);
Stable Array sort()
ES2019 revised the Array sort() method.

Before 2019, the specification allowed unstable sorting algorithms such as QuickSort.

After ES2019, browsers must use a stable sorting algorithm:

When sorting elements on a value, the elements must keep their relative position to other elements with the same value.

Example
const myArr = [
  {name:"X00",price:100 },
  {name:"X01",price:100 },
  {name:"X02",price:100 },
  {name:"X03",price:100 },
  {name:"X04",price:110 },
  {name:"X05",price:110 },
  {name:"X06",price:110 },
  {name:"X07",price:110 }
];
In the example above, when sorting on price, the result should not have names in a different relative position, such as this:

X01 100
X03 100
X00 100
X03 100
X05 110
X04 110
X06 110
X07 110
Revised JSON.stringify()
ES2019 revised the JSON stringify() method.

Before 2019, JSON could not stringify character encoded with \.

Example
let text = JSON.stringify("\u26D4");
Before ES2019, using JSON.stringify()JSON on UTF-8 code points (U+D800 to U+DFFF) returned broken Unicode characters like ���.

After this revision, strings with UTF-8 code points convert safely with JSON.stringify(), and back to the original using JSON.parse().

Separator Symbols
Line separators and paragraph separator symbols (\u2028 and \u2029) are now allowed in string literals.

Before 2019, these were treated as line terminators and resulted in error exceptions:

Example
// This is valid in ES2019:
let text = "\u2028";
Note
Now, JavaScript and JSON have equal rules.

Before ES2019:

text = JSON.parse('"\u2028"') would parse to ''.

text = '"\u2028"' would give syntax error.

Revised Function toString()
ES2019 revised the Function toString() method.

The toString() method returns a string representing the source code of a function.

From 2019, toString() must return the source code of the function including comments, spaces, and syntax details.

Before 2019, different browsers returned different variants of the function (like without comments and spaces). From 2019 the function should be returned exactly as it is written.

Example
function myFunction(p1, p2) {
  return p1 * p2;
}