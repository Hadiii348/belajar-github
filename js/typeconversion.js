JavaScript Type Conversion
JavaScript variables can be converted to a new variable and another data type:

By the use of a JavaScript function
Automatically by JavaScript itself
Converting Strings to Numbers
The global method Number() converts a variable (or a value) into a number.

A numeric string (like "3.14") converts to a number (like 3.14).

An empty string (like "") converts to 0.

A non numeric string (like "John") converts to NaN (Not a Number).

Examples
These will convert:

Number("3.14")
Number(Math.PI)
Number(" ")
Number("")
These will not convert:

Number("99 88")
Number("John")
Number Methods
In the chapter Number Methods, you will find more methods that can be used to convert strings to numbers:

Method	Description
Number()	Returns a number, converted from its argument
parseFloat()	Parses a string and returns a floating point number
parseInt()	Parses a string and returns an integer
The Unary + Operator
The unary + operator can be used to convert a variable to a number:

Example
let y = "5";      // y is a string
let x = + y;      // x is a number
If the variable cannot be converted, it will still become a number, but with the value NaN (Not a Number):

Example
let y = "John";   // y is a string
let x = + y;      // x is a number (NaN)