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

var getIcon = function (roshambo) {
  if (roshambo == scissors || roshambo == reversedScissors) {
    return " ✂️";
  }
  if (roshambo == paper || roshambo == reversedPaper) {
    return " 🗒️";
  }
  if (roshambo == stone || roshambo == reversedStone) {
    return " ✊🏻";
  }
};

var main = function (input) {
  var randomRoshambo = generateRandomRoshambo();
  var inputIcon = getIcon(input);
  var roshamboIcon = getIcon(randomRoshambo);
  var genericMessage = `You chose ${input}${inputIcon}. <br>The computer chose ${randomRoshambo}${roshamboIcon}.`;
  var replayMessage = `Now you can type "scissors" "paper" or "stone" to play another round!`;

  //var myOutputValue = `error`;
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
    myOutputValue = `${genericMessage} <br><br>It's a draw! <br><br>${replayMessage}`;
  }
  if (input == reversedScissors && randomRoshambo == scissors) {
    myOutputValue = `${genericMessage} <br><br>It's a draw! <br><br>${replayMessage}`;
  }
  if (input == reversedPaper && randomRoshambo == paper) {
    myOutputValue = `${genericMessage} <br><br>It's a draw! <br><br>${replayMessage}`;
  }
  if (input == reversedStone && randomRoshambo == stone) {
    myOutputValue = `${genericMessage} <br><br>It's a draw! <br><br>${replayMessage}`;
  }
  if (input == scissors && randomRoshambo == paper) {
    myOutputValue = `${genericMessage} <br><br>You win! <br><br>${replayMessage}`;
  }
  if (input == reversedScissors && randomRoshambo == stone) {
    myOutputValue = `${genericMessage} <br><br>You win! <br><br>${replayMessage}`;
  }
  if (input == scissors && randomRoshambo == stone) {
    myOutputValue = `${genericMessage} <br><br>You lose! <br><br>${replayMessage}`;
  }
  if (input == reversedScissors && randomRoshambo == paper) {
    myOutputValue = `${genericMessage} <br><br>You lose! <br><br>${replayMessage}`;
  }
  if (input == paper && randomRoshambo == stone) {
    myOutputValue = `${genericMessage} <br><br>You win! <br><br>${replayMessage}`;
  }
  if (input == reversedPaper && randomRoshambo == scissors) {
    myOutputValue = `${genericMessage} <br><br>You win! <br><br>${replayMessage}`;
  }
  if (input == paper && randomRoshambo == scissors) {
    myOutputValue = `${genericMessage} <br><br>You lose! <br><br>${replayMessage}`;
  }
  if (input == reversedPaper && randomRoshambo == stone) {
    myOutputValue = `${genericMessage} <br><br>You lose! <br><br>${replayMessage}`;
  }
  if (input == stone && randomRoshambo == scissors) {
    myOutputValue = `${genericMessage} <br><br>You win! <br><br>${replayMessage}`;
  }
  if (input == reversedStone && randomRoshambo == paper) {
    myOutputValue = `${genericMessage} <br><br>You win! <br><br>${replayMessage}`;
  }
  if (input == stone && randomRoshambo == paper) {
    myOutputValue = `${genericMessage} <br><br>You lose! <br><br>${replayMessage}`;
  }
  if (input == reversedStone && randomRoshambo == scissors) {
    myOutputValue = `${genericMessage} <br><br>You lose! <br><br>${replayMessage}`;
  }
  return myOutputValue;
};
