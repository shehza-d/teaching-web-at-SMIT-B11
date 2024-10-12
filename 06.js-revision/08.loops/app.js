for (let i = 1; i < 10; i++) {
  console.log("shehzad ", i);
}

//

for (let i = 10; i <= 100; i += 10) {
  console.log("shehzad ", i);
}

for (initialization; condition; updating) {
  console.count("shehzad");
}

for (1; 2; 4) {
  3;
}

let i = 0;
for (console.log("ak bar"); i < 100; console.log("testing")) {
  console.count("shehzad");
  i++;
}

// Break = khatam kr deta hy loop ko
for (let i = 0; i < 10; i++) {
  console.log("before");
  break;
  console.log("after");
}

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}

// continue = skips 1 iteration
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}

for (let i = 10; i > 0; i--) {
  console.log(i);
}

for (let i = 0; i < 10; i += 3) {
  console.log(i);
}

for (let i = 0; i < 4; i++) {
  //i 0,1,2

  for (let j = 0; j < 3; j++) {
    //j 0,1,2, 0,1,2 0,1,2
    console.log(`i=${i} j=${j}`);
  }
}

const fruits = ["apple", "banana", "mango", "grape", "peach"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

const arr = [
  [5, 4], // 0
  [9, 2, 10, 9, 2], // 1
  [7, 15, 7], // 2
  [7], // 2
];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    console.log(arr[i][j]);
  }
}

console.log(arr[1][0]);
console.log(Array.isArray(arr[0]));

console.log(arr[0][0]);
console.log(arr[0][1]);
console.log(arr[0][2]);

console.log(arr[1][0]);
console.log(arr[1][1]);
console.log(arr[1][2]);

console.log(arr[2][0]);
console.log(arr[2][1]);
console.log(arr[2][2]);
