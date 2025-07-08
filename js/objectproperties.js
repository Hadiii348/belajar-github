// objectName.property
let age = person.age;
or

//objectName["property"]
let age = person["age"];
or

//objectName[expression]
let age = person[x];

person.firstname + " is " + person.age + " years old.";
person["firstname"] + " is " + person["age"] + " years old.";
let x = "firstname";
let y = "age";
person[x] + " is " + person[y] + " years old.";