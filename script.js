// scissors beats paper, paper beats stone, and stone beats scissors.
// reversed scissors beats stone, reversed paper beats scissors, and reverse stone beats paper.
// If both parties choose the same object, it's a draw.

var main = function (input) {
  var computerHand = generateHand();
  var myOutputValue = "default";
  var computerHandIcon = "";
  var playerHandIcon = "";
  var gameOutcome = outcome(input, computerHand);

  if (computerHand == "scissors" || computerHand == "reversed scissors") {
    computerHandIcon = "✂️";
  }

  if (computerHand == "stone" || computerHand == "reversed stone") {
    computerHandIcon = "🪨";
  }

  if (computerHand == "paper" || computerHand == "reversed paper") {
    computerHandIcon = "🗒";
  }

  if (input == "scissors" || input == "reversed scissors") {
    playerHandIcon = "✂️";
  }

  if (input == "stone" || input == "reversed stone") {
    playerHandIcon = "🪨";
  }

  if (input == "paper" || input == "reversed paper") {
    playerHandIcon = "🗒";
  }

  console.log(playerHandIcon);

  myOutputValue = `The computer chose ${computerHand} ${computerHandIcon}. <br> You chose ${input} ${playerHandIcon}. <br><br> You ${gameOutcome}! <br><br> Now you can type "scissors" "paper" "stone" "reversed scissors" "reversed paper" or "reversed stone" to play another round!`;

  //console.log(outcome(input, computerHand));

  return myOutputValue;
};

//returns draw, win, or lose
var outcome = function (playerHand, computerHand) {
  if (
    playerHand == computerHand ||
    (playerHand == "reversed scissors" && computerHand == "scissors") ||
    (playerHand == "reversed stone" && computerHand == "stone") ||
    (playerHand == "reversed paper" && computerHand == "paper")
  ) {
    return "draw";
  }

  if (
    playerHand == computerHand ||
    (playerHand == "scissors" && computerHand == "paper") ||
    (playerHand == "paper" && computerHand == "stone") ||
    (playerHand == "stone" && computerHand == "scissors") ||
    (playerHand == "reversed scissors" && computerHand == "stone") ||
    (playerHand == "reversed paper" && computerHand == "scissors") ||
    (playerHand == "reversed stone" && computerHand == "paper")
  ) {
    return "win";
  } else {
    return "lose";
  }
};

// returns a randomly generated value of scissors, paper or stone
var generateHand = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var hand = "";

  if (randomInteger == 0) {
    hand = "scissors";
  }
  if (randomInteger == 1) {
    hand = "paper";
  }
  if (randomInteger == 2) {
    hand = "stone";
  }

  //console.log(hand);

  return hand;
};
