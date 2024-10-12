// rest apis  https://www.ibm.com/topics/rest-apis
// status code https://restfulapi.net/http-status-codes
// What is cloud? benefits of cloud vs local home server
// https://github.com/mInzamamMalik/Chatbot-Development-Syllabus
// for linux sudo snap install postman

// const API_URI = "https://node-server-hosting-on.vercel.app/waiting";
const form = document.querySelector("#form");
const mainDiv = document.querySelector("#main-div");
const messageDiv = document.querySelector("#message");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  // getting all the elements
  const imgTag = mainDiv.children[0];
  const name = mainDiv.children[1];
  const repos = mainDiv.children[2];
  const link = mainDiv.children[3];

  const value = event.target.children[0].value;
  const API_URI = `https://api.github.com/users/${value}`;

  try {
    const response = await axios(API_URI);

    console.log(response);

    // setting the values
    imgTag.src = response.data.avatar_url;
    name.innerText = response.data.name;
    repos.innerText = `public repos: ${response.data.public_repos}`;
    link.href = response.data.html_url;
  } catch (err) {
    console.log(err.response.data.message);

    // showing the error message
    messageDiv.innerText = err.response.data.message;

    // clearing the values in case of error
    imgTag.src = "";
    name.innerText = "";
    repos.innerText = "";
    link.href = "";
  }
});

// Top level await
async function getData() {
  //
}
test();

// pending / resolve / reject

try {
  try {
    smit;
  } catch (meraError) {
    console.log("meraError ", meraError);

    // catch ma error aaye tw wo app crash kr sagta hy
    smit2;
    // is error ky liye hum ak aur parent try catch laga sagty hyn
  }
} catch (error) {
  //
}

console.log("last line");
