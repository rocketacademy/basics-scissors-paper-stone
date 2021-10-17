// Global Varaibles
var countGameTurn = 0;
var countWinTurn = 0;
var countDrawTurn = 0;
var countLoseTurn = 0;
var SCISSORS = `Scissors`;
var PAPER = `Paper`;
var STONE = `Stone`;
var REVERSED_SCISSORS = `Reversed Scissors`;
var REVERSED_PAPER = `Reversed Paper`;
var REVERSED_STONE = `Reversed Stone`;
var countPlayerscore = 0;
var countComputerscore = 0;
var prevWinner = "";
var currentWinner = "";
var PLAYER = `Player`;
var COMPUTER = `Computer`;

// Game modes
var gameMode = "";
var BASIC = `Basic SPS`;
var REVERSED = `Reversed SPS`;
var KOREAN = `Korean SPS`;
var COM = `COM vs COM`;

// User Name prompt
{
  var name = prompt("Your name", "");
  var color = "green";
  document.write(
    `<CENTER><FONT FACE=ARIAdL,VERDANA COLOR=${color} SIZE=5>Welcome! ${name}.<br>Please enter one of the following to choose a game mode. <br>1. ${BASIC}<br>2. ${REVERSED}<br>3.${KOREAN}<br>4.${COM}</FONT><HR NOSHADE WIDTH=450></CENTER><P>`
  );
}

// generate random Integer from 0 to 2
var generateRandomInteger = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  console.log(`randomInteger =${randomInteger}`);
  return randomInteger;
};

// generate Computer Choice
var generateProgamInput = function () {
  var randomInteger = generateRandomInteger();
  if (randomInteger == 0) progInput = SCISSORS;
  if (randomInteger == 1) progInput = PAPER;
  if (randomInteger == 2) progInput = STONE;
  console.log(`progam input =${progInput}`);
  return progInput;
};

// generate random choice for player
var generateRanInput = function () {
  var randomInteger = generateRandomInteger();
  if (randomInteger == 0) randomInput = SCISSORS;
  if (randomInteger == 1) randomInput = PAPER;
  if (randomInteger == 2) randomInput = STONE;
  console.log(`random player input =${randomInput}`);
  return randomInput;
};

// Record Win Loss
var generateWinLossRecord = function () {
  var record = countWinTurn / countGameTurn;
  console.log(`game record =${record}`);
  if (record >= 0.5) {
    return `Lucky!`;
  }
  if (record < 0.5) {
    return `Bummer!`;
  }
};

// Game mode selection;
var selectGameMode = function (input) {
  if (input == `1`) {
    gameMode = BASIC;
    myOutPutValue = `Selected Game Mode is ${BASIC} <br>${instructionBasic()}`;
  }
  if (input == `2`) {
    gameMode = REVERSED;
    myOutPutValue = `Selected Game Mode is ${REVERSED} <br>${instructionReversed()}`;
  }
  if (input == `3`) {
    gameMode = KOREAN;
    myOutPutValue = `Selected Game Mode is ${KOREAN} <br>${instructionKorean()}`;
  }
  if (input == `4`) {
    gameMode = COM;
    myOutPutValue = `Selected Game Mode is ${COM} <br>${instructionCom()}`;
  }
  if (input != `1` && input != `2` && input != `3` && input != `4`)
    myOutPutValue = `Current game Mode is ${gameMode}`;
  return gameMode;
};

// Instructions for Basic SPS
var instructionBasic = function () {
  return `Enter ${SCISSORS}, ${PAPER} or ${STONE} to play.`;
};

// Instructions for Reversed SPS
var instructionReversed = function () {
  return `Enter ${REVERSED_SCISSORS}, ${REVERSED_PAPER} or ${REVERSED_STONE} to play.`;
};

// Instructions for Korean SPS
var instructionKorean = function () {
  return `Enter ${SCISSORS}, ${PAPER} or ${STONE} to play.<br>muk-jji-ppa!`;
};

// Instructions for COM vs COM SPS
var instructionCom = function () {
  return `Just Click 'Submit button' to play`;
};

