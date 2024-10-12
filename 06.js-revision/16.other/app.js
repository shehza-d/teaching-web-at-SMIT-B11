// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events

const body = document.querySelector("body")

const myDiv = document.createElement("div");
myDiv.setAttribute("id", "meri-id");
myDiv.setAttribute("class", "meri-class");
// myDiv.setAttribute("class","meri-piyari-class")

const para = document.createElement("p");
const text = document.createTextNode("the is my paragraph");
para.appendChild(text)

myDiv.appendChild(para)
body.appendChild(myDiv)

console.log(myDiv);

<p></p>