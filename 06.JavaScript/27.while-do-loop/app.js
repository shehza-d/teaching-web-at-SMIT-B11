// let arr = [2, 3, 4, 5, 6, 7, 8];

// while (arr.length) {
//     console.log(arr.pop());
//     arr--;
// }

// do while 1
// let i = 0;

// do {
//   console.log("shehzad");

//   i++;
// } while (i < 2);

// do while 2
// let bool = confirm("hello")

do {
  let randomNum = Math.floor(Math.random() * 2);

  if (randomNum === 0) console.log("you lose");
  if (randomNum === 1) console.log("you win");

  let result = confirm("do you want to play again");
} while (result);
