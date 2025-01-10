const questions = [
  {
    questions: "What does HTML stand for?",
    answers: [
      { text: "Hyper Text Markup Language  ", correct: true },
      { text: "Hyperlinks and Text Markup Language", correct: false },
      { text: "Home Tool Markup Language", correct: false },
      { text: "Hyperlinks Text and Markup Language", correct: false },
    ],
  },
  {
    questions: "Who is making the Web standards?",
    answers: [
      { text: "Google", correct: false },
      { text: "Microsoft", correct: false },
      { text: "The World Wide Web Consortium  ", correct: true },
      { text: "Mozilla", correct: false },
    ],
  },
  {
    questions: "What is the font-size of the H1 heading tag?",
    answers: [
      { text: "3.5 em", correct: false },
      { text: "2.17 em", correct: false },
      { text: "2 em", correct: true },
      { text: "1.5 em", correct: false },
    ],
  },
  {
    questions: "How many heading tags are there in HTML5?",
    answers: [
      { text: "2", correct: false },
      { text: "6  ", correct: true },
      { text: "3", correct: false },
      { text: "5", correct: false },
    ],
  },
  {
    questions: "How many attributes are there in HTML5?",
    answers: [
      { text: "2", correct: false },
      { text: "5", correct: false },
      { text: "1", correct: false },
      { text: "None of the Above ", correct: true },
    ],
  },
  {
    questions:
      "Which of the following attributes is used to add link to any element?",
    answers: [
      { text: "link", correct: false },
      { text: "ref", correct: false },
      { text: "href", correct: true },
      { text: "newref ", correct: false },
    ],
  },
  {
    questions: "Which input type defines a slider control?",
    answers: [
      { text: "slider ", correct: false },
      { text: "controls", correct: false },
      { text: "search", correct: false },
      { text: "range   ", correct: true },
    ],
  },
  {
    questions:
      "In HTML, which attribute is used to specify that an input field must be filled out?",
    answers: [
      { text: "placeholder  ", correct: false },
      { text: "validate", correct: false },
      { text: "required  ", correct: true },
      { text: "formvalidate ", correct: false },
    ],
  },
  {
    questions:
      "In HTML, you can embed SVG elements directly into an HTML page.",
    answers: [
      { text: "True  ", correct: true },
      { text: "False", correct: false },
    ],
  },
  {
    questions:
      "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
    answers: [
      { text: "title  ", correct: false },
      { text: "longdesc", correct: false },
      { text: "alt    ", correct: true },
      { text: "src ", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}
function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.questions;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";

  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}
function showScore() {
  resetState();
  if (score < 5) {
    questionElement.innerHTML = `You are failed! </br> You scored ${score} out of ${questions.length}!`;
  } else if (score < 7) {
    questionElement.innerHTML = `You are third division passed </br> You scored ${score} out of ${questions.length}!`;
  } else if (score < 9) {
    questionElement.innerHTML = `You are second division passed </br> You scored ${score} out of ${questions.length}!`;
  } else {
    questionElement.innerHTML = `You are first division passed </br> You scored ${score} out of ${questions.length}!`;
  }

  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}
nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
