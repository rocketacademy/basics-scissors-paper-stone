// prompt user for player name
var playerName = window.prompt("What is your name?");
while (playerName == "") {
  playerName = window.prompt("Please enter your name?");
}

// default game status
var currentGameMode = "normal";

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
var REVERSE = "reverse";

/**
 * Set a function that returns "scissors" "paper" or "stone"
 */
var generateHand = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var hand = "";

  // console.log("generateHand random integer: ");
  // console.log(randomInteger);

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
 * Set a function for standard game mode that returns the outcome of the hand as "draw" "win" or "lose"
 */
var outcome = function (playerHand, computerHand) {
  // if both parties chose the same object, it's a draw
  if (playerHand == computerHand) {
    return "draw";
  }

  // scissors beats paper, paper beats stone, and stone beats scissors.
  // reversed scissors beats stone, reversed paper beats scissors, and reverse stone beats paper.
  if (
    (playerHand == SCISSORS && computerHand == PAPER) ||
    (playerHand == PAPER && computerHand == STONE) ||
    (playerHand == STONE && computerHand == SCISSORS)
  ) {
    return "win";
  } else {
    return "lose";
  }
};

/**
 * Set a function for reverse game mode that returns the outcome of the hand as "draw" "win" or "lose"
 */
var reverseOutcome = function (playerHand, computerHand) {
  // if both parties chose the same object, it's a draw
  if (playerHand == computerHand) {
    return "draw";
  }

  // scissors beats paper, paper beats stone, and stone beats scissors.
  // reversed scissors beats stone, reversed paper beats scissors, and reverse stone beats paper.
  if (
    (playerHand == SCISSORS && computerHand == STONE) ||
    (playerHand == PAPER && computerHand == SCISSORS) ||
    (playerHand == STONE && computerHand == PAPER)
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

  if (input == SCISSORS) {
    handIcon = "✂️";
  }

  if (input == STONE) {
    handIcon = "🪨";
  }

  if (input == PAPER) {
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
  numGamesDraw,
  playerName
) {
  var playerHandIcon = getHandIcon(playerHand);
  var computerHandIcon = getHandIcon(computerHand);

  console.log("player HandIcon is: ");
  console.log(playerHandIcon);
  console.log("computerHandIcon is: ");
  console.log(computerHandIcon);

  return `The computer chose ${computerHand} ${computerHandIcon}. <br> You chose ${playerHand} ${playerHandIcon}. <br><br> You ${currentGameOutcome}! 
  <br><br>
  So far ${playerName}, you have played ${numGamesPlayed} games. You have won ${numGamesWon} times, lost ${numGamesLost} times and drawed ${numGamesDraw} times. Keep going!
  <br><br>
  Now you can type "scissors" "paper" "stone" to play another round!
  `;
};

/**
 * Set a function that checks if input is valid, i.e. scissors, paper, stone, or reverse
 */
var validInput = function (input) {
  return (
    input == SCISSORS || input == PAPER || input == STONE || input == REVERSE
  );
};

/**
 * Play SPS with user input, return current game result and overall game stats.
 * @param {string} input - Player's hand can be scissors, paper, stone, reversed scissors, reversed paper, reversed stone
 */

var main = function (input) {
  var computerHand = "";
  // var playerHand =
  var myOutputValue = "";
  var currentGameOutcome = "";
  var playerHand = "";

  console.log(validInput(input));

  // first check if user input is one of scissors, paper, stone or reverse
  if (validInput(input)) {
    // return (myOutputValue = "valid input");

    playerHand = input;

    // check if player wants to reverse from this turn
    if (input == "reverse") {
      currentGameMode = "reverse";
      return (myOutputValue =
        'Game mode changed to reverse. Now you can type "scissors" "paper" "stone" to play another round!');
    }

    // see current game mode value
    console.log("Current Game Mode value: ");
    console.log(currentGameMode);
    console.log(currentGameMode == "normal");

    // play sps in normal mode
    if (currentGameMode == "normal") {
      console.log("Playing in normal mode");

      computerHand = generateHand();
      myOutputValue = "default";
      currentGameOutcome = outcome(playerHand, computerHand);

      console.log("player hand: ");
      console.log(playerHand);
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
        playerHand,
        computerHand,
        currentGameOutcome,
        numGamesPlayed,
        numGamesWon,
        numGamesLost,
        numGamesDraw,
        playerName
      );

      // set last game outcome to current game outcome
      lastOutcome = currentGameOutcome;

      return `You are playing in normal mode. <br><br> ${myOutputValue} <br><br> Type "reverse" to play in Reverse mode.`;
    }

    // play sps in reverse mode
    if (currentGameMode == "reverse") {
      console.log("Playing in reverse mode");

      computerHand = generateHand();
      myOutputValue = "default";
      currentGameOutcome = reverseOutcome(playerHand, computerHand);

      console.log("player hand: ");
      console.log(playerHand);
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
        playerHand,
        computerHand,
        currentGameOutcome,
        numGamesPlayed,
        numGamesWon,
        numGamesLost,
        numGamesDraw,
        playerName
      );

      // set last game outcome to current game outcome
      lastOutcome = currentGameOutcome;

      return `You are playing in Reverse mode. <br><br> ${myOutputValue} <br><br> Type "normal" to play in Normal mode.`;
    }
  } else {
    return (myOutputValue =
      'Please input "scissors" "paper" "stone" or "reverse".');
  }
};