// Result for Basic SPS
var checkResultBasic = function (input) {
  var progInput = generateProgamInput();
  countGameTurn += 1;
  // draw game
  if (input == progInput) {
    countDrawTurn += 1;
    myOutPutValue = `Draw!<br>Computer chose ${progInput}.<br>${name} chose ${input}<br>${name} win ${countWinTurn}/${countGameTurn} turns. ${generateWinLossRecord()}.<br>${countDrawTurn} were draw games. <br>Computer wins ${countLoseTurn}/${countGameTurn}.`;
  }
  // win game
  if (
    (input == SCISSORS && progInput == PAPER) ||
    (input == STONE && progInput == SCISSORS) ||
    (input == PAPER && progInput == STONE)
  ) {
    countWinTurn += 1;
    myOutPutValue = `Win!<br>Computer chose ${progInput}.<br>${name} chose ${input}<br>${name} win ${countWinTurn}/${countGameTurn} turns. ${generateWinLossRecord()}.<br>${countDrawTurn} were draw games. <br>Computer wins ${countLoseTurn}/${countGameTurn}.`;
  }
  // Lose game
  if (
    (input == SCISSORS && progInput == STONE) ||
    (input == STONE && progInput == PAPER) ||
    (input == PAPER && progInput == SCISSORS)
  ) {
    countLoseTurn += 1;
    myOutPutValue = `Lose!<br>Computer chose ${progInput}.<br>${name} chose ${input}<br>${name} win ${countWinTurn}/${countGameTurn} turns. ${generateWinLossRecord()}.<br>${countDrawTurn} were draw games. <br>Computer wins ${countLoseTurn}/${countGameTurn}.`;
  }
};

// Result for Reversed SPS
var checkResultReversed = function (input) {
  var progInput = generateProgamInput();
  countGameTurn += 1;
  // draw game
  if (input == `Reversed ${progInput}`) {
    myOutPutValue = `Draw!<br>Computer chose ${progInput}.<br>${name} chose ${input}<br>${name} win ${countWinTurn}/${countGameTurn} turns. ${generateWinLossRecord()}.<br>${countDrawTurn} were draw games. <br>Computer wins ${countLoseTurn}/${countGameTurn}.`;
  }
  // win game
  if (
    (input == REVERSED_SCISSORS && progInput == STONE) ||
    (input == REVERSED_STONE && progInput == PAPER) ||
    (input == REVERSED_PAPER && progInput == SCISSORS)
  ) {
    countWinTurn += 1;
    myOutPutValue = `Win!<br>Computer chose ${progInput}.<br>${name} chose ${input}<br>${name} win ${countWinTurn}/${countGameTurn} turns. ${generateWinLossRecord()}.<br>${countDrawTurn} were draw games. <br>Computer wins ${countLoseTurn}/${countGameTurn}.`;
  }
  // Lose game
  if (
    (input == REVERSED_SCISSORS && progInput == PAPER) ||
    (input == REVERSED_STONE && progInput == SCISSORS) ||
    (input == REVERSED_PAPER && progInput == STONE)
  ) {
    countLoseTurn += 1;
    myOutPutValue = `Lose!<br>Computer chose ${progInput}.<br>${name} chose ${input}<br>${name} win ${countWinTurn}/${countGameTurn} turns. ${generateWinLossRecord()}.<br>${countDrawTurn} were draw games. <br>Computer wins ${countLoseTurn}/${countGameTurn}.`;
  }
};

