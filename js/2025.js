New Features in JavaScript 2025
Float16Array
Import Attributes
Math.f16round()
Promise.try()
RegExp.escape()
Set union()
Set intersection()
Set difference()
Set symmetricDifference()
Set isSubsetOf()
Set isSupersetOf()
Set isDisjointFrom()
Warning
These features are relatively new.

Older browsers may need an alternative code (Polyfill)

The RegExp.escape() Method
The RegExp.escape() method returns a string where characters that belongs to the regular expression syntax are escaped.

This makes it possible to treat characters like +, *, ?, ^, $, (, ), [, ], {, }, |, and \ literally, and not as part of a regular expression.

Example
Create a regular expression that matches the string "[*]":

// Escape a text for to use as a regular expression
const safe = RegExp.escape("[*]";

// Build a new reglar expression
const regex = new RegExp(safe);

// Text to replace within
const oldText = "[*] is a web school.";

// Perform the replace
const newText = oldText.match(regex, "W3Schools");
RegExp.escape() is supported all in modern browsers since May 2025:

Chrome 136	Edge 136	Firefox 134	Safari 18.2	Opera 121
Apr 2025	May 2025	Jan 2025	Des 2024	Jun 2025
Modules with Import Attributes
Syntax
import {names} from "module-name" with {key:"data"};
Examples
import config from "config.json" with {type:"json"};

import styles from "styles.css" with {type:"css"};

import data from "data.json" with {type:"json"};
The Float16Array Method
A Float16Array is a TypedArray that stores 16-bit (half-precision) floating-point numbers in the IEEE 754 half-precision format.

Float16Array requires half the memory of Float32Array and a quarter of Float64Array.

Example
const myArr = new Float16Array([1.5, 2.5, 3.5, 4.5]);

let bytes = myArr.BYTES_PER_ELEMENT;
let length = myArr.length;
The Float16Array object is supported in all modern browsers since June 2024:

Chrome 135	Edge 135	Firefox 129	Safari 18.2	Opera 120
Apr 2025	Apr 2025	Aug 2024	Des 2024	May 2025
The Math.f16round Method
The static Math.f16round() method returns the nearest 16-bit floating point representation of a number.

Example
let a = Math.f16round(2.60);
let b = Math.f16round(2.50);
let c = Math.f16round(2.49);
let d = Math.f16round(-2.60);
let e = Math.f16round(-2.50);
let f = Math.f16round(-2.49);
The Math.f16round() method is supported in all modern browsers since June 2024:

Chrome 135	Edge 135	Firefox 129	Safari 18.2	Opera 120
Apr 2025	Apr 2025	Aug 2024	Des 2024	May 2025
The Promise.try() Method
The Promise.try() method starts a promise chain from potentially throwing, synchronous code.

This ensures exceptions are correctly handled as promise rejections.

Example
function compute() {
  return Promise.try(() => {
    const v = mayThrowSync();
    return asyncFunc(v);
  });
}
JavaScript Set union()
The union() method returns the union of two sets.

The union() method returns a new set containing the elements which are in this set, or in the argument set, or in both:

Union

Example
const A = new Set(['a','b','c']);
const B = new Set(['b','c','d']);

const C = A.union(B);
The union() method is supported in all modern browsers since June 2024:

Chrome 122	Edge 122	Firefox 127	Safari 17	Opera 108
Feb 2024	Feb 2024	Jun 2024	Sep 2023	Mar 2024
JavaScript Set intersection()
The intersection() method returns the intersection of two sets.

The intersection() method returns a new set containing the elements which are in this set and in the argument set:

Intersection

Example
const A = new Set(['a','b','c']);
const B = new Set(['b','c','d']);

const C = A.intersection(B);
The intersection() method is supported in all modern browsers since June 2024:

Chrome 122	Edge 122	Firefox 127	Safari 17	Opera 108
Feb 2024	Feb 2024	Jun 2024	Sep 2023	Mar 2024
JavaScript Set difference()
The difference() method returns the difference between two sets.

The difference() method returns a new set containing elements which are in this set but not in the argument set:

Difference

Example
const A = new Set(['a','b','c']);
const B = new Set(['b','c','d']);

const C = A.difference(B);
The difference() method is supported in all modern browsers since June 2024:

Chrome 122	Edge 122	Firefox 127	Safari 17	Opera 108
Feb 2024	Feb 2024	Jun 2024	Sep 2023	Mar 2024
JavaScript Set symmetricDifference()
The symmetricDifference() method returns the symmetric difference between to sets.

The symmetricDifference() method returns a new set containing elements which are in this set or in the argument set, but not in both:

Symmetric Difference

Example
const A = new Set(['a','b','c']);
const B = new Set(['b','c','d']);

const C = A.symetricDifference(B);
The symmetricDifference() method is supported in all modern browsers since June 2024:

Chrome 122	Edge 122	Firefox 127	Safari 17	Opera 108
Feb 2024	Feb 2024	Jun 2024	Sep 2023	Mar 2024
JavaScript Set isSubsetOf()
The isSubsetOf() method returns true if all elements in this set are elements in the argument set:

Subset

Example
const A = new Set(['a','b','c']);
const B = new Set(['b','c','d']);

let answer = A.isSubsetOf(B);
The isSubsetOf() method is supported in all modern browsers since June 2024:

Chrome 122	Edge 122	Firefox 127	Safari 17	Opera 108
Feb 2024	Feb 2024	Jun 2024	Sep 2023	Mar 2024
JavaScript Set isSupersetOf()
The isSupersetOf() method returns true if all elements in the argument set are also in this set:

Superset

Example
const A = new Set(['a','b','c']);
const B = new Set(['b','c','d']);

let answer = A.isSupersetOf(B);
The isSupersetOf() method is supported in all modern browsers since June 2024:

Chrome 122	Edge 122	Firefox 127	Safari 17	Opera 108
Feb 2024	Feb 2024	Jun 2024	Sep 2023	Mar 2024
JavaScript Set isDisjointFrom()
The isDisjointFrom() method returns true if this set has no elements in common with the argument set:

Disjoint

Example
const A = new Set(['a','b','c']);
const B = new Set(['b','c','d']);

let answer = A.isDisjointFrom(B);
The Set.isDisjointFrom() method is supported in all modern browsers since June 2024:

Chrome 122	Edge 122	Firefox 127	Safari 17	Opera 108
Feb 2024	Feb 2024	Jun 2024	Sep 2023	Mar 2024
