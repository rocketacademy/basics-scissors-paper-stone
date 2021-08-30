// Global variables
var playerWins = 0;
var playerLosses = 0;
var playerDraws = 0;
var gameState = "username";
var userName = "";
var gameReverse = 0;
var lastWinner = "";

var main = function (input) {
  // Game state: Confirm username
  if (gameState == "username") {
    userName = input;
    gameState = "main";
    return `Hello ${userName}! Scissors, paper or stone?`;
  }

  if (input == "reverse") {
    gameReverse = 1;
    return `Time to play in reverse~!`;
  }

  // Game state: Main game
  if (inputValidator(input)) {
    return "Please input scissors, paper or stone.";
  }
  var checkReverse = gameReverse + determineReverse(input);
  var botRPS = giveRandomRPS();
  var verifyWinner = "";
  console.log(checkReverse);
  if (checkReverse == 1) {
    verifyWinner = didPlayerWin(botRPS, input);
  } else {
    verifyWinner = didPlayerWin(input, botRPS);
  }

  // End of game - Record and return results
  scoreTracker(verifyWinner);
  var myOutput = `
  You input ${input}, the bot input ${botRPS}.</br> 
  ${userName} ${verifyWinner}s! 
  The current score is ${playerWins}W-${playerLosses}L-${playerDraws}D. </br>
  ${playerFeedback(playerWins, playerLosses)}`;

  return myOutput;
};

// Returns true on non-RPS responses
var inputValidator = function (input) {
  if (
    input != "scissors" &&
    input != "paper" &&
    input != "stone" &&
    input != "reversed scissors" &&
    input != "reversed paper" &&
    input != "reversed stone" &&
    input != "reverse"
  ) {
    return true;
  }
};

// Return 1 to reverse results if "reversed" is input
var determineReverse = function (string) {
  if (string.split(" ")[0] == "reversed") {
    return 1;
  } else {
    return 0;
  }
};

// Return scissors, paper or stone randomly
var giveRandomRPS = function () {
  // Generate a decimal from 0 to 2 inclusive
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);

  // Return scissors, paper or stone based on randomInteger
  // Default result (0) is scissors
  var randomResult = "scissors";

  if (randomInteger == 1) {
    randomResult = "paper";
  }

  if (randomInteger == 2) {
    randomResult = "stone";
  }

  console.log(randomResult);
  return randomResult;
};

// Return a string based on whether the player wins, loses or draws
var didPlayerWin = function (player, bot) {
  // Return "Draw" if player and bot played the same
  // If reversed, the player will be on the "bot" side.
  if (
    player == bot ||
    bot.split(" ")[1] == player ||
    player.split(" ")[1] == bot
  ) {
    return "Draw";
  }

  // Default output is "Lose"
  var outputWinOrLose = "Lose";

  // Compare player and bot to detect if player won
  if (player == "scissors" || player == "reversed scissors") {
    if (bot == "paper" || bot == "reversed paper") {
      outputWinOrLose = "Win";
    }
  }

  if (player == "paper" || player == "reversed paper") {
    if (bot == "stone" || bot == "reversed stone") {
      outputWinOrLose = "Win";
    }
  }

  if (player == "stone" || player == "reversed stone") {
    if (bot == "scissors" || bot == "reversed scissors") {
      outputWinOrLose = "Win";
    }
  }

  return outputWinOrLose;
};

// Change the scores based on the result
var scoreTracker = function (result) {
  if (result == "Win") {
    playerWins += 1;
  }

  if (result == "Lose") {
    playerLosses += 1;
  }

  if (result == "Draw") {
    playerDraws += 1;
  }
};

// Write a message based on how the player is doing
var playerFeedback = function (wins, losses) {
  if (wins > losses) {
    return `Doing good ${userName}!`;
  }
  if (wins < losses) {
    return `Don't give up ${userName}!`;
  }
  if (wins == losses) {
    return `Close game ${userName}!`;
  }
};
