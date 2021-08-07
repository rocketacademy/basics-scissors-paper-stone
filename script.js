// Basic Scissors Paper Stone

// Create a basic version of Scissors Paper Stone where the user inputs one of "scissors", "paper", or "stone", the program internally randomly chooses scissors, paper, or stone, and the program outputs whether the user won, the program won, or it's a draw.

// Rules: scissors beats paper, paper beats stone, and stone beats scissors. If both parties choose the same object, it's a draw.
// Input Validation

// Sometimes the user types bad and types something other than "scissors", "paper", or "stone" during gameplay. Add input validation to kindly let the user know that there are only 3 input options, and ask them to try again.

// user inputs choice
// default answer is lose
// if wrong input, prompt user to try again
// program generates rsp
// program compares generated rsp to choice
// program outputs three outcomes - win or draw or lose

//win-loss record

var computerWin = 0;
var playerWin = 0;
var draw = 0;
var currentGameMode = "";

var scissors = "scissors";
var paper = "paper";
var stone = "stone";

var reversePaper = "reverse paper";
var reverseStone = "reverse stone";
var reverseScissors = "reverse scissors";

// program generates rsp

var aiResult = function () {
  var rspNumber = 1 + Math.floor(Math.random() * 3);
  console.log(rspNumber);
  if (rspNumber == 1) {
    rspResult = scissors;
    rspFormat = "scissors ✂️";
    rspRevResult = reverseScissors;
    rspRevFormat = "reverse scissors ✂️";
  }
  if (rspNumber == 2) {
    rspResult = paper;
    rspFormat = "paper 🗒";
    rspRevResult = reversePaper;
    rspRevFormat = "reverse paper 🗒";
  }

  if (rspNumber == 3) {
    rspResult = stone;
    rspFormat = "stone O";
    rspRevResult = reverseStone;
    rspRevFormat = "reverse stone O";
  }
  return rspResult, rspFormat, rspRevFormat, rspRevResult;
};

// program converts input into a different format
var format = function () {
  var newFormat;
  if (userInput == scissors) {
    newFormat = "scissors ✂️";
  }
  if (userInput == paper) {
    newFormat = "paper 🗒";
  }
  if (userInput == stone) {
    newFormat = "stone O";
  }
  console.log("newFormat", newFormat);
  return newFormat;
};

//NORMAL MODE
var normalMode = function (userInput, newFormat, rspFormat, rspResult) {
  var defaultWinLossMessage;
  // draw condition
  if (userInput == rspResult) {
    // console.log("user input", userInput);
    // console.log("rsp result", rspResult);
    // console.log("rsp format", newFormat);
    // console.log("rsp format", rspFormat);
    draw += 1;
    defaultWinLossMessage = `You chose ${newFormat}. <br> The AI chose ${rspFormat}! <br> It's a draw. <br> Play again?<br>`;
    console.log(defaultWinLossMessage);
  }
  // win condition
  if (
    (userInput == scissors && rspResult == "paper") ||
    (userInput == paper && rspResult == "stone") ||
    (userInput == stone && rspResult == "scissors")
  ) {
    playerWin += 1;
    defaultWinLossMessage = `You chose ${newFormat}. <br> The AI chose ${rspFormat}! <br> It's a win. <br> Play again?<br>`;
    console.log(defaultWinLossMessage);
  }

  // lose condition
  if (
    (userInput == scissors && rspResult == "stone") ||
    (userInput == paper && rspResult == "scissors") ||
    (userInput == stone && rspResult == "paper")
  ) {
    computerWin += 1;
    defaultWinLossMessage = `You chose ${newFormat}. <br> The AI chose ${rspFormat}! <br> It's a loss. <br> Play again?<br>`;
    console.log(defaultWinLossMessage);
  }
  return defaultWinLossMessage;
};

//convert reverse input
var reverseFormat = function () {
  var newRevFormat;
  if (userInput == reverseScissors) {
    newRevFormat = "reverse scissors ✂️";
  }
  if (userInput == reversePaper) {
    newRevFormat = "reverse paper 🗒";
  }
  if (userInput == reverseStone) {
    newRevFormat = "reverse stone O";
  }
  console.log("reverse new format", newRevFormat);
  return newRevFormat;
};

