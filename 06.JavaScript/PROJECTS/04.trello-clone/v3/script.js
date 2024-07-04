const main = document.querySelector("#main");
const addCardBtn = document.querySelector("#addCard");

let woElementJoUthaHuaHy = null;

const addTask = (event) => {
  event.preventDefault();

  const currentForm = event.target; // current form element
  const value = currentForm.elements[0].value; // value written in form's input
  const parent = currentForm.parentElement; // parent of form i.e div.column
  const ticket = createTicket(value); // div to be added

  if (!value) return; // null check

  parent.insertBefore(ticket, currentForm); // adding new task before the form

  const h3Value = parent.children[0].innerText;

  if (!Array.isArray(savedTasks[h3Value])) {
    // agar array nhi hy tw khali array set karwa do kyu ky undefined ma .push() nhi ho sagta
    savedTasks[h3Value] = [];
  }

  savedTasks[h3Value].push(value);

  localStorage.setItem("savedTasks", JSON.stringify(savedTasks)); // saving data after adding each task

  currentForm.reset(); // clearing form
};

const myCreateCard = (cardTitle) => {
  // This function will return a div like one below
  /* <div class="column">
           <h3>smit</h3>
  
           <form>
               <input type="text" placeholder="add task" />
           </form>
     </div> */

  const myDiv = document.createElement("div");
  const myH3 = document.createElement("h3");
  const myForm = document.createElement("form");
  const myInput = document.createElement("input");

  const h3Text = document.createTextNode(cardTitle);

  myDiv.setAttribute("class", "column");
  myInput.setAttribute("type", "text");
  myInput.setAttribute("placeholder", "add task");

  myH3.appendChild(h3Text);
  myForm.appendChild(myInput);
  myDiv.appendChild(myH3);
  myDiv.appendChild(myForm);

  myForm.addEventListener("submit", addTask);

  myDiv.addEventListener("dragleave", (event) => event.preventDefault());
  myDiv.addEventListener("dragover", (event) => event.preventDefault());

  myDiv.addEventListener("drop", (event) => {
    const jisElementPerDropKiyaJaRahaHo = event.target;

    if (jisElementPerDropKiyaJaRahaHo.className.includes("column")) {
      // console.log("2");
      jisElementPerDropKiyaJaRahaHo.appendChild(woElementJoUthaHuaHy);
    }

    if (jisElementPerDropKiyaJaRahaHo.className.includes("ticket")) {
      jisElementPerDropKiyaJaRahaHo.parentElement.appendChild(
        woElementJoUthaHuaHy
      );
    }
  });

  return myDiv;
};

const createTicket = (value) => {
  //
  const ticket = document.createElement("p");
  const elementText = document.createTextNode(value);

  ticket.setAttribute("draggable", "true");
  ticket.setAttribute("class", "ticket");
  ticket.appendChild(elementText);

  ticket.addEventListener("mousedown", (event) => {
    woElementJoUthaHuaHy = event.target;
    console.log("1");
  });

  return ticket;
};

let savedTasks = JSON.parse(localStorage.getItem("savedTasks")); // fetching savedTasks obj and converting

if (!savedTasks) {
  savedTasks = {};
}

// Displaying the tasks already saved in localStorage
for (const title in savedTasks) {
  const card = myCreateCard(title);

  const arrayOfTasks = savedTasks[title];

  for (let i = 0; i < arrayOfTasks.length; i++) {
    const p = createTicket(arrayOfTasks[i]); // we are creating paras with each tasks

    card.insertBefore(p, card.lastElementChild);
  }

  main.insertBefore(card, addCardBtn);
}

addCardBtn.addEventListener("click", () => {
  const cardTitle = prompt("enter card name?");

  if (!cardTitle) return;

  const yourDiv = myCreateCard(cardTitle);

  main.insertBefore(yourDiv, addCardBtn);
});

// data structure of localStorage
//  {
//    "work todo": ["task 1", "task 2"],
//    progress: ["task 3"],
//  };
