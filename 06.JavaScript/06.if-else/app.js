let a = "56";

// converting string into number

a = Number(a); // 1
a = parseInt(a); // 2
a = parseFloat(a); // 3
a = +a; // 4

let b = 4;

b = String(b);

console.log(a);
console.log(typeof a);

// Comparison operators
// Comparison operators always returns boolean

// more strict === (data type bhi check krta hy )
console.log(4 === 4);
console.log(typeof (4 === 5));

console.log("4" == 4); // true
console.log("4" === 4); // false
console.log(typeof (4 == 4));

let myName = "shEhzad";

console.log(myName === "shehzad");
console.log(typeof (myName === "shehzad"));

//
console.log(0 === -0);
console.log(0 !== 0); //ye baat galat hy ky ye dono barabar hyn
console.log(2 !== 3); //true

console.log("" !== "dd"); // jab bhi same values nhi hongyi tw true return hoga
console.log(true !== true);

console.log(6 <= 6);
console.log(6.9 < 6.0001);

let x = 4;
x = x + 5;
x += 5;

// agar
// if (boolean) {
// }

if (false) {
  // ye code KABHI BHI NHI chale ga
  console.log("Shehzad");
}

let weather = Number(prompt("Enter temp"));

if (String(weather) === "NaN") {
  alert("Number enter karo bhai");
}

// 20 pr sardi
// if (weather < 21 ) {
if (weather <= 20) {
  // ye code chale ga
  console.log("Sardi hy 🥶 ");
} else {
  console.log("Garmi hy 🌞");
}
