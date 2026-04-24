const questions = [
  {
    question: "Which color is the sky on a clear day?",
    choices: ["Blue", "Green", "Orange", "Pink"],
    answer: "Blue",
    success: "Yes! The sky looks blue on a clear day."
  },
  {
    question: "How many legs does a cat have?",
    choices: ["Two", "Three", "Four", "Six"],
    answer: "Four",
    success: "Correct! A cat has four legs."
  },
  {
    question: "What comes after 5?",
    choices: ["4", "6", "7", "8"],
    answer: "6",
    success: "Great job! 6 comes after 5."
  },
  {
    question: "Which animal says moo?",
    choices: ["Dog", "Cow", "Cat", "Bird"],
    answer: "Cow",
    success: "Correct! A cow says moo."
  },
  {
    question: "Which shape has three sides?",
    choices: ["Circle", "Square", "Triangle", "Rectangle"],
    answer: "Triangle",
    success: "Nice! A triangle has three sides."
  },
  {
    question: "Which one is a fruit?",
    choices: ["Apple", "Car", "Pencil", "Chair"],
    answer: "Apple",
    success: "Correct! Apple is a fruit."
  },
  {
    question: "How many days are in one week?",
    choices: ["5", "6", "7", "8"],
    answer: "7",
    success: "Right! A week has 7 days."
  },
  {
    question: "What do we use to read books?",
    choices: ["Eyes", "Shoes", "Ears only", "Spoons"],
    answer: "Eyes",
    success: "Yes! We use our eyes to read books."
  }
];

const questionNumberEl = document.getElementById("question-number");
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
let bestScore = Number(localStorage.getItem("bala-bharati-best-score") || "0");

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
  updateFeedback("neutral", "Choose the best answer.");

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
    updateFeedback("bad", `Oops. The right answer is ${current.answer}.`);
  }

  nextButton.disabled = false;
}

function saveBestScore() {
  if (score > bestScore) {
    bestScore = score;
    localStorage.setItem("bala-bharati-best-score", String(bestScore));
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
    questionTextEl.textContent = "Game finished!";
    answersEl.innerHTML = "";
    updateFeedback(
      "good",
      `You scored ${score} out of ${questions.length}. Tap Play Again to start over.`
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
