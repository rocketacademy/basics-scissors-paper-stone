var ROCK = "rock";
var PAPER = "paper";
var SCISSORS = "scissors";
var REPLAY_INSTRUCTIONS =
  'Now you can type "rock" "paper" or "scissors" to play another round!';

// generate random number to assign to rock, paper, scissors
var getRandomObject = function () {
  var randomNum = Math.floor(Math.random() * 3) + 1;
  if (randomNum == 1) {
    return SCISSORS;
  }
  if (randomNum == 2) {
    return PAPER;
  }
  return ROCK;
};

// Condition for Playerwins
var playerWins = function (playerObject, computerObject) {
  return (
    (playerObject == SCISSORS && computerObject == PAPER) ||
    (playerObject == PAPER && computerObject == ROCK) ||
    (playerObject == ROCK && computerObject == SCISSORS)
  );
};

// setting object
var getObjectIcon = function (object) {
  if (object == SCISSORS) return " ✂️";
  if (object == PAPER) return " 🗒";
  if (object == ROCK) return " 🪨";
};

// creating default message
var getDefaultObjectsMessage = function (playerObject, computerObject) {
  var playerObjectIcon = getObjectIcon(playerObject);
  var computerObjectIcon = getObjectIcon(computerObject);
  return (
    "The computer chose " +
    computerObject +
    computerObjectIcon +
    "<br><br>" +
    "You chose " +
    playerObject +
    playerObjectIcon
  );
};

// condition if player draw
var PlayerDraws = function (playerObject, computerObject) {
  return playerObject == computerObject;
};

// Checking if player doesn't input these words, will show specific instruction
var main = function (input) {
  if (input != SCISSORS && input != PAPER && input != ROCK) {
    return 'Please input 1 of "scissors", "paper", or "rock" to play the game.';
  }

  // setting player and computer's input
  var playerObject = input;
  var computerObject = getRandomObject();
  var defaultObjectsMessage = getDefaultObjectsMessage(
    playerObject,
    computerObject
  );

  if (PlayerDraws(playerObject, computerObject)) {
    return defaultObjectsMessage + "<br><br> It's a draw! <br><br> ";
  }

  // If not a draw, check if player wins
  if (playerWins(playerObject, computerObject)) {
    return (
      defaultObjectsMessage +
      "<br><br>" +
      " You win! <br><br>" +
      REPLAY_INSTRUCTIONS +
      "<br>"
    );
  }

  return (
    defaultObjectsMessage +
    "<br><br> You lose! Bummer <br><br>" +
    REPLAY_INSTRUCTIONS
  );
};
