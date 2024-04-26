// let currentTime = new Date();

// console.log(currentTime.getTime()); // gettime se TimeStamp mila

// let future = new Date("June 30, 2035").getTime();

// console.log("future:", future);

// console.log(currentTime.toString().slice(3, 7)); // ye string nhi hy

// let difference = currentTime - 1713976975866;

// console.log("difference:", difference / (1000 * 60 * 12));

// 1713890604435 current
// 1713976975866

// 0 Sunday
// 1 Monday
// 2 Tuesday
// 3 Wed
// 4 Thu
// 5 Fri
// 6 Sunday

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "Sep",
  "Out",
  "Nov",
  "December",
];

// console.log("test: ", months[new Date().getMonth()]);

// let a = new Date("april 25, 2025").getTime();

// let daysLeft = (new Date().getTime() - a) / (1000 * 60 * 60 * 24);

// // -366.0478030324074

// console.log(Math.abs(Math.floor(daysLeft)));

// Math.floor(45.6);
// Math.round(45.8);

// class 2
// getTimeStamp in excielDraw
// 1. Wed 24-Apr 7:45 PM
// 2. April 5th 07:45 PM
// floor and ceil ko yaad kese rakhe (room se)(floor is preferd)

// https://www.youtube.com/@jsconf_/videos

const days = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sun"];

let a = new Date();

let din = days[a.getDay()];
let month = months[a.getMonth()];
let hour = a.getHours();

let ampm = "";

if (hour === 0) {
  hour = 12;
  ampm = "AM";
} else if (hour < 12) {
  ampm = "AM";
} else {
  hour = hour - 12;
  ampm = "PM";
}

let task1 = `${din} ${a.getDate()}-${month.slice(
  0,
  3,
)} ${hour}:${a.getMinutes()} ${ampm}`;

let date = a.getDate();

if (date === 1 || date === 21) {
  date = `${date}st`;
} else if (date === 2 || date === 22) {
  date = `${date}nd`;
} else if (date === 3) {
  date = `3rd`;
} else if (date > 3) {
  date = `${a.getDate()}th`;
}

let task2 = `${month} ${date} ${String(hour).padStart(
  2,
  0,
)}:${a.getMinutes()} ${ampm}`;

console.log("🚀 ~ date1:", task2);

// let b = Math.floor(Math.random() * 20);

// setInterval(() => console.log("Shehzad"), 1000);
String("shehzad").padStart(5, ":");
