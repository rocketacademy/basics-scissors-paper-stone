var numOfTimesUserWon = 0;
var numOfTimesPcWon = 0;
var numOfDraws = 0;
var numOfGamesPlayed = 0;
var userName = "";
var gameMode = "Waiting for UserName";
var gameVersion = "Normal Version";
var reverseCount = 0;
var recentWinner = "";

var main = function (userInput) {
  var myOutputValue = "";
  // console.log(`The current reversed count is ${reverseCount}.`);
  // If game mode is "Waiting for UserName", store input as user's name into a variable
  if (gameMode == "Waiting for UserName") {
    userName = userInput;
    myOutputValue = `Welcome ${userName}! 👋<br ><br >Select the version that you would like to play by submitting "Normal" or "Korean".`;
    gameMode = "Version Selection";
    return myOutputValue;
  }

  // If game mode is in "Version Selection", change to Game Introduction after user has submitted correct input
  if (gameMode == "Version Selection") {
    if (!(userInput == "Normal" || userInput == "Korean")) {
      myOutputValue = `Hey ${userName}! Please type only "Normal" or "Korean". Try again!`;
      return myOutputValue;
    } else {
      gameMode = "Game Introduction";
    }
  }

  // If game mode is "Game Introduction" and user select Normal version, set game version to Normal
  if (gameMode == "Game Introduction" && userInput == "Normal") {
    gameVersion = "Normal Version";
    gameMode = "Original Mode";
    console.log(`The current game version is ${gameVersion}.`);
    console.log(`The current game mode is ${gameMode}.`);
    myOutputValue = `You have selected the ${gameVersion}.<br ><br >Submit "scissors", "paper", "stone", "reversed scissors", "reversed paper" or "reversed stone" to start playing!<br ><br >You can also submit "reverse" to reverse the game rules.`;
    return myOutputValue;
  }
  // If game mode is "Game Introduction" and user select Korean version, set game version to Korean
  if (gameMode == "Game Introduction" && userInput == "Korean") {
    gameVersion = "Korean Version";
    gameMode = "Original Mode";
    console.log(`The current game version is ${gameVersion}.`);
    console.log(`The current game mode is ${gameMode}.`);
    myOutputValue = `You have selected the ${gameVersion}.<br ><br >Submit "scissors", "paper", "stone", "reversed scissors", "reversed paper" or "reversed stone" to start playing!<br ><br >You can also submit "reverse" to reverse the game rules.`;
    return myOutputValue;
  }

  // Input validation - Prompt users if required input is not found.
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
      myOutputValue = `Hey ${userName}! Please type only "scissors", "paper", "stone", "reversed scissors", "reversed paper" or "reversed stone". Try again!`;
      return myOutputValue;
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
      myOutputValue = `Hey ${userName}! Please type only "scissors", "paper" or "stone". Try again!`;
      return myOutputValue;
    }
  }

  // If user input reverse, reverse the game rules
  if (userInput == "reverse") {
    reverseCount = reverseCount + 1;
    // console.log(`The reversed count after input reverse is ${reverseCount}.`);
    if (reverseCount == 0 || reverseCount % 2 == 1) {
      gameMode = "Reversed Mode";
      // console.log(`The current game mode is ${gameMode}.`);
      myOutputValue = `Hey ${userName}! You have reversed the game rules!<br ><br >Submit "scissors", "paper" or "stone" to continue playing!<br ><br >You can also submit "reverse" again to change the game rules back to the original version.`;
      return myOutputValue;
    } else {
      gameMode = "Original Mode";
      // console.log(`The current game mode is ${gameMode}.`);
      myOutputValue = `Hey ${userName}! You have reversed the game rules! Now the game rules are according to the original version.<br ><br >Submit "scissors", "paper", "stone", "reversed scissors", "reversed paper" or "reversed stone" to continue playing!<br ><br >You can also submit "reverse" again to reverse the game rules.`;
      return myOutputValue;
    }
  }

  // If user input is correct, run the game rules to determine winner
  myOutputValue = generateWinner(userInput);
  return myOutputValue;
};

