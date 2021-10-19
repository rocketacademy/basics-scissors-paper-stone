//Create a basic version of Scissors Paper Stone where the user inputs one of Scissors, Paper, or Stone, the program internally randomly chooses scissors, paper, or stone, and the program outputs whether the user won, the program won, or it's a draw. Rules: scissors beats paper, paper beats stone, and stone beats scissors. If both parties choose the same object, it's a draw.
//Add state to your program such that it keeps track of the number of times the user has won and the number of times the computer has won. Output this win-loss record in a format you like in the program output. You can also output the number of draws and/or each party's winning percentage if you'd like.

var userID;
var gameMode = "Input User Name";
var lastWinningPlayer = "";

// Win-Loss Record Variables
var userWinCount = 0;
var userDrawCount = 0;
var userPlayCount = 0;
var userLoseCount = 0;
var userwinningPercentage = 0;

// Game Options
var Scissors = "Scissors";
var Paper = "Paper";
var Stone = "Stone";

// Game Mode
var Normal = "Normal";
var Reversed = "Reversed";
var Korean = "Korean";

var main = function (input) {
  // twist.
  var gameModeNumber = generateNumber(12);
  console.log("Game Mode Number: ", gameModeNumber);

  //Change game mode
  if (input == Reversed || (gameModeNumber > 10 && gameMode == Normal)) {
    gameMode = Reversed;
    return (myOutputValue = "You've been UNO REVERSED!");
  } else if (input == Normal || (gameModeNumber > 9 && gameMode == Reversed)) {
    gameMode = Normal;
    return (myOutputValue = "You've been UNO REVERSED!");
  } else if (input == Korean) {
    gameMode = Korean;
    return (myOutputValue = "Annyeonghaseyo~ Time for muk-jji-ppa!");
  }
  console.log("Game Mode: ", gameMode);

  //Begin game after userID has input
  if (userID != undefined) {
    var canContinue = validateUserInput(input);

    //Validate User's input - cannot continue
    if (!canContinue) {
      myOutputValue = "Try again by inputting either: Scissors, Paper, Stone.";
    }
    //Validate User's input - can continue
    if (canContinue) {
      var ComputerNumber = generateNumber(3);
      var ComputerGuess = assignSPS(ComputerNumber);

      // Tabulate Player Count
      userPlayCount = userPlayCount + 1;

      if (gameMode == Normal) {
        myOutputValue = compareSPS(input, ComputerGuess);
      }
      if (gameMode == Reversed) {
        myOutputValue = reverseCompareSPS(input, ComputerGuess);
      }
      if (gameMode == Korean) {
        myOutputValue = compareMJP(input, ComputerGuess);
      }
    }
    return (myOutputValue += tabulateStats());
  }

  //Input userID (first time input)
  if (gameMode == "Input User Name") {
    userID = input;
    gameMode = Normal;
    var myOutputValue =
      input +
      ", you are now ready to play Scissors, Paper, Stone with me.<br >Please input your guess above to begin.<br ><br >If you are feeling adventurous, input Reversed or Korean for other game modes.";
  }
  return myOutputValue;
};

//Generate Number for Computer
var generateNumber = function (max) {
  var estRandomNumber = Math.random() * max;
  var randomInteger = Math.floor(estRandomNumber);
  var randomNumber = randomInteger + 1;
  return randomNumber;
};

//Assign Scissors, Paper, Stone
var assignSPS = function (Number) {
  if (Number == 1) {
    return Scissors;
  }
  if (Number == 2) {
    return Paper;
  }
  if (Number == 3) {
    return Stone;
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
    (UserInput == Scissors && ComputerInput == Stone) ||
    (UserInput == Paper && ComputerInput == Scissors) ||
    (UserInput == Stone && ComputerInput == Paper)
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
    (UserInput == Scissors && ComputerInput == Paper) ||
    (UserInput == Paper && ComputerInput == Stone) ||
    (UserInput == Stone && ComputerInput == Scissors)
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

//Reverse-Compare User Input & Computer Guess
var reverseCompareSPS = function (UserInput, ComputerInput) {
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
  //IF Win
  if (
    (UserInput == Scissors && ComputerInput == Stone) ||
    (UserInput == Paper && ComputerInput == Scissors) ||
    (UserInput == Stone && ComputerInput == Paper)
  ) {
    userWinCount = userWinCount + 1;
    gameOutput =
      "You reverse-Win! You chose " +
      UserInput +
      " and the Computer chose " +
      ComputerInput +
      ".";
  }
  //IF Lose
  if (
    (UserInput == Scissors && ComputerInput == Paper) ||
    (UserInput == Paper && ComputerInput == Stone) ||
    (UserInput == Stone && ComputerInput == Scissors)
  ) {
    userLoseCount = userLoseCount + 1;
    gameOutput =
      "You reverse-Lose! You chose " +
      UserInput +
      " and the Computer chose " +
      ComputerInput +
      ".";
  }
  return gameOutput;
};

// Korean muk-jji-ppa
var compareMJP = function (UserInput, ComputerInput) {
  //IF Lose
  if (
    (UserInput == Scissors && ComputerInput == Stone) ||
    (UserInput == Paper && ComputerInput == Scissors) ||
    (UserInput == Stone && ComputerInput == Paper)
  ) {
    lastWinningPlayer = "Computer";
    gameOutput =
      "Muk-jji-ppa! You chose " +
      UserInput +
      " and the Computer chose " +
      ComputerInput +
      ".";
  }
  //IF Win
  else if (
    (UserInput == Scissors && ComputerInput == Paper) ||
    (UserInput == Paper && ComputerInput == Stone) ||
    (UserInput == Stone && ComputerInput == Scissors)
  ) {
    lastWinningPlayer = userID;
    gameOutput =
      "Muk-jji-ppa! You chose " +
      UserInput +
      " and the Computer chose " +
      ComputerInput +
      ".";
  }
  //IF Draw
  else if (UserInput == ComputerInput && lastWinningPlayer == userID) {
    userWinCount = userWinCount + 1;
    lastWinningPlayer == "";
    var gameOutput =
      "You Win! You chose " +
      UserInput +
      " and the Computer chose " +
      ComputerInput +
      ", and you won the previous round too.";
  } else if (UserInput == ComputerInput && lastWinningPlayer == "Computer") {
    userLoseCount = userLoseCount + 1;
    lastWinningPlayer = "";
    var gameOutput =
      "You lost! You chose " +
      UserInput +
      " and the Computer chose " +
      ComputerInput +
      ", and you lost the previous round too.";
  }
  return gameOutput;
};

//Validate User Input
var validateUserInput = function (UserInput) {
  var flag = UserInput == Scissors || UserInput == Paper || UserInput == Stone;
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
