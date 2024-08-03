// firebase ka sara kam idher hoga

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";

import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-storage.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC66x90WNAC4BDqz4xpYrICXCa-d8T48bw",
  authDomain: "smit-firebase-2.firebaseapp.com",
  projectId: "smit-firebase-2",
  storageBucket: "smit-firebase-2.appspot.com",
  messagingSenderId: "702098094497",
  appId: "1:702098094497:web:5641fed3038bdc18e4f3e0",
};

const app = initializeApp(firebaseConfig);

// Get a reference to the storage service, which is used to create references in your storage bucket
const storage = getStorage(app);

// Create a storage reference from our storage service

export { storage, ref, uploadBytes, getDownloadURL };
