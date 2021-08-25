var SCISSORS = "scissors";
var PAPER = "paper";
var STONE = "stone";
var REVERSED_SCISSORS = "reversed scissors";
var REVERSED_PAPER = "reversed paper";
var REVERSED_STONE = "reversed stone";

var randomHand = function (max) {
  var randomNumber = Math.floor(Math.random(max) * 3);
  var outputHand;
  if (randomNumber == 0) {
    outputHand = SCISSORS;
  }
  if (randomNumber == 1) {
    outputHand = PAPER;
  }
  if (randomNumber == 2) {
    outputHand = STONE;
  }
  console.log("outputHand");
  console.log(outputHand);
  return outputHand;
};

var doesPlayerDraw = function (playerHand, computerHand) {
  return (
    playerHand == computerHand ||
    (playerHand == REVERSED_PAPER && computerHand == PAPER) ||
    (playerHand == REVERSED_STONE && computerHand == STONE) ||
    (playerHand == REVERSED_SCISSORS && computerHand == SCISSORS)
  );
};

var doesPlayerWin = function (playerHand, computerHand) {
  return (
    ((playerHand == PAPER || playerHand == REVERSED_SCISSORS) &&
      computerHand == STONE) ||
    ((playerHand == STONE || playerHand == REVERSED_PAPER) &&
      computerHand == SCISSORS) ||
    ((playerHand == SCISSORS || playerHand == REVERSED_STONE) &&
      computerHand == PAPER)
  );
};

var doesPlayerLose = function (playerHand, computerHand) {
  return (
    ((playerHand == STONE || playerHand == REVERSED_SCISSORS) &&
      computerHand == PAPER) ||
    ((playerHand == SCISSORS || playerHand == REVERSED_PAPER) &&
      computerHand == STONE) ||
    ((playerHand == PAPER || playerHand == REVERSED_STONE) &&
      computerHand == SCISSORS)
  );
};

var main = function (input) {
  console.log("input");
  console.log(input);
  var playerHand = input;
  var computerHand = randomHand();
  var myOutputValue =
    "You entered: " +
    input +
    ". <br> <br> You can only enter scissors ✂️ / paper 🗒 / stone. <br> Or add 'reversed' (e.g. reversed scissors) to play a reversed version of the game.<br> <br> Type accurately and let's play again!";
  var hands =
    "<br> <br> You entered: " +
    input +
    ". <br> Computer played: " +
    computerHand +
    ".";
  if (doesPlayerDraw(playerHand, computerHand)) {
    myOutputValue = "Draw!" + hands;
  }
  if (doesPlayerWin(playerHand, computerHand)) {
    myOutputValue = "You win!" + hands;
  }
  if (doesPlayerLose(playerHand, computerHand)) {
    myOutputValue = "You lost!" + hands;
  }
  return myOutputValue;
};
