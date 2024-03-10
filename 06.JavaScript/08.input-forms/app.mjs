let myInput = document.querySelector("#myInput");
let screenParagraph = document.querySelector("#myPara");
let form = document.querySelector("#weatherForm");

// let text = "<h1>hello</h1>"; //prompt("enter you name");

// screenParagraph.innerHTML = text;
// screenParagraph.innerText = text;

// ye saruf tab chalta hy jab page load hota hy
// console.log("Input ki value: ", myInput.value);

form.addEventListener("submit", (event) => {
  event.preventDefault(); // page refresh nhi hota
  //

  let temp = Number(myInput.value); // temperature

  let condition = temp > 25;

  console.log("🚀 ~ condition:", condition);

  if (condition) {
    screenParagraph.innerText = "Garmi";

    console.log("garmi");
  } else {
    screenParagraph.innerText = "Sardi";

    console.log("sardi");
  }

  // 	console.log("button per click hua hy");
  // 	console.log("button per click hua hy");
});
