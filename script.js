var SCISSORS = "scissors";
var PAPER = "paper";
var STONE = "stone";
var numOfUserWins = 0;
var numOfComputerWins = 0;
var numOfDraws = 0;
var userName = "";
var myOutputValue = "";
var userWin = "";
var outputMessage = "";

var getRandomNumber = function () {
  var randomNumber = Math.floor(Math.random() * 3) + 1;
  return randomNumber;
};
var computersRandomWord = function () {
  var computersRandomNumber = getRandomNumber();
  if (computersRandomNumber == 1) {
    return SCISSORS;
  }
  if (computersRandomNumber == 2) {
    return PAPER;
  }
  if (computersRandomNumber == 3) {
    return STONE;
  }
};

var validatingTheInput = function (input) {
  if (input != SCISSORS && input != PAPER && input != STONE) {
    return true;
  }
  return false;
};

var didPlayerWin = function (input) {
  console.log("this is input " + input);
  console.log("this is program choice " + programChoice);
  if (
    (input == SCISSORS && programChoice == PAPER) ||
    (input == PAPER && programChoice == STONE) ||
    (input == STONE && programChoice == SCISSORS)
  ) {
    return 1;
  } else if (
    (input == SCISSORS && programChoice == STONE) ||
    (input == PAPER && programChoice == SCISSORS) ||
    (input == STONE && programChoice == PAPER)
  ) {
    return 2;
  } else if (input == programChoice) {
    return 3;
  }
};

var getDefaultOutputMessage = function (input) {
  userWin = didPlayerWin(input);
  console.log("user lost is" + userWin);
  if (userWin == 1) {
    numOfUserWins = numOfUserWins + 1;
    myOutputValue =
      "Congrats " +
      userName +
      "! You won. Your current record is " +
      numOfUserWins +
      " wins, " +
      numOfComputerWins +
      " losses, and " +
      numOfDraws +
      " draws. Up for another game?";
  }
  if (userWin == 2) {
    numOfComputerWins = numOfComputerWins + 1;
    myOutputValue =
      "Oh no, you lost " +
      userName +
      ". Your current record is " +
      numOfUserWins +
      " wins, " +
      numOfComputerWins +
      " losses, and " +
      numOfDraws +
      " draws. Wanna try again?";
  }
  if (userWin == 3) {
    numOfDraws = numOfDraws + 1;
    myOutputValue =
      "It's a draw! Your current record is " +
      numOfUserWins +
      " wins, " +
      numOfComputerWins +
      " losses, and " +
      numOfDraws +
      " draws.";
  }
  return myOutputValue;
};

var getReverseOutputMessage = function (input) {
  userLose = didPlayerWin(input);
  console.log("user lost is" + userLose);
  if (userWin == 1) {
    numOfComputerWins = numOfComputerWins + 1;
    myOutputValue =
      "Oh no, you lost " +
      userName +
      ". Your current record is " +
      numOfUserWins +
      " wins, " +
      numOfComputerWins +
      " losses, and " +
      numOfDraws +
      " draws. Wanna try again?";
  }
  if (userWin == 2) {
    numOfUserWins = numOfUserWins + 1;
    myOutputValue =
      "Congrats " +
      userName +
      "! You won. Your current record is " +
      numOfUserWins +
      " wins, " +
      numOfComputerWins +
      " losses, and " +
      numOfDraws +
      " draws. Up for another game?";
  }
  if (userWin == 3) {
    numOfDraws = numOfDraws + 1;
    myOutputValue =
      "It's a draw! Your current record is " +
      numOfUserWins +
      " wins, " +
      numOfComputerWins +
      " losses, and " +
      numOfDraws +
      " draws.";
  }
  return myOutputValue;
};

var welcomeUser = function (input) {
  if ((userName = input)) {
    return (
      "Hi " +
      userName +
      "! Ready to play? <br> Press the 'Normal' button to play the normal SPS or 'Reverse' to play the reverse mode!"
    );
  }
  return "Welcome to Scissors-Paper-Stone! Please enter your name.";
};

// this runs when user click the Normal button
var normalMode = function (input) {
  if (input == "") {
    return (
      "Welcome " +
      userName +
      " to the Normal Mode! <br> Please enter one of the three words: scissors, paper, or stone."
    );
  }
  programChoice = computersRandomWord();
  outputMessage = getDefaultOutputMessage(input);
  if (validatingTheInput(input)) {
    return (
      "Whoops, seems like we can't process your input " +
      userName +
      ". Please input one of these choices below: scissors, paper, stone."
    );
  }
  // define sps normal rules
  if (userWin == 1) {
    return outputMessage;
  } else if (userWin == 2) {
    return outputMessage;
  } else if (userWin == 3) {
    return outputMessage;
  }
  return myOutputValue;
};

var reverseMode = function (input) {
  if (input == "") {
    return (
      "Welcome " +
      userName +
      " to the Reverse Mode. <br> Please enter one of the three words: scissors, paper, or stone."
    );
  }
  programChoice = computersRandomWord();
  outputMessage = getReverseOutputMessage(input);
  if (validatingTheInput(input)) {
    return (
      "Whoops, seems like we can't process your input " +
      userName +
      ". Please input one of these choices below: scissors, paper, stone."
    );
  }
  // define sps normal rules
  if (userWin == 1) {
    return outputMessage;
  } else if (userWin == 2) {
    return outputMessage;
  } else if (userWin == 3) {
    return outputMessage;
  }
  return myOutputValue;
};

var getMsg = "get starting msg";
var computerChoose = "let computer choose for player";
var MODE = getMsg;

var computerChooseMode = function (input) {
  if (MODE == getMsg) {
    MODE = computerChoose;
    return (
      "Welcome " +
      userName +
      " to the Computer vs Computer Mode. <br> In this mode, computer will choose for you and you only need to press the button! <br> Let's start!"
    );
  }
  if (MODE == computerChoose) {
    input = computersRandomWord(getRandomNumber());
    console.log("input:" + input);
    programChoice = computersRandomWord(getRandomNumber());
    console.log("program choice: " + programChoice);
    outputMessage = getDefaultOutputMessage(input);

    choiceInfo =
      "Computer choose " +
      input +
      " for you and computer's choice is " +
      programChoice +
      ". ";
    // define sps normal rules
    if (userWin == 1) {
      return choiceInfo + outputMessage;
    } else if (userWin == 2) {
      return choiceInfo + outputMessage;
    } else if (userWin == 3) {
      return choiceInfo + outputMessage;
    }

    return myOutputValue;
  }
  MODE = computerChoose;
};
