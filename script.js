var main = function (input) {
  // Input is unacceptable by default. If it is acceptable, the below if statements will change the output.
  var myOutputValue = "Try again, please input rock, paper, or scissors";
  var computerInput = rockPaperScissors();

  console.log("computer choice");
  console.log(computerInput);

  // If it is a draw.
  if (input == computerInput) {
    myOutputValue =
      "It's a draw! you chose " +
      input +
      " and computer chose " +
      computerInput;
  }

  // if you win.
  if (
    (input == "rock" && computerInput == "scissors") ||
    (input == "scissors" && computerInput == "paper") ||
    (input == "paper" && computerInput == "rock")
  ) {
    myOutputValue =
      "You have won! you chose " +
      input +
      " and computer chose " +
      computerInput;
  }

  // if you lose.
  if (
    (input == "rock" && computerInput == "paper") ||
    (input == "scissors" && computerInput == "rock") ||
    (input == "paper" && computerInput == "scissors")
  ) {
    myOutputValue =
      "You have lost! you chose " +
      input +
      " and computer chose " +
      computerInput;
  }
  return myOutputValue;
};

var rockPaperScissors = function () {
  var randomInteger = Math.random() * 3;
  var computerInteger = Math.floor(randomInteger);
  var computerChoice = "";
  if (computerInteger == 0) {
    computerChoice = "rock";
  }
  if (computerInteger == 1) {
    computerChoice = "paper";
  }
  if (computerInteger == 2) {
    computerChoice = "scissors";
  }

  return computerChoice;
};
