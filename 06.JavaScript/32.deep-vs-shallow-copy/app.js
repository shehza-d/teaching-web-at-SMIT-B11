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

// console.log(typeof JSON.parse("[0,34,5]"));

// shallow copy
// const copyObj = { ...originalObj };
// deep copy
const copyObj = JSON.parse(JSON.stringify(originalObj));

// console.log(copyObj);

// copyObj.address.city = "baldia";

// console.log(originalObj?.address?.city);
// console.log(copyObj.address.city);

// console.log(JSON.parse("{\"name\":\"shehzad\",\"age\":4}"));

// Template literals
// console.log(`this is 3+3 ${JSON.stringify(copyObj)}!`)

// const student = ["shehzad", 21];

// const myName = student[0]
// const age = student[1]

// Destructuring
// const [myName, age] = ["shehzad", 21, "something"];

// console.log(myName);
// console.log(age);

// const { name, age } = { name: "shehzad", age: 21 };

// console.log(name);
// console.log(age);

// function myFun(...shahab) {
//   // rest
//   console.log(shahab);
// }
// console.log(myFun("shehzad", "inamullah"));

const fruits = ["mango","banana"]
const copy = ["shehzad",...fruits, 567]

console.log(copy);
// console.log("shehzad", ...fruits ,45)