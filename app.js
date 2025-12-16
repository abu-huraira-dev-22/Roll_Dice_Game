let player1Turn = true;

let player1Area = document.querySelector("#player1");
let player2Area = document.querySelector("#player2");
player1Area.classList.add("active");

const diceImage = document.querySelector("img");

const player1CurrentScoreUI = document.querySelector("#player1CurrentScoreUI");

const player2CurrentScoreUI = document.querySelector("#player2CurrentScoreUI");

const player1TotalScoreUI = document.querySelector("#player1TotalScoreUI");
const player2TotalScoreUI = document.querySelector("#player2TotalScoreUI");

let player1Name = prompt("Enter your name");
let player2Name = prompt("Enter your name");
document.querySelector("#player1Name").textContent = player1Name;
document.querySelector("#player2Name").textContent = player2Name;

let totalScorePlayer1 = 0;
let totalScorePlayer2 = 0;
let currentScore = 0;
let winnerScore = 20;

function rollDiceHandler() {
  const randomNaumber = Math.ceil(Math.random() * 6);
  diceImage.src = `./images/${randomNaumber}.webp`;
  if (randomNaumber === 1) {
    currentScore = 0;
    if (player1Turn) {
      player1CurrentScoreUI.textContent = currentScore;
      player1Turn = false;
    } else {
      player2CurrentScoreUI.textContent = currentScore;
      player1Turn = true;
    }
    player1Area.classList.toggle("active");
    player2Area.classList.toggle("active");
    return;
  }
  currentScore += randomNaumber;
  if (player1Turn) {
    player1CurrentScoreUI.textContent = currentScore;
  } else {
    player2CurrentScoreUI.textContent = currentScore;
  }
}

function holdDiceHandler() {
  if (player1Turn) {
    totalScorePlayer1 += currentScore;
    player1TotalScoreUI.textContent = totalScorePlayer1;
    currentScore = 0;
    player1CurrentScoreUI.textContent = 0;
    if (totalScorePlayer1 >= winnerScore) {
      alert(`${player1Name} is the winner`);
      return;
    }
    player1Turn = false;
  } else {
    totalScorePlayer2 += currentScore;
    player2TotalScoreUI.textContent = totalScorePlayer2;
    currentScore = 0;
    player2CurrentScoreUI.textContent = 0;
    if (totalScorePlayer2 >= winnerScore) {
      alert(`${player2Name} is the winner`);
      return;
    }
    player1Turn = true;
  }
  player1Area.classList.toggle("active");
  player2Area.classList.toggle("active");
}

function newGameHandler() {
  player1Name = prompt("Enter your name");
  player2Name = prompt("Enter your name");
  document.querySelector("#player1Name").textContent = player1Name;
  document.querySelector("#player2Name").textContent = player2Name;
  totalScorePlayer1 = 0;
  totalScorePlayer2 = 0;
  player1TotalScoreUI.textContent = 0;
  player2TotalScoreUI.textContent = 0;
  player1CurrentScoreUI.textContent = 0;
  player2CurrentScoreUI.textContent = 0;
  currentScore = 0;
  player1Turn = true;
}
