import { storage, ref, uploadBytes, getDownloadURL } from "./firebase.js";

const form = document.querySelector("#product-form");
const productName = document.querySelector("#product-name");
const productPrice = document.querySelector("#product-price");
const productDetail = document.querySelector("#product-detail");
const productImg = document.querySelector("#product-img");
const allProducts = document.querySelector(".all-products");

// const myCollectionReference = collection(db, "products");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const myFile = productImg.files[0];

  const storageRef = ref(storage, myFile.name);

  const imgSnapShot = await uploadBytes(storageRef, myFile);
  console.log("Uploaded  file! ", imgSnapShot);

  const url = await getDownloadURL(storageRef);
  console.log("🚀 ~ form.addEventListener ~ url:", url);

  // obj ko db ma document
  // const myProduct = {
  //   productName: productName.value,
  //   productPrice: Number(productPrice.value),
  //   productImg: null,
  //   productDetail: productDetail.value,
  //   createdAt: serverTimestamp(),
  // };

  // try {
  //   const result = await addDoc(myCollectionReference, myProduct);

  //   console.log("document add hogya hy ", result);
  // } catch (e) {
  //   console.log("Error adding document: ", e);
  // }
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
// onSnapshot(myCollectionReference, (doc) => {
//   console.log("🚀 ~ onSnapshot ~ doc:", doc)

//   allProducts.innerHTML = ""

//   doc.docs.forEach((eachDoc, index) => {
//     const product = eachDoc.data();

//     allProducts.innerHTML += `<div>
//         ${index}
//         <h3>${product.productName}</h3>
//         <span>${product.createdAt?.toDate()}</span>
//         <p class="price">Rs.${product.productPrice}</p>
//         <p>${product.productDetail}</p>
//       </div>`;
//   });
// });
