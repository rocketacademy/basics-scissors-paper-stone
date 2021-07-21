//Initialise State
var currentPlayerWins = 0;
var currentComputerWins = 0;
var currentDraws = 0;
var status = `Waiting for Player's Name`;

//Player's Name
var playerName = "";

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

//Convert input to choice
var convertingInputToChoice = function (input) {
  var playerChoice = `Invalid`;
  if (input == `scissors`) {
    playerChoice = SCISSORS;
  }
  if (input == `paper`) {
    playerChoice = PAPER;
  }
  if (input == `stone`) {
    playerChoice = STONE;
  }
  return playerChoice;
};

// Gameplay Boolean
var playerWinsIf = function (playerChoice, computerChoice) {
  var playerWins =
    (playerChoice == SCISSORS && computerChoice == PAPER) ||
    (playerChoice == PAPER && computerChoice == STONE) ||
    (playerChoice == STONE && computerChoice == SCISSORS);
  console.log(playerWins);
  return playerWins;
};

var playerLoseIf = function (playerChoice, computerChoice) {
  var playerLoses =
    (playerChoice == SCISSORS && computerChoice == STONE) ||
    (playerChoice == PAPER && computerChoice == SCISSORS) ||
    (playerChoice == STONE && computerChoice == PAPER);
  console.log(playerLoses);

  return playerLoses;
};

var playerDrawIf = function (playerChoice, computerChoice) {
  var playerDraws = playerChoice == computerChoice;
  console.log(playerDraws);

  return playerDraws;
};

var main = function (input) {
  var myOutputValue = ``;
  if (status == `Waiting for Player's Name`) {
    playerName = input;
    console.log(playerName, "Player Name");
    status = "Playing Game";
    console.log(status);
    myOutputValue = `Hello ${playerName}! <br><br>Type in scissors or paper or stone to play`;
  } else if ((status = "Playing game")) {
    //Player's Choice
    var playerChoice = convertingInputToChoice(input);
    console.log(playerChoice, "playerChoice");

    // Computer's choice
    var computerChoice = randomChoice();
    console.log(computerChoice, "Computer Choice");

    // Play history
    var playHistroy = `<br><br>You chose ${playerChoice}, computer chose ${computerChoice}`;
    console.log(playHistroy);

    var didPlayerWin = playerWinsIf(playerChoice, computerChoice);
    var didPlayerLose = playerLoseIf(playerChoice, computerChoice);
    var didPlayerDraw = playerDrawIf(playerChoice, computerChoice);
    console.log(currentDraws, currentPlayerWins, currentComputerWins);

    if (didPlayerWin == true) {
      currentPlayerWins = currentPlayerWins + 1;
      console.log(currentPlayerWins);
      var result = `won`;
    }
    if (didPlayerLose == true) {
      currentComputerWins = currentComputerWins + 1;
      console.log(currentComputerWins);
      var result = "lose";
    }
    if (didPlayerDraw == true) {
      currentDraws = currentDraws + 1;
      console.log(currentDraws);
      var result = `draw`;
    }

    //Score histroy
    var scoreHistory = `<br><br>Player won: ${currentPlayerWins} | Computer won: ${currentComputerWins} | Draws ${currentDraws}.`;

    return `${playerName} ${result}. ${playHistroy}, ${scoreHistory}`;
  }

  return myOutputValue;
};
