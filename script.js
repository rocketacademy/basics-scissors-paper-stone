// User inputs one of "scissors", "paper", or "stone",
// Program internally randomly chooses scissors, paper, or stone,
// Program outputs whether the user won, the program won, or it's a draw.
// Rules: scissors beats paper, paper beats stone, and stone beats scissors.
// If both parties choose the same object, it's a draw.

// reverse scissors paper stone game
var main = function (input) {
  var computer = generateScissorsPaperStone();
  console.log("Computer is choosing");
  console.log(computer);

  var myOutputValue =
    "You can only input 'reversed scissors', 'reversed paper' or 'reversed stone'. Please try again!";

  if (
    (input == "reversed scissors" && computer == "scissors") ||
    (input == "reversed paper" && computer == "paper") ||
    (input == "reversed stone" && computer == "stone")
  ) {
    console.log("draw!");
    myOutputValue = "It's a draw!";
  }

  if (
    (input == "reversed scissors" && computer == "paper") ||
    (input == "reversed paper" && computer == "stone") ||
    (input == "reversed stone" && computer == "scissors")
  ) {
    console.log("Winning actions");
    myOutputValue = "You lost! Computer won!";
  }

  if (
    (input == "reversed scissors" && computer == "stone") ||
    (input == "reversed paper" && computer == "scissors") ||
    (input == "reversed stone" && computer == "paper")
  ) {
    console.log("Winning actions");
    myOutputValue = "You win! Computer lost!";
  }

  return myOutputValue;
};

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
