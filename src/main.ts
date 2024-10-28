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
let guitarStrum = 0; // keeps track of how many times the guitar has been strummed

// When the button is clicked, the guitarStrum counter increments
button.addEventListener("click", () => {
  guitarStrum++;
  updateGuitarStrumDisplay();
});

const updateGuitarStrumDisplay = () => {
  strumCount.textContent = `Guitar Strum Count: ${guitarStrum.toFixed(0)}`;
  fingerPicking.disabled = guitarStrum < 10;
};

/* Step 3 - Automatic clicking (Completed)
const autoStrummer = () => {
  guitarStrum++;
  updateGuitarStrumDisplay();
};

setInterval(autoStrummer, 1000); // strums the guitar every second
*/

// Step 4 - Continuous growth (Completed)
let tStamp = 0;
let guitarGrowth = 1; // set the initial growth rate to 1

// updates the guitar strum counter based on time
const updateStrum = (timestamp: number) => {
  if (!tStamp) tStamp = timestamp;
  const delta = timestamp - tStamp;
  const increment = (delta / 1000) * guitarGrowth; // factor in guitarGrowth
  guitarStrum += increment;
  updateGuitarStrumDisplay();
  tStamp = timestamp;
  requestAnimationFrame(updateStrum);
};

requestAnimationFrame(updateStrum);

// Step 5 - Purchasing an upgrade
const fingerPicking = document.createElement("button");
fingerPicking.textContent = "Learn how to use your fingers to strum the guitar! (10 strums)";
fingerPicking.disabled = true;

// upgrades when clicked
fingerPicking.addEventListener("click", () => {
  if (guitarStrum >= 10) {
    guitarStrum -= 10;
    guitarGrowth += 1;
    updateGuitarStrumDisplay();
    guitarGrowthDisplay.textContent = `Guitar Growth: ${guitarGrowth}`;
  }
});

// Create a display element for guitarGrowth
const guitarGrowthDisplay = document.createElement("div");
guitarGrowthDisplay.textContent = `Guitar Growth: ${guitarGrowth}`;
document.body.appendChild(guitarGrowthDisplay);

app.append(header);
app.append(button);
app.append(strumCount);
app.append(fingerPicking);