document.addEventListener('DOMContentLoaded', () => {
  displayHighScores();
  document.getElementById('clear').addEventListener('click', clearHighScores);
});

function displayHighScores() {
  const highScoresList = document.getElementById('highscores');
  const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
  // Sort scores in descending order
  highScores.sort((a, b) => b.score - a.score);

  highScores.forEach((score) => {
    const scoreElement = document.createElement('li');
    scoreElement.textContent = `${score.initials} - ${score.score}`;
    highScoresList.appendChild(scoreElement);
  });
}

function clearHighScores() {
  localStorage.removeItem('highScores');
  // Clear the list on the page
  document.getElementById('highscores').innerHTML = '';
}
