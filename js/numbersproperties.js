JavaScript Number Properties
Number Properties
EPSILON
MAX_VALUE
MIN_VALUE
MAX_SAFE_INTEGER
MIN_SAFE_INTEGER
POSITIVE_INFINITY
NEGATIVE_INFINITY
NaN
See Also:
Numbers Tutorial
Number Methods
Number Reference
JavaScript EPSILON
Number.EPSILON is the difference between the smallest floating point number greater than 1 and 1.

Example
let x = Number.EPSILON;
Note
Number.EPSILON is an ES6 feature.

It does not work in Internet Explorer.

JavaScript MAX_VALUE
Number.MAX_VALUE is a constant representing the largest possible number in JavaScript.

Example
let x = Number.MAX_VALUE;
Number Properties Cannot be Used on Variables
Number properties belong to the JavaScript Number Object.

These properties can only be accessed as Number.MAX_VALUE.

Using x.MAX_VALUE, where x is a variable or a value, will return undefined:

Example
let x = 6;
x.MAX_VALUE
JavaScript MIN_VALUE
Number.MIN_VALUE is a constant representing the lowest possible number in JavaScript.

Example
let x = Number.MIN_VALUE;
JavaScript MAX_SAFE_INTEGER
Number.MAX_SAFE_INTEGER represents the maximum safe integer in JavaScript.

Number.MAX_SAFE_INTEGER is (253 - 1).

Example
let x = Number.MAX_SAFE_INTEGER;
JavaScript MIN_SAFE_INTEGER
Number.MIN_SAFE_INTEGER represents the minimum safe integer in JavaScript.

Number.MIN_SAFE_INTEGER is -(253 - 1).

Example
let x = Number.MIN_SAFE_INTEGER;
