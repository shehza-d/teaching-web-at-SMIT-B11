let myText =
  'The New Yorker shehzad magazine doesn\'t allow the phrase shehzad "World War II. " They say it should be "the Second World War."';

// replaceAll with loop
for (let i = 0; i < myText.length; i++) {
  if (myText.slice(i, i + 12) === "World War II") {
    myText = myText.slice(0, i) + "the Second World War" + myText.slice(i + 12);
  }
}

// easy method
myText = myText.replaceAll("shehzad", "testing");

let myName = "shehzad";
console.log("myText: ", myText);
console.log("shehzad".charAt(0));
// charAt is same as => "shehzad"[2]

console.log(myName[myName.length - 1]);

let dayOfWk = "Sun";

switch (dayOfWk) {
  case "sat":
    console.log("kAM KARO");
    break;

  case "sun":
    console.log("Coding KARO");
    break;

  case "fri":
    console.log("Jummah pharo!");
    break;

  default:
    console.log("Error aagya hy!");
}

{
  const myFunction = () => {
    console.log("chala function", window.location.href);
  };
}

myFunction();
