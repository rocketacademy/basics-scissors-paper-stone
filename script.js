'use strict';

// const main = function (input) {
//   let myOutputValue = input;
//   return myOutputValue;
// };

////////////////////

// game variables
let playerChoice = '';
let computerChoice = '';

// elements
const inputFieldEl = document.getElementById('input-field');
const button = document.querySelector('#submit-button');

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

// get player choice
button.addEventListener('click', function () {
  // Set result to input value
  let input = document.querySelector('#input-field');
  playerChoice = input.value;
  // Display result in output element
  let output = document.querySelector('#output-div');
  // ensures output = result
  output.textContent = playerChoice;
  // Reset input value
  input.value = '';
  // get computer choice
  computerChoice = getComputerChoice();
  // get player choice
  let choice = playerChoice.toLowerCase();

  // play game
  if (choice === 'scissors' || choice === 'paper' || choice === 'stone') {
    // determine winner
    output.textContent = `You chose ${playerChoice} and the computer chose ${computerChoice}. ${determineWinner(
      computerChoice,
      playerChoice
    )}`;
  } else {
    alert('⚠ please input correctly');
    output.textContent = '';
  }
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

// game logic
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
