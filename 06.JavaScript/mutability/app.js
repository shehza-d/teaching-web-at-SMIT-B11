// variable bane ga const unless we really require let


// 1. binary
// 2. spread operator
// 2. RAM visualisation (Memory adresses)
// 3. Copy by value and Reference 
// 4. types of variables 
// 5. SCREAMING_CASE
// 6. Immutability (primitive values are immutable — once a primitive value is created, it cannot be changed)


// const is variable // normal
// let means this is going to change for sure
// ACTUAL_CONSTANTS  // if i log this value 1000 times it will always be same

// UPPER_SNAKE_CASE or CONSTANT_CASE or SCREAMING_CASE

// const obj = { name: "Alice" };
// obj.name = "Bob"; // This is allowed
// obj = { name: "Charlie" }; // Error: Assignment to constant variable

// const obj = Object.freeze({ name: "Alice" });
// obj.name = "Bob"; // This will fail silently or throw an error in strict mode

let sum = (a, b) => a + b;

// cloning / reference thorna

// https://www.joshwcomeau.com/javascript/the-const-deception/

// this is also ACTUAL_CONSTANTS
const PROVINCE_OF_PAKISTAN = Object.freeze([
  "Sindh",
  "Punjab",
  "Balochistan",
  "KPK",
]);