// ===== Helper function to pick an option of either scissors, paper or stone
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
  } else if (randomOptionNum == 2) {
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

//  ===== Helper function to clear all counters to restart the game =====

var clearCounters = function () {
  numOfTimesUserWon = 0;
  numOfTimesPcWon = 0;
  numOfDraws = 0;
  numOfGamesPlayed = 0;
  recentWinner = "";
};

//  ===== Helper function to determine winner =====

var checkWhoWins = function (userSelection, computerSelection) {
  var results = "";
  if (
    userSelection == computerSelection ||
    (userSelection == "reversed scissors" && computerSelection == "scissors") ||
    (userSelection == "reversed paper" && computerSelection == "paper") ||
    (userSelection == "reversed stone" && computerSelection == "stone")
  ) {
    results = "draw";
  } else if (
    (userSelection == "scissors" && computerSelection == "paper") ||
    (userSelection == "paper" && computerSelection == "stone") ||
    (userSelection == "stone" && computerSelection == "scissors") ||
    (userSelection == "reversed scissors" && computerSelection == "stone") ||
    (userSelection == "reversed paper" && computerSelection == "scissors") ||
    (userSelection == "reversed stone" && computerSelection == "paper")
  ) {
    results = "user";
  } else if (
    (userSelection == "scissors" && computerSelection == "stone") ||
    (userSelection == "paper" && computerSelection == "scissors") ||
    (userSelection == "stone" && computerSelection == "paper") ||
    (userSelection == "reversed scissors" && computerSelection == "paper") ||
    (userSelection == "reversed paper" && computerSelection == "stone") ||
    (userSelection == "reversed stone" && computerSelection == "scissors")
  ) {
    results = "computer";
  }
  return results;
};

// ===== Function to check user input against program output to determine winner (game rules) =====

var generateWinner = function (userInput) {
  var outputByProgram = pickOption(); // Generate random option of either scissors, paper or stone
  var myOutputValue = "";
  numOfGamesPlayed = numOfGamesPlayed + 1;
  console.log(`The computer chose ${outputByProgram}`);

  var choiceStatement = `Hey ${userName}, you chose ${userInput} and the computer chose ${outputByProgram}.`;
  var originalInstructionStatement = `Submit "scissors" "paper", "stone", "reversed scissors", "reversed paper" or "reversed stone" to play another round!<br ><br >You can also submit "reverse" to reverse the game rules.`;
  var reversedInstructionStatement = `Submit "scissors" "paper" or "stone" to play another round!<br ><br >You can also submit "reverse" to reverse the game rules.`;
  var koreanInstructionStatement = `Submit "scissors" "paper", "stone", "reversed scissors", "reversed paper" or "reversed stone" to play another game!<br ><br >You can also submit "reverse" to reverse the game rules.`;
  var koreanRevInstructionStatement = `Submit "scissors" "paper" or "stone" to play another game!<br ><br >You can also submit "reverse" to reverse the game rules.`;

  var whoWins = checkWhoWins(userInput, outputByProgram);
  console.log(`The winner is "${whoWins}"`);

  // If game version is Normal and game mode is Original, run the normal and original rules
  if (gameVersion == "Normal Version" && gameMode == "Original Mode") {
    if (whoWins == "user") {
      numOfTimesUserWon = numOfTimesUserWon + 1;
      var userWinningPercent = calUserWinningPercent().toFixed(0);
      myOutputValue = `${choiceStatement} <br ><br > You won! 🙆<br ><br >${originalInstructionStatement}<br ><br ><u>Game Record:</u><br>You won: ${numOfTimesUserWon} round(s)<br >Computer won: ${numOfTimesPcWon} round(s)<br >Number of draws: ${numOfDraws} round(s)<br ><br >You are winning ${userWinningPercent}% of the game! Keep it up!!`;
    } else if (whoWins == "computer") {
      numOfTimesPcWon = numOfTimesPcWon + 1;
      var pcWinningPercent = calPcWinningPercent().toFixed(0);
      myOutputValue = `${choiceStatement}<br ><br > You lose! 🙅<br ><br >${originalInstructionStatement}<br ><br ><u>Game Record:</u><br>You won: ${numOfTimesUserWon} round(s)<br >Computer won: ${numOfTimesPcWon} round(s)<br >Number of draws: ${numOfDraws} round(s)<br ><br >The computer is winning ${pcWinningPercent}% of the game. Try harder!`;
    } else if (whoWins == "draw") {
      numOfDraws = numOfDraws + 1;
      myOutputValue = `${choiceStatement} <br ><br > It's a draw! 🤷<br ><br >${originalInstructionStatement}<br ><br ><u>Game Record:</u><br>You won: ${numOfTimesUserWon} round(s)<br >Computer won: ${numOfTimesPcWon} round(s)<br >Number of draws: ${numOfDraws} round(s)`;
    }
  }
  // If game version is Normal and game mode is Reversed, run the normal and reversed rules
  else if (gameVersion == "Normal Version" && gameMode == "Reversed Mode") {
    if (whoWins == "user") {
      numOfTimesPcWon = numOfTimesPcWon + 1;
      var pcWinningPercent = calPcWinningPercent().toFixed(0);
      myOutputValue = `${choiceStatement}<br ><br > You lose! 🙅<br ><br >${reversedInstructionStatement}<br ><br ><u>Game Record:</u><br>You won: ${numOfTimesUserWon} round(s)<br >Computer won: ${numOfTimesPcWon} round(s)<br >Number of draws: ${numOfDraws} round(s)<br ><br >The computer is winning ${pcWinningPercent}% of the game. Try harder!`;
    } else if (whoWins == "computer") {
      numOfTimesUserWon = numOfTimesUserWon + 1;
      var userWinningPercent = calUserWinningPercent().toFixed(0);
      myOutputValue = `${choiceStatement} <br ><br > You won! 🙆<br ><br >${reversedInstructionStatement}<br ><br ><u>Game Record:</u><br>You won: ${numOfTimesUserWon} round(s)<br >Computer won: ${numOfTimesPcWon} round(s)<br >Number of draws: ${numOfDraws} round(s)<br ><br >You are winning ${userWinningPercent}% of the game! Keep it up!!`;
    } else if (whoWins == "draw") {
      numOfDraws = numOfDraws + 1;
      myOutputValue = `${choiceStatement} <br ><br > It's a draw! 🤷<br ><br >${reversedInstructionStatement}<br ><br ><u>Game Record:</u><br>You won: ${numOfTimesUserWon} round(s)<br >Computer won: ${numOfTimesPcWon} round(s)<br >Number of draws: ${numOfDraws} round(s)`;
    }
  }
  // If game version is Korean and game mode is Original, run the Korean and Original rules
  else if (gameVersion == "Korean Version" && gameMode == "Original Mode") {
    if (whoWins == "user") {
      recentWinner = "user";
      numOfTimesUserWon = numOfTimesUserWon + 1;
      myOutputValue = `${choiceStatement} <br ><br > You won! 🙆<br ><br >${originalInstructionStatement}<br ><br ><u>Game Record:</u><br>You won: ${numOfTimesUserWon} round(s)<br >Computer won: ${numOfTimesPcWon} round(s)<br >Number of draws: ${numOfDraws} round(s)<br ><br >You are the latest winner!`;
    } else if (whoWins == "computer") {
      recentWinner = "computer";
      numOfTimesPcWon = numOfTimesPcWon + 1;
      myOutputValue = `${choiceStatement}<br ><br > You lose! 🙅<br ><br >${originalInstructionStatement}<br ><br ><u>Game Record:</u><br>You won: ${numOfTimesUserWon} round(s)<br >Computer won: ${numOfTimesPcWon} round(s)<br >Number of draws: ${numOfDraws} round(s)<br ><br >The computer is the latest winner!`;
    } else if (whoWins == "draw" && recentWinner == "user") {
      numOfDraws = numOfDraws + 1;
      myOutputValue = `${choiceStatement} <br ><br > It's a draw! 🤷<br ><br >You won this game!<br ><br >${koreanInstructionStatement}<br ><br ><u>Game Record:</u><br>You won: ${numOfTimesUserWon} round(s)<br >Computer won: ${numOfTimesPcWon} round(s)<br >Number of draws: ${numOfDraws} round(s)`;
      // Clear all counters to start a new game
      clearCounters();
    } else if (whoWins == "draw" && recentWinner == "computer") {
      numOfDraws = numOfDraws + 1;
      myOutputValue = `${choiceStatement} <br ><br > It's a draw! 🤷<br ><br >The computer won this game!<br ><br >${koreanInstructionStatement}<br ><br ><u>Game Record:</u><br>You won: ${numOfTimesUserWon} round(s)<br >Computer won: ${numOfTimesPcWon} round(s)<br >Number of draws: ${numOfDraws} round(s)`;
      // Clear all counters to start a new game
      clearCounters();
    } else {
      myOutputValue = `It's a draw, try again`;
    }
  }
  // If game version is Korean and game mode is Reversed, run the Korean and Reversed rules
  else if (gameVersion == "Korean Version" && gameMode == "Reversed Mode") {
    if (whoWins == "user") {
      recentWinner = "computer";
      numOfTimesPcWon = numOfTimesPcWon + 1;
      myOutputValue = `${choiceStatement}<br ><br > You lose! 🙅<br ><br >${reversedInstructionStatement}<br ><br ><u>Game Record:</u><br>You won: ${numOfTimesUserWon} round(s)<br >Computer won: ${numOfTimesPcWon} round(s)<br >Number of draws: ${numOfDraws} round(s)<br ><br >The computer is the latest winner!`;
    } else if (whoWins == "computer") {
      recentWinner = "user";
      numOfTimesUserWon = numOfTimesUserWon + 1;
      myOutputValue = `${choiceStatement} <br ><br > You won! 🙆<br ><br >${reversedInstructionStatement}<br ><br ><u>Game Record:</u><br>You won: ${numOfTimesUserWon} round(s)<br >Computer won: ${numOfTimesPcWon} round(s)<br >Number of draws: ${numOfDraws} round(s)<br ><br >You are the latest winner!`;
    } else if (whoWins == "draw" && recentWinner == "user") {
      numOfDraws = numOfDraws + 1;
      myOutputValue = `${choiceStatement} <br ><br > It's a draw! 🤷<br ><br >You won this game!<br ><br >${koreanRevInstructionStatement}<br ><br ><u>Game Record:</u><br>You won: ${numOfTimesUserWon} round(s)<br >Computer won: ${numOfTimesPcWon} round(s)<br >Number of draws: ${numOfDraws} round(s)`;
      // Clear all counters to start a new game
      clearCounters();
    } else if (whoWins == "draw" && recentWinner == "computer") {
      numOfDraws = numOfDraws + 1;
      myOutputValue = `${choiceStatement} <br ><br > It's a draw! 🤷<br ><br >The computer won this game!<br ><br >${koreanRevInstructionStatement}<br ><br ><u>Game Record:</u><br>You won: ${numOfTimesUserWon} round(s)<br >Computer won: ${numOfTimesPcWon} round(s)<br >Number of draws: ${numOfDraws} round(s)`;
      // Clear all counters to start a new game
      clearCounters();
    } else {
      myOutputValue = `It's a draw, try again`;
    }
  }
  return myOutputValue;
};
