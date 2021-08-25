var rollDice = function () {
  var randomDecimal = Math.random() * 3;
  var computerMove = Math.floor(randomDecimal);
  return computerMove;
};

var generateComputerMove = function () {
  var randomNumber = rollDice();
  if (randomNumber == 0) {
    return "scissors";
  }
  if (randomNumber == 1) {
    return "paper";
  }
  if (randomNumber == 2) {
    return "stone";
  }
};

var main = function (input) {
  var computerMove = generateComputerMove();
  console.log(computerMove);

  // If both moves are the same,
  if (input == computerMove) {
    myOutputValue = "It's a draw!";

    // If player wins,
  } else if (input == "scissors" && computerMove == "paper") {
    myOutputValue = "You played Scissors. Computer played You win!";
  } else if (input == "paper" && computerMove == "stone") {
    myOutputValue = "You played Paper. Computer played Stone. You win!";
  } else if (input == "stone" && computerMove == "scissors") {
    myOutputValue = "You played Stone. Computer played Scissors. You win!";

    // If player loses,
  } else if (input == "scissors" && computerMove == "stone") {
    myOutputValue = "You played Scissors. Computer played Stone. You lose!";
  } else if (input == "paper" && computerMove == "scissors") {
    myOutputValue = "You played Paper. Computer played Scissors. You lose!";
  } else if (input == "stone" && computerMove == "paper") {
    myOutputValue = "You played Stone. Computer played Paper. You lose!";

    // If player makes a typo error,
  } else if (input != "stone" || input != "paper" || input != "scissors") {
    myOutputValue =
      "Error. Please input only one of the following valid options: 1) scissors 2) paper 3)stone to make a move.";
  }
  return myOutputValue;
};
