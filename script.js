var main = function (input) {
  console.log("input");
  console.log(input);
  var computerHand = randomHand();
  var myOutputValue =
    "You entered: " +
    input +
    ". <br> <br> You can only enter scissors ✂️ / paper 🗒 / stone. Type accurately and let's play again!";
  if (input == computerHand) {
    var myOutputValue =
      "Draw! <br> <br> You entered: " +
      input +
      ". <br> Computer played: " +
      computerHand +
      ".";
  }
  if (
    (input == "paper" && computerHand == "stone") ||
    (input == "stone" && computerHand == "scissors") ||
    (input == "scissors" && computerHand == "paper")
  ) {
    var myOutputValue =
      "You win! <br> <br> You entered: " +
      input +
      ". <br> Computer played: " +
      computerHand +
      ".";
  }
  if (
    (input == "stone" && computerHand == "paper") ||
    (input == "scissors" && computerHand == "stone") ||
    (input == "paper" && computerHand == "scissors")
  ) {
    var myOutputValue =
      "You lost! <br> <br> You entered: " +
      input +
      ". <br> Computer played: " +
      computerHand +
      ".";
  }
  return myOutputValue;
};

var randomHand = function (max) {
  var randomNumber = Math.floor(Math.random(max) * 3) + 1;
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
