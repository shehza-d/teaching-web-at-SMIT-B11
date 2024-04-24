let currentTime = new Date();

console.log(currentTime.getTime()); // gettime se TimeStamp mila

let future = new Date("June 30, 2035").getTime();

console.log("future:", future);

console.log(currentTime.toString().slice(3, 7)); // ye string nhi hy

let difference = currentTime - 1713976975866;

console.log("difference:", difference / (1000 * 60 * 12));

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
  " January",
  " February",
  " March",
  " April",
  " May",
  " June",
  " July",
  " August",
  " Sep",
  " Out",
  " Nov",
  " December",
];

console.log("test: ", months[new Date().getMonth()]);

let a = new Date("april 25, 2025").getTime();

let daysLeft = (new Date().getTime() - a) / (1000 * 60 * 60 * 24);

// -366.0478030324074

console.log(Math.abs(Math.floor(daysLeft)));

Math.floor(45.6);
Math.round(45.8);
