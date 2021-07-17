var SCISSORS = "scissors";
var PAPER = "paper";
var STONE = "stone";
var REVERSE_SCISSORS = "reverse scissors";
var REVERSE_PAPER = "reverse paper";
var REVERSE_STONE = "reverse stone";

var programOutput = function () {
  // scissors = 1
  // paper = 2
  // stone = 3
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var randomNumber = randomInteger + 1;

  return randomNumber;
};

var main = function (input) {
  var programChoice = programOutput();
  console.log("this is the random number " + programChoice + "");
  var myOutputValue =
    "Whoops, seems like we can't process your input. Please input one of these choices below: scissors, paper, stone.";

  // if user gives scissors and the program gives paper, user wins.
  // if user gives paper and the program gives stone, user wins.
  // if user gives stone and the program gives scissors, user wins.
  if (
    (input == SCISSORS && programChoice == 2) ||
    (input == PAPER && programChoice == 3) ||
    (input == STONE && programChoice == 1)
  ) {
    myOutputValue = "Congrats! You won. Up for another game?";
  }

  // if user gives (scissors and the program gives stone, user loses.
  // if user gives paper and the program gives scissors, user loses.
  // if user gives stone and the program gives paper, user loses.
  if (
    (input == SCISSORS && programChoice == 3) ||
    (input == PAPER && programChoice == 1) ||
    (input == STONE && programChoice == 2)
  ) {
    myOutputValue = "Oh no, you lost. Wanna try again?";
  }

  // if user inputs == program choice, it's a draw
  if (
    ((input == SCISSORS || input == REVERSE_SCISSORS) && programChoice == 1) ||
    ((input == PAPER || input == REVERSE_PAPER) && programChoice == 2) ||
    ((input == STONE || input == REVERSE_STONE) && programChoice == 3)
  ) {
    myOutputValue = "It's a draw!";
  }

  // if user inputs == reversed + (rock, paper, scissors), the result would be the reversed result.
  if (
    (input == REVERSE_SCISSORS && programChoice == 3) ||
    (input == REVERSE_PAPER && programChoice == 1) ||
    (input == REVERSE_STONE && programChoice == 2)
  ) {
    myOutputValue =
      "Congrats! You won in this reversed version. Up for another game?";
  }

  if (
    (input == REVERSE_SCISSORS && programChoice == 2) ||
    (input == REVERSE_PAPER && programChoice == 3) ||
    (input == REVERSE_STONE && programChoice == 1)
  ) {
    myOutputValue = "Oh no, you lost this reversed version. Try again?";
  }

  return myOutputValue;
};
