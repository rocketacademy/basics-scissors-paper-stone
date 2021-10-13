// Normal Scissors Paper Stone
var scissorsPaperStone = function (userDecision) {
  console.log("Game mode: Normal scissors/paper/stone");
  var computerDecision = computerRoll();
  var outcome =
    "There are only 3 options: 'scissors', 'paper', or 'stone'. Please try again.";
  console.log("User: " + userDecision);
  console.log("Computer: " + computerDecision);
  if (userDecision == computerDecision) {
    outcome = "It's a draw.";
  }
  if (
    (userDecision == "scissors" && computerDecision == "paper") ||
    (userDecision == "paper" && computerDecision == "stone") ||
    (userDecision == "stone" && computerDecision == "scissors")
  ) {
    outcome = "Congrats, you win!";
  }
  if (
    (userDecision == "scissors" && computerDecision == "stone") ||
    (userDecision == "paper" && computerDecision == "scissors") ||
    (userDecision == "stone" && computerDecision == "paper")
  ) {
    outcome = "Sorry, you lose. Bummer!";
  }
  var gameReply =
    "You chose " +
    userDecision +
    ".<br>The computer chose " +
    computerDecision +
    ".<br>" +
    outcome +
    "<br><br>Type 'scissors', 'paper' or 'stone' to try again.";
  console.log(outcome);
  console.log(" ");
  return gameReply;
};

// Reverse Scissors Paper Stone
var reverseScissorsPaperStone = function (userDecision) {
  console.log("Game mode: Reverse scissors/paper/stone");
  var computerDecision = computerRoll();
  var outcome =
    "There are only 3 options: 'reverse scissors', 'reverse paper', or 'reverse stone'. Please try again.";
  console.log("User: " + userDecision);
  console.log("Computer: " + computerDecision);
  if (
    (userDecision == "reverse scissors" && computerDecision == "scissors") ||
    (userDecision == "reverse paper" && computerDecision == "paper") ||
    (userDecision == "reverse stone" && computerDecision == "stone")
  ) {
    outcome = "It's a draw.";
  }
  if (
    (userDecision == "reverse scissors" && computerDecision == "paper") ||
    (userDecision == "reverse paper" && computerDecision == "stone") ||
    (userDecision == "reverse stone" && computerDecision == "scissors")
  ) {
    outcome = "Sorry, you lose. Bummer!";
  }
  if (
    (userDecision == "reverse scissors" && computerDecision == "stone") ||
    (userDecision == "reverse paper" && computerDecision == "scissors") ||
    (userDecision == "reverse stone" && computerDecision == "paper")
  ) {
    outcome = "Congrats, you win!";
  }
  var gameReply =
    "You chose " +
    userDecision +
    ".<br>The computer chose " +
    computerDecision +
    ".<br>" +
    outcome +
    "<br><br>Type 'reverse', then 'scissors', 'paper' or 'stone' to try again. ";
  console.log(outcome);
  console.log(" ");
  return gameReply;
};

// Random computer roll
var computerRoll = function () {
  var randomNumber = Math.random() * 3;
  var randomInteger = Math.floor(randomNumber);
  if (randomInteger == 0) {
    var computerChoice = "scissors";
  }
  if (randomInteger == 1) {
    computerChoice = "paper";
  }
  if (randomInteger == 2) {
    computerChoice = "stone";
  }
  return computerChoice;
};

var main = function (input) {
  var myOutputValue =
    "Welcome to Scissors Paper Stone. Please type 'scissors', 'paper' or 'stone' to start.";
  if (input == "paper" || input == "scissors" || input == "stone") {
    myOutputValue = scissorsPaperStone(input);
  }

  if (
    input == "reverse paper" ||
    input == "reverse stone" ||
    input == "reverse scissors"
  ) {
    myOutputValue = reverseScissorsPaperStone(input);
  }
  return myOutputValue;
};
