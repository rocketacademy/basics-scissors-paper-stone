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

//Icon for SRS
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

//Generic SRS game Message
var getGenericMessage = function (playerRoshambo, computerRoshambo) {
  var playerRoshamboIcon = getIcon(playerRoshambo);
  var computerRoshamboIcon = getIcon(computerRoshambo);
  var genericMessage = `You chose ${playerRoshambo}${playerRoshamboIcon}. <br>The computer chose ${computerRoshambo}${computerRoshamboIcon}.`;
  return genericMessage;
};

//Win results Message
var getWinsMessage = function (playerName) {
  var winsMessage = `${playerName} Wins: ${numPlayerWins}, Computer Wins: ${numComputerWins} & Draw: ${numDraw} <br><br>${replayMessage}`;
  return winsMessage;
};

/* var validateUser = function (userInput){
  if ()
}; */

//Function to validate SRS input
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
  //validate username input
  if (!playerName) {
    if (!input) {
      return `Please enter your name to begin game!`;
    }
    playerName = input;
    return `Welcome ${playerName}, <br><br>${replayMessage} `;
  }
  //Computer generate random SRS
  var randomRoshambo = generateRandomRoshambo();

  //Validate SRS input
  var roshamboInputValid = validateRoshamboInput(input.toLowerCase());
  if (roshamboInputValid == false) {
    myOutputValue = `Please input either "scissors", "paper", or "stone" to play the game.'`;
  }
  if (roshamboInputValid == true) {
    var playerRoshambo = input.toLowerCase();
  }

  if (
    playerRoshambo == randomRoshambo ||
    (playerRoshambo == reversedScissors && randomRoshambo == scissors) ||
    (playerRoshambo == reversedPaper && randomRoshambo == paper) ||
    (playerRoshambo == reversedStone && randomRoshambo == stone)
  ) {
    numDraw += 1;
    myOutputValue = `${getGenericMessage(
      playerRoshambo,
      randomRoshambo
    )} <br><br>It's a draw! <br><br>${getWinsMessage(playerName)}`;
  }
  if (
    (playerRoshambo == scissors && randomRoshambo == paper) ||
    (playerRoshambo == reversedScissors && randomRoshambo == stone) ||
    (playerRoshambo == paper && randomRoshambo == stone) ||
    (playerRoshambo == reversedPaper && randomRoshambo == scissors) ||
    (playerRoshambo == stone && randomRoshambo == scissors) ||
    (playerRoshambo == reversedStone && randomRoshambo == paper)
  ) {
    numPlayerWins += 1;
    myOutputValue = `${getGenericMessage(
      playerRoshambo,
      randomRoshambo
    )} <br><br>You win! <br><br>${getWinsMessage(playerName)}`;
  }
  if (
    (playerRoshambo == scissors && randomRoshambo == stone) ||
    (playerRoshambo == reversedScissors && randomRoshambo == paper) ||
    (playerRoshambo == paper && randomRoshambo == scissors) ||
    (playerRoshambo == reversedPaper && randomRoshambo == stone) ||
    (playerRoshambo == stone && randomRoshambo == paper) ||
    (playerRoshambo == reversedStone && randomRoshambo == scissors)
  ) {
    numComputerWins += 1;
    myOutputValue = `${getGenericMessage(
      playerRoshambo,
      randomRoshambo
    )} <br><br>You lose! <br><br>${getWinsMessage(playerName)}`;
  }
  return myOutputValue;
};
