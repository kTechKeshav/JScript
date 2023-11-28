// Type Casting (by Number)
let number  = "45"
console.log(typeof(number));    // Here datatype is string.
let answer = Number(number) ;   // Type Casting is performed using class 'Number'.
console.log(Number(number));    // If there is a number which is actual a number in string then output will be that number otherwise output will be NaN.
console.log(typeof(answer));    // Note output will be 'number'


let apple = null
console.log(typeof(apple))      // Output - object
console.log((apple))            // Output - null
console.log(Number(apple))      // Output - 0

console.log()

let pple = undefined
console.log(typeof(pple))      // Output - undefined
console.log((pple))            // Output - undefined
console.log(Number(pple))      // Output - NaN

console.log()

let ple = true
console.log(typeof(ple))      // Output - boolean
console.log((ple))            // Output - true
console.log(Number(ple))      // Output - 1

console.log()

// Type Casting (using Boolean)
let aa = 1   
let result1 = Boolean(aa)     
console.log(result1)            // Output - true
console.log(typeof(result1))    // Output - boolean

console.log()

let bb = "0"
let result2 = Boolean(bb)
console.log(result2)            // Output - true
console.log(typeof(result2))    // Output - boolean


console.log()

let cc = ""
let result3 = Boolean(cc)
console.log(result3)            // Output - false
console.log(typeof(result3))    // Output - boolean

console.log()
// Type casting (by String)
let num = 658
console.log(num);           // Output - 658
console.log(typeof num);    // Output - number
let mun = String(num)       
console.log(mun)            // Output - "658"
console.log(typeof(mun))    // Output - string