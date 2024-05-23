const form = document.querySelector("#myForm");
const cityInput = document.querySelector("#cityInput");
// https://home.openweathermap.org/api_keys
const API_KEY = "21b776b8f103d8742f43ac6f5928e618";
const temp = document.querySelector("#temp");
const humidity = document.querySelector("#humidity");
const message = document.querySelector("#message");

const formHandler = async (event) => {
  try {
    event.preventDefault(); // prevents page refresh

    message.innerText = "";

    const city = cityInput.value;

    const response = await axios(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    const data = response.data; // await response.json();// converting data into JSON

    temp.innerText = data.main.temp;
    humidity.innerText = data.main.humidity;

    console.log("🚀 ~ formHandler ~ response:", data);
  } catch (err) {
    console.log(err);
    message.innerText = err?.response?.data?.message || "unknown error";
  }
};

form.addEventListener("submit", formHandler);

// error handling
// try {
//   try {
//     dfdfdf;
//   } catch (error) {
//     karim;
//   }
// } catch (shehzad) {
//   console.log("🚀 ~ shehzad:", shehzad);
// }

// console.log("code pura last tak chal raha hy");

// try {
//   const myApi = "https://api.github.com/users/shehdijdfijdza-d";

//   const response = await axios(myApi);

//   console.log("🚀 ~ response:", response.data);
// } catch (error) {
//   console.log(error.response.data.message);
// }

console.log("end");
