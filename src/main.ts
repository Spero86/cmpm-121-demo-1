import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "Guitar Strummer";
document.title = gameName;

const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);

// Step 1 - A button you can click
const button = document.createElement("button");
button.textContent = "🎸";