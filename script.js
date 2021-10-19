// Global variables
var currentGameMode = "insert username.";
var userName = "";
var scissors = "scissors";
var paper = "paper";
var stone = "stone";
var loseMessage = "You lose! Bummer.";
var winMessage = "Congratulations, you win!";
var drawMessage = "It's a tie.";
var invalid =
  "Invalid input. You can only choose scissors, paper or stone. Please try again. ";
var numbOfGames = 0;
var win = 0;

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
  if (object == scissors) {
    return " ✂️";
  } else if (object == paper) {
    return " 🗒";
  } else if (object == stone) {
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
  if (computerChoice == userChoice) {
    return drawMessage;
  } else if (computerChoice == scissors && userChoice == paper) {
    return loseMessage;
  } else if (computerChoice == scissors && userChoice == stone) {
    win += 1;
    return winMessage;
  } else if (computerChoice == stone && userChoice == paper) {
    win += 1;
    return winMessage;
  } else if (computerChoice == stone && userChoice == scissors) {
    return loseMessage;
  } else if (computerChoice == paper && userChoice == stone) {
    return loseMessage;
  } else if (computerChoice == paper && userChoice == scissors) {
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

// normal game mode funtion
var runNormalMode = function (userChoice) {
  var computerChoice = randomSPSGenerator();
  var iconComputer = getInputIcon(computerChoice);
  var iconUser = getInputIcon(userChoice);
  var results = reversedGameResults(userChoice, computerChoice);
  numbOfGames += 1;
  var winPercentage = calcWinLossPerc();
  return `${results} <br><br> The computer chose ${computerChoice}${iconComputer} <br><br> You chose ${userChoice}${iconUser}.<br><br> Hey ${userName}! Your total game count is ${numbOfGames} and your win percentage is ${winPercentage}%. <br> <br> Now you can type again "scissors", "paper" or "stone" to play another round.`;
};

// reversed game mode funtion
var runReversedMode = function (userChoice) {
  var computerChoice = randomSPSGenerator();
  var iconComputer = getInputIcon(computerChoice);
  var iconUser = getInputIcon(userChoice);
  var results = reversedGameResults(userChoice, computerChoice);
  numbOfGames += 1;
  var winPercentage = calcWinLossPerc();
  return `${results} <br><br> The computer chose ${computerChoice}${iconComputer} <br><br> You chose ${userChoice}${iconUser}.<br><br> Hey ${userName}! Your total game count is ${numbOfGames}and your win percentage is ${winPercentage}%. <br> <br> Now you can type again "scissors", "paper" or "stone" to play another round. You have played a total of ${numbOfGames}`;
};

// Print out results.
var main = function (input) {
  var myOutputValue = "";
  // Setting the username
  if (
    currentGameMode == "insert username." &&
    input != "normal" &&
    input != "reversed"
  ) {
    if (Number.isNaN(Number(input)) == false) {
      myOutputValue = "Sorry please enter a name.";
    } else {
      userName = input;
      myOutputValue = `Hello ${userName}. You can choose "normal" mode or "reversed" mode to begin!`;
    }
  }
  // setting normal game mode
  if (input == "normal") {
    myOutputValue =
      "You are now in normal game mode. Please choose scissors, paper or stone.";
    currentGameMode = "normal game mode";
  }
  if (currentGameMode == "normal game mode" && input != "normal") {
    myOutputValue = runNormalMode(input);
  }

  //setting reversed game
  if (input == "reversed") {
    myOutputValue =
      "You are now in reversed game mode. Please choose scissors, paper or stone.";
    currentGameMode = "reversed mode";
  }
  if (currentGameMode == "reversed mode" && input != "reversed") {
    myOutputValue = runReversedMode(input);
  }

  return myOutputValue;
};
