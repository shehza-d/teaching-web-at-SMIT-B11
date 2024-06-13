const body = document.querySelector("body");
const myImg = document.querySelector("#balloon");

window.handleMyMouseMove = (event) => {
  myImg.style.top = `${event.clientX}px`;
  myImg.style.left = `${event.clientY}px`;
};
