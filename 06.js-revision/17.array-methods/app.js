const arr = [34, 65, 76, 89, 100, 12];

// console.log(arr.join(' '));

// map returns a value
// forEach value return nhi karta
// const returnValue = arr.map((item,index) => {
//   console.log(index);
//   if(index === 2){
//     return item
//   }
//   return item * 0.90;// applied 10% discount to all items
// });

// console.log("returnValue ", returnValue);
// console.log("arr ", arr);

// ternary start
let isOpen = true;
let isLocked = false;

let message = "";

// if else value return nhi karta
// Ternary value return karta hy

// if (isOpen) {
//   message = "gate is open";
//   if (isLocked) {
//     message + "gate is locked";
//   }
// } else {
//   message = "gate is close";
//   if (isLocked) {
//     message = "gate is locked";
//   }
// }

// chota if else
// message = (isOpen) ? "gate is open" : "gate is close";

// message = `gate is ${isOpen ? "open" : "close"} and gate is ${
//   isLocked ? "locked" : "unlocked"
// }!`;

// Nested Ternary
// condition
//   ? "if phali condition true hy tw ya return hoga"
//   : condition
//   ? "2nd condition true"
//   : "dono false hyn";

// console.log("message: ", message);

// console.log(isOpen ? "gate is opened " : "gate is closed!");
// console.log(isOpen ? "gate is opened " : "gate is closed!");
// ternary end

// Destructuring

// const { age } = { name: "shehzad", age: 22 };
const [firstName, lastName, age] = ["shehzad", "iqbal", 22];

// const firstName = myArr[0];
// const lastName = myArr[1];
// const age = myArr[2];

console.log("firstName=> ", firstName);
console.log("lastName=> ", lastName);
console.log("age=> ", age);
