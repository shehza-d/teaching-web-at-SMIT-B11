// valid variable names
let module_one_passed_students; // snake case
let balance1;
let $balance1;
let _balance1;

const zakat = 2.5;

// zakat++ // error

let balance = 5;

console.log("1nums ", balance--);
console.log("2nums ", balance);

balance++; // increment operator
balance++; // unary operator

balance = balance * 10;

console.log("nums ", balance);

balance--;

console.log(4 + 6); // binary operator

let salary = 10000;

salary = salary * 2;

//

let totalNumber = 1100;
let obtainedMarks = 756;

let percentage = (obtainedMarks / totalNumber) * 100;

console.log("percentage:", percentage);

let nr1 = 4;
let nr2 = 5;
let nr3 = 2;

console.log(nr1++ + ++nr2 * nr3++);
console.log(4 + 6 * 2);
console.log(4 + 12);
console.log(16);
// 22, 23, 18, 16

// Assignment operators
let num5 = 6;

num5 = num5 + 4;
num5 += 4; // both are same!!

let salary1 = 20000;

// salary1 = salary1 + (salary1 / 100) * 5;
salary1 += (salary1 / 100) * 5;

console.log("🚀 ~ salary:", salary1);
