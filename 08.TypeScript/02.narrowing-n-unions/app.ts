// https://github.com/panaverse/learn-typescript/

const arr: number[] = [6, 3, 6]; // 1

const arr: (string | number)[] = [6, "4", 3, 6]; // 2

arr.push("sss");

//

// 3
if (true) {
  let z = 4; // z: number

  console.log(z.toFixed());
} else {
  let z = "testing"; // z: string

  console.log(z.toUpperCase());
}
console.log("let: " + z); // Error: Cannot find name 'z'.ts(2304)

//

// 4 Union types
let test: number | string;

test = 45545;
test = "shehzad";
test = false; // error

//

//5  Object literal

const myObj = {
  name: "shehzad",
  age: 22,
  hobbies: [4, 5, 4, 5],
  test: true,
};

myObj.name = "Something"; // OK
myObj.name = 22; // Error: 'number' is not assignable to type 'string'.ts(2322)

console.log(myObj.hobbies[0].toUpperCase()); // error because hobbies ki index 0 per number hy

//

//

// 6 narrowing
let myAge: string | number;

myAge = "shehzad";

console.log(myAge.toUpperCase());

myAge = 56; // no error here because line 41 per myAge ki type string bhi hy aur number bhi (union type)

console.log(myAge.toUpperCase()); // number ki upperCase nahi hoti

myAge = false; // error

//

//

//

// 7
let newAge = Math.random() > 0.6 ? "Khan" : 60; // newAge: string | number

newAge.toLowerCase(); //Error: Transpiler cannot narrow

if (newAge === "Khan") {
  // Narrowed to string
  newAge.toUpperCase();
}

if (typeof newAge === "string") {
  newAge.toUpperCase();
} else {
  newAge; // idher newAge ki type number hy
}

//

//

// 8
let position: 1 | 2 | 3;

position = -1; // error : Type '-1' is not assignable to type '1 | 2 | 3'.ts(2322)
// position variable can only be 1, 2 or 3

// 9 type alias or custom type or type variable
type ProgressType = "waiting" | "done" | "pass";

let progress: ProgressType;

progress = "pass";
progress = "cheating"; // error: Type "cheating" is not assignable to type 'ProgressType'.ts(2322)

progress; // progress: ProgressType
