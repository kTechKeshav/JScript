const rollno = 2201641520090
let email = "kkksoku215280@gmail.com"
var password = 215280

a = 467         // Default is var (Not prefer)

console.log(typeof(rollno));    // number
console.log(typeof(email));     // string
console.log(typeof(password));  // number

console.table([rollno, email, password]);   // Used to print the data in table format with indexing
// using var most of the time is not prefer. (Use let)

let b;                  // value of b is undefined.
console.log(b)          // It will print undefined.
console.log(typeof(b))  // It will print undefined.

let c = null;           // value of c is null.
console.log(c)          // It will print null.
console.log(typeof(c))  // NOTE - It will print object.