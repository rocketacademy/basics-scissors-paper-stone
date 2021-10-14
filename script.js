// Computer generates random Number
var randomNumber = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  return randomInteger;
};

//Computer assigns number to "scissors", "paper", or "stone"
var computerGuesses = function () {
  var computerGuess = "";
  var guess = randomNumber();
  if (guess == 0) {
    computerGuess = "scissors";
  }
  if (guess == 1) {
    computerGuess = "paper";
  }
  if (guess == 2) {
    computerGuess = "stone";
  }
  return computerGuess;
};

// User input "scissors", "paper", or "stone";
// if user input beats computer's, user win
var main = function (input) {
  input = input.toLowerCase();
  var computersGuess = computerGuesses();
  if (
    (computersGuess == "paper" && input == "scissors") ||
    (computersGuess == "stone" && input == "paper") ||
    (computersGuess == "scissors" && input == "stone")
  ) {
    return (
      "The Computer chose " +
      computersGuess +
      " and you chose " +
      input +
      ". You won! Now you can type scissors, paper or stone to play another round!."
    );
  }
  return (
    "The Computer chose " +
    computersGuess +
    " and you chose " +
    input +
    ". You lose! Bummer. Now you can type scissors, paper or stone to play another round!."
  );
};
