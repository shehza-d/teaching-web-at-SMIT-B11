const body = document.querySelector("body");

body.addEventListener("mousemove", (event) => {
  console.log(`event x=${event.x} y=${event.y}`);

  if (event.ctrlKey) console.log("ctrl is pressed");
});
