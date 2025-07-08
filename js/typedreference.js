Typed Array Types
Revised July 2025
Name	Range	Type
Int8Array	-128 / 127	1 byte signed integer
Uint8Array	0 / 255	1 byte unsigned integer
Uint8ClampedArray	0 / 255	1 byte unsigned integer
Int16Array	-32768 / 32767	2 bytes signed short
Uint16Array	0 / 65535	2 bytes unsigned short
Int32Array	-231 / 231 - 1	4 bytes signed long
Uint32Array	0 / 232 - 1	4 bytes unsigned long
BigInt64Array	-263 / 263 - 1	8 bytes signed big integer
BigUint64Array	0 / 264 - 1	8 bytes unsigned big integer
 	 	 
Float16Array	-65504 / 65504	2 bytes floating point
Float32Array	-3.4e38 / 3.4e38	4 bytes floating point
Float64Array	-1.8e308 / 1.8e308	8 bytes floating point
Typed Array Methods
Revised July 2025
Method	Description
at()	Returns one indexed element from a typed array
byteLength	Returns one indexed element from a typed array
byteOffset	Returns one indexed element from a typed array
BYTES_PER_
ELEMENT	Returns the number of bytes used to store one element
copyWithin()	Copies array elements to another position in the array
entries()	Returns an iterator object with the key/value pairs from the array
every()	Executes a function for each typed array element
fill()	Fill all array elements with a value
filter()	Returns a new array filled with elements that pass a test
find()	Returns the first element that satisfies a condition
findIndex()	Returns the index of the first element that satisfies a condition
findLast()	Returns the last element that satisfies a condition
findLastIndex()	Returns the index of the last element that satisfies a condition
forEach()	Executes a function for each typed array element
from()	Returns a typed array from any object with a length property
includes()	Returns true if an array includes a specified value
indexOf()	Returns the first index (position) of a specified value
keys()	Returns the keys of a typed Array
lastIndexOf()	Returns the last index (position) of a specified value
length	Returns the lenth of the typed array
map()	Returns a new array from calling a function for every array element
name	Returns the name of the typed array
of()	Returns a new typed array from an existing array
reduce()	Reduce the values of an array to a single value
reduceRight()	Reduce the values of an array to a single value (right-to-left)
reverse()	Reverses a typed array in place
some()	Reurns true if one element satisfies a condition
sort()	Sorts an array in place
subarray()	Returns a subarray in the same memory space
toReversed()	Reverses an array in place
toSorted()	Sorts an array in place
toString()	Returns a string of all typed array elements
with()	Returns a new typed array with an updated array element