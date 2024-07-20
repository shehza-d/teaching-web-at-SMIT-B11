// https://www.geeksforgeeks.org/implicit-and-explicit-type-casting/
// let myName:string= 'shehzad'

console.log("testing");

type Student = {
  name: string;
  age: number;
  hobbies: number[];
  test?: boolean;
};

const shehzad: Student = {
  name: "shehzad",
  age: 22,
  hobbies: [3, 4, 5],
  test: true,
  //   tfdfdf:'dfdfdf'
};

const ibrahim: Student = {
  name: "ibrahim",
  age: 40,
  hobbies: [],
};

// union
console.log(shehzad.test); // test?: boolean | undefined

// myObj.name = "ibrahim";
// myObj.name = 32

// for (const key in myObj) {
//   console.log(key);
//   if (key === "age") break;
// }

let arr = [1, "1"];

// https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html

// Generics

// 1
// function identity(test: number):number {
//   console.log(test);
//   return 54;
// }

// 2
function identity<Type>(arg: Type): Type {
  return arg;
}

let test = identity(78);
let test1 = identity("shehzad");
let test2 = identity(null);


// https://transform.tools/json-to-typescript