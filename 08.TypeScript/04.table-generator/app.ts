const form = document.querySelector("#tableForm")!;
const table = document.querySelector("#table")!;

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const form = event?.target as HTMLFormElement;
  const input = form?.firstElementChild as HTMLInputElement;

  const tableOf = Number(input.value);

  table.innerHTML = "";

  for (let i = 1; i <= 10; i++) {
    table.innerHTML = `<p>${tableOf} x ${i} = ${tableOf * i}</p>`;
  }
});
