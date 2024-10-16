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

/*
// Step 3 - Automatic clicking (Completed)
const autoStrummer = () => {
  guitarStrum++;
  // console.log(`Auto-Strum: ${guitarStrum}`); // for debugging
  strumCount.textContent = `Guitar Strum Count: ${guitarStrum}`;
};

setInterval(autoStrummer, 1000); // strums the guitar every second
*/

// Step 4 - Continuous growth (Completed)
let tStamp: number = 0;

// updates the guitar strum counter based on time
const updateStrum = (timestamp: number) => {
  if (!tStamp) tStamp = timestamp;
  const delta = timestamp - tStamp;
  // increment based on time
  const increment = (delta / 1000); // increment by (delta ms / 1000 ms) and factor in guitarGrowth
  guitarStrum += increment;
  // updates button
  strumCount.textContent = `Guitar Strum Count: ${guitarStrum}`;
  // Set the timeStamp to the current timestamp
  tStamp = timestamp;

  // Request the next frame
  requestAnimationFrame(updateStrum);
};

requestAnimationFrame(updateStrum);

// Step 5 - Purchasing an upgrade
let guitarGrowth: number = 0;

// fingerPicking upgrade button
const fingerPicking = document.createElement("button");
fingerPicking.textContent =
  "Learn how to use your fingers to strum the guitar! (10 strums)";
fingerPicking.disabled = true; // starts disabled
/*
// upgrades when clicked
fingerPicking.addEventListener("click", () => {
  if (guitarStrum >= 10) {
    guitarStrum -= 10;
    guitarGrowth += 1;
    updateGuitarStrum();
  }
});
*/

// Create a display element for guitarGrowth
const guitarGrowthDisplay = document.createElement("div");
guitarGrowthDisplay.textContent = `Guitar Growth: ${guitarGrowth}`;
document.body.appendChild(guitarGrowthDisplay);

// Update the display when guitarGrowth changes
fingerPicking.addEventListener("click", () => {
  if (guitarStrum >= 10) {
    guitarStrum -= 10;
    guitarGrowth += 1;
    updateGuitarStrum();
    guitarGrowthDisplay.textContent = `Guitar Growth: ${guitarGrowth}`;
  }
});

// updating the applications display
const updateGuitarStrum = () => {
  strumCount.textContent = `Guitar Strum Count: ${guitarStrum}`;
  fingerPicking.disabled = guitarStrum < 10;
};

// fingerPicking upgrade button formatting
fingerPicking.style.padding = "20px 20px";
fingerPicking.style.fontSize = "35px";
fingerPicking.style.marginTop = "10px";

// button formatting
button.style.padding = "15px 15px";
button.style.fontSize = "35px";
button.style.marginTop = "10px";

app.append(header); // adds header
app.append(button); // adds button
app.append(strumCount); // adds guitar strum counter
app.append(fingerPicking); // adds fingerPicking upgrade
