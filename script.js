var main = function (input) {
  var computerInput = rockPaperScissors();
  var myOutputValue = "Hello world. PLease input rock, paper , or scissors.";
  // Input is unacceptable by default. If it is acceptable, the below if statements will change the output.

  if (
    (input == "rock" && computerInput == "paper") ||
    (input == "scissors" && computerInput == "rock") ||
    (input == "paper" && computerInput == "scissors") ||
    (input == "reversed rock" && computerInput == "scissors") ||
    (input == "reversed scissors" && computerInput == "paper") ||
    (input == "reversed paper" && computerInput == "rock")
  ) {
    myOutputValue =
      "The computer chose " +
      computerInput +
      ".<br>" +
      "You chose " +
      input +
      ".<br><br>" +
      "You lose! Bummer." +
      "<br><br>" +
      'Now you can type "scissors" "paper" or "stone" to play another round!';
  }

  console.log("computer choice");
  console.log(computerInput);

  // If it is a draw.
  if (
    input == computerInput ||
    (input == "reversed rock" && computerInput == "rock") ||
    (input == "reversed scissors" && computerInput == "scissors") ||
    (input == "reversed paper" && computerInput == "paper")
  ) {
    myOutputValue =
      "The computer chose " +
      computerInput +
      ".<br>" +
      "You chose " +
      input +
      ".<br><br>" +
      "You draw! Wow!" +
      "<br><br>" +
      'Now you can type "scissors" "paper" or "stone" to play another round!';
  }

  // if you win.
  if (
    (input == "rock" && computerInput == "scissors") ||
    (input == "scissors" && computerInput == "paper") ||
    (input == "paper" && computerInput == "rock") ||
    (input == "reversed rock" && computerInput == "paper") ||
    (input == "reversed scissors" && computerInput == "rock") ||
    (input == "reversed paper" && computerInput == "scissors")
  ) {
    myOutputValue =
      "The computer chose " +
      computerInput +
      ".<br>" +
      "You chose " +
      input +
      ".<br><br>" +
      "You win! Woohoo!" +
      "<br><br>" +
      'Now you can type "scissors" "paper" or "stone" to play another round!';
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
