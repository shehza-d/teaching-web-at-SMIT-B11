let myArr = ["Shehzad", "Chandio", "Abrar", "Bilal"];
let myArr2 = ["Stringg", true, 56, undefined, 5, [3, 4]];

myArr.sort();
myArr.reverse();

myArr.shift();
myArr.unshift("Talha");

myArr.push(5);
myArr.pop();
myArr.pop();
myArr.pop();

let myStr = "    My name is shehzad Iqbal this can     ";

let newStr = myStr.includes("s");
let newStr = myStr.split(" ");
let a = newStr.join(" ");
console.log("🚀 ~ myStr:", myStr.indexOf("s", myStr.indexOf("s") + 1));

console.log(myStr.trim());

console.log(myArr.join("/"));
