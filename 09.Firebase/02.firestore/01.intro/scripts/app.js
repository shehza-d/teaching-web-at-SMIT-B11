import {
  db,
  collection,
  addDoc,
  serverTimestamp,
  getDocs,
  doc,
  onSnapshot,
} from "./firebase.js";

const form = document.querySelector("#product-form");
const productName = document.querySelector("#product-name");
const productPrice = document.querySelector("#product-price");
const productDetail = document.querySelector("#product-detail");
const allProducts = document.querySelector(".all-products");

const myCollectionReference = collection(db, "products");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  // obj ko db ma document
  const myProduct = {
    productName: productName.value,
    productPrice: Number(productPrice.value),
    productImg: url,
    productDetail: productDetail.value,
    createdAt: serverTimestamp(),
  };

  try {
    const result = await addDoc(myCollectionReference, myProduct);

    console.log("document add hogya hy ", result);
  } catch (e) {
    console.log("Error adding document: ", e);
  }
});

//

// 1
// const querySnapshot = await getDocs(myCollectionReference);

// querySnapshot.forEach((doc) => {
//   const product = doc.data();

//   // console.log("🚀 ~ querySnapshot.forEach ~ product:", product)

//   const date = product.createdAt?.toDate();

//   allProducts.innerHTML += `<div>
//         <!-- <img src="" alt=""> -->
//         <h3>${product.productName?.toUpperCase()}</h3>
//         <span>${
//           date
//             ? dateFns.formatDistance(product.createdAt?.toDate(), new Date(), {
//                 addSuffix: true,
//               })
//             : ""
//         }</span>
//         <p class="price">Rs.${product.productPrice}</p>
//         <p>${product.productDetail}</p>
//       </div>`;
// });

// 2 (working)
onSnapshot(myCollectionReference, (doc) => {
  console.log("🚀 ~ onSnapshot ~ doc:", doc);

  allProducts.innerHTML = "";

  doc.docs.forEach((eachDoc, index) => {
    const product = eachDoc.data();

    allProducts.innerHTML += `<div>
        ${index}
        <h3>${product.productName}</h3>
        <span>${product.createdAt?.toDate()}</span>
        <p class="price">Rs.${product.productPrice}</p>
        <p>${product.productDetail}</p>
      </div>`;
  });
});
