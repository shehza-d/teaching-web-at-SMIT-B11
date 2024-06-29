// 1 = storing mode preference in local storage

const userMode = localStorage.getItem("mode");

console.log("🚀 ~ userMode:", userMode);

if (!userMode) {
  const mode = prompt("enter your mode preference?");
  localStorage.setItem("mode", mode);
  localStorage.setItem("name", "shehzad");
}

// removing something from localStorage
localStorage.removeItem("name");

// 2;
const obj = {
  name: "shehzad",
  age: 222,
};

localStorage.setItem("myObj", JSON.stringify(obj));
console.log(localStorage.getItem("myObj")); // string
console.log(JSON.parse(localStorage.getItem("myObj"))); // real object or array
