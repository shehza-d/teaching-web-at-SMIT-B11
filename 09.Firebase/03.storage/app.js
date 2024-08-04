import { storage, ref, uploadBytes, getDownloadURL } from "./firebase.js";

const form = document.querySelector("#product-form");
const productImg = document.querySelector("#product-img");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const myFile = productImg.files[0];

  const storageRef = ref(storage, myFile.name);

  // we are uploading the file here to the storage bucket
  const imgSnapShot = await uploadBytes(storageRef, myFile);
  console.log("Uploaded  file! ", imgSnapShot);

  // get the download url of the file
  const fileUrl = await getDownloadURL(storageRef);
  console.log("fileUrl :>> ", fileUrl);
});
