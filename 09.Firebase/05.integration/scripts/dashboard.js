import {
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
} from "./firebase.js";
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

const form = document.querySelector("#product-form");
const productName = document.querySelector("#product-name");
const productPrice = document.querySelector("#product-price");
const productDetail = document.querySelector("#product-detail");
const allProducts = document.querySelector(".all-products");
const productImg = document.querySelector("#product-img"); // file input

const myCollectionReference = collection(db, "products");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const myFile = productImg.files[0];

  const storageRef = ref(storage, `products/${myFile.name}`);

  // we are uploading the file here to the storage bucket
  const imgSnapShot = await uploadBytes(storageRef, myFile);
  // console.log("Uploaded  file! ", imgSnapShot);

  // get the download url of the file
  const fileUrl = await getDownloadURL(storageRef);
  // console.log("fileUrl :>> ", fileUrl);

  // obj ko db ma document
  const myProduct = {
    productName: productName.value,
    productPrice: Number(productPrice.value),
    productImg: fileUrl,
    productDetail: productDetail.value,
    createdAt: serverTimestamp(),
  };

  try {
    await addDoc(myCollectionReference, myProduct);

    console.log("document add hogya hy");
    e.target.reset();

    getAllProducts();
  } catch (e) {
    console.log("Error adding document: ", e);
  }
});

//

// 1
const getAllProducts = async () => {
  const querySnapshot = await getDocs(myCollectionReference);

  querySnapshot.forEach((doc) => {
    const product = doc.data();

    // date converted to "1 day ago | 20 min ago" (optional)
    const date = product.createdAt
      ? dateFns.formatDistance(product.createdAt?.toDate(), new Date(), {
          addSuffix: true, // true means ago add karna hy
        })
      : "";

    allProducts.innerHTML += `<div>
        <div class='myImgdiv'> <img src=${product.productImg} alt=""> </div>
        <h3>${product.productName?.toUpperCase()}</h3>
        <span>${date}</span>
        <p class="price">Rs.${product.productPrice}</p>
        <p>${product.productDetail}</p>
      </div>`;
  });
};
getAllProducts();
// 2 (working)
// onSnapshot(myCollectionReference, (doc) => {
//   allProducts.innerHTML = "";

//   doc.docs.forEach((eachDoc, index) => {
//     const product = eachDoc.data();

//     allProducts.innerHTML += `<div>
//         ${index + 1}
//         <h3>${product.productName}</h3>
//         <span>${product.createdAt?.toDate()}</span>
//         <p class="price">Rs.${product.productPrice}</p>
//         <p>${product.productDetail}</p>
//       </div>`;
//   });
// });

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
