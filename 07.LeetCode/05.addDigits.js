// Recursion in JavaScript  https://youtu.be/M2FrMvvAUcc?si=R7P0TIW-TSDVPFTg

const addDigit = (num) => {
  let arrayOfNumber = String(num).split("");

  let sum = 0;

  for (let i = 0; i < arrayOfNumber.length; i++) {
    sum += Number(arrayOfNumber[i]);
  }

  if (sum > 9) {
    let result = addDigit(sum);
    return result;
  }

  return sum;
};

// console.log(addDigit(4211)); // 8
console.log(addDigit(83)); // 0
addDigit(3567887654); // 5
