If const a = [] is not an array, what is it? 
An array is a contiguous memory space(unbreaking). It is treated as a single entity by the memory.

Getting at specific index.

Insert at a specific index -> Overwrites the index
In classic languages, capacity is a thing, you need an optimised way to use the memory wihtout allocation

Deletion

What is the big-O of getting an element in an array? 
-> a + width * offset 
O(1) we know the width, we know the offset, constant amount of operations!


```javascript
 const a = new ArrayBuffer(6);//Represents a raw buffer of binary data, which is used to store data for the different typed arrays. 
 //ArrayBuffers cannot be read from or written to directly, but can be passed to a typed array.
 
 console.log(a);
 
 
 const a8 = new Uint8Array(a); //Array onstructor using the buffer we created
 a8[0] = 45;
 console.log(a);
 a8[2] = 45;
 console.log(a);
 
 const a16 = new Uint16Array(a);
 console.log(a);
 a16[2] = 0x4545;
 console.log(a);
 ```


/*
ArrayBuffer { [Uint8Contents]: <00 00 00 00 00 00>, byteLength: 6 }
ArrayBuffer { [Uint8Contents]: <2d 00 00 00 00 00>, byteLength: 6 }
ArrayBuffer { [Uint8Contents]: <2d 00 2d 00 00 00>, byteLength: 6 }
ArrayBuffer { [Uint8Contents]: <2d 00 2d 00 00 00>, byteLength: 6 }
ArrayBuffer { [Uint8Contents]: <2d 00 2d 00 45 45>, byteLength: 6 }
*/

