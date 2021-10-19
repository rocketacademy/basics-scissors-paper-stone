// User inputs one of "scissors", "paper", or "stone",
// Program internally randomly chooses scissors, paper, or stone,
// Program outputs whether the user won, the program won, or it's a draw.
// Rules: scissors beats paper, paper beats stone, and stone beats scissors.
// If both parties choose the same object, it's a draw.

// HELPER FUNCTIONS HERE
var chooseScissorsPaperStone = function () {
  var randomDecimal = Math.random() * 3; // computer random selection
  var randomInteger = Math.floor(randomDecimal);
  var randomScissorsPaperStone = randomInteger + 1; // Add 1 to get valid numbers 1 to 3 inclusive, which represents each action
  return randomScissorsPaperStone; // return 3 random values to represent each action
};

var generateScissorsPaperStone = function () {
  var scissorsPaperStone = chooseScissorsPaperStone(); // assigning values to variables here
  if (scissorsPaperStone == 1) {
    return "scissors";
  }

  if (scissorsPaperStone == 2) {
    return "paper";
  }

  if (scissorsPaperStone == 3) {
    return "stone";
  }
};

var userWinCounter = 0;
var computerWinCounter = 0;
var drawCounter = 0;

var main = function (input) {
  var myOutputValue =
    "You can only input 'scissors', 'paper' or 'stone'. Please input valid option!";
  var computer = generateScissorsPaperStone();
  console.log("Computer chooses", computer);

  if (
    (input == "scissors" && computer == "scissors") ||
    (input == "paper" && computer == "paper") ||
    (input == "stone" && computer == "stone")
  ) {
    drawCounter = drawCounter + 1;
    console.log(drawCounter);
    console.log("draw!");
    myOutputValue =
      "It's a draw! You have drawn for " + drawCounter + " time(s)!";
  }

  if (
    (input == "scissors" && computer == "paper") ||
    (input == "paper" && computer == "stone") ||
    (input == "stone" && computer == "scissors")
  ) {
    userWinCounter = userWinCounter + 1;
    console.log(userWinCounter);
    console.log("Winning actions");
    myOutputValue =
      `You chose ${input} and won ` +
      userWinCounter +
      ` time(s)! The computer chose ${computer} and lost!`;
  }

  if (
    (input == "scissors" && computer == "stone") ||
    (input == "paper" && computer == "scissors") ||
    (input == "stone" && computer == "paper")
  ) {
    computerWinCounter = computerWinCounter + 1;
    console.log(computerWinCounter);
    console.log("Losing actions");
    myOutputValue =
      `You chose ${input} and lost! The computer chose ${computer} and won ` +
      computerWinCounter +
      ` time(s)!`;
  }

  return myOutputValue;
};
