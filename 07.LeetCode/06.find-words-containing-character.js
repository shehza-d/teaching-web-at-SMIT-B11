function findWordsContaining(words, x) {
  let result = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].includes(x)) {
      result.push(i);
    }
  }
  return result;
}

// let words = ["leet", "code"], x = "e";// [0,1]
// let words = ["abc", "bcd", "aaaa", "cbc"], x = "a";
let words = ["abc", "bcd", "aaaa", "cbc"],
  x = "z"; // []

console.log(findWordsContaining(words, x));
