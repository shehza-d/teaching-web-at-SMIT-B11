let isOpen = true;
let isLocked = false;

let message = "";

// if else value return nhi karta
// Ternary value return karta hy

if (isOpen) {
  message = "gate is open";
  if (isLocked) {
    message + "gate is locked";
  }
} else {
  message = "gate is close";
  if (isLocked) {
    message = "gate is locked";
  }
}

// chota if else
message = isOpen ? "gate is open" : "gate is close";

message = `gate is ${isOpen ? "open" : "close"} and gate is ${
  isLocked ? "locked" : "unlocked"
}!`;

message = `gate is ${isOpen ? "open" : "close"} and it is ${
  isLocked ? "locked" : "unlocked"
}`;

// Nested Ternary
condition
  ? "if phali condition true hy tw ya return hoga"
  : condition
  ? "2nd condition true"
  : "dono false hyn";

console.log("message: ", message);

if (isOpen) {
  console.log("gate is opened!!!");
} else {
  console.log("Gate band hy !!!");
}

console.log(isOpen ? "gate is opened " : "gate is closed!");
