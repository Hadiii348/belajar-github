Sorting an Array
The sort() method sorts an array alphabetically:

Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
Reversing an Array
The reverse() method reverses the elements in an array:

Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.reverse();
By combining sort() and reverse(), you can sort an array in descending order:

Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
fruits.reverse();
JavaScript Array toSorted() Method
ES2023 added the toSorted() method as a safe way to sort an array without altering the original array.

The difference between toSorted() and sort() is that the first method creates a new array, keeping the original array unchanged, while the last method alters the original array.

Example
const months = ["Jan", "Feb", "Mar", "Apr"];
const sorted = months.toSorted();
JavaScript Array toReversed() Method
ES2023 added the toReversed() method as a safe way to reverse an array without altering the original array.

The difference between toReversed() and reverse() is that the first method creates a new array, keeping the original array unchanged, while the last method alters the original array.

Example
const months = ["Jan", "Feb", "Mar", "Apr"];
const reversed = months.toReversed();
Numeric Sort
By default, the sort() function sorts values as strings.

This works well for strings ("Apple" comes before "Banana").

If numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".

Because of this, the sort() method will produce incorrect result when sorting numbers.

You can fix this by providing a compare function:

Example
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
Use the same trick to sort an array descending:

Example
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return b - a});

