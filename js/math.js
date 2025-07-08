Math Properties (Constants)
The syntax for any Math property is : Math.property.

JavaScript provides 8 mathematical constants that can be accessed as Math properties:

Example
Math.E        // returns Euler's number
Math.PI       // returns PI
Math.SQRT2    // returns the square root of 2
Math.SQRT1_2  // returns the square root of 1/2
Math.LN2      // returns the natural logarithm of 2
Math.LN10     // returns the natural logarithm of 10
Math.LOG2E    // returns base 2 logarithm of E
Math.LOG10E   // returns base 10 logarithm of E
Math Methods
The syntax for Math any methods is : Math.method(number)

Number to Integer
There are 4 common methods to round a number to an integer:

Math.round(x)	Returns x rounded to its nearest integer
Math.ceil(x)	Returns x rounded up to its nearest integer
Math.floor(x)	Returns x rounded down to its nearest integer
Math.trunc(x)	Returns the integer part of x (new in ES6)
Math.round()
Math.round(x) returns the nearest integer:

Examples
Math.round(4.6);
Math.round(4.5);
Math.round(4.4);
Math.ceil()
Math.ceil(x) returns the value of x rounded up to its nearest integer:

Example
Math.ceil(4.9);
Math.ceil(4.7);
Math.ceil(4.4);
Math.ceil(4.2);
Math.ceil(-4.2);
Math.floor()
Math.floor(x) returns the value of x rounded down to its nearest integer:

Example
Math.floor(4.9);
Math.floor(4.7);
Math.floor(4.4);
Math.floor(4.2);
Math.floor(-4.2);
Math.trunc()
Math.trunc(x) returns the integer part of x:

Example
Math.trunc(4.9);
Math.trunc(4.7);
Math.trunc(4.4);
Math.trunc(4.2);
Math.trunc(-4.2);
Math.sign()
Math.sign(x) returns if x is negative, null or positive.

If x is positive it returns 1
If x is negative it returns -1
If x is zero, it returns 0
Example
Math.sign(-4);
Math.sign(0);
Math.sign(4);