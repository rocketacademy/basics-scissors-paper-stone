/* Create a basic version of Scissors Paper Stone where the user inputs one of "scissors", "paper", or "stone", the program internally randomly chooses scissors, paper, or stone, and the program outputs whether the user won, the program won, or it's a draw.
Rules: scissors beats paper, paper beats stone, and stone beats scissors. If both parties choose the same object, it's a draw. */

// Add state to your program such that it keeps track of the number of times the user has won and the number of times the computer has won. Output this win-loss record in a format you like in the program output. You can also output the number of draws and/or each party's winning percentage if you'd like.

// Ensuring the input is correct

// Pseudo: Creating variable for scissors, paper and stone and also the results.
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

// Psuedo: Creating random generator.
var randomGenerator = function () {
  var randomDecimal = Math.random() * 1;
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

// Pseudo: Put in input icon.
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
  if (isNaN(percentage)) {
    percentage = 0;
  }
  return percentage.toFixed(1);
};

// Pseudo: Rules creation.
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

// Print out results.
var main = function (userChoice, computerChoice) {
  var computerChoice = randomSPSGenerator();
  var iconComputer = getInputIcon(computerChoice);
  var iconUser = getInputIcon(userChoice);
  var results = getResults(userChoice, computerChoice);
  numbOfGames += 1;
  var winPercentage = calcWinLossPerc();
  var myOutputValue = `${results} <br><br> The computer chose ${computerChoice}${iconComputer} <br><br> You chose ${userChoice}${iconUser}.<br><br> Your win percentage is ${winPercentage}%. <br> <br> Now you can type again "scissors", "paper" or "stone" to play another round.`;
  if (
    userChoice != "stone" &&
    userChoice != "scissors" &&
    userChoice != "paper" &&
    userChoice != "reversed stone" &&
    userChoice != "reversed scissors" &&
    userChoice != "reversed paper"
  ) {
    return invalid;
  }
  console.log("User Choice");
  console.log(userChoice);
  console.log("");
  console.log("Computer Choice");
  console.log(computerChoice);
  console.log("");
  console.log("Number of games");
  console.log(numbOfGames);
  console.log("");
  console.log("Wins");
  console.log(win);
  return myOutputValue;
};
