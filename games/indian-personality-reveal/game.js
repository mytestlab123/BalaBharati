const TILE_COUNT = 16;
const DETAIL_REVEAL_AT = 11;
const REVEAL_DELAY_MS = 900;

const state = {
  people: [],
  order: [],
  currentOrderIndex: 0,
  currentPerson: null,
  tileOrder: [],
  revealedTiles: 0,
  timerId: null,
  infoShown: false
};

const els = {
  image: document.getElementById("personImage"),
  tileGrid: document.getElementById("tileGrid"),
  status: document.getElementById("gameStatus"),
  roundCount: document.getElementById("roundCount"),
  info: document.getElementById("personInfo"),
  sourceText: document.getElementById("sourceText"),
  startBtn: document.getElementById("startBtn"),
  pauseBtn: document.getElementById("pauseBtn"),
  revealBtn: document.getElementById("revealBtn"),
  nextBtn: document.getElementById("nextBtn"),
  resetBtn: document.getElementById("resetBtn")
};

function shuffle(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function setStatus(message) {
  els.status.textContent = message;
}

function stopTimer() {
  if (state.timerId) {
    clearInterval(state.timerId);
    state.timerId = null;
  }
}

function createTiles() {
  els.tileGrid.innerHTML = "";
  for (let i = 0; i < TILE_COUNT; i += 1) {
    const tile = document.createElement("div");
    tile.className = "tile";
    tile.dataset.index = String(i);
    els.tileGrid.appendChild(tile);
  }
}

function updateButtons() {
  const loaded = Boolean(state.currentPerson);
  const allRevealed = state.revealedTiles >= TILE_COUNT;
  els.startBtn.disabled = !loaded || Boolean(state.timerId) || allRevealed;
  els.pauseBtn.disabled = !loaded || !state.timerId;
  els.revealBtn.disabled = !loaded || allRevealed;
  els.nextBtn.disabled = !loaded || state.people.length < 2;
  els.resetBtn.disabled = !loaded;
}

function renderGuessPrompt() {
  els.info.innerHTML = `
    <h2>Make your guess</h2>
    <p>Watch the photo carefully. Call out the name when you think you know it.</p>
    <p>Tip for teachers: pause anytime for group guesses.</p>
  `;
}

function renderSource(person) {
  els.sourceText.innerHTML = `
    Image: <a href="${person.imageSource}" target="_blank" rel="noopener noreferrer">${person.imageSourceLabel}</a>.
    ${person.licenseSourceNote}
  `;
}

function showPersonInfo() {
  if (!state.currentPerson || state.infoShown) {
    return;
  }

  const person = state.currentPerson;
  const contributionItems = person.contribution
    .map((line) => `<li>${line}</li>`)
    .join("");

  els.info.innerHTML = `
    <h2>${person.name}</h2>
    <p class="years">${person.years}</p>
    <p class="category">${person.category}</p>
    <ul>${contributionItems}</ul>
    <p class="why-line">${person.whyTheyMatter}</p>
  `;
  state.infoShown = true;
}

function revealOneTile() {
  if (state.revealedTiles >= TILE_COUNT) {
    stopTimer();
    showPersonInfo();
    setStatus("Full reveal complete.");
    updateButtons();
    return;
  }

  const tileIndex = state.tileOrder[state.revealedTiles];
  const tile = els.tileGrid.querySelector(`[data-index="${tileIndex}"]`);
  if (tile) {
    tile.classList.add("revealed");
  }
  state.revealedTiles += 1;

  if (state.revealedTiles === DETAIL_REVEAL_AT) {
    showPersonInfo();
    setStatus("Enough clues are visible. Can your team name this personality?");
  } else {
    setStatus(`${state.revealedTiles} of ${TILE_COUNT} tiles revealed.`);
  }

  if (state.revealedTiles >= TILE_COUNT) {
    stopTimer();
    showPersonInfo();
    setStatus("Full reveal complete.");
  }
  updateButtons();
}

function resetCurrentPerson() {
  stopTimer();
  state.tileOrder = shuffle([...Array(TILE_COUNT).keys()]);
  state.revealedTiles = 0;
  state.infoShown = false;
  createTiles();
  renderGuessPrompt();
  setStatus("Ready. Press Start to reveal the photo.");
  updateButtons();
}

function loadPerson(orderIndex) {
  stopTimer();
  state.currentOrderIndex = orderIndex;
  state.currentPerson = state.people[state.order[orderIndex]];
  els.image.src = state.currentPerson.imageUrl;
  els.image.alt = `Hidden photo for ${state.currentPerson.name}`;
  els.roundCount.textContent = `Personality ${orderIndex + 1} of ${state.people.length}`;
  renderSource(state.currentPerson);
  resetCurrentPerson();
}

function startReveal() {
  if (!state.currentPerson || state.timerId || state.revealedTiles >= TILE_COUNT) {
    return;
  }
  setStatus("Reveal started.");
  state.timerId = setInterval(revealOneTile, REVEAL_DELAY_MS);
  updateButtons();
}

function pauseReveal() {
  stopTimer();
  setStatus("Paused. Invite guesses, then press Start to continue.");
  updateButtons();
}

function revealNow() {
  stopTimer();
  els.tileGrid.querySelectorAll(".tile").forEach((tile) => tile.classList.add("revealed"));
  state.revealedTiles = TILE_COUNT;
  showPersonInfo();
  setStatus("Revealed now.");
  updateButtons();
}

function nextPerson() {
  const nextIndex = (state.currentOrderIndex + 1) % state.order.length;
  loadPerson(nextIndex);
}

async function init() {
  createTiles();
  updateButtons();

  try {
    const response = await fetch("personalities.json");
    if (!response.ok) {
      throw new Error(`Could not load personalities.json (${response.status})`);
    }
    state.people = await response.json();
    state.order = shuffle([...Array(state.people.length).keys()]);
    loadPerson(0);
  } catch (error) {
    setStatus("Could not load game data.");
    els.info.innerHTML = `<h2>Game data missing</h2><p>${error.message}</p>`;
  }
}

els.startBtn.addEventListener("click", startReveal);
els.pauseBtn.addEventListener("click", pauseReveal);
els.revealBtn.addEventListener("click", revealNow);
els.nextBtn.addEventListener("click", nextPerson);
els.resetBtn.addEventListener("click", resetCurrentPerson);

init();
