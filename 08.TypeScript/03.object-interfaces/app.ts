// https://transform.tools/json-to-typescript
// https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html
// https://www.geeksforgeeks.org/implicit-and-explicit-type-casting/

// type-assertions
type Student = {
  name: string;
  age: number;
  hobbies: number[];
  test?: boolean; // optional ?
};

// object type / interfaces
const student1: Student = {
  name: "shehzad",
  age: 22,
  hobbies: [3, 4, 5],
  test: true,
  tfdfdf: "dfdfdf", // error because Student type me tfdfdf nahi hy
};

// on same blueprint we can create multiple objects
const student2: Student = {
  name: "ibrahim", // agar name missing hoga ya nam ki spelling wrong hogi to error aye ga
  age: 40,
  hobbies: [],
};

console.log(student1.test); // test?: boolean | undefined

student2.name = "saad";
student2.name = 32; // error

let arr = [1, "1"]; //  arr: (string | number)[]

// Generics

// 1
// normal function types
function myFun1(test: number): number {
  console.log(test); // test: number

  return "text"; // error
  // because function ki return type number hy aur hum string return kar rahe hain

  return 54; // OK
}
myFun1(45);
myFun1("some"); // error

//

// 2
// generic function types
function identity<Type>(arg: Type): Type {
  return arg;
}

// isma jo hum pass karyn gye return type bhi wohi hogyi
let test = identity(78); // Type: function identity<78>(arg: 78): 78
let test1 = identity("shehzad"); // test1: string
let test2 = identity(null);
