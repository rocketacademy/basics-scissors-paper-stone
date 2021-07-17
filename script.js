// Generate a random integer from 1 to max inclusive
var generateRandomInteger = function (max) {
  var randomDecimal = Math.random() * max;
  var randomInteger = Math.floor(randomDecimal) + 1;
  return randomInteger;
};
//Generate scissors, paper or stone
var generateSPS = function () {
  var numSPSInRepertoire = 3;
  var random = generateRandomInteger(numSPSInRepertoire);
  if (random == 1) {
    return "scissors";
  }
  if (random == 2) {
    return "paper";
  }
  if (random == 3) {
    return "stone";
  }
};
//the game
var main = function (input) {
  var randomSPS = generateSPS();
  var genericOutput = `Your play: ${input}. Program's play: ${randomSPS}.`;
  if (input == randomSPS) {
    return `${genericOutput} You draw`;
  }
  if (input == "scissors" && randomSPS == "paper") {
    return `${genericOutput} You win`;
  }
  if (input == "scissors" && randomSPS == "stone") {
    return `${genericOutput} You lose`;
  }
  if (input == "paper" && randomSPS == "stone") {
    return `${genericOutput} You win`;
  }
  if (input == "paper" && randomSPS == "scissors") {
    return `${genericOutput} You lose`;
  }
  if (input == "stone" && randomSPS == "paper") {
    return `${genericOutput} You lose`;
  }
  if (input == "stone" && randomSPS == "scissors") {
    return `${genericOutput} You win`;
  }
  if (!(input == "scissors" || input == "paper" || input == "stone"))
    return "Invalid input, please choose either scissors, paper or stone.";
};
