console.log("">2)       // Output - false
console.log("1">2)      // Output - false
console.log("5">2)      // Output - true

console.log(null==null) // Output - true
console.log(null==0)    // Output - false
console.log(null>0)    // Output - false
console.log(null>=0)    // Note =  Output - true
console.log(null>null)  // Output - false

console.log(undefined==undefined)   // Output - true
console.log(undefined>undefined)    // Output - false

console.log(null==undefined)    // Note- Output - true
console.log(0==undefined)       // Output - false
console.log(null>undefined)     // Output - false
console.log(null<undefined)     // Output - false

console.log(null==0)            // Output - false
console.log(null=="")           // Output - false
// console.log(number>boolean)     // Output - Error
console.log()

// Use of === which is used of strict check
console.log("2"==2)     // Output = true
console.log("2"===2)     // Output = false