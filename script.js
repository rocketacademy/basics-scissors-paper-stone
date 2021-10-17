//Create a basic version of Scissors Paper Stone where the user inputs one of "scissors", "paper", or "stone", the program internally randomly chooses scissors, paper, or stone, and the program outputs whether the user won, the program won, or it's a draw. Rules: scissors beats paper, paper beats stone, and stone beats scissors. If both parties choose the same object, it's a draw.
//Add state to your program such that it keeps track of the number of times the user has won and the number of times the computer has won. Output this win-loss record in a format you like in the program output. You can also output the number of draws and/or each party's winning percentage if you'd like.

var main = function (input) {
  var canContinue = validateUserInput(input);
  console.log("User Guess:", input);
  console.log("canContinue:", canContinue);

  //Validate User's input - cannot continue
  if (!canContinue) {
    var myOutputValue =
      "Try again by inputting either: Scissors, Paper, Stone.";
  }
  //Validate User's input - can continue
  if (canContinue) {
    var ComputerNumber = generateNumber();
    var ComputerGuess = assignSPS(ComputerNumber);
    myOutputValue = compareSPS(input, ComputerGuess);
    console.log("Computer Generated Number:", ComputerNumber);
    console.log("Computer Guess:", ComputerGuess);
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
  //Draw
  if (UserInput == ComputerInput) {
    var gameOutput =
      "Draw!<br > You chose " +
      UserInput +
      " and the Computer chose " +
      ComputerInput +
      ".";
  }
  //Lose
  if (
    (UserInput == "Scissors" && ComputerInput == "Stone") ||
    (UserInput == "Paper" && ComputerInput == "Scissors") ||
    (UserInput == "Stone" && ComputerInput == "Paper")
  ) {
    gameOutput =
      "You lose!<br > You chose " +
      UserInput +
      " and the Computer chose " +
      ComputerInput +
      ".";
  }
  //Win
  if (
    (UserInput == "Scissors" && ComputerInput == "Paper") ||
    (UserInput == "Paper" && ComputerInput == "Stone") ||
    (UserInput == "Stone" && ComputerInput == "Scissors")
  ) {
    gameOutput =
      "You win! <br > You chose " +
      UserInput +
      " and the Computer chose " +
      ComputerInput +
      ".";
  }
  return gameOutput;
};

//Validate User Input
var validateUserInput = function (UserInput) {
  var flag =
    UserInput == "Scissors" || UserInput == "Paper" || UserInput == "Stone";
  return flag;
};
