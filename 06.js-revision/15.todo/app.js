// Open Source
// Good first issue

// const timeOutKiID = setTimeout( () => {
//   console.log("testing");
// }, 6000);

// clearTimeout(timeOutKiID)

// const id = setInterval(() => {
//   console.count("testing");
// }, 1000);

// clearInterval(id);

// localStorage.setItem("mode", "dark");

// console.log(localStorage.getItem("mode"))

const form = document.querySelector("#todo-form");
const list = document.querySelector("#todo-list");

// localStorage.setItem("mylist", JSON.stringify(todoList));

const todoList = JSON.parse(localStorage.getItem("mylist"))

console.log('todoList ',todoList);

// for (let i = 0; i < todoList.length; i++) {
//   const value = todoList[i];
//   list.innerHTML += `<li>${value}</li>`;
// }
// todoList.map(function (value, index) {
//   console.log(index, " testing ", value);
// });

todoList.map((value) => (list.innerHTML += `<li>${value}</li>`));

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const todo = event.target.children[0].value;

  list.innerHTML += `<li>${todo}</li>`;

  event.target.reset();
});
