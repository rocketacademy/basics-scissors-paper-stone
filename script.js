var main = function (input) {
  var programDraw = randomDraw();
  // set default outcome if user input is invalid
  var outcome = computeOutcome(input, programDraw);

  return (
    "You chose: " +
    input +
    "<br>Computer chose: " +
    programDraw +
    "<br><br>Outcome: " +
    outcome
  );
};

// for any valid user input, gives the result
var computeOutcome = function (userInput, programInput) {
  // draw
  if (userInput == programInput) {
    return "it's a draw";
  }
  // user wins
  if (
    (userInput == "scissors" && programInput == "paper") ||
    (userInput == "stone" && programInput == "scissors") ||
    (userInput == "paper" && programInput == "stone")
  ) {
    return "the user wins";
  }
  // program wins
  if (
    (userInput == "scissors" && programInput == "stone") ||
    (userInput == "stone" && programInput == "paper") ||
    (userInput == "paper" && programInput == "scissors")
  ) {
    return "the user loses";
  }
  // REVERSED logic-- draw
  if (userInput == "reversed " + programInput) {
    return "You drew in this tricky reversed game!";
  }
  // REVERSED logic-- program wins
  if (
    (userInput == "reversed scissors" && programInput == "paper") ||
    (userInput == "reversed stone" && programInput == "scissors") ||
    (userInput == "reversed paper" && programInput == "stone")
  ) {
    return "You lost in this tricky reversed game!";
  }
  // REVERSED logic -- user wins
  if (
    (userInput == "reversed scissors" && programInput == "stone") ||
    (userInput == "reversed stone" && programInput == "paper") ||
    (userInput == "reversed paper" && programInput == "scissors")
  ) {
    return "You win in this tricky reversed game!";
  }

  // invalid input
  return "Please try again. Input only scissors, paper, or stone.";
};

// randomly draws 1 of the 3 outcomes of scissors, paper, or stone
var randomDraw = function () {
  var draw = "";
  var selector = randDigit(3);
  if (selector == 1) {
    draw = "scissors";
  }
  if (selector == 2) {
    draw = "paper";
  }
  if (selector == 3) {
    draw = "stone";
  }
  return draw;
};

// returns a random digit from 1 to X
var randDigit = function (x) {
  // return a number from [0,x)
  var number = Math.random() * x;
  // return a digit between 0 and x-1
  var digit = Math.floor(number);
  return digit + 1;
};
