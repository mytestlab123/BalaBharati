const quizSets = {
  "great-people": {
    storageKey: "balabharati-great-people-best",
    questions: [
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
        question: "Who taught a young India to be fearless and strong in spirit?",
        choices: [
          "Swami Vivekananda",
          "Tansen",
          "Birbal",
          "Varahamihira"
        ],
        answer: "Swami Vivekananda",
        success: "Yes. Swami Vivekananda spoke about strength, service, and confidence."
      },
      {
        question: "Which queen bravely fought to protect Jhansi?",
        choices: [
          "Rani Lakshmibai",
          "Gargi",
          "Meerabai",
          "Anandibai Joshi"
        ],
        answer: "Rani Lakshmibai",
        success: "Correct. Rani Lakshmibai is remembered for bravery and love for her people."
      },
      {
        question: "What is one quality these great people showed?",
        choices: ["Courage", "Laziness", "Fear of work", "Unkindness"],
        answer: "Courage",
        success: "Great. Courage means doing the right thing even when it is hard."
      }
    ]
  },
  symbols: {
    storageKey: "balabharati-symbols-best",
    questions: [
      {
        question: "Which flower is often used as a symbol of purity and learning?",
        choices: ["Lotus", "Cactus", "Mango", "Banyan leaf"],
        answer: "Lotus",
        success: "Correct. The lotus is often used as a calm and pure symbol."
      },
      {
        question: "What does a diya give during a puja or festival?",
        choices: ["Light", "Rain", "Snow", "Sand"],
        answer: "Light",
        success: "Yes. A diya gives light and reminds us of hope and goodness."
      },
      {
        question: "Which shell is blown in many Hindu traditions?",
        choices: ["Shankha", "Drum", "Flute", "Bell only"],
        answer: "Shankha",
        success: "Right. A shankha is a conch shell used in worship and celebration."
      },
      {
        question: "Which symbol is linked with Lord Shiva?",
        choices: ["Trishul", "Umbrella", "Pencil", "Boat"],
        answer: "Trishul",
        success: "Correct. The trishul is a symbol linked with Lord Shiva."
      },
      {
        question: "What should we do with sacred symbols?",
        choices: ["Treat them respectfully", "Throw them around", "Laugh at them", "Hide them always"],
        answer: "Treat them respectfully",
        success: "Good. Sacred symbols should be treated with respect."
      }
    ]
  },
  festivals: {
    storageKey: "balabharati-festivals-best",
    questions: [
      {
        question: "Which festival is known as the festival of lights?",
        choices: ["Deepavali", "Holi", "Raksha Bandhan", "Pongal"],
        answer: "Deepavali",
        success: "Correct. Deepavali is celebrated with light, joy, and family time."
      },
      {
        question: "Which festival is famous for colors?",
        choices: ["Holi", "Navaratri", "Janmashtami", "Onam"],
        answer: "Holi",
        success: "Yes. Holi is known for colors, joy, and togetherness."
      },
      {
        question: "Which South Indian harvest festival thanks nature and the Sun?",
        choices: ["Pongal", "Raksha Bandhan", "Dussehra", "Maha Shivaratri"],
        answer: "Pongal",
        success: "Right. Pongal is a harvest festival of thanks."
      },
      {
        question: "Which festival celebrates the bond between brothers and sisters?",
        choices: ["Raksha Bandhan", "Holi", "Gudi Padwa", "Vishu"],
        answer: "Raksha Bandhan",
        success: "Correct. Raksha Bandhan celebrates care between siblings."
      },
      {
        question: "What is a good festival habit?",
        choices: ["Share joy kindly", "Waste food", "Push others", "Make fun of people"],
        answer: "Share joy kindly",
        success: "Yes. Festivals are a good time for kindness and gratitude."
      }
    ]
  }
};

const quizKey = document.body.dataset.quiz || "great-people";
const quiz = quizSets[quizKey] || quizSets["great-people"];
const questions = quiz.questions;

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
let bestScore = Number(localStorage.getItem(quiz.storageKey) || "0");

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
    localStorage.setItem(quiz.storageKey, String(bestScore));
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
