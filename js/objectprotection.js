Object Protection Methods
// Prevents re-assignment
const car = {type:"Fiat", model:"500", color:"white"};

// Prevents adding object properties
Object.preventExtensions(object)

// Returns true if properties can be added to an object
Object.isExtensible(object)

// Prevents adding and deleting object properties
Object.seal(object)

// Returns true if object is sealed
Object.isSealed(object)

// Prevents any changes to an object
Object.freeze(object)

// Returns true if object is frozen
Object.isFrozen(object)
Using const
The most common way to protect an object from being changed is by using the const keyword.

With const you can not re-assign the object, but you can still change the value of a property, delete a property or create a new property.

JavaScript Object.preventExtensions()
The Object.preventExtensions() method prevents adding properties to an object.

Example
// Create Object
const person = {firstName:"John", lastName:"Doe"};

// Prevent Extensions
Object.preventExtensions(person);

// This will throw an error
person.nationality = "English";
Since arrays are objects, arrays can be prevented from extensions too:

Example
// Create Array
const fruits = ["Banana", "Orange", "Apple", "Mango"];
Object.preventExtensions(fruits);

// This will throw an error:
fruits.push("Kiwi");
JavaScript Object.isExtensible()
You can use Object.isExtensible() to check if an object is extensible.

The Object.isExtensible() returns true if an object is extensible.

Examples
// Create Object
const person = {firstName:"John", lastName:"Doe"};

// Prevent Extensions
Object.preventExtensions(person);

// This will return false
let answer = Object.isExtensible(person);
// Create Array
const fruits = ["Banana", "Orange", "Apple", "Mango"];

// Prevent Extensions
Object.preventExtensions(fruits);

// This will return false
let answer = Object.isExtensible(fruits);
JavaScript Object.seal()
The Object.seal() method prevents additions or deletions of new properties.

The Object.seal() method makes existing properties non-configurable.

The Object.isSealed() method can be used to check if an object is sealed.

Note
The Object.seal() method will fail silently in non-strict mode and throw a TypeError in strict mode.

Example
"use strict"
// Create Object
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

// Seal Object
Object.seal(person)

// This will throw an error
delete person.age;
Since arrays are objects, arrays can be sealed too:

Example
// Create Array
const fruits = ["Banana", "Orange", "Apple", "Mango"];
Object.seal(fruits);

// This will throw an error:
fruits.push("Kiwi");
JavaScript Object.isSealed()
The Object.isSealed() method can be used to check if an object is sealed.

The Object.isSealed() returns true if an object is sealed.

Examples
// Create Object
const person = {firstName:"John", lastName:"Doe"};

// Seal Object
Object.seal(person);

// This will return true
let answer = Object.isSealed(person);
// Create Array
const fruits = ["Banana", "Orange", "Apple", "Mango"];

// Seal Array
Object.seal(fruits);

// This will return true
let answer = Object.isSealed(fruits);
JavaScript Object.freeze()
The Object.freeze() method prevents any changes to an object.

Frozen objects are read-only.

No modification, addition or deletion of properties are allowed.

Note
The Object.freeze() method will fail silently in non-strict mode and throw a TypeError in strict mode.

Example
"use strict"
// Create Object
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

// Freeze Object
Object.freeze(person)

// This will throw an error
person.age = 51;
Since arrays are objects, arrays can be frozen too:

Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
Object.freeze(fruits);

// This will trow an error:
fruits.push("Kiwi");
JavaScript Object.isFrozen()
The Object.isFrozen() method can be used to check if an object is frozen.

The Object.isFrozen() returns true if an object is frozen.

Examples
// Create Object
const person = {firstName:"John", lastName:"Doe"};

// Freeze Object
Object.freeze(person);

// This will return true
let answer = Object.isFrozen(person);
// Create Array
const fruits = ["Banana", "Orange", "Apple", "Mango"];
Object.freeze(fruits);

// This will return true:
let answer = Object.isFrozen(fruits);
