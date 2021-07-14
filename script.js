// Generate random number 0 as Scissors , 1 as Paper or 2 as Stone
var randomChoice = function () {
  var randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber == 0) {
    return SCISSORS;
  }
  if (randomNumber == 1) {
    return PAPER;
  }
  return STONE;
};

// 3 Inputs players use
var SCISSORS = "scissors";
var PAPER = "paper";
var STONE = "stone";

// Gameplay

var main = function (input) {
  var playerChoice = input;
  console.log("input");
  console.log(playerChoice);

  // Computer's choice
  var computerChoice = randomChoice();
  console.log("Computer Choice");
  console.log(computerChoice);

  var myOutputValue = "Type Scissors or Paper or Stone to play";
  if (
    (playerChoice == SCISSORS && computerChoice == STONE) ||
    (playerChoice == PAPER && computerChoice == SCISSORS) ||
    (playerChoice == STONE && computerChoice == PAPER)
  ) {
    console.log("Lose");
    myOutputValue =
      "You chose " +
      playerChoice +
      "<br><br>Computer chose " +
      computerChoice +
      "<br><br> You Lose!";
  }

  if (
    (playerChoice == SCISSORS && computerChoice == PAPER) ||
    (playerChoice == PAPER && computerChoice == STONE) ||
    (playerChoice == STONE && computerChoice == SCISSORS)
  ) {
    console.log("Win");
    myOutputValue =
      "You chose " +
      playerChoice +
      "<br><br>Computer chose " +
      computerChoice +
      "<br><br> You Win!";
  }

  if (playerChoice == computerChoice) {
    console.log("Draw");
    myOutputValue =
      "You chose " +
      playerChoice +
      "<br><br>Computer chose " +
      computerChoice +
      "<br><br> You Draw!";
  }

  return myOutputValue;
};
