let card = true;
let fee = true;
let assignment = true;
let time = 9.1;

if (card === true && fee === true) {
  console.log("study");
}

if (card === true) {
  if (fee === true) {
    if (assignment === true) {
      if (time < 9) {
        if (time < 8.5) {
          console.log("Study in class");
        } else {
          console.log("time per aao nhi tw khare ho kr class lo");
        }
      } else {
        console.log("Dafa ho jao ghar");
      }
    } else {
      console.log("Abhi class ma assignment banao");
    }
  } else {
    console.log("Fee pay karo");
  }
} else {
  console.log("card banwao");
}

// early return
if (!card) console.log("card banwao");
if (!fee) console.log("Fee pay karo");
if (!assignment) console.log("Abhi class ma assignment banao");
if (time > 9) console.log("dafa");
if (time > 8.5) console.log("time per aao nhi tw khare ho kr class lo");

console.log("Study in class");

let myArray = ["Shehzad", "Karim", "Abrar", "Chandio"];
let nums = [3, 2, 0, 1, 100, 4, 5, 9, 6, 9];

myArray[12] = "Sufiyan";

console.log("myArray:", myArray[8]);
console.log(nums.reverse());
console.log(nums.join("/"));

let joinedStr = myArray.join(" - "); // join ka method original method ko nhi charta balkay new value return karta hy
myArray.sort(); // original array ko change/sort kar deta hy
nums.sort((a, b) => a - b); // this is a way to sort number

console.log(myArray.includes("Shehzad"));
console.log(myArray.includes("Fatima"));

let returnValue = myArray.indexOf("Chandio");
console.log(" returnValue:", returnValue);

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];

// inclusive mean included
// exclusive mean not included

const citrus = fruits.slice(1, 3); // 1 se 2 tak
// slice original array ko change nhi karta copy bana kr return karta

console.log("🚀 ~ citrus:", citrus);
