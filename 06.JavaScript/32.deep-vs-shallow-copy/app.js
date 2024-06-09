// cloning / reference thorna
// deep copy vs shallow copy
// https://www.freecodecamp.org/news/clone-an-object-in-javascript/
// https://developer.mozilla.org/en-US/docs/Glossary/Shallow_copy
// https://www.freecodecamp.org/news/copying-stuff-in-javascript-how-to-differentiate-between-deep-and-shallow-copies-b6d8c1ef09cd/
// https://stackoverflow.com/questions/3978492/fastest-way-to-duplicate-an-array-in-javascript-slice-vs-for-loop

const originalObj = {
  name: "Shehzad",
  isMarried: false,
  address: { city: "Wonderland", zip: 12345 },
};

console.log(typeof JSON.parse("[0,34,5]"));

// shallow copy
const copyObj = { ...originalObj };
// deep copy
const copyObj = JSON.parse(JSON.stringify(originalObj));

console.log(copyObj);

copyObj.address.city = "baldia town";

console.log(originalObj.address.city);
console.log(copyObj.address.city);

console.log(JSON.parse('{"name":"shehzad","age":4}'));

// Template literals
console.log(`this is 3+3 ${JSON.stringify(copyObj)}!`);

const student = ["shehzad", 21];

const myName = student[0]; // assigning array values to variables
const age = student[1]; // assigning array values to variables

// Destructuring
const [myName, age] = ["shehzad", 21, "something"]; // short way of assigning array values to variables (this is equivalent to above code)

console.log(myName);
console.log(age);

// Destructuring in object
const { test, age } = { test: "shehzad", age: 21 };

console.log(test);
console.log(age);

//

function myFun(...shahab) {
  // rest operator
  console.log(shahab);
}
console.log(myFun("shehzad", "inamullah"));

//

const fruits = ["mango", "banana"];
console.log("shehzad", ...fruits, 45);

const copy = ["shehzad", ...fruits, 567];
console.log(copy);
