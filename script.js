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
    "Incorrect input, please try again. <br > Acceptable Inputs: 'Scissors' / 'Paper' / 'Stone' <br> For reverse game, input 'Reversed ' before your input";

  if (input == "Scissors" || input == "Stone" || input == "Paper") {
    errorMessage = "";
  } else if (
    input == "Reversed Scissors" ||
    input == "Reversed Stone" ||
    input == "Reversed Paper"
  ) {
    errorMessage = "";
  }
  return errorMessage;
};

var checkBattleOutcome = function (userInput, programInput) {
  var reversedGame = false;
  var finalBattleOutcome = "Something went wrong.";
  var userInputForGame = userInput;

  var userWon = true;
  var winMessage = "You win! =D";
  var loseMessage = "You lose :(";

  if (userInput.startsWith("Reversed")) {
    userInputForGame = userInputForGame.replace("Reversed ", "");
    reversedGame = true;
  }

  if (userInputForGame == programInput) {
    finalBattleOutcome = "Draw";
    return finalBattleOutcome;
  }

  if (userInputForGame == "Scissors") {
    if (programInput == "Stone") {
      userWon = false;
    } else {
      userWon = true;
    }
  } else if (userInputForGame == "Stone") {
    if (programInput == "Paper") {
      userWon = false;
    } else {
      userWon = true;
    }
  } else {
    if (programInput == "Scissors") {
      userWon = false;
    } else {
      userWon = true;
    }
  }

  if (reversedGame == true) {
    userWon = !userWon;
  }

  if (userWon == true) {
    finalBattleOutcome = winMessage;
  } else {
    finalBattleOutcome = loseMessage;
  }

  return finalBattleOutcome;
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

console.log("program decision --> " + getRandomOutput());
console.log("checking input --> " + checkInput("Paper"));
console.log(
  "battle outcome --> " + checkBattleOutcome("Reversed Stone", "Paper")
);
