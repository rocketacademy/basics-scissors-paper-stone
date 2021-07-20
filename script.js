var SCISSORS = "scissors";
var PAPER = "paper";
var STONE = "stone";
var REVERSE_SCISSORS = "reverse scissors";
var REVERSE_PAPER = "reverse paper";
var REVERSE_STONE = "reverse stone";
var numOfUserWins = 0;
var numOfComputerWins = 0;
var numOfDraws = 0;
var numOfRounds = 0;
var modeAskForUserName = "user types in their name";
var modeStartPlaying = "sps game starts";
var gameMode = modeAskForUserName;
var userName = "";

var programOutput = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var randomNumber = randomInteger + 1;
  return randomNumber;
};
var computersRandomWord = function () {
  var computersRandomNumber = programOutput();
  if (computersRandomNumber == 1) {
    return SCISSORS;
  }
  if (computersRandomNumber == 2) {
    return PAPER;
  }
  if (computersRandomNumber == 3) {
    return STONE;
  }
};

var main = function (input) {
  // when the game starts, game mode is modeAskForUserName
  if (gameMode == modeAskForUserName) {
    userName = input;

    // mode changes to sps game once the username is inputted.
    gameMode = modeStartPlaying;
    var myOutputValue = "Hi " + userName + "! Ready to play?";
  } else if (gameMode == modeStartPlaying) {
    var programChoice = computersRandomWord();
    console.log("this is the random word " + programChoice + "");
    myOutputValue =
      "Whoops, seems like we can't process your input " +
      userName +
      ". Please input one of these choices below: scissors, paper, stone.";

    // define sps normal rules
    if (
      (input == SCISSORS && programChoice == PAPER) ||
      (input == PAPER && programChoice == STONE) ||
      (input == STONE && programChoice == SCISSORS)
    ) {
      numOfUserWins = numOfUserWins + 1;
      myOutputValue =
        "Congrats " +
        userName +
        "! You won. Your current record is " +
        numOfUserWins +
        " wins, " +
        numOfComputerWins +
        " losses, and " +
        numOfDraws +
        " draws. Up for another game?";
    }
    if (
      (input == SCISSORS && programChoice == STONE) ||
      (input == PAPER && programChoice == SCISSORS) ||
      (input == STONE && programChoice == PAPER)
    ) {
      numOfComputerWins = numOfComputerWins + 1;
      myOutputValue =
        "Oh no, you lost " +
        userName +
        ". Your current record is " +
        numOfUserWins +
        " wins, " +
        numOfComputerWins +
        " losses, and " +
        numOfDraws +
        " draws. Wanna try again?";
    }
    if (
      input == programChoice ||
      (input == REVERSE_SCISSORS && programChoice == SCISSORS) ||
      (input == REVERSE_PAPER && programChoice == PAPER) ||
      (input == REVERSE_STONE && programChoice == STONE)
    ) {
      numOfDraws = numOfDraws + 1;
      myOutputValue =
        "It's a draw! Your current record is " +
        numOfUserWins +
        " wins, " +
        numOfComputerWins +
        " losses, and " +
        numOfDraws +
        " draws.";
    }
    // if user inputs == reversed + (rock, paper, scissors), the result would be the reversed result.
    if (
      (input == REVERSE_SCISSORS && programChoice == STONE) ||
      (input == REVERSE_PAPER && programChoice == SCISSORS) ||
      (input == REVERSE_STONE && programChoice == PAPER)
    ) {
      numOfUserWins = numOfUserWins + 1;
      myOutputValue =
        "Congrats " +
        userName +
        "! You won in this reversed version. Your current record is " +
        numOfUserWins +
        " wins, " +
        numOfComputerWins +
        " losses, and " +
        numOfDraws +
        " draws. Up for another game?";
    }
    if (
      (input == REVERSE_SCISSORS && programChoice == PAPER) ||
      (input == REVERSE_PAPER && programChoice == STONE) ||
      (input == REVERSE_STONE && programChoice == SCISSORS)
    ) {
      numOfComputerWins = numOfComputerWins + 1;
      myOutputValue =
        "Oh no, you lost this reversed version " +
        userName +
        ". Your current record is " +
        numOfUserWins +
        " wins, " +
        numOfComputerWins +
        " losses, and " +
        numOfDraws +
        " draws. Try again?";
    }
  }
  return myOutputValue;
};
