const name = "nehal";
const age = 30;

// template literals
// const message = "Hello my name is " + name + " and i'm " + age + " years old!";
const message = `Hello my name is ${name} and im ${age} years old`;
console.log(message);

const user = "abc";
const password = 3344;

if (user === "abc") {
} else if (password === 334) {
  console.log("login");
} else {
  console.log("invalid username or password");
}
