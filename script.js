var SCISSORS = "scissors";
var PAPER = "paper";
var STONE = "stone";
var REVERSE_SCISSORS = "reversed scissors";
var REVERSE_PAPER = "reversed paper";
var REVERSE_STONE = "reversed stone";
var replayInstruction = "Type scissor, paper, or stone to play another round!";

var computerRandom = function () {
  var randomNum = Math.floor(Math.random() * 3);
  if (randomNum == 0) {
    return SCISSORS;
  }

  if (randomNum == 1) {
    return PAPER;
  }

  return STONE;
};

var playerBeatComputer = function (player, computer) {
  return (
    (player == SCISSORS && computer == PAPER) ||
    (player == PAPER && computer == STONE) ||
    (player == STONE && computer == SCISSORS) ||
    (player == REVERSE_SCISSORS && computer == STONE) ||
    (player == REVERSE_PAPER && computer == SCISSORS) ||
    (player == REVERSE_STONE && computer == PAPER)
  );
};

var playerDrawComputer = function (player, computer) {
  return (
    player == computer ||
    (player == REVERSE_SCISSORS && computer == SCISSORS) ||
    (player == REVERSE_PAPER && computer == PAPER) ||
    (player == REVERSE_STONE && computer == STONE)
  );
};

var defaultMessage = function (player, computer) {
  return "You chose " + player + "<br><br>" + "The computer chose " + computer;
};

var main = function (input) {
  var playerDraw = input.toLowerCase();
  if (
    playerDraw != SCISSORS &&
    playerDraw != PAPER &&
    playerDraw != STONE &&
    playerDraw != REVERSE_SCISSORS &&
    playerDraw != REVERSE_PAPER &&
    playerDraw != REVERSE_STONE
  ) {
    return "Please input scissors, paper, or stone to play the game.";
  }

  var computerDraw = computerRandom();
  var standardMessage = defaultMessage(playerDraw, computerDraw);

  if (playerBeatComputer(playerDraw, computerDraw)) {
    return (
      standardMessage + "<br><br>" + "You win! <br><br>" + replayInstruction
    );
  }

  if (playerDrawComputer(playerDraw, computerDraw)) {
    return (
      standardMessage + "<br><br>" + "You draw! <br><br>" + replayInstruction
    );
  }

  return (
    standardMessage + "<br><br>" + "You loss! <br><br>" + replayInstruction
  );
};
