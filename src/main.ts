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

// Step 4 - Continuous growth
let timeStamp: number = 0;

// updates the guitar strum counter based on time
const updateStrum = (timestamp: number) => {
    if (!timeStamp) timeStamp = timestamp;
    const delta = timestamp - timeStamp;
    // increment based on time
    const increment = (delta / 1000); // increment by (delta ms / 1000 ms)
    guitarStrum += increment;
    // updates button
    strumCount.textContent = `Guitar Strum Count: ${guitarStrum}`;
    // Set the timeStamp to the current timestamp
    timeStamp = timestamp;
    
    // Request the next frame
    requestAnimationFrame(updateStrum);
}

requestAnimationFrame(updateStrum);

// button formatting
button.style.padding = "15px 15px";
button.style.fontSize = "35px";
button.style.marginTop = "10px";

app.append(header); // adds header
app.append(button); // adds button
app.append(strumCount); // adds guitar strum counter
