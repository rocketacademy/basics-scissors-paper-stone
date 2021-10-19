var scissors = `scissors`;
var paper = `paper`;
var stone = `stone`;
var reversedScissors = "reversed scissors";
var reversedPaper = "reversed paper";
var reversedStone = "reversed stone";
var replayMessage = `Now you can type "scissors" "paper" or "stone" to play another round!`;
var numPlayerWins = 0;
var numComputerWins = 0;
var numDraw = 0;
var playerName = ``;

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

var getGenericMessage = function (playerRoshambo, computerRoshambo) {
  var playerRoshamboIcon = getIcon(playerRoshambo);
  var computerRoshamboIcon = getIcon(computerRoshambo);
  var genericMessage = `You chose ${playerRoshambo}${playerRoshamboIcon}. <br>The computer chose ${computerRoshambo}${computerRoshamboIcon}.`;
  return genericMessage;
};

var getWinsMessage = function (playerName) {
  var winsMessage = `${playerName} Wins: ${numPlayerWins}, Computer Wins: ${numComputerWins} & Draw: ${numDraw} <br><br>${replayMessage}`;
  return winsMessage;
};

/* var validateUser = function (userInput){
  if ()
}; */

var validateRoshamboInput = function (roshamboInput) {
  return (
    roshamboInput == scissors ||
    roshamboInput == paper ||
    roshamboInput == stone ||
    roshamboInput == reversedScissors ||
    roshamboInput == reversedPaper ||
    roshamboInput == reversedStone
  );
};

var main = function (input) {
  if (!playerName) {
    if (!input) {
      return `Please enter your name to begin game!`;
    }
    playerName = input;
    return `Welcome ${playerName}, <br><br>${replayMessage} `;
  }
  var randomRoshambo = generateRandomRoshambo();
  //var myOutputValue = `error`;
  var roshamboInputValid = validateRoshamboInput(input);
  if (roshamboInputValid == false) {
    myOutputValue = `Please input either "scissors", "paper", or "stone" to play the game.'`;
  }
  if (roshamboInputValid == true) {
    var playerRoshambo = input;
  }

  if (playerRoshambo == randomRoshambo) {
    numDraw += 1;
    myOutputValue = `${getGenericMessage(
      playerRoshambo,
      randomRoshambo
    )} <br><br>It's a draw! <br><br>${getWinsMessage(playerName)}`;
  }
  if (playerRoshambo == reversedScissors && randomRoshambo == scissors) {
    numDraw += 1;
    myOutputValue = `${getGenericMessage(
      playerRoshambo,
      randomRoshambo
    )} <br><br>It's a draw! <br><br>${getWinsMessage(playerName)}`;
  }
  if (playerRoshambo == reversedPaper && randomRoshambo == paper) {
    numDraw += 1;
    myOutputValue = `${getGenericMessage(
      playerRoshambo,
      randomRoshambo
    )} <br><br>It's a draw! <br><br>${getWinsMessage(playerName)}`;
  }
  if (playerRoshambo == reversedStone && randomRoshambo == stone) {
    numDraw += 1;
    myOutputValue = `${getGenericMessage(
      playerRoshambo,
      randomRoshambo
    )} <br><br>It's a draw! <br><br>${getWinsMessage(playerName)}`;
  }
  if (playerRoshambo == scissors && randomRoshambo == paper) {
    numPlayerWins += 1;
    myOutputValue = `${getGenericMessage(
      playerRoshambo,
      randomRoshambo
    )} <br><br>You win! <br><br>${getWinsMessage(playerName)}`;
  }
  if (playerRoshambo == reversedScissors && randomRoshambo == stone) {
    numPlayerWins += 1;
    myOutputValue = `${getGenericMessage(
      playerRoshambo,
      randomRoshambo
    )} <br><br>You win! <br><br>${getWinsMessage(playerName)}`;
  }
  if (playerRoshambo == scissors && randomRoshambo == stone) {
    numComputerWins += 1;
    myOutputValue = `${getGenericMessage(
      playerRoshambo,
      randomRoshambo
    )} <br><br>You lose! <br><br>${getWinsMessage(playerName)}`;
  }
  if (playerRoshambo == reversedScissors && randomRoshambo == paper) {
    numComputerWins += 1;
    myOutputValue = `${getGenericMessage(
      playerRoshambo,
      randomRoshambo
    )} <br><br>You lose! <br><br>${getWinsMessage(playerName)}`;
  }
  if (playerRoshambo == paper && randomRoshambo == stone) {
    numPlayerWins += 1;
    myOutputValue = `${getGenericMessage(
      playerRoshambo,
      randomRoshambo
    )} <br><br>You win! <br><br>${getWinsMessage(playerName)}`;
  }
  if (playerRoshambo == reversedPaper && randomRoshambo == scissors) {
    numPlayerWins += 1;
    myOutputValue = `${getGenericMessage(
      playerRoshambo,
      randomRoshambo
    )} <br><br>You win! <br><br>${getWinsMessage(playerName)}`;
  }
  if (playerRoshambo == paper && randomRoshambo == scissors) {
    numComputerWins += 1;
    myOutputValue = `${getGenericMessage(
      playerRoshambo,
      randomRoshambo
    )} <br><br>You lose! <br><br>${getWinsMessage(playerName)}`;
  }
  if (playerRoshambo == reversedPaper && randomRoshambo == stone) {
    numComputerWins += 1;
    myOutputValue = `${getGenericMessage(
      playerRoshambo,
      randomRoshambo
    )} <br><br>You lose! <br><br>${getWinsMessage(playerName)}`;
  }
  if (playerRoshambo == stone && randomRoshambo == scissors) {
    numPlayerWins += 1;
    myOutputValue = `${getGenericMessage(
      playerRoshambo,
      randomRoshambo
    )} <br><br>You win! <br><br>${getWinsMessage(playerName)}`;
  }
  if (playerRoshambo == reversedStone && randomRoshambo == paper) {
    numPlayerWins += 1;
    myOutputValue = `${getGenericMessage(
      playerRoshambo,
      randomRoshambo
    )} <br><br>You win! <br><br>${getWinsMessage(playerName)}`;
  }
  if (playerRoshambo == stone && randomRoshambo == paper) {
    numComputerWins += 1;
    myOutputValue = `${getGenericMessage(
      playerRoshambo,
      randomRoshambo
    )} <br><br>You lose! <br><br>${getWinsMessage(playerName)}`;
  }
  if (playerRoshambo == reversedStone && randomRoshambo == scissors) {
    numComputerWins += 1;
    myOutputValue = `${getGenericMessage(
      playerRoshambo,
      randomRoshambo
    )} <br><br>You lose! <br><br>${getWinsMessage(playerName)}`;
  }
  return myOutputValue;
};
