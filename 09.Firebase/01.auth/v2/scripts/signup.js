import { auth, createUserWithEmailAndPassword } from "./firebase.js";

//

const form = document.querySelector("#signup-form");

//

form.addEventListener("submit", async (event) => {
  try {
    event.preventDefault();

    const email = event.target.children[0].value;
    const password = event.target.children[1].value;

    // firebase se signup karne ka function
    const result = await createUserWithEmailAndPassword(auth, email, password);

    console.log(result);
  } catch (error) {
    console.log("my error msg", error.message);
  }
});
