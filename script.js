//Basic Scissors Paper Stone
//Create a basic version of Scissors Paper Stone where the user inputs one of "scissors", "paper", or "stone", the program internally randomly chooses scissors, paper, or stone, and the program outputs whether the user won, the program won, or it's a draw.
//Rules: scissors beats paper, paper beats stone, and stone beats scissors. If both parties choose the same object, it's a draw.
//Input Validation
//Sometimes the user types bad and types something other than "scissors", "paper", or "stone" during gameplay. Add input validation to kindly let the user know that there are only 3 input options, and ask them to try again.

var scissors = "scissors";
var paper = "paper";
var stone = "stone";
var recordWin = 0;
var numberOfGames = 0;
var main = function (input) {
  // computer random choice
  var randomSPS = generateRandomSPS();
  var myOutputValue = "";
  numberOfGames = numberOfGames + 1;
  if (input == randomSPS) {
    myOutputValue = `DRAW!you guessed ${input}, the program played ${randomSPS} , number of games played: ${numberOfGames}`;
  }
  if (
    (input == scissors && randomSPS == paper) ||
    (input == stone && randomSPS == scissors) ||
    (input == paper && randomSPS == stone)
  ) {
    recordWin = recordWin + 1;
    myOutputValue =
      " you won! you guessed: " +
      input +
      " computer chose: " +
      randomSPS +
      " current win record:" +
      recordWin +
      "you played " +
      numberOfGames +
      "games";
  }
  return `you lost! you guessed ${input}, the program played ${randomSPS} , number of games played: ${numberOfGames}`;
};

// Generate a random integer from 1 to max inclusive
var generateRandomInteger = function (max) {
  var randomDecimal = Math.random() * max;
  var randomInteger = Math.floor(randomDecimal) + 1;
  return randomInteger;
};
// Generate random sps item
var generateRandomSPS = function () {
  var numSPSoutcome = 3;
  var randomSPSoutcome = generateRandomInteger(numSPSoutcome);
  if (randomSPSoutcome == 1) {
    return scissors;
  }
  if (randomSPSoutcome == 2) {
    return paper;
  }
  if (randomSPSoutcome == 3) {
    return stone;
  }
  return "Oops! There may be error!";
};
