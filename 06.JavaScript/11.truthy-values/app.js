Boolean(0);
Boolean("car");

// if (boolean) {
// if ki body
// }

let testing = Boolean(-10);

console.log("testing:", testing);

// false, 0, "", null, undefined, NaN

if (0) {
  console.log("tree");
} else {
  console.log("karim");
}

// 7 falsy values in JS

let variable = true;

let weather = Number(prompt("Enter temp"));

// let a = weather < 20;

if (weather < 10) {
  console.log("Sardi hy 🥶 ");
} else if (weather < 32 || weather >= 28) {
  console.log("moderate");
} else {
  console.log("Garmi hy 🌞");
}

// OR operator |||||||| koi ak bhi true tw true
// weather = 67
// weather <  32 || weather >= 28
// false || true

console.log(false || false);
console.log(true || false);
console.log(false || true);
console.log(true || true);

console.log(false || false || true || false);

// AND Operator = koi ak bhi false tw false

console.log(false && false);
console.log(true && false);
console.log(false && true);
console.log(true && true);

console.log(false && false && true && false);
