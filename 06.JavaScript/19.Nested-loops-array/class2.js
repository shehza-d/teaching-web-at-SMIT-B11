let fruits = ["apple", "banana", "peach", "mango", "orange"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// console.log(myArr[0][0]);
// console.log(myArr[0][1]);
// console.log(myArr[0][2]);
// console.log(myArr[1][0]);
// console.log(myArr[1][1]);
// console.log(myArr[1][2]);
// console.log(myArr[2][0]);
// console.log(myArr[2][1]);
// console.log(myArr[2][2]);

for (let i = 0; i < 3; i++) {
  console.log("start");

  for (let j = 0; j < 3; j++) {
    console.log(`i= ${i}  j= ${j}`);
    console.log(myArr[i][j]);
  }

  console.log("End");
}

// Blocking code
// for(let k = 0 ; k < 1000000000; k++){}

// console.log("code running");

//////////////////////// matrix addition

let matrix1 = [
  [1, 3, 4],
  [0, 5, 5],
  [9, 6, 1],
]; // 2D array

let matrix2 = [
  [1, 5, 4],
  [0, 7, 5],
  [1, 2, 1],
];

console.log(matrix1[0][0] + matrix2[0][0]);
console.log(matrix1[0][1] + matrix2[0][1]);
console.log(matrix1[0][2] + matrix2[0][2]);

console.log(matrix1[1][0] + matrix2[1][0]);
console.log(matrix1[1][1] + matrix2[1][1]);
console.log(matrix1[1][2] + matrix2[1][2]);

console.log(matrix1[2][0] + matrix2[2][0]);
console.log(matrix1[2][1] + matrix2[2][1]);
console.log(matrix1[2][2] + matrix2[2][2]);

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(matrix1[i][j] + matrix2[i][j]);
  }
}

// let result = [
//   [2, 8, 8],
//   [0, 12, 10],
//   [10, 8, 2],
// ];

//  document.querySelector(compChoice).classList.add("anim");
