/**
 * Scissors Paper Stone (Part 2)
 *
 * user inputs one of "scissors", "paper", or "stone"
 * program internally randomly chooses scissors, paper, or stone
 * outputs whether the user won, the program won, or it's a draw.
 * Regular rules: scissors beats paper, paper beats stone, and stone beats scissors. If both parties choose the same object, it's a draw.
 */

var SCISSORS = "scissors";
var PAPER = "paper";
var STONE = "stone";
var REVERSED_SCISSORS = "reversed scissors";
var REVERSED_PAPER = "reversed paper";
var REVERSED_STONE = "reversed stone";

// to count number of games played, user/program wins
var numGamesPlayed = 0;
var numUserWon = 0;
var numProgWon = 0;

// set current game mode
var currentGameMode = "waiting for user name";
var userName = "";
var userSPS = "";

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
    return SCISSORS;
  }
  if (randomSPSoutcome == 2) {
    return PAPER;
  }
  if (randomSPSoutcome == 3) {
    return STONE;
  }
  return "Oops! There may be error!";
};

var checkIfUserWon = function (userSPS, randomSPS) {
  if (
    (userSPS == SCISSORS && randomSPS == PAPER) ||
    (userSPS == PAPER && randomSPS == STONE) ||
    (userSPS == STONE && randomSPS == SCISSORS) ||
    //include reverse game
    (userSPS == REVERSED_SCISSORS && randomSPS == STONE) ||
    (userSPS == REVERSED_PAPER && randomSPS == SCISSORS) ||
    (userSPS == REVERSED_STONE && randomSPS == PAPER)
  ) {
    return true;
  }
  return false;
};

// Calculate how many times the user wins out of the total number of games played
var getWinRateInfo = function () {
  var winRate = Math.floor((numUserWon / numGamesPlayed) * 100);
  console.log(`win rate: ${winRate}`);
  return `You won ${numUserWon}/${numGamesPlayed} of games played. Win rate for ${userName}: ${winRate}%.`;
};

var main = function (input) {
  var myOutputValue = "";
  if (currentGameMode == "waiting for user name") {
    //set username
    userName = input;
    console.log(`user name: ${userName}`);
    //switch to sps game mode
    currentGameMode = "spsGame";
    myOutputValue = `Hi ${userName}, please input "scissors", "paper" or "stone" to start game!`;
    //
  } else if (currentGameMode == "spsGame") {
    //input validation: if user input other than SPS, remind user to input correct word
    if (
      input != SCISSORS &&
      input != PAPER &&
      input != STONE &&
      input != REVERSED_SCISSORS &&
      input != REVERSED_PAPER &&
      input != REVERSED_STONE
    ) {
      return `Hi ${userName}! Please input "scissors", "paper" or "stone" only to play the game!`;
    }
    userSPS = input;
    console.log(`userSPS: ${userSPS}`);

    //increase number of game played
    numGamesPlayed += 1;
    var randomSPS = generateRandomSPS();
    var genericOutput = `Your choice: ${userSPS}. <br>Program's choice: ${randomSPS}. <br><br>`;
    var gameInstruction = `Now you can type "scissors" "paper" or "stone" to play another round!`;
    // Get display message about the win rate
    var winRateInfo = getWinRateInfo();

    //if user wins
    if (checkIfUserWon(userSPS, randomSPS)) {
      numUserWon += 1;
      // Recalculate the win rate and get a new display message
      winRateInfo = getWinRateInfo();
      return `${genericOutput} ${userName}, you win! <br><br> You won ${numUserWon} times and program won ${numProgWon} times. ${winRateInfo} <br><br> ${gameInstruction}`;
    }
    //check if it is a draw
    if (
      userSPS == randomSPS ||
      (userSPS == REVERSED_SCISSORS && randomSPS == SCISSORS) ||
      (userSPS == REVERSED_PAPER && randomSPS == PAPER) ||
      (userSPS == REVERSED_STONE && randomSPS == STONE)
    ) {
      return `${genericOutput} It's a draw! You won ${numUserWon} times and program won ${numProgWon} times. ${winRateInfo} <br><br> ${gameInstruction}`;
    }
    //if user lose
    numProgWon += 1;
    return `${genericOutput} ${userName}, you lose! <br><br> You won ${numUserWon} times and program won ${numProgWon} times. ${winRateInfo} <br><br> ${gameInstruction}`;
  }
  return myOutputValue;
};
