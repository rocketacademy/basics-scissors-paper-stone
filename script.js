// Basic SPS Game with Input validation & Formatting

/* var main = function (input) {
  var gameHandRandom = randomNumber();
  var gameHand = readGameHandNmbr(gameHandRandom);
  var win = `The computer chose ${gameHand.toUpperCase()}.<br><br>You chose ${input.toUpperCase()}.<br><br> ***You WIN!***`;
  var lose = `The computer chose ${gameHand.toUpperCase()}.<br><br>You chose ${input.toUpperCase()}.<br><br> ~You LOSE~`;
  var draw = `The computer chose ${gameHand.toUpperCase()}.<br><br>You chose ${input.toUpperCase()}.<br><br> =It's a DRAW!=`;
  var errorMessage = `xxxxxxxxx INPUT ERROR xxxxxxxxxx. <br><br> There are only 3 options: 'scissors', 'paper' or 'stone'.`;
  var endingMessage = `<br><br> To play the next game, please type 'scissors', 'paper' or 'stone'.`;

  var myOutputValue = errorMessage;

  if (input.toLowerCase() == "scissors" && gameHand == "paper") {
    myOutputValue = win;
  }

  if (input.toLowerCase() == "scissors" && gameHand == "stone") {
    myOutputValue = lose;
  }

  if (input.toLowerCase() == "scissors" && gameHand == "sissors") {
    myOutputValue = draw;
  }

  if (input.toLowerCase() == "paper" && gameHand == "stone") {
    myOutputValue = win;
  }

  if (input.toLowerCase() == "paper" && gameHand == "scissors") {
    myOutputValue = lose;
  }

  if (input.toLowerCase() == "paper" && gameHand == "paper") {
    myOutputValue = draw;
  }
  if (input.toLowerCase() == "stone" && gameHand == "scissors") {
    myOutputValue = win;
  }

  if (input.toLowerCase() == "stone" && gameHand == "paper") {
    myOutputValue = lose;
  }

  if (input.toLowerCase() == "stone" && gameHand == "stone") {
    myOutputValue = draw;
  }

  return myOutputValue + endingMessage;
};

// random number generator

var randomNumber = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  return randomInteger + 1;
};

// read random Number to output  random GameHand
var readGameHandNmbr = function (gameHandNmbr) {
  var gameHandPlayed = "";
  if (gameHandNmbr == 1) {
    gameHandPlayed = "scissors";
  }
  if (gameHandNmbr == 2) {
    gameHandPlayed = "paper";
  }
  if (gameHandNmbr == 3) {
    gameHandPlayed = "stone";
  }
  return gameHandPlayed;
};
 */

// SCISSORS PAPER STONE REVERSED MODE

var main = function (input) {
  var gameHandRandom = randomNumber();
  var gameHand = readGameHandNmbr(gameHandRandom);
  var win = `The computer chose ${gameHand.toUpperCase()}.<br><br>You chose ${input.toUpperCase()}.<br><br> ***You WIN!***`;
  var lose = `The computer chose ${gameHand.toUpperCase()}.<br><br>You chose ${input.toUpperCase()}.<br><br> ~You LOSE~`;
  var draw = `The computer chose ${gameHand.toUpperCase()}.<br><br>You chose ${input.toUpperCase()}.<br><br> =It's a DRAW!=`;
  var errorMessage = `xxxxxxxxx INPUT ERROR xxxxxxxxxx. <br><br> There are only 3 options: 'scissors', 'paper' or 'stone'.`;
  var endingMessage = `<br><br> To play the next game, please type 'scissors', 'paper' or 'stone'. <br><br> '<i>If something doesn't look right, you could always look at its complement view.</i>`;

  var myOutputValue = errorMessage;

  if (input.toLowerCase() == "reversed scissors") {
    input = "paper";
  }

  if (input.toLowerCase() == "reversed paper") {
    input = "stone";
  }

  if (input.toLowerCase() == "reversed stone") {
    input = "scissors";
  }

  if (input.toLowerCase() == "scissors" && gameHand == "paper") {
    myOutputValue = lose;
  }

  if (input.toLowerCase() == "scissors" && gameHand == "stone") {
    myOutputValue = win;
  }

  if (input.toLowerCase() == "scissors" && gameHand == "sissors") {
    myOutputValue = draw;
  }

  if (input.toLowerCase() == "paper" && gameHand == "stone") {
    myOutputValue = lose;
  }

  if (input.toLowerCase() == "paper" && gameHand == "scissors") {
    myOutputValue = win;
  }

  if (input.toLowerCase() == "paper" && gameHand == "paper") {
    myOutputValue = draw;
  }
  if (input.toLowerCase() == "stone" && gameHand == "scissors") {
    myOutputValue = lose;
  }

  if (input.toLowerCase() == "stone" && gameHand == "paper") {
    myOutputValue = win;
  }

  if (input.toLowerCase() == "stone" && gameHand == "stone") {
    myOutputValue = draw;
  }

  return myOutputValue + endingMessage;
};

// random number generator

var randomNumber = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  return randomInteger + 1;
};

// read random Number to output  random GameHand
var readGameHandNmbr = function (gameHandNmbr) {
  var gameHandPlayed = "";
  if (gameHandNmbr == 1) {
    gameHandPlayed = "scissors";
  }
  if (gameHandNmbr == 2) {
    gameHandPlayed = "paper";
  }
  if (gameHandNmbr == 3) {
    gameHandPlayed = "stone";
  }
  return gameHandPlayed;
};
