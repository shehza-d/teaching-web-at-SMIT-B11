const boxes1 = document.querySelector("#input-boxes1");
const boxes2 = document.querySelector("#input-boxes2");
const form = document.querySelector("#matrix-form");
const sumBtn = document.querySelector("#sum");
const resultDiv = document.querySelector("#result");

let matrixLength;
form.addEventListener("submit", (event) => {
  event.preventDefault(); // page refresh nhi hone dega

  matrixLength = Number(event.target.children[0].value);

  boxes1.innerHTML = "";
  boxes2.innerHTML = "";

  for (let i = 0; i < matrixLength; i++) {
    for (let j = 0; j < matrixLength; j++) {
      boxes1.innerHTML += `<input type="number" id="nehal-${i}${j}" style="width: 30px;" value="0">`;
      boxes2.innerHTML += `<input type="number" id="shahab-${i}${j}" style="width: 30px;" value="0">`;
    }
    boxes1.innerHTML += "<br>";
    boxes2.innerHTML += "<br>";
  }
});

sumBtn.addEventListener("click", () => {
  if (operation == "add") {
    // addMatrix();
  } else {
    minusMatrix();
  }
});

const addMatrix = () => {
  resultDiv.innerHTML = "";

  for (let i = 0; i < matrixLength; i++) {
    for (let j = 0; j < matrixLength; j++) {
      const valueOfMatrix1 = document.querySelector(`#nehal-${i}${j}`).value;
      const valueOfMatrix2 = document.querySelector(`#shahab-${i}${j}`).value;

      const result = Number(valueOfMatrix1) + Number(valueOfMatrix2);

      resultDiv.innerHTML += `<input disabled type="number" style="width: 30px;" value="${result}">`;
    }
    resultDiv.innerHTML += "<br/>";
  }
};

const minusMatrix = () => {
  resultDiv.innerHTML = "";

  for (let i = 0; i < matrixLength; i++) {
    for (let j = 0; j < matrixLength; j++) {
      const valueOfMatrix1 = document.querySelector(`#nehal-${i}${j}`).value;
      const valueOfMatrix2 = document.querySelector(`#shahab-${i}${j}`).value;

      const result = Number(valueOfMatrix1) - Number(valueOfMatrix2);

      resultDiv.innerHTML += `<input disabled type="number" style="width: 30px;" value="${result}">`;
    }
    resultDiv.innerHTML += "<br/>";
  }
};
