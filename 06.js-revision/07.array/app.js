// array is for looping
// object is mostly not for looping

const fruits = ["apple", "orange", "mango", "grapes", "banana"];

// console.log(fruits.length);// length is a property
// console.log(fruits.sort());// sort is a method
// console.log(fruits.at(-1));
// console.log(fruits[fruits.length-1]);

// const arr ={
//     length:5,
//     sort:function(){
//         // sort ki logic
//     }
// }
// console.log(arr.sort());

// console.log(fruits.join());
// fruits.push("nehal")
// fruits.pop()
// fruits.pop()

const a = fruits.toSorted(); // this won't change the original array

// console.log(a);

// shift unshift,splice,slice

// don't use shift and unshift
// fruits.shift()
// fruits.shift()

// fruits.unshift("shehzad")

const b = fruits.splice(2, 1, "shehzad");

console.log(b);
console.log(fruits);
