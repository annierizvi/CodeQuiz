// Tracks the current question index in the quiz
let currentQuestionIndex = 0;
// Reference for the quiz timer interval
let timer;
// Tracks the remaining time for the quiz
let timeLeft;

// Starts the quiz
function startQuiz() {
  // Sets the total time based on the number of questions
  timeLeft = questions.length * 15;
  // Hides the start screen
  document.getElementById('start-screen').classList.add('hide');
  // Displays the questions section
  document.getElementById('questions').classList.remove('hide');

  timer = setInterval(updateTimer, 1000);
  displayQuestion();
}

function updateTimer() {
  timeLeft--;
  document.getElementById('time').textContent = timeLeft;

  if (timeLeft <= 0) {
    endQuiz();
  }
}

// Displays the current question and its choices
function displayQuestion() {
  let question = questions[currentQuestionIndex];
  document.getElementById('question-title').textContent = question.question;

  let choicesElement = document.getElementById('choices');
  choicesElement.innerHTML = '';

  question.choices.forEach((choice) => {
    let button = document.createElement('button');
    button.textContent = choice;
    button.onclick = selectAnswer;
    choicesElement.appendChild(button);
  });
}

// Handles the selection of an answer
function selectAnswer() {
  let selectedAnswer = this.textContent;
  let correctAnswer = questions[currentQuestionIndex].answer;

  if (selectedAnswer !== correctAnswer) {
    document.getElementById('correct-sound').play();
    // Deducts 5 seconds for a wrong answer
    timeLeft = Math.max(timeLeft - 5, 0);
  } else {
    document.getElementById('incorrect-sound').play();
  }
  currentQuestionIndex++;
  // Ends the quiz if all questions are answered or time runs out
  if (currentQuestionIndex === questions.length || timeLeft <= 0) {
    endQuiz();
  } else {
    displayQuestion();
  }
}
// Ends the quiz
function endQuiz() {
  // Stops the timer
  clearInterval(timer);
  document.getElementById('questions').classList.add('hide');
  document.getElementById('end-screen').classList.remove('hide');
  document.getElementById('final-score').textContent =
    timeLeft > 0 ? timeLeft : 0;
}

function submitScore() {
  let initials = document.getElementById('initials').value.trim();
  if (initials) {
    let highScores = JSON.parse(localStorage.getItem('highScores')) || [];
    let newScore = {
      score: timeLeft > 0 ? timeLeft : 0,
      initials: initials,
    };

    highScores.push(newScore);
    localStorage.setItem('highScores', JSON.stringify(highScores));

    document.getElementById('initials').value = '';
    alert('Score submitted successfully!');

    window.location.href = 'highscores.html';
  } else {
    alert('Please enter your initials!');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('start').addEventListener('click', startQuiz);
  document.getElementById('submit').addEventListener('click', submitScore);
});
