// https://github.com/panaverse/learn-typescript/

// let arr: number[] = [6, 3, 6];

let arr: (string | number)[] = [6, "4", 3, 6];

// arr = [45 ,""]

// arr.push("sss");

if (true) {
  let z = 4;
  //use z

  console.log(z.toFixed());
} else {
  let z = "string";
  //use z
  console.log(z.toUpperCase());
}
// console.log("let: " + z); // Error: z is not defined in this scope

// let test: number | string;

// test = 45545;
// test = "shehzad";
// test = false

// Object littrel

const myObj = {
  name: "shehzad",
  age: 22,
  hobbies: [4, 5, 4, 5],
  test: true,
};

console.log(myObj.hobbies[2].toFixed(5));

// narrowing
// let myAge: string | number;

// myAge = "shehzad";

// console.log(myAge.toUpperCase());

// myAge = 56;

// console.log(myAge.toUpperCase());

// myAge = false;

let newAge = Math.random() > 0.6 ? "Khan" : 60;

// newAge.toLowerCase();//Error: Transpiler cannot narrow

// if (newAge === "Khan") {
//     newAge.toUpperCase();
// }

// if (typeof newAge === "string") {
//   newAge.toUpperCase();
// } else {
//   newAge;
// }

let position: 1 | 2 | 3;

// position = -1;

type ProgressType = "waiting" | "done" | "pass";

let progress: ProgressType;

progress = "pass";

progress;