// REVERSE GAME MODE
var reverseMode = function (
  userInput,
  newRevFormat,
  rspRevFormat,
  rspRevResult
) {
  var defaultWinLossMessage;
  // draw condition
  if (userInput == rspRevResult) {
    // console.log("rev user input", userInput);
    // console.log("rev rsp result", rspRevResult);
    // console.log("rev rsp format", newRevFormat);
    // console.log("rev rsp format", rspRevFormat);
    draw += 1;
    defaultWinLossMessage = `You chose ${newRevFormat}. <br> The AI chose ${rspRevFormat}! <br> It's a draw. <br> Play again?<br>`;
    console.log(defaultWinLossMessage);
  }
  // REVERSE lose condition
  if (
    (userInput == reverseScissors && rspRevResult == reversePaper) ||
    (userInput == reversePaper && rspRevResult == reverseStone) ||
    (userInput == reverseStone && rspRevResult == reverseScissors)
  ) {
    computerWin += 1;
    defaultWinLossMessage = `You chose ${newRevFormat}. <br> The AI chose ${rspRevFormat}! <br> It's a loss. <br> Play again?<br>`;
    console.log(defaultWinLossMessage);
  }

  // REVERSE win condition
  if (
    (userInput == reverseScissors && rspRevResult == reverseStone) ||
    (userInput == reversePaper && rspRevResult == reverseScissors) ||
    (userInput == reverseStone && rspRevResult == reversePaper)
  ) {
    playerWin += 1;
    defaultWinLossMessage = `You chose ${newRevFormat}. <br> The AI chose ${rspRevFormat}! <br> It's a win. <br> Play again?<br>`;
    console.log(defaultWinLossMessage);
  }
  return defaultWinLossMessage;
};

var main = function (input) {
  userInput = input;
  console.log("input: " + input);

  var newFormat = format();
  console.log("new format: " + newFormat);

  var gameResult = aiResult();
  console.log("game result: " + gameResult);
  console.log("rsp format : " + rspFormat);
  console.log("rsp rev format : " + rspRevFormat);
  console.log("rsp rev result : " + rspRevResult);

  if (userInput == "normal") {
    myOutputValue = `You have selected normal game mode. Type in "scissors", "paper" or "stone" to start game.`;
    currentGameMode = "playNormal";
    return myOutputValue;
  }

  if (userInput == "reverse") {
    myOutputValue = `You have selected reverse game mode. Type in "reverse scissors", "reverse paper" or "reverse stone" to start game.`;
    currentGameMode = "playReverse";
    return myOutputValue;
  }

  if (currentGameMode == "playNormal") {
    var playGame = normalMode(userInput, newFormat, rspFormat, rspResult);
    console.log("play game: " + playGame);

    var tallyMessage = `<b>Tally:</b> <br>Player Wins: ${playerWin}<br>Computer Wins: ${computerWin}<br>Draws: ${draw}`;

    myOutputValue = playGame + "<br>" + tallyMessage;
  }

  if (currentGameMode == "playReverse") {
    var revFormat = reverseFormat();
    console.log("rev format function", revFormat);

    var reverseGame = reverseMode(
      userInput,
      revFormat,
      rspRevFormat,
      rspRevResult
    );
    console.log("rev game: " + reverseGame);

    var tallyMessage = `<b>Tally:</b> <br>Player Wins: ${playerWin}<br>Computer Wins: ${computerWin}<br>Draws: ${draw}`;

    myOutputValue = reverseGame + "<br>" + tallyMessage;
  }

  if (
    currentGameMode != "playNormal" &&
    currentGameMode != "playReverse" &&
    input == ""
  ) {
    myOutputValue = `Please select a game mode. Type in "normal" or "reverse".`;
  }
  return myOutputValue;
};
//**REVERSE GAME */
//draw condition
//   if (
//     (userInput == "reverse scissors" && gameResult == "scissors") ||
//     (userInput == "reverse paper" && gameResult == "paper") ||
//     (userInput == "reverse stone" && gameResult == "stone")
//   ) {
//     return `You chose ${newFormat}. <br> The AI chose ${rspFormat}! <br> It's a draw. <br> Play again?`;
//   }
//   // lose condition
//   if (
//     (userInput == "reverse scissors" && gameResult == "paper") ||
//     (userInput == "reverse paper" && gameResult == "stone") ||
//     (userInput == "reverse stone" && gameResult == "scissors")
//   ) {
//     return `You chose ${newFormat}. <br> The AI chose ${rspFormat}! <br> You lose. Play again?`;
//   }

//   // win condition
//   if (
//     (userInput == "reverse scissors" && gameResult == "stone") ||
//     (userInput == "reverse paper" && gameResult == "scissors") ||
//     (userInput == "reverse stone" && gameResult == "paper")
//   ) {
//     return `You chose ${newFormat}. <br> The AI chose ${rspFormat}!<br> You lose. Play again?`;
//   }

//   //**REVERSE GAME */

//   // if wrong input, prompt user to try again
//   else if (
//     userInput != "scissors" ||
//     userInput != "paper" ||
//     userInput != "stone" ||
//     userInput != "reverse scissors" ||
//     userInput != "reverse paper" ||
//     userInput != "reverse stone"
//   ) {
//     return `Oops! You have input the wrong option. Please only type in "scissors" or "paper" or "stone" to join the game. Try again!`;
//   }
//   return rspResult;
// };
