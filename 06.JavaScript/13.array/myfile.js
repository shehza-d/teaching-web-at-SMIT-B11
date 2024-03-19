// Array

let fruits = []; // empty ki length hy ___
let basket = [
  "Apple",
  "watermelon",
  "Banana",
  "Pineapple",
  "Orange",
  "Mango",
  "grapes",
];

console.log(basket.length);

console.log(basket[0]); // apple

console.log(basket.at(-1)); // prints last value
console.log(basket[basket.length - 1]); // returns last value

// aakhir se
basket.push("SMIT"); // adds element and return new array length
basket.pop(); // removes last element
basket.pop(); // returns removed value

// shuru se
// not recommended
basket.unshift("Chandio"); // adds values in start
basket.shift();
basket.shift();

console.log(basket);
