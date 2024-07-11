// js is synchronous language

const API_URL = "https://api.github.com/users/shehza-d";

// 1
try {
  const result = await fetch(API_URL);
  const data = await result.json();

  console.log("🚀 ~ data:", data);

  throw new Error("sahi code lekha sheeko");
} catch (error) {
  console.log("🚀 ~ error", error);
}

// 2
fetch(API_URL)
  .then(function (result) {
    console.log("🚀 ~ result", result);
    return result.json();
  })
  .then(function (data) {
    console.log("🚀 ~ data", data);
  })
  .catch(function (error) {
    console.log("🚀 ~ error", error);
  });

// 3

console.log("🚀 ~ Shehzad 111");

throw new Error("sahi code lekha sheeko");

console.log("🚀 ~ Shehzad 222");

//

// 4
const meraPromise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    return resolve("ye lo data");
  }, 4000);
});

try {
  const result = await meraPromise;
  console.log("🚀 ~ result:", result);
} catch (error) {
  console.log("🚀 ~ error", error);
}
