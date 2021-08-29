var numOfTimesUserWon = 0;
var numOfTimesPcWon = 0;
var numOfDraws = 0;
var numOfGamesPlayed = 0;
var userName = "";
var gameMode = "Waiting for UserName";
var reverseCount = 0;

var main = function (userInput) {
  var myOutputValue = "";
  console.log(`The current reversed count is ${reverseCount}.`);
  // Store user's name into a variable after user has submitted name before the game starts
  if (gameMode == "Waiting for UserName") {
    userName = userInput;
    gameMode = "Game Introduction";
  }

  // Inform user to start playing by entering either one of the 6 options
  if (gameMode == "Game Introduction") {
    myOutputValue = `Welcome ${userName}! 👋<br ><br >Submit "scissors", "paper", "stone", "reversed scissors", "reversed paper" or "reversed stone" to start playing!<br ><br >You can also submit "reverse" to reverse the game rules.`;
    gameMode = "Original Mode";
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

  // Check the current game mode
  if (userInput == "reverse") {
    reverseCount = reverseCount + 1;
    console.log(`The reversed count after input reverse is ${reverseCount}.`);
    if (reverseCount == 0 || reverseCount % 2 == 1) {
      gameMode = "Reversed Mode";
      console.log(`The current game mode is ${gameMode}.`);
      myOutputValue = `Hey ${userName}! You have entered the reversed game mode.<br ><br >Submit "scissors", "paper" or "stone" to start playing!`;
      return myOutputValue;
    } else {
      gameMode = "Original Mode";
      console.log(`The current game mode is ${gameMode}.`);
      myOutputValue = `Hey ${userName}! You have entered the original game mode.<br ><br >Submit "scissors", "paper", "stone", "reversed scissors", "reversed paper" or "reversed stone" to start playing!`;
      return myOutputValue;
    }
  }

  myOutputValue = generateWinner(userInput);
  return myOutputValue;
};

// ===== Helper function to pick an option of either scissors, paper or stone
var pickOption = function () {
  var randomOptionNum = Math.floor(Math.random() * 3); // Generate random integer between 0 to 3, exlucing 3
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

// ===== Function to check user input against program output to determine winner (game rules) based on original rules =====

var generateWinner = function (userInput) {
  var outputByProgram = pickOption(); // Generate random option of either scissors, paper or stone
  var myOutputValue = "";
  numOfGamesPlayed = numOfGamesPlayed + 1;
  // console.log(outputByProgram);

  var choiceStatement = `Hey ${userName}, you chose ${userInput} and the computer chose ${outputByProgram}.`;
  var originalInstructionStatement = `Submit "scissors" "paper", "stone", "reversed scissors", "reversed paper" or "reversed stone" to play another round!`;
  var reversedInstructionStatement = `Submit "scissors" "paper" or "stone" to play another round!`;

  // If user input is the same as computer choice, it will be a draw regardless of the game mode
  if (
    userInput == outputByProgram ||
    (userInput == "reversed scissors" && outputByProgram == "scissors") ||
    (userInput == "reversed paper" && outputByProgram == "paper") ||
    (userInput == "reversed stone" && outputByProgram == "stone")
  ) {
    numOfDraws = numOfDraws + 1;
    myOutputValue = `${choiceStatement} <br ><br > It's a draw! 🤷<br ><br >${originalInstructionStatement}<br ><br ><u>Game Record:</u><br>You won: ${numOfTimesUserWon} round(s)<br >Computer won: ${numOfTimesPcWon} round(s)<br >Number of draws: ${numOfDraws} round(s)`;
  }

  // If game mode is in original mode, use original rules
  if (gameMode == "Original Mode") {
    if (
      (userInput == "scissors" && outputByProgram == "paper") ||
      (userInput == "paper" && outputByProgram == "stone") ||
      (userInput == "stone" && outputByProgram == "scissors") ||
      (userInput == "reversed scissors" && outputByProgram == "stone") ||
      (userInput == "reversed paper" && outputByProgram == "scissors") ||
      (userInput == "reversed stone" && outputByProgram == "paper")
    ) {
      numOfTimesUserWon = numOfTimesUserWon + 1;
      var userWinningPercent = calUserWinningPercent().toFixed(0);
      myOutputValue = `${choiceStatement} <br ><br > You won! 🙆 <br ><br >${originalInstructionStatement}<br ><br ><u>Game Record:</u><br>You won: ${numOfTimesUserWon} round(s)<br >Computer won: ${numOfTimesPcWon} round(s)<br >Number of draws: ${numOfDraws} round(s)<br ><br >You are winning ${userWinningPercent}% of the game! Keep it up!!`;
    } else if (
      (userInput == "scissors" && outputByProgram == "stone") ||
      (userInput == "paper" && outputByProgram == "scissors") ||
      (userInput == "stone" && outputByProgram == "paper") ||
      (userInput == "reversed scissors" && outputByProgram == "paper") ||
      (userInput == "reversed paper" && outputByProgram == "stone") ||
      (userInput == "reversed stone" && outputByProgram == "scissors")
    ) {
      numOfTimesPcWon = numOfTimesPcWon + 1;
      var pcWinningPercent = calPcWinningPercent().toFixed(0);
      myOutputValue = `${choiceStatement}<br ><br > You lose! 🙅<br ><br >${originalInstructionStatement}<br ><br ><u>Game Record:</u><br>You won: ${numOfTimesUserWon} round(s)<br >Computer won: ${numOfTimesPcWon} round(s)<br >Number of draws: ${numOfDraws} round(s)<br ><br >The computer is winning ${pcWinningPercent}% of the game. Try harder!`;
    }
    return myOutputValue;
  }

  // If game mode is in reversed mode, use reversed rules
  if (gameMode == "Reversed Mode") {
    if (
      (userInput == "scissors" && outputByProgram == "paper") ||
      (userInput == "paper" && outputByProgram == "stone") ||
      (userInput == "stone" && outputByProgram == "scissors")
    ) {
      numOfTimesPcWon = numOfTimesPcWon + 1;
      var pcWinningPercent = calPcWinningPercent().toFixed(0);
      myOutputValue = `${choiceStatement}<br ><br > You lose! 🙅<br ><br >${reversedInstructionStatement}<br ><br ><u>Game Record:</u><br>You won: ${numOfTimesUserWon} round(s)<br >Computer won: ${numOfTimesPcWon} round(s)<br >Number of draws: ${numOfDraws} round(s)<br ><br >The computer is winning ${pcWinningPercent}% of the game. Try harder!`;
    } else if (
      (userInput == "scissors" && outputByProgram == "stone") ||
      (userInput == "paper" && outputByProgram == "scissors") ||
      (userInput == "stone" && outputByProgram == "paper")
    ) {
      numOfTimesUserWon = numOfTimesUserWon + 1;
      var userWinningPercent = calUserWinningPercent().toFixed(0);
      myOutputValue = `${choiceStatement} <br ><br > You won! 🙆 <br ><br >${reversedInstructionStatement}<br ><br ><u>Game Record:</u><br>You won: ${numOfTimesUserWon} round(s)<br >Computer won: ${numOfTimesPcWon} round(s)<br >Number of draws: ${numOfDraws} round(s)<br ><br >You are winning ${userWinningPercent}% of the game! Keep it up!!`;
    }
    return myOutputValue;
  }
};
