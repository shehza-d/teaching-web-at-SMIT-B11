const form = document.querySelector("#dateForm");
const myInput = document.querySelector("#input_date");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let birthday = new Date(myInput.value + " 00:00");

  const now = new Date();

  let difference = now.getTime() - birthday.getTime();

  let ageInYears = difference / (1000 * 60 * 60 * 24 * 365);
  let remainder = difference % (1000 * 60 * 60 * 24 * 365);

  let ageInMonths = remainder / (1000 * 60 * 60 * 24 * 30.475);
  console.log(ageInYears, " years", ageInMonths, " monhts");

  if (birthday.getMonth() > now.getMonth()) {
    birthday.setFullYear(now.getFullYear());
  } else {
    birthday.setFullYear(now.getFullYear() + 1);
  }

  let nextBirthday = birthday.getTime() - now.getTime();

  let monthsLeft = nextBirthday / (1000 * 60 * 60 * 24 * 30.4375);
  let remainder = nextBirthday % (1000 * 60 * 60 * 24 * 30.4375);

  let daysLeft = remainder / (1000 * 60 * 60 * 24);

  console.log(monthsLeft, " months", daysLeft, " days left");
});
