import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "Guitar Strummer";
document.title = gameName;

const header = document.createElement("h1");
header.innerHTML = gameName;

// Step 1 - A button you can click (Completed)
const button = document.createElement("button");
button.textContent = "🎸";

// Step 2 - Clicking increases a counter (Completed)
const strumCount = document.createElement("div");
let guitarStrum: number = 0; // keeps track of how many times the guitar has been strummed
strumCount.textContent = `Guitar Strum Count: ${guitarStrum}`; // displays strum counter

// When the button is clicked, the guitarStrum counter increments
button.addEventListener("click", () => {
  guitarStrum++;
  strumCount.textContent = `Guitar Strum Count: ${guitarStrum}`;
});

// Step 3 - Automatic clicking
const autoStrummer = () => {
  guitarStrum++;
  console.log(`Auto-Strum: ${guitarStrum}`);
  strumCount.textContent = `Guitar Strum Count: ${guitarStrum}`;
};

setInterval(autoStrummer, 1000); // strums the guitar every second

// button formatting
button.style.padding = "15px 15px";
button.style.fontSize = "35px";
button.style.marginTop = "10px";

app.append(header); // adds header
app.append(button); // adds button
app.append(strumCount); // adds guitar strum counter
