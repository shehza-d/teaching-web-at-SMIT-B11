const myDate = new Date().getDay();

console.log(myDate);

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
// Tue Dec 10  9:24 AM

const addAmPm = new Date().getHours() > 11 ? "PM" : "AM";
const now = new Date();
const currentMin = now.getMinutes();
const hour = now.getHours();

const date1 = `${days[now.getDay()]} ${
  months[now.getMonth()]
} ${now.getDate()} ${hour > 12 ? hour - 12 : hour}:${
  currentMin < 10 ? `0${currentMin}` : currentMin
} ${addAmPm}`;

console.log(date1);

// Miliseconds are used to get the difference between two dates
// 1727506853502 // first
// 1727506904526 // second

const date1 = `${days[new Date().getDay()]} ${
  months[new Date().getMonth()]
} ${new Date().getDate()} ${new Date().getHours()}:${
  new Date().getMinutes() < 10
    ? `0${new Date().getMinutes()}`
    : new Date().getMinutes()
}${addAmPm}`;

const testingFun = () => {
  return "nehallll";
};

const test = true ? "Shehzad" : "Nehal";

const newString = `my name is ${5 + 5}`;
const newString = `my name is ${testingFun()}`;
// const newString = `my name is ${if(3>2){console.log("hello")}}`;//error

console.log(newString);
