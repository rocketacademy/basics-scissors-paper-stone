/**
 * Scissors Paper Stone (Part 2)
 *
 * user inputs one of "scissors", "paper", or "stone"
 * program internally randomly chooses scissors, paper, or stone
 * outputs whether the user won, the program won, or it's a draw.
 * Regular rules: scissors beats paper, paper beats stone, and stone beats scissors.
 * If both parties choose the same object, it's a draw.
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

// check if user won
var checkIfUserWon = function (userSPS, randomSPS) {
  if (currentGameMode == "regular SPS") {
    return (
      (userSPS == SCISSORS && randomSPS == PAPER) ||
      (userSPS == PAPER && randomSPS == STONE) ||
      (userSPS == STONE && randomSPS == SCISSORS)
    );
  } else if (currentGameMode == "reversed SPS") {
    // reverse game mode rules for winning
    return (
      (userSPS == REVERSED_SCISSORS && randomSPS == STONE) ||
      (userSPS == REVERSED_PAPER && randomSPS == SCISSORS) ||
      (userSPS == REVERSED_STONE && randomSPS == PAPER)
    );
  }
};

// check if it is a draw
var checkIfDraw = function (userSPS, randomSPS) {
  if (currentGameMode == "reversed SPS") {
    return (
      (userSPS == REVERSED_SCISSORS && randomSPS == SCISSORS) ||
      (userSPS == REVERSED_PAPER && randomSPS == PAPER) ||
      (userSPS == REVERSED_STONE && randomSPS == STONE)
    );
  } // if regular game mode
  return userSPS == randomSPS;
};

// Calculate how many times the user wins out of the total number of games played
var getWinRateInfo = function () {
  var winRate = Math.floor((numUserWon / numGamesPlayed) * 100);
  console.log(`win rate: ${winRate}`);
  if (winRate < 50) {
    return `You won ${numUserWon}/${numGamesPlayed} of games played. Win rate for ${userName}: ${winRate}%. Don't give up!`;
  }
  if (winRate >= 50) {
    return `You won ${numUserWon}/${numGamesPlayed} of games played. Win rate for ${userName}: ${winRate}%. Good job, keep going!`;
  }
};

// function to select game mode
var selectGameMode = function (input) {
  //user input "reverse" or "regular" to select game mode
  if (input == "reverse") {
    currentGameMode = "reversed SPS";
    return `You are in ${currentGameMode} game mode. Please input "${REVERSED_SCISSORS}", "${REVERSED_PAPER}" or "${REVERSED_STONE}" to play!`;
  } else if (input == "regular") {
    currentGameMode = "regular SPS";
    return `You are in ${currentGameMode} game mode. Please input "${SCISSORS}", "${PAPER}" or "${STONE}" to play!`;
  } //validate input if other than "regular/reverse"
  return `Please input "regular" or "reverse" to select game mode!`;
};

// function for regular SPS game mode
var regGameMode = function (input) {
  userSPS = input;
  console.log(`userSPS: ${userSPS}`);
  var randomSPS = generateRandomSPS();
  var genericOutput = `Your choice: ${userSPS}. <br> Program's choice: ${randomSPS}. <br><br>`;
  var gameInstruction = `Now you can type "scissors" "paper" or "stone" to play another round!`;
  // Get display message about the win rate
  var winRateInfo = getWinRateInfo();
  // if input "reverse", change game mode
  if (input == "reverse") {
    currentGameMode = "reversed SPS";
    return `You are in reverse game mode. Please input "${REVERSED_SCISSORS}", "${REVERSED_PAPER}" or "${REVERSED_STONE}" to play!`;
  }
  // if user wins
  else if (checkIfUserWon(userSPS, randomSPS)) {
    numUserWon += 1;
    numGamesPlayed += 1;
    // Recalculate the win rate and get a new display message
    winRateInfo = getWinRateInfo();
    return `${genericOutput} ${userName}, <strong> you win! </strong> <br><br> You won ${numUserWon} times and program won ${numProgWon} times. ${winRateInfo} <br><br> ${gameInstruction}`;
  }
  //check if it is a draw
  else if (checkIfDraw(userSPS, randomSPS)) {
    numGamesPlayed += 1;
    winRateInfo = getWinRateInfo();
    return `${genericOutput} It's a draw! <br><br> You won ${numUserWon} times and program won ${numProgWon} times. ${winRateInfo} <br><br> ${gameInstruction}`;
  } //if user lose
  else if (
    (userSPS == SCISSORS && randomSPS == STONE) ||
    (userSPS == PAPER && randomSPS == SCISSORS) ||
    (userSPS == STONE && randomSPS == PAPER)
  ) {
    numProgWon += 1;
    numGamesPlayed += 1;
    winRateInfo = getWinRateInfo();
    return `${genericOutput} ${userName}, you lose! <br><br> You won ${numUserWon} times and program won ${numProgWon} times. ${winRateInfo} <br><br> ${gameInstruction}`;
  }
  //input validation: if user input other than SPS, remind user to input correct word
  return `Hi ${userName}! Please input "scissors", "paper" or "stone" only to play the game!`;
};

// function for reverse SPS game mode
var reverseGameMode = function (input) {
  userSPS = input;
  console.log(`userSPS: ${userSPS}`);
  var randomSPS = generateRandomSPS();
  var genericOutput = `Your choice: ${userSPS}. <br> Program's choice: ${randomSPS}. <br><br>`;
  var gameInstruction = `Now you can type "reversed scissors", "reversed paper" or "reversed stone" to play another round!`;
  // Get display message about the win rate
  var winRateInfo = getWinRateInfo();
  // if input "regular", change game mode
  if (input == "regular") {
    currentGameMode = "regular SPS";
    return `You are in regular game mode. Please input "${SCISSORS}", "${PAPER}" or "${STONE}" to play!`;
  }
  // if user wins
  if (checkIfUserWon(userSPS, randomSPS)) {
    numUserWon += 1;
    numGamesPlayed += 1;
    // Recalculate the win rate and get a new display message
    winRateInfo = getWinRateInfo();
    return `${genericOutput} ${userName}, <strong> you win! </strong> <br><br> You won ${numUserWon} times and program won ${numProgWon} times. ${winRateInfo} <br><br> ${gameInstruction}`;
  }
  //check if it is a draw
  if (checkIfDraw(userSPS, randomSPS)) {
    numGamesPlayed += 1;
    winRateInfo = getWinRateInfo();
    return `${genericOutput} It's a draw! <br><br> You won ${numUserWon} times and program won ${numProgWon} times. ${winRateInfo} <br><br> ${gameInstruction}`;
  } //if user lose
  else if (
    (userSPS == REVERSED_SCISSORS && randomSPS == PAPER) ||
    (userSPS == REVERSED_PAPER && randomSPS == STONE) ||
    (userSPS == REVERSED_STONE && randomSPS == SCISSORS)
  ) {
    numProgWon += 1;
    numGamesPlayed += 1;
    return `${genericOutput} ${userName}, you lose! <br><br> You won ${numUserWon} times and program won ${numProgWon} times. ${winRateInfo} <br><br> ${gameInstruction}`;
  }
  //input validation: if user input other than reversed SPS, remind user to input correct word
  return `Hi ${userName}! Please input "reversed scissors", "reversed paper" or "reversed stone" only to play the game!`;
};

var main = function (input) {
  var myOutputValue = "";
  if (currentGameMode == "waiting for user name") {
    //set username
    userName = input;
    console.log(`user name: ${userName}`);
    //switch to waiting for game mode
    currentGameMode = "waiting for game mode";
    return `Hi ${userName}, please input "regular" or "reverse" to select game mode!`;
  } //user to select game mode
  else if (currentGameMode == "waiting for game mode") {
    myOutputValue = selectGameMode(input);
  } //regular game
  else if (currentGameMode == "regular SPS") {
    myOutputValue = regGameMode(input);
  } //reverse game
  else if ((currentGameMode = "reversed SPS")) {
    myOutputValue = reverseGameMode(input);
  }
  return myOutputValue;
};
