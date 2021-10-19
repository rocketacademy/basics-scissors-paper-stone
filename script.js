var userWinCount = 0;
var computerWinCount = 0;
var drawsCount = 0;
var userWinningPercentage = 0;
var computerWinningPercentage = 0;
var totalGameCount = 0;

var main = function (input) {
  var myOutputValue = "";
  var mode = gameMode(input);
  console.log("Game mode :" + mode);

  var userChoice = input;
  var computerChoice = randomComputerChoiceGenerator();

  console.log("user choice = " + userChoice);
  console.log("computer choice = " + computerChoice);

  //if the game mode is normal
  if (mode == "normal") {
    console.log(
      "draw? " + checkForDrawInNormalMode(userChoice, computerChoice)
    );

    console.log("normal");
    console.log(
      "check if user wins " + testingConditions(userChoice, computerChoice)
    );

    totalGameCount = totalGameCount + 1;
    if (checkForDrawInNormalMode(userChoice, computerChoice)) {
      myOutputValue = "Its a draw";
      drawsCount = drawsCount + 1;
    } else if (testingConditions(userChoice, computerChoice)) {
      myOutputValue = "User wins";
      userWinCount = userWinCount + 1;
      userWinningPercentage = (userWinCount / totalGameCount) * 100;
      userWinningPercentage = userWinningPercentage.toFixed(2);
    } else {
      myOutputValue = "Computer wins";
      computerWinCount = computerWinCount + 1;
      computerWinningPercentage = (computerWinCount / totalGameCount) * 100;
      computerWinningPercentage = computerWinningPercentage.toFixed(2);
    }
  } // end of normal mode

  //if the game mode is reversed
  else if (mode == "reverse") {
    console.log("reverse");
    console.log(
      "draw reversed ? " +
        checkForDrawInReversedMode(userChoice, computerChoice)
    );

    totalGameCount = totalGameCount + 1;
    if (checkForDrawInReversedMode(userChoice, computerChoice)) {
      myOutputValue = "Its a draw";
      drawsCount = drawsCount + 1;
    } else if (testingConditions(userChoice, computerChoice)) {
      myOutputValue = "Computer wins";
      computerWinCount = computerWinCount + 1;
      computerWinningPercentage = (computerWinCount / totalGameCount) * 100;
      computerWinningPercentage = computerWinningPercentage.toFixed(2);
    } else {
      myOutputValue = "User wins";
      userWinCount = userWinCount + 1;
      userWinningPercentage = (userWinCount / totalGameCount) * 100;
      userWinningPercentage = userWinningPercentage.toFixed(2);
    }
  } //end of reverse mode

  //if the gamemode is invalid
  else {
    console.log("invalid");
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
  console.log(mode);
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
