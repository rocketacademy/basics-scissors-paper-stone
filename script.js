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
      "You chose " +
      input +
      " ✂️.<br><br> Computer chose scissors ✂️. <br><br> It's a draw.";
  }

  if (input == PAPER && randomObjectByComputer() == SCISSORS) {
    myOutputValue =
      "You chose " +
      input +
      " 🗒. <br><br> Computer chose scissors ✂️. <br><br>  You lost.";
  }

  if (input == STONE && randomObjectByComputer() == SCISSORS) {
    myOutputValue =
      "You chose " +
      input +
      " 💎. <br><br> Computer chose scissors ✂️.<br><br> You won!";
  }

  // what the outcome is when computer plays "paper"
  if (input == SCISSORS && randomObjectByComputer() == PAPER) {
    console.log("scissors-paper-stone!");
    myOutputValue =
      "You chose " +
      input +
      " ✂️.<br><br> Computer chose paper 🗒.<br><br> You won!";
  }

  if (input == PAPER && randomObjectByComputer() == PAPER) {
    myOutputValue =
      "You chose " +
      input +
      " 🗒.<br><br> Computer chose paper 🗒.<br><br> It's a draw.";
  }

  if (input == STONE && randomObjectByComputer() == PAPER) {
    myOutputValue =
      "You chose " +
      input +
      " 💎.<br><br> Computer chose paper 🗒. <br><br>You lost.";
  }

  // what the outcome is when computer plays "stone"
  if (input == SCISSORS && randomObjectByComputer() == STONE) {
    console.log("scissors-paper-stone!");
    myOutputValue =
      "You chose " +
      input +
      " ✂️.<br><br> Computer chose stone 💎.<br><br> You lost.";
  }

  if (input == PAPER && randomObjectByComputer() == STONE) {
    myOutputValue =
      "You chose " +
      input +
      " 🗒.<br><br> Computer chose stone 💎.<br><br> You won!";
  }

  if (input == STONE && randomObjectByComputer() == STONE) {
    myOutputValue =
      "You chose " +
      input +
      " 💎.<br><br> Computer chose stone 💎.<br><br> It's a draw.";
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
