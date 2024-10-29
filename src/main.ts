import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

// title
const gameName = "Guitar Strummer";
document.title = gameName;

// header
const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);

// Step 1 - A button you can click
const button = document.createElement("button");
button.textContent = "🎸";
app.append(button);

// Step 2 - Clicking increases a counter
const strumCount = document.createElement("div");
let guitarStrum: number = 0;
strumCount.textContent = `Guitar Strum Count: ${guitarStrum.toFixed(0)}`;
app.append(strumCount);

// Step 6 - Multiple upgrades and status
const guitarGrowthDisplay = document.createElement("div");
let guitarGrowth: number = 0; // set the initial growth rate to 0
guitarGrowthDisplay.textContent = `Strum Rate: ${guitarGrowth.toFixed(2)} strums/sec`;
app.append(guitarGrowthDisplay);

// Step 9 - Data Driven Design
const skillCountsDisplay = document.createElement("div");
skillCountsDisplay.setAttribute("id", "skillCountsDisplay");
app.append(skillCountsDisplay);

// (step 5 & 6)
const updateGuitarStrumDisplay = () => {
  strumCount.innerHTML = `${guitarStrum.toFixed(0)} strums`;
  guitarGrowthDisplay.innerHTML = `Strum Rate: ${guitarGrowth.toFixed(2)} strums/sec`;
  skillCountsDisplay.innerHTML = `Skills Attained - ${allSkills.map((skill) => `${skill.name}: ${skillCounts[skill.name]}`).join(", ")}`;
  upgrades.forEach((upgrade) => {
    if (upgrade.button) {
      upgrade.button.innerHTML = `${upgrade.name} (+${upgrade.rate} strums/sec) <br> Cost: ${upgrade.currentCost.toFixed(0)} strums <br> ${upgrade.description}`;
      upgrade.button.disabled = guitarStrum < upgrade.currentCost;
    }
  });
};

interface Skill {
  name: string;
  cost: number;
  rate: number;
  description: string;
}

// Step 8 - Consistent Narrative
// Step 10 - Content Expansion
const allSkills: Skill[] = [
  {
    name: "Fingerpicking",
    cost: 10,
    rate: 0.1,
    description: '"Learn how to use your fingers to strum your guitar!"',
  },
  {
    name: "Bocchi the Rock Watchathon ",
    cost: 100,
    rate: 2,
    description:
      '"Become inspired to strum faster after watching Bocchi the Rock!"',
  },
  {
    name: "Zoom Guitar Teacher",
    cost: 1000,
    rate: 50,
    description: '"Become a teacher and let students strum for you!"',
  },
  {
    name: "Tim Henson Work Ethic",
    cost: 10000,
    rate: 100,
    description: '"Gain the elite work ethic of Tim Henson from Polyphia!"',
  },
  {
    name: "Master Certification of Shredding",
    cost: 100000,
    rate: 1000,
    description:
      '"The constant practice has led you to guitar strumming ascension."',
  },
  {
    name: "Possessed by Jimi Hendrix",
    cost: 10000000,
    rate: 10000000,
    description:
      '"The skill and finesse of Jimi Hendrix suddenly courses through your fingers!"',
  },
];

const skillCounts: Record<string, number> = {};
allSkills.forEach((skill) => (skillCounts[skill.name] = 0));

// Step 5 - Purchasing an upgrade
const upgrades = allSkills.map((skill) => ({
  ...skill,
  currentCost: skill.cost,
  button: undefined as HTMLButtonElement | undefined,
}));

const COST_INCREASE_FACTOR = 1.15;

upgrades.forEach((upgrade) => {
  const upgradeButton = document.createElement("button");
  upgradeButton.innerHTML = `${upgrade.name} (+${upgrade.rate} strums/sec) <br> ${upgrade.currentCost.toFixed(0)} strums`;
  upgradeButton.disabled = true; // initially disabled
  app.append(upgradeButton);

  // Step 7 - Price increases
  upgradeButton.addEventListener("click", () => {
    if (guitarStrum >= upgrade.currentCost) {
      guitarStrum -= upgrade.currentCost;
      guitarGrowth += upgrade.rate;
      skillCounts[upgrade.name]++;
      upgrade.currentCost *= COST_INCREASE_FACTOR;
      updateGuitarStrumDisplay();
    }
  });

  upgrade.button = upgradeButton;
});

// When the button is clicked, the guitarStrum counter increments
button.addEventListener("click", () => {
  guitarStrum++;
  updateGuitarStrumDisplay();
});

// Step 4 - Continuous growth
let tStamp = 0;

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

/* Step 3 - Automatic clicking (Completed)
const autoStrummer = () => {
  guitarStrum++;
  updateGuitarStrumDisplay();
};

setInterval(autoStrummer, 1000); // strums the guitar every second
*/
