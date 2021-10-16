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
  if (gamePlay == "scissors" && input == "stone") {
    myOutputValue =
      "you win! you played: " +
      input +
      ", the computer played: " +
      gamePlay +
      "well done!";
  }
  if (gamePlay == "paper" && input == "stone") {
    myOutputValue =
      "you lose! you played: " +
      input +
      ", the computer played: " +
      gamePlay +
      "try again!";
  }
  if (gamePlay == "scissors" && input == "paper") {
    myOutputValue =
      "you lose! you played: " +
      input +
      ", the computer played: " +
      gamePlay +
      "try again!";
  }
  if (gamePlay == "stone" && input == "paper") {
    myOutputValue =
      "you win! you played: " +
      input +
      ", the computer played: " +
      gamePlay +
      "well done!";
  }
  if (gamePlay == "paper" && input == "scissors") {
    myOutputValue =
      "you win! you played: " +
      input +
      ", the computer played: " +
      gamePlay +
      "well done!";
  }
  if (gamePlay == "stone" && input == "scissors") {
    myOutputValue =
      "you lose! you played: " +
      input +
      ", the computer played: " +
      gamePlay +
      "try again!";
  }
  if (input == gamePlay) {
    myOutputValue =
      "it's a draw! you played: " +
      input +
      ", the computer played: " +
      gamePlay +
      " try again! ";
  }
  if (input != gamePlay) {
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
//i don't know why when i run the code sometimes it works sometimes it doesn't for example when i enter 'stone' and hit submit sometimes it returns my output value on line 78 but sometimes it returns based on the random scenarios.
// also how do i use the lower case function
