/*
---REQUIREMENTS---
[x] Program should be able to take in a text input "scissors", "paper", "stone"
[x] Program randomly chooses scissors, paper, stone
[x] User input and program choice can be compared and determined whether user wins, loses or draw
[x] After comparing user and program choices, frontend page will display the result
[ ] Program should be able to validate that the input falls within the 3 options
[ ] Format the output to make it look nicer.
[ ] 
*/

var main = function (input) {
  var myOutputValue = '';
  var userChoice = input;

  if (
    userChoice !== "scissors" ||
    userChoice !== "paper" ||
    userChoice !== "stone"
  ) {
    myOutputValue =
      "Wrong input detected, please enter 'scissors', 'paper' or 'stone'!";
  }

  var programChoice = randomChoice();

  if (userChoice === programChoice) {
    myOutputValue = `You and the computer chose ${userChoice}.<br>It's a draw!`;
  } else if (
    (userChoice === "stone" && programChoice === "scissors") ||
    (userChoice === "paper" && programChoice === "stone") ||
    (userChoice === "scissors" && programChoice === "paper")
  ) {
    myOutputValue = `You win!<br>Your choice of ${userChoice} beats computer's ${programChoice}!`;
  } else if (
    (programChoice === "stone" && userChoice === "scissors") ||
    (programChoice === "paper" && userChoice === "stone") ||
    (programChoice === "scissors" && userChoice === "paper")
  ) {
    myOutputValue = `You lose!<br>Your choice of ${programChoice} beats computer's ${userChoice}!`;
  }
  return myOutputValue;

  /* 
  //REVERSE GAME ALGORITHM
  if (userChoice === programChoice) {
    myOutputValue = `You and the computer chose ${userChoice}.<br>It's a draw!`;
  } else if (
    (programChoice === "rock" && userChoice === "scissors") ||
    (programChoice === "paper" && userChoice === "rock") ||
    (programChoice === "scissors" && userChoice === "paper")
  ) {
    myOutputValue = `You win!<br>${userChoice} beats ${programChoice}!`;
  } else if (
    (userChoice === "rock" && programChoice === "scissors") ||
    (userChoice === "paper" && programChoice === "rock") ||
    (userChoice === "scissors" && programChoice === "paper")
  ) {
    myOutputValue = `You lose!<br>${programChoice} beats ${userChoice}!`;
  }
  return myOutputValue;
  */
};



// Random number generator function
var randomChoice = function() {
  var rngRoll = Math.ceil((Math.random() * 3));
  
  if (rngRoll == 1) {
    rngRoll = "scissors"
  } else if (rngRoll == 2) {
    rngRoll = "paper"
  } else {rngRoll = "stone"};

  console.log(rngRoll);
  return rngRoll;
}