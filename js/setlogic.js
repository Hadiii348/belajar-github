The union() Method
The union() method returns the union of two sets.

The union() method returns a new set containing the elements which are in this set, or in the argument set, or in both:

Union

Example
const A = new Set(['a','b','c']);
const B = new Set(['b','c','d']);

const C = A.union(B);
The intersection() Method
The intersection() method returns the intersection of two sets.

The intersection() method returns a new set containing the elements which are in this set and in the argument set:

Intersection

Example
const A = new Set(['a','b','c']);
const B = new Set(['b','c','d']);

const C = A.intersection(B);
The difference() Method
The difference() method returns the difference between two sets.

The difference() method returns a new set containing elements which are in this set but not in the argument set:

Difference

Example
const A = new Set(['a','b','c']);
const B = new Set(['b','c','d']);

const C = A.difference(B);
The symmetricDifference() Method
The symmetricDifference() method returns the symmetric difference between to sets.

The symmetricDifference() method returns a new set containing elements which are in this set or in the argument set, but not in both:

Symmetric Difference

Example
const A = new Set(['a','b','c']);
const B = new Set(['b','c','d']);

const C = A.symetricDifference(B);
ADVERTISEMENT

The isSubsetOf() Method
The isSubsetOf() method returns true if all elements in this set is also elements in the argument set:

Subset

Example
const A = new Set(['a','b','c']);
const B = new Set(['b','c','d']);

let answer = A.isSubsetOf(B);
The isSupersetOf() Method
The isSupersetOf() method returns true if all elements in the argument set are also in this set:

Superset

Example
const A = new Set(['a','b','c']);
const B = new Set(['b','c','d']);

let answer = A.isSupersetOf(B);
The isDisjointFrom() Method
The isDisjointFrom() method returns true if this set has no elements in common with the argument set:

Disjoint

Example
const A = new Set(['a','b','c']);
const B = new Set(['b','c','d']);

let answer = A.isDisjointFrom(B);
