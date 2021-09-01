var numOfTimesUserWon = 0;
var numOfTimesPcWon = 0;
var numOfDraws = 0;
var numOfGamesPlayed = 0;
var pcWinningPercent = 0;
var userWinningPercent = 0;
var userName = "";
var gameMode = "Waiting for UserName";
var gameVersion = "Normal Version";
var reverseCount = 0;
var recentWinner = "";

var main = function (userInput) {
  var myOutputValue = "";

  // If game mode is "Waiting for UserName", store input as user's name into a variable
  if (gameMode == "Waiting for UserName") {
    userName = userInput;
    myOutputValue =
      `Welcome ${userName}! 👋<br ><br >` +
      `Select the version that you would like to play by submitting "Normal" or "Korean".`;
    gameMode = "Version Selection";
    return myOutputValue;
  } else if (gameMode == "Version Selection") {
    // If game mode is in "Version Selection" and no issue with input validation, show user the game instructions
    var resultOfValidityCheck = validityCheck(userInput);
    if (resultOfValidityCheck == true) {
      return introduceGame(userInput);
    }
    return resultOfValidityCheck;
  } else {
    // If game mode is not "Waiting for UserName" or "Version Selection", run
    myOutputValue = generateWinner(userInput);
    return myOutputValue;
  }
};

// ===== Function to introduce game features =====

var introduceGame = function (userInput) {
  var gameInstructions = "";
  gameMode = "Original Mode";
  // If user select Normal version, set game version to Normal
  if (userInput == "Normal") {
    gameVersion = "Normal Version";
    gameInstructions =
      `You have selected the ${gameVersion}.<br ><br >` +
      `Submit "scissors", "paper", "stone", "reversed scissors", "reversed paper" or "reversed stone" to start playing!<br ><br >` +
      `You can also submit "reverse" to reverse the game rules.`;
    return gameInstructions;
  }
  // If user select Korean version, set game version to Korean
  if (userInput == "Korean") {
    gameVersion = "Korean Version";
    gameInstructions =
      `You have selected the ${gameVersion}.<br ><br >` +
      `Submit "scissors", "paper", "stone", "reversed scissors", "reversed paper" or "reversed stone" to start playing!<br ><br >` +
      `You can also submit "reverse" to reverse the game rules.`;
    return gameInstructions;
  }
};

// ===== Function to check input validity =====

var validityCheck = function (userInput) {
  var inputCheckResult = "";
  if (gameMode == "Original Mode") {
    if (
      !(
        userInput == "scissors" ||
        userInput == "paper" ||
        userInput == "stone" ||
        userInput == "reversed scissors" ||
        userInput == "reversed paper" ||
        userInput == "reversed stone" ||
        userInput == "reverse"
      )
    ) {
      inputCheckResult =
        `Hey ${userName}! Please type only "scissors", "paper", "stone",` +
        `"reversed scissors", "reversed paper" or "reversed stone". Try again!`;
      return inputCheckResult;
    }
  } else if (gameMode == "Reversed Mode") {
    if (
      !(
        userInput == "scissors" ||
        userInput == "paper" ||
        userInput == "stone" ||
        userInput == "reverse"
      )
    ) {
      inputCheckResult = `Hey ${userName}! Please type only "scissors", "paper" or "stone". Try again!`;
      return inputCheckResult;
    }
  } else if (gameMode == "Version Selection") {
    if (!(userInput == "Normal" || userInput == "Korean")) {
      inputCheckResult = `Hey ${userName}! Please type only "Normal" or "Korean". Try again!`;
      return inputCheckResult;
    }
  }
  return true;
};

// ===== Function to generate winner =====

var generateWinner = function (userInput) {
  if (validityCheck(userInput) == true) {
    if (userInput == "reverse") {
      return reverseGameRules();
    } else {
      return generateResults(userInput);
    }
  }
  return validityCheck(userInput);
};

// ===== Function to reverse game rules =====

var reverseGameRules = function () {
  reverseCount = reverseCount + 1;
  var reversedResult = "";
  // console.log(`The reversed count after input reverse is ${reverseCount}.`);
  if (reverseCount == 0 || reverseCount % 2 == 1) {
    gameMode = "Reversed Mode";
    // console.log(`The current game mode is ${gameMode}.`);
    reversedResult =
      `Hey ${userName}! You have reversed the game rules!<br ><br >` +
      `Submit "scissors", "paper" or "stone" to continue playing!<br ><br >` +
      `You can also submit "reverse" again to change the game rules back to the original version.`;
    return reversedResult;
  } else {
    gameMode = "Original Mode";
    // console.log(`The current game mode is ${gameMode}.`);
    reversedResult =
      `Hey ${userName}! You have reversed the game rules! Now the game rules are according to the original version.<br ><br >` +
      `Submit "scissors", "paper", "stone", "reversed scissors", "reversed paper" or "reversed stone" to continue playing!<br ><br >` +
      `You can also submit "reverse" again to reverse the game rules.`;
    return reversedResult;
  }
};