// Result for Korean SPS
var checkResultKorean = function (input) {
  var progInput = generateProgamInput();
  countGameTurn += 1;
  // 1st draw turn
  if (input == progInput && countPlayerscore == 0 && countComputerscore == 0) {
    myOutPutValue = `Computer chose ${progInput}.<br>${name} chose ${input}<br>Total turns played this game = ${countGameTurn}<br>Continue playing to win the game.<br>muk-jji-ppa!`;
  }
  // when player wins a turn
  if (
    (input == SCISSORS && progInput == PAPER) ||
    (input == STONE && progInput == SCISSORS) ||
    (input == PAPER && progInput == STONE)
  ) {
    prevWinner = PLAYER;
    countPlayerscore += 1;
    myOutPutValue = `Computer chose ${progInput}.<br>${name} chose ${input}<br>${prevWinner} wins this turn<br>Total turns played this game = ${countGameTurn}<br>Continue playing to win the game.<br>muk-jji-ppa!`;
  }
  // when computer wins a turn
  if (
    (input == SCISSORS && progInput == STONE) ||
    (input == STONE && progInput == PAPER) ||
    (input == PAPER && progInput == SCISSORS)
  ) {
    prevWinner = COMPUTER;
    countComputerscore += 1;
    myOutPutValue = `Computer chose ${progInput}.<br>${name} chose ${input}<br>${prevWinner} wins this turn<br>Total turns played this game = ${countGameTurn}<br>Continue playing to win the game.<br>muk-jji-ppa!`;
  }
  console.log(`player score = ${countPlayerscore}`);
  console.log(`computer score = ${countComputerscore}`);
  // Win Game
  if (
    input == progInput &&
    (countPlayerscore > countComputerscore ||
      countComputerscore > countPlayerscore)
  ) {
    myOutPutValue = `Grand Winner of this game is ${prevWinner}<br>Computer chose ${progInput}.<br>${name} chose ${input}<br>Winner of the last turn is ${prevWinner}<br>Total tuns played this game = ${countGameTurn}`;
    countPlayerscore = 0;
    countComputerscore = 0;
    countGameTurn = 0;
  }
};
// Result for COM vs COM SPS
var checkResultCom = function () {
  var progInput = generateProgamInput();
  var randomInput = generateRanInput();
  countGameTurn += 1;
  // draw game
  if (randomInput == progInput) {
    countDrawTurn += 1;
    myOutPutValue = `Draw!<br>Computer chose ${progInput}.<br>${name} chose ${randomInput}<br>${name} win ${countWinTurn}/${countGameTurn} turns. ${generateWinLossRecord()}.<br>${countDrawTurn} were draw games. <br>Computer wins ${countLoseTurn}/${countGameTurn}.`;
  }
  // win game
  if (
    (randomInput == SCISSORS && progInput == PAPER) ||
    (randomInput == STONE && progInput == SCISSORS) ||
    (randomInput == PAPER && progInput == STONE)
  ) {
    countWinTurn += 1;
    myOutPutValue = `Win!<br>Computer chose ${progInput}.<br>${name} chose ${randomInput}<br>${name} win ${countWinTurn}/${countGameTurn} turns. ${generateWinLossRecord()}.<br>${countDrawTurn} were draw games. <br>Computer wins ${countLoseTurn}/${countGameTurn}.`;
  }
  // Lose game
  if (
    (randomInput == SCISSORS && progInput == STONE) ||
    (randomInput == STONE && progInput == PAPER) ||
    (randomInput == PAPER && progInput == SCISSORS)
  ) {
    countLoseTurn += 1;
    myOutPutValue = `Lose!<br>Computer chose ${progInput}.<br>${name} chose ${randomInput}<br>${name} win ${countWinTurn}/${countGameTurn} turns. ${generateWinLossRecord()}.<br>${countDrawTurn} were draw games. <br>Computer wins ${countLoseTurn}/${countGameTurn}.`;
  }
};

// Main function
var main = function (input) {
  gameMode = selectGameMode(input);
  if (!gameMode) {
    return `Please select a game Mode to Start`;
  }
  console.log(`Selected Game Mode = ${gameMode}`);
  if (
    gameMode == BASIC &&
    (input == SCISSORS || input == PAPER || input == STONE)
  ) {
    checkResultBasic(input);
  }
  if (
    gameMode == REVERSED &&
    (input == REVERSED_SCISSORS ||
      input == REVERSED_PAPER ||
      input == REVERSED_STONE)
  ) {
    checkResultReversed(input);
  }
  if (
    gameMode == KOREAN &&
    (input == SCISSORS || input == PAPER || input == STONE)
  ) {
    checkResultKorean(input);
  }
  if (gameMode == COM) {
    checkResultCom();
  }
  return myOutPutValue;
};
