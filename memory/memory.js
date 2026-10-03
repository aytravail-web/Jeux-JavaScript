const animaux = ["🐶", "🐱", "🐭", "🐹", "🐰", "🦊", "🐻", "🐼", "🐨", "🐯", "🦁", "🐮", "🐷", "🐵", "🐸"];

const grid = document.getElementById("grid");
const restartBtn = document.getElementById("restart");
const replayBtn = document.getElementById("replay");
const difficultySelect = document.getElementById("difficulty");

const timeDisplay = document.getElementById("time");
const movesDisplay = document.getElementById("moves");
const pairsDisplay = document.getElementById("pairs");
const bestTimeDisplay = document.getElementById("bestTime");
const bestMovesDisplay = document.getElementById("bestMoves");

const modal = document.getElementById("modal");
const summary = document.getElementById("summary");

let deck = [];
let firstCard = null;
let moves = 0;
let pairsFound = 0;
let timer = null;
let startTime;
let gridSize = 4;

/* INITIALISATION DU JEU */

function startNewGame() {
  stopTimer();

  gridSize = parseInt(difficultySelect.value);
  deck = newDeck();

  firstCard = null;
  moves = 0;
  pairsFound = 0;

  timeDisplay.textContent = 0;
  movesDisplay.textContent = 0;
  pairsDisplay.textContent = 0;

  modal.classList.add("hidden");

  grid.style.gridTemplateColumns = `repeat(${gridSize}, 80px)`;
  initCards();
  displayBestScores();
}


/* CREATION DU DECK */


function newDeck() {
  const totalCards = gridSize * gridSize;
  const neededPairs = totalCards / 2;

  let temp = animaux.slice(0, neededPairs);
  temp = [...temp, ...temp];
  temp.sort(() => Math.random() - 0.5);

  return temp;
}

/* CREATION DES CARTES */

function initCards() {
  grid.innerHTML = "";

  for (let i = 0; i < deck.length; i++) {
    const btn = document.createElement("button");
    btn.classList.add("card");
    btn.textContent = "❓";
    btn.dataset.index = i;

    btn.addEventListener("click", onCardClick);
    grid.appendChild(btn);
  }
}

/* TIMER */


function startTimer() {
  startTime = Date.now();

  timer = setInterval(() => {
    const elapsed = Math.floor((Date.now() - startTime) / 1000);
    timeDisplay.textContent = elapsed;
  }, 1000);
}

function stopTimer() {
  clearInterval(timer);
  timer = null;
}


/* GESTION DES CLICS */

function onCardClick(event) {
  const btn = event.target;

  if (!timer) startTimer();

  if (!firstCard) {
    manageFirstCard(btn);
  } else {
    manageSecondCard(btn);
  }
}

function manageFirstCard(btn) {
  flip(btn);
  firstCard = btn;
}

function manageSecondCard(btn) {
  if (btn === firstCard) return;

  flip(btn);
  moves++;
  movesDisplay.textContent = moves;

  if (isMatchedCards(firstCard, btn)) {
    setMatchedCards(firstCard, btn);
  } else {
    setUnmatchedCards(firstCard, btn);
  }
}


/* LOGIQUE DES CARTES */


function flip(btn) {
  btn.textContent = deck[btn.dataset.index];
  btn.disabled = true;
}

function unFlip(btn) {
  btn.textContent = "❓";
  btn.disabled = false;
}

function isMatchedCards(first, second) {
  return deck[first.dataset.index] === deck[second.dataset.index];
}

function setMatchedCards(first, second) {
  first.classList.add("matched");
  second.classList.add("matched");

  pairsFound++;
  pairsDisplay.textContent = pairsFound;

  firstCard = null;

  if (pairsFound === deck.length / 2) {
    finishGame();
  }
}

function setUnmatchedCards(first, second) {
  setTimeout(() => {
    unFlip(first);
    unFlip(second);
    firstCard = null;
  }, 1000);
}


/* FIN DE PARTIE */


function finishGame() {
  stopTimer();

  const finalTime = parseInt(timeDisplay.textContent);
  saveScore(moves, finalTime);

  summary.textContent =
    `Temps : ${finalTime} s | Coups : ${moves}`;

  modal.classList.remove("hidden");
}


/* LOCAL STORAGE */


function saveScore(nbCoups, temps) {
  const bestMoves = localStorage.getItem("bestMoves");
  const bestTime = localStorage.getItem("bestTime");

  if (!bestMoves || nbCoups < bestMoves) {
    localStorage.setItem("bestMoves", nbCoups);
  }

  if (!bestTime || temps < bestTime) {
    localStorage.setItem("bestTime", temps);
  }

  displayBestScores();
}

function displayBestScores() {
  bestMovesDisplay.textContent = localStorage.getItem("bestMoves") || "-";
  bestTimeDisplay.textContent = localStorage.getItem("bestTime") || "-";
}


/* EVENTS */


restartBtn.addEventListener("click", startNewGame);
replayBtn.addEventListener("click", startNewGame);

startNewGame();