// ===== Function to pick an option of either scissors, paper or stone =====
var pickOption = function () {
  var randomOptionNum = Math.floor(Math.random() * 3); // Generate random integer between 0 to 3, exlucing 3
  var selectedOption = "";
  // Alternative way to random pick an option
  // var optionsArray = ["scissors", "paper", "stone"]; // Set the output options in an array
  // var selectedOption = optionsArray[randomOptionNum]; // Use the random integer to select the random item in the array
  if (randomOptionNum == 0) {
    selectedOption = "scissors";
  } else if (randomOptionNum == 1) {
    selectedOption = "paper";
  } else {
    selectedOption = "stone";
  }
  return selectedOption;
};

// ===== Helper functions to calculate winning percentage =====

var calUserWinningPercent = function () {
  var userWinPercent = (numOfTimesUserWon / numOfGamesPlayed) * 100;
  return userWinPercent;
};

var calPcWinningPercent = function () {
  var pcWinPercent = (numOfTimesPcWon / numOfGamesPlayed) * 100;
  return pcWinPercent;
};

//  ===== Helper function to clear all counters to restart the Korean version =====

var clearCounters = function () {
  numOfTimesUserWon = 0;
  numOfTimesPcWon = 0;
  numOfDraws = 0;
  numOfGamesPlayed = 0;
  recentWinner = "";
};

//  ===== Function to determine winner =====

var checkWhoWins = function (userSelection, computerSelection) {
  var results = "";
  numOfGamesPlayed = numOfGamesPlayed + 1;
  // console.log(`Current game mode is ${gameMode}.`);
  if (
    userSelection == computerSelection ||
    (userSelection == "reversed scissors" && computerSelection == "scissors") ||
    (userSelection == "reversed paper" && computerSelection == "paper") ||
    (userSelection == "reversed stone" && computerSelection == "stone")
  ) {
    numOfDraws = numOfDraws + 1;
    results = "draw";
  } else if (
    (userSelection == "scissors" && computerSelection == "paper") ||
    (userSelection == "paper" && computerSelection == "stone") ||
    (userSelection == "stone" && computerSelection == "scissors") ||
    (userSelection == "reversed scissors" && computerSelection == "stone") ||
    (userSelection == "reversed paper" && computerSelection == "scissors") ||
    (userSelection == "reversed stone" && computerSelection == "paper")
  ) {
    if (gameMode == "Original Mode") {
      numOfTimesUserWon = numOfTimesUserWon + 1;
      userWinningPercent = calUserWinningPercent().toFixed(0);
      results = "user";
    } else if (gameMode == "Reversed Mode") {
      numOfTimesPcWon = numOfTimesPcWon + 1;
      pcWinningPercent = calPcWinningPercent().toFixed(0);
      results = "computer";
    }
  } else {
    if (gameMode == "Original Mode") {
      numOfTimesPcWon = numOfTimesPcWon + 1;
      pcWinningPercent = calPcWinningPercent().toFixed(0);
      results = "computer";
    } else if (gameMode == "Reversed Mode") {
      numOfTimesUserWon = numOfTimesUserWon + 1;
      userWinningPercent = calUserWinningPercent().toFixed(0);
      results = "user";
    }
  }
  // console.log(`Results is ${results}`);
  return results;
};

// ===== Function to generate result statements =====

