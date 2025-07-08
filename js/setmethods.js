The new Set() Method
Pass an array to the new Set() constructor:

Example
// Create a new Set
const letters = new Set(["a","b","c"]);
The add() Method
Example
letters.add("d");
letters.add("e");
If you add equal elements, only the first will be saved:

Example
letters.add("a");
letters.add("b");
letters.add("c");
letters.add("c");
letters.add("c");
letters.add("c");
letters.add("c");
letters.add("c");
Note
The primary feature of Set objects is that they only store unique values.

If an attempt is made to add an element that already exists in the set, the add() method will have no effect, and the set will remain unchanged.

The size Property
Example
// Create a new Set
const mySet = new Set(["a","b","c"]);

// The number of elements are
mySet.size;
Listing Set Elements
You can list all Set elements (values) with a for..of loop:

Example
// Create a Set
const letters = new Set(["a","b","c"]);

// List all Elements
let text = "";
for (const x of letters) {
  text += x;
}
The has() Method
The has() method returns true if a specified value exists in a set.

Example
// Create a Set
const letters = new Set(["a","b","c"]);

// Does the Set contain "d"?
answer = letters.has("d");
