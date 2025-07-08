New Features in JavaScript 2023
Array findLast()
Array findLastIndex()
Array toReversed()
Array toSorted()
Array toSpliced()
Array with()
#! (Shebang)
JavaScript Array findLast() Method
ES2023 added the findLast() method that will start from the end of an array and return the value of the first element that satisfies a condition.

Example
const temp = [27, 28, 30, 40, 42, 35, 30];
let high = temp.findLast(x => x > 40);
JavaScript Array findLastIndex() Method
The findLastIndex() method finds the index of the last element that satisfies a condition.

Example
const temp = [27, 28, 30, 40, 42, 35, 30];
let pos = temp.findLastIndex(x => x > 40);
JavaScript Array toReversed() Method
ES2023 added the Array toReversed() method as a safe way to reverse an array without altering the original array.

The difference between the new toReversed() method and the old reverse() method is that the new method creates a new array, keeping the original array unchanged, while the old method altered the original array.

Example
const months = ["Jan", "Feb", "Mar", "Apr"];
const reversed = months.toReversed();
JavaScript Array toSorted() Method
ES2023 added the Array toSorted() method as a safe way to sort an array without altering the original array.

The difference between the new toSorted() method and the old sort() method is that the new method creates a new array, keeping the original array unchanged, while the old method altered the original array.

Example
const months = ["Jan", "Feb", "Mar", "Apr"];
const sorted = months.toSorted();
JavaScript Array toSpliced() Method
ES2023 added the Array toSpliced() method as a safe way to splice an array without altering the original array.

The difference between the new toSpliced() method and the old splice() method is that the new method creates a new array, keeping the original array unchanged, while the old method altered the original array.

Example
const months = ["Jan", "Feb", "Mar", "Apr"];
const spliced = months.toSpliced(0, 1);
ADVERTISEMENT

JavaScript Array with() Method
ES2023 added the Array with() method as a safe way to update elements in an array without altering the original array.

Example
const months = ["Januar", "Februar", "Mar", "April"];
const new = months.with(2, "March");
#! JavaScript Shebang
A Shebang is a number sign and an exclamation mark (#!) at the beginning of a script:

#!/usr/bin/env node
The example above tells the operating system to use the node program to run the script.

Now, you can run JavaScript code with ./fileName.js instead of node fileName.js.

#! is also called sharp-exclamation, hashbang, pound-bang, or hash-pling.

