The new Date() Constructor
In JavaScript, date objects are created with new Date().

new Date() returns a date object with the current date and time.

Get the Current Time
const date = new Date();
Date Get Methods
Method	Description
getFullYear()	Get year as a four digit number (yyyy)
getMonth()	Get month as a number (0-11)
getDate()	Get day as a number (1-31)
getDay()	Get weekday as a number (0-6)
getHours()	Get hour (0-23)
getMinutes()	Get minute (0-59)
getSeconds()	Get second (0-59)
getMilliseconds()	Get millisecond (0-999)
getTime()	Get time (milliseconds since January 1, 1970)
Note 1
The get methods above return Local time.

Universal time (UTC) is documented at the bottom of this page.

Note 2
The get methods return information from existing date objects.

In a date object, the time is static. The "clock" is not "running".

The time in a date object is NOT the same as current time.

The getFullYear() Method
The getFullYear() method returns the year of a date as a four digit number:

Examples
const d = new Date("2021-03-25");
d.getFullYear();
const d = new Date();
d.getFullYear();
Warning !
Old JavaScript code might use the non-standard method getYear().

getYear() is supposed to return a 2-digit year.

getYear() is deprecated. Do not use it!

The getMonth() Method
The getMonth() method returns the month of a date as a number (0-11).

Note
In JavaScript, January is month number 0, February is number 1, ...

Finally, December is month number 11.

Examples
const d = new Date("2021-03-25");
d.getMonth();
const d = new Date();
d.getMonth();
Note
You can use an array of names to return the month as a name:

Examples
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const d = new Date("2021-03-25");
let month = months[d.getMonth()];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const d = new Date();
let month = months[d.getMonth()];
The getDate() Method
The getDate() method returns the day of a date as a number (1-31):

Examples
const d = new Date("2021-03-25");
d.getDate();
const d = new Date();
d.getDate();