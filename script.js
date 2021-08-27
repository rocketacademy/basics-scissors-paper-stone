var main = function (input) {
  // Reject non-RPS responses
  if (
    input != "scissors" &&
    input != "paper" &&
    input != "stone" &&
    input != "reversed scissors" &&
    input != "reversed paper" &&
    input != "reversed stone"
  ) {
    return "Please input scissors, paper or stone.";
  }

  var checkReverse = determineReverse(input);
  var botRPS = giveRandomRPS();
  var verifyWinner = didPlayerWin(input, botRPS);

  // Reverse the results if "reversed" is played.
  if (checkReverse == 1) {
    verifyWinner = didPlayerWin(botRPS, input);
  }

  return `You input ${input}, the bot input ${botRPS}.</br> You ${verifyWinner}!`;
};

var determineReverse = function (string) {
  // Return 1 to enable reversed mode if "reversed" is input
  if (string.split(" ")[0] == "reversed") {
    return 1;
  }
};

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

var didPlayerWin = function (player, bot) {
  // Return "Draw" if player and bot played the same
  if (player == bot) {
    return "Draw";
  }

  // Default output is "Lose"
  var outputWinOrLose = "Lose";

  // Compare player and bot to detect if player won
  if (player == "scissors") {
    if (bot == "paper") {
      outputWinOrLose = "Win";
    }
  }

  if (player == "paper") {
    if (bot == "stone") {
      outputWinOrLose = "Win";
    }
  }

  if (player == "stone") {
    if (bot == "scissors") {
      outputWinOrLose = "Win";
    }
  }

  return outputWinOrLose;
};
