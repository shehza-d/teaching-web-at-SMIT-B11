// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions
function doWork() {
  console.log("Hello");
  console.log("World");
}

doWork();
doWork();

// jidher se call hoga udher hi value return hogyi
function sum(num1, num2) {
  // num1 and num2 is parameter
  let result = num1 + num2;

  return result;
  // return "shehzad"
  // return last ma hoga
  // return saruf ak bar ho sagta hy
  // reutrn ky baad functio nhi chalta
}
// koi function jab kuxh bhi return nhi karta tw undefined return kare ga

console.log(sum(5, 6)); // 5 and 6 is called arguments
console.log(sum(3, 3));

// es5 named function
function average(numberArr) {
  //              parameter

  let sum = 0;
  for (let i = 0; i < numberArr.length; i++) {
    sum = sum + numberArr[i];
  }

  let avg = sum / numberArr.length;

  return avg;
}

console.log(average([5, 7, 3, 6, 9, 4])); // argument
console.log(average([5, 7, 14])); // argument

// Default parameter
let sum = (a, b = 0) => {
  //     arrow function
  return a + b;
};

console.log(sum(52, 11));

// IIFE = Immediately Invoked Function Expression
(function () {
  console.log("FOO!");
})();

// Rest operator
const multiply = (a, b, ...c) => {
  console.log(c);

  let result = a * b;

  for (const value of c) {
    result = result * value;
  }

  return result;
};

let result = multiply(4, 14, 5, 5, 4, 3, 2);

console.log("result:", result, 4, "shehzad"); // console function is also using ...rest

const myFun = () => 6 * 2 - 12;

console.log(myFun() ? "aagya samaj" : "nhi aaya samaj");
// Kyu nhi aayi samaj
