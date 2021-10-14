/* Create a basic version of Scissors Paper Stone where the user inputs one of "scissors", "paper", or "stone", the program internally randomly chooses scissors, paper, or stone, and the program outputs whether the user won, the program won, or it's a draw.
Rules: scissors beats paper, paper beats stone, and stone beats scissors. If both parties choose the same object, it's a draw. */

// Ensuring the input is correct

// Pseudo: Creating variable for scissors, paper and stone and also the results.
var scissors = "scissors";
var paper = "paper";
var stone = "stone";
var lose = "You lose! ";
var win = "Congratulations, you win!";
var draw = "It's a tie.";
var invalid =
  "Invalid input. You can only choose scissors, paper or stone. Please try again. ";

// Reversed input
var reversedScissors = "reversed scissors";
var reversedPaper = "reversed paper";
var reversedStone = "reversed stone";

// Psuedo: Creating random generator.
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

// Pseudo: Rules creation.
var getResults = function (userChoice, computerChoice) {
  if (
    computerChoice == userChoice ||
    (computerChoice == scissors && userChoice == reversedScissors) ||
    (computerChoice == paper && userChoice == reversedPaper) ||
    (computerChoice == stone && userChoice == reversedStone)
  ) {
    return draw;
  } else if (
    computerChoice == scissors &&
    (userChoice == paper || userChoice == reversedStone)
  ) {
    return lose;
  } else if (
    computerChoice == scissors &&
    (userChoice == stone || userChoice == reversedPaper)
  ) {
    return win;
  } else if (
    computerChoice == stone &&
    (userChoice == paper || userChoice == reversedScissors)
  ) {
    return win;
  } else if (
    computerChoice == stone &&
    (userChoice == scissors || userChoice == reversedPaper)
  ) {
    return lose;
  } else if (
    computerChoice == paper &&
    (userChoice == stone || userChoice == reversedScissors)
  ) {
    return lose;
  } else if (
    computerChoice == paper &&
    (userChoice == scissors || userChoice == reversedStone)
  ) {
    return win;
  }
};

// Print out results.
var main = function (userChoice, computerChoice) {
  var computerChoice = randomSPSGenerator();
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
  console.log(userChoice);
  console.log(" ");
  console.log(computerChoice);
  return `${getResults(
    userChoice,
    computerChoice
  )} <br><br> Computer chose ${computerChoice} and you chose ${userChoice}. <br> <br> Now you can type again "scissors", "paper" or "stone" to play another round.`;
};
