// Global variables
var currentGameMode = "Insert username.";
var userName = "";
var scissors = "scissors";
var paper = "paper";
var stone = "stone";
var loseMessage = "You lose! Bummer.";
var winMessage = "Congratulations, you win!";
var drawMessage = "It's a tie.";
var invalid =
  "Invalid input. You can only choose scissors, paper or stone. Please try again. ";
var numbOfGames = NaN || 0;
var win = 0;

// Reversed input
var reversedScissors = "reversed scissors";
var reversedPaper = "reversed paper";
var reversedStone = "reversed stone";

// Creating random generator.
var randomGenerator = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal) + 1;
  return randomInteger;
};

// Pseudo: Creating random generator for the values of SPS(scissors, paper and stone).
var randomSPSGenerator = function () {
  var randomSPS = randomGenerator();
  if (randomSPS == 1) {
    return scissors;
  }
  if (randomSPS == 2) {
    return paper;
  }
  return stone;
};

// Put in input icon.
var getInputIcon = function (object) {
  if (object == scissors || object == reversedScissors) {
    return " ✂️";
  } else if (object == paper || object == reversedPaper) {
    return " 🗒";
  } else if (object == stone || object == reversedStone) {
    return " 🪨";
  }
};

// Create win/loss percentage
var calcWinLossPerc = function () {
  var percentage = (win / numbOfGames) * 100;
  // Adding this so that the output will not be NaN
  if (isNaN(percentage)) {
    percentage = 0;
  }
  return percentage.toFixed(1);
};

// Rules creation
var getResults = function (userChoice, computerChoice) {
  if (
    computerChoice == userChoice ||
    (computerChoice == scissors && userChoice == reversedScissors) ||
    (computerChoice == paper && userChoice == reversedPaper) ||
    (computerChoice == stone && userChoice == reversedStone)
  ) {
    return drawMessage;
  } else if (
    computerChoice == scissors &&
    (userChoice == paper || userChoice == reversedStone)
  ) {
    return loseMessage;
  } else if (
    computerChoice == scissors &&
    (userChoice == stone || userChoice == reversedPaper)
  ) {
    win += 1;
    return winMessage;
  } else if (
    computerChoice == stone &&
    (userChoice == paper || userChoice == reversedScissors)
  ) {
    win += 1;
    return winMessage;
  } else if (
    computerChoice == stone &&
    (userChoice == scissors || userChoice == reversedPaper)
  ) {
    return loseMessage;
  } else if (
    computerChoice == paper &&
    (userChoice == stone || userChoice == reversedScissors)
  ) {
    return loseMessage;
  } else if (
    computerChoice == paper &&
    (userChoice == scissors || userChoice == reversedStone)
  ) {
    win += 1;
    return winMessage;
  }
};

// Reversed game results
var reversedGameResults = function (userChoice, computerChoice) {
  if (computerChoice == userChoice) {
    return drawMessage;
  } else if (computerChoice == scissors && userChoice == paper) {
    win += 1;
    return winMessage;
  } else if (computerChoice == scissors && userChoice == stone) {
    return loseMessage;
  } else if (computerChoice == stone && userChoice == paper) {
    return loseMessage;
  } else if (computerChoice == stone && userChoice == scissors) {
    win += 1;
    return winMessage;
  } else if (computerChoice == paper && userChoice == stone) {
    win += 1;
    return winMessage;
  } else if (computerChoice == paper && userChoice == scissors) {
    return loseMessage;
  }
};

// Print out results.
var main = function (input) {
  var myOutputValue = "";
  // Setting the username
  if (currentGameMode == "Insert username.") {
    if (Number.isNaN(Number(input)) == false) {
      myOutputValue = "Sorry please enter a name.";
    } else {
      userName = input;
      currentGameMode = "SPS Game";
      myOutputValue = `Hello ${userName}. You may now choose scissors, paper or stone to start the game!`;
    }

    // Setting the game mode
    // else if is used so that it will run right after the change of game mode
  } else if (currentGameMode == "SPS Game") {
    var userChoice = input;
    var computerChoice = randomSPSGenerator();
    var iconComputer = getInputIcon(computerChoice);
    var iconUser = getInputIcon(userChoice);
    var results = getResults(userChoice, computerChoice);
    numbOfGames += 1;
    var winPercentage = calcWinLossPerc();
    myOutputValue = `${results} <br><br> The computer chose ${computerChoice}${iconComputer} <br><br> You chose ${userChoice}${iconUser}.<br><br> Hey ${userName}! Your win percentage is ${winPercentage}%. <br> <br> Now you can type again "scissors", "paper" or "stone" to play another round.`;
  }

  // Creating a reversed mode
  else if (currentGameMode == "Reversed SPS Game") {
    var userChoice = input;
    var computerChoice = randomSPSGenerator();
    var iconComputer = getInputIcon(computerChoice);
    var iconUser = getInputIcon(userChoice);
    var results = reversedGameResults(userChoice, computerChoice);
    numbOfGames += 1;
    var winPercentage = calcWinLossPerc();
    myOutputValue = `${results} <br><br> The computer chose ${computerChoice}${iconComputer} <br><br> You chose ${userChoice}${iconUser}.<br><br> Hey ${userName}! Your win percentage is ${winPercentage}%. <br> <br> Now you can type again "scissors", "paper" or "stone" to play another round.`;
  }
  // if statement for the conditions to output invalid if users enter random inputs
  else if (
    userChoice != "stone" &&
    userChoice != "scissors" &&
    userChoice != "paper" &&
    userChoice != "reversed stone" &&
    userChoice != "reversed scissors" &&
    userChoice != "reversed paper" &&
    userChoice != "reversed"
  ) {
    return invalid;
  }
  return myOutputValue;
};
