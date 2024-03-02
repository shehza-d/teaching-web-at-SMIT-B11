let myButtonElement = document.querySelector("#myButton");
let myInput = document.querySelector("#myInput");

myButtonElement.addEventListener("click", () => {
  console.log("Input ki value: ", myInput.value);

  if (myInput.value < 25) {
    console.log("garmi");
  } else {
    console.log("sardi");
  }

  // 	console.log("button per click hua hy");
  // 	console.log("button per click hua hy");
});
