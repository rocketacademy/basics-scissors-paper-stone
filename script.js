/**
 * Scissors Paper Stone (Part 1)
 *
 * basic version where user inputs one of "scissors", "paper", or "stone", the program internally randomly chooses scissors, paper, or stone, and the program outputs whether the user won, the program won, or it's a draw.
 * Rules: scissors beats paper, paper beats stone, and stone beats scissors. If both parties choose the same object, it's a draw.
 */

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
    return "scissors";
  }
  if (randomSPSoutcome == 2) {
    return "paper";
  }
  if (randomSPSoutcome == 3) {
    return "stone";
  }
  return "Oops! There may be error!";
};

var checkIfUserWon = function (userSPS, randomSPS) {
  if (
    (userSPS == "scissors" && randomSPS == "paper") ||
    (userSPS == "paper" && randomSPS == "stone") ||
    (userSPS == "stone" && randomSPS == "scissors")
  ) {
    return true;
  }
  return false;
};

var main = function (input) {
  var userSPS = input;
  //input validation
  if (userSPS != "scissors" && userSPS != "paper" && userSPS != "stone") {
    return `Please input "scissors", "paper" or "stone" only to play the game!`;
  }

  var randomSPS = generateRandomSPS();
  var genericOutput = `Your choice: ${userSPS}. Program's choice: ${randomSPS}.`;
  if (checkIfUserWon(userSPS, randomSPS)) {
    return `${genericOutput} You win!`;
  }
  //check if it is a draw
  if (userSPS == randomSPS) {
    return `${genericOutput} It's a draw!`;
  }
  return `${genericOutput} You lose!`;
};
