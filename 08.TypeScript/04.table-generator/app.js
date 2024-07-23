"use strict";
const form = document.querySelector("#tableForm");
const table = document.querySelector("#table");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event === null || event === void 0 ? void 0 : event.target;
  const input =
    form === null || form === void 0 ? void 0 : form.firstElementChild;
  const tableOf = Number(input.value);
  table.innerHTML = "";
  for (let i = 1; i <= 10; i++) {
    table.innerHTML = `<p>${tableOf} x ${i} = ${tableOf * i}</p>`;
  }
});
