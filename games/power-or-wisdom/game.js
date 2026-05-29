const state = {
  rounds: [],
  order: [],
  currentIndex: 0,
  choices: [],
  votes: { a: 0, b: 0 },
  selected: null,
  revealed: false
};

const els = {
  roundCount: document.getElementById("roundCount"),
  valueTag: document.getElementById("valueTag"),
  situationTitle: document.getElementById("situationTitle"),
  situationText: document.getElementById("situationText"),
  choiceABtn: document.getElementById("choiceABtn"),
  choiceBBtn: document.getElementById("choiceBBtn"),
  choiceAText: document.getElementById("choiceAText"),
  choiceBText: document.getElementById("choiceBText"),
  choiceAVotes: document.getElementById("choiceAVotes"),
  choiceBVotes: document.getElementById("choiceBVotes"),
  revealBtn: document.getElementById("revealBtn"),
  nextBtn: document.getElementById("nextBtn"),
  resetVotesBtn: document.getElementById("resetVotesBtn"),
  shuffleBtn: document.getElementById("shuffleBtn"),
  lessonPanel: document.getElementById("lessonPanel")
};

function shuffle(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function currentRound() {
  return state.rounds[state.order[state.currentIndex]];
}

function voteText(count) {
  return `${count} ${count === 1 ? "vote" : "votes"}`;
}

function renderVotes() {
  els.choiceAVotes.textContent = voteText(state.votes.a);
  els.choiceBVotes.textContent = voteText(state.votes.b);
  els.choiceABtn.classList.toggle("selected", state.selected === "a");
  els.choiceBBtn.classList.toggle("selected", state.selected === "b");
}

function resetVotes() {
  state.votes = { a: 0, b: 0 };
  state.selected = null;
  renderVotes();
}

function renderLessonPrompt() {
  els.lessonPanel.classList.remove("revealed");
  els.lessonPanel.innerHTML = `
    <p class="lesson-kicker">Vote first</p>
    <h2>Which move is stronger?</h2>
    <p>Let kids vote A or B. Then reveal the lesson.</p>
  `;
}

function renderRound() {
  const round = currentRound();
  if (!round) {
    return;
  }
  state.revealed = false;
  state.choices = shuffle([
    { key: "power", text: round.powerMove },
    { key: "wisdom", text: round.wisdomMove }
  ]);
  resetVotes();

  els.roundCount.textContent = `Round ${state.currentIndex + 1} of ${state.rounds.length}`;
  els.valueTag.textContent = round.value;
  els.situationTitle.textContent = round.title;
  els.situationText.textContent = round.situation;
  els.choiceAText.textContent = state.choices[0].text;
  els.choiceBText.textContent = state.choices[1].text;
  renderLessonPrompt();
}

function addVote(choice) {
  if (state.revealed || !currentRound()) {
    return;
  }
  state.votes[choice] += 1;
  state.selected = choice;
  renderVotes();
}

function revealLesson() {
  const round = currentRound();
  if (!round) {
    return;
  }
  const wisdomChoiceIndex = state.choices.findIndex((choice) => choice.key === "wisdom");
  const wisdomLetter = wisdomChoiceIndex === 0 ? "A" : "B";
  state.revealed = true;
  els.lessonPanel.classList.add("revealed");
  els.lessonPanel.innerHTML = `
    <p class="lesson-kicker">${round.value}</p>
    <h2>${round.lesson}</h2>
    <p><strong>Wisdom choice: ${wisdomLetter}</strong></p>
    <p>${round.explanation}</p>
    <p class="value-line">${round.valueLine}</p>
  `;
}

function nextRound() {
  if (!state.order.length) {
    return;
  }
  state.currentIndex = (state.currentIndex + 1) % state.order.length;
  renderRound();
}

function shuffleRounds() {
  if (!state.rounds.length) {
    return;
  }
  state.order = shuffle([...Array(state.rounds.length).keys()]);
  state.currentIndex = 0;
  renderRound();
}

async function init() {
  try {
    const response = await fetch("rounds.json");
    if (!response.ok) {
      throw new Error(`Could not load rounds.json (${response.status})`);
    }
    state.rounds = await response.json();
    state.order = shuffle([...Array(state.rounds.length).keys()]);
    renderRound();
  } catch (error) {
    els.situationTitle.textContent = "Game data missing";
    els.situationText.textContent = error.message;
    els.choiceAText.textContent = "Try again later";
    els.choiceBText.textContent = "Check rounds.json";
  }
}

els.choiceABtn.addEventListener("click", () => addVote("a"));
els.choiceBBtn.addEventListener("click", () => addVote("b"));
els.revealBtn.addEventListener("click", revealLesson);
els.nextBtn.addEventListener("click", nextRound);
els.resetVotesBtn.addEventListener("click", resetVotes);
els.shuffleBtn.addEventListener("click", shuffleRounds);

init();
