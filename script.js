// ========== Basic Scissors Paper Stone ========== //

// The user inputs one of "scissors", "paper", or "stone".
// The program randomly choose "scissors", "paper", or "stone" by rolling a dice.

var rollDigit = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.ceil(randomDecimal);
  return randomInteger;
};

// If number is 1, it means scissors.
// If number is 2, it means stone.
// If number is 3, it means paper.

var assignInteger = function () {
  var digit = rollDigit();
  if (digit == 1) {
    var choice = "Scissors";
  }
  if (digit == 2) {
    var choice = "Stone";
  }
  if (digit == 3) {
    var choice = "Paper";
  }
  return choice;
};

var main = function (input) {
  var programChoice = assignInteger();
  var outputValue =
    "You choose " + input + " and program chooses " + programChoice + ".";

  // If user input is not "Scissors", "Paper", "Stone", output is "Your input is invalid. Please try again."

  if (input != "Scissors" || input != "Stone" || input != "Paper") {
    outputValue =
      "Your input is invalid. Please try again." +
      "<br>" +
      "<br>" +
      "Please key in either 'Scissors', 'Paper', or 'Stone' to play.";
  }

  // If program choice is same as user inputs, output is "it's a draw."

  if (programChoice == input) {
    outputValue =
      "You choose " +
      input +
      "." +
      "<br>" +
      "The computer choose " +
      programChoice +
      "." +
      "<br>" +
      "<br>" +
      "It's a draw." +
      "<br>" +
      "<br>" +
      "Now you can type 'Scisors', 'Paper' or 'Stone' to play another round.";
  }

  // If program choice is scissors and user inputs stone OR If program choice is stone and user inputs paper OR If program choice is paper and user inputs scissors, output is "The user wins."

  if (
    (programChoice == "Scissors" && input == "Stone") ||
    (programChoice == "Stone" && input == "Paper") ||
    (programChoice == "Paper" && input == "Scissors")
  ) {
    outputValue =
      "You choose " +
      input +
      "." +
      "<br>" +
      "The computer choose " +
      programChoice +
      "." +
      "<br>" +
      "<br>" +
      "You win! Congratulations!" +
      "<br>" +
      "<br>" +
      "Now you can type 'Scisors', 'Paper' or 'Stone' to play another round.";
  }

  // If program choice is scissors and user inputs paper OR If program choice is stone and user inputs scissors OR If program choice is paper and user inputs stone, output is "The program wins."

  if (
    (programChoice == "Scissors" && input == "Paper") ||
    (programChoice == "Stone" && input == "Scissors") ||
    (programChoice == "Paper" && input == "Stone")
  ) {
    outputValue =
      "You choose " +
      input +
      "." +
      "<br>" +
      "The computer choose " +
      programChoice +
      "." +
      "<br>" +
      "<br>" +
      "You lose! Too bad!" +
      "<br>" +
      "<br>" +
      "Now you can type 'Scisors', 'Paper' or 'Stone' to play another round.";
  }

  return outputValue;
};
