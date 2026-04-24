const questions = [
  {
    question: "Who built a strong Swarajya with forts and brave planning?",
    choices: [
      "Chhatrapati Shivaji Maharaj",
      "Kalidasa",
      "Aryabhata",
      "Rani Durgavati"
    ],
    answer: "Chhatrapati Shivaji Maharaj",
    success: "Correct. Shivaji Maharaj is remembered for courage, smart forts, and care for his people."
  },
  {
    question: "Which brave ruler is remembered with his loyal horse Chetak?",
    choices: [
      "Maharana Pratap",
      "Guru Gobind Singh",
      "Birbal",
      "Swami Vivekananda"
    ],
    answer: "Maharana Pratap",
    success: "Yes. Maharana Pratap is remembered for courage and never giving up."
  },
  {
    question: "Who was the tenth Sikh Guru?",
    choices: [
      "Guru Gobind Singh",
      "Chanakya",
      "Tansen",
      "Raja Raja Chola"
    ],
    answer: "Guru Gobind Singh",
    success: "Right. Guru Gobind Singh is remembered for bravery, faith, and service."
  },
  {
    question: "What is one quality all three heroes showed?",
    choices: ["Courage", "Laziness", "Fear of work", "Unkindness"],
    answer: "Courage",
    success: "Great. Courage means doing the right thing even when it is hard."
  },
  {
    question: "What should we do when we learn about great people?",
    choices: [
      "Learn good values from them",
      "Fight with friends",
      "Stop asking questions",
      "Ignore history"
    ],
    answer: "Learn good values from them",
    success: "Correct. We can learn courage, kindness, discipline, and service."
  }
];

const questionNumberEl = document.getElementById("question-number");
const questionTotalEl = document.getElementById("question-total");
const scoreEl = document.getElementById("score");
const bestScoreEl = document.getElementById("best-score");
const questionTextEl = document.getElementById("question-text");
const answersEl = document.getElementById("answers");
const feedbackEl = document.getElementById("feedback");
const nextButton = document.getElementById("next-button");
const restartButton = document.getElementById("restart-button");

let currentIndex = 0;
let score = 0;
let answered = false;
let bestScore = Number(localStorage.getItem("balabharati-great-people-best") || "0");

questionTotalEl.textContent = String(questions.length);
bestScoreEl.textContent = String(bestScore);

function updateFeedback(type, message) {
  feedbackEl.className = `feedback ${type}`;
  feedbackEl.textContent = message;
}

function renderQuestion() {
  const current = questions[currentIndex];
  answered = false;
  nextButton.disabled = true;
  questionNumberEl.textContent = String(currentIndex + 1);
  scoreEl.textContent = String(score);
  questionTextEl.textContent = current.question;
  answersEl.innerHTML = "";
  updateFeedback("", "Choose the best answer.");

  current.choices.forEach((choice) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer-button";
    button.textContent = choice;
    button.addEventListener("click", () => handleAnswer(button, choice));
    answersEl.appendChild(button);
  });
}

function handleAnswer(button, choice) {
  if (answered) {
    return;
  }

  answered = true;
  const current = questions[currentIndex];
  const buttons = [...answersEl.querySelectorAll(".answer-button")];

  buttons.forEach((item) => {
    item.disabled = true;
    if (item.textContent === current.answer) {
      item.classList.add("correct");
    }
  });

  if (choice === current.answer) {
    score += 1;
    scoreEl.textContent = String(score);
    button.classList.add("correct");
    updateFeedback("good", current.success);
  } else {
    button.classList.add("wrong");
    updateFeedback("bad", `Good try. The answer is ${current.answer}.`);
  }

  nextButton.disabled = false;
}

function saveBestScore() {
  if (score > bestScore) {
    bestScore = score;
    localStorage.setItem("balabharati-great-people-best", String(bestScore));
    bestScoreEl.textContent = String(bestScore);
  }
}

function nextQuestion() {
  if (!answered) {
    return;
  }

  currentIndex += 1;

  if (currentIndex >= questions.length) {
    saveBestScore();
    questionNumberEl.textContent = String(questions.length);
    questionTextEl.textContent = "Quiz complete!";
    answersEl.innerHTML = "";
    updateFeedback(
      "good",
      `You scored ${score} out of ${questions.length}. Tap Play Again to try once more.`
    );
    nextButton.disabled = true;
    return;
  }

  renderQuestion();
}

function restartGame() {
  currentIndex = 0;
  score = 0;
  renderQuestion();
}

nextButton.addEventListener("click", nextQuestion);
restartButton.addEventListener("click", restartGame);

renderQuestion();
