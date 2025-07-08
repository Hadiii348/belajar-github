The from() Method
The from()method creates a new typed array from any iterable object:

Examples
Create a typed array from a string:

const myArr = Int16Array.from("1234567890");
Create a typed array from an array:

const myArr = Int16Array.from([1,2,3,4,5,6,7,8,9,0]);
The of() Method
The of() method creates a new typed array from a number of arguments:

Example
const myArr = Int16Array.of(1,2,3,4,5,6,7,8,9,0);
The constructor.name Property
The constructor.name property returns the name (type) of a typed array:

Example
myArr.constructor.name
The BYTES_PER_ELEMENT Property
BYTES_PER_ELEMENT returns the number of bytes used to store each array element:

Example
myArr.BYTES_PER_ELEMENT
Common Array Methods
Typed Arrays share many methods with Standard Arrays:

Iteration: forEach(), map(), filter(), reduce(), reduceRight(), every(), some(), find(), findIndex(), findLast(), findLastIndex().

Searching: includes(), indexOf(), lastIndexOf().

Manipulation: at(), copyWithin(), fill(), reverse(), set(), slice(), sort(), subarray().

Conversion: join(), toLocaleString(), toString().

Non-mutating methods: toReversed(), toSorted(), with().

The fill() Method
The fill() method changes all elements in a typed array to a value:

Example
Fill all array elements with a value:

myArr.fill(200);
The fill() method takes two optional arguments: start index and end index:

Example
Fill some array elements with a value:

myArr.fill(200, 0, 3);
The find() Method
The find() method returns the first element that satisfies a test:

Example
myArr.find((x) => x > 18)
The some() Method
The some() method returns true if an element for which a provided function returns true:

Example
myArr.some((x) => x > 18)