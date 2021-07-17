var currentPlayerWins = 0;
var currentComputerWins = 0;
var currentDraws = 0;

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
  console.log(playerChoice, "playerChoice");
  // Computer's choice
  var computerChoice = randomChoice();
  console.log(computerChoice, "Computer Choice");

  var myOutputValue = "Type Scissors or Paper or Stone to play";
  if (
    (playerChoice == SCISSORS && computerChoice == STONE) ||
    (playerChoice == PAPER && computerChoice == SCISSORS) ||
    (playerChoice == STONE && computerChoice == PAPER)
  ) {
    currentComputerWins += 1;
    console.log(currentComputerWins, "Computer Won");
    return `You chose ${playerChoice} <br><br>Computer chose ${computerChoice}. You Lose! <br><br>Current Player's win: ${currentPlayerWins}<br><br>Current Computer's win ${currentComputerWins}<br><br>Current Draws: ${currentDraws}`;
  }

  if (
    (playerChoice == SCISSORS && computerChoice == PAPER) ||
    (playerChoice == PAPER && computerChoice == STONE) ||
    (playerChoice == STONE && computerChoice == SCISSORS)
  ) {
    currentPlayerWins += 1;
    console.log(currentPlayerWins, "Player Won");
    return `You chose ${playerChoice} <br><br>Computer chose ${computerChoice}. You Win! <br><br>Current Player's win: ${currentPlayerWins}<br><br>Current Computer's win ${currentComputerWins}<br><br>Current Draws: ${currentDraws}`;
  }

  if (playerChoice == computerChoice) {
    currentDraws += 1;
    console.log(currentDraws, "Draws");
    return `You chose ${playerChoice} <br><br>Computer chose ${computerChoice}. You Draw! <br><br>Current Player's win: ${currentPlayerWins}<br><br>Current Computer's win ${currentComputerWins}<br><br>Current Draws: ${currentDraws}`;
  }

  return myOutputValue;
};
