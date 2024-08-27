// Short circuiting
// https://www.freecodecamp.org/news/short-circuiting-in-javascript

// precedance
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence

console.log((2 + 3) * 4);
// 14 or 20 BODMAS will decide

// making multiple variables in same line
let a, b, c;

// assigning multiple values in same line
a = b = c = 5;

a = b = 50;

console.log("a ", a);
console.log("b ", b);
console.log("c ", c);

// (1 + ( (2 ** 3) * 4 / 5) ) - 6
// (1 + ( 8 * 4 / 5 ) ) - 6
// (1 + (8 * 0.8) ) - 6
// (1 + 6.4) - 6
// 7.4 - 6
// 1.4

const tester = () => {
  console.log("function chala!!!");
  return "smit";
};

// Short circuiting
true && tester(); // will run
false && tester(); // not run

console.log(false || tester() || "shehzad");

// real life example
const name = ""; // agar ye value false hogyi tw guest aaye ga nhi tw wo aaye ga jo is variable ma hoga

const displayName = name || "Guest";

console.log(displayName); // Output: Guest
