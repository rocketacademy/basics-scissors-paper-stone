var main = function (input) {
  if (input != "Scissors" && input != "Stone" && input != "Paper") {
    return "Invalid input. Please select either 'Scissors', 'Paper', or 'Stone'.";
  }
  var myOutputValue = "The program won!";
  var gameOutput = randomSPS();
  console.log(gameOutput);
  if (input == gameOutput) {
    myOutputValue = "It is a draw!";
  }
  if (
    (input == "Scissors" && gameOutput == "Paper") ||
    (input == "Paper" && gameOutput == "Stone") ||
    (input == "Stone" && gameOutput == "Scissors")
  ) {
    myOutputValue = "You won!";
  }
  return myOutputValue;
};

var randomSPS = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var diceNumber = randomInteger + 1;
  if (diceNumber == 1) {
    return "Scissors";
  }
  if (diceNumber == 2) {
    return "Paper";
  }
  if (diceNumber == 3) {
    return "Stone";
  }
};
