document.addEventListener('DOMContentLoaded', () => {
  displayHighScores();
  document.getElementById('clear').addEventListener('click', clearHighScores);
});

function displayHighScores() {
  const highScoresList = document.getElementById('highscores');
  const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

  highScores.sort((a, b) => b.score - a.score);

  highScores.forEach((score) => {
    const scoreElement = document.createElement('li');
    scoreElement.textContent = `${score.initials} - ${score.score}`;
    highScoresList.appendChild(scoreElement);
  });
}

function clearHighScores() {
  localStorage.removeItem('highScores');
  document.getElementById('highscores').innerHTML = '';
}
