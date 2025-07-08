The new Map() Method
You can create a map by passing an array to the new Map() constructor:

Example
// Create a Map
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);
Map.get()
You get the value of a key in a map with the get() method

Example
fruits.get("apples");
Map.set()
You can add elements to a map with the set() method:

Example
// Create a Map
const fruits = new Map();

// Set Map Values
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);
The set() method can also be used to change existing map values:

Example
fruits.set("apples", 500);
Map.size
The size property returns the number of elements in a map:

Example
fruits.size;
Map.delete()
The delete() method removes a map element:

Example
fruits.delete("apples");
Map.clear()
The clear() method removes all the elements from a map:

Example
fruits.clear();
Map.has()
The has() method returns true if a key exists in a map:

Example
fruits.has("apples");
Try This:
fruits.delete("apples");
fruits.has("apples");
