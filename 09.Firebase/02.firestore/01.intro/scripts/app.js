import {
  db,
  collection,
  addDoc,
  serverTimestamp,
  getDocs, doc, onSnapshot
} from "./firebase.js";

const form = document.querySelector("#product-form");
const productName = document.querySelector("#product-name");
const productPrice = document.querySelector("#product-price");
const productDetail = document.querySelector("#product-detail");


const myCollectionReference = collection(db, "products")

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  // obj ko db ma document
  const myProduct = {
    productName: productName.value,
    productPrice: Number(productPrice.value),
    productImg: null,
    productDetail: productDetail.value,
    createdAt: serverTimestamp(),
  };

  try {
    await addDoc(myCollectionReference, myProduct);
  } catch (e) {
    console.log("Error adding document: ", e);
  }
});

// 

const allProducts = document.querySelector(".allProducts")

// 1


// const querySnapshot = await getDocs(myCollectionReference);

onSnapshot(doc(db, "products"), (doc) => {
// querySnapshot.forEach((doc) => {
  const product = doc.data()
    allProducts.innerHTML += `<div>
        <!-- <img src="" alt=""> -->
        <h3>${product.productName}</h3>
        <p>${product.productPrice}</p>
        <p>${product.productDetail}</p>
      </div>`
    // console.log(doc.data());
//   console.log(`${doc.id} => ${doc.data()}`);
});
