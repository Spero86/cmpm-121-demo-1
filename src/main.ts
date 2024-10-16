import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "Guitar Strummer";
document.title = gameName;

const header = document.createElement("h1");
header.innerHTML = gameName;


// Step 1 - A button you can click
const button = document.createElement("button");
button.textContent = "🎸";

let guitarStrum = 0; // keeps track of how many times the guitar has been strummed

button.addEventListener("click", () => {
  guitarStrum++;
});

// button formatting
button.style.padding = "15px 15px";
button.style.fontSize = "35px";
button.style.marginTop = "10px";

console.log(guitarStrum); // states how many times the guitar has been strummed
app.append(header); // adds header
app.append(button); // adds button
