// https://date-fns.org
// https://date-fns.org/v3.6.0/docs/formatDistance

let myTime = dateFns.format(new Date(2014, 1, 11), "E MMM dd/yy");

// April 5th 07:45 PM
let myTime2 = dateFns.format(new Date(), "MMMM do hh:mm a");

const dates = [new Date(1995, 6, 2), new Date(), new Date(1989, 6, 10)];

console.log(dates.sort(dateFns.compareAsc));

let myText = dateFns.formatDistance(
  "2023-09-23T20:37:13.090+00:00",
  new Date(),
  { addSuffix: true },
);

console.log(myText);
