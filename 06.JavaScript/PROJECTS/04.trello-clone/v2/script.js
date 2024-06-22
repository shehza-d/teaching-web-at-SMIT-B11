const columns = document.querySelectorAll(".column");

const createTicket = (value) => {
  //
  const ticket = document.createElement("p");
  const elementText = document.createTextNode(value);

  ticket.setAttribute("draggable", "true");
  ticket.appendChild(elementText);

  return ticket;
};

let savedTasks = JSON.parse(localStorage.getItem("savedTasks"));

if (!savedTasks) {
  savedTasks = [];
}

for (let i = 0; i < savedTasks.length; i++) {
  const p = createTicket(savedTasks[i]);

  columns[0].insertBefore(p, columns[0].lastElementChild);
}

const addTask = (event) => {
  event.preventDefault();

  const currentForm = event.target; // current form element
  const value = currentForm.elements[0].value; // value written in form's input
  const parent = currentForm.parentElement; // parent of form i.e div.column
  const ticket = createTicket(value); // div to be added

  parent.insertBefore(ticket, currentForm); // adding new task before the form

  savedTasks.push(value);
  localStorage.setItem("savedTasks", JSON.stringify(savedTasks));

  currentForm.reset(); // clearing form
};

for (let i = 0; i < columns.length; i++) {
  const form = columns[i].lastElementChild; // selecting every column's form because form is last element

  form.addEventListener("submit", addTask);
}
