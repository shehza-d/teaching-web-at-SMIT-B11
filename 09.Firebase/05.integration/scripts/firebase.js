// firebase ka sara kam idher hoga

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";

import {
  getAuth,
  createUserWithEmailAndPassword, // signup
  signInWithEmailAndPassword, // login
  signOut,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
  getDocs,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";

import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-storage.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4N6Bpf6uEnUxCRI9-0ToijzwYLRTEVlw",
  authDomain: "smit-shehzad.firebaseapp.com",
  projectId: "smit-shehzad",
  storageBucket: "smit-shehzad.appspot.com",
  messagingSenderId: "433726123955",
  appId: "1:433726123955:web:410a125ff7a0705e4de5c6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// def of authentication
// the process or action of verifying the identity of a user or process.

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// Get a reference to the storage service, which is used to create references in your storage bucket
const storage = getStorage(app);

export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  db,
  collection,
  addDoc,
  serverTimestamp,
  getDocs,
  onSnapshot,
  storage,
  ref,
  uploadBytes,
  getDownloadURL,
};
