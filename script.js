//SPS PART 1, FAITH
//draw ==, default outcome = lose,
// winning outcomes = (UI paper and CS stone) or (UI stone and CS scissors) or (UI scissors and CS paper)

// get random integer
var getSPS = function () {
  var randomFloat = Math.random() * 3;
  console.log(randomFloat);
  var resultInteger = Math.ceil(randomFloat);
  var computerChoice;

  // assign integer to SPS
  if (resultInteger == 1) {
    computerChoice = "scissors";
  }
  if (resultInteger == 2) {
    computerChoice = "stone";
  }
  if (resultInteger == 3) {
    computerChoice = "paper";
  }
  return computerChoice;
};

var main = function (input) {
  var comSelect = getSPS(); //call com output of SPS

  var myOutputValue = "You lose!";

  // screening valid input
  if (
    input != "scissors" &&
    input != "stone" &&
    input != "paper" &&
    input != "reverse scissors" &&
    input != "reverse stone" &&
    input != "reverse paper"
  ) {
    myOutputValue =
      "There are only 3 possible inputs: scissors, paper or stone. Please try again!";
  }

  // more comfortable: Reverse SPS

  if (input == comSelect || input == "reverse " + comSelect) {
    //draw
    myOutputValue = "It's a draw!";
  }

  if (
    // win
    ((input == "paper" || input == "reverse scissors") &&
      comSelect == "stone") ||
    ((input == "stone" || input == "reverse paper") &&
      comSelect == "scissors") ||
    ((input == "scissors" || input == "reverse stone") && comSelect == "paper")
  ) {
    myOutputValue = "You win!";
  }
  // more comfortable: Formatting
  var finalOutput = `The computer chose ${comSelect}.<br>
  You chose ${input}.<br>
  ${myOutputValue}<br>`;

  return finalOutput;
};
