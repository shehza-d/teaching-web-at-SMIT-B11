import { auth, signInWithEmailAndPassword } from "./firebase.js";

//

const form = document.querySelector("#login-form");
const msgDiv = document.querySelector("#msg");

//

form.addEventListener("submit", async (event) => {
  try {
    event.preventDefault();

    msgDiv.innerText = "loading...";

    const email = event.target.children[0].value;
    const password = event.target.children[1].value;

    // firebase se login karne ka function
    const result = await signInWithEmailAndPassword(auth, email, password);

    // login hoty hi dashboard ka page show karaya hy idher
    window.location = "./dashboard.html";

    console.log("result ", result);
  } catch (error) {
    msgDiv.innerText = error.message || "koi error hy";

    console.log("my error msg", error.message);
  }
});
