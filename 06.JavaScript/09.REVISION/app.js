// 7 Primitive Data types

// String
let myName = `Shehzad Iqbal`; // string is text

// Number
let age = 20;

// boolean
let isPresent = true;
let isPresent = false;

// undefined
let student;

// null
let empty = null;

// BigInt
let largeNumber = BigInt(334343434343434343434);
let largeNumber1 = 454000024758383834343437123456789n;

// Symbol
let s1 = Symbol("Shehzad");

console.log("shehzad" === "Shehzad");
console.log(Symbol("smit") === Symbol("smit")); // false

// a // 61
// '61' // 3631

console.log(7 + 8); // 15
console.log(" 7 + 8 "); //  7 + 8
// concatenation = 2 string ko join karne
console.log("7" + "8"); // 78

let a = "16.89";

a = Number(a);
a = parseInt(a);
a = parseFloat(a);
a = +a;

console.log("type", typeof a, a);
