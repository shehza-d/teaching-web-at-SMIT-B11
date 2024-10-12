// truthy values
// falsy ky illawa sab turthy hyn

// https://www.freecodecamp.org/news/what-are-falsey-values-in-javascript/
// falsy values
// 0
// null
// undefined
// ""
// NaN
// false

// Logical Operators
console.log(false || true);

let x = 5;

console.log(6 || false);

if ("0") {
  console.log("ye truthy hy");
}

console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(1));
console.log(Boolean("0"));
console.log(Boolean([]));
console.log(Boolean({}));
console.log(Boolean(-0));
console.log(Boolean(15 % 5)); // false

// last truthy value is returned
console.log(1 && true && " " && 1);
console.log(false && 0 && true);
let test2 = true && "shehzad";
let test3 = "shehzad" && true;
let test4 = null && "shehzad" && 56;
let test = "shehzad" && null && 56;
let test5 = true && "shehzad" && 56;
let test6 = true && 0 && 56;
let test7 = "hh" && null;
let test8 = "hh" && "kk";

// first truthy valus is returned
console.log(2 || 1);
console.log(null || 1);
console.log(null || 0);
console.log("shehzad" || 1);

let test9 = "shehzad" || true;
let test10 = "" || null;
let test11 = "" || true;
let test12 = "shehzad" || 0 || null || true;
let test13 = null || "shehzad" || 56;
let test14 = true || "shehzad" || 56;
let test15 = false || 0 || 56;
let test16 = "hh" || null;
let test17 = "hh" || "kk";
console.log(test17);

const userName = "Shehzad";
const password = "Shehzad";

if (userName === "Shehzad") {
  if (password === "shehzad") {
    console.log("Login");
  }
} else {
  console.log("invalid user");
}

if (false) {
  console.log(1);
} else if (true) {
  console.log(2);
} else if (true) {
  console.log(3);
} else if (true) {
  console.log(4);
} else if (true) {
  console.log(5);
} else {
  console.log(6);
}
