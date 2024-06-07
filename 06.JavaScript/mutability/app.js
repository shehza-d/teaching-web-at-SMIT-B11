// https://www.freecodecamp.org/news/javascript-assigning-values-vs-assigning-references
// https://www.joshwcomeau.com/javascript/the-const-deception/

// 1. binary
// 2. spread operator
// 2. RAM visualisation (Memory adresses)
// 3. Copy by value and Reference
// 4. types of variables
// 5. SCREAMING_CASE
// 6. Immutability (primitive values are immutable — once a primitive value is created, it cannot be changed)

const arr = [4, 5, 7];

const copy = arr;

copy[1] = "Shehzad";

console.log(arr); // both will have Shehzad at 1 index
console.log(copy); // both will have Shehzad at 1 index

//

let a = 5;
let b = a;

b = 2;
// only b will be change not a because these are primitive values

//

// obj aur array aur function hamesha const ky sath bane ga

// primitive kabhi change nhi hota
// primitive ki changed copy save hoti hy
let id = "WMA-245624";

id.slice(0, 2); // this doesn't change id
id = id.slice(0, 2); // this also doesn't change value of id but reassigns it

console.log(id); // id remains the same

//
// 1
const student = { name: "abdullah", age: 20 };

const anotherStudent = student;
const kaif = anotherStudent; // kaif ma bhi wohi wala same original object(on line 37) stored hy

kaif.name = "ayesha";

console.log(student.name); // will print ayesha

// is behavior ma var,let, const se farak nhi pare ga
// 2
const obj = { name: "shehzad" };
obj.name = "talha"; // This is allowed
obj = { name: "kaif" }; // Error: Assignment to constant variable

const obj = Object.freeze({ name: "shehzad" });
obj.name = "talha"; // This will fail silently or throw an error in strict mode

//

// 📐 RULES
// 1. var use nhi kare gye
// 2. let jaha per value reassign karni hogyi
// 3. const har jaga (everywhere)
// 4. const ACTUAL_CONSTANTS_WILL_HAVE_THIS_CASE
// also called UPPER_SNAKE_CASE or CONSTANT_CASE or SCREAMING_CASE
// variable bane ga const unless we really require let

const API_KEY = "https://myserver.com";
let sum = (a, b) => a + b; // valid but not a good idea
const sum = (a, b) => a + b;

// freeze lock objects and arrays
// this is also ACTUAL_CONSTANTS
const PROVINCE_OF_PAKISTAN = Object.freeze([
  "Sindh",
  "Punjab",
  "Balochistan",
  "KPK",
]);

// revision ===>>>
// reviewing code
// const is variable // normal
// let means this is going to change for sure
// ACTUAL_CONSTANTS  // if i log this value 1000 times it will always be same
