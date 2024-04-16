// nested if else
// event listener
// nested for

// if (false) {
//   console.log("r1");
//   if (false) {
//     console.log("running");
//   } else {
//     console.log("false");
//   }
// }

const myBtn = document.querySelector("#myBtn");

myBtn.addEventListener("click", (event) => {
  console.log("Code running");
  console.log("x=", event.x, " y= ", event.y);
  myBtn.disabled = true;
});

myBtn.addEventListener("fullscreenchange", (event) => {
  console.log("full screen hua hy ", event);
});

// document.querySelector("body").className = "dark";

const themeBtn = document.querySelector("#themeMode");
const body = document.querySelector("body");

let isDarkMode = true;

themeBtn.addEventListener("click", () => {
  if (isDarkMode === true) {
    body.className = "dark";
    themeBtn.innerText = "light mode";
  } else {
    body.className = "light";
    themeBtn.innerText = "dark mode";
  }
  isDarkMode = !isDarkMode;
});

// r ahtavrfilp
