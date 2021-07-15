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

var main = function (input) {
  userInput = input;
  console.log("input: " + input);
  var gameResult = aiResult();
  console.log("result: " + gameResult);
  console.log("result format: " + rspFormat);

  var formatInput = format();
  console.log("format: " + formatInput);

  //program compares generated rsp to choice
  //draw condition
  if (
    (userInput == "scissors" && gameResult == "scissors") ||
    (userInput == "paper" && gameResult == "paper") ||
    (userInput == "stone" && gameResult == "stone")
  ) {
    return `You chose ${formatInput}. <br> The AI chose ${rspFormat}! <br> It's a draw. <br> Play again?`;
  }
  // win condition
  if (
    (userInput == "scissors" && gameResult == "paper") ||
    (userInput == "paper" && gameResult == "stone") ||
    (userInput == "stone" && gameResult == "scissors")
  ) {
    return `You chose ${formatInput}. <br> The AI chose ${rspFormat}! <br> You win. Play again?`;
  }

  // lose condition
  if (
    (userInput == "scissors" && gameResult == "stone") ||
    (userInput == "paper" && gameResult == "scissors") ||
    (userInput == "stone" && gameResult == "paper")
  ) {
    return `You chose ${formatInput}. <br> The AI chose ${rspFormat}!<br> You lose. Play again?`;
  }
  // if wrong input, prompt user to try again
  else if (
    userInput != "scissors" ||
    userInput != "paper" ||
    userInput != "stone"
  ) {
    return `Oops! You have input the wrong option. Please only type in "scissors" or "paper" or "stone" to join the game. Try again!`;
  }
  return rspResult;
};

// program generates rsp

var aiResult = function () {
  var rspNumber = 1 + Math.floor(Math.random() * 3);
  console.log(rspNumber);

  if (rspNumber == 1) {
    rspResult = "scissors";
    rspFormat = "scissors ✂️";
  }

  if (rspNumber == 2) {
    rspResult = "paper";
    rspFormat = "paper 🗒";
  }

  if (rspNumber == 3) {
    rspResult = "stone";
    rspFormat = "stone O";
  }
  return rspResult;
};

// program converts input into a different format
var format = function () {
  var newFormat = userInput;

  if (userInput == "scissors") {
    newFormat = "scissors ✂️";
  }
  if (userInput == "paper") {
    newFormat = "paper 🗒";
  } else if (userInput == "stone") {
    newFormat = "stone O";
  }

  console.log(newFormat);

  return newFormat;
};
