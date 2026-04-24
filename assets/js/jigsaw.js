const boardEl = document.getElementById("puzzle-board");
const moveCountEl = document.getElementById("move-count");
const messageEl = document.getElementById("message");
const shuffleButton = document.getElementById("shuffle-button");
const resetButton = document.getElementById("reset-button");

const size = 3;
const solvedTiles = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let tiles = [...solvedTiles];
let moves = 0;

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
    messageEl.textContent = `Lotus complete in ${moves} moves.`;
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
  messageEl.textContent = "This is the completed lotus picture.";
  renderBoard();
}

shuffleButton.addEventListener("click", shuffleBoard);
resetButton.addEventListener("click", resetBoard);

shuffleBoard();
