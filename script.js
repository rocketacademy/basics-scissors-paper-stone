//Create a basic version of Scissors Paper Stone where the user inputs one of "scissors", "paper", or "stone", the program internally randomly chooses scissors, paper, or stone, and the program outputs whether the user won, the program won, or it's a draw. Rules: scissors beats paper, paper beats stone, and stone beats scissors. If both parties choose the same object, it's a draw.
//Add state to your program such that it keeps track of the number of times the user has won and the number of times the computer has won. Output this win-loss record in a format you like in the program output. You can also output the number of draws and/or each party's winning percentage if you'd like.

var userID;

// Win-Loss Record Variables
var userWinCount = 0;
var userDrawCount = 0;
var userPlayCount = 0;
var userLoseCount = 0;
var userwinningPercentage = 0;

var main = function (input) {
  //Begin game after userID has input
  if (userID != undefined) {
    var canContinue = validateUserInput(input);
    console.log("User Guess:", input);
    console.log("canContinue:", canContinue);
    console.log("User ID:", userID);

    //Validate User's input - cannot continue
    if (!canContinue) {
      myOutputValue = "Try again by inputting either: Scissors, Paper, Stone.";
    }
    //Validate User's input - can continue
    if (canContinue) {
      var ComputerNumber = generateNumber();
      var ComputerGuess = assignSPS(ComputerNumber);
      console.log("Computer Generated Number:", ComputerNumber);
      console.log("Computer Guess:", ComputerGuess);

      // Tabulate Win-Loss stats
      userPlayCount = userPlayCount + 1;
      console.log("User play count:", userPlayCount);
      console.log("User win count:", userWinCount);
      console.log("User draw count:", userDrawCount);
      console.log("User lose count:", userLoseCount);

      myOutputValue = compareSPS(input, ComputerGuess) + tabulateStats();
    }
  }

  //Input userID (first time input)
  if (userID == undefined) {
    userID = input;
    var myOutputValue =
      input +
      ", you are now ready to play Scissors, Paper, Stone with me.<br >Please input your guess above to begin.";
  }

  return myOutputValue;
};

//Generate Number for Computer
var generateNumber = function (max) {
  max = 3;
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
  //IF Draw
  if (UserInput == ComputerInput) {
    userDrawCount = userDrawCount + 1;
    var gameOutput =
      "Draw! You chose " +
      UserInput +
      " and the Computer chose " +
      ComputerInput +
      ".";
  }
  //IF Lose
  if (
    (UserInput == "Scissors" && ComputerInput == "Stone") ||
    (UserInput == "Paper" && ComputerInput == "Scissors") ||
    (UserInput == "Stone" && ComputerInput == "Paper")
  ) {
    userLoseCount = userLoseCount + 1;
    gameOutput =
      "You lose! You chose " +
      UserInput +
      " and the Computer chose " +
      ComputerInput +
      ".";
  }
  //IF Win
  if (
    (UserInput == "Scissors" && ComputerInput == "Paper") ||
    (UserInput == "Paper" && ComputerInput == "Stone") ||
    (UserInput == "Stone" && ComputerInput == "Scissors")
  ) {
    userWinCount = userWinCount + 1;
    gameOutput =
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
  var flag =
    UserInput == "Scissors" || UserInput == "Paper" || UserInput == "Stone";
  return flag;
};

//Tabulate Win-Loss Stats
var tabulateStats = function () {
  var userWinningPercentage =
    ((userWinCount + userDrawCount * 0.5) / userPlayCount) * 100;
  console.log("User winning percentage:", userWinningPercentage);
  var userWinningStatistics =
    "<br ><br >" +
    userID +
    "'s Game Statistics:<br > Play Count: " +
    userPlayCount +
    "<br >Win Count: " +
    userWinCount +
    "<br >Lose Count: " +
    userLoseCount +
    "<br >Draw Count: " +
    userDrawCount +
    "<br >Winning Percentage: " +
    userWinningPercentage.toFixed(1) +
    "%";
  return userWinningStatistics;
};
