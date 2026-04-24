const boardEl = document.getElementById("puzzle-board");
const moveCountEl = document.getElementById("move-count");
const messageEl = document.getElementById("message");
const shuffleButton = document.getElementById("shuffle-button");
const resetButton = document.getElementById("reset-button");
const puzzleTitleEl = document.getElementById("puzzle-title");
const puzzleIntroEl = document.getElementById("puzzle-intro");
const previewImageEl = document.getElementById("preview-image");
const symbolNoteEl = document.getElementById("symbol-note");
const symbolChoiceButtons = [...document.querySelectorAll(".symbol-choice")];

const puzzles = {
  lotus: {
    title: "Lotus Tile Puzzle",
    image: "../../assets/images/lotus-puzzle.svg",
    alt: "Completed lotus picture",
    note: "The lotus is often used as a calm and pure symbol."
  },
  diya: {
    title: "Diya Tile Puzzle",
    image: "../../assets/images/diya-puzzle.svg",
    alt: "Completed diya picture",
    note: "A diya gives light and reminds us of hope and goodness."
  },
  shankha: {
    title: "Shankha Tile Puzzle",
    image: "../../assets/images/shankha-puzzle.svg",
    alt: "Completed shankha picture",
    note: "A shankha is a conch shell used in worship and celebration."
  },
  trishul: {
    title: "Trishul Tile Puzzle",
    image: "../../assets/images/trishul-puzzle.svg",
    alt: "Completed trishul picture",
    note: "The trishul is a sacred symbol linked with Lord Shiva."
  }
};

const size = 3;
const solvedTiles = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let tiles = [...solvedTiles];
let moves = 0;
let currentPuzzleKey = "lotus";

function isSolved() {
  return tiles.every((tile, index) => tile === solvedTiles[index]);
}

function getEmptyIndex() {
  return tiles.indexOf(8);
}

function isNeighbor(index, emptyIndex) {
  const row = Math.floor(index / size);
  const col = index % size;
  const emptyRow = Math.floor(emptyIndex / size);
  const emptyCol = emptyIndex % size;
  return Math.abs(row - emptyRow) + Math.abs(col - emptyCol) === 1;
}

function swapTiles(index, emptyIndex) {
  [tiles[index], tiles[emptyIndex]] = [tiles[emptyIndex], tiles[index]];
}

function renderBoard() {
  boardEl.innerHTML = "";
  boardEl.style.setProperty("--puzzle-image", `url("${puzzles[currentPuzzleKey].image}")`);

  tiles.forEach((tile, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = tile === 8 ? "tile empty" : "tile";
    button.setAttribute("aria-label", tile === 8 ? "Empty space" : `Tile ${tile + 1}`);

    if (tile !== 8) {
      const row = Math.floor(tile / size);
      const col = tile % size;
      button.style.backgroundPosition = `${col * 50}% ${row * 50}%`;
      button.addEventListener("click", () => moveTile(index));
    } else {
      button.disabled = true;
    }

    boardEl.appendChild(button);
  });

  moveCountEl.textContent = String(moves);
}

function moveTile(index) {
  const emptyIndex = getEmptyIndex();

  if (!isNeighbor(index, emptyIndex)) {
    messageEl.className = "message-box";
    messageEl.textContent = "Choose a tile touching the empty space.";
    return;
  }

  swapTiles(index, emptyIndex);
  moves += 1;
  renderBoard();

  if (isSolved()) {
    messageEl.className = "message-box good";
    messageEl.textContent = `${puzzles[currentPuzzleKey].title} complete in ${moves} moves.`;
  } else {
    messageEl.className = "message-box";
    messageEl.textContent = "Good move. Keep going.";
  }
}

function getNeighbors(emptyIndex) {
  return solvedTiles.filter((index) => isNeighbor(index, emptyIndex));
}

function shuffleBoard() {
  moves = 0;
  tiles = [...solvedTiles];

  for (let step = 0; step < 70; step += 1) {
    const emptyIndex = getEmptyIndex();
    const choices = getNeighbors(emptyIndex);
    const choice = choices[Math.floor(Math.random() * choices.length)];
    swapTiles(choice, emptyIndex);
  }

  if (isSolved()) {
    shuffleBoard();
    return;
  }

  messageEl.className = "message-box";
  messageEl.textContent = "Puzzle shuffled. Tap a tile next to the empty space.";
  renderBoard();
}

function resetBoard() {
  tiles = [...solvedTiles];
  moves = 0;
  messageEl.className = "message-box good";
  messageEl.textContent = `This is the completed ${puzzles[currentPuzzleKey].title.toLowerCase()}.`;
  renderBoard();
}

function choosePuzzle(key) {
  currentPuzzleKey = puzzles[key] ? key : "lotus";
  const puzzle = puzzles[currentPuzzleKey];

  puzzleTitleEl.textContent = puzzle.title;
  puzzleIntroEl.textContent = "Move tiles into the empty space until the picture is complete.";
  previewImageEl.src = puzzle.image;
  previewImageEl.alt = puzzle.alt;
  symbolNoteEl.textContent = puzzle.note;

  symbolChoiceButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.puzzle === currentPuzzleKey);
  });

  shuffleBoard();
}

symbolChoiceButtons.forEach((button) => {
  button.addEventListener("click", () => choosePuzzle(button.dataset.puzzle));
});

shuffleButton.addEventListener("click", shuffleBoard);
resetButton.addEventListener("click", resetBoard);

choosePuzzle(location.hash.replace("#", "") || "lotus");
