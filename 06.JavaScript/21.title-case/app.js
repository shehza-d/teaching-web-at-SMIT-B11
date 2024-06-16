let myString = "mY NaMe IS shehzad";
// "My Name Is Shehzad"

// console.log(myString.toLowerCase());
// console.log(myString.toUpperCase());

myString = myString.toLowerCase();

let words = myString.split(" ");

let result = "";
for (let i = 0; i < words.length; i++) {
  const word = words[i];
  // console.log(words[i][0].toUpperCase() + word.slice(1));
  result += words[i][0].toUpperCase() + word.slice(1);
}

console.log(result);
