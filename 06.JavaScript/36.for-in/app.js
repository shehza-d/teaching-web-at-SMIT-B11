const myObj = {
  name: "Shehzad",
  age: 22,
  smit: "saylani",
  hobbies: ["coding", "dsa", "eating"],
  myBoolean: false,
};

const myKeyy = "hobbies";

console.log(myObj[myKeyy]); // array will be printed

//

for (const myKeyy in myObj) {
  console.log("each values of obj :>> ", myObj[myKeyy]);
}
