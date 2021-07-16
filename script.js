// Function to generate random number from 1 to 3 because there are 3 options - scissors, paper, stone
var generateRandomInteger = function () {
  // Generate a decimal from 0 to 3, inclusive of 0 and 3
  var randomDecimal = Math.random() * 3;
  // Floor that decimal to the nearest integer and + 1 so we get 1 to 3
  var randomInteger = Math.floor(randomDecimal) + 1;
  return randomInteger;
};

// Function to define each option
var generateRandomOption = function () {
  var randomInteger = generateRandomInteger();

  // define each option in the game
  var OPTION_SCISSORS = "scissors";
  var OPTION_PAPER = "paper";
  var OPTION_STONE = "stone";

  if (randomInteger == 1) {
    return OPTION_SCISSORS;
  }

  if (randomInteger == 2) {
    return OPTION_PAPER;
  }

  if (randomInteger == 3) {
    return OPTION_STONE;
  }
  // if we reach this line, randomOption was invalid, but should be okay because the range of integers is fixed from 1 to 3
  return "Oops, there was a bug!";
};

// Lay out all the different scenarios in the main function
var main = function (input) {
  var computerOption = generateRandomOption();

  if (input == "scissors" && computerOption == "scissors") {
    var myOutputValue = `The computer chose ${computerOption} 
    You chose ${input} 
    It's a draw!`;
    return myOutputValue;
  }

  if (input == "scissors" && computerOption == "paper") {
    var myOutputValue = `The computer chose ${computerOption} 
    You chose ${input} 
    You win!`;
    return myOutputValue;
  }

  if (input == "scissors" && computerOption == "stone") {
    var myOutputValue = `The computer chose ${computerOption} 
    You chose ${input} 
    You lose!`;
    return myOutputValue;
  }

  if (input == "paper" && computerOption == "scissors") {
    var myOutputValue = `The computer chose ${computerOption} 
    You chose ${input} 
    You lose!`;
    return myOutputValue;
  }

  if (input == "paper" && computerOption == "paper") {
    var myOutputValue = `The computer chose ${computerOption} 
    You chose ${input} 
    It's a draw!`;
    return myOutputValue;
  }

  if (input == "paper" && computerOption == "stone") {
    var myOutputValue = `The computer chose ${computerOption} 
    You chose ${input} 
    You win!`;
    return myOutputValue;
  }

  if (input == "stone" && computerOption == "scissors") {
    var myOutputValue = `The computer chose ${computerOption} 
    You chose ${input} 
    You win!`;
    return myOutputValue;
  }

  if (input == "stone" && computerOption == "paper") {
    var myOutputValue = `The computer chose ${computerOption} 
    You chose ${input} 
    You lose!`;
    return myOutputValue;
  }

  if (input == "stone" && computerOption == "stone") {
    var myOutputValue = `The computer chose ${computerOption} 
    You chose ${input} 
    It's a draw!`;
    return myOutputValue;
  }

  var myOutputValue =
    "Sorry, there are only 3 input options: 'scissors', 'paper', or 'stone'. Please try again!";

  return myOutputValue;
};
