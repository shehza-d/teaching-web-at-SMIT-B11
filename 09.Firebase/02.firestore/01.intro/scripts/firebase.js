// firebase ka sara kam idher hoga

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";

import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
  getDocs,
  doc,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";

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

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { db, collection, addDoc, serverTimestamp, getDocs, doc, onSnapshot };
