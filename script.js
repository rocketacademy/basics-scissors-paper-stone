//include current gamemode
var currentGameMode = 'insert username to begin';
//include option for username
var userName = '';
// track number of games user wins
var numUserWin = 0;
// track number of games user lost
var numUserLost = 0;
//track number of games user draws
var numUserDraw = 0;

var main = function (input) {
  // first game mode is when username is keyed in
  if (currentGameMode == "insert username to begin") {
    userName = input;
    currentGameMode = "commence scissors paper stone game";
    myOutputValue = "hello " + input + " you can now begin the game.";
// second game mode is when username is not keyed in 
  } else if (!input) {
    currentGameMode = "insert username to begin";
    userName = !input;
    myOutputValue = "error please insert username to begin";
  }
  return myOutputValue;
};

// assign variables to scissors, paper, stone
var SCISSORS = 'scissors';
var PAPER = 'paper';
var STONE = 'stone';

// get a random whole number between 0 to 2
var getRandomInteger = function () {
  var randomDecimal = Math.random() * 3;
  var randomNum = Math.floor(randomDecimal);
  return randomNum;
}

// assign random number to scissors, paper, or stone 
var genComputerChoice = function (randomNum) {
  if (randomNum == 0) {
    return SCISSORS;
  }
  if (randomNum == 1) {
    return PAPER;
  }
  if (randomNum == 2) {
    return STONE;
  }

  // invoke functions
var computerChoice = genComputerChoice(getRandomInteger());

var main = function (input) {
  // user input scissors, computer chooses paper
  if (input == SCISSORS && computerChoice == PAPER) {
    numUserWin = numUserWin + 1;
    myOutputValue = `you win because your ${input} beat the computer's ${computerChoice} and you have won a total of ${numUserWin}`;
    console.log(computerChoice);
    console.log("the computer drew paper");
  }
  // user input scissors, computer chooses stone
  if (input == SCISSORS && computerChoice == STONE) {
  // insert loss counter 
  numUserLost = numUserLost + 1;
    myOutputValue = `you lose because the computer's ${computerChoice} beat your ${input}`;
    console.log(computerChoice);
    console.log("the computer drew stone");
  }
  // user input scissors, computer chooses scissors
  if (input == SCISSORS && computerChoice == SCISSORS) {
  // insert draw counter
    numUserDraw = numUserDraw + 1;
    myOutputValue = `draw! your ${input} is the same as the computer's ${computerChoice} and you have drawn a total of ${numUserDraw}`;
    console.log(computerChoice);
    console.log("the computer drew scissors");
  }
  return myOutputValue;
};