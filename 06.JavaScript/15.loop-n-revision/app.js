for (initialization; condition; increment) {
  loop_body;
}

for (1; 2; 4) {
  3;
}

// For Loop
// AK code ko bar bar chalane ko istamal hota hy
for (let i = 0; i <= 10; i++) {
  console.log(i, "Shehzad");
}

let i = 0;

for (console.log("initialization running"); ; console.log("increment")) {
  console.log(i, "shehzad");

  if (i === 6) {
    break;
  }

  i++;
}

// clock
for (let i = 0; i <= 60; i += 5) {
  console.log(i);
}

// odd 1,3,5,7 and even 2,4,6,8,10,12
let counter = 0;

for (let i = 0; i < 60; i += 2) {
  console.log("this is even ", i);
  console.log("this is odd ", i + 1);

  // if (i % 2 === 0) {
  //   // console.log("this is even ", i);
  // } else {
  //   console.log("this is odd", i);
  // }
  // console.log("My counter ", ++counter);
}

// Ulta loop 1
for (let i = 10; i > 0; i--) {
  console.log(i);
}

// Ulta loop 2
for (let i = 0; i < 10; i++) {
  console.log(10 - i);
}

// let myArr = ["Shehzad"];
//              0           1         2         3        4        5       6
let myArr = ["Shehzad", "Chandio", "Tanzil", "Karim", "ahmed", "abrar", "asad"];

console.log("length ", myArr.length);

// printing names one by one
console.log(myArr[0]);
console.log(myArr[1]);
console.log(myArr[3]);
console.log(myArr[4]);

// Printing all names at ones
for (let i = 0; i < myArr.length; i++) {
  console.log(myArr[i]);
}

let pets = [];

pets[0] = "dog";
pets[1] = "cat";
pets[2] = "bird";
pets[6] = "snake";

console.log(pets.length);

//

let userNames = [];
let name = prompt("enter you name");
userNames.push(name);

//
//

let basket = [
  "Apple",
  "Chandio",
  "watermelon",
  "Banana",
  "Pineapple",
  "grapes",
];

let isFound = "nhi mila"; //flag var
// Search
for (let i = 0; i < basket.length; i++) {
  if (basket[i] === "Chandio") {
    isFound = "mil gya";
  }
}

if (isFound === "mil gya") {
  console.log("Hello chandio");
} else {
  console.log("Chandio Farar hy!!");
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
// splices changes original array
// splices returns values that are deleted
// splices delete elements from center
basket.splice(1, 1, "Shehzad", "Chandio");

console.log(basket);

// https://www.w3schools.com/js/js_reserved.asp
let _$dfd3f$3$$$3dd___fsd3 = "Hello";
let balance;
// let let = ""

let Apple;

console.log("testing var", _$dfd3f$3$$$3dd___fsd3, apple);

// user input for testing

// camelCase
let userInputForTesting;

(1 + 3) * 4;
1 + 3 * 4;
let userName = "Shehzad";

console.log("Thanks, " + userName + "!"); // ES5
console.log(`Thanks, ${userName}!`); // ES6

let blackListNumber = 111;
let userNumber = +prompt("ENter you number");
// dono values same na ho tw true hoga
if (userNumber !== blackListNumber) {
  console.log("You are welcome");
}

let para =
  "the story of  of my smit the story of my smit the story of my smit the story of my smit ";
console.log(para.length);

if (para.length > 100) {
  console.log("not allowed");
}
