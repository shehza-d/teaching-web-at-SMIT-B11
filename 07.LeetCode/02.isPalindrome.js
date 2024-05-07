function isPalindrome1(s) {
  s = s.toLowerCase();
  s = s.replaceAll(/[^a-z0-9]/g, "");

  let reverseString = s.split("").reverse().join("");
  let result = s === reverseString;

  return result;
}

function isPalindrome2(s) {
  s = s.toLowerCase();
  s = s.replaceAll(/[^a-z0-9]/g, "");

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== s[s.length - i - 1]) {
      return false;
    }
  }

  return true;
}
// let s = "sA man, a plan, a canal: Panama"; // false
// let s = "A man, a plan, a canal: Panama" // true
// let s = "shehzad";
// let s = "level"
// let s = "civic"
// let s = "mah)(*&^%$#@!am";

console.log(isPalindrome(s));
