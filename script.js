var scissors = `scissors`;
var paper = `paper`;
var stone = `stone`;
var reversedScissors = "reversed scissors";
var reversedPaper = "reversed paper";
var reversedStone = "reversed stone";
var numPlayerWins = 0;
var numComputerWins = 0;
var numDraw = 0;

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

var getWinsMessage = function () {
  var winsMessage = `Player Wins: ${numPlayerWins}, Computer Wins: ${numComputerWins} & Draw: ${numDraw}`;
  return winsMessage;
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
    numDraw += 1;
    myOutputValue = `${genericMessage} <br><br>It's a draw! <br><br>${getWinsMessage()}<br><br>${replayMessage}`;
  }
  if (input == reversedScissors && randomRoshambo == scissors) {
    numDraw += 1;
    myOutputValue = `${genericMessage} <br><br>It's a draw! <br><br>${getWinsMessage()}<br><br>${replayMessage}`;
  }
  if (input == reversedPaper && randomRoshambo == paper) {
    numDraw += 1;
    myOutputValue = `${genericMessage} <br><br>It's a draw! <br><br>${getWinsMessage()}<br><br>${replayMessage}`;
  }
  if (input == reversedStone && randomRoshambo == stone) {
    numDraw += 1;
    myOutputValue = `${genericMessage} <br><br>It's a draw! <br><br>${getWinsMessage()}<br><br>${replayMessage}`;
  }
  if (input == scissors && randomRoshambo == paper) {
    numPlayerWins += 1;
    myOutputValue = `${genericMessage} <br><br>You win! <br><br>${getWinsMessage()}<br><br>${replayMessage}`;
  }
  if (input == reversedScissors && randomRoshambo == stone) {
    numPlayerWins += 1;
    myOutputValue = `${genericMessage} <br><br>You win! <br><br>${getWinsMessage()}<br><br>${replayMessage}`;
  }
  if (input == scissors && randomRoshambo == stone) {
    numComputerWins += 1;
    myOutputValue = `${genericMessage} <br><br>You lose! <br><br>${getWinsMessage()}<br><br>${replayMessage}`;
  }
  if (input == reversedScissors && randomRoshambo == paper) {
    numComputerWins += 1;
    myOutputValue = `${genericMessage} <br><br>You lose! <br><br>${getWinsMessage()}<br><br>${replayMessage}`;
  }
  if (input == paper && randomRoshambo == stone) {
    numPlayerWins += 1;
    myOutputValue = `${genericMessage} <br><br>You win! <br><br>${getWinsMessage()}<br><br>${replayMessage}`;
  }
  if (input == reversedPaper && randomRoshambo == scissors) {
    numPlayerWins += 1;
    myOutputValue = `${genericMessage} <br><br>You win! <br><br>${getWinsMessage()}<br><br>${replayMessage}`;
  }
  if (input == paper && randomRoshambo == scissors) {
    numComputerWins += 1;
    myOutputValue = `${genericMessage} <br><br>You lose! <br><br>${getWinsMessage()}<br><br>${replayMessage}`;
  }
  if (input == reversedPaper && randomRoshambo == stone) {
    numComputerWins += 1;
    myOutputValue = `${genericMessage} <br><br>You lose! <br><br>${getWinsMessage()}<br><br>${replayMessage}`;
  }
  if (input == stone && randomRoshambo == scissors) {
    numPlayerWins += 1;
    myOutputValue = `${genericMessage} <br><br>You win! <br><br>${getWinsMessage()}<br><br>${replayMessage}`;
  }
  if (input == reversedStone && randomRoshambo == paper) {
    numPlayerWins += 1;
    myOutputValue = `${genericMessage} <br><br>You win! <br><br>${getWinsMessage()}<br><br>${replayMessage}`;
  }
  if (input == stone && randomRoshambo == paper) {
    numComputerWins += 1;
    myOutputValue = `${genericMessage} <br><br>You lose! <br><br>${getWinsMessage()}<br><br>${replayMessage}`;
  }
  if (input == reversedStone && randomRoshambo == scissors) {
    numComputerWins += 1;
    myOutputValue = `${genericMessage} <br><br>You lose! <br><br>${getWinsMessage()}<br><br>${replayMessage}`;
  }
  return myOutputValue;
};