var generateResults = function (userInput) {
  var myOutputValue = "";

  // Generate random option of either scissors, paper or stone
  var outputByProgram = pickOption();

  var whoWins = checkWhoWins(userInput, outputByProgram);

  var choiceStatement = `Hey ${userName}, you chose ${userInput} and the computer chose ${outputByProgram}.`;

  var userWinStatement = `<br ><br >You won! 🙆 <br ><br >`;

  var userLostStatement = `<br ><br >You lose! 🙅<br ><br >`;

  var drawStatement = `<br ><br >It's a draw! 🤷<br ><br >`;

  var gameRecord =
    `<u>Game Record:</u><br>You won: ${numOfTimesUserWon} round(s)<br >` +
    `Computer won: ${numOfTimesPcWon} round(s)<br >Number of draws: ${numOfDraws} round(s)<br ><br >`;

  var originalInstructionStatement =
    `Submit "scissors" "paper", "stone", "reversed scissors", "reversed paper" or "reversed stone" to play another round!<br ><br >` +
    `You can also submit "reverse" to reverse the game rules.`;

  var reversedInstructionStatement =
    `Submit "scissors" "paper" or "stone" to play another round!<br ><br >` +
    `You can also submit "reverse" to reverse the game rules.`;

  var koreanInstructionStatement =
    `Submit "scissors" "paper", "stone", "reversed scissors", "reversed paper" or "reversed stone" to play another game!<br ><br >` +
    `You can also submit "reverse" to reverse the game rules.`;

  var koreanRevInstructionStatement =
    `Submit "scissors" "paper" or "stone" to play another game!<br ><br >` +
    `You can also submit "reverse" to reverse the game rules.`;

  // If game version is Normal and game mode is Original, run the normal and original rules
  if (gameVersion == "Normal Version" && gameMode == "Original Mode") {
    if (whoWins == "user") {
      myOutputValue =
        `${choiceStatement} ${userWinStatement}` +
        `${originalInstructionStatement}<br ><br >${gameRecord}` +
        `You are winning ${userWinningPercent}% of the game! Keep it up!!`;

      return myOutputValue;
    } else if (whoWins == "computer") {
      myOutputValue =
        `${choiceStatement} ${userLostStatement}` +
        `${originalInstructionStatement}<br ><br >${gameRecord}` +
        `The computer is winning ${pcWinningPercent}% of the game. Try harder!`;

      return myOutputValue;
    } else if (whoWins == "draw") {
      myOutputValue =
        `${choiceStatement} ${drawStatement}` +
        `${originalInstructionStatement}<br ><br >${gameRecord}`;

      return myOutputValue;
    }
  }
  // If game version is Normal and game mode is Reversed, run the normal and reversed rules
  else if (gameVersion == "Normal Version" && gameMode == "Reversed Mode") {
    if (whoWins == "user") {
      myOutputValue =
        `${choiceStatement} ${userWinStatement}` +
        `${reversedInstructionStatement}<br ><br >${gameRecord}` +
        `You are winning ${userWinningPercent}% of the game! Keep it up!!`;

      return myOutputValue;
    } else if (whoWins == "computer") {
      myOutputValue =
        `${choiceStatement} ${userLostStatement}` +
        `${reversedInstructionStatement}<br ><br >${gameRecord}` +
        `The computer is winning ${pcWinningPercent}% of the game. Try harder!`;

      return myOutputValue;
    } else if (whoWins == "draw") {
      myOutputValue =
        `${choiceStatement} ${drawStatement}` +
        `${reversedInstructionStatement}<br ><br >${gameRecord}`;

      return myOutputValue;
    }
  }
  // If game version is Korean and game mode is Original, run the Korean and Original rules
  else if (gameVersion == "Korean Version" && gameMode == "Original Mode") {
    if (whoWins == "user") {
      recentWinner = "user";

      myOutputValue =
        `${choiceStatement} ${userWinStatement}` +
        `${originalInstructionStatement}<br ><br >${gameRecord}` +
        `You are the latest winner!`;

      return myOutputValue;
    } else if (whoWins == "computer") {
      recentWinner = "computer";

      myOutputValue =
        `${choiceStatement} ${userLostStatement}` +
        `${originalInstructionStatement}<br ><br >${gameRecord}` +
        `The computer is the latest winner!`;

      return myOutputValue;
    } else if (whoWins == "draw" && recentWinner == "user") {
      myOutputValue =
        `${choiceStatement} ${drawStatement}` +
        `You won this game!<br ><br >${koreanInstructionStatement}<br ><br >${gameRecord}`;

      // Clear all counters to start a new game
      clearCounters();

      return myOutputValue;
    } else if (whoWins == "draw" && recentWinner == "computer") {
      myOutputValue =
        `${choiceStatement} ${drawStatement}` +
        `The computer won this game!<br ><br >${koreanInstructionStatement}<br ><br >${gameRecord}`;

      // Clear all counters to start a new game
      clearCounters();

      return myOutputValue;
    } else {
      myOutputValue = `It's a draw, try again`;
      return myOutputValue;
    }
  }
  // If game version is Korean and game mode is Reversed, run the Korean and Reversed rules
  else if (gameVersion == "Korean Version" && gameMode == "Reversed Mode") {
    if (whoWins == "user") {
      recentWinner = "user";

      myOutputValue =
        `${choiceStatement} ${userWinStatement}` +
        `${reversedInstructionStatement}<br ><br >${gameRecord}` +
        `You are the latest winner!`;

      return myOutputValue;
    } else if (whoWins == "computer") {
      recentWinner = "computer";

      myOutputValue =
        `${choiceStatement} ${userLostStatement}` +
        `${reversedInstructionStatement}<br ><br >${gameRecord}` +
        `The computer is the latest winner!`;

      return myOutputValue;
    } else if (whoWins == "draw" && recentWinner == "user") {
      myOutputValue =
        `${choiceStatement} ${drawStatement}` +
        `You won this game!<br ><br >${koreanRevInstructionStatement}<br ><br >${gameRecord}`;

      // Clear all counters to start a new game
      clearCounters();

      return myOutputValue;
    } else if (whoWins == "draw" && recentWinner == "computer") {
      myOutputValue =
        `${choiceStatement} ${drawStatement}` +
        `The computer won this game!<br ><br >${koreanRevInstructionStatement}<br ><br >${gameRecord}`;

      // Clear all counters to start a new game
      clearCounters();

      return myOutputValue;
    } else {
      myOutputValue = `It's a draw, try again`;
      return myOutputValue;
    }
  }
  return myOutputValue;
};
