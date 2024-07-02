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
  console.log("each values of obj :>> ", myKeyy);
}

const myArr = [2, 7, 2, 6, 5, 4];

for (const value of myArr) {
  console.log("🚀 ~ iterator:", value);
}

// forEach never returns any value
const forEachReturn = myArr.forEach((item) => {
  console.log("item:", item);
  return "Shehzad";
});

console.log("🚀 ~ forEachReturn ~ forEachReturn:", forEachReturn);

const mapKaFun = (item) => {
  console.log("item:", item);
  return item * 2;
};

const mapReturn = myArr.map(mapKaFun);

const square = myArr.map((item) => item * item);

console.log("🚀 ~ mapReturn:", mapReturn);

const arr2 = [5, 1000, 1, -5, -10, 23];

//

const sortFunction = (a, b) => {
  // console.log("🚀 ~ sortFunction ~ a:", a);
  // console.log("🚀 ~ sortFunction ~ b:", b);

  const tst = a - b;

  console.log("🚀 ~ sortFunction ~ tst:", tst);

  return a - b;
};

// sorting numbers
arr2.sort((a, b) => b - a); // ascending
arr2.sort((a, b) => a - b); // descending
arr2.sort(sortFunction);

console.log("arr2 :>> ", arr2);
