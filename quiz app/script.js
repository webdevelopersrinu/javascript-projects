let questions = [
  {
    question: "how to java script in out said of browser?",
    asswers: [
      { Text: "express.js", correct: false },
      { Text: "node.js", correct: true },
      { Text: "next.js", correct: false },
      { Text: "react.js", correct: false },
    ],
  },
  {
    question: "who is inline element ?",
    asswers: [
      { Text: "div", correct: false },
      { Text: "p", correct: false },
      { Text: "h1", correct: false },
      { Text: "img", correct: true },
    ],
  },
];
let question = document.getElementById("question");
let answersBtn = document.getElementById("ans-btns");
let nextBtn = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let Score = 0;

// strat quiz
function stratQuiz() {
  let Score = 0;
  let currentQuestionIndex = 0;
  nextBtn.innerText = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionOn = currentQuestionIndex + 1;
  question.innerText = questionOn + ". " + currentQuestion.question;

  currentQuestion.asswers.forEach((ans) => {
    let button = document.createElement("button");
    button.classList.add("btn");
    button.innerText = ans.Text;
    answersBtn.appendChild(button);
    if (ans.correct) {
      button.dataset.correct = ans.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function selectAnswer(e) {
  const selecteBtn = e.target;
  const isCorrect = selecteBtn.dataset.correct === "true";
  if (isCorrect) {
    selecteBtn.classList.add("correct");
  } else {
    selecteBtn.classList.add("incorrect");
  }
  Array.from(answersBtn.children).forEach(btn =>{
    if(btn.dataset.correct === "true"){
      btn.classList.add("correct")
    }
    btn.disabled=true;
  })
  nextBtn.style.display="inline"
}

function resetState() {
  nextBtn.style.display = "none";
  while (answersBtn.firstChild) {
    answersBtn.removeChild(answersBtn.firstChild);
  }
}
stratQuiz();
