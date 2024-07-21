let myName: string;

myName = "shehzad";
myName = 22; // error

console.log(myName);

//

let a = Number(prompt("value 1"));
let b = Number(prompt("value 2"));

let result = a + b; // result: number
console.log(result);

//

let userName = prompt("what is your name?");

if (userName === null) {
  // avoiding 'userName' is possibly 'null' error
  userName = "shehzad";
}

console.log("userName ", userName?.toUpperCase());
