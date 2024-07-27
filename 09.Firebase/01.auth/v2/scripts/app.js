import { auth, onAuthStateChanged } from "./firebase.js";

// firebase function to check if user is logged-in or not
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in
    window.location = "./pages/dashboard.html";
  } else {
    // User is logout
    window.location = "./pages/login.html";
  }
});
