// https://date-fns.org
// https://date-fns.org/v3.6.0/docs/formatDistance

let myTime = dateFns.format(new Date(2014, 1, 11), "E MMM dd/yy");

console.log("🚀 ~ myTime:", myTime);

const dates = [new Date(1995, 6, 2), new Date(), new Date(1989, 6, 10)];

console.log(dates.sort());
console.log(dates.sort(dateFns.compareAsc));
