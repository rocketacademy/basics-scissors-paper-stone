var main = function (input) {
  var SCISSORS = "scissors";
  var PAPER = "paper";
  var STONE = "stone";
  var myOutputValue =
    "Invalid input. Please enter 'scissors', 'paper' or 'stone' to start the game.";

  // what the outcome is when computer plays "scissors"

  if (input == SCISSORS && randomObjectByComputer() == SCISSORS) {
    console.log("scissors-paper-stone!");
    myOutputValue =
      "You chose " + input + ". Computer chose scissors. It's a draw.";
  }

  if (input == PAPER && randomObjectByComputer() == SCISSORS) {
    myOutputValue =
      "You chose " + input + ". Computer chose scissors. You lost.";
  }

  if (input == STONE && randomObjectByComputer() == SCISSORS) {
    myOutputValue =
      "You chose " + input + ". Computer chose scissors. You won!";
  }

  // what the outcome is when computer plays "paper"
  if (input == SCISSORS && randomObjectByComputer() == PAPER) {
    console.log("scissors-paper-stone!");
    myOutputValue = "You chose " + input + ". Computer chose paper. You won!";
  }

  if (input == PAPER && randomObjectByComputer() == PAPER) {
    myOutputValue =
      "You chose " + input + ". Computer chose paper. It's a draw.";
  }

  if (input == STONE && randomObjectByComputer() == PAPER) {
    myOutputValue = "You chose " + input + ". Computer chose paper. You lost.";
  }

  // what the outcome is when computer plays "stone"
  if (input == SCISSORS && randomObjectByComputer() == STONE) {
    console.log("scissors-paper-stone!");
    myOutputValue = "You chose " + input + ". Computer chose stone. You lost.";
  }

  if (input == PAPER && randomObjectByComputer() == STONE) {
    myOutputValue = "You chose " + input + ". Computer chose stone. You won!";
  }

  if (input == STONE && randomObjectByComputer() == STONE) {
    myOutputValue =
      "You chose " + input + ". Computer chose stone. It's a draw.";
  }
  return myOutputValue;
};

// assigning values 0,1,2 to the object computer will draw

var randomObjectByComputer = function () {
  var SCISSORS = "scissors";
  var PAPER = "paper";
  var STONE = "stone";
  var randomDecimal = Math.random() * 3;
  var randomNum = Math.floor(randomDecimal);
  if (randomNum == 0) {
    return SCISSORS;
  }
  if (randomNum == 1) {
    return PAPER;
  }
  return STONE;
};
