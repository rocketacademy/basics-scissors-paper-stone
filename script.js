// track the number of games played
var numGamesPlayed = 0;
// track the number of games player won
var numGamesWon = 0;
// track the number of games computer won
var numGamesLost = 0;
// track the number of games that were draws
var numGamesDraw = 0;
// track the last game result
var lastOutcome = "";

// define string constants for possible hands
var SCISSORS = "scissors";
var PAPER = "paper";
var STONE = "stone";
var REVERSED_SCISSORS = "reversed scissors";
var REVERSED_PAPER = "reversed paper";
var REVERSED_STONE = "reversed stone";

/**
 * Set a function that returns "scissors" "paper" or "stone"
 */
var generateHand = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var hand = "";

  console.log("generateHand random integer: ");
  console.log(randomInteger);

  if (randomInteger == 0) {
    hand = SCISSORS;
  }
  if (randomInteger == 1) {
    hand = PAPER;
  }
  if (randomInteger == 2) {
    hand = STONE;
  }

  console.log("generated hand: ");
  console.log(hand);

  return hand;
};

/**
 * Set a function that returns the outcome of the hand as "draw" "win" or "lose"
 */
var outcome = function (playerHand, computerHand) {
  // if both parties chose the same object, it's a draw
  if (
    playerHand == computerHand ||
    (playerHand == REVERSED_SCISSORS && computerHand == SCISSORS) ||
    (playerHand == REVERSED_STONE && computerHand == STONE) ||
    (playerHand == REVERSED_PAPER && computerHand == PAPER)
  ) {
    return "draw";
  }

  // scissors beats paper, paper beats stone, and stone beats scissors.
  // reversed scissors beats stone, reversed paper beats scissors, and reverse stone beats paper.
  if (
    playerHand == computerHand ||
    (playerHand == SCISSORS && computerHand == PAPER) ||
    (playerHand == PAPER && computerHand == STONE) ||
    (playerHand == STONE && computerHand == SCISSORS) ||
    (playerHand == REVERSED_SCISSORS && computerHand == STONE) ||
    (playerHand == REVERSED_PAPER && computerHand == SCISSORS) ||
    (playerHand == REVERSED_STONE && computerHand == PAPER)
  ) {
    return "win";
  } else {
    return "lose";
  }
};

/**
 * Set a function that returns the hand icon
 */
var getHandIcon = function (input) {
  var handIcon = "";

  if (input == SCISSORS || input == REVERSED_SCISSORS) {
    handIcon = "✂️";
  }

  if (input == STONE || input == REVERSED_STONE) {
    handIcon = "🪨";
  }

  if (input == PAPER || input == REVERSED_PAPER) {
    handIcon = "🗒";
  }

  return handIcon;
};

/**
 * Set a function that returns the Output message
 */
var getOutputMsg = function (
  playerHand,
  computerHand,
  currentGameOutcome,
  numGamesPlayed,
  numGamesWon,
  numGamesLost,
  numGamesDraw
) {
  var playerHandIcon = getHandIcon(playerHand);
  var computerHandIcon = getHandIcon(computerHand);

  console.log("player HandIcon is: ");
  console.log(playerHandIcon);
  console.log("computerHandIcon is: ");
  console.log(computerHandIcon);

  return `The computer chose ${computerHand} ${computerHandIcon}. <br> You chose ${playerHand} ${playerHandIcon}. <br><br> You ${currentGameOutcome}! 
  <br><br>
  So far, you have played ${numGamesPlayed} games. You have won ${numGamesWon} times, lost ${numGamesLost} times and drawed ${numGamesDraw} times. Keep going!
  <br><br>
  Now you can type "scissors" "paper" "stone" "reversed scissors" "reversed paper" or "reversed stone" to play another round!`;
};

/**
 * Play SPS with user input, return current game result and overall game stats.
 * @param {string} input - Player's hand can be scissors, paper, stone, reversed scissors, reversed paper, reversed stone
 */

var main = function (input) {
  var computerHand = generateHand();
  var myOutputValue = "default";
  var currentGameOutcome = outcome(input, computerHand);

  console.log("player hand: ");
  console.log(input);
  console.log("computer hand: ");
  console.log(computerHand);

  // add 1 to number of games played counter
  numGamesPlayed = numGamesPlayed + 1;
  // add 1 to win, loss or draw counter based on current game outcome
  if (currentGameOutcome == "win") {
    numGamesWon = numGamesWon + 1;
  }
  if (currentGameOutcome == "lose") {
    numGamesLost = numGamesLost + 1;
  }
  if (currentGameOutcome == "draw") {
    numGamesDraw = numGamesDraw + 1;
  }

  // set output msg based on current stats
  myOutputValue = getOutputMsg(
    input,
    computerHand,
    currentGameOutcome,
    numGamesPlayed,
    numGamesWon,
    numGamesLost,
    numGamesDraw
  );

  // set last game outcome to current game outcome
  lastOutcome = currentGameOutcome;

  return myOutputValue;
};
