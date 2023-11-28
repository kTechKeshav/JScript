"use strict"; // treat all JS as a newer version.
// alert(364)   --> As we are running the program in nodeJs not in browser console.
let name = "Keshav"
let age = 20
let isLoggedIn = false
let abc
let xyz = null

console.table([name, age, isLoggedIn, abc, xyz])

console.log(typeof(name));          // datatype --> string
console.log(typeof(age));           // datatype --> number
console.log(typeof(isLoggedIn));    // datatype --> boolean
console.log(typeof(abc));           // datatype --> undefined
console.log(typeof(xyz));           // datatype --> object
console.log("\n");

