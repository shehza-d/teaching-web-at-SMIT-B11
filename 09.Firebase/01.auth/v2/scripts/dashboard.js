import { auth, signOut, onAuthStateChanged } from "./firebase.js";

const userEmailDiv = document.querySelector("#user-email");

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in
    console.log("🚀 ~ dashboard ~ user:", user);

    userEmailDiv.innerText = user.email;
  } else {
    window.location = "./login.html";
    console.log("User is signed out");
  }
});

//
//

const btn = document.querySelector("#logout-button");

btn.addEventListener("click", async () => {
  try {
    await signOut(auth);
    // signout per redirect kyu ho raha hy?
    console.log("Sign-out successful");
  } catch (error) {
    console.log("🚀 ~ btn.addEventListener ~ error:", error);
  }
});
