// Adding or changing an object property
Object.defineProperty(object, property, descriptor)

// Adding or changing object properties
Object.defineProperties(object, descriptors)

// Accessing a Property
Object.getOwnPropertyDescriptor(object, property)

// Accessing Properties
Object.getOwnPropertyDescriptors(object)

// Returns all properties as an array
Object.getOwnPropertyNames(object)

// Accessing the prototype
Object.getPrototypeOf(object)
JavaScript Object.defineProperty()
The Object.defineProperty() method can be used to:

Adding a new property to an object
Changing property values
Changing property metadata
Changing object getters and setters
Syntax:

Object.defineProperty(object, property, descriptor)
Adding a new Property
This example adds a new property to an object:

Example
// Create an Object:
const person = {
  firstName: "John",
  lastName : "Doe",
  language : "EN"
};

// Add a Property
Object.defineProperty(person, "year", {value:"2008"});
Changing a Property Value
This example changes a property value:

Example
// Create an Object:
const person = {
  firstName: "John",
  lastName : "Doe",
  language : "EN"
};

// Change a Property
Object.defineProperty(person, "language", {value : "NO"});
Property Attributes
All properties have a name. In addition they also have a value.

The value is one of the property's attributes.

Other attributes are: enumerable, configurable, and writable.

These attributes define how the property can be accessed (is it readable?, is it writable?)

In JavaScript, all attributes can be read, but only the value attribute can be changed (and only if the property is writable).

( ECMAScript 5 has methods for both getting and setting all property attributes)

Changing Meta Data
The following property meta data can be changed:

writable : true      // Property value can be changed
enumerable : true    // Property can be enumerated
configurable : true  // Property can be reconfigured
writable : false     // Property value can not be changed
enumerable : false   // Property can be not enumerated
configurable : false // Property can be not reconfigured
Getters and setters can also be changed:

// Defining a getter
get: function() { return language }
// Defining a setter
set: function(value) { language = value }
This example makes language read-only:

Object.defineProperty(person, "language", {writable:false});
This example makes language not enumerable:

Object.defineProperty(person, "language", {enumerable:false});
ADVERTISEMENT

JavaScript getOwnPropertyNames()
The Object.getOwnPropertyNames() method can:

List object properties
Syntax
Object.getOwnPropertyNames(object)
List all Object Properties
This example gets all properties of an object:

Example
// Create an Object
const person = {
  firstName: "John",
  lastName : "Doe",
  language : "EN"
};

// Get all Properties
Object.getOwnPropertyNames(person);
Object.getOwnPropertyNames() will also list properties that is not enumerable:

Example
// Create an Object
const person = {
  firstName: "John",
  lastName : "Doe",
  language : "EN"
};

// Set the language Property not enumerable
Object.defineProperty(person, "language", {enumerable:false});

// Get all Properties
Object.getOwnPropertyNames(person);
JavaScript Object.keys()
The Object.keys() method can:

List enumerable object properties
Syntax
Object.keys(object)
List Enumerable Object Properties
This example uses Object.keys() insted of Object.getOwnPropertyNames():

Example
// Create an Object
const person = {
  firstName: "John",
  lastName : "Doe",
  language : "EN"
};

// Change the "language" Property
Object.defineProperty(person, "language", {enumerable:false});

// Get all Enumerable Properties
Object.keys(person);
Note
The getOwnPropertyNames() method returns all properties.

The Object.keys() method returns all enumerable properties.

If you define object properties without enumerable:false, the two methods will return the same.

Adding Getters and Setters
The Object.defineProperty() method can also be used to add Getters and Setters:

Example
//Create an object
const person = {firstName:"John", lastName:"Doe"};

// Define a getter
Object.defineProperty(person, "fullName", {
  get: function () {return this.firstName + " " + this.lastName;}
});
A Counter Example
Example
// Define object
const obj = {counter:0};

// Define setters
Object.defineProperty(obj, "reset", {
  get : function () {this.counter = 0;}
});
Object.defineProperty(obj, "increment", {
  get : function () {this.counter++;}
});
Object.defineProperty(obj, "decrement", {
  get : function () {this.counter--;}
});
Object.defineProperty(obj, "add", {
  set : function (value) {this.counter += value;}
});
Object.defineProperty(obj, "subtract", {
  set : function (i) {this.counter -= i;}
});

// Play with the counter:
obj.reset;
obj.add = 5;
obj.subtract = 1;
obj.increment;
obj.decrement;
Prototype Properties
JavaScript objects inherit the properties of their prototype.

The delete keyword does not delete inherited properties, but if you delete a prototype property, it will affect all objects inherited from the prototype.