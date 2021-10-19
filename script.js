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

  console.log(rngRoll);
  return rngRoll;
};

// Game function

var playSpsGame = function(userName, userChoice) {
  var message = "";

  var randomSps = randomChoice();
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
    message = `${userName}! You lose!<br>Your choice of ${programChoice} beats computer's ${userChoice}! Player Wins: ${playerWins} - Computer Wins: ${computerWins} - Draws: ${gameDraws}.`;
  } else if (
    (programChoice === "rock" && userChoice === "reverse scissors") ||
    (programChoice === "paper" && userChoice === "reverse rock") ||
    (programChoice === "scissors" && userChoice === "reverse paper")
  ) {
    playerWins++;
    message = `${userName}! You win!<br>${userChoice} beats ${programChoice}! Player Wins: ${playerWins} - Computer Wins: ${computerWins} - Draws: ${gameDraws}.`;
  } else if (
    (userChoice === "reverse rock" && programChoice === "scissors") ||
    (userChoice === "reverse paper" && programChoice === "rock") ||
    (userChoice === "reverse scissors" && programChoice === "paper")
  ) {
    computerWins++;
    mmessage = `${userName}! You lose!<br>${programChoice} beats ${userChoice}! Player Wins: ${playerWins} - Computer Wins: ${computerWins} - Draws: ${gameDraws}.`;
  }
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
