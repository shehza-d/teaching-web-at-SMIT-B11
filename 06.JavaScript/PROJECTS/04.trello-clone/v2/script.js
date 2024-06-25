const columns = document.querySelectorAll(".column");

const createTicket = (value) => {
  //
  const ticket = document.createElement("p");
  const elementText = document.createTextNode(value);

  ticket.setAttribute("draggable", "true");
  ticket.appendChild(elementText);

  return ticket;
};

let savedTasks = JSON.parse(localStorage.getItem("savedTasks")); // fetching savedTasks obj and converting

if (!savedTasks) {
  savedTasks = {};
}

// jo phale se save task hy localStorage ma wo display karwane ko
// for (let i = 0; i < savedTasks.length; i++) {
//   console.log(savedTasks[i]);
//   const p = createTicket(savedTasks[i]);

//   columns[1].insertBefore(p, columns[1].lastElementChild);
// }

const addTask = (event) => {
  event.preventDefault();

  const currentForm = event.target; // current form element
  const value = currentForm.elements[0].value; // value written in form's input
  const parent = currentForm.parentElement; // parent of form i.e div.column
  const ticket = createTicket(value); // div to be added

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

for (let i = 0; i < columns.length; i++) {
  const form = columns[i].lastElementChild; // selecting every column's form because form is last element

  form.addEventListener("submit", addTask);
}

// data structure of localStorage
//  {
//    "work todo": ["task 1", "task 2"],
//    progress: ["task 3"],
//  };
