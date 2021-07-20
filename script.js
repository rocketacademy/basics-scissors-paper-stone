var userWonCount = 0;
var comWonCount = 0;
var userName = "";
var startOfRound = true;
var gameMode = "Waiting for user choice";

var main = function (input) {
  //for start of round, register user name
  if (startOfRound) {
    startOfRound = false;
    userName = input;
    return `Welcome ${userName}! Please choose the game mode: <br><br> 1. Normal play <br><br> 2. Reversed play`;
  }
  //user choosing the game mode
  if (gameMode == "Waiting for user choice") {
    gameMode = gameModeProcess(input);
    return `You have chosen ${gameMode}, let's start!`;
  }

  //process if the input is valid
  if (inputValidation(input)) {
    return `You entered ${input} which is not a valid input. Only the following are accepted: scissors, paper or stone ${userName}, please try again.`;
  }

  var randNumber = randomNumGenerator();
  console.log(randNumber);
  var handFromProgram = playByProgram(randNumber);

  if (gameMode == "normal play") {
    var result = winningHand(input, handFromProgram);
  }
  if (gameMode == "reversed play") {
    var result = reversedGameWinningHand(input, handFromProgram);
  }
  console.log(userWonCount);
  console.log(comWonCount);
  var winPercent = (
    (userWonCount * 100) /
    (userWonCount + comWonCount)
  ).toFixed(2);
  //if the first round is a draw, since divide by 0 is NaN
  if (userWonCount == 0 && comWonCount == 0) {
    winPercent = 0;
  }
  var myOutputValue = `Hi ${userName}! You played ${input} while the computer played ${handFromProgram}. <br><br> ${result} <br><br> ${userName}'s winning percentage is ${winPercent}%. <br><br> Let's play again!!!`;
  return myOutputValue;
};

//to process the game mode
var gameModeProcess = function (userInput) {
  if (userInput == 1) {
    return `normal play`;
  }
  if (userInput == 2) {
    return `reversed play`;
  }
};

//to validate user input
var inputValidation = function (userGuess) {
  if (
    !(userGuess == "scissors" || userGuess == "stone" || userGuess == "paper")
  ) {
    return true;
  }
};

//to evaluate the winner for normal play
var winningHand = function (userInput, programPlay) {
  if (userInput == programPlay) {
    return "It is a draw!";
  }
  if (
    (userInput == "scissors" && programPlay == "paper") ||
    (userInput == "paper" && programPlay == "stone") ||
    (userInput == "stone" && programPlay == "scissors")
  ) {
    userWonCount++;
    return "Congrats, you win!";
  }
  if (
    (userInput == "stone" && programPlay == "paper") ||
    (userInput == "scissors" && programPlay == "stone") ||
    (userInput == "paper" && programPlay == "scissors")
  ) {
    comWonCount++;
    return "Oh no, you lost!";
  }
};

//to evaluate the winner for reversed play
var reversedGameWinningHand = function (userInput, programPlay) {
  if (
    (userInput == "scissors" && programPlay == "scissors") ||
    (userInput == "paper" && programPlay == "paper") ||
    (userInput == "stone" && programPlay == "stone")
  ) {
    return "It is a draw!";
  }
  if (
    (userInput == "scissors" && programPlay == "stone") ||
    (userInput == "paper" && programPlay == "scissors") ||
    (userInput == "stone" && programPlay == "paper")
  ) {
    userWonCount++;
    return "You are playing the reversed game. <br><br> Congrats, you win!";
  }
  if (
    (userInput == "stone" && programPlay == "scissors") ||
    (userInput == "scissors" && programPlay == "paper") ||
    (userInput == "paper" && programPlay == "stone")
  ) {
    comWonCount++;
    return "You are playing the reversed game. <br><br> Oh no, you lost!";
  }
};

//to match the random number to the scissors, paper and stone
var playByProgram = function (randomNum) {
  if (randomNum == 1) {
    return "scissors";
  }
  if (randomNum == 2) {
    return "paper";
  }
  if (randomNum == 3) {
    return "stone";
  }
};

//to randomly generate a number from 1 to 3
var randomNumGenerator = function () {
  //Math.random generate a decimal from 0 to 1
  var randomDecimal = Math.random() * 3;
  //Math.floor round the number down to an integer
  var randomInteger = Math.floor(randomDecimal);
  var randomNumber = randomInteger + 1;
  return randomNumber;
};
