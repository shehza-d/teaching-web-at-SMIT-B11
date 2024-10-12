// https://github.com/panaverse/learn-typescript/tree/master/step00a_json_objects
// Object

console.log("testing");

const myObj = {
  age: 23,
  name: "mohsin",
  favFood: "baryani",
  drink: "lassi",
  hobbies: ["swiming", "fishing", "CP"],
  teacher: {
    age: 25,
    name: { firstName: "shehzad", lastName: "iqbal" },
    // object in object
  },
  isPresent: true,
  sayHello: function () {
    console.log("hello!!!");
  },
};
let keyyy = "name";
console.log(myObj[keyyy]);

// Optional chaining or nullish operator
console.log(undefined.kuchaur); // error: Cannot read property 'kuchaur' of undefined

console.log(myObj?.teacher?.name.firstName);

// why is ?. not required before firstName

myObj.newKey = "testing";

console.log("tt");
myObj.sayHello();

const console1 = {
  log1: function (...a) {
    console.log(...a);
  },
};

console1.log1(1, "2", 3);

let test = "yekeyhogyi";

const student1 = {
  [test]: "shehzad",
  age: 23,
};

console.log(student1);

for (const test in myObj) {
  console.log(myObj[test]);
}

// same key nhi honi chiye
const mobile = {
  ram: 8,
  model: "galaxy",
  model: "test",
  0: "shehzad",
  1: "waseem",
  1: "khan", // not recommended
};

console.log(mobile[1]);

// let a = ;
console.log(test);
