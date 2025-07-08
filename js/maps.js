How to Create a Map
You can create a JavaScript Map by:

Passing an Array to new Map()
Create a Map and use Map.set()
The new Map() Method
You can create a Map by passing an Array to the new Map() constructor:

Example
// Create a Map
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);
The set() Method
You can add elements to a Map with the set() method:

Example
// Create a Map
const fruits = new Map();

// Set Map Values
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);
The set() method can also be used to change existing Map values:

Example
fruits.set("apples", 200);
The get() Method
The get() method gets the value of a key in a Map:

Example
fruits.get("apples");    // Returns 500