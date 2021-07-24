var main = function (userInput) {
  // Generate a random dice number
  var randomDiceNumber = rolldice();

  //Output value is either you lose or you win
  var myOutputValue;

  // If userInput is scissors and it matches 1, update output.
  if (userInput == "scissors") {
    if (randomDiceNumber == 1) {
      myOutputValue = "you draw";
    } else if (randomDiceNumber == 2) myOutputValue = "you win";
    else myOutputValue = "you lose";
  } else if (userInput == "paper") {
    if (randomDiceNumber == 1) myOutputValue = "you lose";
    else if (randomDiceNumber == 2) myOutputValue = "you draw";
    else myOutputValue = "you win";
  } else if (userInput == "stone") {
    if (randomDiceNumber == 1) myOutputValue = "you win";
    else if (randomDiceNumber == 2) myOutputValue = "you lose";
    else myOutputValue = "you draw";
  }
  // Return output.
  return (
    "Computer: " +
    convertNumberToSPS(randomDiceNumber) +
    " VS " +
    userInput +
    " = " +
    myOutputValue
  );
};

var rolldice = function (input) {
  return Math.floor(Math.random() * 3) + 1;
};

var convertNumberToSPS = function (number) {
  var myOutputValue;
  if (number == 1) {
    myOutputValue = "scissors";
  }

  if (number == 2) {
    myOutputValue = "paper";
  }

  if (number == 3) {
    myOutputValue = "stone";
  }
  return myOutputValue;
};
