function popUp() {
  alert("function chl gaya");
  const x = 5;
  const y = 9;
  console.log(result);
  return;
}
popUp();

const name = "abc";
console.log(name);

{
  const name = 3344;
  console.log(name);
}

// ...extra is rest operator
function printName(name, age, ...extra) {
  console.log("arguments ", arguments);
  console.log(extra);
  console.log(name);
  console.log(age); // kuxh na kuxh tw hy isma
}

printName("nehal", 23, 6, "test", 5); // invoke

printName("shehzad", 33); // invoke

//

// Default parameter
function sum(a, b = 0) {
  console.log(`a=${a} b=${b}`);

  return a + b;
}
// REMEMBER: jaha se function call hua hy udher return value aajaye gyi
console.log(sum());

const testing = sum(5);

console.log(testing);

// IIFE = Immediately Invoked Function Expression
((a, b) => {
  console.log("ye code binna invoke kiye chal jaye ga");
})();

// anonymous function
const myNewFunction = function () {
  console.log("new function");
};

myNewFunction();

// arrow function
const myNewFunction2 = () => {
  console.log("new function");
};

console.log(myNewFunction2());

// d/b arrow vs normal function

// assignment
average(4, 5, 6, 10, 4, 4, 5, 6, 10, 4);

const average = () => {
  return;
};

//
//
//

const myFun = () => 6 * 2 - 12;

console.log(myFun() ? "aagya samaj" : "nhi aaya samaj");
