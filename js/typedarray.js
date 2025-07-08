Typed Array Types
Name	Min	Max	Bytes	Type
Int8Array	-128	127	1	byte
Uint8Array	0	255	1	octet
Uint8ClampedArray	0	255	1	octet
Int16Array	-32768	32767	2	short
Uint16Array	0	65535	2	unsigned short
Int32Array	-2147483648	2147483647	4	long
Uint32Array	0	4294967295	4	unsigned long
BigInt64Array	-263	263 - 1	8	bigint
BigUint64Array	0	264 - 1	8	unsigned bigint
 	 	 	 	 
Float16Array	-65504	65504	2	unrestricted half
Float32Array	-3.4e38	3.4e38	4	unrestricted float
Float64Array	-1.8e308	1.8e308	8	unrestricted double
8 Bit Integers
Name	Data Type	Range
Int8Array	Signed integer (byte)	-128/127
Uint8Array	Unsigned integer (octet)	0/255
Uint8ClampedArray	Unsigned integer (octet)	0/255
Examples
Create a typed array of 10 signed 8-bit integers (byte format):

const myArr = new Int8Array(10);
Create a typed array of 10 unsigned 8-bit integers (octet format):

const myArr = new Uint8Array(10);
Create a typed array of 10 usigned 8-bit integers (clamped format):

const myArr = new Uint8ClampedArray(10);
Uint8Array vs Uint8ClampedArray
The difference between an Uint8Array and an Uint8ClampedArray is how values are added.

If you set one element in an Uint8ClampedArray to a value outside the 0-255 range, it will default to 0 or 255.

A typed array will just take the first 8 bits of the value.

16-Bits Integers
Name	Data Type	Range
Int16Array	Short integer	-32768/32767
Uint16Array	Unsigned short integer	0/65535
Examples
Create a typed array of 10 signed 16-bit integers (short format):

const myArr = new Int16Array(10);
Create a typed array of 10 unsigned 16-bit integers (unsigned short format):

const myArr = new Uint16Array(10);
32-Bit Integers
Name	Data Type	Range
Int32Array	Signed long integer	-2147483648 / 2147483647
Uint32Array	Unsigned long integer	0 / 4294967295
Examples
Create a typed array of 10 signed 32-bit integers (long format):

const myArr = new Int32Array(10);
Create a typed array of 10 unsigned 32-bit integers (unsigned long format):

const myArr = new Uint32Array(10);