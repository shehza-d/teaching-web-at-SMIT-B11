const myName = prompt("what is your name?");

console.log(myName);

const a = [null,"nehal"]

console.log(typeof a[3]);

const obj = {
  key: "value",
  name: "shehzad",
  age: 23,
  [Symbol("name")]: "ayesha",
};
// object ki keys unique honi chiye

console.log(typeof 1);
console.log(typeof "S");
console.log(typeof true);
console.log(typeof []);
console.log(typeof {});
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof Symbol("S"));

let a = "13.45";

a = parseInt(a); // 13
a = parseFloat(a); // 13.45

console.log(a);

// precedance
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence

// 2 + 3 * 4
// 14
// 20