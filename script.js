var currentGameMode = "waiting for user name";
var userName = "";
var playerWinCounter = 0;
var botWinCounter = 0;

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

var gameStart = function (userName, userGuess) {
  // Rules: scissors beats paper, paper beats stone, and stone beats scissors. If both parties choose the same object, it's a draw.
  var robotHands = generateRandomHands();
  var gameMessage = "";
  // outputs whether the user won, the program won, or it's a draw.
  var userWin = `${userName} choose ${userGuess}, <br> Bot choose ${robotHands}, <br> You Won! <br><br> Total Wins: <br> ${userName} VS Bot <br> ${playerWinCounter}:${botWinCounter}`;
  var userLose = `${userName} choose ${userGuess}, <br> Bot choose ${robotHands}, <br> You Lose! Hahaha <br><br> Total Wins: <br> ${userName} VS Bot <br> ${playerWinCounter}:${botWinCounter}`;
  var draw = `${userName} choose ${userGuess}, <br> Bot choose ${robotHands}, <br> It's a draw! <br><br> Total Wins: <br> ${userName} VS Bot <br> ${playerWinCounter}:${botWinCounter}`;
  // draw
  if (robotHands == userGuess) {
    return (gameMessage = draw);
  }
  // user win
  if (
    (robotHands == paper && userGuess == scissors) ||
    (robotHands == stone && userGuess == paper) ||
    (robotHands == scissors && userGuess == stone)
  ) {
    playerWinCounter = playerWinCounter + 1;
    return (gameMessage = userWin);
  }
  // user lose
  if (
    (robotHands == paper && userGuess == stone) ||
    (robotHands == stone && userGuess == scissors) ||
    (robotHands == scissors && userGuess == paper)
  ) {
    botWinCounter = botWinCounter + 1;
    return (gameMessage = userLose);
  }
  return gameMessage;
};

var main = function (input) {
  var myOutputValue = "";
  // Sometimes the user types bad and types something other than "scissors", "paper", or "stone" during gameplay. Add input validation to kindly let the user know that there are only 3 input options, and ask them to try again
  if (Number.isNaN(Number(input)) == false) {
    myOutputValue =
      "Sorry! Please enter the following 3 options: <br> scissors <br> paper <br> stone <br> Please Try Again!.";
    return myOutputValue;
  }
  if (currentGameMode == "waiting for user name") {
    userName = input;
    currentGameMode = "sps game";
    myOutputValue = `Hello ${userName}! Let's play Scissors,Paper,Stone!`;
  } else if (currentGameMode == "sps game") {
    myOutputValue = gameStart(userName, input);
  }
  return myOutputValue;
};
