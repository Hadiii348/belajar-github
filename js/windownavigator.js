The Navigator Object
The navigator object contains information about the visitor's browser.

It can be written with or without the window prefix like:

windows.navigator or just navigator

Browser Cookies
The cookieEnabled property returns true if cookies are enabled, otherwise false:

Example
<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML =
"cookiesEnabled is " + navigator.cookieEnabled;
</script>
The Browser Language
The language property returns the browser's language:

Example
<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = navigator.language;
</script>
Is The Browser Online?
The onLine property returns true if the browser is online:

Example
<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = navigator.onLine;
</script>
Browser Application Name
The appName property returns the application name of the browser:

Example
<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML =
"navigator.appName is " + navigator.appName;
</script>
Warning
This property is removed (deprecated) in the latest web standard.

Most browsers (Chrome, Edge, Firefox, Safari) returns Netscape as appName.

ADVERTISEMENT

Browser Application Code Name
The appCodeName property returns the application code name of the browser:

Example
<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML =
"navigator.appCodeName is " + navigator.appCodeName;
</script>
Warning
This property is removed (deprecated) in the latest web standard.

Most browsers (Chrome, Edge, Firefox, Safari) returns Mozilla as appCodeName.

The Browser Engine
The product property returns the product name of the browser engine:

Example
<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML =
"navigator.product is " + navigator.product;
</script>
Warning
This property is removed (deprecated) in the latest web standard.

Most browsers returns Gecko as product.

The Browser Version
The appVersion property returns version information about the browser:

Example
<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = navigator.appVersion;
</script>
Warning
This property is removed (deprecated) in the latest web standard.

Do not rely on appVersion to return the correct browser version.

The Browser Agent
The userAgent property returns the user-agent header sent by the browser to the server:

Example
<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = navigator.userAgent;
</script>
Warning
The information from the navigator object can often be misleading.

The navigator object should not be used to detect browser versions because:

Different browsers can use the same name
The navigator data can be changed by the browser owner
Some browsers misidentify themselves to bypass site tests
Browsers cannot report new operating systems, released later than the browser
The Browser Platform
The platform property returns the browser platform (operating system):

Example
<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = navigator.platform;
</script>
Warning
This property is removed (deprecated) in the latest web standard.

Do not rely on platform to return the correct browser platform in all browsers.

Is Java Enabled?
The javaEnabled() method returns true if Java is enabled:

Example
<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = navigator.javaEnabled();
</script>
Warning
This method is removed (deprecated) in the latest web standard.

javaEnabled() always returns false.