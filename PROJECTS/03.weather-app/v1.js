// with .then and fetch
// https://rapidapi.com/hub
// skeleton loading

// https://home.openweathermap.org/api_keys
const API_KEY = "dfdfdf";
const form = document.querySelector("#myForm");
const cityInput = document.querySelector("#cityInput");
const temp = document.querySelector("#temp");
const humidity = document.querySelector("#humidity");
// const message = document.querySelector("#message");
const btn = document.querySelector("#getWeatherBtn");

// swal("welcome", "you are welcome to smit additioal details", "success");

const formHandler = (event) => {
  try {
    event.preventDefault(); // prevents page refresh

    message.innerText = "loading..."; // showing loading
    temp.innerText = "";
    humidity.innerText = "";
    btn.disabled = true; // disable button so user doesn't click button more than once

    const city = cityInput.value;

    const response = fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`,
    );

    form.reset(); // to clear input value only if form is submitted successfully

    temp.innerText = `${response.data.main.temp}°C`;
    humidity.innerText = response.data.main.humidity;

    console.log("🚀 ~ formHandler ~ response:", response.data);

    //
  } catch (error) {
    console.log("error", error);

    swal({
      title: "Error",
      icon: "error",
      text: error?.response?.data?.message || "Unknawn error please try again",
    });

    //
  } finally {
    console.log("finally will run in every situation");

    message.innerText = ""; // clearing old msgs

    btn.disabled = false;
  }
  console.log("last line of function");
};

form.addEventListener("submit", formHandler);

//
//
//
//
//
//
//

// // // error handling
// try {
//   try {
//     ayesha;
//   } catch (error) {
//     maria;
//   }
// } catch (shehzad) {
//   console.log("🚀 ~ shehzad:", shehzad);
// }

// console.log("code pura last tak chal raha hy");

// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //

// const API_KEY = "https://api.github.com/users/shehza-d";
// // using axios to fetch data
// try {
//   const response = await axios(API_KEY);

//   console.log("🚀 ~ response:", response.data);
// } catch (error) {
//   console.log(error.response.data.message);
// }

// //
// //
// //
// //
// //
// //
// //

// // js built-in fetch
// try {
//   const response = await fetch(API_KEY);

//   if (!response.ok) throw new Error("api ma error hy koi");

//   const data = await response.json(); // converting data into JSON

//   console.log("🚀 ~ data:", data);
// } catch (error) {
//   console.log(error);
// }
