// const fruits = ["apple", "banana", "orange", "grapes"];

// let isFound = "nhi mila";
// for (let i = 0; i < fruits.length; i++) {
//   if (fruits[i] === "apple") {
//     isFound = i;
//   }
// }
// console.log(fruits[isFound]);

const matrix1 = [
  [3, 2, 5],
  [5, 4, 6],
  [1, 0, 90],
];
const matrix2 = [
  [7, 2, 1],
  [5, 9, 2],
  [1, 0, 19],
];

const result = [];

for (let i = 0; i < 3; i++) {
  result[i] = [];

  for (let j = 0; j < 3; j++) {
    const sum = matrix1[i][j] + matrix2[i][j];
    // console.log(result[i]);
    result[i].push(sum);
  }
}
// console.log("result ", result);

// ye chiye
// result = [
//   [10, 4, 5],
//   [10, 13, 8],
//   [2, 0, 109],
// ];

const arr = [3, 4, 53, 8, 9, 1, 0];

// while (arr.length) {
//   console.log("length ", arr.length);
//   console.log(arr.pop());
// }

let test = true;

// do {
//   const question = prompt("do you agree? yes or no").toLowerCase();

//   if (question === "yes") {
//     console.log("permission given");
//     test = false;
//   } else if (question === "no") {
//     console.log("rejected");
//     test = false;
//   } else {
//     console.log("please enter yes or no");
//   }
// } while (test);
