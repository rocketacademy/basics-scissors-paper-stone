// setting variables to avoid typo
var PAPER_OPTION = "paper";
var SCISSOR_OPTION = "scissor";
var STONE_OPTION = "stone";
var REVERSE_OPTION = "reverse";
var previousGameWinner = " its a draw ";

// seetting variables for reverse SPS Game
var currentGameMode = "waiting for user name";
var userName = "";
var youWon = "";
var computerWon = "";
var totalGamesPlayed = youWon + computerWon;
var yourWinPercent = (youWon / totalGamesPlayed) * 100;

// generating computer option function
var generateComputerOption = function () {
  var RandomNo = Math.random() * 3;
  var randomSelection = Math.ceil(RandomNo);

  if (randomSelection == 1) {
    return SCISSOR_OPTION;
  }
  if (randomSelection == 2) {
    return PAPER_OPTION;
  }

  return STONE_OPTION;
};

// SPS Game decision function

var SPSGameDecision = function (input, computerOption) {
  SPSDecision = "lost";
  if (
    (input == PAPER_OPTION && computerOption == STONE_OPTION) ||
    (input == STONE_OPTION && computerOption == SCISSOR_OPTION) ||
    (input == SCISSOR_OPTION && computerOption == PAPER_OPTION)
  ) {
    SPSDecision = "won";
  } else if (input == computerOption) {
    SPSDecision = "draw";
  }
  return SPSDecision;
};

// Reverse SPS Game decision function

var reverseSPSGameDecision = function (input, computerOption) {
  reverseSPSDecision = "lost";

  if (
    (input == SCISSOR_OPTION && computerOption == STONE_OPTION) ||
    (input == PAPER_OPTION && computerOption == SCISSOR_OPTION) ||
    (input == STONE_OPTION && computerOption == PAPER_OPTION)
  ) {
    reverseSPSDecision = "won";
  } else if (input == computerOption) {
    reverseSPSDecision = "draw";
  }
  return reverseSPSDecision;
};

var main = function (input) {
  var computerOption = generateComputerOption();

  if (currentGameMode == "waiting for user name") {
    userName = input;
    myOutputValue = "Hello " + userName;
    currentGameMode = "SPS-game";
    return myOutputValue;
  }

  if (currentGameMode == "SPS-game") {
    if (input == REVERSE_OPTION) {
      currentGameMode = "Reverse-SPS-Game";

      myOutputValue = " starting reverse SPS game";
      return myOutputValue;
    }
    if (
      input == PAPER_OPTION ||
      input == STONE_OPTION ||
      input == SCISSOR_OPTION
    ) {
      var gameResult = SPSGameDecision(input, computerOption);
      console.log("input" + input + "computer" + computerOption);
      myOutputValue = gameResult;
    }
    if (
      input !== PAPER_OPTION &&
      input !== STONE_OPTION &&
      input !== SCISSOR_OPTION
    ) {
      return userName + " invalid input";
    }
  }

  if (currentGameMode == "Reverse-SPS-Game") {
    reverseGameResult = reverseSPSGameDecision(input, computerOption);

    myOutputValue = reverseGameResult;
  }

  if (myOutputValue == "won") {
    previousGameWinner = userName;
    console.log(myOutputValue + previousGameWinner);
  } else if (myOutputValue == "lost") {
    previousGameWinner = " computer";
  }
  if (myOutputValue == "draw") {
    currentGameMode = "SPS-game";
    return " Game Ends, result is  " + previousGameWinner;
  }

  return userName + myOutputValue;
};

// winning conditions
// scissor beats paper
// paper beats stone
// stone beats scissor

// reversed winning conditions
// paper beats scissor
// stone beats paper
// scissor beats stone
