const items = ["bell", "diya", "lotus", "peacock feather", "modak"];

const foundCountEl = document.getElementById("found-count");
const objectTotalEl = document.getElementById("object-total");
const objectListEl = document.getElementById("object-list");
const messageEl = document.getElementById("message");
const replayButton = document.getElementById("replay-button");
const hotspots = [...document.querySelectorAll(".hotspot")];

const found = new Set();

objectTotalEl.textContent = String(items.length);

function titleCase(text) {
  return text.replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function renderList() {
  objectListEl.innerHTML = "";
  items.forEach((item) => {
    const chip = document.createElement("span");
    chip.className = found.has(item) ? "object-chip found" : "object-chip";
    chip.textContent = titleCase(item);
    objectListEl.appendChild(chip);
  });
}

function updateProgress() {
  foundCountEl.textContent = String(found.size);
  renderList();

  if (found.size === items.length) {
    messageEl.className = "message-box good";
    messageEl.textContent = "You found all five objects. Well done.";
  }
}

function findItem(button) {
  const item = button.dataset.item;

  if (found.has(item)) {
    return;
  }

  found.add(item);
  button.classList.add("found");
  button.disabled = true;
  messageEl.className = "message-box";
  messageEl.textContent = `You found the ${item}.`;
  updateProgress();
}

function resetGame() {
  found.clear();
  hotspots.forEach((button) => {
    button.classList.remove("found");
    button.disabled = false;
  });
  messageEl.className = "message-box";
  messageEl.textContent = "Tap each object when you spot it.";
  updateProgress();
}

hotspots.forEach((button) => {
  button.addEventListener("click", () => findItem(button));
});

replayButton.addEventListener("click", resetGame);

updateProgress();
