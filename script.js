var randomHand = function (max) {
  var randomNumber = Math.floor(Math.random(max) * 3) + 1;
  var outputHand;
  if (randomNumber == 1) {
    outputHand = "scissors";
  }
  if (randomNumber == 2) {
    outputHand = "paper";
  }
  if (randomNumber == 3) {
    outputHand = "stone";
  }
  console.log("outputHand");
  console.log(outputHand);
  return outputHand;
};

var main = function (input) {
  console.log("input");
  console.log(input);
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
  if (
    input == computerHand ||
    (input == "reversed paper" && computerHand == "paper") ||
    (input == "reversed stone" && computerHand == "stone") ||
    (input == "reversed scissors" && computerHand == "scissors")
  ) {
    myOutputValue = "Draw!" + hands;
  }
  if (
    ((input == "paper" || input == "reversed scissors") &&
      computerHand == "stone") ||
    ((input == "stone" || input == "reversed paper") &&
      computerHand == "scissors") ||
    ((input == "scissors" || input == "reversed stone") &&
      computerHand == "paper")
  ) {
    myOutputValue = "You win!" + hands;
  }
  if (
    ((input == "stone" || input == "reversed scissors") &&
      computerHand == "paper") ||
    ((input == "scissors" || input == "reversed paper") &&
      computerHand == "stone") ||
    ((input == "paper" || input == "reversed stone") &&
      computerHand == "scissors")
  ) {
    myOutputValue = "You lost!" + hands;
  }
  return myOutputValue;
};
