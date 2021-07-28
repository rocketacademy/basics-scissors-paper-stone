var SCISSORS = "scissors";
var PAPER = "paper";
var STONE = "stone";
var REVERSE = "reverse";
var REVERSE_SCISSORS = "reverse scissors";
var REVERSE_PAPER = "reverse paper";
var REVERSE_STONE = "reverse stone";
var numOfUserWins = 0;
var numOfComputerWins = 0;
var numOfDraws = 0;
var numOfRounds = 0;
var modeAskForUserName = "user types in their name";
var modeStartPlaying = "sps game starts";
var reverseSPS = "reverse mode os SPS";
var gameMode = modeAskForUserName;
var userName = "";
var myOutputValue = "";
var userLose = "";
var outputMessage = "";

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

var validatingTheInput = function (input) {
  if (input != SCISSORS && input != PAPER && input != STONE) {
    return true;
  }
  return false;
};

var didPlayerLose = function (input) {
  console.log("this is input " + input);
  console.log("this is program choice " + programChoice);
  if (
    (input == SCISSORS && programChoice == PAPER) ||
    (input == PAPER && programChoice == STONE) ||
    (input == STONE && programChoice == SCISSORS)
  ) {
    return false;
  }
  return true;
};

var getOutputMessage = function (input) {
  userLose = didPlayerLose(input);
  console.log(input + " is input and " + programChoice + " is program choice");
  console.log("user lost is" + userLose);
  if (input == programChoice) {
    numOfDraws = numOfDraws + 1;
    myOutputValue =
      "It's a draw! Your current record is " +
      numOfUserWins +
      " wins, " +
      numOfComputerWins +
      " losses, and " +
      numOfDraws +
      " draws.";
  } else if (userLose) {
    numOfComputerWins = numOfComputerWins + 1;
    console.log("if user lose this is gonna run");
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
  if (!userLose) {
    numOfUserWins = numOfUserWins + 1;
    console.log("if user wins this is gonna run");
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
  return myOutputValue;
};

var main = function (input) {
  // var spsGameMode = decideGameMode();
  //when the game starts, game mode is modeAskForUserName
  programChoice = computersRandomWord();
  console.log("this is the random word " + programChoice + "");
  if (gameMode == modeAskForUserName) {
    userName = input;

    // mode changes to sps game once the username is inputted.
    gameMode = modeStartPlaying;
    return "Hi " + userName + "! Ready to play?";
  }
  if (gameMode == modeStartPlaying) {
    outputMessage = getOutputMessage(input);
    if (validatingTheInput(input)) {
      return (
        "Whoops, seems like we can't process your input " +
        userName +
        ". Please input one of these choices below: scissors, paper, stone."
      );
    }
    // define sps normal rules
    if (input == programChoice) {
      return outputMessage;
    } else if (userLose) {
      return outputMessage;
    } else if (!userLose) {
      return outputMessage;
    }
  }
};
// if user inputs 'reverse', game mode changes to the reverse mode.
//   if (input == REVERSE) {
//     gameMode = reverseSPS;
//     if (!defineSPSRules) {
//     numOfUserWins = numOfUserWins + 1;
//     myOutputValue =
//       "Congrats " +
//       userName +
//       "! You won in this reversed version. Your current record is " +
//       numOfUserWins +
//       " wins, " +
//       numOfComputerWins +
//       " losses, and " +
//       numOfDraws +
//       " draws. Up for another game?";
//     }
//     if (defineSPSRules()) {
//      numOfComputerWins = numOfComputerWins + 1;
//       myOutputValue =
//        "Oh no, you lost this reversed version " +
//         userName +
//         ". Your current record is " +
//         numOfUserWins +
//         " wins, " +
//         numOfComputerWins +
//         " losses, and " +
//         numOfDraws +
//         " draws. Try again?";
//     }
// return myOutputValue;
//
