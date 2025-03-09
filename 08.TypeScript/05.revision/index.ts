// coding ts ki file ma hogyi
// phir us ts ki file ko js ma convert ya compile kare gye
// run saruf js hogyi ts nhi

console.log("Hello World 2");

// let age: number;

// age = "Ahmed";

// age = 77;

// let username;

// username = 56

// username = "Ali";

// console.log(username);

let g: number = false;
g = true;
g = 56;

// I suggest use let instead of var everywhere,
// becuase let has blocked scope

let z;

if (true) {
  z = 45;
  //use z

  console.log("let: " + z.toLowerCase());
} else {
  let z = "string";
  //use z

  console.log("let: " + z.toLowerCase());
}
// Error: z is not defined in this scope

let x = "shehzad";
let y = 45;

x.replace("s", "S");
y.replace("s", "S");

y.toFixed(2);
x.toFixed(2);

let a: any = 45;

a.toFixed(2);
a.replace("s", "S");
a.something();

a = "shehzad";
a = true;

let b: string | number = "56";

// b = "shehzad";
// b = 45;
// b = true;

let myname: string | null;

myname = null;
console.log(myname);

myname = "zia";
console.log(myname);

let myAge: string | number;

myAge = 16; // narrowing

console.log(myAge);

//

let newAge = Math.random() > 0.6 ? "Khan" : 60;

if (typeof newAge === "string") {
  newAge.toLowerCase();
}

typeof newAge === "string"
  ? newAge.toUpperCase() // Ok: string
  : newAge.toFixed(); // Ok: number

let trafficLight: "red" | "yellow" | "green";

trafficLight = "red";
trafficLight = "shehzad";
trafficLight = "green";

if (trafficLight === "red") {
  console.log("stop");
}

let age: number | "died" | "unknown";

age = 90; //OK
age = "died"; //OK
age = "unknown"; //OK
age = "living"; //Error

//

let yourName = Math.random() > 0.6 ? "Hira Khan" : undefined;

if (yourName) {
  yourName.toUpperCase(); // Ok: string
}

yourName.toUpperCase(); // error
yourName?.toUpperCase();

type TrafficLightsType = "red" | "yellow" | "green";

let d: TrafficLightsType = "red";
let e: TrafficLightsType = "Yellow";

//

let aa: string[];

aa = ["apple", 6, "mango"];

let fruits = ["apple", "banana", "mango"];

fruits[0] = "orange";

if (fruits[1] === "shehzad") {
  console.log("juice banao");
}

let ab: (boolean | number)[];

ab = [3, 4, "test", true];

let ac: number[][][];

ac = [
  [3, 4],
  [5, 6],
];
