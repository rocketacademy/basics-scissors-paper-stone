//Create a basic version of Scissors Paper Stone where the user inputs one of "scissors", "paper", or "stone", the program internally randomly chooses scissors, paper, or stone, and the program outputs whether the user won, the program won, or it's a draw.
//Rules: scissors beats paper, paper beats stone, and stone beats scissors. If both parties choose the same object, it's a draw.

var main = function (input) {
  console.log("User Guess");
  console.log(input);
  var canContinue = validateUserInput(input);
  console.log(canContinue);
  if (!canContinue) {
    myOutputValue = "Try again by inputting either: Scissors, Paper, Stone.";
  }
  if (canContinue) {
    var ComputerNumber = generateNumber();
    console.log("Computer Generated Number");
    console.log(ComputerNumber);
    var ComputerGuess = assignSPS(ComputerNumber);
    console.log("Computer Guess");
    console.log(ComputerGuess);
    var myOutputValue = compareSPS(input, ComputerGuess);
  }
  return myOutputValue;
};

//Number Generator for Computer
var generateNumber = function (max) {
  var max = 3;
  var estRandomNumber = Math.random() * max;
  var randomInteger = Math.floor(estRandomNumber);
  var randomNumber = randomInteger + 1;
  return randomNumber;
};

//Assign Scissors, Paper, Stone
var assignSPS = function (Number) {
  if (Number == 1) {
    return "Scissors";
  }
  if (Number == 2) {
    return "Paper";
  }
  if (Number == 3) {
    return "Stone";
  }
};

//Compare User Input & Computer Guess
var compareSPS = function (UserInput, ComputerInput) {
  if (UserInput == ComputerInput) {
    var gameOutput =
      "Draw! You chose " +
      UserInput +
      " and the Computer chose " +
      ComputerInput +
      ".";
  }
  if (
    (UserInput == "Scissors" && ComputerInput == "Stone") ||
    (UserInput == "Paper" && ComputerInput == "Scissors") ||
    (UserInput == "Stone" && ComputerInput == "Paper")
  ) {
    var gameOutput =
      "You lose! You chose " +
      UserInput +
      " and the Computer chose " +
      ComputerInput +
      ".";
  }
  if (
    (UserInput == "Scissors" && ComputerInput == "Paper") ||
    (UserInput == "Paper" && ComputerInput == "Stone") ||
    (UserInput == "Stone" && ComputerInput == "Scissors")
  ) {
    var gameOutput =
      "You win! You chose " +
      UserInput +
      " and the Computer chose " +
      ComputerInput +
      ".";
  }
  return gameOutput;
};

//Validate User Input
var validateUserInput = function (UserInput) {
  flag =
    UserInput == "Scissors" || UserInput == "Paper" || UserInput == "Stone";
  return flag;
};
