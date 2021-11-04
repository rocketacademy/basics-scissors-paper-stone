// Add state to your program such that it keeps track of the number of times the user has won and the number of times the computer has won. Output this win-loss record in a format you like in the program output. You can also output the number of draws and/or each party's winning percentage if you'd like.

var ROCK = "rock";
var PAPER = "paper";
var SCISSORS = "scissors";
var REPLAY_INSTRUCTIONS =
  'Now you can type "rock" "paper" or "scissors" to play another round!';

// initialize winning points for player, computer, and draw
var numPlayerWins = 0;
var numCompWins = 0;
var numDraws = 0;

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

// Message for loss-draw record

var getDefaultWinLossMessage = function () {
  return (
    "Player: " +
    numPlayerWins +
    "; Computer: " +
    numCompWins +
    "; Draw: " +
    numDraws
  );
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

  // draw condition
  if (playerObject == computerObject) {
    numDraws += 1;
    return (
      defaultObjectsMessage +
      "its a draw " +
      getDefaultWinLossMessage() +
      REPLAY_INSTRUCTIONS
    );
  }

  // Player wins condition
  if (playerWins(playerObject, computerObject)) {
    numPlayerWins += 1;
    return (
      defaultObjectsMessage +
      "you win!" +
      getDefaultWinLossMessage() +
      REPLAY_INSTRUCTIONS
    );
  }

  // Computer wins condition
  numCompWins += 1;
  return (
    defaultObjectsMessage +
    "you lose! " +
    getDefaultWinLossMessage() +
    REPLAY_INSTRUCTIONS
  );
};
