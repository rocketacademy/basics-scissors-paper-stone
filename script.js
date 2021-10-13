var getRandomOutput = function () {
  // Get random integer from 1 to 3
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal) + 1;

  var randomOutput = "Scissors";

  if (randomInteger == 2) {
    randomOutput = "Stone";
  }

  if (randomInteger == 3) {
    randomOutput = "Paper";
  }

  return randomOutput;
};

var checkInput = function (input) {
  var errorMessage =
    "Incorrect input, please try again. <br > Acceptable Options: 'Scissors' / 'Paper' / 'Stone'";

  if (input == "Scissors" || input == "Stone" || input == "Paper") {
    errorMessage = "";
  }

  return errorMessage;
};

var checkBattleOutcome = function (userInput, programInput) {
  var battleOutcome = "Something went wrong.";

  if (userInput == programInput) {
    battleOutcome = "Draw";
    return battleOutcome;
  }

  if (userInput == "Scissors") {
    if (programInput == "Stone") {
      battleOutcome = "You lose :(";
    } else {
      battleOutcome = "You win! =D";
    }
  } else if (userInput == "Stone") {
    if (programInput == "Paper") {
      battleOutcome = "You lose :(";
    } else {
      battleOutcome = "You win! =D";
    }
  } else {
    if (programInput == "Scissors") {
      battleOutcome = "You lose :(";
    } else {
      battleOutcome = "You win! =D";
    }
  }

  return battleOutcome;
};

var main = function (input) {
  var check = checkInput(input);

  if (check != "") {
    return check;
  }

  var computerDecision = getRandomOutput();
  console.log(computerDecision);

  var battleResult = checkBattleOutcome(input, computerDecision);

  return `Result: ${battleResult}`;
};

// console.log("program decision --> " + getRandomOutput());
// console.log("checking input --> " + checkInput("Paper"));
// console.log("battle outcome --> " + checkBattleOutcome("Scissors", "Paper"));
