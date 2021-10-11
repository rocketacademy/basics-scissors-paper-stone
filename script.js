'use strict';

// const main = function (input) {
//   let myOutputValue = input;
//   return myOutputValue;
// };

////////////////////

// game variables
let playerChoice = '';
let computerChoice = '';
let state = 0;

// DOM elements
const inputFieldEl = document.getElementById('input-field');
const submitButtonEl = document.querySelector('#submit-button');
const reverseButtonEl = document.getElementById('btn-reverse');
const output = document.querySelector('#output-div');
const input = document.querySelector('#input-field');

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

// play game function
const playGame = function (choice, computerChoice) {
  if (choice === 'scissors' || choice === 'paper' || choice === 'stone') {
    // determine winner
    output.textContent = `You chose ${choice} and the computer chose ${computerChoice}. ${determineWinner(
      computerChoice,
      choice
    )}`;
  } else {
    alert('⚠ please input correctly');
    output.textContent = '';
  }
};
// get player choice

submitButtonEl.addEventListener('click', function () {
  // Set result to input value
  // add below in a function TODO

  // start of function ----->
  playerChoice = input.value;
  // Display result in output element
  // Reset input value
  input.value = '';
  // get computer choice
  computerChoice = getComputerChoice();
  // get player choice
  let choice = playerChoice.toLowerCase();
  //end of function <-----

  // play game
  playGame(choice, computerChoice);
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
