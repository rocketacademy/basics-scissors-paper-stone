// // Create a basic version of Scissors Paper Stone where the user inputs one of "scissors", "paper", or "stone", the program internally randomly chooses scissors, paper, or stone, and the program outputs whether the user won, the program won, or it's a draw.
var scissors = "scissors";
var paper = "paper";
var stone = "stone";
//randomly chooses scissors, paper, or stone
var generateRandomHands = function () {
  var randomNumber = Math.floor(Math.random() * 3) + 1;
  // 1 = scissors
  if (randomNumber == 1) {
    return scissors;
  }
  // 2 = paper
  if (randomNumber == 2) {
    return paper;
  }
  // 3 = stone
  return stone;
};

var main = function (input) {
  // Rules: scissors beats paper, paper beats stone, and stone beats scissors. If both parties choose the same object, it's a draw.
  var robotHands = generateRandomHands();
  // outputs whether the user won, the program won, or it's a draw.
  var userWin = `You choose ${input}, <br> Bot choose ${robotHands}, <br> You Won!`;
  var userLose = `You choose ${input}, <br> Bot choose ${robotHands}, <br> You Lose! Hahaha`;
  var draw = `You choose ${input}, <br> Bot choose ${robotHands}, <br> It's a draw!`;
  // Sometimes the user types bad and types something other than "scissors", "paper", or "stone" during gameplay. Add input validation to kindly let the user know that there are only 3 input options, and ask them to try again
  var myOutputValue = `Please choose the following 3 options : <br> scissors <br> paper <br> stone <br> Please Try Again!`;

  if (robotHands == input) {
    return (myOutputValue = draw);
  }
  // user win
  if (
    (robotHands == paper && input == scissors) ||
    (robotHands == stone && input == paper) ||
    (robotHands == scissors && input == stone)
  ) {
    return (myOutputValue = userWin);
  }
  // user lose
  if (
    (robotHands == paper && input == stone) ||
    (robotHands == stone && input == scissors) ||
    (robotHands == scissors && input == paper)
  ) {
    return (myOutputValue = userLose);
  }
  return myOutputValue;
};
