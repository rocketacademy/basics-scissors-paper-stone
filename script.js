var AWAITING_USER_NAME = "awaiting user name";
var PSP_GAME = "psp game";
var currentGameMode = AWAITING_USER_NAME;
var userName = "";

console.log("global");

var winCount = 0;
var loseCount = 0;
var drawCount = 0;

var totalCount = function (winCount, loseCount, drawCount) {
  return Number(winCount) + Number(loseCount) + Number(drawCount);
};
console.log("stats");

var winPercentage = function () {
  return Math.floor((Number(winCount) * 100) / totalCount);
};

console.log("percent");

var main = function (input) {
  var myOutputValue = "";

  if ((currentGameMode = AWAITING_USER_NAME)) {
    userName = input;
    currentGameMode = PSP_GAME;
    myOutputValue =
      "Welcome to the SPS club, " +
      userName +
      "!" +
      "<br><br>" +
      "Please start the game by choosing either scissors, paper or stone.";

    console.log(main);
  } else if ((currentGameMode = PSP_GAME)) {
    var gamePlay = "";
    var lowercaseInput = input.toLowerCase();
    var gameNumber = generateRandomNumber();

    if (gameNumber == 1) {
      gamePlay = "scissors";
    }
    if (gameNumber == 2) {
      gamePlay = "paper";
    }
    if (gameNumber == 3) {
      gamePlay = "stone";
    }
    var myOutputValue =
      "Tough luck," +
      userName +
      "<br> You lost! You played: " +
      input +
      ", the computer played: " +
      gamePlay +
      "<br> Try again! <br> Wins:" +
      Number(winCount) +
      " <br> Losses: " +
      Number(loseCount) +
      "Winninig percentage: " +
      winPercentage;
  }

  if (
    (gamePlay == "scissors" && lowercaseInput == "stone") ||
    (gamePlay == "stone" && lowercaseInput == "paper") ||
    (gamePlay == "paper" && lowercaseInput == "scissors")
  ) {
    myOutputValue =
      "Wow!" +
      userName +
      " <br> You won! You played: " +
      input +
      ", the computer played: " +
      gamePlay +
      " <br> Well done! Please enter 'secret' to activate the new game mode! <br> Wins:" +
      Number(winCount) +
      " <br> Losses: " +
      Number(loseCount) +
      "Winninig percentage: " +
      winPercentage;
  }

  if (lowercaseInput == gamePlay) {
    myOutputValue =
      "What are the odds?" +
      userName +
      "<br> It's a draw! You played: " +
      input +
      ", the computer played: " +
      gamePlay +
      "<br> Try a little harder! <br> Wins:" +
      Number(winCount) +
      " <br> Losses: " +
      Number(loseCount) +
      "Winninig percentage: " +
      winPercentage;
  }
  if (
    !(
      lowercaseInput === "scissors" ||
      lowercaseInput === "paper" ||
      lowercaseInput === "stone"
    )
  ) {
    myOutputValue =
      "to start the game, please only input scissors, paper or stone.";
  }
  return myOutputValue;
};

var generateRandomNumber = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var randomNumber = randomInteger + 1;
  return randomNumber;
};
