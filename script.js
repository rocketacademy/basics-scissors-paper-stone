//Scissors, paper, stone
var userWinCount = 0;
var computerWinCount = 0;
var drawsCount = 0;
var userWinningPercentage = 0;
var computerWinningPercentage = 0;
var totalGameCount = 0;

var calculatePercentage = function (winCount, totalCount) {
  return ((winCount / totalCount) * 100).toFixed(2);
};

var gameMode = function (userInput) {
  var mode = "invalid";

  if (userInput == "scissors" || userInput == "paper" || userInput == "stone") {
    mode = "normal";
  } else if (
    userInput == "reversed scissors" ||
    userInput == "reversed paper" ||
    userInput == "reversed stone"
  ) {
    mode = "reverse";
  }

  return mode;
};

var testingConditions = function (userChoice, computerChoice) {
  if (
    (userChoice == "scissors" && computerChoice == "paper") ||
    (userChoice == "paper" && computerChoice == "stone") ||
    (userChoice == "stone" && computerChoice == "scissors") ||
    (userChoice == "reversed scissors" && computerChoice == "paper") ||
    (userChoice == "reversed paper" && computerChoice == "stone") ||
    (userChoice == "reversed stone" && computerChoice == "scissors")
  ) {
    return true;
  } else {
    return false;
  }
};

//function which generates a random computer choice
var randomComputerChoiceGenerator = function () {
  var computerChoice = "";
  var randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber == 1) {
    computerChoice = "scissors";
  }

  if (randomNumber == 2) {
    computerChoice = "paper";
  }
  if (randomNumber == 3) {
    computerChoice = "stone";
  }

  return computerChoice;
};

var checkForDrawInNormalMode = function (userChoice, computerChoice) {
  if (userChoice == computerChoice) {
    return true;
  } else {
    return false;
  }
};

var checkForDrawInReversedMode = function (userChoice, computerChoice) {
  if (
    (userChoice == "reversed scissors" && computerChoice == "scissors") ||
    (userChoice == "reversed paper" && computerChoice == "paper") ||
    (userChoice == "reversed stone" && computerChoice == "stone")
  ) {
    return true;
  } else {
    return false;
  }
};

var formatResult = function (
  myOutputValue,
  userChoice,
  computerChoice,
  userWinCount,
  computerWinCount,
  drawsCount
) {
  var result =
    "The computer chose " +
    computerChoice +
    ".<br>" +
    " You chose " +
    userChoice +
    ".<br>";

  var winLossRecord =
    "You have won " +
    userWinCount +
    " times." +
    "<br>" +
    "Your winning rate is " +
    userWinningPercentage +
    "%" +
    "<br>" +
    "Computer has won " +
    computerWinCount +
    " times." +
    "<br>" +
    "Computer winning rate is " +
    computerWinningPercentage +
    "%" +
    "<br>" +
    " Number of draws is " +
    drawsCount;

  if (myOutputValue == "User wins") {
    result = result + "Wow!! You Win Congrats !!" + "<br>" + winLossRecord;
  } else if (myOutputValue == "Computer wins") {
    result =
      result +
      "You lose! Bummer." +
      "<br>" +
      winLossRecord +
      "<br>" +
      "Now you can type 'scissors' 'paper' or 'stone' to play another round in normal mode!" +
      "<br>" +
      "Or type 'reversed scissors' , 'reversed paper' or 'reversed stone' to play in reversed mode!";
  } else if (myOutputValue == "Its a draw") {
    result = result + " Its a Draw!!" + "<br>" + winLossRecord;
  } else {
    result =
      "Invalid input. Try again!! please enter a valid choice. Enter either 'scissors', 'paper' or 'stone' to play in normal mode." +
      "<br>" +
      "Or 'reversed scissors' , 'reversed paper' or 'reversed stone' to play in reversed mode";
  }
  return result;
};

var main = function (input) {
  var myOutputValue = "";
  var mode = gameMode(input);

  var userChoice = input;
  var computerChoice = randomComputerChoiceGenerator();

  //if the game mode is normal
  if (mode == "normal") {
    totalGameCount = totalGameCount + 1;

    if (checkForDrawInNormalMode(userChoice, computerChoice)) {
      myOutputValue = "Its a draw";
      drawsCount = drawsCount + 1;
      userWinningPercentage = calculatePercentage(userWinCount, totalGameCount);
      computerWinningPercentage = calculatePercentage(
        computerWinCount,
        totalGameCount
      );
    } else if (testingConditions(userChoice, computerChoice)) {
      myOutputValue = "User wins";
      userWinCount = userWinCount + 1;
      userWinningPercentage = calculatePercentage(userWinCount, totalGameCount);
      computerWinningPercentage = calculatePercentage(
        computerWinCount,
        totalGameCount
      );
    } else {
      myOutputValue = "Computer wins";
      computerWinCount = computerWinCount + 1;
      userWinningPercentage = calculatePercentage(userWinCount, totalGameCount);
      computerWinningPercentage = calculatePercentage(
        computerWinCount,
        totalGameCount
      );
    }
  } // end of normal mode

  //if the game mode is reversed
  else if (mode == "reverse") {
    totalGameCount = totalGameCount + 1;
    if (checkForDrawInReversedMode(userChoice, computerChoice)) {
      myOutputValue = "Its a draw";
      drawsCount = drawsCount + 1;
      userWinningPercentage = calculatePercentage(userWinCount, totalGameCount);
      computerWinningPercentage = calculatePercentage(
        computerWinCount,
        totalGameCount
      );
    } else if (testingConditions(userChoice, computerChoice)) {
      myOutputValue = "Computer wins";
      computerWinCount = computerWinCount + 1;
      userWinningPercentage = calculatePercentage(userWinCount, totalGameCount);
      computerWinningPercentage = calculatePercentage(
        computerWinCount,
        totalGameCount
      );
    } else {
      myOutputValue = "User wins";
      userWinCount = userWinCount + 1;
      userWinningPercentage = calculatePercentage(userWinCount, totalGameCount);
      computerWinningPercentage = calculatePercentage(
        computerWinCount,
        totalGameCount
      );
    }
  } //end of reverse mode

  //if the gamemode is invalid
  else {
    myOutputValue = "Invalid input";
  } //end of invalid mode

  return formatResult(
    myOutputValue,
    userChoice,
    computerChoice,
    userWinCount,
    computerWinCount,
    drawsCount,
    userWinningPercentage,
    computerWinningPercentage
  );
}; // end of main
