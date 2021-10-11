'use strict';

// const main = function (input) {
//   let myOutputValue = input;
//   return myOutputValue;
// };

////////////////////

// game variables
let playerChoice, computerChoice;
let normalMode = true;

// DOM elements
const inputFieldEl = document.getElementById('input-field');
const outputEl = document.querySelector('#output-div');
const inputEl = document.querySelector('#input-field');
const headerEl = document.querySelector('#input-field');
const containerEl = document.querySelector('.container');
const btnSubmit = document.querySelector('#submit-button');
const btnReverse = document.getElementById('btn-reverse');

// add 'enter' function to input-field
inputFieldEl.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    document.getElementById('submit-button').click();
  }
});

////////////////////

// GAME FUNCTIONALITY

// random number generator
const randomNumberGen = function () {
  return Math.trunc(Math.random() * 3);
};

// upon reverse click
// change normalMode to false
btnReverse.addEventListener('click', function () {
  normalMode = normalMode === true ? false : true;
  //add .reverse to container element
  containerEl.classList.toggle('reverse');

  normalMode === true
    ? (inputFieldEl.placeholder = 'choose scissors, paper or stone')
    : (inputFieldEl.placeholder = 'choose scissors, paper or stone (reverse)');
});

// play game function incl reverse
const playGame = function (choice, computerChoice) {
  if (choice === 'scissors' || choice === 'paper' || choice === 'stone') {
    // determine winner incl reverse
    outputEl.textContent = `You chose ${choice} and the computer chose ${computerChoice}. ${
      normalMode === true
        ? determineWinner(computerChoice, choice)
        : determineWinnerReverse(computerChoice, choice)
    }`;
  } else {
    alert('⚠ please input correctly');
    outputEl.textContent = '';
  }
};

// get player choice
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
});

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
    return 'The game is a draw, try again! 💪';
  }
  if (playerChoice === 'stone') {
    if (computerChoice === 'paper') {
      return 'The computer won! 😢';
    } else {
      return 'You won! 🎉🍾';
    }
  }
  if (playerChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'The computer won! 😢';
    } else {
      return 'You won! 🎉🍾';
    }
  }
  if (playerChoice === 'scissors') {
    if (computerChoice === 'stone') {
      return 'The computer won! 😢';
    } else {
      return 'You won! 🎉🍾';
    }
  }
};

// game logic reversed
const determineWinnerReverse = function (computerChoice, playerChoice) {
  if (computerChoice === playerChoice) {
    return 'The game is a draw, try again! 💪';
  }
  if (playerChoice === 'stone') {
    if (computerChoice === 'paper') {
      return 'You won! 🎉🍾';
    } else {
      return 'The computer won! 😢';
    }
  }
  if (playerChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'You won! 🎉🍾';
    } else {
      return 'The computer won! 😢';
    }
  }
  if (playerChoice === 'scissors') {
    if (computerChoice === 'stone') {
      return 'You won! 🎉🍾';
    } else {
      return 'The computer won! 😢';
    }
  }
};
