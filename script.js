/*
---REQUIREMENTS---
[x] Program should be able to take in a text input "scissors", "paper", "stone"
[x] Program randomly chooses scissors, paper, stone
[x] User input and program choice can be compared and determined whether user wins, loses or draw
[x] After comparing user and program choices, frontend page will display the result
[x] Program should be able to validate that the input falls within the 3 options
[x] Format the output to make it look nicer.
[x] Create algorithm for a reverse scissors, paper, stone game. 
[x] Add state to program to track player wins, computer wins and draws.
[x] Add function for reverse paper scissors stone game
*/

var playerWins = 0;
var computerWins = 0;
var gameDraws = 0;

var currentGameMode = "Waiting for user name";
var userName = "";

// Random number generator function
var randomChoice = function() {
  var rngRoll = Math.ceil((Math.random() * 3));
  
  if (rngRoll == 1) {
    rngRoll = "scissors"
  } else if (rngRoll == 2) {
    rngRoll = "paper"
  } else {rngRoll = "stone"};

  console.log("Random Choice:", rngRoll);
  return rngRoll;
};

// Game function

var playSpsGame = function(userName, userChoice) {

  var message = "";

  var randomSps = randomChoice();
  var programChoice = randomSps;

  if (
    userChoice !== "scissors" &&
    userChoice !== "paper" &&
    userChoice !== "stone" &&
    userChoice !== "reverse scissors" &&
    userChoice !== "reverse paper" &&
    userChoice !== "reverse stone"
  ) {
    message =
      "Wrong input detected, please enter 'scissors', 'paper' or 'stone'! (or secret reverse game choices of 'reverse scissors', 'reverse paper' or 'reverse stone').";
  } else if (userChoice === programChoice) {
    gameDraws++;
    message = `${userName}! You and the computer chose ${userChoice}.<br>It's a draw! Player Wins: ${playerWins} - Computer Wins: ${computerWins} - Draws: ${gameDraws}.`;
  } else if (
    (userChoice === "stone" && programChoice === "scissors") ||
    (userChoice === "paper" && programChoice === "stone") ||
    (userChoice === "scissors" && programChoice === "paper")
  ) {
    playerWins++;
    message = `${userName}! You win!<br>Your choice of ${userChoice} beats computer's ${programChoice}! Player Wins: ${playerWins} - Computer Wins: ${computerWins} - Draws: ${gameDraws}.`;
  } else if (
    (programChoice === "stone" && userChoice === "scissors") ||
    (programChoice === "paper" && userChoice === "stone") ||
    (programChoice === "scissors" && userChoice === "paper")
  ) {
    computerWins++;
    message = `${userName}! You lose!<br>Computer choice of ${programChoice} beats yours ${userChoice}! Player Wins: ${playerWins} - Computer Wins: ${computerWins} - Draws: ${gameDraws}.`;
  } else if (
    (programChoice === "stone" && userChoice === "reverse scissors") ||
    (programChoice === "paper" && userChoice === "reverse stone") ||
    (programChoice === "scissors" && userChoice === "reverse paper")
  ) {
    playerWins++;
    message = `${userName}! You win!<br>${userChoice} beats ${programChoice}! Player Wins: ${playerWins} - Computer Wins: ${computerWins} - Draws: ${gameDraws}.`;
  } else if (
    (userChoice === "reverse stone" && programChoice === "scissors") ||
    (userChoice === "reverse paper" && programChoice === "stone") ||
    (userChoice === "reverse scissors" && programChoice === "paper")
  ) {
    computerWins++;
    message = `${userName}! You lose!<br> Computer choice ${programChoice} beats yours ${userChoice}! Player Wins: ${playerWins} - Computer Wins: ${computerWins} - Draws: ${gameDraws}.`;
  }
  console.log(userChoice, "user Choice");
  console.log(programChoice, "program choice");
  console.log(userChoice !== "scissors", "is user choice not scissors");
  
  return message;

}

// Main function
var main = function (input) {
  var myOutputValue = "";

  if (currentGameMode == "Waiting for user name") {
    userName = input;
    currentGameMode = "scissors paper stone game";

    myOutputValue = `Hello ${userName}!`;
  } else if (currentGameMode == "scissors paper stone game") {
    myOutputValue = playSpsGame(userName, input);
  };

  return myOutputValue;
};
