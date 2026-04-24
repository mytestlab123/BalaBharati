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
        choices: ["Courage", "Fame", "Comfort", "Speed"],
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
        choices: ["Treat them respectfully", "Use them only as decoration", "Keep them without learning", "Notice only their colors"],
        answer: "Treat them respectfully",
        success: "Good. Sacred symbols should be treated with respect and a humble mind."
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
        choices: ["Share joy kindly", "Save every sweet only for yourself", "Think only about new clothes", "Forget to thank helpers"],
        answer: "Share joy kindly",
        success: "Yes. Festivals are a good time for kindness, gratitude, and seva."
      }
    ]
  },
  ramayana: {
    storageKey: "balabharati-ramayana-best",
    questions: [
      {
        question: "Who is the prince of Ayodhya in the Ramayana?",
        choices: ["Rama", "Arjuna", "Bhima", "Chanakya"],
        answer: "Rama",
        success: "Correct. Rama is the prince of Ayodhya and is remembered for dharma."
      },
      {
        question: "Who went with Rama to the forest?",
        choices: ["Sita and Lakshmana", "Krishna and Arjuna", "Akbar and Birbal", "Chetak and Pratap"],
        answer: "Sita and Lakshmana",
        success: "Yes. Sita and Lakshmana went with Rama during the forest years."
      },
      {
        question: "Who is famous for devotion to Rama?",
        choices: ["Hanuman", "Duryodhana", "Kansa", "Ravana"],
        answer: "Hanuman",
        success: "Right. Hanuman is remembered for strength, devotion, and service."
      },
      {
        question: "What did Rama use to cross toward Lanka with help from others?",
        choices: ["A bridge", "A spaceship", "A tunnel", "A snow road"],
        answer: "A bridge",
        success: "Correct. The story tells of a bridge built with teamwork."
      },
      {
        question: "Which value is Rama often connected with?",
        choices: ["Dharma", "Comfort", "Fame", "Quick victory"],
        answer: "Dharma",
        success: "Good. Dharma means doing what is right."
      }
    ]
  },
  mahabharata: {
    storageKey: "balabharati-mahabharata-best",
    questions: [
      {
        question: "Who guided Arjuna in the Bhagavad Gita?",
        choices: ["Krishna", "Hanuman", "Valmiki", "Tenali Raman"],
        answer: "Krishna",
        success: "Correct. Krishna guided Arjuna with wisdom about duty and courage."
      },
      {
        question: "Which Pandava was famous for archery?",
        choices: ["Arjuna", "Nakula", "Sahadeva", "Bhima"],
        answer: "Arjuna",
        success: "Yes. Arjuna is remembered as a skilled archer."
      },
      {
        question: "Which Pandava was very strong?",
        choices: ["Bhima", "Yudhishthira", "Arjuna", "Nakula"],
        answer: "Bhima",
        success: "Right. Bhima is remembered for great strength."
      },
      {
        question: "What does the Mahabharata often teach us to think about?",
        choices: ["Right choices", "Only winning", "Only strength", "Fast answers"],
        answer: "Right choices",
        success: "Correct. The Mahabharata has many stories about choices and responsibility."
      },
      {
        question: "What should we do when we feel confused like Arjuna?",
        choices: ["Ask for wise guidance", "Choose in a hurry", "Think only of winning", "Avoid all questions"],
        answer: "Ask for wise guidance",
        success: "Good. Asking a wise person with humility can help us choose better."
      }
    ]
  },
  values: {
    storageKey: "balabharati-values-best",
    questions: [
      {
        question: "If a friend drops their books, what is a dharmic thing to do?",
        choices: ["Help pick them up", "Wait for someone else", "Only watch quietly", "Pick up only your own things"],
        answer: "Help pick them up",
        success: "Correct. Helping with humility is a kind and dharmic action."
      },
      {
        question: "What should you say when someone helps you?",
        choices: ["Thank you", "I saw it", "Maybe later", "I will go now"],
        answer: "Thank you",
        success: "Yes. Saying thank you shows gratitude and respect."
      },
      {
        question: "What does satya mean?",
        choices: ["Truth", "Peace", "Learning", "Service"],
        answer: "Truth",
        success: "Right. Satya means truth, spoken with care."
      },
      {
        question: "What is a respectful way to listen?",
        choices: ["Let the person finish", "Speak first", "Look around the room", "Think only of your answer"],
        answer: "Let the person finish",
        success: "Correct. Good listening shows respect and humility."
      },
      {
        question: "What is courage?",
        choices: ["Doing the right thing even when it is hard", "Being the strongest every time", "Never feeling afraid", "Winning every time"],
        answer: "Doing the right thing even when it is hard",
        success: "Good. Dharmic courage can be strong, kind, and humble."
      }
    ]
  },
  sanskrit: {
    storageKey: "balabharati-sanskrit-best",
    questions: [
      {
        question: "What does namaste mean in a simple greeting?",
        choices: ["A respectful hello", "A type of car", "A rainy day", "A sharp pencil"],
        answer: "A respectful hello",
        success: "Correct. Namaste is a respectful greeting."
      },
      {
        question: "What does shanti mean?",
        choices: ["Peace", "Speed", "Noise", "Heat"],
        answer: "Peace",
        success: "Yes. Shanti means peace."
      },
      {
        question: "What does dharma mean in a simple way?",
        choices: ["Doing what is right", "Eating quickly", "Sleeping late", "Winning every time"],
        answer: "Doing what is right",
        success: "Right. Dharma can mean right duty or right action."
      },
      {
        question: "What does vidya mean?",
        choices: ["Knowledge", "A toy", "A cloud", "A shoe"],
        answer: "Knowledge",
        success: "Correct. Vidya means knowledge or learning."
      },
      {
        question: "What does seva mean?",
        choices: ["Service", "A race", "A color", "A drum"],
        answer: "Service",
        success: "Good. Seva means service or helping with care."
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

function shuffleChoices(choices) {
  const shuffled = [...choices];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
  }

  return shuffled;
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

  shuffleChoices(current.choices).forEach((choice) => {
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
    updateFeedback("bad", `Good try. The answer here is ${current.answer}.`);
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
