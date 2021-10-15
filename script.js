// ========== Reversed Scissors Paper Stone ========== //

// The user inputs one of "reversed scissors", "reversed paper", or "reversed stone".
// The program randomly choose "reversed scissors", "reversed paper", or "reversed stone" by rolling a dice.

var rollDigit = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.ceil(randomDecimal);
  return randomInteger;
};

// If number is 1, it means reversed scissors.
// If number is 2, it means reversed stone.
// If number is 3, it means reversed paper.

var assignInteger = function () {
  var digit = rollDigit();
  if (digit == 1) {
    var choice = "Reversed Scissors";
  }
  if (digit == 2) {
    var choice = "Reversed Stone";
  }
  if (digit == 3) {
    var choice = "Reversed Paper";
  }
  return choice;
};

var main = function (input) {
  var programChoice = assignInteger();
  var outputValue =
    "You choose " + input + " and program chooses " + programChoice + ".";

  // If user input is not "Reversed Scissors", "Reversed Paper", "Reversed Stone", output is "Your input is invalid. Please try again."

  if (
    input != "Reversed Scissors" ||
    input != "Reversed Stone" ||
    input != "Reversed Paper"
  ) {
    outputValue =
      "Your input is invalid. Please try again." +
      "<br>" +
      "<br>" +
      "Please key in either 'Reversed Scissors', 'Reversed Paper', or 'Reversed Stone' to play.";
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
      "Now you can type 'Reversed Scissors', 'Reversed Paper' or 'Reversed Stone' to play another round.";
  }

  // If program choice is reversed scissors and user inputs reversed stone OR If program choice is reversed stone and user inputs reversed paper OR If program choice is reversed paper and user inputs reversed scissors, output is "The user loses."

  if (
    (programChoice == "Reversed Scissors" && input == "Reversed Stone") ||
    (programChoice == "Reversed Stone" && input == "Reversed Paper") ||
    (programChoice == "Reversed Paper" && input == "Reversed Scissors")
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
      "You lose! Too Bad!" +
      "<br>" +
      "<br>" +
      "Now you can type 'Reversed Scissors', 'Reversed Paper' or 'Reversed Stone' to play another round.";
  }

  // If program choice is reversed scissors and user inputs reversed paper OR If program choice is reversed stone and user inputs reversed scissors OR If program choice is reversed paper and user inputs reversed stone, output is "The program loses."

  if (
    (programChoice == "Reversed Scissors" && input == "Reversed Paper") ||
    (programChoice == "Reversed Stone" && input == "Reversed Scissors") ||
    (programChoice == "Reversed Paper" && input == "Reversed Stone")
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
      "Now you can type 'Reversed Scissors', 'Reversed Paper' or 'Reversed Stone' to play another round.";
  }

  return outputValue;
};
