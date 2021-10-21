// Basic Scissors Paper Stone
// Create a basic version of Scissors Paper Stone where the user inputs one of "scissors", "paper", or "stone", the program internally randomly chooses scissors, paper, or stone, and the program outputs whether the user won, the program won, or it's a draw.
// Rules: scissors beats paper, paper beats stone, and stone beats scissors. If both parties choose the same object, it's a draw.
// Input Validation
// Sometimes the user types bad and types something other than "scissors", "paper", or "stone" during gameplay. Add input validation to kindly let the user know that there are only 3 input options, and ask them to try again.

//input scissors, paper or stone
//output you win, computer wins, draw
//computer draws randomly

var SCISSORS = `scissors`;
var PAPER = `paper`;
var STONE = `stone`;
var REVERSED_SCISSORS = `reversed scissors`;
var REVERSED_PAPER = `reversed paper`;
var REVERSED_STONE = `reversed stone`;

var main = function (input) {
  var computerAnswer = getComputerAnswers();
  if (
    !(
      input == SCISSORS ||
      input == PAPER ||
      input == STONE ||
      input == REVERSED_SCISSORS ||
      input == REVERSED_PAPER ||
      input == REVERSED_STONE
    )
  ) {
    return `Please type in 'scissors', 'paper', or 'stone' only.`;
  } else {
    if (
      input == SCISSORS ||
      (input == REVERSED_SCISSORS && computerAnswer == SCISSORS) ||
      input == PAPER ||
      (input == REVERSED_PAPER && computerAnswer == PAPER) ||
      input == STONE ||
      (input == REVERSED_STONE && computerAnswer == STONE)
    ) {
      myOutputValue = `It's a draw!`;
    }
    if (
      input == SCISSORS ||
      (input == REVERSED_STONE && computerAnswer == PAPER) ||
      input == STONE ||
      (input == REVERSED_PAPER && computerAnswer == SCISSORS) ||
      input == PAPER ||
      (input == SCISSORS && computerAnswer == STONE)
    ) {
      myOutputValue = `You win!`;
    }
    if (
      input == SCISSORS ||
      (input == REVERSED_PAPER && computerAnswer == STONE) ||
      input == STONE ||
      (input == REVERSED_SCISSORS && computerAnswer == PAPER) ||
      input == PAPER ||
      (input == REVERSED_STONE && computerAnswer == SCISSORS)
    ) {
      myOutputValue = `The computer wins!`;
    }
  }
  return `${myOutputValue} <br><br> You chose ${input}, and the computer chose ${computerAnswer}.`;
};
var getRandomInteger = function () {
  var randomInteger = Math.floor(Math.random() * 3);
  return randomInteger;
};

var getComputerAnswers = function () {
  var computerAnswers = getRandomInteger(2);
  if (computerAnswers == 1) {
    return SCISSORS;
  }
  if (computerAnswers == 2) {
    return PAPER;
  }
  return STONE;
};
