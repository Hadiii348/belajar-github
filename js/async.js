"async and await make promises easier to write"

async makes a function return a Promise

await makes a function wait for a Promise

Async Syntax
The keyword async before a function makes the function return a promise:

Example
async function myFunction() {
  return "Hello";
}
Is the same as:

function myFunction() {
  return Promise.resolve("Hello");
}
Here is how to use the Promise:

myFunction().then(
  function(value) { /* code if successful */ },
  function(error) { /* code if some error */ }
);
Example
async function myFunction() {
  return "Hello";
}
myFunction().then(
  function(value) {myDisplayer(value);},
  function(error) {myDisplayer(error);}
);

Or simpler, since you expect a normal value (a normal response, not an error):

Example
async function myFunction() {
  return "Hello";
}
myFunction().then(
  function(value) {myDisplayer(value);}
);

Await Syntax
The await keyword can only be used inside an async function.

The await keyword makes the function pause the execution and wait for a resolved promise before it continues:

let value = await promise;
ADVERTISEMENT
Example
Let's go slowly and learn how to use it.

Basic Syntax
async function myDisplay() {
  let myPromise = new Promise(function(resolve, reject) {
    resolve("I love You !!");
  });
  document.getElementById("demo").innerHTML = await myPromise;
}

myDisplay();

The two arguments (resolve and reject) are pre-defined by JavaScript.

We will not create them, but call one of them when the executor function is ready.

Very often we will not need a reject function.

Example without reject
async function myDisplay() {
  let myPromise = new Promise(function(resolve) {
    resolve("I love You !!");
  });
  document.getElementById("demo").innerHTML = await myPromise;
}

myDisplay();

Waiting for a Timeout
async function myDisplay() {
  let myPromise = new Promise(function(resolve) {
    setTimeout(function() {resolve("I love You !!");}, 3000);
  });
  document.getElementById("demo").innerHTML = await myPromise;
}

myDisplay();

Waiting for a File
async function getFile() {
  let myPromise = new Promise(function(resolve) {
    let req = new XMLHttpRequest();
    req.open('GET', "mycar.html");
    req.onload = function() {
      if (req.status == 200) {
        resolve(req.response);
      } else {
        resolve("File not Found");
      }
    };
    req.send();
  });
  document.getElementById("demo").innerHTML = await myPromise;
}

getFile();