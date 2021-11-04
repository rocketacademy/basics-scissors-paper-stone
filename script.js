'use strict';

// const main = function (input) {
//   let myOutputValue = input;
//   return myOutputValue;
// };

////////////////////

// game variables
let playerChoice,
  computerChoice,
  drawScore = 0,
  playerScore = 0,
  computerScore = 0;

let normalMode = true;

// DOM elements
const inputFieldEl = document.getElementById('input-field');
const outputEl = document.querySelector('#output-div');
const inputEl = document.querySelector('#input-field');
const headerEl = document.querySelector('#input-field');
const containerEl = document.querySelector('.container');
const btnSubmit = document.querySelector('#submit-button');
const btnReverse = document.getElementById('btn-reverse');
const playerNameEl = document.querySelector('#player-name');
const playerScoreEl = document.getElementById('player-score');
const computerScoreEl = document.getElementById('computer-score');
const drawScoreEl = document.getElementById('draw-score');
const btnNewGame = document.querySelector('.new-game');

// add 'enter' function to input-field
inputFieldEl.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    document.getElementById('submit-button').click();
  }
});

// name input
playerNameEl.textContent = prompt('Please enter your name');

////////////////////

// GAME FUNCTIONALITY

const resetGame = function () {
  playerScore = 0;
  computerScore = 0;
  drawScore = 0;
  playerScoreEl.textContent = playerScore;
  computerScoreEl.textContent = computerScore;
  drawScoreEl.textContent = drawScore;
  outputEl.textContent = '';
};
// random number generator
const randomNumberGen = function () {
  return Math.trunc(Math.random() * 3);
};
// new game
btnNewGame.addEventListener('click', function () {
  resetGame();
  containerEl.classList.remove('reverse');
});

// reverse game
btnReverse.addEventListener('click', function () {
  // resetGame();
  normalMode = normalMode === true ? false : true;
  //add .reverse to container element
  containerEl.classList.toggle('reverse');
  normalMode === true
    ? (inputFieldEl.placeholder = 'choose scissors, paper or stone')
    : (inputFieldEl.placeholder = 'choose scissors, paper or stone (reverse)');
  outputEl.textContent = '';
});

// get player choice + scoreboard
btnSubmit.addEventListener('click', function () {
  // Set result to input value
  playerChoice = inputEl.value;
  // Reset input value
  inputEl.value = '';
  // get computer choice
  computerChoice = getComputerChoice();
  // get player choice
  playerChoice = playerChoice.toLowerCase();

  playGame(playerChoice, computerChoice);

  // scoreboard
  playerScoreEl.textContent = playerScore;
  computerScoreEl.textContent = computerScore;
  drawScoreEl.textContent = drawScore;
});

// play game incl reverse
const playGame = function (playerChoice, computerChoice) {
  if (
    playerChoice === 'scissors' ||
    playerChoice === 'paper' ||
    playerChoice === 'stone'
  ) {
    // determine winner incl reverse
    outputEl.textContent = `You chose ${playerChoice} and the computer chose ${computerChoice}. ${
      normalMode === true
        ? determineWinner(computerChoice, playerChoice)
        : determineWinnerReverse(computerChoice, playerChoice)
    }`;
  } else {
    alert('⚠ please input correctly');
    outputEl.textContent = '';
  }
};

// get computer choice
const getComputerChoice = function () {
  let randomNumber = randomNumberGen();
  switch (randomNumber) {
    case 0:
      return 'scissors';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'stone';
      break;
  }
};
// console.log(computerSelect());

// game logic normal
const determineWinner = function (computerChoice, playerChoice) {
  if (computerChoice === playerChoice) {
    drawScore++;
    return 'The game is a draw, try again! 💪';
  }
  if (playerChoice === 'stone') {
    if (computerChoice === 'paper') {
      computerScore++;
      return 'The computer won! 😢';
    } else {
      playerScore++;
      return 'You won! 🎉🍾';
    }
  }
  if (playerChoice === 'paper') {
    if (computerChoice === 'scissors') {
      computerScore++;
      return 'The computer won! 😢';
    } else {
      playerScore++;
      return 'You won! 🎉🍾';
    }
  }
  if (playerChoice === 'scissors') {
    if (computerChoice === 'stone') {
      computerScore++;
      return 'The computer won! 😢';
    } else {
      playerScore++;
      return 'You won! 🎉🍾';
    }
  }
};

// game logic reversed
const determineWinnerReverse = function (computerChoice, playerChoice) {
  if (computerChoice === playerChoice) {
    drawScore++;
    return 'The game is a draw, try again! 💪';
  }
  if (playerChoice === 'stone') {
    if (computerChoice === 'paper') {
      playerScore++;
      return 'You won! 🎉🍾';
    } else {
      computerScore++;
      return 'The computer won! 😢';
    }
  }
  if (playerChoice === 'paper') {
    if (computerChoice === 'scissors') {
      playerScore++;
      return 'You won! 🎉🍾';
    } else {
      computerScore++;
      return 'The computer won! 😢';
    }
  }
  if (playerChoice === 'scissors') {
    if (computerChoice === 'stone') {
      playerScore++;
      return 'You won! 🎉🍾';
    } else {
      computerScore++;
      return 'The computer won! 😢';
    }
  }
};
