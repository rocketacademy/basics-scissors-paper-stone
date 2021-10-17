var scissors = `scissors`;
var paper = `paper`;
var stone = `stone`;
var reversedScissors = "reversed scissors";
var reversedPaper = "reversed paper";
var reversedStone = "reversed stone";

// Generate a random integer from 1 to max inclusive
var generateRandomInteger = function (max) {
  var randomInteger = Math.floor(Math.random() * max);
  return randomInteger;
};

// // Generate a random roshambo based on random integer
var generateRandomRoshambo = function () {
  var numRoshambo = 3;
  var randomRoshamboNum = generateRandomInteger(numRoshambo);
  if (randomRoshamboNum == 0) {
    return scissors;
  }
  if (randomRoshamboNum == 1) {
    return paper;
  }
  if (randomRoshamboNum == 2) {
    return stone;
  }
  // If we reach this line, randomRoshamboNum was invalid.
  return "Oops! There was a bug!";
};

var main = function (input) {
  var randomRoshambo = generateRandomRoshambo();
  var genericOutput = `You chose ${input}. <br>The computer chose ${randomRoshambo}.`;
  var myOutputValue = `error`;
  if (
    input != scissors &&
    input != paper &&
    input != stone &&
    input != reversedScissors &&
    input != reversedPaper &&
    input != reversedStone
  ) {
    myOutputValue = `Please input either "scissors", "paper", or "stone" to play the game.'`;
  }
  if (input == randomRoshambo) {
    myOutputValue = `${genericOutput} <br><br>It's a draw! <br><br>Now you can type "scissors" "paper" or "stone" to play another round!`;
  }
  if (input == reversedScissors && randomRoshambo == scissors) {
    myOutputValue = `${genericOutput} <br><br>It's a draw! <br><br>Now you can type "scissors" "paper" or "stone" to play another round!`;
  }
  if (input == reversedPaper && randomRoshambo == paper) {
    myOutputValue = `${genericOutput} <br><br>It's a draw! <br><br>Now you can type "scissors" "paper" or "stone" to play another round!`;
  }
  if (input == reversedStone && randomRoshambo == stone) {
    myOutputValue = `${genericOutput} <br><br>It's a draw! <br><br>Now you can type "scissors" "paper" or "stone" to play another round!`;
  }
  if (input == scissors && randomRoshambo == paper) {
    myOutputValue = `${genericOutput} <br><br>You win! <br><br>Now you can type "scissors" "paper" or "stone" to play another round!`;
  }
  if (input == reversedScissors && randomRoshambo == stone) {
    myOutputValue = `${genericOutput} <br><br>You win! <br><br>Now you can type "scissors" "paper" or "stone" to play another round!`;
  }
  if (input == scissors && randomRoshambo == stone) {
    myOutputValue = `${genericOutput} <br><br>You lose! <br><br>Now you can type "scissors" "paper" or "stone" to play another round!`;
  }
  if (input == reversedScissors && randomRoshambo == paper) {
    myOutputValue = `${genericOutput} <br><br>You lose! <br><br>Now you can type "scissors" "paper" or "stone" to play another round!`;
  }
  if (input == paper && randomRoshambo == stone) {
    myOutputValue = `${genericOutput} <br><br>You win! <br><br>Now you can type "scissors" "paper" or "stone" to play another round!`;
  }
  if (input == reversedPaper && randomRoshambo == scissors) {
    myOutputValue = `${genericOutput} <br><br>You win! <br><br>Now you can type "scissors" "paper" or "stone" to play another round!`;
  }
  if (input == paper && randomRoshambo == scissors) {
    myOutputValue = `${genericOutput} <br><br>You lose! <br><br>Now you can type "scissors" "paper" or "stone" to play another round!`;
  }
  if (input == reversedPaper && randomRoshambo == stone) {
    myOutputValue = `${genericOutput} <br><br>You lose! <br><br>Now you can type "scissors" "paper" or "stone" to play another round!`;
  }
  if (input == stone && randomRoshambo == scissors) {
    myOutputValue = `${genericOutput} <br><br>You win! <br><br>Now you can type "scissors" "paper" or "stone" to play another round!`;
  }
  if (input == reversedStone && randomRoshambo == paper) {
    myOutputValue = `${genericOutput} <br><br>You win! <br><br>Now you can type "scissors" "paper" or "stone" to play another round!`;
  }
  if (input == stone && randomRoshambo == paper) {
    myOutputValue = `${genericOutput} <br><br>You lose! <br><br>Now you can type "scissors" "paper" or "stone" to play another round!`;
  }
  if (input == reversedStone && randomRoshambo == scissors) {
    myOutputValue = `${genericOutput} <br><br>You lose! <br><br>Now you can type "scissors" "paper" or "stone" to play another round!`;
  }
  return myOutputValue;
};
