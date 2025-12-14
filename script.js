const holes = document.querySelectorAll('.hole');
const scoreDisplay = document.getElementById('score');
const timeDisplay = document.getElementById('time');
const startButton = document.getElementById('start');


let score = 0;
let timeLeft = 30;
let timerId = null;
let moleTimer = null;


function randomHole() {
holes.forEach(hole => hole.classList.remove('mole'));
const randomIndex = Math.floor(Math.random() * holes.length);
holes[randomIndex].classList.add('mole');
}


holes.forEach(hole => {
hole.addEventListener('click', () => {
if (hole.classList.contains('mole')) {
score++;
scoreDisplay.textContent = score;
hole.classList.remove('mole');
}
});
});


function startGame() {
score = 0;
timeLeft = 30;
scoreDisplay.textContent = score;
timeDisplay.textContent = timeLeft;


clearInterval(timerId);
clearInterval(moleTimer);


moleTimer = setInterval(randomHole, 800);


timerId = setInterval(() => {
timeLeft--;
timeDisplay.textContent = timeLeft;


if (timeLeft <= 0) {
clearInterval(timerId);
clearInterval(moleTimer);
alert(`Game Over! Your score: ${score}`);
}
}, 1000);
}


startButton.addEventListener('click', startGame);
