const userDate = document.querySelector("#input_date");

document.querySelector("#dateForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const now = new Date();
  let birthday = new Date(userDate.value).getTime();

  //   let totalAge = now.getTime() - birthday;

  //   let ageInYears = totalAge / (1000 * 60 * 60 * 24 * 365);
  //   let monthsLeft = totalAge % (1000 * 60 * 60 * 24 * 365);

  //   let monthInAge = monthsLeft / (1000 * 60 * 60 * 24 * 30);
  //   let daysLeft = monthsLeft % (1000 * 60 * 60 * 24 * 30);

  //   let daysInAge = daysLeft / (1000 * 60 * 60 * 24);

  //   let age = `Math.round(ageInYears), " year ", monthInAge, " months ",daysInAge," days"`

  let nextBirthday = new Date(birthday); //.setFullYear(2024)

  if (now.getMonth() > nextBirthday.getMonth()) {
    nextBirthday.setFullYear(now.getFullYear() + 1);
  } else {
    nextBirthday.setFullYear(now.getFullYear());
  }

  let timeLeftInNextBirthday = nextBirthday.getTime() - now.getTime();

  let daysLeftInBirthday = Math.floor(
    timeLeftInNextBirthday / (1000 * 60 * 60 * 24),
  );

  let remainderOfDays = timeLeftInNextBirthday % (1000 * 60 * 60 * 24);

  let hoursLeft = remainderOfDays / (1000 * 60 * 60);

  console.log(daysLeftInBirthday, " day", hoursLeft, " h");
});
