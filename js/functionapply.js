Method Reuse
With the apply() method, you can write a method that can be used on different objects.

The JavaScript apply() Method
The apply() method is similar to the call() method (previous chapter).

In this example the fullName method of person is applied on person1:

Example
const person = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}

const person1 = {
  firstName: "Mary",
  lastName: "Doe"
}

// This will return "Mary Doe":
person.fullName.apply(person1);

The Difference Between call() and apply()
The difference is:

The call() method takes arguments separately.

The apply() method takes arguments as an array.

The apply() method is very handy if you want to use an array instead of an argument list.

The apply() Method with Arguments
The apply() method accepts arguments in an array:

Example
const person = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}

const person1 = {
  firstName:"John",
  lastName: "Doe"
}

person.fullName.apply(person1, ["Oslo", "Norway"]);

Compared with the call() method:

Example
const person = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}

const person1 = {
  firstName:"John",
  lastName: "Doe"
}

person.fullName.call(person1, "Oslo", "Norway");

ADVERTISEMENT

Simulate a Max Method on Arrays
You can find the largest number (in a list of numbers) using the Math.max() method:

Example
Math.max(1,2,3);  // Will return 3

Since JavaScript arrays do not have a max() method, you can apply the Math.max() method instead.

Example
Math.max.apply(null, [1,2,3]); // Will also return 3

The first argument (null) does not matter. It is not used in this example.

These examples will give the same result:

Example
Math.max.apply(Math, [1,2,3]); // Will also return 3

Example
Math.max.apply(" ", [1,2,3]); // Will also return 3

Example
Math.max.apply(0, [1,2,3]); // Will also return 3