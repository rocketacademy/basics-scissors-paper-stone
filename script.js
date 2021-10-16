var scissors = `scissor`;
var paper = `paper`;
var stone = `stone`;

// Generate a random integer from 1 to max inclusive
var generateRandomInteger = function (max) {
  var randomDecimal = Math.random() * max;
  var randomInteger = Math.floor(randomDecimal) + 1;
  return randomInteger;
};

var generateRandomRoshambo = function () {
  var numRoshambo = 3;
  var randomRoshamboNum = generateRandomInteger(numRoshambo);
  if (randomRoshamboNum == 1) {
    return scissors;
  }
  // "else if" is implied in the following if statements because we return in each if statement.
  if (randomRoshamboNum == 2) {
    return paper;
  }
  if (randomRoshamboNum == 3) {
    return stone;
  }
  // If we reach this line, randomDishNum was invalid.
  return "Oops! There was a bug!";
};

var main = function (input) {
  var randomRoshambo = generateRandomRoshambo();
  var genericOutput = `You chose ${input}. <br>The computer chose ${randomRoshambo}.`;
  var myOutputValue = `Please type "scissors" "paper" or "stone" to play`;
  if (input == randomRoshambo) {
    myOutputValue = `${genericOutput} <br><br>It's a draw! <br><br>Now you can type "scissors" "paper" or "stone" to play another round!`;
  }
  if (input == scissors && randomRoshambo == paper) {
    myOutputValue = `${genericOutput} <br><br>You win! <br><br>Now you can type "scissors" "paper" or "stone" to play another round!`;
  }
  if (input == scissors && randomRoshambo == stone) {
    myOutputValue = `${genericOutput} <br><br>You lose! <br><br>Now you can type "scissors" "paper" or "stone" to play another round!`;
  }
  if (input == paper && randomRoshambo == stone) {
    myOutputValue = `${genericOutput} <br><br>You win! <br><br>Now you can type "scissors" "paper" or "stone" to play another round!`;
  }
  if (input == paper && randomRoshambo == scissors) {
    myOutputValue = `${genericOutput} <br><br>You lose! <br><br>Now you can type "scissors" "paper" or "stone" to play another round!`;
  }
  if (input == stone && randomRoshambo == scissors) {
    myOutputValue = `${genericOutput} <br><br>You win! <br><br>Now you can type "scissors" "paper" or "stone" to play another round!`;
  }
  if (input == stone && randomRoshambo == paper) {
    myOutputValue = `${genericOutput} <br><br>You lose! <br><br>Now you can type "scissors" "paper" or "stone" to play another round!`;
  }
  return myOutputValue;
};
