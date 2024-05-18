// Object literal

// chartjs.org
// let student = ["web", "chandio", 25, "WMA-29020"];// sequential data

// object is non-sequential data
let myName = "abrar";
let keyy = "specialStudent";

let student = {
  [keyy]: "raheem",
  key: "value",
  name: myName, // ye myName var ki value ko idher la kr save kare ga
  age: 25,
  roll: "WMA-29020",
  isAbsent: false,
  hobbies: ["cricket", "football", "web dev"], // array in object
  teacher: {
    age: 25,
    name: { firstName: "shehzad", lastName: "iqbal" },
    // object in object
  },
  test: {}, // this is empty obj
};

console.log(student);
// let teacher = student.teacher

console.log(undefined.age); // undefined ma . karky kuxh nikalo gye tw error aaye ga
// chain statement
console.log(student?.teacher?.name?.firstName); // error nhi aaye ga

// JSON
// javascript object notation
// https://github.com/panaverse/learn-typescript/tree/master/step00a_json_objects

let mobile = {
  ram: 8,
  model: "test",
  company: "samsung",
  company: "iPhone", // samsung will be overridden
  isGaming: false,
  nested: { name: "ubaid" },
  0: "shehzad",
  1: "waseem",
  1: "waseem", // not recommended
};

let a = "company";

console.log(mobile[0]);
console.log(mobile[1]); // looks like array because array is a construct
console.log(mobile.company);
console.log(mobile[a]);
