// ----- Rules of game-----
// Scissors beats paper
// Paper beats stone
// Stone beats scissors

// User input: scissors, paper or stone
// Process:
// - generate random number between 1 and 3
// - correspond the number to computer's choice: scissors, paper or stone
// - compare the user's and computer's choice to determine winner
// Output: result of game (Win, Lose or Draw)

var getRandomNumber = function () {
  // generate random decimal from 0 to 3 (inclusive of 0, exclusive of 3)
  var randomDecimal = Math.random() * 3;
  // convert decimal into whole number and ensure it's between 1 and 3 (inclusive of 1 and 3)
  var randomNumber = Math.floor(randomDecimal) + 1;
  return randomNumber;
};

var getComputerChoice = function () {
  // create variable for computer's choice
  var computerChoice = 0;
  // set computer's choice based on random number generated
  var choiceNum = getRandomNumber();
  if (choiceNum == 1) {
    computerChoice = "scissors";
  }
  if (choiceNum == 2) {
    computerChoice = "paper";
  }
  if (choiceNum == 3) {
    computerChoice = "stone";
  }
  // return computer's choice
  console.log("Random number generated: ", choiceNum);
  console.log("Computer's choice: ", computerChoice);
  return computerChoice;
};

var determineResult = function (userChoice, comChoice) {
  var result =
    "Sorry, I didn't recognise that. Please type 'scissors', 'paper' or 'stone' to start the game.";

  // Draw:
  if (userChoice == comChoice) {
    result = "It's a draw";
  }

  // Win:
  if (
    (userChoice == "scissors" && comChoice == "paper") ||
    (userChoice == "paper" && comChoice == "stone") ||
    (userChoice == "stone" && comChoice == "scissors")
  ) {
    result = "You win";
  }

  // Lose
  if (
    (userChoice == "scissors" && comChoice == "stone") ||
    (userChoice == "paper" && comChoice == "scissors") ||
    (userChoice == "stone" && comChoice == "paper")
  ) {
    result = "You lose";
  }

  // and the result is:
  console.log("Game result: ", result, "!!");
  return result;
};

var main = function (input) {
  console.log("***** LET'S PLAY A GAME *****");
  // create variable for computer's choice
  var opponentChoice = getComputerChoice();
  var myOutputValue = determineResult(input, opponentChoice);
  console.log("");
  return myOutputValue;
};
