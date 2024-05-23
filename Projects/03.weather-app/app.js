const form = document.querySelector("#myForm");
const cityInput = document.querySelector("#cityInput");
// https://home.openweathermap.org/api_keys
// const API_KEY = "";
const temp = document.querySelector("#temp");
const humidity = document.querySelector("#humidity");
const message = document.querySelector("#message");

const formHandler = async (event) => {
  try {
    event.preventDefault(); // prevents page refresh

    message.innerText = ""; // clearing old msgs

    const city = cityInput.value;

    const response = await axios(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );

    temp.innerText = response.data.main.temp;
    humidity.innerText = response.data.main.humidity;

    console.log("🚀 ~ formHandler ~ response:", data);
  } catch (err) {
    console.log(err);

    message.innerText = err?.response?.data?.message || "unknown error";
  }
};

form.addEventListener("submit", formHandler);

//
//
//
//
//
//
//

// error handling
try {
  try {
    ayesha;
  } catch (error) {
    maria;
  }
} catch (shehzad) {
  console.log("🚀 ~ shehzad:", shehzad);
}

// console.log("code pura last tak chal raha hy");

//
//
//
//
//
//
//
//
//
//
//
//
//
//

const API_KEY = "https://api.github.com/users/shehza-d";
// using axios to fetch data
try {
  const response = await axios(API_KEY);

  console.log("🚀 ~ response:", response.data);
} catch (error) {
  console.log(error.response.data.message);
}

//
//
//
//
//
//
//

// js built-in fetch
try {
  const response = await fetch(API_KEY);

  if (!response.ok) throw new Error("api ma error hy koi");

  const data = await response.json(); // converting data into JSON

  console.log("🚀 ~ data:", data);
} catch (error) {
  console.log(error);
}
