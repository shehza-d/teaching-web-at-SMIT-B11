let myArr = [[2, 3, 4, 4, 4, 4], [5, 5], [5], [9, 8, 7]]; // 2D array

console.log(myArr[0][0]);
console.log(myArr[0][1]);
console.log(myArr[0][2]);
console.log(myArr[1][0]);
console.log(myArr[1][1]);
console.log(myArr[1][2]);
console.log(myArr[2][0]);
console.log(myArr[2][1]);
console.log(myArr[2][2]);

let arr = [1, 2, 3, 4, 5, 3, 4, 5];

let a = 0;

for (let i = 0; i < 3; i++) {
  console.log("start");

  for (let j = 0; j < 3; j++) {
    console.log(`i is ${i}  j is ${j}`);
    console.log(myArr[i][j]);
    a++;
  }
  console.log("end");
}

// i = 0 0 0 1 1 1 2 2 2
// j = 0 1 2 0 1 2 0 1 2

console.log(a);

{
  let password = "abc123";
  // checking
} // garbage collection

console.log(password);

// binary or machine code = 01010101 0001001
// Assembly = alt.lang.asm = comp.lang.asm370 = comp.lang.asm.x86
// C = printf("Hello World")
// JavaScript
