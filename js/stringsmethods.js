let text = "HELLO WORLD";
let char = text.charAt(0);
JavaScript String Length
The length property returns the length of a string:

Example
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
Extracting String Characters
There are 4 methods for extracting string characters:

The at(position) Method
The charAt(position) Method
The charCodeAt(position) Method
Using property access [] like in arrays
JavaScript String charAt()
The charAt() method returns the character at a specified index (position) in a string:

Example
let text = "HELLO WORLD";
let char = text.charAt(0);
JavaScript String charCodeAt()
The charCodeAt() method returns the code of the character at a specified index in a string:

The method returns a UTF-16 code (an integer between 0 and 65535).

Example
let text = "HELLO WORLD";
let char = text.charCodeAt(0);
JavaScript codePointAt()
Examples
Get code point value at the first position in a string:

let text = "HELLO WORLD";
let code = text.codePointAt(0);
JavaScript String at()
ES2022 introduced the string method at():

Examples
Get the third letter of name:

const name = "W3Schools";
let letter = name.at(2);
Get the third letter of name:

const name = "W3Schools";
let letter = name[2];
