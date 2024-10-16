import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "Guitar Strummer";
document.title = gameName;

const header = document.createElement("h1");
header.innerHTML = gameName;

// Step 1 - A button you can click (Completed)
const button = document.createElement("button");
button.textContent = "🎸";

// Step 2 - Clicking increases a counter
const strumCount = document.createElement('div');
let guitarStrum: number = 0; // keeps track of how many times the guitar has been strummed

button.addEventListener("click", () => {
  guitarStrum++;
  strumCount.textContent = 'Guitar Strum Count: ${guitarStrum}';
});

// button formatting
button.style.padding = "15px 15px";
button.style.fontSize = "35px";
button.style.marginTop = "10px";

console.log(guitarStrum); // states how many times the guitar has been strummed

app.append(header); // adds header
app.append(button); // adds button
app.append(strumCount); // adds guitar strum counter
