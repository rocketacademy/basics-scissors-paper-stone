// assign numbers to scissors (1), paper (2), stone (3)
// get user input
// get computer's play
// convert user input into integer
// if user input == computer play, it's a draw
// if user input == computer play - 1 OR + 2, user wins
// else, computer wins

var winCount = 0;

var randomNumberGenerator = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal) + 1;
  return randomInteger;
};

var convertSPSstringToInteger = function (SPSstring) {
  if (SPSstring == "scissors") return 1;
  if (SPSstring == "paper") return 2;
  if (SPSstring == "stone") return 3;
  return 4;
};

var userName = "";

var convertSPSIntegerToString = function (SPSInteger) {
  if (SPSInteger == 1) return "scissors";
  if (SPSInteger == 2) return "paper";
  if (SPSInteger == 3) return "stone";
};

var main = function (input) {
  var myOutputValue = "";
  var computerSPSInteger = randomNumberGenerator();
  var computerSPSstring = convertSPSIntegerToString(computerSPSInteger);
  console.log(computerSPSstring);
  var playerSPSinteger = convertSPSstringToInteger(input);
  if (!userName) {
    if (!input) {
      return "Please provide us with your user name.";
    }
    userName = input;
    return "Welcome to scissors, paper, stone!";
  }
  if (playerSPSinteger == 4) {
    myOutputValue = "ERROR. Please input scissors, paper or stone.";
  } else if (playerSPSinteger == computerSPSInteger) {
    myOutputValue = "It's a draw! You both played " + input + ".";
  } else if (
    playerSPSinteger == computerSPSInteger - 1 ||
    playerSPSinteger == computerSPSInteger + 2
  ) {
    winCount = winCount + 1;
    console.log(winCount);
    myOutputValue =
      "Congratulations " +
      userName +
      "! You played " +
      input +
      ", the computer played " +
      computerSPSstring +
      ". You've won " +
      winCount +
      " times in a row.";
  } else {
    myOutputValue =
      "Try again, " +
      userName +
      ". You have lost because you picked " +
      input +
      " and the computer played " +
      computerSPSstring +
      ".";
  }

  return myOutputValue;
};
