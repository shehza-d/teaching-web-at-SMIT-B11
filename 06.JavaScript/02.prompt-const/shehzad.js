// document.querySelector("h1").style.color = "red";

// agar variable ma kuxh store nhi hoga tw undefined store hoga
let otherName; // undefined

let myName = "Shehzad";

console.log("my name is ", myName);

// changing variable value
myName = "Saylani";

console.log(myName);

myName = "testing";





let userName = prompt("what is your name");
alert("Welcome " + userName);





// Prompt se hum user se input lete hyn
let num1 = prompt("enter first number");
let num2 = prompt("enter second number");

// string ko number ma convert kiya hy
num1 = Number(num1);
num2 = Number(num2);

console.log("num1: ", num1);
console.log("num2: ", num2);

let sum = num1 + num2;
let minus = num1 - num2;

alert("Addition " + sum);
alert("Subtraction " + minus);
alert("Multiplication " + num1 * num2);
alert("Division " + num1 / num2);

// In programming a sentence is a statement
// programming ka fullstop hy semicolon;

/*
multi line comment

ye 
hy 
bara 
comment

*/

// const ko change nhi kar sagty ap
const email = "shehzad@gmail.com";

email = "something"; // error
