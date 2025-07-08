The For Of Loop
The JavaScript for..of statement loops through the elements of an iterable object.

Syntax
for (variable of iterable) {
  // code block to be executed
}
Iterating
Iterating means looping over a sequence of elements.

Here are some easy examples:

Iterating over a String
Iterating over an Array
Iterating over a Set
Iterating over a Map
Iterating Over a String
You can use a for..of loop to iterate over the elements of a string:

Example
const name = "W3Schools";

for (const x of name) {
  // code block to be executed
}
Iterating Over an Array
You can use a for..of loop to iterate over the elements of an Array:

Example 1
const letters = ["a","b","c"];

for (const x of letters) {
  // code block to be executed
}
Example 2
const numbers = [2,4,6,8];

for (const x of numbers) {
  // code block to be executed
}
Iterating Over a Set
You can use a for..of loop to iterate over the elements of a Set:

Example
const letters = new Set(["a","b","c"]);

for (const x of letters) {
  // code block to be executed
}
Iterating Over a Map
You can use a for..of loop to iterate over the elements of a Map:

Example
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

for (const x of fruits) {
  // code block to be executed
}
ADVERTISEMENT
JavaScript Iterators
The iterator protocol defines how to produce a sequence of values from an object.

An object becomes an iterator when it implements a next() method.

The next() method must return an object with two properties:

value (the next value)
done (true or false)
value	The value returned by the iterator
(Can be omitted if done is true)
done	true if the iterator has completed
false if the iterator has produced a new value
Note
Technically, iterables must implement the Symbol.iterator method.

In JavaScript the following are iterables:

Strings
Arrays
Typed Arrays
Sets
Maps
Because their prototype objects have a Symbol.iterator method:

Home Made Iterable
This iterable returns never ending number: 10,20,30,40,.... when the next() method is called:

Example
// Home Made Iterable
function myNumbers() {
  let n = 0;
  return {
    next: function() {
      n += 10;
      return {value:n, done:false};
    }
  };
}

// Run the Iterable
const n = myNumbers();
n.next(); // Returns 10
n.next(); // Returns 20
n.next(); // Returns 30
Note
Home made iterables do not support the JavaScript for..of statement.

A JavaScript iterable is an object that has a Symbol.iterator.

The Symbol.iterator is a function that returns a next() function.

An iterable can be iterated over with the code: for (const x of iterable) { }

Example
// Create an Object
myNumbers = {};

// Make it Iterable
myNumbers[Symbol.iterator] = function() {
  let n = 0;
  done = false;
  return {
    next() {
      n += 10;
      if (n == 100) {done = true}
      return {value:n, done:done};
    }
  };
}
Now you can use for..of

for (const num of myNumbers) {
  // Any Code Here
}
The Symbol.iterator method is called automatically by for..of.

But we can also do it "manually":

Example
let iterator = myNumbers[Symbol.iterator]();

while (true) {
  const result = iterator.next();
  if (result.done) break;
  // Any Code Here
}
Note
Iterators provide a controlled way to work with data sequences, enabling custom iteration logic for various data structures.

In the next chapter you will learn about the new Iterator Helper Functions introduced in ECMAScript 2025.