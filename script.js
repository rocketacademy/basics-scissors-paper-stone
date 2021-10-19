//Basic Scissors Paper Stone
//Create a basic version of Scissors Paper Stone where the user inputs one of "scissors", "paper", or "stone", the program internally randomly chooses scissors, paper, or stone, and the program outputs whether the user won, the program won, or it's a draw.
//Rules: scissors beats paper, paper beats stone, and stone beats scissors. If both parties choose the same object, it's a draw.
//Input Validation
//Sometimes the user types bad and types something other than "scissors", "paper", or "stone" during gameplay. Add input validation to kindly let the user know that there are only 3 input options, and ask them to try again.

var record = 0;
var main = function (input) {
  var myOutputValue =
    "you lost! you guessed: " +
    input +
    " you rolled: " +
    randomSPS +
    " current loss record:" +
    record;

  var scissors;
  var paper;
  var stone;

  if (input == randomSPS) {
    myOutputValue = "DRAW!";
  }
  if (input == scissors && randomSPS == paper) {
    myOutputValue = "WIN!";
  }
  if (input == stone && randomSPS == scissors) {
    myOutputValue = "WIN!";
  }
  if (input == paper && randomSPS == stone) {
    myOutputValue = "WIN!";
  }

  if ((myOutputValue = "WIN!")) {
    myOutputValue =
      " you won! you guessed: " +
      input +
      " you rolled: " +
      randomSPS +
      " current win record:" +
      record;
  }
  return `${myOutputValue} you guessed ${input}, the program played ${randomSPS}`;
};

var generateSPS = function () {
  var randomSPS = scissors || paper || stone;
  return randomSPS;
};
