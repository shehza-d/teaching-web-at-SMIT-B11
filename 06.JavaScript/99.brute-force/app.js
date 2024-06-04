// { password, password2, password3, password4 }
import { password, password2 } from "./passwords.js";

// 1 = 7483
// for (let i = 0; i < 10000; i++) {
//   if (i == password) console.log(i);
// }

let guessedPassword = "";
const ALPHABETS = "abcdefghijklmnopqrstuvwxyz";

for (let i = 0; i < password2.length; i++) {
  for (let j = 0; j < ALPHABETS.length; j++) {
   if(password2[i]===ALPHABETS[j]){
    
   }
    
  }
}

console.log(guessedPassword);
