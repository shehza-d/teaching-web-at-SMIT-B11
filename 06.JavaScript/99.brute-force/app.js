import { password3 } from "./passwords";

let password = "shehzadIsPalestineniTillDeath";
console.time("Hacking");

let counter = 0;

let guessPWD = "";
let lowerAlphabets = "abcdefghijklmnopqrstuvwxyz";
let upperAlphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// number
for (let i = 0; i < 9999; i++) {
  if (password == i) console.log("your password is ", i);
}

// number
for (let i = 0; i < password.length; i++) {
  for (let j = 0; j < 10; j++) {
    if (password[i] == j) guessPWD += j;
    ++counter;
  }
}

for (let i = 0; i < password.length; i++) {
  for (let j = 0; j < lowerAlphabets.length; j++) {
    if (password[i] == j) guessPWD += j;
    if (password[i] === lowerAlphabets[j]) guessPWD += lowerAlphabets[j];
    if (password[i] === upperAlphabets[j]) guessPWD += upperAlphabets[j];
    ++counter;
  }
}

console.log("your password is ", guessPWD);
console.log("loop chala", counter);
console.timeEnd("Hacking");
