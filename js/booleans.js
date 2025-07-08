The Boolean Data Type
In JavaScript, a Boolean is a primitive data type that can only have one of two values:

true or false

The Boolean value of an expression is the basis for all JavaScript comparisons and conditions.

Key Boolean Characteristics
true and false are boolean data types
true and false are the only possible boolean values
true and false must be written in lowercase
true and false must be written without quotes
Boolean Use Cases
Very often, in programming, you will need a data type that can represent one of two values, like:

yes or no
on or off
true or false
Boolean values are fundamental for logical operations and control flow in JavaScript programming.

Comparisons
All JavaScript comparison operators (like ==, !=, <, >) return true or false from the comparison.

Given that x = 5, the table below explains comparison:

Description	Example	Returns
Not equal to	(x == 8)	false
Unequal to	(x != 8)	true
Greater than	(x > 8)	false
Less than	(x < 8)	true
Example
let x = 5;

(x == 8); // equals false
(x != 8); // equals true
See Also:
JavaScript Comparisons Tutorials

Conditions
Booleans are extensively used in if statements to determine the code blocks to execute based on the logic.

Example	Result
if (day == "Monday")	true or false
if (salary > 9000)	true or false
if (age < 18)	true or false
Example
if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
See Also:
JavaScript If Else Tutorial

Loops
Booleans are extensively used in loops to determine conditions for looping.

Description	Example
For loop	for (i = 0; i < 5; i++)
While loop	while (i < 10)
For in loop	for (x in person)
For of loop	for (x of cars)
Example
while (i < 10) {
  text += i;
  i++;
}
See Also:
JavaScript Loop Tutorial

The Boolean() Function
You can use the Boolean() function to find out if an expression (or a variable) is true:

Example
Boolean(10 > 9)
Or even easier:

Example
(10 > 9)