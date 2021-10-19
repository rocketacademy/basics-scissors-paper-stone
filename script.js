var main = function (input) {
  var gamePlay = "";
  var lowercaseInput = input.toLowerCase();
  var gameNumber = generateRandomNumber();
  if (gameNumber == 1) {
    gamePlay = "scissors";
  }
  if (gameNumber == 2) {
    gamePlay = "paper";
  }
  if (gameNumber == 3) {
    gamePlay = "stone";
  }
  var myOutputValue =
    "you lose! you played: " +
    input +
    ", the computer played: " +
    gamePlay +
    ", try again! ";

  if (
    (gamePlay == "scissors" && lowercaseInput == "stone") ||
    (gamePlay == "stone" && lowercaseInput == "paper") ||
    (gamePlay == "paper" && lowercaseInput == "scissors")
  ) {
    myOutputValue =
      "you win! you played: " +
      input +
      ", the computer played: " +
      gamePlay +
      "well done!";
  }

  if (lowercaseInput == gamePlay) {
    myOutputValue =
      "it's a draw! you played: " +
      input +
      ", the computer played: " +
      gamePlay +
      " try again! ";
  }
  if (
    !(
      lowercaseInput === "scissors" ||
      lowercaseInput === "paper" ||
      lowercaseInput === "stone"
    )
  ) {
    myOutputValue =
      "to start the game, please only input scissors, paper or stone.";
  }
  return myOutputValue;
};
var generateRandomNumber = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var randomNumber = randomInteger + 1;
  return randomNumber;
};
