var Code01 = "PROJECT PART 1: SCISSORS PAPER STONE -STANDARD MODE";

// random number generator

/* var randomNumber = function () {
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

var main = function (input) {
  var gameHandRandom = randomNumber();
  var gameHand = readGameHandNmbr(gameHandRandom);

  var draw = `The computer chose ${gameHand.toUpperCase()}.<br><br>You chose ${input.toUpperCase()}.<br><br> =It's a DRAW!=`;
  var lose = `The computer chose ${gameHand.toUpperCase()}.<br><br>You chose ${input.toUpperCase()}.<br><br> ~You LOSE~`;
  var win = `The computer chose ${gameHand.toUpperCase()}.<br><br>You chose ${input.toUpperCase()}.<br><br> ***You WIN!***`;
  var errorMessage = `xxxxxxxxx INPUT ERROR xxxxxxxxxx. <br><br> There are only 3 options: 'scissors', 'paper' or 'stone'.`;
  var endingMessage = `<br><br> To play the next game, please type 'scissors', 'paper' or 'stone'.`;

  var myOutputValue = errorMessage;

  var judgement = function (playerHand, computerHand) {
    if (playerHand == computerHand) {
      return "draw";
    }
    if (playerHand == "scissors" && computerHand == "stone") {
      return "lose";
    }
    if (playerHand == "scissors" && computerHand == "paper") {
      return "win";
    }
    if (playerHand == "paper" && computerHand == "scissors") {
      return "lose";
    }
    if (playerHand == "paper" && computerHand == "stone") {
      return "win";
    }
    if (playerHand == "stone" && computerHand == "paper") {
      return "lose";
    }
    if (playerHand == "stone" && computerHand == "scissors") {
      return "win";
    }
  };

  if (judgement(input, gameHand) == "draw") {
    myOutputValue = draw;
  }
  if (judgement(input, gameHand) == "lose") {
    myOutputValue = lose;
  }
  if (judgement(input, gameHand) == "win") {
    myOutputValue = win;
  }

  return myOutputValue + endingMessage;
}; */

//============================================================================================================================================================================

var Code02 = "PROJECT 1: SCISSORS PAPER STONE REVERSED MODE";

var main = function (input) {
  var gameHand = readGameHandNmbr(randomNumber());
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

  if (
    (input.toLowerCase() == "scissors" && gameHand == "paper") ||
    (input.toLowerCase() == "paper" && gameHand == "stone") ||
    (input.toLowerCase() == "stone" && gameHand == "scissors")
  ) {
    myOutputValue = lose;
  }

  if (
    (input.toLowerCase() == "scissors" && gameHand == "stone") ||
    (input.toLowerCase() == "paper" && gameHand == "scissors") ||
    (input.toLowerCase() == "stone" && gameHand == "paper")
  ) {
    myOutputValue = win;
  }

  if (input.toLowerCase() == gameHand) {
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
