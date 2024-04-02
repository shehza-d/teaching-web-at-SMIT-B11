let str = 'what\'s your name? Is it "Mike"?';
console.log(str);

let x = 1;
let y = 2;
let z = 3;

if (x < y > z) {
}
console.log(x < y && y < z && x == 3);

if (x < y && y < z) {
}

// OR Operator
let test1 = false || true || false;
console.log(test1);

let food = true;
let tea = false;
let drink = false;

if (food || tea || drink) {
  console.log("le aao");
} else {
  console.log("ghar jao");
}

// AND Operator
let test2 = true && true && true;
console.log(test2);

let isEnroll = true;
let passed = false;
let age = 20;

if (isEnroll && passed && age > 18) {
  console.log("Pharai karo class ma");
} else {
  console.log("ghar jao");
}

let x = 5;
let y = 6;

console.log(!(x === y));
console.log(x == 5 || y == 5);
console.log(5 < 10 && y < 1);

// aakhir truthy value return kare ga
let test2 = true && "shehzad";
let test3 = "shehzad" && true;
let test4 = null && "shehzad" && 56;
let test = "shehzad" && null && 56;
let test5 = true && "shehzad" && 56;
let test6 = true && 0 && 56;
let test7 = "hh" && null;
let test8 = "hh" && "kk";

// Phale truthy value return kare ga
let test9 = "shehzad" || true;
let test10 = "" || null;
let test11 = "" || true;
let test12 = "shehzad" || 0 || null || true;
let test13 = null || "shehzad" || 56;
let test14 = true || "shehzad" || 56;
let test15 = false || 0 || 56;
let test16 = "hh" || null;
let test17 = "hh" || "kk";
